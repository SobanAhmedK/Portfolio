import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";
import { chatContext } from "../data/chatContext";

// Prefer the in-repo portfolio context. Optional env override if set.
const CONTEXT = import.meta.env.VITE_OPENAI_CONTEXT || chatContext;

function ChatBot() {
  const [input,     setInput]     = useState("");
  const [messages,  setMessages]  = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [isOpen,    setIsOpen]    = useState(false);
  const [model,     setModel]     = useState(null);
  // First few seconds: oversized + hotter glow so visitors notice it immediately
  const [spotlight, setSpotlight] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    // Free-tier friendly Flash model; 3.8 can be overloaded
    setModel(
      genAI.getGenerativeModel({
        model: "gemini-3.6-flash",
        systemInstruction: CONTEXT,
      })
    );
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setSpotlight(false), 5200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, isStreaming]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !model || isLoading || isStreaming) return;

    const userText = input.trim();
    setMessages((prev) => [...prev, { text: userText, isBot: false }]);
    setInput("");
    setIsLoading(true);

    try {
      const recent = messages.length < 10 ? messages : messages.slice(-9);
      const history = recent.map((msg) => ({
        role:  msg.isBot ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      const chat = model.startChat({
        history,
        // Cap output for free-tier quota and snappier replies
        generationConfig: { maxOutputTokens: 800, temperature: 0.3 },
      });

      const result = await chat.sendMessageStream(userText);
      let started = false;
      let full = "";

      for await (const chunk of result.stream) {
        let piece = "";
        try {
          piece = chunk.text();
        } catch {
          continue;
        }
        if (!piece) continue;

        full += piece;

        if (!started) {
          started = true;
          setIsLoading(false);
          setIsStreaming(true);
          setMessages((prev) => [...prev, { text: full, isBot: true }]);
        } else {
          setMessages((prev) => {
            const next = [...prev];
            next[next.length - 1] = { text: full, isBot: true };
            return next;
          });
        }
      }

      if (!started) {
        setMessages((prev) => [
          ...prev,
          { text: "I didn't get a reply that time — try asking again.", isBot: true },
        ]);
      }
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        {
          text: "Unable to fetch a response. The free API may be busy — please try again in a moment.",
          isBot: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      setIsStreaming(false);
    }
  };

  return (
    <>
      {/*
        Professional chat FAB: fixed bottom-right (Intercom-style).
        Stays visible while scrolling, never covers the hero name.
      */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-[200]"
          style={{
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
            transformOrigin: "bottom right",
          }}
          initial={{ opacity: 0, scale: 0.55, y: 36 }}
          animate={{
            opacity: 1,
            scale: spotlight ? 1.22 : 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
            delay: spotlight ? 0.85 : 0,
            mass: 0.85,
          }}
        >
          {/* Expanding ripples during spotlight */}
          {spotlight && (
            <>
              <span className="ai-fab-ripple" aria-hidden />
              <span className="ai-fab-ripple" aria-hidden />
            </>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Ask AI about me"
            className={`ai-fab ai-fab-glow group relative flex items-center gap-2.5 bg-brand-coral text-brand-bg pl-3.5 pr-4 py-3 sm:pl-4 sm:pr-5 sm:py-3.5 font-inter font-[600] text-[13px] sm:text-sm tracking-wide hover:brightness-110 transition-[filter,transform] duration-200 ${
              spotlight ? "is-spotlight" : ""
            }`}
          >
            <span className="relative z-[1] flex h-8 w-8 items-center justify-center bg-brand-bg/15">
              <MessageCircle className="h-4 w-4" />
            </span>
            <span className="relative z-[1] flex flex-col items-start leading-tight text-left">
              <span>Ask AI about me</span>
              <span className="font-inter font-[400] text-[10px] sm:text-[11px] text-brand-bg/70 tracking-wide">
                Instant answers
              </span>
            </span>
          </button>
        </motion.div>
      )}

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-brand-bg/80 backdrop-blur-md flex justify-center items-center p-4 z-[300]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="w-full max-w-3xl h-[78vh] max-h-[900px] bg-brand-card border border-brand-border shadow-2xl rounded-none flex flex-col"
            initial={{ scale: 0.94 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b border-brand-border px-6 py-4">
              <h3 className="font-syne font-[600] text-lg text-brand-fg tracking-[-0.02em]">
                Chat with Soban
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-brand-muted hover:text-brand-coral transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 p-6">
              {messages.length === 0 && (
                <p className="font-inter text-[13px] font-[300] text-brand-muted text-center mt-8">
                  Ask me about my experience, projects, or skills.
                </p>
              )}
              {messages.map((msg, i) => {
                const isLastBot =
                  msg.isBot && i === messages.length - 1 && isStreaming;
                return (
                  <div
                    key={i}
                    className={`p-3.5 max-w-lg font-inter text-[13px] font-[300] leading-relaxed whitespace-pre-wrap ${
                      msg.isBot
                        ? "bg-brand-bg text-brand-fg/90 border border-brand-border"
                        : "bg-brand-coral text-brand-bg ml-auto"
                    }`}
                  >
                    {msg.text}
                    {isLastBot && (
                      <span className="inline-block w-[2px] h-[0.9em] ml-0.5 align-[-0.1em] bg-brand-coral animate-pulse" />
                    )}
                  </div>
                );
              })}
              {isLoading && (
                <div className="bg-brand-bg border border-brand-border p-3.5 max-w-lg">
                  <span className="font-inter text-[13px] font-[300] text-brand-muted animate-pulse">
                    Thinking...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="flex gap-3 border-t border-brand-border p-4"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-brand-bg border border-brand-border text-brand-fg placeholder-brand-muted/50 px-4 py-2.5 font-inter text-[13px] font-[300] focus:outline-none focus:border-brand-coral transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading || isStreaming}
                className="bg-brand-coral text-brand-bg px-4 py-2.5 font-inter font-[600] text-[12px] tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ChatBot;

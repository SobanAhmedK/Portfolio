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
  const [isOpen,    setIsOpen]    = useState(false);
  const [model,     setModel]     = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    setModel(genAI.getGenerativeModel({ model: "gemini-2.0-flash" }));
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || !model) return;

    setMessages((prev) => [...prev, { text: input, isBot: false }]);
    setInput("");
    setIsLoading(true);

    try {
      await new Promise((r) => setTimeout(r, 1500));

      const recent = messages.length < 10 ? messages : messages.slice(-9);
      const history = recent.map((msg) => ({
        role:  msg.isBot ? "model" : "user",
        parts: [{ text: msg.text }],
      }));

      const chat = model.startChat({
        history: [{ role: "user", parts: [{ text: CONTEXT }] }, ...history],
        generationConfig: { maxOutputTokens: 1000, temperature: 0.3 },
      });

      const result   = await chat.sendMessage(`User: ${input}`);
      const response = await result.response.text();
      setMessages((prev) => [...prev, { text: response, isBot: true }]);
    } catch (err) {
      console.error("ChatBot error:", err);
      setMessages((prev) => [
        ...prev,
        { text: "Unable to fetch a response. Please try again.", isBot: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-[88px] right-5 z-[200]">

      {/* Trigger button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="bounceFast bg-brand-coral text-brand-bg p-4 rounded-full shadow-xl flex items-center gap-2 hover:opacity-90 transition-opacity font-inter text-sm font-[600]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.06 }}
          style={{ marginTop: "6px", marginRight: "6px" }}
        >
          <MessageCircle className="h-5 w-5" />
          Ask AI About Me
        </motion.button>
      )}

      {/* Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-brand-bg/80 backdrop-blur-md flex justify-center items-center p-4 z-[300]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-3xl h-[78vh] bg-brand-card border border-brand-border shadow-2xl rounded-none flex flex-col"
            initial={{ scale: 0.94 }}
            animate={{ scale: 1 }}
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
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3.5 max-w-lg font-inter text-[13px] font-[300] leading-relaxed ${
                    msg.isBot
                      ? "bg-brand-bg text-brand-fg/90 border border-brand-border"
                      : "bg-brand-coral text-brand-bg ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
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
                disabled={!input.trim() || isLoading}
                className="bg-brand-coral text-brand-bg px-4 py-2.5 font-inter font-[600] text-[12px] tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default ChatBot;

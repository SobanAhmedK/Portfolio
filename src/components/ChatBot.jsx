import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";

const CONTEXT = import.meta.env.VITE_OPENAI_CONTEXT;

function ChatBot() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [model, setModel] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
    setModel(genAI.getGenerativeModel({ model: "gemini-1.5-pro" }));
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
    // Wait for 1 second before making the API request (adjust as needed)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const recentMessages = messages.length < 10 ? messages : messages.slice(-9);
    const formattedMessages = recentMessages.map((msg) => ({
      role: msg.isBot ? "model" : "user",
      parts: [{ text: msg.text }],
    }));

    const chat = model.startChat({
      history: [{ role: "user", parts: [{ text: CONTEXT }] }, ...formattedMessages],
      generationConfig: { maxOutputTokens: 1000, temperature: 0.3 },
    });

    const result = await chat.sendMessage(`User: ${input}`);
    const response = await result.response.text();

    setMessages((prev) => [...prev, { text: response, isBot: true }]);
  } catch (error) {
    console.error("Error:", error);
    setMessages((prev) => [...prev, { text: "Error: Unable to fetch response.", isBot: true }]);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="fixed top-12 right-5 z-50">
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          className="animate-bounceFast bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4 rounded-full shadow-lg flex items-center gap-2 hover:scale-110 transition-transform"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ marginTop: "30px", marginRight: "30px" }}
          whileHover={{ scale: 1.1 }}
        >
          <MessageCircle className="h-6 w-6" />
          Ask AI About Me OR Take Insights
        </motion.button>
      )}

      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-md flex justify-center items-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 shadow-xl rounded-xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">AI Chatbot</h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-red-500 transition">
                <X className="h-7 w-7" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg max-w-lg ${
                    msg.isBot ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white" : "bg-indigo-600 text-white self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && <div className="bg-gray-100 p-3 rounded-lg dark:bg-gray-800 animate-pulse">Thinking...</div>}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="flex gap-3 border-t pt-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 border text-black dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-50 dark:bg-gray-800"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default ChatBot;

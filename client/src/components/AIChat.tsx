// LUXE BEAUTY — AI Chat Widget
// Design: Floating gold button with pulsing ring, dark chat modal

import { useState, useRef, useEffect } from "react";
import { X, Send, Sparkles, Bot } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const INITIAL_MESSAGE: Message = {
  id: "0",
  role: "assistant",
  content: "Bonjour! I'm your LUXE BEAUTY advisor. I can help you find the perfect skincare routine, recommend products for your skin type, or answer questions about our services. How may I assist you today?",
  timestamp: new Date(),
};

const QUICK_QUESTIONS = [
  "What's best for dry skin?",
  "Tell me about your facials",
  "Anti-aging recommendations",
  "How to book a service?",
];

const MOCK_RESPONSES: Record<string, string> = {
  default: "Thank you for your question. Our specialists would be delighted to provide personalized guidance. I recommend booking a complimentary Skin Analysis to receive a bespoke skincare protocol tailored to your unique needs.",
  "dry skin": "For dry skin, I recommend our Golden Elixir Serum (24K gold-infused, deeply hydrating) paired with the Caviar Moisture Cream. This combination provides intense hydration and visible plumping. The Satin Body Oil is also exceptional for dry skin on the body.",
  "facial": "Our Signature Facial (90 min, €380) is our most popular treatment — a bespoke experience tailored to your skin profile. We also offer Chemical Peeling for resurfacing and Facial Massage for sculpting and drainage. Would you like to book?",
  "anti-aging": "Our anti-aging protocol begins with the Golden Elixir Serum (retinol + 24K gold) and Platinum Eye Complex for the eye area. Paired with our Signature Facial treatment, clients typically see visible improvements within 4-6 weeks.",
  "book": "To book a service, visit our Booking page where you can select your treatment, choose a date and time, and complete your reservation in just 3 simple steps. Would you like me to guide you there?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("dry")) return MOCK_RESPONSES["dry skin"];
  if (lower.includes("facial") || lower.includes("treatment")) return MOCK_RESPONSES["facial"];
  if (lower.includes("aging") || lower.includes("wrinkle") || lower.includes("anti")) return MOCK_RESPONSES["anti-aging"];
  if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule")) return MOCK_RESPONSES["book"];
  return MOCK_RESPONSES.default;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response delay
    await new Promise((r) => setTimeout(r, 1200 + Math.random() * 800));

    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: getResponse(text),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, assistantMsg]);
    setIsTyping(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#D4AF37] text-[#0A0F2C] flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-gold-pulse ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        aria-label="Open AI Beauty Advisor"
      >
        <Sparkles size={22} strokeWidth={2} />
      </button>

      {/* Chat Modal */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] transition-all duration-400 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        style={{ maxHeight: "calc(100vh - 6rem)" }}
      >
        <div className="flex flex-col bg-[#0D1B3E] border border-[rgba(212,175,55,0.25)] shadow-2xl overflow-hidden" style={{ height: "520px" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[rgba(212,175,55,0.15)] bg-[#0A0F2C]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C96D] flex items-center justify-center">
                <Bot size={16} strokeWidth={2} className="text-[#0A0F2C]" />
              </div>
              <div>
                <p
                  className="text-[#F8F6F2] text-sm font-medium"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  Beauty Advisor
                </p>
                <p className="text-[#D4AF37] text-[0.65rem] tracking-widest uppercase" style={{ fontFamily: "'Jost', sans-serif" }}>
                  AI Powered
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[rgba(248,246,242,0.4)] hover:text-[#F8F6F2] transition-colors"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#D4AF37] text-[#0A0F2C] rounded-tl-xl rounded-tr-sm rounded-bl-xl"
                      : "bg-[#111827] text-[rgba(248,246,242,0.9)] border border-[rgba(212,175,55,0.12)] rounded-tr-xl rounded-tl-sm rounded-br-xl"
                  }`}
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#111827] border border-[rgba(212,175,55,0.12)] px-4 py-3 rounded-tr-xl rounded-tl-sm rounded-br-xl">
                  <div className="flex gap-1.5 items-center">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length === 1 && (
            <div className="px-4 pb-3 flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="text-[0.65rem] px-3 py-1.5 border border-[rgba(212,175,55,0.3)] text-[#D4AF37] hover:bg-[rgba(212,175,55,0.08)] transition-colors tracking-wide"
                  style={{ fontFamily: "'Jost', sans-serif" }}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-[rgba(212,175,55,0.15)]"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skincare..."
              className="flex-1 bg-transparent text-[#F8F6F2] placeholder-[rgba(248,246,242,0.3)] text-sm outline-none"
              style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300 }}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="w-8 h-8 bg-[#D4AF37] text-[#0A0F2C] flex items-center justify-center disabled:opacity-40 hover:bg-[#E8C96D] transition-colors"
            >
              <Send size={14} strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

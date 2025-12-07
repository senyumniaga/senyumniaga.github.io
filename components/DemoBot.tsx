import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { MessageSquare, Send, Bot, Minimize2, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const DemoBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hi! I'm BotForge AI. How can I help your business grow today?" }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    let fullResponse = "";
    // Temporary bot message for streaming
    setMessages(prev => [...prev, { role: 'bot', text: "" }]);
    
    try {
      const stream = sendMessageToGemini(userMsg);
      
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMsgs = [...prev];
          newMsgs[newMsgs.length - 1].text = fullResponse;
          return newMsgs;
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
      
      {/* Chat Window */}
      <div 
        className={`pointer-events-auto bg-dark-bg/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-neon-fuchsia/10 rounded-2xl w-full max-w-[360px] sm:w-[360px] flex flex-col transition-all duration-300 origin-bottom-right overflow-hidden ${
          isOpen ? 'opacity-100 scale-100 mb-4 translate-y-0' : 'opacity-0 scale-90 h-0 mb-0 translate-y-10'
        }`}
        style={{ maxHeight: '500px' }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-violet-900 via-fuchsia-900 to-violet-900 p-4 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-1.5 rounded-lg border border-white/10 shadow-[0_0_10px_rgba(217,70,239,0.3)]">
              <Bot className="w-5 h-5 text-neon-fuchsia" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm tracking-wide">BotForge AI</h3>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_5px_#06b6d4]"></span>
                <span className="text-[10px] text-slate-300 uppercase tracking-wider">Online</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors hover:rotate-90 duration-300">
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent h-[350px]">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-gradient-to-br from-neon-fuchsia to-violet-600 text-white rounded-br-none shadow-[0_4px_15px_rgba(217,70,239,0.2)]' 
                    : 'bg-slate-800/80 border border-slate-700 text-slate-100 rounded-bl-none backdrop-blur-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && messages[messages.length - 1].text === "" && (
             <div className="flex justify-start">
               <div className="bg-slate-800/80 border border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                 <span className="w-1.5 h-1.5 bg-neon-fuchsia rounded-full animate-bounce"></span>
                 <span className="w-1.5 h-1.5 bg-neon-fuchsia rounded-full animate-bounce delay-75"></span>
                 <span className="w-1.5 h-1.5 bg-neon-fuchsia rounded-full animate-bounce delay-150"></span>
               </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-dark-bg/50 border-t border-white/5 backdrop-blur-md">
          <div className="relative flex items-center group">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about our chatbots..."
              className="w-full bg-slate-900/50 text-white placeholder-slate-500 rounded-xl pl-4 pr-12 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neon-fuchsia/50 border border-slate-700/50 transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={!input.trim() || isTyping}
              className="absolute right-2 p-1.5 bg-gradient-to-r from-neon-fuchsia to-violet-600 hover:brightness-110 text-white rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(217,70,239,0.3)]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-slate-600 flex items-center justify-center gap-1">
              <Sparkles className="w-3 h-3 text-neon-amber" /> Powered by Gemini
            </p>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto group flex items-center gap-3 pr-6 pl-2 py-2 rounded-full shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all duration-300 border border-white/10 ${
          isOpen ? 'bg-slate-800 translate-y-2 opacity-0' : 'bg-gradient-to-r from-violet-900 to-fuchsia-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)]'
        }`}
      >
        <div className="bg-white/10 p-3 rounded-full relative">
           <MessageSquare className="w-6 h-6 text-white relative z-10" />
           <div className="absolute inset-0 bg-neon-fuchsia blur-md opacity-20 rounded-full animate-pulse"></div>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-white font-semibold text-sm">Demo Chat</span>
          <span className="text-neon-cyan text-xs">AI Online</span>
        </div>
      </button>
    </div>
  );
};
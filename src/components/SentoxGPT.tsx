import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { cn } from '../lib/utils';

const getAi = () => {
  // Safe environment check for process.env
  const apiKey = typeof process !== 'undefined' ? process.env?.GEMINI_API_KEY : undefined;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const SentoxGPT: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "SYSTEM_ONLINE. Hello, I am SentoxGPT. Accessing global intelligence streams... How can I assist with your pulse analysis today?", timestamp: new Date().toISOString() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

  try {
      const ai = getAi();
      if (!ai) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "SYSTEM_OFFLINE: GEMINI_API_KEY_NOT_FOUND. To enable AI intelligence streams, please add `GEMINI_API_KEY` to your environment variables. You can find this in your project settings on Vercel.", 
          timestamp: new Date().toISOString() 
        }]);
        setIsLoading(false);
        return;
      }
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          {
            role: 'user',
            parts: [{ text: "SYSTEM_CONTEXT: You are SentoxGPT, a futuristic global intelligence AI. Your goal is to provide real-time-style summaries of geopolitical tensions, market sentiment, and social trends. Use technical, precise language with a cyberpunk 'Jarvis-meets-Bloomberg' tone. Always refer to your 'intel feeds' and 'global pulse sensors' (which are simulated for this demo)." }]
          },
          ...messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.content }]
          })),
          { role: 'user', parts: [{ text: input }] }
        ],
      });

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.text || "COMM_ERROR: NO_RESPONSE_RETRY",
        timestamp: new Date().toISOString()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error: AI_CORE_DISCONNECT. Check connection.", timestamp: new Date().toISOString() }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] glass-card overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-800 bg-slate-900/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-neon-purple flex items-center justify-center neon-glow-purple">
            <Bot size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">SentoxGPT</h3>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-tighter">Live Neural Intel</span>
            </div>
          </div>
        </div>
        <Sparkles size={18} className="text-neon-purple" />
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
        <AnimatePresence initial={false}>
          {messages.map((message, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={cn(
                "flex gap-4 max-w-[85%]",
                message.role === 'user' ? "ml-auto flex-row-reverse" : "mr-auto"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                message.role === 'user' ? "bg-slate-800" : "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
              )}>
                {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={cn(
                "p-4 rounded-2xl text-sm leading-relaxed",
                message.role === 'user' ? "bg-slate-800/80 text-white" : "bg-slate-900 border border-slate-800 text-slate-200"
              )}>
                <div className="prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown>
                    {message.content}
                  </ReactMarkdown>
                </div>
                <div className="mt-2 opacity-30 text-[10px] font-mono">
                  {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-4 max-w-[80%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple animate-spin">
              <Loader2 size={16} />
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-500 text-xs italic font-mono flex items-center gap-2">
              Processing intelligence streams...
              <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>_</motion.span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-950/50 border-t border-slate-800">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Query the global intelligence network..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neon-purple transition-colors pr-12 text-slate-200"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-neon-purple text-white rounded-lg hover:bg-neon-purple/80 transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {["Market Fear?", "War Updates?", "AI Mood?", "Global Trend?"].map(prompt => (
            <button
              key={prompt}
              onClick={() => setInput(prompt)}
              className="whitespace-nowrap px-3 py-1 bg-slate-800/50 border border-slate-700 rounded-full text-[10px] text-slate-400 hover:text-white hover:border-slate-500 transition-all uppercase tracking-wider"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

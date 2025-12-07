import React from 'react';
import { Bot } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-bg/80 border-t border-white/5 py-12 relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-slate-400" />
          <span className="font-bold text-lg text-slate-300">BotForge</span>
        </div>
        <div className="text-slate-500 text-sm">
          © {new Date().getFullYear()} BotForge AI Solutions.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors">Twitter</a>
          <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors">LinkedIn</a>
          <a href="#" className="text-slate-500 hover:text-neon-cyan transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};
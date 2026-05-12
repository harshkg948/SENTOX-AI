import React from 'react';
import { cn } from '../lib/utils';
import { 
  LayoutDashboard, 
  TrendingUp, 
  Globe2, 
  BarChart3, 
  HeartPulse, 
  MessageSquare, 
  Settings,
  Terminal
} from 'lucide-react';
import { motion } from 'motion/react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'social', label: 'Social Trends', icon: TrendingUp },
  { id: 'war', label: 'War & Intel', icon: Globe2 },
  { id: 'market', label: 'Market Mood', icon: BarChart3 },
  { id: 'emotion', label: 'Emotion Pulse', icon: HeartPulse },
  { id: 'ai', label: 'AI Assistant', icon: MessageSquare },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 md:w-56 bg-[#080808]/90 backdrop-blur-2xl border-r border-neon-blue/10 z-50 flex flex-col">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-neon-blue) 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
      
      <div className="p-6 border-b border-neon-blue/10 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-neon-blue animate-pulse rounded-full shadow-[0_0_8px_var(--color-neon-blue)]"></div>
          <h1 className="text-neon-blue font-bold tracking-[0.2em] text-xl hidden md:block">SENTOX</h1>
        </div>
        <p className="hidden md:block text-[9px] text-neon-blue/60 font-mono mt-1 uppercase tracking-widest">Global Intelligence v4.02</p>
      </div>

      <nav className="flex-1 p-3 space-y-1 relative z-10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-2 transition-all duration-300 rounded text-sm group relative overflow-hidden",
                isActive 
                  ? "bg-neon-blue/10 border-l-2 border-neon-blue text-neon-blue font-medium" 
                  : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
              )}
            >
              <Icon size={18} className={cn("shrink-0", isActive && "text-neon-blue")} />
              <span className="hidden md:block uppercase tracking-wider text-[11px] font-mono">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-neon-blue/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#1a1a1a] border border-neon-blue/20 flex items-center justify-center">
            <span className="text-[9px] text-neon-blue font-mono font-bold">SYS</span>
          </div>
          <div className="hidden md:block">
            <p className="text-[10px] font-bold text-white">AGENT_01</p>
            <p className="text-[8px] text-neon-green font-mono uppercase tracking-tighter">SECURE_LINK</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

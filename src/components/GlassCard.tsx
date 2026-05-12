import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className, title, subtitle, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "bg-[#101010]/80 backdrop-blur-xl border border-neon-blue/10 rounded-lg overflow-hidden relative group",
        "before:absolute before:inset-0 before:bg-[url('https://grainy-gradients.vercel.app/noise.svg')] before:opacity-[0.03] before:pointer-events-none",
        className
      )}
    >
      {/* Decorative scanline texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, var(--color-neon-blue) 1px, var(--color-neon-blue) 2px)', backgroundSize: '100% 4px' }}></div>
      
      {(title || subtitle) && (
        <div className="p-4 border-b border-neon-blue/5 bg-white/5 flex justify-between items-center group-hover:bg-white/10 transition-colors">
          <div>
            {title && <h3 className="text-xs font-bold text-neon-blue tracking-widest uppercase">{title}</h3>}
            {subtitle && <p className="text-[9px] text-slate-500 font-mono mt-0.5 uppercase tracking-tighter">{subtitle}</p>}
          </div>
          <div className="w-1.5 h-1.5 bg-neon-blue/20 rounded-full group-hover:bg-neon-blue transition-colors"></div>
        </div>
      )}
      
      <div className={cn("relative z-10", (title || subtitle) ? "p-5" : "p-0")}>
        {children}
      </div>
    </motion.div>
  );
};

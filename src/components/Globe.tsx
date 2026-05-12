import React from 'react';
import { motion } from 'motion/react';

export const Globe: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative w-full aspect-square flex items-center justify-center">
        {/* Animated Background Rings */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-full h-full rounded-full border border-neon-blue/30"
        />
        <motion.div
          animate={{ scale: [1.2, 1.4, 1.2], opacity: [0.05, 0.2, 0.05] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute w-full h-full rounded-full border border-neon-purple/20"
        />
        
        {/* The Globe SVG */}
        <div className="relative w-4/5 h-4/5 overflow-hidden rounded-full glass-card border-neon-blue/20 flex items-center justify-center bg-slate-950/40">
          <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
            {/* Grid Lines */}
            {Array.from({ length: 10 }).map((_, i) => (
              <React.Fragment key={i}>
                <line x1={i * 10} y1="0" x2={i * 10} y2="100" stroke="currentColor" strokeWidth="0.1" className="text-neon-blue/20" />
                <line x1="0" y1={i * 10} x2="100" y2={i * 10} stroke="currentColor" strokeWidth="0.1" className="text-neon-blue/20" />
              </React.Fragment>
            ))}
            
            {/* Pulsing Hotspots */}
            <motion.circle
              cx="70" cy="30" r="1.5" fill="var(--color-neon-red)"
              animate={{ r: [1.5, 3, 1.5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="25" cy="55" r="1.5" fill="var(--color-neon-purple)"
              animate={{ r: [1.5, 3, 1.5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.circle
              cx="50" cy="70" r="1.5" fill="var(--color-neon-cyan)"
              animate={{ r: [1.5, 3, 1.5], opacity: [1, 0.5, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </svg>
          
          {/* Scanning Line overlay */}
          <motion.div
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-px bg-white/20 shadow-[0_0_10px_white]"
          />
        </div>
        
        {/* Orbiting metrics satellites */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 glass-card border-neon-blue/40 text-[10px] font-mono text-neon-blue">
              SENTRY_01: ACTIVE
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

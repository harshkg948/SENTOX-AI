import React from 'react';
import { motion } from 'motion/react';
import { Globe } from '../components/Globe';
import { Terminal, Shield, Zap, ChevronRight } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col items-center justify-center p-6">
      <div className="scanline" />
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl text-center space-y-12"
      >
        <Globe className="w-full max-w-[400px] mx-auto mb-12 opacity-80" />
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 text-neon-purple font-mono text-sm tracking-[0.3em] uppercase"
          >
            <Shield size={16} />
            <span>Secure Intelligence Cluster</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-bold text-white tracking-tighter"
          >
            Monitor the world’s <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">emotions in real time.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed"
          >
            SENTOX is a real-time global intelligence platform that monitors emotions, opinions, geopolitical tensions, and market behavior using state-of-the-art NLP and predictive analytics.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button 
            onClick={onStart}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-neon-purple opacity-0 group-hover:opacity-10 transition-opacity" />
            <span className="relative flex items-center gap-2">
              OPEN DASHBOARD <ChevronRight size={20} />
            </span>
          </button>
          
          <button className="px-8 py-4 bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
            <Terminal size={20} className="text-neon-blue" />
            LIVE INTEL
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800/50">
           {[
             { label: 'Active Sensors', value: '14.2M' },
             { label: 'Nodes Online', value: '42,069' },
             { label: 'Intel Density', value: 'Terabyte/s' },
             { label: 'System Load', value: '14.2%' },
           ].map((stat, i) => (
             <div key={stat.label} className="text-center">
               <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 + (i * 0.1) }}
                className="text-[10px] text-slate-500 uppercase font-mono tracking-widest"
               >
                {stat.label}
               </motion.p>
               <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + (i * 0.1) }}
                className="text-xl font-bold text-white mt-1"
               >
                {stat.value}
               </motion.p>
             </div>
           ))}
        </div>
      </motion.div>
    </div>
  );
};

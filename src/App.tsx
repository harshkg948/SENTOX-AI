import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { LandingPage } from './views/LandingPage';
import { Overview } from './views/Overview';
import { SocialSentiment } from './views/SocialSentiment';
import { WarIntelligence } from './views/WarIntelligence';
import { MarketIntelligence } from './views/MarketIntelligence';
import { EmotionPulse } from './views/EmotionPulse';
import { SentoxGPT } from './components/SentoxGPT';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Wifi } from 'lucide-react';
import { clsx } from 'clsx';

export default function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <Overview />;
      case 'social': return <SocialSentiment />;
      case 'war': return <WarIntelligence />;
      case 'market': return <MarketIntelligence />;
      case 'emotion': return <EmotionPulse />;
      case 'ai': return <div className="max-w-4xl mx-auto"><SentoxGPT /></div>;
      default: return <Overview />;
    }
  };

  if (showLanding) {
    return <LandingPage onStart={() => setShowLanding(false)} />;
  }

  return (
    <div className="flex bg-black min-h-screen font-sans selection:bg-neon-purple selection:text-white">
      <div className="scanline pointer-events-none" />
      
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 md:ml-56 h-screen flex flex-col relative overflow-hidden">
        {/* Header Ticker */}
        <header className="h-12 border-b border-neon-blue/20 bg-[#080808]/80 backdrop-blur-md flex items-center px-6 overflow-hidden shrink-0 z-10">
          <div className="flex-1 font-mono text-[11px] flex gap-8 whitespace-nowrap overflow-hidden">
             <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
              className="flex gap-12"
             >
                <span className="text-neon-blue">[ALERT] GLOBAL SENTIMENT SPIKE +12.4% IN ASIA-PACIFIC REGION</span>
                <span className="text-neon-red">[ALERT] BORDER TENSIONS DETECTED: LAT 34.55 LON 69.19</span>
                <span className="text-neon-blue/60">[STATUS] NLP NEURAL ENGINE OPERATIONAL - LATENCY 14ms</span>
                <span className="text-neon-blue">[ALERT] MARKET VOLATILITY REACHING CRITICAL THRESHOLD</span>
                <span className="text-neon-blue/60">[SYSTEM] AGENT_01 ENCRYPTED LINK SECURE</span>
             </motion.div>
          </div>
          <div className="flex gap-4 items-center pl-6 border-l border-neon-blue/10 ml-4 h-full">
            <div className="text-[10px] font-mono"><span className="text-gray-500">UTC</span> {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' })}</div>
            <div className="text-[10px] font-mono hidden lg:block"><span className="text-gray-500 uppercase">Latency</span> 14ms</div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
           <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pb-12"
            >
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-neon-blue rounded-full shadow-[0_0_5px_var(--color-neon-blue)]"></div>
                  <h2 className="text-[10px] font-mono text-neon-blue uppercase tracking-[0.3em] font-bold">
                    SEC_LEVEL_04 // {activeTab.replace('-', '_').toUpperCase()}
                  </h2>
                </div>
                <h1 className="text-4xl font-bold text-white tracking-tighter">
                  {activeTab.replace('-', ' ').toUpperCase()}
                </h1>
              </div>

              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Status Bar */}
        <footer className="h-10 border-t border-neon-blue/20 bg-[#050505] flex items-center px-6 justify-between text-[10px] font-mono shrink-0 z-10">
          <div className="flex gap-6 items-center">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full shadow-[0_0_5px_var(--color-neon-blue)]"></div>
              <span>CORE_NODE_ACTIVE</span>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
              <div className="w-2 h-2 bg-neon-green rounded-full shadow-[0_0_5px_var(--color-neon-green)]"></div>
              <span>NLP_PIPELINE_STABLE</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-500 hidden md:flex">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>API_TRAFFIC_HIGH</span>
            </div>
          </div>
          <div className="text-gray-600 uppercase tracking-tighter hidden sm:block">ENCRYPTION: AES-256-GCM | SECTOR 7G RECON</div>
        </footer>

        {/* Floating AI Trigger */}
        <div className="fixed bottom-8 right-8 z-[100]">
           <AnimatePresence>
             {isChatOpen && (
               <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="mb-4 w-[350px] md:w-[450px] shadow-2xl"
               >
                 <div className="relative">
                   <button 
                    onClick={() => setIsChatOpen(false)}
                    className="absolute top-4 right-4 z-10 p-1 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg transition-colors"
                   >
                     <X size={16} />
                   </button>
                   <SentoxGPT />
                 </div>
               </motion.div>
             )}
           </AnimatePresence>

           <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={clsx(
              "p-4 rounded-full shadow-2xl transition-all duration-300 neon-glow-purple flex items-center justify-center",
              isChatOpen ? "bg-slate-800 text-white" : "bg-neon-purple text-white"
            )}
           >
             <MessageSquare size={24} />
           </motion.button>
        </div>
      </main>
    </div>
  );
}


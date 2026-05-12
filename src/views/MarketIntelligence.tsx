import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_CHART_DATA } from '../data/mockData';
import { 
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { Bitcoin, DollarSign, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const MarketIntelligence: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2" title="Market Momentum" subtitle="Asset pricing sentiment overlay">
          <div className="h-[400px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-neon-cyan)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-neon-cyan)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                />
                <Area 
                  type="stepAfter" 
                  dataKey="volume" 
                  stroke="var(--color-neon-cyan)" 
                  fillOpacity={1} 
                  fill="url(#colorPrice)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
            <div className="text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Volatility</span>
              <p className="text-lg font-bold text-white">42.8%</p>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Hedge Ratio</span>
              <p className="text-lg font-bold text-white">1.14</p>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Beta</span>
              <p className="text-lg font-bold text-white">0.98</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard title="Emotion Dashboard" subtitle="Retail vs Institutional Mood">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-2 uppercase">
                  <Bitcoin size={14} className="text-orange-400" />
                  Crypto Hype
                </span>
                <span className="text-neon-red font-bold text-sm">Fearful</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Retail</p>
                  <p className="text-lg font-bold text-neon-red">Panic</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-500 uppercase font-mono">Whale</p>
                  <p className="text-lg font-bold text-neon-green">Accumulate</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neon-purple/10 border border-neon-purple/30">
              <div className="flex items-center gap-3 mb-3 text-neon-purple">
                <Zap size={18} />
                <span className="text-sm font-bold uppercase tracking-tighter">AI Prediction</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed italic">
                "NVIDIA (NVDA) sentiment is trending upwards on high options volume. Expect a **short squeeze** in the next 12 hours based on Reddit narrative acceleration."
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] font-mono uppercase text-slate-500">
                <span>Sentiment Score</span>
                <span>Optimistic</span>
              </div>
              <div className="w-full h-8 bg-slate-800 rounded-lg relative overflow-hidden flex items-center justify-center px-4">
                 <div className="w-[65%] h-full bg-gradient-to-r from-neon-purple to-neon-blue absolute left-0 opacity-50" />
                 <span className="relative z-10 text-xs font-bold text-white tracking-widest">65 / 100</span>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { ticker: 'TSLA', price: '$174.22', change: '-4.2%', sentiment: 'negative' },
          { ticker: 'BTC', price: '$64,120', change: '+2.1%', sentiment: 'positive' },
          { ticker: 'AAPL', price: '$189.43', change: '+0.4%', sentiment: 'neutral' },
          { ticker: 'NVDA', price: '$892.31', change: '+8.7%', sentiment: 'positive' },
          { ticker: 'ETH', price: '$3,421', change: '-1.5%', sentiment: 'neutral' },
          { ticker: 'AMZN', price: '$178.22', change: '+1.2%', sentiment: 'positive' },
        ].map((item, i) => (
          <GlassCard key={item.ticker} className="flex flex-col gap-4" delay={i * 0.05}>
            <div className="flex justify-between items-start">
               <div>
                 <span className="px-2 py-1 bg-slate-800 text-[10px] font-mono rounded text-slate-400">{item.ticker}</span>
                 <p className="text-xl font-bold mt-1 text-white">{item.price}</p>
               </div>
               <div className={cn(
                 "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
                 item.sentiment === 'positive' ? 'bg-neon-green/10 text-neon-green' : 
                 item.sentiment === 'negative' ? 'bg-neon-red/10 text-neon-red' : 'bg-slate-800 text-slate-400'
               )}>
                 {item.change.startsWith('+') ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                 {item.change}
               </div>
            </div>
            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
               <motion.div 
                initial={{ width: 0 }}
                animate={{ width: item.sentiment === 'positive' ? '70%' : item.sentiment === 'negative' ? '30%' : '50%' }}
                className={cn(
                  "h-full",
                  item.sentiment === 'positive' ? 'bg-neon-green' : 
                  item.sentiment === 'negative' ? 'bg-neon-red' : 'bg-neon-blue'
                )} 
               />
            </div>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Sentiment: {item.sentiment}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

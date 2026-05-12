import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { MetricWidget } from '../components/MetricWidget';
import { generateMockMetrics, MOCK_CHART_DATA } from '../data/mockData';
import { Globe } from '../components/Globe';
import { AlertFeed } from '../components/AlertFeed';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, Activity, Terminal } from 'lucide-react';

export const Overview: React.FC = () => {
  const metrics = generateMockMetrics();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, i) => (
          <GlassCard key={metric.label} delay={i * 0.1}>
            <MetricWidget metric={metric} />
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard 
          className="lg:col-span-2 min-h-[400px]" 
          title="Global Pulse Stream" 
          subtitle="Real-time sentiment trajectory"
          delay={0.4}
        >
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MOCK_CHART_DATA}>
                <defs>
                  <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-neon-purple)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-neon-purple)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                  itemStyle={{ color: '#bc13fe' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="sentiment" 
                  stroke="var(--color-neon-purple)" 
                  fillOpacity={1} 
                  fill="url(#colorSentiment)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Activity size={12} className="text-neon-purple" />
              <span>Network Node: SEA-01</span>
            </div>
            <span>Scanning 1.4M events/sec</span>
          </div>
        </GlassCard>

        <GlassCard title="Global Heatmap" subtitle="Geographical impact zones" delay={0.5}>
          <div className="flex flex-col items-center justify-center p-4">
            <Globe className="w-full max-w-[250px]" />
            <div className="mt-8 grid grid-cols-2 gap-4 w-full">
              <div className="text-center">
                <p className="text-[10px] text-slate-500 uppercase">Hot Zone</p>
                <p className="text-sm font-semibold text-white">East Asia</p>
              </div>
              <div className="text-center">
                <p className="text-[10px] text-slate-500 uppercase">Status</p>
                <p className="text-sm font-semibold text-neon-red">Critical</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard title="Intelligence Feed" subtitle="System-wide security & sentiment logs" delay={0.6}>
          <div className="h-[400px] overflow-y-auto pr-2 scrollbar-hide">
            <AlertFeed />
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-2" title="AI Summary" subtitle="Synthesized intelligence snapshot" delay={0.7}>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-neon-purple/5 border border-neon-purple/20">
              <div className="p-3 bg-neon-purple rounded-lg neon-glow-purple">
                <Terminal size={20} className="text-white" />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-slate-200 leading-relaxed">
                  Network analysis suggests a **74% probability** of market trend reversal within 48 hours. Social sentiment has decoupled from institutional data, indicating high retail volatility. Intelligence recommends **monitoring North Atlantic corridors** for sudden sentiment shifts.
                </p>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 bg-slate-800 text-[10px] font-mono text-slate-400 rounded">CONFIDENCE: 89%</span>
                  <span className="px-2 py-0.5 bg-slate-800 text-[10px] font-mono text-slate-400 rounded">THREAT: LOW</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <h4 className="text-xs font-mono text-slate-500 uppercase mb-3">Trending Alpha</h4>
                <div className="space-y-2">
                  {['#SiliconCrisis', '#FedRateCut', '#TaiwanIntel'].map(tag => (
                    <div key={tag} className="flex items-center justify-between">
                      <span className="text-sm text-slate-300">{tag}</span>
                      <TrendingUp size={14} className="text-neon-green" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
                <h4 className="text-xs font-mono text-slate-500 uppercase mb-3">Network Health</h4>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-neon-blue neon-glow-blue" />
                </div>
                <p className="text-[10px] text-slate-500 mt-2">OPS UPTIME: 99.98% • LATENCY: 24ms</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

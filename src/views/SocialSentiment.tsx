import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { MOCK_CHART_DATA } from '../data/mockData';
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, ScatterChart, Scatter, ZAxis
} from 'recharts';
import { Twitter, MessageSquare, Youtube, Linkedin, Hash } from 'lucide-react';

const COLORS = ['#00f2ff', '#bc13fe', '#ff3131', '#39ff14'];

export const SocialSentiment: React.FC = () => {
  const pieData = [
    { name: 'Positive', value: 45 },
    { name: 'Negative', value: 25 },
    { name: 'Neutral', value: 30 },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { platform: 'Twitter/X', icon: Twitter, trend: '+12.4%', color: 'text-blue-400' },
          { platform: 'Reddit', icon: MessageSquare, trend: '-2.1%', color: 'text-orange-500' },
          { platform: 'YouTube', icon: Youtube, trend: '+5.7%', color: 'text-red-500' },
          { platform: 'LinkedIn', icon: Linkedin, trend: '+0.8%', color: 'text-blue-600' },
        ].map((item, i) => (
          <GlassCard key={item.platform} delay={i * 0.1} className="flex items-center gap-4 py-4 px-6">
            <div className={`p-3 rounded-lg bg-slate-800/50 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase">{item.platform}</p>
              <p className="text-lg font-bold text-white">{item.trend}</p>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard title="Volume vs. Emotion" subtitle="Viral hashtag propagation" delay={0.4}>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_CHART_DATA}>
                <XAxis dataKey="time" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b' }}
                />
                <Bar dataKey="volume" fill="#bc13fe" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sentiment" fill="#00f2ff" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Sentiment Allocation" subtitle="Global aggregate distribution" delay={0.5}>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center">
              <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">Mood</span>
              <span className="text-xl font-bold text-white uppercase tracking-tighter">Calm</span>
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard title="Hype Matrix" subtitle="Trend velocity analysis" className="lg:col-span-2" delay={0.6}>
           <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <XAxis type="number" dataKey="volume" name="volume" hide />
                  <YAxis type="number" dataKey="sentiment" name="sentiment" hide />
                  <ZAxis type="number" dataKey="volume" range={[50, 400]} />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Trends" data={MOCK_CHART_DATA} fill="#bc13fe" />
                </ScatterChart>
              </ResponsiveContainer>
           </div>
        </GlassCard>

        <GlassCard title="Viral Entities" subtitle="Real-time hashtag tracking" delay={0.7}>
          <div className="space-y-4">
            {[
              { tag: '#AGI_2026', volume: '1.2M', growth: '+400%' },
              { tag: '#CryptoCrash', volume: '840K', growth: '+25%' },
              { tag: '#MarsMission', volume: '430K', growth: '+15%' },
              { tag: '#Cybersecurity', volume: '210K', growth: '-5%' },
              { tag: '#EnergyCrisis', volume: '190K', growth: '+32%' },
            ].map((item, i) => (
              <div key={item.tag} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/30 border border-slate-700/50">
                <div className="flex items-center gap-3">
                  <Hash size={14} className="text-neon-purple" />
                  <span className="text-sm font-medium text-slate-200">{item.tag}</span>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white font-bold">{item.volume}</p>
                  <p className={`text-[10px] ${item.growth.startsWith('+') ? 'text-neon-green' : 'text-neon-red'}`}>{item.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

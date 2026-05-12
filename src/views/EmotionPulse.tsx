import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { EMOTION_DATA } from '../data/mockData';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Heart, Brain, Smile, Zap, Anchor } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const radarData = [
  { subject: 'Joy', A: 120, fullMark: 150 },
  { subject: 'Sorrow', A: 98, fullMark: 150 },
  { subject: 'Anger', A: 86, fullMark: 150 },
  { subject: 'Surprise', A: 99, fullMark: 150 },
  { subject: 'Fear', A: 85, fullMark: 150 },
  { subject: 'Anticipation', A: 65, fullMark: 150 },
];

export const EmotionPulse: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard title="Global Emotion Wheel" subtitle="Aggregated human sentiment metrics">
          <div className="h-[400px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <PolarRadiusAxis hide />
                <Radar
                  name="Global Pulse"
                  dataKey="A"
                  stroke="var(--color-neon-purple)"
                  fill="var(--color-neon-purple)"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard title="Sentiment Distribution" subtitle="Top emotional catalysts today">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={EMOTION_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {EMOTION_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {EMOTION_DATA.map(item => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs text-slate-400 font-mono">{item.name}: {item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="border-l-4 border-l-neon-red" title="Stress Index" subtitle="Higher in Urban Sectors">
           <div className="flex items-center justify-between mt-4">
              <div className="p-4 bg-neon-red/10 rounded-full text-neon-red">
                <Brain size={32} />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">72 <span className="text-sm font-normal text-slate-500">pt</span></p>
                <p className="text-xs text-neon-red font-mono uppercase">+8.2% Increase</p>
              </div>
           </div>
        </GlassCard>

        <GlassCard className="border-l-4 border-l-neon-green" title="Happiness Quotient" subtitle="Driven by Technological Optimism">
           <div className="flex items-center justify-between mt-4">
              <div className="p-4 bg-neon-green/10 rounded-full text-neon-green">
                <Smile size={32} />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">48 <span className="text-sm font-normal text-slate-500">pt</span></p>
                <p className="text-xs text-neon-green font-mono uppercase">-2.4% Decrease</p>
              </div>
           </div>
        </GlassCard>

        <GlassCard className="border-l-4 border-l-neon-blue" title="Resilience Level" subtitle="Societal adaptive capacity">
           <div className="flex items-center justify-between mt-4">
              <div className="p-4 bg-neon-blue/10 rounded-full text-neon-blue">
                <Anchor size={32} />
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-white">65 <span className="text-sm font-normal text-slate-500">pt</span></p>
                <p className="text-xs text-neon-blue font-mono uppercase">Decoupling Trending</p>
              </div>
           </div>
        </GlassCard>
      </div>

      <GlassCard title="Global Mood Heatmap" subtitle="Neural scan by territory">
        <div className="h-[200px] w-full flex items-center justify-around">
           {[
             { region: 'NA', mood: 'Stressed', level: 82 },
             { region: 'EU', mood: 'Anxious', level: 64 },
             { region: 'ASIA', mood: 'Exhausted', level: 91 },
             { region: 'AFRICA', mood: 'Hopeful', level: 55 },
             { region: 'LATAM', mood: 'Excited', level: 78 },
           ].map((r, i) => (
             <div key={r.region} className="flex flex-col items-center gap-2">
                <div className="w-12 bg-slate-800 h-32 rounded-lg relative overflow-hidden flex flex-col justify-end">
                   <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${r.level}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className={cn(
                      "w-full",
                      r.level > 80 ? 'bg-neon-red' : r.level > 60 ? 'bg-orange-500' : 'bg-neon-blue'
                    )} 
                   />
                </div>
                <span className="text-[10px] font-mono text-slate-500">{r.region}</span>
             </div>
           ))}
        </div>
      </GlassCard>
    </div>
  );
};

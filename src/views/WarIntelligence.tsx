import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { Globe } from '../components/Globe';
import { AlertTriangle, ShieldAlert, Zap, Radio } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

export const WarIntelligence: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 relative overflow-hidden h-[600px]" title="The War Room" subtitle="Geopolitical Escalation Tracker">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
             <Globe className="w-full h-full max-w-[600px]" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 h-full pointer-events-none">
             <div className="space-y-4 pointer-events-auto">
                <h4 className="text-xs font-mono text-slate-500 uppercase flex items-center gap-2">
                  <Radio size={14} className="text-neon-red animate-pulse" />
                  Live Incident Reports
                </h4>
                
                {[
                  { region: 'Baltic Sea', event: 'Unauthorized Naval Movement', level: 'High', color: 'text-neon-red' },
                  { region: 'Middle East', event: 'Digital Infrastructure Attack', level: 'Critical', color: 'text-neon-red' },
                  { region: 'South China Sea', event: 'Diplomatic De-escalation', level: 'Moderate', color: 'text-orange-400' },
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    key={i} 
                    className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-[10px] font-mono text-slate-500 uppercase">{item.region}</span>
                      <span className={`text-[10px] font-mono font-bold uppercase ${item.color}`}>{item.level}</span>
                    </div>
                    <p className="text-sm text-slate-200">{item.event}</p>
                  </motion.div>
                ))}
             </div>
             
             <div className="flex flex-col justify-end gap-4 pointer-events-auto">
               <div className="p-4 bg-neon-red/10 border border-neon-red/30 rounded-xl">
                 <div className="flex items-center gap-3 mb-2 text-neon-red">
                   <AlertTriangle size={20} />
                   <span className="text-sm font-bold uppercase tracking-tighter">Escalation Probability: High</span>
                 </div>
                 <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    className="h-full bg-neon-red shadow-[0_0_10px_var(--color-neon-red)]" 
                   />
                 </div>
                 <p className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest text-right">82.4% Neural Confidence</p>
               </div>
             </div>
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard title="Defense Grid Status" subtitle="Global Shield Analytics">
            <div className="space-y-4">
              {[
                { label: 'Cyber Defense', value: 94, status: 'Stable' },
                { label: 'Satellite Intel', value: 88, status: 'Compromised' },
                { label: 'Carrier Group A', value: 42, status: 'Moving' },
                { label: 'Nuke Silos', value: 0, status: 'Locked' },
              ].map((item, i) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span className="text-slate-400">{item.label}</span>
                    <span className={item.status === 'Compromised' ? 'text-neon-red' : 'text-slate-500'}>{item.status}</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full">
                    <div className={cn(
                      "h-full rounded-full transition-all duration-1000",
                      item.status === 'Compromised' ? 'bg-neon-red shadow-[0_0_5px_red]' : 'bg-neon-blue shadow-[0_0_5px_cyan]'
                    )} style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="Strategy Terminal" subtitle="AI Battle Simulation Outputs">
            <div className="font-mono text-xs text-slate-400 space-y-2">
              <div className="flex gap-2">
                <span className="text-neon-green">{'>'}</span>
                <span>Calculating de-escalation routes...</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">{'>'}</span>
                <span>Simulating cyber-strike outcome: **42% Success**</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">{'>'}</span>
                <span className="text-neon-red">ERROR: Data feed interrupted at 14:02Z</span>
              </div>
              <div className="flex gap-2">
                <span className="text-neon-green">{'>'}</span>
                <span>Rerouting via SENTRY_02...</span>
              </div>
              <motion.div 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-4 bg-neon-green inline-block ml-4" 
              />
            </div>
          </GlassCard>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Risk Score', value: 8.4, color: 'text-neon-red', icon: ShieldAlert },
          { label: 'Bias Level', value: 'Med', color: 'text-orange-400', icon: Zap },
          { label: 'Events/Hr', value: 142, color: 'text-neon-blue', icon: Radio },
          { label: 'Alert Level', value: 'ORANGE', color: 'text-orange-500', icon: AlertTriangle },
        ].map((item, i) => (
          <GlassCard key={item.label} className="text-center py-6" delay={0.8 + (i * 0.1)}>
            <div className={`mx-auto mb-3 w-10 h-10 rounded-full flex items-center justify-center bg-slate-800 ${item.color}`}>
              <item.icon size={20} />
            </div>
            <p className="text-[10px] text-slate-500 uppercase font-mono">{item.label}</p>
            <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { generateMockAlerts } from '../data/mockData';
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const AlertFeed: React.FC = () => {
  const alerts = generateMockAlerts();
  
  return (
    <div className="space-y-4">
      {alerts.map((alert) => {
        const Icon = alert.type === 'danger' ? AlertCircle : 
                   alert.type === 'warning' ? AlertTriangle :
                   alert.type === 'info' ? Info : CheckCircle2;
                   
        return (
          <div key={alert.id} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors group">
            <div className={cn(
              "mt-1 p-2 rounded-full",
              alert.type === 'danger' ? "text-neon-red bg-neon-red/10" :
              alert.type === 'warning' ? "text-orange-400 bg-orange-400/10" :
              "text-neon-blue bg-neon-blue/10"
            )}>
              <Icon size={18} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{alert.category} • {new Date(alert.timestamp).toLocaleTimeString()}</span>
              </div>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">{alert.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

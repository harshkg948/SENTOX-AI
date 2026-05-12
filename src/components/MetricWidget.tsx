import React from 'react';
import { MetricCard } from '../types';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { cn } from '../lib/utils';

export const MetricWidget: React.FC<{ metric: MetricCard; delay?: number }> = ({ metric, delay = 0 }) => {
  const isPositive = metric.trend === 'up';
  const isNeutral = metric.trend === 'neutral';
  
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs text-slate-400 font-mono uppercase tracking-widest">{metric.label}</span>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-white tracking-tight">{metric.value}</span>
        <div className={cn(
          "flex items-center text-xs font-medium px-1.5 py-0.5 rounded",
          isNeutral ? "bg-slate-800 text-slate-400" :
          isPositive ? "bg-neon-green/10 text-neon-green" : "bg-neon-red/10 text-neon-red"
        )}>
          {isNeutral ? <Minus size={12} /> : isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
          {Math.abs(metric.change)}%
        </div>
      </div>
    </div>
  );
};

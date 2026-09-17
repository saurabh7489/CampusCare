import React from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  trendDirection = 'neutral',
  color = 'campus',
}) {
  const colorStyles = {
    campus: {
      bg: 'bg-campus-50',
      text: 'text-campus-700',
      border: 'border-campus-100',
    },
    calm: {
      bg: 'bg-calm-50',
      text: 'text-calm-700',
      border: 'border-calm-100',
    },
    amber: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-100',
    },
    rose: {
      bg: 'bg-rose-50',
      text: 'text-rose-700',
      border: 'border-rose-100',
    },
    slate: {
      bg: 'bg-slate-100',
      text: 'text-slate-700',
      border: 'border-slate-200',
    }
  };

  const currentStyle = colorStyles[color] || colorStyles.campus;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            {title}
          </span>
          {Icon && (
            <div className={`w-10 h-10 rounded-2xl ${currentStyle.bg} ${currentStyle.text} flex items-center justify-center border ${currentStyle.border}`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
        </div>

        <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
          {value}
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500">
          {subtitle}
        </span>

        {trend && (
          <div className={`flex items-center space-x-1 font-semibold ${
            trendDirection === 'up' 
              ? 'text-rose-600' 
              : trendDirection === 'down' 
              ? 'text-emerald-600' 
              : 'text-slate-500'
          }`}>
            {trendDirection === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
            {trendDirection === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
            {trendDirection === 'neutral' && <Minus className="w-3.5 h-3.5" />}
            <span>{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
}
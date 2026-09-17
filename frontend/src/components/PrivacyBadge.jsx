import React from 'react';
import { Lock, ShieldCheck, EyeOff, CheckCircle2, Info } from 'lucide-react';

export default function PrivacyBadge({ variant = 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-campus-50 border border-campus-200 text-campus-800 text-xs font-medium">
        <Lock className="w-3.5 h-3.5 text-campus-600 flex-shrink-0" />
        <span>100% Anonymous • Non-Diagnostic • Aggregated Insights Only</span>
      </div>
    );
  }

  return (
    <div className="bg-campus-50/70 border border-campus-200 rounded-2xl p-5 shadow-xs">
      <div className="flex items-start space-x-3 mb-3">
        <div className="w-8 h-8 rounded-lg bg-campus-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-900">
            Our Core Privacy Commitment
          </h4>
          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
            CampusCare is designed to identify institutional patterns, not label individuals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-campus-200/60 text-xs text-slate-700">
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>No names, emails, or roll numbers captured</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Strictly non-diagnostic (no mental health scores)</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Administrators only see aggregated statistics</span>
        </div>
        <div className="flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Check-in history is kept private to your device</span>
        </div>
      </div>
    </div>
  );
}
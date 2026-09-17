import React from 'react';
import { ShieldCheck, Lock, Heart, AlertCircle, ExternalLink } from 'lucide-react';

export default function Footer({ onNavigate = () => {} }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Purpose */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-campus-600 text-white flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">CampusCare</span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              A student wellbeing and academic pressure support system designed to help students anonymously communicate difficulties while giving colleges aggregated visibility into institutional support needs.
            </p>

            <div className="flex items-center space-x-2 text-xs text-campus-400 bg-slate-800/80 px-3 py-2 rounded-lg border border-slate-700 w-fit">
              <Lock className="w-3.5 h-3.5" />
              <span>Strictly anonymous • Never tracks individual identities</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Platform Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('checkin')} className="hover:text-white transition-colors">
                  Anonymous Check-in
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('support')} className="hover:text-white transition-colors">
                  Need Help / Support
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('resources')} className="hover:text-white transition-colors">
                  College Resources
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('dashboard')} className="hover:text-white transition-colors">
                  Administrator Analytics
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Medical Notice */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Important Notice
            </h4>
            <div className="bg-slate-800/50 p-3.5 rounded-xl border border-slate-700 text-xs text-slate-400 space-y-2">
              <div className="flex items-start space-x-2 text-amber-300 font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Non-Diagnostic Platform</span>
              </div>
              <p className="leading-relaxed text-[11px]">
                CampusCare is designed for academic wellbeing awareness and institutional resource allocation. It is not a clinical diagnostic tool or emergency hotline.
              </p>
              <div className="pt-2 border-t border-slate-700/60 text-[10px] text-amber-200/80">
                Demo Contacts — Replace with Actual College Information.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2">
            <span>Built with care for college students</span>
            <span>•</span>
            <span className="text-slate-300 font-medium">Build It Track Prototype</span>
          </div>
          
          <div className="text-slate-400 text-center sm:text-right">
            Listen to students without exposing them.
          </div>
        </div>
      </div>
    </footer>
  );
}
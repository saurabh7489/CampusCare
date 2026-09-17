import React from 'react';
import { ShieldCheck, HeartHandshake, Sparkles, ArrowRight, Lock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Top Banner: Privacy Assurance */}
      <div className="bg-campus-900 text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center space-x-2">
        <Lock className="w-3.5 h-3.5 text-campus-300" />
        <span>100% Anonymous & Privacy-Preserved • No Medical Diagnoses • No Individual Tracking</span>
      </div>

      {/* Header Navigation Shell */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-campus-700 text-white flex items-center justify-center shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">CampusCare</span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 bg-campus-50 text-campus-700 rounded-full border border-campus-200">
                Student Wellbeing
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <span className="text-campus-700 font-semibold cursor-pointer">Home</span>
            <span className="hover:text-campus-700 cursor-pointer transition-colors">Check-in</span>
            <span className="hover:text-campus-700 cursor-pointer transition-colors">Support</span>
            <span className="hover:text-campus-700 cursor-pointer transition-colors">Resources</span>
            <span className="hover:text-campus-700 cursor-pointer transition-colors">Dashboard</span>
          </nav>

          <div className="flex items-center space-x-3">
            <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 border border-amber-200 rounded-md">
              Build It Prototype
            </span>
          </div>
        </div>
      </header>

      {/* Hero Preview Section */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-16 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-calm-100 text-calm-800 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5 text-calm-600" />
          <span>Anonymous Student Support & Institutional Insights</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          A healthier campus starts with <span className="text-campus-700">listening.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          An anonymous platform that helps students share academic and college-related challenges and helps institutions understand where students need support.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-16">
          <button 
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-campus-700 hover:bg-campus-800 text-white font-medium rounded-xl shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-campus-600"
          >
            <span>Take Anonymous Check-in</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          
          <button 
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl border border-slate-300 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <HeartHandshake className="w-4 h-4 mr-2 text-calm-600" />
            <span>Explore Support</span>
          </button>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-campus-50 text-campus-700 flex items-center justify-center mb-4">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-2">100% Anonymous</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No login required to submit check-ins. No student IDs, names, or individual tracking data are ever captured.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-calm-50 text-calm-700 flex items-center justify-center mb-4">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-2">Practical Support</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Direct access to campus mentors, academic tutors, and non-diagnostic wellbeing guidance when you need it.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-slate-900 text-base mb-2">Aggregated Insights</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Colleges see high-level trends like assignment load and exam pressure patterns, never individual student records.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <p>CampusCare • A Student Wellbeing & Academic Pressure Support System</p>
        <p className="mt-1 text-slate-400">Build It Prototype • Strictly Non-Medical & Non-Diagnostic</p>
      </footer>
    </div>
  );
}
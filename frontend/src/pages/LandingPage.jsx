import React from 'react';
import { 
  ArrowRight, 
  HeartHandshake, 
  ShieldCheck, 
  Lock, 
  BarChart3, 
  Users, 
  GraduationCap, 
  Sparkles, 
  CheckCircle,
  HelpCircle,
  Clock,
  Compass
} from 'lucide-react';
import PrivacyBadge from '../components/PrivacyBadge.jsx';

export default function LandingPage({ onNavigate = () => {} }) {
  return (
    <div className="space-y-20 py-8 sm:py-12">
      {/* 1. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-campus-50 border border-campus-200 text-campus-800 text-xs font-semibold mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-campus-600" />
          <span>Anonymous Student Wellbeing & Institutional Insights</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-none mb-6">
          A healthier campus starts with <span className="text-campus-700">listening.</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          An anonymous platform that helps students share academic and college-related challenges and helps institutions understand where students need support.
        </p>

        {/* Dual Primary Calls to Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-12">
          <button
            type="button"
            onClick={() => onNavigate('checkin')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-campus-700 hover:bg-campus-800 text-white font-semibold rounded-xl shadow-md shadow-campus-700/20 transition-all transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-campus-600"
          >
            <span>Take Anonymous Check-in</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('support')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold rounded-xl border border-slate-300 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <HeartHandshake className="w-4 h-4 mr-2 text-calm-600" />
            <span>Explore Support</span>
          </button>
        </div>

        {/* Privacy Reassurance Callout */}
        <div className="max-w-2xl mx-auto">
          <PrivacyBadge variant="detailed" />
        </div>
      </section>

      {/* 2. FOUR CORE EXPLANATIONS (Requirement 18: What it does, Why anonymity matters, How students benefit, How colleges benefit) */}
      <section className="bg-white border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold uppercase tracking-wider text-campus-700 mb-2">
              How CampusCare Works
            </h2>
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
              Bridging the gap between students and academic support
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 1. What CampusCare Does */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-campus-100 text-campus-700 flex items-center justify-center mb-5">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  1. What CampusCare Does
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Provides a structured, recurring anonymous check-in for students to communicate academic pressure, assignment overload, exam stress, and study-life balance without fear of judgment.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-campus-700">
                Safe Communication Channel →
              </div>
            </div>

            {/* 2. Why Anonymity Matters */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-calm-100 text-calm-700 flex items-center justify-center mb-5">
                  <Lock className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  2. Why Anonymity Matters
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Students hesitate to seek help due to academic stigma, fear of faculty bias, or grading repercussions. Absolute anonymity eliminates barriers, allowing students to be 100% honest.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-calm-700">
                Zero Personal Tracking →
              </div>
            </div>

            {/* 3. How Students Benefit */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  3. How Students Benefit
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Gain immediate access to verified campus counsellors, academic mentors, and practical exam prep guides, alongside private reflection tracking stored strictly on their device.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-indigo-700">
                Actionable Academic Resources →
              </div>
            </div>

            {/* 4. How Colleges Benefit */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  4. How Colleges Benefit
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Deans and student coordinators obtain aggregated real-time visibility into systemic difficulties—such as midterm crunch weeks or assignment pile-ups—to allocate resources effectively.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-xs font-semibold text-amber-800">
                Institutional Patterns Detected →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAMPLE AGGREGATE PREVIEW (Demonstrating "Listen to students without exposing them") */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-campus-950 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-campus-500/20 text-campus-300 text-xs font-medium mb-4 border border-campus-400/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Aggregated Intelligence • Not Individual Profiling</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4">
                Colleges see the patterns. You keep your privacy.
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
                Rather than singling out individual students with risk scores, CampusCare aggregates feedback into macro-level trends. If 60% of students report high exam stress before midterms, the college can organize review workshops and adjust deadlines.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="inline-flex items-center px-5 py-2.5 bg-campus-600 hover:bg-campus-500 text-white font-medium rounded-xl text-sm transition-all"
                >
                  <span>View Administrator Analytics</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>

                <button
                  onClick={() => onNavigate('resources')}
                  className="inline-flex items-center px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl text-sm border border-slate-700 transition-all"
                >
                  <span>Browse Student Resources</span>
                </button>
              </div>
            </div>

            {/* Quick Stat Pill Display */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 block mb-1">Academic Pressure</span>
                <span className="text-2xl font-extrabold text-white">42% High</span>
                <span className="text-[11px] text-campus-300 block mt-1">Campus aggregated</span>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 block mb-1">Exam Stress</span>
                <span className="text-2xl font-extrabold text-white">51% High</span>
                <span className="text-[11px] text-campus-300 block mt-1">Midterm cycle</span>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 block mb-1">Assignment Load</span>
                <span className="text-2xl font-extrabold text-white">37% High</span>
                <span className="text-[11px] text-campus-300 block mt-1">Reported this week</span>
              </div>
              <div className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-700/80">
                <span className="text-xs text-slate-400 block mb-1">Sleep/Study Balance</span>
                <span className="text-2xl font-extrabold text-amber-300">29% Poor</span>
                <span className="text-[11px] text-slate-400 block mt-1">Support suggested</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
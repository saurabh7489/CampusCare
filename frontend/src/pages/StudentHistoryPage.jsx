import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Lock, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  HeartHandshake, 
  CheckCircle2,
  Clock,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { getPrivateCheckInHistory, clearPrivateCheckInHistory } from '../utils/storage.js';

export default function StudentHistoryPage({ onNavigate = () => {} }) {
  const [history, setHistory] = useState([]);
  const [clearedNotice, setClearedNotice] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const records = getPrivateCheckInHistory();
    setHistory(records);
  };

  const handleClearHistory = () => {
    if (window.confirm('Are you sure you want to clear your local check-in history? This cannot be undone.')) {
      clearPrivateCheckInHistory();
      setHistory([]);
      setClearedNotice(true);
      setTimeout(() => setClearedNotice(false), 4000);
    }
  };

  // Badge pill color helper
  const getPillClass = (value, goodVal = 'Low') => {
    if (value === goodVal || value === 'Good') {
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    }
    if (value === 'Medium' || value === 'Okay') {
      return 'bg-amber-50 text-amber-700 border-amber-200';
    }
    return 'bg-rose-50 text-rose-700 border-rose-200';
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-campus-50 text-campus-700 text-xs font-semibold mb-2 border border-campus-200">
            <Lock className="w-3.5 h-3.5" />
            <span>Private Device Storage • Never Sent to Administrators</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            My Check-in History
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Privately reflect on how your academic workload and stress have evolved over time.
          </p>
        </div>

        {history.length > 0 && (
          <button
            onClick={handleClearHistory}
            className="inline-flex items-center space-x-2 px-3.5 py-2 text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors self-start sm:self-auto"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear Private History</span>
          </button>
        )}
      </div>

      {/* Cleared Notice Alert */}
      {clearedNotice && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Your private check-in records have been wiped from this device.</span>
        </div>
      )}

      {/* Privacy Guarantee Card */}
      <div className="bg-campus-50/60 border border-campus-200 rounded-2xl p-4 sm:p-5 flex items-start space-x-4">
        <div className="w-10 h-10 rounded-xl bg-campus-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="text-xs text-slate-600 leading-relaxed space-y-1">
          <span className="font-bold text-slate-900 text-sm block">
            Why is this history strictly private?
          </span>
          <p>
            Under CampusCare's privacy architecture, administrators only see aggregated numbers (e.g. <em>"42% High Academic Pressure"</em>). Individual logs remain isolated in your browser's local storage so you can review personal patterns without ever being surveilled.
          </p>
        </div>
      </div>

      {/* History Timeline */}
      {history.length === 0 ? (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-xs">
          <div className="w-16 h-16 bg-slate-100 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            No check-in history yet
          </h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto mb-8">
            Whenever you complete an anonymous wellbeing check-in, a private copy is saved here on your device so you can monitor your academic balance over time.
          </p>
          <button
            onClick={() => onNavigate('checkin')}
            className="inline-flex items-center px-6 py-3 bg-campus-700 hover:bg-campus-800 text-white font-semibold rounded-xl text-sm transition-all"
          >
            <span>Take Your First Check-in</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      ) : (
        /* List of Check-ins */
        <div className="space-y-4">
          {history.map((item, idx) => {
            const dateObj = new Date(item.createdAt);
            const formattedDate = dateObj.toLocaleDateString(undefined, {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            });
            const formattedTime = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            return (
              <div 
                key={item.id || idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-campus-600" />
                    <span className="font-bold text-slate-900 text-sm">{formattedDate}</span>
                    <span className="text-xs text-slate-400">• {formattedTime}</span>
                  </div>

                  <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${getPillClass(item.overallFeeling, 'Good')}`}>
                    Overall: {item.overallFeeling}
                  </span>
                </div>

                {/* 5 Core Factors Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-4">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">Academic Pressure</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getPillClass(item.academicPressure)}`}>
                      {item.academicPressure}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">Workload</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getPillClass(item.assignmentWorkload)}`}>
                      {item.assignmentWorkload}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">Exam Stress</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getPillClass(item.examStress)}`}>
                      {item.examStress}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">Sleep/Study</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getPillClass(item.sleepStudyBalance, 'Good')}`}>
                      {item.sleepStudyBalance}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/60 col-span-2 sm:col-span-1">
                    <span className="text-[11px] font-medium text-slate-500 block mb-1">Social Pressure</span>
                    <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold border ${getPillClass(item.socialPressure)}`}>
                      {item.socialPressure}
                    </span>
                  </div>
                </div>

                {/* Optional Feedback (if provided) */}
                {item.optionalFeedback && (
                  <div className="pt-3 border-t border-slate-100 text-xs">
                    <span className="font-semibold text-slate-700 block mb-1">Private Reflection Note:</span>
                    <p className="text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                      "{item.optionalFeedback}"
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
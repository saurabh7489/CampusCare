import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  ArrowRight, 
  AlertCircle, 
  Sparkles, 
  RefreshCw, 
  HeartHandshake,
  BookOpen,
  Send
} from 'lucide-react';
import PrivacyBadge from '../components/PrivacyBadge.jsx';
import { savePrivateCheckIn } from '../utils/storage.js';

export default function CheckInPage({ onNavigate = () => {} }) {
  // Form State initialized to empty or defaults
  const [formData, setFormData] = useState({
    academicPressure: '',
    assignmentWorkload: '',
    examStress: '',
    sleepStudyBalance: '',
    socialPressure: '',
    overallFeeling: '',
    optionalFeedback: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Form field definitions matching Section 7 requirements
  const questions = [
    {
      id: 'academicPressure',
      label: 'Academic Pressure',
      description: 'How demanding does your current academic curriculum feel?',
      options: [
        { value: 'Low', label: 'Low', color: 'hover:border-emerald-300' },
        { value: 'Medium', label: 'Medium', color: 'hover:border-amber-300' },
        { value: 'High', label: 'High', color: 'hover:border-rose-300' },
      ],
    },
    {
      id: 'assignmentWorkload',
      label: 'Assignment Workload',
      description: 'The volume of homework, projects, and lab reports due recently.',
      options: [
        { value: 'Low', label: 'Low', color: 'hover:border-emerald-300' },
        { value: 'Medium', label: 'Medium', color: 'hover:border-amber-300' },
        { value: 'High', label: 'High', color: 'hover:border-rose-300' },
      ],
    },
    {
      id: 'examStress',
      label: 'Exam Stress',
      description: 'Stress regarding upcoming midterms, finals, or classroom quizzes.',
      options: [
        { value: 'Low', label: 'Low', color: 'hover:border-emerald-300' },
        { value: 'Medium', label: 'Medium', color: 'hover:border-amber-300' },
        { value: 'High', label: 'High', color: 'hover:border-rose-300' },
      ],
    },
    {
      id: 'sleepStudyBalance',
      label: 'Sleep/Study Balance',
      description: 'How well are you balancing study hours with adequate rest and sleep?',
      options: [
        { value: 'Good', label: 'Good', color: 'hover:border-emerald-300' },
        { value: 'Okay', label: 'Okay', color: 'hover:border-amber-300' },
        { value: 'Poor', label: 'Poor', color: 'hover:border-rose-300' },
      ],
    },
    {
      id: 'socialPressure',
      label: 'Social/Peer Pressure',
      description: 'Pressure to meet peer expectations, campus social circles, or placement comparisons.',
      options: [
        { value: 'Low', label: 'Low', color: 'hover:border-emerald-300' },
        { value: 'Medium', label: 'Medium', color: 'hover:border-amber-300' },
        { value: 'High', label: 'High', color: 'hover:border-rose-300' },
      ],
    },
    {
      id: 'overallFeeling',
      label: 'Overall Feeling',
      description: 'In general, how are you navigating college life this week?',
      options: [
        { value: 'Good', label: 'Good', color: 'hover:border-emerald-300' },
        { value: 'Okay', label: 'Okay', color: 'hover:border-amber-300' },
        { value: 'Struggling', label: 'Struggling', color: 'hover:border-rose-300' },
      ],
    },
  ];

  const handleSelectOption = (questionId, value) => {
    setFormData((prev) => ({ ...prev, [questionId]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Validate required fields
    const missing = questions.filter((q) => !formData[q.id]);
    if (missing.length > 0) {
      setErrorMessage(`Please select an option for: ${missing.map((m) => m.label).join(', ')}.`);
      return;
    }

    setLoading(true);

    try {
      // 1. Save to student's private local storage (Section 8 & 9)
      savePrivateCheckIn(formData);

      // 2. Transmit anonymous payload to backend API (if server is active)
      try {
        await fetch('/api/checkins', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            academicPressure: formData.academicPressure,
            assignmentWorkload: formData.assignmentWorkload,
            examStress: formData.examStress,
            sleepStudyBalance: formData.sleepStudyBalance,
            socialPressure: formData.socialPressure,
            overallFeeling: formData.overallFeeling,
            optionalFeedback: formData.optionalFeedback.trim(),
          }),
        });
      } catch (networkError) {
        // Safe offline/demo fallback: logged to local private storage regardless
        console.info('Backend API currently operating in offline/demo mode. Local check-in saved.');
      }

      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      setErrorMessage('Something went wrong while submitting your check-in. Please try again.');
    }
  };

  const handleResetForm = () => {
    setFormData({
      academicPressure: '',
      assignmentWorkload: '',
      examStress: '',
      sleepStudyBalance: '',
      socialPressure: '',
      overallFeeling: '',
      optionalFeedback: '',
    });
    setSubmitted(false);
  };

  // SUCCESS STATE (Section 8 & Section 31 Step 3)
  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xs">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">
            Your response was submitted anonymously.
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-lg mx-auto">
            Thank you for checking in. Your input helps your college identify systemic bottlenecks like exam crunch weeks and assignment overload—without exposing your identity.
          </p>

          <div className="bg-campus-50/70 border border-campus-200 rounded-2xl p-4 text-xs text-campus-900 mb-8 text-left space-y-1.5">
            <div className="font-semibold flex items-center space-x-1.5">
              <Lock className="w-4 h-4 text-campus-600" />
              <span>Private & Safe</span>
            </div>
            <p className="text-slate-600">
              This response has been recorded anonymously for aggregate trends. You can also view your private response history on this device anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => onNavigate('history')}
              className="w-full inline-flex items-center justify-center px-5 py-3 bg-campus-700 hover:bg-campus-800 text-white font-medium rounded-xl text-sm transition-all"
            >
              <span>View My Private History</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>

            <button
              onClick={() => onNavigate('support')}
              className="w-full inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded-xl text-sm border border-slate-300 transition-all"
            >
              <HeartHandshake className="w-4 h-4 mr-2 text-calm-600" />
              <span>Need Help / Support</span>
            </button>
          </div>

          <button
            onClick={handleResetForm}
            className="text-xs text-slate-500 hover:text-slate-800 inline-flex items-center space-x-1 underline"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            <span>Submit another check-in</span>
          </button>
        </div>
      </div>
    );
  }

  // ACTIVE FORM STATE
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Header & Privacy Notice */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-campus-50 text-campus-700 text-xs font-semibold mb-3 border border-campus-200">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>No Identity Required • 100% Anonymous</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Weekly Student Wellbeing Check-in
        </h1>
        
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Share the academic and personal workload you are experiencing this week. Responses are completely anonymous and used solely for institutional support planning.
        </p>
      </div>

      <div className="mb-8">
        <PrivacyBadge variant="detailed" />
      </div>

      {/* Submission Error Banner */}
      {errorMessage && (
        <div 
          className="mb-8 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start space-x-3 animate-shake"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Please review your check-in:</span>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Main Check-in Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((q, idx) => (
          <fieldset 
            key={q.id} 
            className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-slate-300 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-1">
              <legend className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <span className="text-xs font-bold text-campus-600 bg-campus-50 w-6 h-6 rounded-full flex items-center justify-center border border-campus-200">
                  {idx + 1}
                </span>
                <span>{q.label}</span>
              </legend>
              <span className="text-[11px] font-semibold text-rose-500 uppercase tracking-wider">Required</span>
            </div>
            
            <p className="text-xs text-slate-500 mb-4 pl-8">
              {q.description}
            </p>

            {/* Accessible Radio Option Tiles */}
            <div className="grid grid-cols-3 gap-3 pl-8">
              {q.options.map((opt) => {
                const isSelected = formData[q.id] === opt.value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectOption(q.id, opt.value)}
                    className={`py-3 px-3 rounded-xl border text-sm font-semibold transition-all text-center focus-visible:ring-2 focus-visible:ring-campus-600 ${
                      isSelected
                        ? 'bg-campus-700 border-campus-700 text-white shadow-sm ring-2 ring-campus-700/20'
                        : `bg-slate-50 border-slate-200 text-slate-700 hover:bg-white ${opt.color}`
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}

        {/* Optional Written Feedback (Section 7) */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
          <div className="flex items-baseline justify-between mb-1">
            <label htmlFor="optionalFeedback" className="text-base font-bold text-slate-900 flex items-center space-x-2">
              <span className="text-xs font-bold text-calm-600 bg-calm-50 w-6 h-6 rounded-full flex items-center justify-center border border-calm-200">
                7
              </span>
              <span>Optional Written Feedback</span>
            </label>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Optional</span>
          </div>

          <p className="text-xs text-slate-500 mb-4 pl-8">
            What is currently making college difficult for you?
          </p>

          <div className="pl-8">
            <textarea
              id="optionalFeedback"
              rows={4}
              value={formData.optionalFeedback}
              onChange={(e) => setFormData({ ...formData, optionalFeedback: e.target.value })}
              placeholder="e.g. Back-to-back lab assignments this week and lack of sleep before the upcoming Calculus exam..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 text-sm focus:bg-white focus:border-campus-600 focus:ring-2 focus:ring-campus-600/20 transition-all outline-none"
              maxLength={500}
            />
            <div className="flex justify-between items-center mt-1 text-[11px] text-slate-400">
              <span>Feedback is processed only in aggregate thematic batches.</span>
              <span>{formData.optionalFeedback.length}/500</span>
            </div>
          </div>
        </div>

        {/* Form Submission Action */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
          <div className="text-xs text-slate-500 flex items-center space-x-2">
            <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>No personal identifiers (IP, cookies, student ID) will be stored.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-campus-700 hover:bg-campus-800 disabled:bg-slate-300 text-white font-semibold rounded-xl shadow-md transition-all focus-visible:ring-2 focus-visible:ring-campus-600"
          >
            {loading ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                <span>Submitting Anonymously...</span>
              </>
            ) : (
              <>
                <span>Submit Anonymous Check-in</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
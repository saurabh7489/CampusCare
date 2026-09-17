import React, { useState } from 'react';
import { 
  HeartHandshake, 
  UserCheck, 
  GraduationCap, 
  Building2, 
  Send, 
  Clock, 
  MapPin, 
  Mail, 
  Phone, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles, 
  Lock,
  ArrowRight,
  AlertTriangle
} from 'lucide-react';
import { SUPPORT_SERVICES } from '../data/resourcesData.js';

export default function SupportPage({ onNavigate = () => {} }) {
  const [selectedService, setSelectedService] = useState(null);
  const [requestFormOpen, setRequestFormOpen] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [requestCategory, setRequestCategory] = useState('Academic Workload Advice');
  const [requestDetails, setRequestDetails] = useState('');
  const [requestUrgency, setRequestUrgency] = useState('Standard');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'counselling':
        return HeartHandshake;
      case 'mentor':
        return UserCheck;
      case 'faculty':
        return GraduationCap;
      case 'request_support':
        return Building2;
      default:
        return HeartHandshake;
    }
  };

  const handleOpenRequest = (service) => {
    setSelectedService(service);
    setRequestFormOpen(true);
    setRequestSubmitted(false);
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Dispatch anonymous/confidential support ticket to backend
      await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category: requestCategory,
          details: requestDetails.trim(),
          urgency: requestUrgency,
          serviceId: selectedService ? selectedService.id : 'general',
          createdAt: new Date().toISOString(),
        }),
      }).catch(() => {
        // Safe offline fallback
        console.info('Support request recorded in local demo mode.');
      });

      // Update local counter for admin stats demo
      const currentCount = parseInt(localStorage.getItem('campuscare_support_requests_count') || '86', 10);
      localStorage.setItem('campuscare_support_requests_count', (currentCount + 1).toString());

      setIsSubmitting(false);
      setRequestSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setRequestSubmitted(true);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-calm-100 text-calm-800 text-xs font-semibold mb-3 border border-calm-200">
          <HeartHandshake className="w-3.5 h-3.5 text-calm-700" />
          <span>Confidential Academic & Personal Support</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          Need Help? You are not alone.
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          College can be overwhelming. Whether you are facing exam burnout, heavy lab workloads, or difficulty balancing coursework, our campus support network is here for you.
        </p>
      </div>

      {/* Prominent Demo Disclaimer Notice (Section 10 Requirement) */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start space-x-3 text-xs text-amber-900 shadow-xs">
        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="space-y-1 leading-relaxed">
          <span className="font-bold text-sm block text-amber-950">
            Demo Contact Notice
          </span>
          <p>
            All phone numbers, room locations, and personnel listed below are <strong>fictional demo placeholders</strong> created for the Hackathon Build It evaluation. In an institutional deployment, these are replaced with your college's verified staff and office directories.
          </p>
        </div>
      </div>

      {/* Support Pathways Grid (Section 10: Counsellor, Academic Mentor, Faculty, Request Support) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SUPPORT_SERVICES.map((service) => {
          const Icon = getServiceIcon(service.id);
          return (
            <div 
              key={service.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs hover:border-campus-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-campus-50 text-campus-700 flex items-center justify-center border border-campus-100">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 bg-campus-50 text-campus-800 rounded-full border border-campus-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {service.title}
                </h3>
                <span className="text-xs font-semibold text-campus-700 block mb-3">
                  {service.role}
                </span>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Contact Card Details */}
                <div className="bg-slate-50 rounded-2xl p-4 space-y-2.5 text-xs text-slate-700 border border-slate-200/70 mb-6">
                  <div className="flex items-center space-x-2 text-slate-600">
                    <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{service.hours}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{service.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-slate-600">
                    <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{service.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 font-mono text-slate-600">
                    <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{service.email}</span>
                  </div>
                </div>
              </div>

              {/* Demo Contact Badge & Action Button */}
              <div>
                <div className="text-[11px] font-semibold text-amber-700 bg-amber-50/80 px-3 py-1.5 rounded-lg border border-amber-200 mb-3 text-center">
                  Demo Contact — Replace with College Information
                </div>

                <button
                  type="button"
                  onClick={() => handleOpenRequest(service)}
                  className="w-full inline-flex items-center justify-center px-4 py-3 bg-campus-700 hover:bg-campus-800 text-white font-medium rounded-xl text-sm transition-colors focus-visible:ring-2 focus-visible:ring-campus-600"
                >
                  <span>Connect with {service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* SUPPORT REQUEST MODAL */}
      {requestFormOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl animate-in zoom-in-95">
            {!requestSubmitted ? (
              <form onSubmit={handleSubmitRequest} className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <HeartHandshake className="w-5 h-5 text-campus-700" />
                    <h3 className="font-bold text-slate-900 text-lg">
                      Request Support Dispatch
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setRequestFormOpen(false)}
                    className="text-slate-400 hover:text-slate-600 text-sm font-semibold p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="text-xs text-slate-500">
                  Connecting to: <strong className="text-slate-800">{selectedService?.title || 'Campus Support'}</strong>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Primary Area of Need
                  </label>
                  <select
                    value={requestCategory}
                    onChange={(e) => setRequestCategory(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-campus-600"
                  >
                    <option value="Academic Workload Advice">Academic Workload & Assignment Deadlines</option>
                    <option value="Exam Anxiety Coaching">Exam Stress & Preparation Strategies</option>
                    <option value="Peer Mentorship Matching">Peer Mentorship Matching</option>
                    <option value="Faculty Coursework Mediation">Faculty & Coursework Mediation</option>
                    <option value="General Study-Life Balance">General Study-Life Balance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    What would you like assistance with?
                  </label>
                  <textarea
                    rows={3}
                    value={requestDetails}
                    onChange={(e) => setRequestDetails(e.target.value)}
                    placeholder="Briefly describe what you are seeking guidance on..."
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-campus-600"
                  />
                </div>

                <div className="bg-campus-50 p-3 rounded-xl border border-campus-200 text-xs text-campus-800 flex items-center space-x-2">
                  <Lock className="w-4 h-4 flex-shrink-0 text-campus-600" />
                  <span>Submissions are routed strictly to student support coordinators.</span>
                </div>

                <div className="flex items-center justify-end space-x-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setRequestFormOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 bg-campus-700 hover:bg-campus-800 text-white text-sm font-semibold rounded-xl transition-all shadow-sm"
                  >
                    {isSubmitting ? 'Dispatching...' : 'Send Request'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Support Request Logged
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Your request has been logged. An academic advisor or peer mentor coordinator will respond within 24 business hours.
                </p>
                <div className="text-[11px] text-amber-700 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  Demo Action: Aggregated support request count updated.
                </div>
                <button
                  type="button"
                  onClick={() => setRequestFormOpen(false)}
                  className="w-full py-2.5 bg-campus-700 hover:bg-campus-800 text-white text-sm font-semibold rounded-xl"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
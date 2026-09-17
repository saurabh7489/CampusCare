import React, { useState } from 'react';
import { 
  BookOpen, 
  Clock, 
  Compass, 
  CalendarCheck, 
  Heart, 
  AlertTriangle, 
  ShieldAlert, 
  ExternalLink, 
  CheckCircle2, 
  Bookmark,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { RESOURCE_CATEGORIES } from '../data/resourcesData.js';

export default function ResourcesPage({ onNavigate = () => {} }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const regularCategories = RESOURCE_CATEGORIES.filter((c) => !c.isEmergency);
  const emergencyCategory = RESOURCE_CATEGORIES.find((c) => c.isEmergency);

  const displayedCategories = activeCategory === 'all' 
    ? regularCategories 
    : regularCategories.filter((c) => c.id === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-campus-50 text-campus-700 text-xs font-semibold mb-3 border border-campus-200">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Practical Academic & Personal Self-Care Library</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
          College Success & Wellbeing Guides
        </h1>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Curated, evidence-based academic frameworks to help you organize assignment loads, navigate midterm study cycles, and protect your sleep-study balance.
        </p>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-4">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeCategory === 'all'
              ? 'bg-campus-700 text-white shadow-xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Resources
        </button>
        {regularCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeCategory === cat.id
                ? 'bg-campus-700 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Main Educational Resources Grid */}
      <div className="space-y-10">
        {displayedCategories.map((category) => (
          <div key={category.id} className="space-y-4">
            <div className="border-b border-slate-200 pb-2">
              <h2 className="text-xl font-bold text-slate-900 flex items-center space-x-2">
                <Bookmark className="w-5 h-5 text-campus-700" />
                <span>{category.title}</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                {category.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-campus-300 hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                      <span className="font-semibold text-campus-700 bg-campus-50 px-2.5 py-0.5 rounded-full border border-campus-200">
                        {item.type}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-campus-700 hover:text-campus-900 cursor-pointer flex items-center space-x-1">
                      <span>Read Full Guide</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[10px] text-slate-400">Open Access</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CLEARLY SEPARATED EMERGENCY & URGENT SUPPORT SECTION (Section 11 Requirement) */}
      {emergencyCategory && (
        <section className="bg-rose-50/60 border-2 border-rose-200 rounded-3xl p-6 sm:p-8 mt-12">
          <div className="flex items-start space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center flex-shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-rose-950">
                {emergencyCategory.title}
              </h2>
              <p className="text-xs text-rose-800 mt-1">
                {emergencyCategory.summary}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {emergencyCategory.items.map((em, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-rose-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-rose-700 block mb-1">
                    {em.name}
                  </span>
                  <div className="text-sm font-mono font-extrabold text-slate-900 mb-2 flex items-center space-x-1.5">
                    <PhoneCall className="w-4 h-4 text-rose-600" />
                    <span>{em.contact}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {em.description}
                  </p>
                </div>

                <div className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-200 text-center">
                  {em.disclaimer}
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs text-rose-900/80 bg-rose-100/70 p-3 rounded-xl border border-rose-200 flex items-center space-x-2">
            <AlertTriangle className="w-4 h-4 text-rose-700 flex-shrink-0" />
            <span>If you or someone around you is in immediate physical danger, call local emergency services immediately.</span>
          </div>
        </section>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Menu, 
  X, 
  Home, 
  ClipboardCheck, 
  HeartHandshake, 
  BookOpen, 
  BarChart3,
  Lock
} from 'lucide-react';

export default function Navbar({ activeTab = 'home', onNavigate = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'checkin', label: 'Check-in', icon: ClipboardCheck },
    { id: 'support', label: 'Support', icon: HeartHandshake },
    { id: 'resources', label: 'Resources', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      {/* Top micro-banner reassuring student anonymity */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 font-medium flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-3.5 h-3.5 text-campus-400" />
            <span>Anonymous Student Space • Private & Non-Diagnostic</span>
          </div>
          <span className="hidden sm:inline-block text-[11px] text-amber-300 font-semibold uppercase tracking-wider bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
            Build It Prototype
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none"
            onClick={() => handleNavClick('home')}
            role="button"
            tabIndex={0}
            aria-label="CampusCare Home"
            onKeyDown={(e) => e.key === 'Enter' && handleNavClick('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-campus-700 text-white flex items-center justify-center shadow-md shadow-campus-700/20 transition-transform hover:scale-105">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-xl text-slate-900 tracking-tight block leading-none">
                CampusCare
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wide">
                Student Wellbeing & Academic Support
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links (Home | Check-in | Support | Resources | Dashboard) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-campus-50 text-campus-700 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-campus-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick CTA button on desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick('checkin')}
              className="px-4 py-2 bg-campus-700 hover:bg-campus-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-campus-600"
            >
              Check-in Now
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-campus-600"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-5 space-y-1 shadow-lg animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-colors text-left ${
                  isActive
                    ? 'bg-campus-50 text-campus-700 font-semibold'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-campus-600' : 'text-slate-400'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          
          <div className="pt-3 border-t border-slate-100 mt-2">
            <button
              onClick={() => handleNavClick('checkin')}
              className="w-full py-3 bg-campus-700 hover:bg-campus-800 text-white font-medium rounded-xl text-center shadow-sm text-sm"
            >
              Take Anonymous Check-in
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
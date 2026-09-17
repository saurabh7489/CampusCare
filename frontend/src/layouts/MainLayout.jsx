import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function MainLayout({ children, activeTab = 'home', onNavigate = () => {} }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      {/* Sticky Top Navigation Bar */}
      <Navbar activeTab={activeTab} onNavigate={onNavigate} />

      {/* Main Page Dynamic Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Bottom Footer with Disclaimers */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
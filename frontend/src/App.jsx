     
     
     
     
     import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import CheckInPage from './pages/CheckInPage.jsx';
import StudentHistoryPage from './pages/StudentHistoryPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import ResourcesPage from './pages/ResourcesPage.jsx';
import AdminDashboardPage from './pages/AdminDashboardPage.jsx';
export default function App() {
  // Navigation State (home, checkin, support, resources, dashboard, history)
  const [currentTab, setCurrentTab] = useState(() => {
    // Check initial URL hash if present
    const hash = window.location.hash.replace('#', '');
    const validTabs = ['home', 'checkin', 'support', 'resources', 'dashboard', 'history'];
    return validTabs.includes(hash) ? hash : 'home';
  });
  // Keep URL hash in sync with active view
  useEffect(() => {
    window.location.hash = currentTab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);
  // Handle browser back/forward button clicks
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
     const validTabs = ['home', 'checkin', 'support', 'resources', 'dashboard', 'history'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  const handleNavigate = (tabId) => {
    setCurrentTab(tabId);
  };
  // Render the appropriate page component
  const renderCurrentPage = () => {
    switch (currentTab) {
      case 'home':
        return <LandingPage onNavigate={handleNavigate} />;
      case 'checkin':
        return <CheckInPage onNavigate={handleNavigate} />;
      case 'support':
        return <SupportPage onNavigate={handleNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={handleNavigate} />;
      case 'dashboard':
        return <AdminDashboardPage onNavigate={handleNavigate} />;
      case 'history':
        return <StudentHistoryPage onNavigate={handleNavigate} />;
      default:
        return <LandingPage onNavigate={handleNavigate} />;
    }
  };
  return (
    <MainLayout activeTab={currentTab} onNavigate={handleNavigate}>
      {renderCurrentPage()}
    </MainLayout>
  );
}
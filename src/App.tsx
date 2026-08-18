import React, { useEffect, Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import PortfolioBackground from './components/common/PortfolioBackground';
import MouseGlow from './components/common/MouseGlow';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

const SectionFallback: React.FC = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-orange-500/30 border-t-orange-500 animate-spin" />
  </div>
);

// Automatic scroll handler for route & in-page anchor hashes
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-100 relative selection:bg-orange-500 selection:text-white flex flex-col justify-between overflow-x-hidden">
      <ScrollToTop />
      
      {/* Global Futuristic Technical Background & Spotlight */}
      <PortfolioBackground />
      <MouseGlow />

      {/* Shared Navbar */}
      <Navbar />

      {/* Main Page Content Outlet */}
      <main className="relative z-10 flex-1 pt-24 pb-12 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<SectionFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default App;

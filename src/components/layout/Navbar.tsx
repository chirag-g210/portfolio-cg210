import React, { useState, useEffect, useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Download, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import { useScroll } from '../../hooks/useScroll';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = memo(() => {
  const { scrolled } = useScroll(20);
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen, closeMobileMenu]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-300 ${
        scrolled
          ? 'bg-[#02040A]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/80'
          : 'bg-[#02040A]/40 backdrop-blur-md border-b border-white/[0.05]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        
        {/* Left: Developer Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#02040A] rounded-xl"
          aria-label={`${PERSONAL_INFO.name} - Full Stack Developer`}
        >
          <img
            src="/favicon.png"
            alt="Chirag Gupta"
            className="w-9 h-9 rounded-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-sm sm:text-base text-white tracking-tight group-hover:text-[#F97316] transition-colors leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-medium tracking-wider text-slate-400">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (>=768px) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 lg:gap-1.5 px-4 py-1.5 rounded-full glass-card-premium border border-white/[0.08] shadow-lg shadow-black/40"
        >
          {NAV_ITEMS.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] rounded-md ${
                  isActive ? 'text-[#F97316] font-semibold' : 'text-slate-400 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-underline"
                    className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#F97316] to-[#EA580C] rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)] z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Desktop CTA Buttons (>=768px) */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.03] hover:bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <Download className="w-3.5 h-3.5 text-[#F97316]" />
            <span>Download Resume</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#FB923C] hover:to-[#F97316] shadow-md shadow-[#F97316]/20 border border-orange-400/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle (<768px) */}
        <button
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle Mobile Menu"
          className="md:hidden p-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Animated Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden absolute top-[72px] left-0 right-0 bg-[#02040A]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className={`px-4 py-3 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? 'bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.03] hover:bg-orange-500/10 border border-orange-500/30 transition-all"
                >
                  <Download className="w-4 h-4 text-[#F97316]" />
                  <span>Download Resume</span>
                </a>
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] shadow-md shadow-[#F97316]/20 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

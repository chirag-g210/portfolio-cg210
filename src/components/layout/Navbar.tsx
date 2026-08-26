import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Download, Send } from 'lucide-react';
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

        {/* Right: Desktop CTA Buttons (>=768px) & Mobile Resume Button (<768px) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold text-slate-200 bg-white/[0.03] hover:bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/60 shadow-sm transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
            aria-label="Download Resume"
          >
            <Download className="w-3.5 h-3.5 text-[#F97316]" />
            <span className="hidden xs:inline sm:inline">Download</span>
            <span>Resume</span>
          </a>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#FB923C] hover:to-[#F97316] shadow-md shadow-[#F97316]/20 border border-orange-400/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;

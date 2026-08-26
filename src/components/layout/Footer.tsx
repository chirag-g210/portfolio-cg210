import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS } from '../../lib/constants';
import SocialLinks from '../common/SocialLinks';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#02040a] pt-14 pb-28 md:pb-14 relative z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="/favicon.png"
              alt="Chirag Gupta"
              className="w-10 h-10 rounded-full object-contain"
            />
            <div>
              <h3 className="font-extrabold text-lg text-white">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-xs text-slate-400">
                {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-xs font-semibold text-slate-400 hover:text-orange-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card-premium text-slate-300 hover:text-white hover:border-orange-500/40 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-orange-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

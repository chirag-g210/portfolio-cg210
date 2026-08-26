import React, { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, User, Briefcase, Send } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const MOBILE_NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Send },
];

export const MobileBottomNav: React.FC = memo(() => {
  const location = useLocation();

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#02040A]/90 backdrop-blur-2xl border-t border-white/[0.08] shadow-[0_-8px_30px_rgba(0,0,0,0.8)] pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="max-w-md mx-auto px-2 py-1.5 flex items-center justify-around">
        {MOBILE_NAV_ITEMS.map((item) => {
          const isActive =
            item.href === '/'
              ? location.pathname === '/'
              : location.pathname.startsWith(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.href}
              className={`relative flex-1 flex flex-col items-center justify-center py-1 px-1 rounded-xl transition-all duration-200 min-h-[48px] touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] ${
                isActive
                  ? 'text-[#F97316]'
                  : 'text-slate-400 hover:text-slate-200 active:scale-95'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active Background Pill & Indicator */}
              {isActive && (
                <motion.div
                  layoutId="mobile-bottom-nav-active-pill"
                  className="absolute inset-0 bg-[#F97316]/10 border border-[#F97316]/25 rounded-xl shadow-[0_0_12px_rgba(249,115,22,0.15)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center justify-center">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 text-[#F97316]' : 'text-slate-400'
                  }`}
                />
                <span
                  className={`text-[11px] mt-0.5 tracking-tight font-medium transition-colors ${
                    isActive ? 'font-semibold text-[#F97316]' : 'text-slate-400'
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
});

MobileBottomNav.displayName = 'MobileBottomNav';

export default MobileBottomNav;

import React, { memo } from 'react';
import { motion } from 'motion/react';

const PARTICLES = [
  { top: '12%', left: '8%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 0 },
  { top: '22%', left: '46%', size: 'w-1.5 h-1.5', color: 'bg-[#8B5CF6]', delay: 1 },
  { top: '60%', left: '6%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 2 },
  { top: '72%', left: '82%', size: 'w-1.5 h-1.5', color: 'bg-[#8B5CF6]', delay: 0.5 },
  { top: '10%', left: '85%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 1.5 },
  { top: '42%', left: '90%', size: 'w-1 h-1', color: 'bg-[#8B5CF6]', delay: 2.5 },
  { top: '78%', left: '40%', size: 'w-1.5 h-1.5', color: 'bg-[#F97316]', delay: 3 },
  { top: '32%', left: '16%', size: 'w-1 h-1', color: 'bg-[#8B5CF6]', delay: 1.8 },
  { top: '50%', left: '32%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 2.2 },
  { top: '18%', left: '68%', size: 'w-1.5 h-1.5', color: 'bg-[#8B5CF6]', delay: 0.8 },
  { top: '84%', left: '14%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 2.7 },
  { top: '68%', left: '65%', size: 'w-1.5 h-1.5', color: 'bg-[#8B5CF6]', delay: 1.2 },
  { top: '38%', left: '78%', size: 'w-1 h-1', color: 'bg-[#F97316]', delay: 3.2 },
  { top: '90%', left: '88%', size: 'w-1.5 h-1.5', color: 'bg-[#8B5CF6]', delay: 0.3 },
];

export const PortfolioBackground: React.FC = memo(() => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden bg-[#02040A]"
    >
      {/* 1. Subtle Dark Navy Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(15,23,42,0.6),rgba(2,4,10,1))]" />

      {/* 2. Technical Engineering Grid (40px x 40px) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_85%_70%_at_50%_35%,#000_60%,transparent_100%)] opacity-75" />

      {/* 3. Orange Ambient Glow (Upper-Left) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#F97316]/12 rounded-full blur-[150px]" />

      {/* 4. Purple Ambient Glow (Lower-Right) */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-[#8B5CF6]/12 rounded-full blur-[150px]" />

      {/* 5. Top-Left Orbital Accent Shape */}
      <svg className="absolute -top-32 -left-32 w-[700px] h-[700px] opacity-25 hidden md:block" viewBox="0 0 700 700" fill="none">
        <circle cx="220" cy="220" r="420" stroke="url(#global-orbital-grad)" strokeWidth="1.5" strokeDasharray="8 14" />
        <circle cx="220" cy="220" r="320" stroke="#F97316" strokeWidth="0.75" strokeOpacity="0.4" />
        <defs>
          <linearGradient id="global-orbital-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 6. Right-Side Atmospheric Lighting (Behind Code Card / Right Content) */}
      <div className="absolute top-1/3 right-8 w-[450px] h-[450px] bg-[#8B5CF6]/15 rounded-full blur-[130px] hidden md:block" />

      {/* 7. Flowing Orange-to-Purple Wave Lines (Lower Area) */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-0 left-0 right-0 w-full h-72 opacity-35 hidden sm:block"
      >
        <svg className="w-full h-full" viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none">
          <path d="M0,180 C360,300 720,100 1080,240 C1260,300 1440,180 1440,180 L1440,320 L0,320 Z" fill="url(#global-wave-gradient)" />
          <path d="M0,220 C400,120 760,280 1120,160 C1300,110 1440,220 1440,220" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.6" />
          <path d="M0,160 C440,270 840,120 1240,250 C1340,280 1440,190 1440,190" stroke="#8B5CF6" strokeWidth="1.2" strokeOpacity="0.5" />
          <defs>
            <linearGradient id="global-wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#02040A" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* 8. Floating Ambient Glowing Particles */}
      {PARTICLES.map((particle, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [0, -10, 0],
            opacity: [0.25, 0.75, 0.25],
          }}
          transition={{
            duration: 4 + (idx % 3),
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
          style={{ top: particle.top, left: particle.left }}
          className={`absolute ${particle.size} rounded-full ${particle.color} shadow-[0_0_10px_rgba(249,115,22,0.8)]`}
        />
      ))}

      {/* 9. Small Technical & Geometric Accents */}
      <div className="absolute top-20 right-14 w-20 h-20 grid grid-cols-5 gap-2 opacity-15 hidden lg:grid">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-slate-400" />
        ))}
      </div>
      <div className="absolute bottom-20 left-12 w-20 h-20 grid grid-cols-5 gap-2 opacity-15 hidden lg:grid">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-orange-400" />
        ))}
      </div>
      <div className="absolute top-1/3 left-6 opacity-25 font-mono text-[10px] text-orange-400/70 hidden lg:block tracking-widest">
        + SYS_GLOBAL // BACKDROP
      </div>
      <div className="absolute bottom-1/3 right-8 opacity-25 font-mono text-[10px] text-purple-400/70 hidden lg:block tracking-widest">
        [ 0x8F4A_GLOBAL ]
      </div>
    </div>
  );
});

PortfolioBackground.displayName = 'PortfolioBackground';

export default PortfolioBackground;

import React from 'react';
import { motion } from 'motion/react';

export const AnimatedGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#02040a]">
      {/* Animated Grid Pattern without inline styles */}
      <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.04] bg-grid-pattern" />

      {/* Floating Orange Glow Sphere */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[-10%] left-[-10%] w-[550px] h-[550px] rounded-full bg-gradient-to-br from-orange-500/20 to-orange-600/5 blur-[140px] pointer-events-none"
      />

      {/* Floating Purple Glow Sphere */}
      <motion.div
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-indigo-600/5 blur-[160px] pointer-events-none"
      />

      {/* Bottom Ambient Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-600/10 via-purple-600/10 to-transparent blur-[140px] pointer-events-none"
      />
    </div>
  );
};

export default AnimatedGrid;

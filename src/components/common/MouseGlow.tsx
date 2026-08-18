import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const MouseGlow: React.FC = () => {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics configuration
  const springConfig = { damping: 25, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mouse-spotlight-mask"
      ref={(node) => {
        if (!node) return;
        const unsubscribeX = smoothX.on('change', (v) => node.style.setProperty('--mouse-x', `${v}px`));
        const unsubscribeY = smoothY.on('change', (v) => node.style.setProperty('--mouse-y', `${v}px`));
        return () => {
          unsubscribeX();
          unsubscribeY();
        };
      }}
    />
  );
};

export default MouseGlow;

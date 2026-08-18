import React, { memo } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow' | 'purpleGlow';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = memo(({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-[#F97316] to-[#EA580C] hover:from-[#F97316]/90 hover:to-[#EA580C]/90 text-white shadow-lg shadow-[#F97316]/20 hover:shadow-[#F97316]/40 border border-[#F97316]/30 hover:scale-[1.02]',
    secondary: 'glass-card-premium text-slate-200 border border-white/[0.08] backdrop-blur-xl hover:border-[#F97316]/40 hover:text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]',
    outline: 'border border-white/10 text-slate-300 hover:text-white hover:border-[#F97316]/50 hover:bg-[#F97316]/5',
    ghost: 'text-slate-400 hover:text-white hover:bg-white/[0.05]',
    glow: 'bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#8B5CF6] hover:from-[#F97316] hover:to-[#8B5CF6] text-white shadow-lg shadow-[#F97316]/25 hover:shadow-[#8B5CF6]/40 border border-[#F97316]/30 hover:scale-[1.02]',
    purpleGlow: 'bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] hover:from-[#8B5CF6] hover:to-[#6D28D9] text-white shadow-lg shadow-[#8B5CF6]/25 hover:shadow-[#8B5CF6]/40 border border-[#8B5CF6]/30 hover:scale-[1.02]'
  };

  const sizes = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold',
    md: 'px-5 py-2.5 text-sm font-semibold',
    lg: 'px-7 py-3 text-base font-semibold'
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

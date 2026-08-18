import React, { memo } from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'orange' | 'purple' | 'gradient';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = memo(({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const variants = {
    default: 'bg-white/5 text-slate-300 border border-white/10',
    orange: 'bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 shadow-sm shadow-[#F97316]/10',
    purple: 'bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/20 shadow-sm shadow-[#8B5CF6]/10',
    gradient: 'bg-gradient-to-r from-[#F97316]/15 to-[#8B5CF6]/15 text-[#F97316] border border-[#F97316]/20'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;

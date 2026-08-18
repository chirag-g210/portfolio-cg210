import React, { memo } from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  glowColor?: 'orange' | 'purple' | 'both';
}

export const Card: React.FC<CardProps> = memo(({
  children,
  className,
  hoverEffect = true,
  glowColor = 'both',
  ...props
}) => {
  const glowClasses = {
    orange: 'hover:border-[#F97316]/40 hover:shadow-[0_0_25px_-5px_rgba(249,115,22,0.3)]',
    purple: 'hover:border-[#8B5CF6]/40 hover:shadow-[0_0_25px_-5px_rgba(139,92,246,0.3)]',
    both: 'hover:border-[#F97316]/30 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.25),0_0_20px_-5px_rgba(139,92,246,0.2)]'
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300 relative overflow-hidden glass-card-premium',
        hoverEffect && `hover:-translate-y-1 ${glowClasses[glowColor]}`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;

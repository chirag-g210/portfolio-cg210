import React, { memo } from 'react';
import Badge from '../ui/Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = memo(({
  badge,
  title,
  subtitle,
  centered = true
}) => {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : 'text-left'}`}>
      {badge && (
        <Badge variant="gradient" className="mb-4 uppercase tracking-widest text-[10px] py-1 px-3.5">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
});

SectionHeading.displayName = 'SectionHeading';

export default SectionHeading;

import React, { useState, useCallback, useMemo } from 'react';
import {
  Code2,
  FileCode,
  Terminal,
  Cpu,
  Database,
  Network,
  Globe,
  Palette,
  Atom,
  GitBranch,
  Code,
  Zap,
  Webhook,
  Bot,
  Sparkles,
  Boxes,
  Binary,
  Coffee
} from 'lucide-react';
import { skills } from '../../data/skills';
import { SkillCategory } from '../../types/skill';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

const categories: (SkillCategory | 'All')[] = [
  'All',
  'Programming',
  'Core CS',
  'Frontend',
  'Tools & Development',
  'APIs & AI'
];

const GitHubIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Coffee,
  Terminal,
  FileCode,
  Code2,
  Binary,
  Boxes,
  Database,
  Cpu,
  Network,
  Globe,
  Palette,
  Atom,
  Sparkles,
  GitBranch,
  Github: GitHubIcon,
  Code,
  Zap,
  Webhook,
  Bot
};

const getIcon = (name?: string): React.ComponentType<{ className?: string }> => {
  if (name && iconMap[name]) {
    return iconMap[name];
  }
  return Code2;
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const handleSelectCategory = useCallback((cat: SkillCategory | 'All') => {
    setSelectedCategory(cat);
  }, []);

  const filteredSkills = useMemo(() => {
    return selectedCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Technical Skills"
            title="Skills & Technologies"
            subtitle="Technologies and concepts I use to build projects and continuously improve my development skills."
          />
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal variant="fade" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelectCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20 border border-orange-400/30'
                    : 'glass-card-premium text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = getIcon(skill.iconName);
            return (
              <ScrollReveal key={skill.name} variant="slideUp" delay={0.03 * (index % 6)}>
                <Card className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-300 shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors truncate">
                          {skill.name}
                        </h3>
                      </div>
                      {skill.highlight && (
                        <div className="shrink-0 ml-2">
                          <Badge variant="orange">Core</Badge>
                        </div>
                      )}
                    </div>
                    {skill.description && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-slate-500 tracking-wide uppercase">
                      {skill.category}
                    </span>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;


import React, { useState, useCallback, useMemo } from 'react';
import { skills } from '../../data/skills';
import { SkillCategory } from '../../types/skill';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

const categories: (SkillCategory | 'All')[] = [
  'All',
  'Frontend',
  'Backend',
  'Cloud & DevOps',
  'Databases & Tools',
  'AI & Architecture'
];

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
            badge="Technical Mastery"
            title="Skills & Technologies"
            subtitle="Proficiency across modern frontend, backend, and cloud architectures."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} variant="slideUp" delay={0.05 * (index % 6)}>
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-base text-white flex items-center gap-2">
                    {skill.name}
                    {skill.highlight && <Badge variant="orange">Featured</Badge>}
                  </h3>
                  <span className="text-xs font-bold text-orange-400">{skill.level}%</span>
                </div>
                <p className="text-xs text-slate-400 mb-5 leading-relaxed">{skill.description}</p>
                
                {/* Progress bar */}
                <div className="w-full bg-slate-900/80 h-2 rounded-full overflow-hidden p-0.5 border border-white/5">
                  <div
                    className="bg-gradient-to-r from-orange-500 via-amber-500 to-purple-500 h-full rounded-full transition-all duration-500 shadow-sm shadow-orange-500/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

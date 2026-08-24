import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { experiences } from '../../data/experience';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            title="Experience"
            subtitle="My practical experience, learning journey, and growth as a software developer."
          />
        </ScrollReveal>

        <div className="relative border-l-2 border-orange-500/30 ml-4 md:ml-28 space-y-10">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.id} variant="slideUp" delay={0.15 * index}>
              <div className="relative pl-6 md:pl-10">
                {/* Glowing timeline node */}
                <div className="absolute -left-[17px] top-1.5 p-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-white ring-4 ring-[#02040a] shadow-lg shadow-orange-500/30">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>

                <Card className="p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-orange-400 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        {exp.location}
                      </span>
                      <Badge variant="purple">{exp.type}</Badge>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-orange-400 font-bold text-base">›</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

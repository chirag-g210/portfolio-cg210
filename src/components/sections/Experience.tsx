import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';
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
            title="Education & Experience"
            subtitle="academic journey, practical experience, and growth as a software developer."
          />
        </ScrollReveal>

        <div className="relative border-l-2 border-orange-500/30 ml-4 md:ml-28 space-y-10">
          {experiences.map((exp, index) => {
            const Icon = exp.iconType === 'education' ? GraduationCap : Briefcase;

            return (
              <ScrollReveal key={exp.id} variant="slideUp" delay={0.15 * index}>
                <div className="relative pl-6 md:pl-10">
                  {/* Glowing timeline node */}
                  <div
                    className={`absolute -left-[17px] top-1.5 p-2 rounded-full text-white ring-4 ring-[#02040a] shadow-lg ${
                      exp.current
                        ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-orange-500/40'
                        : 'bg-gradient-to-r from-orange-500 to-purple-600 shadow-orange-500/30'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  <Card className="p-7 group">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {exp.role}
                        </h3>
                        {exp.company && (
                          <div className="text-sm font-semibold text-orange-400 mt-0.5">
                            {exp.company}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-orange-400" />
                            {exp.location}
                          </span>
                        )}
                        {exp.status && (
                          <Badge
                            variant={
                              exp.current
                                ? 'gradient'
                                : exp.status.includes('Result')
                                ? 'orange'
                                : 'purple'
                            }
                          >
                            {exp.status}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {exp.result && exp.current && (
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          {exp.result}
                        </span>
                      </div>
                    )}

                    {exp.description && exp.description.length > 0 && (
                      <ul className="space-y-2.5 mb-5">
                        {exp.description.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed"
                          >
                            <span className="text-orange-400 font-bold text-base">›</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.skills && exp.skills.length > 0 && (
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
                    )}
                  </Card>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;

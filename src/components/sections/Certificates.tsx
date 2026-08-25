import React, { useState, useCallback, useMemo } from 'react';
import {
  Award,
  Eye,
  BrainCircuit,
  Bot,
  Cpu,
  BarChart3,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { certificates } from '../../data/certificates';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

const categories = [
  'All',
  'AI & Computer Vision',
  'Generative AI',
  'Artificial Intelligence',
  'Data & Analytics',
  'Cybersecurity'
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  BrainCircuit,
  Bot,
  Cpu,
  BarChart3,
  ShieldCheck,
  Award
};

const getIcon = (name?: string): React.ComponentType<{ className?: string }> => {
  if (name && iconMap[name]) {
    return iconMap[name];
  }
  return Award;
};

export const Certificates: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleSelectCategory = useCallback((cat: string) => {
    setSelectedCategory(cat);
  }, []);

  const filteredCertificates = useMemo(() => {
    return selectedCategory === 'All'
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Credentials"
            title="Certifications & Specializations"
            subtitle="Industry-verified software certifications and cloud credentials."
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => {
            const Icon = getIcon(cert.iconName);
            return (
              <ScrollReveal key={cert.id} variant="slideUp" delay={0.08 * index}>
                <Card className="p-6 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="orange" className="flex items-center gap-1 text-[11px]">
                        <span>{cert.category}</span>
                      </Badge>
                    </div>

                    <h3 className="font-bold text-lg text-white group-hover:text-orange-400 transition-colors mb-1.5 line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mb-4">
                      {cert.issuer}
                    </p>

                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-orange-400 transition-colors pt-4 border-t border-white/10 mt-2"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { certificates } from '../../data/certificates';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

export const Certificates: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <ScrollReveal key={cert.id} variant="slideUp" delay={0.12 * index}>
              <Card className="p-6 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/20">
                      <Award className="w-6 h-6" />
                    </div>
                    <Badge variant="orange" className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </Badge>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-1.5">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-orange-400 mb-5">
                    {cert.issuer} • {cert.issueDate}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-orange-400 transition-colors pt-4 border-t border-white/10"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

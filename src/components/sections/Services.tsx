import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code2, Sparkles, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../../data/services';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../common/ScrollReveal';

const iconMap = {
  Globe,
  Code2,
  Sparkles,
  Wrench,
  Layout: Globe,
  Layers: Code2
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Freelance Services"
            title="Services I Offer"
            subtitle="High-quality frontend development and website services tailored to help you launch, improve, or fix your web projects."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.iconName] || Globe;
            return (
              <ScrollReveal
                key={service.id}
                variant="scale"
                delay={0.1 * index}
                className="h-full"
              >
                <Card className="p-7 sm:p-8 h-full flex flex-col justify-between group hover:border-orange-500/40 transition-all duration-300">
                  <div>
                    {/* Header: Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:text-white transition-all duration-300 shadow-md shadow-orange-500/5 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-orange-400/90 font-medium mt-0.5">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Detailed Description */}
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        Key Capabilities:
                      </div>
                      <ul className="space-y-2">
                        {service.features.map((feature, fIdx) => (
                          <li
                            key={fIdx}
                            className="text-xs text-slate-300 flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Deliverable & CTA */}
                  <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    {service.deliverables && (
                      <span className="text-xs font-semibold text-slate-400">
                        📦 <span className="text-slate-200">{service.deliverables}</span>
                      </span>
                    )}
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors ml-auto group/link"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA prompt */}
        <ScrollReveal variant="fade" delay={0.4}>
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 rounded-2xl glass-card-premium border border-white/10 max-w-2xl mx-auto">
              <p className="text-sm text-slate-300 text-center sm:text-left">
                Need something specific or have a unique project idea in mind?
              </p>
              <Link to="/contact" className="shrink-0">
                <Button variant="primary" size="sm">
                  <span>Start a Project</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Services;

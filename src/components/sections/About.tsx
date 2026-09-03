import React from 'react';
import { Layout, Globe, Code2, HeartHandshake, User } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../common/ScrollReveal';

const highlights = [
  {
    icon: <Globe className="w-6 h-6 text-orange-400" />,
    title: 'Modern Website Development',
    description: 'Building modern, clean, and responsive websites with semantic HTML5, CSS3, Tailwind CSS, and JavaScript.'
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-400" />,
    title: 'React Frontend Applications',
    description: 'Creating interactive, component-driven user interfaces with React, state management, and seamless REST API integration.'
  },
  {
    icon: <Layout className="w-6 h-6 text-amber-400" />,
    title: 'Responsive & Accessible UI',
    description: 'Ensuring consistent layouts and intuitive user experiences across desktop, tablet, and mobile devices.'
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-pink-400" />,
    title: 'Freelance Collaboration',
    description: 'Dedicated to clear communication, meeting client specifications, and delivering polished, bug-free web solutions.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="About Me"
            title="Frontend & Web Developer"
            subtitle="Crafting modern, responsive, and user-focused web experiences with clean code and thoughtful design."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          {/* Main Bio Card */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="slideRight" delay={0.2}>
              <Card className="p-8">
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/20">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Hello! I'm {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-xs font-semibold text-orange-400 mt-0.5">
                      {PERSONAL_INFO.title}
                    </p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs font-semibold text-slate-400">
                  <div>📍 Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
                  <div>💼 Focus: <span className="text-orange-400">Modern Websites & Frontend Development</span></div>
                  <div>🚀 Availability: <span className="text-emerald-400">Freelance Projects</span></div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Core Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={item.title} variant="scale" delay={0.2 + index * 0.1}>
                <Card className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="shrink-0">{item.icon}</div>
                    <h4 className="font-bold text-sm text-white leading-snug">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

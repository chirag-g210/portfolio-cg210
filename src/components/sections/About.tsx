import React from 'react';
import { Terminal, Globe, Cpu, Rocket, User } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../common/ScrollReveal';

const highlights = [
  {
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    title: 'Problem Solving',
    description: 'Building strong foundations in Data Structures & Algorithms and applying logical problem-solving approaches to programming challenges.'
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-400" />,
    title: 'Web Development',
    description: 'Building responsive and interactive web applications using HTML, CSS, JavaScript, React, and modern frontend tools.'
  },
  {
    icon: <Cpu className="w-6 h-6 text-amber-400" />,
    title: 'Core CS',
    description: 'Strong understanding of Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.'
  },
  {
    icon: <Rocket className="w-6 h-6 text-pink-400" />,
    title: 'Continuous Learning',
    description: 'Continuously exploring new technologies, building practical projects, and improving software development skills through hands-on experience.'
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="About Me"
            title="Engineered for Innovation & Scale"
            subtitle="Crafting software that balances visual aesthetics with robust technical foundations."
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
                  <h3 className="text-2xl font-bold text-white">
                    Hello! I'm {PERSONAL_INFO.name}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base">
                  {PERSONAL_INFO.bio}
                </p>
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs font-semibold text-slate-400">
                  <div>📍 Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
                  <div>💼 Focus: <span className="text-orange-400">Software Development & Problem Solving</span></div>
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

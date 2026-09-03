import React from 'react';
import { Smartphone, Code, Palette, Target, MessageSquare, HeartHandshake } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../common/ScrollReveal';

interface ValuePillar {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  colorClass: string;
}

const pillars: ValuePillar[] = [
  {
    icon: Smartphone,
    title: 'Responsive & Mobile-Friendly',
    description:
      'Every website is built mobile-first, ensuring smooth layouts, quick tap targets, and crisp readability across phones, tablets, and desktops.',
    colorClass: 'text-orange-400 bg-orange-500/10 border-orange-500/20'
  },
  {
    icon: Code,
    title: 'Clean & Maintainable Code',
    description:
      'Structured, semantic, and modular frontend code that is easy to understand, maintain, and extend as your project grows.',
    colorClass: 'text-purple-400 bg-purple-500/10 border-purple-500/20'
  },
  {
    icon: Palette,
    title: 'Modern User Interfaces',
    description:
      'Clean layouts, intentional typography, balanced whitespace, and subtle micro-interactions that make your website feel polished and contemporary.',
    colorClass: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
  },
  {
    icon: Target,
    title: 'Attention to Requirements',
    description:
      'Careful focus on your exact specifications, design preferences, brand guidelines, and functional project scope.',
    colorClass: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'Transparent updates, prompt responses, and collaborative discussions throughout the development cycle.',
    colorClass: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
  },
  {
    icon: HeartHandshake,
    title: 'Focus on User Experience',
    description:
      'Fast loading times, intuitive navigation, accessible elements, and smooth interactions that keep visitors engaged.',
    colorClass: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
  }
];

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-work-with-me" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Client Commitment"
            title="Why Work With Me"
            subtitle="What you can expect when collaborating on your website or frontend development project."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                variant="scale"
                delay={0.08 * index}
                className="h-full"
              >
                <Card className="p-6 sm:p-7 h-full flex flex-col justify-between group">
                  <div>
                    <div className={`p-3 rounded-2xl border w-fit mb-4 ${pillar.colorClass} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
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

export default WhyWorkWithMe;

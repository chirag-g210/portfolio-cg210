import React from 'react';
import { Trophy, GitPullRequest, Flame, Zap } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../common/ScrollReveal';

const achievementsList = [
  {
    icon: <Trophy className="w-6 h-6 text-orange-400" />,
    title: 'Hackathon Champion',
    subtitle: '1st Place out of 250+ Teams',
    description: 'Built real-time collaborative AI canvas platform at Global Tech Innovators Hackathon.'
  },
  {
    icon: <GitPullRequest className="w-6 h-6 text-purple-400" />,
    title: 'Top Open Source Contributor',
    subtitle: '1,200+ Stars on GitHub',
    description: 'Core maintainer of open source React component packages and developer tools.'
  },
  {
    icon: <Flame className="w-6 h-6 text-amber-400" />,
    title: '500+ Day Coding Streak',
    subtitle: 'Consistency & Dedication',
    description: 'Maintained continuous daily open source contributions and commits.'
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-400" />,
    title: 'Performance Optimization',
    subtitle: 'Apex Tech Annual Award',
    description: 'Recognized for reducing cloud infrastructure expenditures by 35% through optimization.'
  }
];

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Recognitions"
            title="Key Achievements"
            subtitle="Milestones, hackathon wins, and open source community impact."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsList.map((item, index) => (
            <ScrollReveal key={item.title} variant="scale" delay={0.1 * index}>
              <Card className="p-6 h-full">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-base text-white mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-semibold text-orange-400 mb-2.5">
                  {item.subtitle}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { GitPullRequest, Award, Lightbulb, Zap, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import ScrollReveal from '../common/ScrollReveal';

interface AchievementItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
}

const achievementsList: AchievementItem[] = [
  {
    icon: <GitPullRequest className="w-6 h-6 text-orange-400" />,
    title: 'GirlScript Summer of Code 2025',
    category: 'Contributor',
    description:
      'Selected as a contributor for GirlScript Summer of Code 2025 and contributed to open-source projects as part of the program.'
  },
  {
    icon: <Award className="w-6 h-6 text-purple-400" />,
    title: 'BuildWithIndia',
    category: 'Certificate of Achievement',
    description:
      "Recognized with a Certificate of Achievement for contributing as a volunteer at BuildWithIndia and supporting the event's activities."
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-amber-400" />,
    title: 'Smart India Hackathon 2025',
    category: 'Internal Hackathon Participant',
    description:
      'Participated in the Internal Hackathon for Smart India Hackathon 2025 as a member of Team HERITAURA at G.L. Bajaj Group of Institutions, Mathura.'
  },
  {
    icon: <Zap className="w-6 h-6 text-pink-400" />,
    title: 'Hackfinity',
    category: 'Participant',
    description:
      'Participated in Hackfinity, organized by G.L. Bajaj Group of Institutions, Mathura, and received a Certificate of Appreciation for participation.'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
    title: 'TechFront 2025',
    category: 'Participant',
    description:
      'Participated in TechFront 2025 and engaged in the technical event activities.'
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
            subtitle="Recognitions, hackathons, open-source contributions, and learning milestones."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {achievementsList.map((item, index) => {
            const gridClasses =
              index === 3
                ? 'lg:col-span-2 lg:col-start-2'
                : index === 4
                ? 'md:col-span-2 md:max-w-md md:w-full md:mx-auto lg:col-span-2 lg:col-start-4 lg:max-w-none'
                : 'lg:col-span-2';

            return (
              <ScrollReveal
                key={item.title}
                variant="scale"
                delay={0.08 * index}
                className={`h-full ${gridClasses}`}
              >
                <Card className="p-6 h-full flex flex-col justify-between group">
                  <div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-4 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-base text-white group-hover:text-orange-400 transition-colors mb-1">
                      {item.title}
                    </h3>
                    <div className="text-xs font-semibold text-orange-400 mb-2.5">
                      {item.category}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
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

export default Achievements;

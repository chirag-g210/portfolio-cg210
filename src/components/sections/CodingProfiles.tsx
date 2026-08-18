import React from 'react';
import { ExternalLink, Terminal, Trophy, Code2 } from 'lucide-react';
import { codingProfiles } from '../../data/codingProfiles';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import ScrollReveal from '../common/ScrollReveal';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="coding-profiles" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Problem Solving"
            title="Competitive Coding & Profiles"
            subtitle="Algorithmic problem solving, contest ratings, and GitHub contribution activity."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {codingProfiles.map((profile, index) => (
            <ScrollReveal key={profile.id} variant="slideUp" delay={0.15 * index}>
              <Card className="p-7 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${profile.color} text-white shadow-lg`}>
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
                        <div className="text-xs font-semibold text-slate-400">@{profile.username}</div>
                      </div>
                    </div>

                    {profile.badge && (
                      <Badge variant="orange" className="flex items-center gap-1">
                        <Trophy className="w-3 h-3 text-amber-400" />
                        <span>{profile.badge}</span>
                      </Badge>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3 my-5 p-4 rounded-xl bg-white/5 border border-white/10">
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400">Rating / Stars</div>
                      <div className="text-sm font-extrabold text-orange-400 mt-0.5">{profile.rating}</div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-slate-400">Solved / Activity</div>
                      <div className="text-sm font-extrabold text-purple-400 mt-0.5">{profile.solvedCount}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {profile.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs font-bold text-slate-300 hover:text-orange-400 transition-colors pt-4 border-t border-white/10"
                >
                  <span>Visit {profile.platform} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;

import React, { useState, useCallback, useMemo } from 'react';
import { ExternalLink, Star, CheckCircle2 } from 'lucide-react';
import { projects } from '../../data/projects';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ScrollReveal from '../common/ScrollReveal';

type CategoryFilter = 'All' | 'Full Stack' | 'Frontend' | 'Web Development' | 'AI & Data';

const CodeIcon = () => (
  <svg className="w-4 h-4 fill-current mr-1.5 inline" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');

  const handleFilterChange = useCallback((cat: CategoryFilter) => {
    setFilter(cat);
  }, []);

  const filteredProjects = useMemo(() => {
    return filter === 'All'
      ? projects
      : projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Featured Work"
            title="Projects I've Built"
            subtitle="Explore a selection of responsive websites, frontend applications, and interactive web tools I have developed."
          />
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal variant="fade" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-14">
            {(['All', 'Web Development', 'Frontend', 'AI & Data'] as CategoryFilter[]).map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20 border border-orange-400/30'
                    : 'glass-card-premium text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} variant="scale" delay={0.12 * index}>
              <Card className="flex flex-col h-full group p-6 sm:p-7">
                {/* Image Container */}
                <div className="relative h-60 rounded-xl overflow-hidden mb-6 bg-slate-950 border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="orange">{project.category}</Badge>
                  </div>
                  {project.stars && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{project.stars}</span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* What I Built Capabilities */}
                    {project.whatIBuilt && project.whatIBuilt.length > 0 && (
                      <div className="mb-5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                        <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider mb-2">
                          What I Built:
                        </div>
                        <ul className="space-y-1.5">
                          {project.whatIBuilt.map((cap, cIdx) => (
                            <li
                              key={cIdx}
                              className="text-xs text-slate-300 flex items-center gap-1.5"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-5 border-t border-white/10">
                    {project.metrics && (
                      <span className="text-xs font-semibold text-emerald-400">
                        ⚡ {project.metrics}
                      </span>
                    )}
                    <div className="flex items-center gap-2.5 ml-auto">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm">
                            <CodeIcon /> Source Code
                          </Button>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Button variant="primary" size="sm">
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, MessageSquare, Download, FolderGit2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import Button from '../ui/Button';
import ScrollReveal from '../common/ScrollReveal';

export const FreelanceCTA: React.FC = () => {
  return (
    <section id="freelance-cta" className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="scale">
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-14 overflow-hidden glass-card-premium border border-orange-500/30 shadow-2xl shadow-orange-500/10 text-center">
            
            {/* Background Decorative Glows */}
            <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-orange-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-500/15 blur-3xl pointer-events-none" />

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-semibold text-orange-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance Projects</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400 ml-0.5" />
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight">
              Ready to bring your website or frontend project to life?
            </h2>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              I'm currently available for freelance opportunities involving frontend development, responsive websites, React applications, and website improvements.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact">
                <Button variant="glow" size="lg" className="shadow-xl">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link to="/projects">
                <Button variant="secondary" size="lg">
                  <FolderGit2 className="w-4 h-4 mr-2 text-orange-400" />
                  <span>View All Projects</span>
                </Button>
              </Link>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <Download className="w-4 h-4 mr-2 text-slate-400" />
                  <span>Resume</span>
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FreelanceCTA;

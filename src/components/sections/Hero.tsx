import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Download, Sparkles, Terminal, Code, MessageSquare, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import SocialLinks from '../common/SocialLinks';
import ScrollReveal from '../common/ScrollReveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative z-10 py-8 md:py-16">
      <div className="w-full">
        
        {/* Two-Column Layout (Desktop: Left ~55-60%, Right ~40-45%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headline, Badge, Description, CTAs & Socials */}
          <div className="lg:col-span-7 text-left">
            
            {/* Availability Badge */}
            <ScrollReveal variant="slideDown" delay={0.1}>
              <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-2 rounded-full glass-card-premium border border-orange-500/30 text-xs font-semibold text-orange-400 shadow-lg shadow-orange-500/5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>{PERSONAL_INFO.status}</span>
                <Sparkles className="w-3.5 h-3.5 text-purple-400 ml-0.5" />
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal variant="slideUp" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                I Build <span className="gradient-text-orange-purple">Modern & Responsive</span> Websites
              </h1>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal variant="slideUp" delay={0.3}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                {PERSONAL_INFO.subtitle}
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal variant="scale" delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                {/* Primary CTA: View My Work */}
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 border border-orange-400/30 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                {/* Secondary CTA: Start a Project */}
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl glass-card-premium border border-white/10 hover:border-orange-500/40 text-slate-200 hover:text-white font-semibold text-sm shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 mr-2 text-orange-400" />
                  <span>Start a Project</span>
                </Link>

                {/* Resume Download CTA (Preserved) */}
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-slate-400 hover:text-slate-200 text-sm font-semibold transition-all duration-300 hover:bg-white/[0.03]"
                  aria-label="Download Resume"
                >
                  <Download className="w-4 h-4 mr-2 text-slate-400" />
                  <span>Resume</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Social Links */}
            <ScrollReveal variant="fade" delay={0.5}>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Code Editor Visual */}
          <div className="lg:col-span-5">
            <ScrollReveal variant="slideLeft" delay={0.3}>
              <motion.div
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="rounded-2xl glass-card-premium border border-white/10 shadow-2xl shadow-black/80 overflow-hidden bg-[#070b14]/90 backdrop-blur-xl"
              >
                {/* VS Code Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#02040A]/90 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-slate-300">
                    <Code className="w-3.5 h-3.5 text-orange-400" />
                    <span>FrontendDev.tsx</span>
                  </div>

                  <Terminal className="w-4 h-4 text-slate-500" />
                </div>

                {/* Editor Content */}
                <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-slate-300 overflow-x-auto">
                  <div className="flex gap-4">
                    {/* Line numbers */}
                    <div className="select-none text-slate-600 text-right pr-3 border-r border-white/10 space-y-1">
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                      <div>11</div>
                      <div>12</div>
                      <div>13</div>
                    </div>

                    {/* Code lines */}
                    <div className="space-y-1">
                      <div>
                        <span className="text-purple-400 font-semibold">const</span>{' '}
                        <span className="text-orange-400 font-semibold">freelancer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">name</span>:{' '}
                        <span className="text-amber-300">"Chirag Gupta"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">role</span>:{' '}
                        <span className="text-amber-300">"Frontend & Web Developer"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">services</span>: [
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-400">"Website Development"</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-400">"React Frontend UI"</span>,
                      </div>
                      <div className="pl-8">
                        <span className="text-emerald-400">"Website Redesign"</span>
                      </div>
                      <div className="pl-4">
                        ],
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">focus</span>:{' '}
                        <span className="text-amber-300">"Modern & Responsive Websites"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-cyan-400">status</span>:{' '}
                        <span className="text-emerald-400">"Available for Projects"</span>
                      </div>
                      <div>&#125;;</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

        </div>

        {/* Four Statistic Cards Grid */}
        <ScrollReveal variant="slideUp" delay={0.5}>
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {PERSONAL_INFO.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-2xl glass-card-premium glass-card-hover text-left flex flex-col justify-between h-full group"
              >
                <div className="text-3xl sm:text-4xl font-black gradient-text-orange-purple group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-400 mt-2 tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Hero;

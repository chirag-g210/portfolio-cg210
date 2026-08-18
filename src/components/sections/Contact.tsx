import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../common/ScrollReveal';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="slideUp">
          <SectionHeading
            badge="Contact"
            title="Let's Build Something Exceptional"
            subtitle="Interested in starting a project or discussing technical opportunities? Get in touch."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <ScrollReveal variant="slideRight" delay={0.1}>
              <Card className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Direct Email</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-bold text-white hover:text-orange-400 transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </Card>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Location & Timezone</div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location} (IST / UTC+5:30)
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <ScrollReveal variant="slideLeft" delay={0.2}>
              <Card className="p-8">
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center justify-center">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                    <h3 className="text-xl font-bold text-white">Message Delivered!</h3>
                    <p className="text-xs text-slate-400 mt-1.5">Thank you for reaching out. I will respond to your message promptly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Mercer"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Share details about your upcoming project or inquiry..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-white/10 bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all"
                      />
                    </div>

                    <Button type="submit" variant="glow" size="lg" className="w-full">
                      <span>Send Message</span>
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                )}
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

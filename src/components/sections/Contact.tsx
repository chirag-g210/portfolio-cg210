import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle2, Copy, Check, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../lib/constants';
import SectionHeading from '../common/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import ScrollReveal from '../common/ScrollReveal';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Initialize EmailJS with Public Key on mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '25iqzKVaW4TYjTHfl';
    try {
      emailjs.init({
        publicKey: publicKey,
        blockHeadless: false
      });
    } catch (e) {
      console.warn('EmailJS initialization warning:', e);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field once user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_dfksptp';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_1twe1xc';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '25iqzKVaW4TYjTHfl';

    const templateParams = {
      name: formData.name.trim(),
      from_name: formData.name.trim(),
      email: formData.email.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      message: formData.message.trim(),
      to_name: PERSONAL_INFO.name,
      recipient: PERSONAL_INFO.email
    };

    console.log('[EmailJS Sending Attempt]:', {
      serviceId,
      templateId,
      publicKeyConfigured: Boolean(publicKey),
      hasFormRef: Boolean(formRef.current),
      templateParams
    });

    try {
      let response;
      if (formRef.current) {
        try {
          response = await emailjs.sendForm(
            serviceId,
            templateId,
            formRef.current,
            { publicKey }
          );
        } catch (formErr) {
          console.warn('[EmailJS sendForm failed, attempting direct send()]:', formErr);
          response = await emailjs.send(
            serviceId,
            templateId,
            templateParams,
            { publicKey }
          );
        }
      } else {
        response = await emailjs.send(
          serviceId,
          templateId,
          templateParams,
          { publicKey }
        );
      }

      console.log('[EmailJS Success Response]:', response);

      if (response && (response.status === 200 || response.text === 'OK')) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw response;
      }
    } catch (err: unknown) {
      console.error('[EmailJS Failure Diagnostic]:', err);
      
      let errorReason = '';
      if (typeof err === 'object' && err !== null) {
        const emailErr = err as { status?: number; text?: string; message?: string };
        if (emailErr.text) {
          errorReason = ` (${emailErr.status || 400}: ${emailErr.text})`;
        } else if (emailErr.message) {
          errorReason = ` (${emailErr.message})`;
        }
      }

      setErrorMessage(
        errorReason
          ? `Could not send message${errorReason}. Please check your connection or contact ${PERSONAL_INFO.email}.`
          : `Something went wrong. Please try again or email directly at ${PERSONAL_INFO.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setErrorMessage(null);
    setErrors({});
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
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-purple-600 text-white shadow-lg shadow-orange-500/20 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-orange-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0 ml-2"
                  title="Copy Email"
                  aria-label="Copy email address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </Card>
            </ScrollReveal>

            <ScrollReveal variant="slideRight" delay={0.2}>
              <Card className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-medium mb-0.5">Location & Timezone</div>
                    <div className="text-sm font-bold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5 font-medium">
                      IST / UTC+5:30
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
                {isSuccess ? (
                  <div className="py-10 text-center flex flex-col items-center justify-center">
                    <div className="p-4 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 shadow-lg shadow-emerald-500/10">
                      <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message sent successfully!</h3>
                    <p className="text-sm text-slate-400 mt-2 max-w-md">
                      Thank you for reaching out. Your message has been delivered to my inbox and I will respond to you promptly.
                    </p>
                    <div className="mt-6">
                      <Button
                        type="button"
                        onClick={handleResetForm}
                        variant="secondary"
                        size="md"
                      >
                        Send another message
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Hidden template compatibility fields */}
                    <input type="hidden" name="from_name" value={formData.name} />
                    <input type="hidden" name="from_email" value={formData.email} />
                    <input type="hidden" name="reply_to" value={formData.email} />
                    <input type="hidden" name="to_name" value={PERSONAL_INFO.name} />
                    <input type="hidden" name="recipient" value={PERSONAL_INFO.email} />

                    {errorMessage && (
                      <div
                        role="alert"
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-start gap-3"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Name <span className="text-orange-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Mercer"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50'
                        } disabled:opacity-50`}
                      />
                      {errors.name && (
                        <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Email <span className="text-orange-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50'
                        } disabled:opacity-50`}
                      />
                      {errors.email && (
                        <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 mb-2">
                        Message <span className="text-orange-400">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share details about your upcoming project or inquiry..."
                        aria-required="true"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 text-sm rounded-xl border bg-slate-950/80 text-white placeholder:text-slate-600 focus:outline-none transition-all resize-y ${
                          errors.message
                            ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                            : 'border-white/10 focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50'
                        } disabled:opacity-50`}
                      />
                      {errors.message && (
                        <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      variant="glow"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
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

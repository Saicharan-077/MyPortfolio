'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Send, CheckCircle, MapPin, Clock } from 'lucide-react';

const socials = [
  { icon: Github, label: 'GitHub', handle: '@YOUR_GITHUB', href: 'https://github.com/YOUR_GITHUB', color: 'hover:border-gray-400/40 hover:text-gray-300' },
  { icon: Linkedin, label: 'LinkedIn', handle: 'Sai Charan', href: 'https://linkedin.com/in/YOUR_LINKEDIN', color: 'hover:border-blue-400/40 hover:text-blue-400' },
  { icon: Mail, label: 'Email', handle: 'your@email.com', href: 'mailto:your@email.com', color: 'hover:border-red-400/40 hover:text-red-400' },
  { icon: Twitter, label: 'Twitter', handle: '@YOUR_TWITTER', href: 'https://twitter.com/YOUR_TWITTER', color: 'hover:border-sky-400/40 hover:text-sky-400' },
];

interface FormState { name: string; email: string; subject: string; message: string; }
interface Errors { name?: string; email?: string; subject?: string; message?: string; }

function FloatingInput({ id, label, type = 'text', value, onChange, error }: {
  id: string; label: string; type?: string; value: string;
  onChange: (v: string) => void; error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <input
        id={id} type={type} value={value} placeholder=" "
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 pt-6 pb-2 premium-input rounded-xl text-fg text-sm peer ${error ? 'border-danger/50' : ''}`}
      />
      <label htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${active ? 'top-2 text-xs text-accent' : 'top-4 text-muted'}`}>
        {label}
      </label>
      {error && <p className="text-danger text-xs mt-1">{error}</p>}
    </div>
  );
}

function FloatingTextarea({ id, label, value, onChange, error }: {
  id: string; label: string; value: string; onChange: (v: string) => void; error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative">
      <textarea
        id={id} value={value} placeholder=" " rows={5}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`w-full px-4 pt-6 pb-2 premium-input rounded-xl text-fg text-sm resize-none ${error ? 'border-danger/50' : ''}`}
      />
      <label htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none text-sm ${active ? 'top-2 text-xs text-accent' : 'top-4 text-muted'}`}>
        {label}
      </label>
      {error && <p className="text-danger text-xs mt-1">{error}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const set = (field: keyof FormState) => (v: string) => {
    setForm(f => ({ ...f, [field]: v }));
    if (errors[field]) setErrors(er => ({ ...er, [field]: undefined }));
  };

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center space-y-6">
        <span className="tech-badge">Contact</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          Let&apos;s <span className="gradient-text">Connect</span>
        </h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          Open to full-time roles, internships, freelance projects, and interesting collaborations.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-10">
        {/* Left sidebar */}
        <div className="lg:col-span-2 space-y-6">
          {/* Availability */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 border border-success/20 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-success animate-pulse" />
              <span className="text-success font-bold text-sm">Available for Opportunities</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Currently open to full-time roles, internships, and exciting projects in AI/ML and full-stack development.
            </p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-muted text-sm">
                <MapPin size={13} className="text-accent" /> Andhra Pradesh, India
              </div>
              <div className="flex items-center gap-2 text-muted text-sm">
                <Clock size={13} className="text-accent" /> IST (UTC+5:30)
              </div>
            </div>
          </motion.div>

          {/* Social cards */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="space-y-3">
            <h3 className="text-sm font-bold text-fg">Find me on</h3>
            {socials.map(({ icon: Icon, label, handle, href, color }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-3 p-4 glass rounded-xl border border-border transition-all card-hover ${color}`}>
                <Icon size={18} />
                <div>
                  <p className="text-fg text-sm font-semibold">{label}</p>
                  <p className="text-muted text-xs">{handle}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
          className="lg:col-span-3 glass rounded-3xl p-8 border border-border">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 space-y-6 text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', bounce: 0.5, delay: 0.1 }}>
                  <CheckCircle size={64} className="text-success" />
                </motion.div>
                <h2 className="text-2xl font-black text-fg">Message Sent!</h2>
                <p className="text-muted max-w-sm">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="px-6 py-3 glass-light rounded-xl text-sm font-semibold text-fg border border-border hover:border-accent/30 transition-all">
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-black text-fg mb-6">Send a Message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <FloatingInput id="name" label="Your Name" value={form.name} onChange={set('name')} error={errors.name} />
                  <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={set('email')} error={errors.email} />
                </div>
                <FloatingInput id="subject" label="Subject" value={form.subject} onChange={set('subject')} error={errors.subject} />
                <FloatingTextarea id="message" label="Your Message" value={form.message} onChange={set('message')} error={errors.message} />
                <button type="submit" disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-accent to-accent-2 hover:from-accent-2 hover:to-accent text-white font-bold rounded-xl transition-all shadow-glow hover:shadow-glow-lg disabled:opacity-60 flex items-center justify-center gap-2">
                  {loading ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

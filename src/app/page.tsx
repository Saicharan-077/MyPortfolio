'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Zap, Brain, Server, Code2 } from 'lucide-react';

// ─── Typewriter ───────────────────────────────────────────────────────────────
const ROLES = [
  'AI/ML Engineer',
  'Full-Stack Developer',
  'Computer Vision Engineer',
  'Systems Engineer',
  'Problem Solver',
];

function Typewriter() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="gradient-text font-bold">
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
}

// ─── Animated Counter ─────────────────────────────────────────────────────────
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(current));
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref} className="counter-value">{count}{suffix}</span>;
}

// ─── Magnetic Button ──────────────────────────────────────────────────────────
function MagneticButton({ children, href, className = '', variant = 'primary' }: {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'primary' | 'secondary';
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = () => {
    if (btnRef.current) btnRef.current.style.transform = 'translate(0,0)';
  };

  const base = 'magnetic-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300';
  const styles = variant === 'primary'
    ? 'bg-gradient-to-r from-accent to-accent-2 text-white shadow-glow hover:shadow-glow-lg hover:scale-105'
    : 'glass-light text-fg border border-border hover:border-accent/30 hover:text-accent';

  return (
    <Link
      ref={btnRef}
      href={href}
      className={`${base} ${styles} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Internships', value: 2, suffix: '' },
  { label: 'Achievements', value: 5, suffix: '+' },
];

// ─── Expertise Cards ──────────────────────────────────────────────────────────
const expertise = [
  {
    icon: Brain,
    title: 'AI & Computer Vision',
    desc: 'YOLOv11, PyTorch, deep learning, object detection, model training & deployment.',
    color: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: Code2,
    title: 'Full-Stack Development',
    desc: 'React, Next.js, Spring Boot, Node.js, REST APIs, WebSockets, PostgreSQL.',
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
  },
  {
    icon: Server,
    title: 'Systems & Infrastructure',
    desc: 'Linux, Nginx, reverse proxy, SSL, DNS, Google Cloud, server monitoring.',
    color: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    desc: 'Load testing, production hosting, CI/CD, AI-assisted development.',
    color: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    iconColor: 'text-amber-400',
  },
];

// ─── Featured Projects ────────────────────────────────────────────────────────
const featured = [
  {
    slug: 'fire-smoke-detection',
    title: 'Fire & Smoke Detection',
    desc: 'Real-time industrial fire and smoke detection using YOLOv11 with monitoring dashboard and analytics.',
    tags: ['YOLOv11', 'PyTorch', 'Computer Vision', 'FastAPI'],
    gradient: 'from-orange-500/30 via-red-500/20 to-rose-500/10',
    accent: 'text-orange-400',
  },
  {
    slug: 'smart-parking-management',
    title: 'Smart Parking System',
    desc: 'Bridges communication gap between security and faculty with real-time notifications and slot management.',
    tags: ['Spring Boot', 'React', 'WebSockets', 'MySQL'],
    gradient: 'from-blue-500/30 via-cyan-500/20 to-teal-500/10',
    accent: 'text-blue-400',
  },
  {
    slug: 'voxscholar',
    title: 'VoxScholar',
    desc: 'AI-powered academic assistant with voice interaction, intelligent Q&A, and study tools.',
    tags: ['React', 'Node.js', 'FastAPI', 'MongoDB'],
    gradient: 'from-violet-500/30 via-purple-500/20 to-fuchsia-500/10',
    accent: 'text-violet-400',
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="relative">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-success/30 text-success text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            Available for Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          >
            <span className="text-fg">Sai</span>{' '}
            <span className="gradient-text">Charan</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted min-h-[1.5em]"
          >
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Building production-grade AI systems and premium web applications.
            Passionate about computer vision, intelligent automation, and elegant engineering.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="/projects" variant="primary">
              <ExternalLink size={16} />
              View My Work
            </MagneticButton>
            <MagneticButton href="/contact" variant="secondary">
              <Mail size={16} />
              Get in Touch
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: 'https://github.com/YOUR_GITHUB', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/YOUR_LINKEDIN', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:your@email.com', icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 glass-light rounded-xl text-muted hover:text-fg hover:scale-110 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="scroll-indicator">
            <ArrowDown size={16} />
          </div>
        </motion.div>
      </section>

      {/* ── Stats ── */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center card-hover"
              >
                <div className="text-4xl font-black gradient-text mb-1">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expertise ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <span className="tech-badge">Core Expertise</span>
            <h2 className="text-4xl md:text-5xl font-black text-fg">
              What I <span className="gradient-text">Specialize In</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From intelligent computer vision systems to scalable full-stack applications
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative p-6 rounded-2xl bg-gradient-to-br ${item.color} border ${item.border} card-hover group overflow-hidden`}
              >
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <item.icon className={`${item.iconColor} mb-4`} size={28} />
                <h3 className="text-fg font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="space-y-4">
              <span className="tech-badge">Featured Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-fg">
                Selected <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-2 font-semibold transition-colors"
            >
              View all projects <ExternalLink size={14} />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {featured.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-2xl overflow-hidden card-hover border border-border hover:border-accent/20"
              >
                <div className={`h-40 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}>
                  <span className={`text-xs font-bold uppercase tracking-wider ${project.accent}`}>
                    Case Study
                  </span>
                  <h3 className="text-fg font-bold text-xl">{project.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-muted text-sm leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2 transition-colors"
                  >
                    View Case Study <ExternalLink size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative glass rounded-3xl p-12 text-center overflow-hidden border border-accent/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent-2/5 to-transparent" />
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-fg">
                Let&apos;s Build Something{' '}
                <span className="gradient-text">Remarkable</span>
              </h2>
              <p className="text-muted text-lg max-w-xl mx-auto">
                Open to full-time roles, internships, and exciting projects in AI/ML and full-stack development.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <MagneticButton href="/contact" variant="primary">
                  <Mail size={16} />
                  Start a Conversation
                </MagneticButton>
                <MagneticButton href="/about" variant="secondary">
                  Learn About Me
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

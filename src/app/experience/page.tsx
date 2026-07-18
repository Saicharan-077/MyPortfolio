'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';

const experiences = [
  {
    slug: 'server-management-intern',
    role: 'Server Management Intern',
    company: 'Head of Innovation, Incubation & Entrepreneurship',
    mentor: 'Mr. M Krishna Prasad',
    period: 'October 2025 – March 2026',
    type: 'Internship',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-cyan-900/20',
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    tags: ['Linux', 'Nginx', 'Google Cloud', 'SSL', 'DNS', 'Git/GitHub', 'Server Administration'],
    highlights: [
      'Linux server administration and management',
      'Nginx reverse proxy and SSL configuration',
      'Google Cloud Console deployment',
      'Production hosting and load testing',
    ],
  },
  {
    slug: 'innovision-ai-ml-intern',
    role: 'AI/ML Intern',
    company: 'Innovision Limited',
    mentor: null,
    period: 'July 2026 – December 2026',
    type: 'Internship',
    gradient: 'from-orange-500/30 via-red-500/20 to-rose-900/20',
    accent: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    tags: ['YOLOv11', 'PyTorch', 'Computer Vision', 'Deep Learning', 'Python', 'FastAPI'],
    highlights: [
      'Industrial fire & smoke detection system',
      'Dataset preparation and YOLO training',
      'Model evaluation and deployment',
      'AI-assisted development workflows',
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center space-y-6">
        <span className="tech-badge">Career</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">My <span className="gradient-text">Experience</span></h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          Hands-on internships building real-world systems in server infrastructure and AI/ML engineering.
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent-2 to-transparent" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div key={exp.slug} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-16 md:pl-20">
              <div className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full bg-accent border-2 border-bg shadow-glow" />
              <div className={`glass rounded-3xl overflow-hidden border ${exp.borderColor} card-hover`}>
                <div className={`h-1.5 bg-gradient-to-r ${exp.gradient}`} />
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1 space-y-4">
                      <div>
                        <span className={`text-xs font-bold uppercase tracking-wider ${exp.accent}`}>{exp.type}</span>
                        <h2 className="text-2xl font-black text-fg mt-1">{exp.role}</h2>
                        <p className="text-muted font-semibold mt-1">{exp.company}</p>
                        {exp.mentor && (
                          <p className="text-muted text-sm flex items-center gap-1 mt-1">
                            <User size={12} /> Mentor: {exp.mentor}
                          </p>
                        )}
                        <p className="text-muted text-sm flex items-center gap-1 mt-1">
                          <Calendar size={12} /> {exp.period}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
                      </div>
                      <Link href={`/experience/${exp.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-2 text-white rounded-xl text-sm font-semibold transition-all shadow-glow hover:shadow-glow-lg">
                        View Details <ArrowRight size={14} />
                      </Link>
                    </div>
                    <div className="lg:w-56 space-y-2">
                      <h3 className="text-sm font-semibold text-fg">Highlights</h3>
                      <ul className="space-y-2">
                        {exp.highlights.map(h => (
                          <li key={h} className="flex items-start gap-2 text-sm text-muted">
                            <span className={`w-1.5 h-1.5 rounded-full ${exp.accent.replace('text-','bg-')} mt-1.5 shrink-0`} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

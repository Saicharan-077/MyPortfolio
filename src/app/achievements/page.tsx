'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy } from 'lucide-react';

const achievements = [
  {
    slug: 'solution-sprint-2',
    title: 'Runner-Up – Solution Sprint 2.0',
    event: 'Solution Sprint 2.0',
    position: 'Runner-Up 🥈',
    gradient: 'from-silver-500/30 via-gray-400/20 to-slate-900/20',
    gradientClass: 'from-slate-400/30 via-gray-500/20 to-slate-900/20',
    accent: 'text-slate-300',
    borderColor: 'border-slate-400/20',
    desc: 'Secured Runner-Up position at Solution Sprint 2.0, a competitive hackathon focused on building innovative solutions to real-world problems.',
    tags: ['Hackathon', 'Problem Solving', 'Innovation', 'Team Work'],
  },
  {
    slug: 'webathon-2',
    title: 'Runner-Up – Webathon 2.0',
    event: 'Webathon 2.0',
    position: 'Runner-Up 🥈',
    gradientClass: 'from-blue-400/30 via-cyan-500/20 to-blue-900/20',
    accent: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    desc: 'Achieved Runner-Up at Webathon 2.0, a web development competition requiring rapid design and development of full-stack web applications.',
    tags: ['Web Development', 'Full-Stack', 'Competition', 'UI/UX'],
  },
  {
    slug: 'startup-premier-league',
    title: 'Winner – Startup Premier League',
    event: 'Startup Premier League',
    position: 'Winner 🏆',
    gradientClass: 'from-yellow-400/30 via-amber-500/20 to-orange-900/20',
    accent: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    desc: 'Won the Startup Premier League competition, demonstrating entrepreneurial thinking, product development, and business strategy skills.',
    tags: ['Entrepreneurship', 'Startup', 'Business Strategy', 'Product Development'],
  },
  {
    slug: 'iste-core-member',
    title: 'ISTE Core Member',
    event: 'Indian Society for Technical Education',
    position: 'Core Member ⭐',
    gradientClass: 'from-violet-400/30 via-purple-500/20 to-violet-900/20',
    accent: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    desc: 'Selected as a Core Member of ISTE (Indian Society for Technical Education), contributing to technical events, workshops, and student development initiatives.',
    tags: ['Leadership', 'Technical Education', 'Community', 'Events'],
  },
  {
    slug: 'wing-master-vjstartups',
    title: 'Wing Master – Infrastructure Wing, VJStartups',
    event: 'VJStartups',
    position: 'Wing Master 🚀',
    gradientClass: 'from-emerald-400/30 via-teal-500/20 to-emerald-900/20',
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    desc: 'Appointed as Wing Master of the Infrastructure Wing at VJStartups, leading technical infrastructure initiatives and mentoring student entrepreneurs.',
    tags: ['Leadership', 'Infrastructure', 'Mentoring', 'Startups'],
  },
];

export default function AchievementsPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center space-y-6">
        <span className="tech-badge">Recognition</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          My <span className="gradient-text">Achievements</span>
        </h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          Competitive honors, leadership roles, and milestones earned through dedication and innovation.
        </p>
      </motion.div>

      <div className="space-y-6">
        {achievements.map((ach, i) => (
          <motion.div key={ach.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass rounded-3xl overflow-hidden border ${ach.borderColor} card-hover`}>
            <div className={`h-1.5 bg-gradient-to-r ${ach.gradientClass}`} />
            <div className="p-8 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-border flex items-center justify-center shrink-0">
                <Trophy size={24} className={ach.accent} />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${ach.accent}`}>{ach.position}</span>
                  <h2 className="text-xl font-black text-fg mt-1">{ach.title}</h2>
                  <p className="text-muted text-sm mt-1">{ach.event}</p>
                </div>
                <p className="text-muted leading-relaxed">{ach.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ach.tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
                </div>
                <Link href={`/achievements/${ach.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-2 text-white rounded-xl text-sm font-semibold transition-all shadow-glow hover:shadow-glow-lg">
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

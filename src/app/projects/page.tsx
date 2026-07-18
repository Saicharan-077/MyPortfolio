'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    slug: 'fire-smoke-detection',
    title: 'Fire & Smoke Detection System',
    subtitle: 'Industrial AI Safety System',
    desc: 'Real-time fire and smoke detection using YOLOv11 deep learning model with a live monitoring dashboard, analytics, and configurable confidence thresholds for industrial environments.',
    tags: ['YOLOv11', 'PyTorch', 'Computer Vision', 'FastAPI', 'React', 'Deep Learning', 'Python'],
    gradient: 'from-orange-500/30 via-red-500/20 to-rose-900/20',
    accentColor: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    github: 'https://github.com/YOUR_GITHUB/fire-smoke-detection',
    highlights: ['Real-time detection', 'Monitoring dashboard', 'Analytics & alerts', 'Confidence threshold control'],
  },
  {
    slug: 'smart-parking-management',
    title: 'Smart Parking Management System',
    subtitle: 'Full-Stack Communication Platform',
    desc: 'Bridges the communication gap between security personnel and faculty with real-time slot management, WebSocket notifications, and an intuitive dashboard for parking coordination.',
    tags: ['Spring Boot', 'React.js', 'WebSockets', 'MySQL', 'REST APIs', 'Java', 'JavaScript'],
    gradient: 'from-blue-500/30 via-cyan-500/20 to-teal-900/20',
    accentColor: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    github: 'https://github.com/YOUR_GITHUB/smart-parking',
    highlights: ['Real-time notifications', 'Role-based access', 'Slot management', 'Security-faculty bridge'],
  },
  {
    slug: 'voxscholar',
    title: 'VoxScholar',
    subtitle: 'AI-Powered Academic Assistant',
    desc: 'An intelligent academic assistant with voice interaction, AI-powered Q&A, study tools, and personalized learning features built for students and educators.',
    tags: ['React.js', 'Node.js', 'FastAPI', 'MongoDB', 'REST APIs', 'JavaScript', 'Python'],
    gradient: 'from-violet-500/30 via-purple-500/20 to-fuchsia-900/20',
    accentColor: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    github: 'https://github.com/YOUR_GITHUB/voxscholar',
    highlights: ['Voice interaction', 'AI-powered Q&A', 'Study tools', 'Personalized learning'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6"
      >
        <span className="tech-badge">Portfolio</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          My <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          Production-grade systems built with precision — from AI-powered safety tools to full-stack platforms.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="space-y-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group glass rounded-3xl overflow-hidden border ${project.borderColor} hover:border-opacity-60 card-hover`}
          >
            <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
            <div className="p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left */}
                <div className="flex-1 space-y-5">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider ${project.accentColor}`}>
                      {project.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-fg mt-1">{project.title}</h2>
                  </div>
                  <p className="text-muted leading-relaxed">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 glass-light rounded-xl text-sm font-semibold text-muted hover:text-fg border border-border hover:border-accent/30 transition-all"
                    >
                      <Github size={15} />
                      GitHub
                    </a>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-2 text-white rounded-xl text-sm font-semibold transition-all shadow-glow hover:shadow-glow-lg"
                    >
                      <ExternalLink size={15} />
                      View Case Study
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                {/* Right — highlights */}
                <div className="lg:w-64 space-y-3">
                  <h3 className="text-sm font-semibold text-fg">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-muted">
                        <span className={`w-1.5 h-1.5 rounded-full ${project.accentColor.replace('text-', 'bg-')}`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

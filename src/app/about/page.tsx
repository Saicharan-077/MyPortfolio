'use client';

import { motion } from 'framer-motion';
import { BookOpen, Target, Lightbulb, Rocket, Code2, Brain, Server, Database } from 'lucide-react';

const timeline = [
  {
    year: '2022',
    title: 'Started B.Tech in Computer Science',
    desc: 'Began my engineering journey, diving deep into DSA, OOP, and foundational CS concepts.',
    color: 'bg-blue-500',
  },
  {
    year: '2023',
    title: 'First Full-Stack Project',
    desc: 'Built Smart Parking Management System — bridging communication between security and faculty.',
    color: 'bg-violet-500',
  },
  {
    year: '2024',
    title: 'AI/ML Deep Dive',
    desc: 'Explored computer vision, trained YOLOv11 models, and built the Fire & Smoke Detection System.',
    color: 'bg-cyan-500',
  },
  {
    year: 'Oct 2025',
    title: 'Server Management Internship',
    desc: 'Joined as Server Management Intern under Mr. M Krishna Prasad, Head of Innovation, Incubation & Entrepreneurship.',
    color: 'bg-emerald-500',
  },
  {
    year: 'Jul 2026',
    title: 'AI/ML Internship at Innovision Limited',
    desc: 'Working on industrial fire & smoke detection, dataset preparation, YOLO training and deployment.',
    color: 'bg-orange-500',
  },
];

const techStack = [
  { category: 'Languages', items: ['C++', 'Java', 'JavaScript', 'SQL'], icon: Code2, color: 'text-blue-400' },
  { category: 'Frameworks', items: ['React.js', 'Spring Boot', 'Node.js', 'Express.js', 'FastAPI'], icon: Rocket, color: 'text-violet-400' },
  { category: 'AI/ML', items: ['YOLOv11', 'PyTorch', 'Computer Vision', 'Deep Learning'], icon: Brain, color: 'text-pink-400' },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'], icon: Database, color: 'text-emerald-400' },
  { category: 'Infrastructure', items: ['Linux', 'Nginx', 'Google Cloud', 'Git/GitHub'], icon: Server, color: 'text-amber-400' },
];

const interests = [
  { title: 'Computer Vision', icon: '👁️', desc: 'Object detection, real-time inference, model optimization' },
  { title: 'Full-Stack Engineering', icon: '⚡', desc: 'End-to-end product development with modern stacks' },
  { title: 'Systems Programming', icon: '🖥️', desc: 'Linux, networking, server infrastructure' },
  { title: 'AI-Assisted Development', icon: '🤖', desc: 'Prompt engineering, LLM integration, agentic workflows' },
  { title: 'Open Source', icon: '🌐', desc: 'Contributing to and building open-source tools' },
  { title: 'Entrepreneurship', icon: '🚀', desc: 'Startup ecosystem, innovation, product thinking' },
];

const philosophyPoints = [
  { icon: Target, title: 'Precision Over Perfection', desc: 'Ship working software, iterate fast, and improve continuously.' },
  { icon: Lightbulb, title: 'First Principles Thinking', desc: 'Break problems to their core before building solutions.' },
  { icon: BookOpen, title: 'Continuous Learning', desc: 'Technology evolves — staying curious is non-negotiable.' },
  { icon: Rocket, title: 'Impact-Driven', desc: 'Every line of code should solve a real problem for real people.' },
];

export default function AboutPage() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-6"
      >
        <span className="tech-badge">About Me</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          The <span className="gradient-text">Engineer</span> Behind the Code
        </h1>
        <p className="text-muted text-xl max-w-3xl mx-auto leading-relaxed">
          I&apos;m Sai Charan — an AI/ML engineer and full-stack developer passionate about building
          intelligent systems that solve real-world problems with elegance and precision.
        </p>
      </motion.div>

      {/* My Journey */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-black text-fg">My Journey</h2>
          <div className="space-y-4 text-muted leading-relaxed">
            <p>
              My engineering journey began with a curiosity about how software could solve everyday problems.
              Starting with competitive programming in C++, I quickly expanded into full-stack development,
              building systems that bridge the gap between people and technology.
            </p>
            <p>
              The turning point came when I discovered computer vision — the ability to teach machines to
              see and understand the world. Training YOLOv11 models for fire and smoke detection showed me
              the real-world impact AI can have on safety and automation.
            </p>
            <p>
              Today, I combine deep technical knowledge with product thinking to build systems that are
              not just functional, but genuinely impactful.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Projects Shipped', value: '10+' },
            { label: 'Technologies Mastered', value: '20+' },
            { label: 'Internships', value: '2' },
            { label: 'Achievements', value: '5+' },
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-6 text-center card-hover">
              <div className="text-3xl font-black gradient-text mb-1">{item.value}</div>
              <div className="text-muted text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Engineering Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-fg">Engineering Philosophy</h2>
          <p className="text-muted max-w-xl mx-auto">The principles that guide how I think and build</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophyPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 space-y-3 card-hover border border-border hover:border-accent/20"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <point.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-fg font-bold">{point.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Focus & Career Vision */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2 gap-8"
      >
        <div className="glass rounded-2xl p-8 space-y-4 border border-accent/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
            <h2 className="text-2xl font-black text-fg">Current Focus</h2>
          </div>
          <ul className="space-y-3 text-muted">
            {[
              'Industrial AI deployment at Innovision Limited',
              'Advanced YOLOv11 model training & optimization',
              'Full-stack product development with Spring Boot + React',
              'Server infrastructure & production hosting',
              'Exploring LLM integration in real-world applications',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-2xl p-8 space-y-4 border border-accent-2/20">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-accent-2 animate-pulse" />
            <h2 className="text-2xl font-black text-fg">Career Vision</h2>
          </div>
          <ul className="space-y-3 text-muted">
            {[
              'Build AI systems that have measurable real-world impact',
              'Lead engineering teams at innovative tech companies',
              'Contribute to open-source AI and developer tooling',
              'Bridge the gap between research and production AI',
              'Build products that reach millions of users',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent-2 mt-1">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-fg">My Timeline</h2>
          <p className="text-muted">Key milestones in my engineering journey</p>
        </div>
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-bg z-10 mt-1.5"
                  style={{ background: item.color.replace('bg-', '') }}
                >
                  <div className={`w-full h-full rounded-full ${item.color} opacity-80`} />
                </div>
                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-5/12 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass rounded-2xl p-6 card-hover border border-border hover:border-accent/20">
                    <span className="text-xs font-bold text-accent uppercase tracking-wider">{item.year}</span>
                    <h3 className="text-fg font-bold text-lg mt-1">{item.title}</h3>
                    <p className="text-muted text-sm mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Areas of Interest */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-fg">Areas of Interest</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 flex items-start gap-4 card-hover border border-border hover:border-accent/20"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-fg font-bold">{item.title}</h3>
                <p className="text-muted text-sm mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Current Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-10"
      >
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-black text-fg">Current Tech Stack</h2>
          <p className="text-muted">Technologies I work with daily</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 space-y-4 card-hover"
            >
              <div className="flex items-center gap-3">
                <group.icon size={20} className={group.color} />
                <h3 className="text-fg font-bold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

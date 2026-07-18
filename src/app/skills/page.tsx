'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Brain, Database, BookOpen } from 'lucide-react';

const skillGroups = [
  {
    category: 'Programming Languages',
    icon: Code2,
    color: 'text-blue-400',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    border: 'border-blue-500/20',
    skills: [
      { name: 'C++', level: 90 },
      { name: 'Java', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'SQL', level: 82 },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    color: 'text-violet-400',
    gradient: 'from-violet-500/20 to-purple-500/10',
    border: 'border-violet-500/20',
    skills: [
      { name: 'Spring Boot', level: 82 },
      { name: 'React.js', level: 88 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'FastAPI', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'WebSockets', level: 78 },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'text-pink-400',
    gradient: 'from-pink-500/20 to-rose-500/10',
    border: 'border-pink-500/20',
    skills: [
      { name: 'YOLOv11', level: 85 },
      { name: 'PyTorch', level: 80 },
      { name: 'Deep Learning', level: 78 },
      { name: 'Computer Vision', level: 82 },
      { name: 'Object Detection', level: 85 },
      { name: 'Model Training', level: 80 },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    color: 'text-emerald-400',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    border: 'border-emerald-500/20',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    category: 'Core CS Fundamentals',
    icon: BookOpen,
    color: 'text-amber-400',
    gradient: 'from-amber-500/20 to-orange-500/10',
    border: 'border-amber-500/20',
    skills: [
      { name: 'Data Structures & Algorithms', level: 90 },
      { name: 'Object-Oriented Programming', level: 88 },
      { name: 'DBMS', level: 85 },
      { name: 'Operating Systems', level: 80 },
      { name: 'Computer Networks', level: 78 },
    ],
  },
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-fg text-sm font-medium">{name}</span>
        <span className="text-muted text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  );
}

const barColors: Record<string, string> = {
  'text-blue-400': 'from-blue-500 to-cyan-400',
  'text-violet-400': 'from-violet-500 to-purple-400',
  'text-pink-400': 'from-pink-500 to-rose-400',
  'text-emerald-400': 'from-emerald-500 to-teal-400',
  'text-amber-400': 'from-amber-500 to-orange-400',
};

export default function SkillsPage() {
  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 space-y-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center space-y-6">
        <span className="tech-badge">Expertise</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          My <span className="gradient-text">Skills</span>
        </h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          A comprehensive breakdown of my technical capabilities across AI, full-stack development, and systems engineering.
        </p>
      </motion.div>

      {/* All skills badges overview */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="glass rounded-3xl p-8 border border-border">
        <h2 className="text-xl font-black text-fg mb-6">Complete Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {skillGroups.flatMap(g => g.skills.map(s => s.name)).map(skill => (
            <span key={skill} className="tech-badge">{skill}</span>
          ))}
        </div>
      </motion.div>

      {/* Skill groups with bars */}
      <div className="grid md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => (
          <motion.div key={group.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`glass rounded-2xl p-7 border ${group.border} card-hover`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.gradient} flex items-center justify-center`}>
                <group.icon size={18} className={group.color} />
              </div>
              <h2 className="text-fg font-black text-lg">{group.category}</h2>
            </div>
            <div className="space-y-4">
              {group.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} color={barColors[group.color]} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Building } from 'lucide-react';
import { use } from 'react';

interface ExpData {
  title: string; role: string; company: string; period: string; mentor?: string;
  gradient: string; accent: string; borderColor: string; overview: string;
  responsibilities: string[]; techLearned: { category: string; items: string[] }[];
  challenges: { title: string; solution: string }[];
  reflection: string; outcome: string[];
}

const experiences: Record<string, ExpData> = {
  'server-management-intern': {
    title: 'Server Management Internship',
    role: 'Server Management Intern',
    company: 'Head of Innovation, Incubation & Entrepreneurship',
    period: 'October 2025 – March 2026',
    mentor: 'Mr. M Krishna Prasad',
    gradient: 'from-emerald-500/40 via-teal-500/30 to-cyan-900/40',
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    overview: 'A 6-month server management internship under the mentorship of Mr. M Krishna Prasad, Head of Innovation, Incubation & Entrepreneurship. This internship provided deep hands-on experience in Linux server administration, web server configuration, cloud infrastructure, and production deployment workflows.',
    responsibilities: [
      'Administered and maintained Linux servers in production environments',
      'Configured Nginx as a reverse proxy and web server for multiple applications',
      'Set up SSL/HTTPS certificates and managed DNS configurations',
      'Deployed applications on Google Cloud Console',
      'Performed load testing and server performance monitoring',
      'Implemented authentication systems and security best practices',
      'Used Git/GitHub for version control and collaborative development',
      'Applied AI-assisted development and prompt engineering techniques',
    ],
    techLearned: [
      { category: 'Operating Systems', items: ['Linux', 'Linux Administration', 'Shell Scripting', 'Process Management'] },
      { category: 'Web Server', items: ['Nginx', 'Reverse Proxy', 'Load Balancing', 'Virtual Hosts'] },
      { category: 'Networking', items: ['DNS', 'IPv4/IPv6', 'HTTP Methods', 'HTTP Status Codes', 'TCP/IP'] },
      { category: 'Security', items: ['SSL/TLS', 'HTTPS', 'Authentication', 'Firewall Configuration'] },
      { category: 'Cloud', items: ['Google Cloud Console', 'VM Instances', 'Cloud Storage', 'Production Hosting'] },
      { category: 'DevOps', items: ['Git/GitHub', 'Load Testing', 'Server Monitoring', 'AI-assisted Development', 'Prompt Engineering'] },
    ],
    challenges: [
      { title: 'SSL Configuration Complexity', solution: 'Studied Let\'s Encrypt documentation and successfully automated certificate renewal with cron jobs.' },
      { title: 'Nginx Reverse Proxy Setup', solution: 'Debugged proxy_pass configurations and upstream server blocks through systematic testing.' },
      { title: 'Production Incident Response', solution: 'Developed runbooks for common failure scenarios and implemented monitoring alerts.' },
      { title: 'DNS Propagation Issues', solution: 'Learned TTL management and used dig/nslookup tools for DNS troubleshooting.' },
    ],
    reflection: 'This internship fundamentally changed how I think about software deployment. Before, I only thought about writing code — now I understand the full lifecycle from development to production. Working under Mr. M Krishna Prasad\'s mentorship gave me exposure to real-world infrastructure challenges that no classroom can replicate. The experience of managing live servers, handling production issues, and understanding how the internet actually works has made me a significantly more complete engineer.',
    outcome: [
      'Gained production-level Linux server administration skills',
      'Understood the full web infrastructure stack from DNS to application layer',
      'Developed confidence in deploying and maintaining cloud-hosted applications',
      'Learned AI-assisted development workflows for faster problem-solving',
      'Built a strong foundation in networking and security fundamentals',
    ],
  },

  'innovision-ai-ml-intern': {
    title: 'AI/ML Internship at Innovision Limited',
    role: 'AI/ML Intern',
    company: 'Innovision Limited',
    period: 'July 2026 – December 2026',
    gradient: 'from-orange-500/40 via-red-500/30 to-rose-900/40',
    accent: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    overview: 'A 6-month AI/ML internship at Innovision Limited focused on industrial fire and smoke detection using computer vision. This internship involved the complete ML pipeline — from dataset preparation and model training to evaluation, deployment, and production monitoring.',
    responsibilities: [
      'Developed industrial fire and smoke detection system using YOLOv11',
      'Prepared and annotated custom datasets for model training',
      'Trained and fine-tuned YOLO models with transfer learning',
      'Evaluated model performance using mAP, precision, recall, and F1-score',
      'Built deployment pipeline for production inference',
      'Created monitoring dashboard for real-time detection visualization',
      'Documented technical implementation and model performance reports',
      'Collaborated with engineering team on system integration',
    ],
    techLearned: [
      { category: 'AI/ML', items: ['YOLOv11', 'PyTorch', 'Deep Learning', 'Transfer Learning', 'Model Evaluation'] },
      { category: 'Computer Vision', items: ['Object Detection', 'Image Augmentation', 'OpenCV', 'ONNX Export', 'Real-time Inference'] },
      { category: 'Data', items: ['Dataset Preparation', 'Data Annotation', 'LabelImg', 'Data Augmentation', 'Train/Val/Test Split'] },
      { category: 'Backend', items: ['FastAPI', 'WebSockets', 'REST APIs', 'Python', 'Async Programming'] },
      { category: 'Deployment', items: ['Model Deployment', 'ONNX', 'Production Hosting', 'Performance Optimization'] },
    ],
    challenges: [
      { title: 'Dataset Quality', solution: 'Implemented rigorous annotation guidelines and quality checks to ensure consistent labeling.' },
      { title: 'Model Overfitting', solution: 'Applied aggressive augmentation, dropout, and early stopping to improve generalization.' },
      { title: 'Real-Time Performance', solution: 'Optimized inference with model quantization and efficient frame processing pipeline.' },
      { title: 'Industrial Environment Variability', solution: 'Collected diverse training data covering different lighting, distances, and smoke densities.' },
    ],
    reflection: 'This internship was a transformative experience in applied AI. Moving from academic understanding of deep learning to actually training, evaluating, and deploying models in an industrial context revealed the enormous gap between theory and practice. The challenges of real-world data — noise, imbalance, edge cases — taught me more about machine learning than any course. Working on a system that could genuinely save lives made every debugging session feel meaningful.',
    outcome: [
      'Built and deployed a production-grade computer vision system',
      'Mastered the complete ML pipeline from data to deployment',
      'Gained deep expertise in YOLOv11 and PyTorch ecosystem',
      'Developed strong skills in model evaluation and optimization',
      'Contributed to a real industrial safety solution',
    ],
  },
};

export default function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const exp = experiences[slug];
  if (!exp) notFound();

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/experience" className="inline-flex items-center gap-2 text-muted hover:text-fg text-sm font-medium transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Experience
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className={`relative rounded-3xl overflow-hidden mb-16 border ${exp.borderColor}`}>
        <div className={`h-64 md:h-80 bg-gradient-to-br ${exp.gradient} flex flex-col justify-end p-10`}>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
          <div className="relative z-10 space-y-2">
            <span className={`text-xs font-bold uppercase tracking-wider ${exp.accent}`}>Internship</span>
            <h1 className="text-3xl md:text-5xl font-black text-fg">{exp.role}</h1>
            <div className="flex flex-wrap gap-4 text-muted text-sm mt-2">
              <span className="flex items-center gap-1"><Building size={13} /> {exp.company}</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> {exp.period}</span>
              {exp.mentor && <span className="flex items-center gap-1"><User size={13} /> {exp.mentor}</span>}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="space-y-14 prose-dark">
        {/* Overview */}
        <Sec accent={exp.accent} num="01" title="Internship Overview">
          <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{exp.overview}</p></div>
        </Sec>

        {/* Responsibilities */}
        <Sec accent={exp.accent} num="02" title="Responsibilities">
          <div className="glass rounded-2xl p-6 border border-border">
            <ul className="space-y-3">{exp.responsibilities.map(r => (
              <li key={r} className="flex items-start gap-3 text-muted">
                <span className={`${exp.accent} mt-1 shrink-0`}>▸</span><span>{r}</span>
              </li>
            ))}</ul>
          </div>
        </Sec>

        {/* Tech Learned */}
        <Sec accent={exp.accent} num="03" title="Technologies & Skills">
          <div className="grid sm:grid-cols-2 gap-4">{exp.techLearned.map(g => (
            <div key={g.category} className="glass rounded-2xl p-5 border border-border">
              <h4 className="text-fg font-bold mb-3 text-sm">{g.category}</h4>
              <div className="flex flex-wrap gap-2">{g.items.map(i => <span key={i} className="tech-badge">{i}</span>)}</div>
            </div>
          ))}</div>
        </Sec>

        {/* Challenges */}
        <Sec accent={exp.accent} num="04" title="Challenges & Solutions">
          <div className="space-y-4">{exp.challenges.map(c => (
            <div key={c.title} className="glass rounded-xl p-5 border border-border">
              <h4 className="text-fg font-bold mb-1">⚡ {c.title}</h4>
              <p className="text-muted text-sm">✅ {c.solution}</p>
            </div>
          ))}</div>
        </Sec>

        {/* Reflection */}
        <Sec accent={exp.accent} num="05" title="Reflection">
          <div className={`glass rounded-2xl p-6 border ${exp.borderColor}`}>
            <p className="text-muted leading-relaxed italic">&ldquo;{exp.reflection}&rdquo;</p>
          </div>
        </Sec>

        {/* Outcome */}
        <Sec accent={exp.accent} num="06" title="Outcome">
          <div className="glass rounded-2xl p-6 border border-border">
            <ul className="space-y-3">{exp.outcome.map(o => (
              <li key={o} className="flex items-start gap-3 text-muted">
                <span className="text-success mt-1 shrink-0">✓</span><span>{o}</span>
              </li>
            ))}</ul>
          </div>
        </Sec>
      </div>
    </div>
  );
}

function Sec({ accent, num, title, children }: { accent: string; num: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-black text-fg mb-4 flex items-center gap-2">
          <span className={accent}>{num}.</span> {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { use } from 'react';

interface AchData {
  title: string; event: string; position: string; date: string;
  gradient: string; accent: string; borderColor: string;
  overview: string; contribution: string[]; eventDetails: string;
  learnings: string[]; outcome: string[]; tags: string[];
}

const achievements: Record<string, AchData> = {
  'solution-sprint-2': {
    title: 'Runner-Up – Solution Sprint 2.0',
    event: 'Solution Sprint 2.0',
    position: 'Runner-Up 🥈',
    date: '2024',
    gradient: 'from-slate-400/40 via-gray-500/30 to-slate-900/40',
    accent: 'text-slate-300',
    borderColor: 'border-slate-400/20',
    overview: 'Solution Sprint 2.0 was a competitive hackathon that challenged participants to identify real-world problems and build working solutions within a tight timeframe. Our team secured the Runner-Up position by delivering a well-engineered, impactful solution.',
    contribution: [
      'Led the technical architecture and implementation of the solution',
      'Designed the system workflow and data flow diagrams',
      'Implemented the core backend logic and API integrations',
      'Contributed to the presentation and demo preparation',
      'Coordinated team efforts and managed time effectively under pressure',
    ],
    eventDetails: 'Solution Sprint 2.0 was organized as a multi-round competition where teams had to ideate, prototype, and present solutions to real-world challenges. The event tested problem-solving ability, technical execution, and presentation skills under time constraints.',
    learnings: [
      'Rapid prototyping and MVP development under time pressure',
      'Effective team coordination and task delegation',
      'Presenting technical solutions to non-technical judges',
      'Identifying the core value proposition of a solution quickly',
      'Handling feedback and iterating on solutions in real time',
    ],
    outcome: [
      'Secured Runner-Up position among competing teams',
      'Built a working prototype within the competition timeframe',
      'Received recognition from judges for technical implementation quality',
      'Strengthened problem-solving and rapid development skills',
    ],
    tags: ['Hackathon', 'Problem Solving', 'Innovation', 'Team Work', 'Rapid Prototyping'],
  },

  'webathon-2': {
    title: 'Runner-Up – Webathon 2.0',
    event: 'Webathon 2.0',
    position: 'Runner-Up 🥈',
    date: '2024',
    gradient: 'from-blue-400/40 via-cyan-500/30 to-blue-900/40',
    accent: 'text-blue-400',
    borderColor: 'border-blue-400/20',
    overview: 'Webathon 2.0 was a web development competition that required teams to design and build full-stack web applications with a focus on UI/UX quality, technical implementation, and real-world utility. Our team achieved Runner-Up by delivering a polished, functional application.',
    contribution: [
      'Designed and implemented the complete frontend using React.js',
      'Built responsive UI with modern design principles',
      'Integrated backend APIs and managed state management',
      'Ensured cross-browser compatibility and performance optimization',
      'Led the UI/UX design decisions and user flow planning',
    ],
    eventDetails: 'Webathon 2.0 was a timed web development competition where teams were given a theme and had to build a complete web application from scratch. Judging criteria included design quality, technical complexity, functionality, and presentation.',
    learnings: [
      'Building complete web applications under strict time constraints',
      'Prioritizing features for maximum impact in limited time',
      'Balancing design quality with development speed',
      'Effective use of component libraries and design systems',
      'Presenting web applications with compelling demos',
    ],
    outcome: [
      'Achieved Runner-Up position in web development competition',
      'Delivered a fully functional, well-designed web application',
      'Demonstrated full-stack development capabilities under pressure',
      'Received positive feedback on UI/UX quality from judges',
    ],
    tags: ['Web Development', 'Full-Stack', 'React.js', 'UI/UX', 'Competition'],
  },

  'startup-premier-league': {
    title: 'Winner – Startup Premier League',
    event: 'Startup Premier League',
    position: 'Winner 🏆',
    date: '2024',
    gradient: 'from-yellow-400/40 via-amber-500/30 to-orange-900/40',
    accent: 'text-yellow-400',
    borderColor: 'border-yellow-400/20',
    overview: 'The Startup Premier League was an entrepreneurship competition that challenged participants to develop viable startup ideas, create business plans, and pitch to a panel of judges. Our team won by presenting a compelling, technically sound, and market-ready startup concept.',
    contribution: [
      'Developed the core product concept and technical architecture',
      'Created the business model and go-to-market strategy',
      'Built a working prototype to demonstrate the product vision',
      'Delivered the final pitch presentation to judges',
      'Conducted market research and competitive analysis',
    ],
    eventDetails: 'The Startup Premier League was a multi-stage competition involving idea validation, business plan development, prototype building, and final pitching. Teams were evaluated on innovation, market potential, technical feasibility, and presentation quality.',
    learnings: [
      'Translating technical ideas into compelling business propositions',
      'Understanding market sizing and competitive landscape analysis',
      'Building MVPs that demonstrate core value propositions',
      'Pitching to investors and handling tough questions',
      'Combining technical and business thinking effectively',
    ],
    outcome: [
      'Won the Startup Premier League competition',
      'Developed strong entrepreneurial and product thinking skills',
      'Built a network within the startup and innovation ecosystem',
      'Gained experience in business model development and pitching',
    ],
    tags: ['Entrepreneurship', 'Startup', 'Business Strategy', 'Product Development', 'Pitching'],
  },

  'iste-core-member': {
    title: 'ISTE Core Member',
    event: 'Indian Society for Technical Education',
    position: 'Core Member ⭐',
    date: '2023 – Present',
    gradient: 'from-violet-400/40 via-purple-500/30 to-violet-900/40',
    accent: 'text-violet-400',
    borderColor: 'border-violet-400/20',
    overview: 'Selected as a Core Member of the Indian Society for Technical Education (ISTE) student chapter, contributing to technical education, workshops, events, and student development initiatives at the institutional level.',
    contribution: [
      'Organized and coordinated technical workshops and seminars',
      'Mentored junior students in technical skills and career guidance',
      'Contributed to event planning and execution for technical fests',
      'Represented the institution at inter-college ISTE events',
      'Managed logistics and coordination for chapter activities',
    ],
    eventDetails: 'ISTE is a national-level professional body for technical education in India. The student chapter organizes workshops, guest lectures, technical competitions, and industry interaction programs to bridge the gap between academia and industry.',
    learnings: [
      'Event management and organizational leadership skills',
      'Public speaking and communication with diverse audiences',
      'Collaborative teamwork in a structured organizational setting',
      'Understanding of technical education ecosystem in India',
      'Mentoring and knowledge-sharing with peers',
    ],
    outcome: [
      'Successfully organized multiple technical events and workshops',
      'Developed strong leadership and organizational skills',
      'Built a network of technical professionals and peers',
      'Contributed to the technical development of fellow students',
    ],
    tags: ['Leadership', 'Technical Education', 'Community', 'Events', 'Mentoring'],
  },

  'wing-master-vjstartups': {
    title: 'Wing Master – Infrastructure Wing, VJStartups',
    event: 'VJStartups',
    position: 'Wing Master 🚀',
    date: '2024 – Present',
    gradient: 'from-emerald-400/40 via-teal-500/30 to-emerald-900/40',
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-400/20',
    overview: 'Appointed as Wing Master of the Infrastructure Wing at VJStartups — the official startup incubation and entrepreneurship cell. In this role, I lead technical infrastructure initiatives, mentor student entrepreneurs, and bridge the gap between technical implementation and startup needs.',
    contribution: [
      'Led the Infrastructure Wing responsible for technical setup of startup projects',
      'Mentored student entrepreneurs on technical architecture and implementation',
      'Organized workshops on server management, cloud deployment, and DevOps',
      'Provided technical consultation to startups in the incubation program',
      'Coordinated with other wings for cross-functional startup support',
    ],
    eventDetails: 'VJStartups is the official startup incubation and entrepreneurship cell that supports student entrepreneurs in building and launching their ventures. The Infrastructure Wing specifically handles technical infrastructure, hosting, and deployment support for incubated startups.',
    learnings: [
      'Leadership in a technical and entrepreneurial environment',
      'Translating infrastructure knowledge into practical startup guidance',
      'Managing a team and delegating responsibilities effectively',
      'Understanding the unique technical challenges of early-stage startups',
      'Building systems and processes for a growing organization',
    ],
    outcome: [
      'Successfully led the Infrastructure Wing with measurable impact',
      'Mentored multiple student entrepreneurs on technical implementation',
      'Organized workshops that upskilled fellow students in infrastructure',
      'Strengthened VJStartups\' technical support capabilities',
    ],
    tags: ['Leadership', 'Infrastructure', 'Mentoring', 'Startups', 'VJStartups'],
  },
};

export default function AchievementDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const ach = achievements[slug];
  if (!ach) notFound();

  return (
    <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/achievements" className="inline-flex items-center gap-2 text-muted hover:text-fg text-sm font-medium transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Achievements
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className={`relative rounded-3xl overflow-hidden mb-16 border ${ach.borderColor}`}>
        <div className={`h-64 bg-gradient-to-br ${ach.gradient} flex flex-col justify-end p-10`}>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
          <div className="relative z-10 space-y-2">
            <span className={`text-sm font-bold ${ach.accent}`}>{ach.position}</span>
            <h1 className="text-3xl md:text-5xl font-black text-fg">{ach.title}</h1>
            <p className="text-muted">{ach.event} · {ach.date}</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-12 prose-dark">
        {[
          { num: '01', title: 'Overview', content: <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{ach.overview}</p></div> },
          { num: '02', title: 'My Contribution', content: <div className="glass rounded-2xl p-6 border border-border"><ul className="space-y-3">{ach.contribution.map(c => <li key={c} className="flex items-start gap-3 text-muted"><span className={`${ach.accent} mt-1 shrink-0`}>▸</span><span>{c}</span></li>)}</ul></div> },
          { num: '03', title: 'Event Details', content: <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{ach.eventDetails}</p></div> },
          { num: '04', title: 'Gallery', content: <div className="grid sm:grid-cols-2 gap-4">{['Event Photo 1','Event Photo 2','Award Ceremony','Team Photo'].map(l => <div key={l} className="glass rounded-2xl h-40 flex items-center justify-center border border-border border-dashed"><div className="text-center"><div className="text-2xl mb-1">🖼️</div><p className="text-muted text-sm">{l}</p></div></div>)}</div> },
          { num: '05', title: 'Learnings', content: <div className="glass rounded-2xl p-6 border border-border"><ul className="space-y-3">{ach.learnings.map(l => <li key={l} className="flex items-start gap-3 text-muted"><span className="text-accent-3 mt-1 shrink-0">▸</span><span>{l}</span></li>)}</ul></div> },
          { num: '06', title: 'Outcome', content: <div className={`glass rounded-2xl p-6 border ${ach.borderColor}`}><ul className="space-y-3">{ach.outcome.map(o => <li key={o} className="flex items-start gap-3 text-muted"><span className="text-success mt-1 shrink-0">✓</span><span>{o}</span></li>)}</ul></div> },
        ].map(({ num, title, content }) => (
          <section key={num}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-2xl font-black text-fg mb-4 flex items-center gap-2">
                <span className={ach.accent}>{num}.</span> {title}
              </h2>
              {content}
            </motion.div>
          </section>
        ))}

        <div className="flex flex-wrap gap-2 pt-4">
          {ach.tags.map(t => <span key={t} className="tech-badge">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

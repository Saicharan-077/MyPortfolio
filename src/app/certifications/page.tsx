'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';

const certifications = [
  {
    title: 'NPTEL – Database Management Systems',
    org: 'NPTEL (IIT)',
    orgShort: 'NPTEL',
    desc: 'Comprehensive course covering relational databases, SQL, normalization, transactions, indexing, and query optimization. Offered by IIT through the NPTEL platform.',
    date: 'Issue Date: Placeholder',
    credential: 'Credential ID: Placeholder',
    link: '#',
    gradient: 'from-blue-500/20 to-cyan-500/10',
    accent: 'text-blue-400',
    borderColor: 'border-blue-500/20',
    icon: '🗄️',
  },
  {
    title: 'Quantum Computing',
    org: 'Certification Authority',
    orgShort: 'Quantum',
    desc: 'Introduction to quantum computing principles, quantum gates, quantum circuits, superposition, entanglement, and quantum algorithms including Grover\'s and Shor\'s algorithms.',
    date: 'Issue Date: Placeholder',
    credential: 'Credential ID: Placeholder',
    link: '#',
    gradient: 'from-violet-500/20 to-purple-500/10',
    accent: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    icon: '⚛️',
  },
  {
    title: 'Drone Technology',
    org: 'Certification Authority',
    orgShort: 'Drone Tech',
    desc: 'Covers drone hardware components, flight mechanics, navigation systems, autonomous flight programming, safety regulations, and practical applications in various industries.',
    date: 'Issue Date: Placeholder',
    credential: 'Credential ID: Placeholder',
    link: '#',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    accent: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    icon: '🚁',
  },
  {
    title: 'ServiceNow Virtual Internship',
    org: 'ServiceNow',
    orgShort: 'ServiceNow',
    desc: 'Virtual internship program covering ServiceNow platform fundamentals, IT Service Management (ITSM), workflow automation, application development, and enterprise platform administration.',
    date: 'Issue Date: Placeholder',
    credential: 'Credential ID: Placeholder',
    link: '#',
    gradient: 'from-green-500/20 to-emerald-500/10',
    accent: 'text-green-400',
    borderColor: 'border-green-500/20',
    icon: '☁️',
  },
  {
    title: 'VJStartups Summer Internship',
    org: 'VJStartups',
    orgShort: 'VJStartups',
    desc: 'Summer internship program at VJStartups focusing on startup ecosystem, entrepreneurship, product development, technical implementation, and innovation methodologies.',
    date: 'Issue Date: Placeholder',
    credential: 'Credential ID: Placeholder',
    link: '#',
    gradient: 'from-orange-500/20 to-amber-500/10',
    accent: 'text-orange-400',
    borderColor: 'border-orange-500/20',
    icon: '🚀',
  },
];

export default function CertificationsPage() {
  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-16">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-center space-y-6">
        <span className="tech-badge">Credentials</span>
        <h1 className="text-5xl md:text-7xl font-black text-fg">
          My <span className="gradient-text">Certifications</span>
        </h1>
        <p className="text-muted text-xl max-w-2xl mx-auto leading-relaxed">
          Professional certifications and verified credentials from leading platforms and institutions.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, i) => (
          <motion.div key={cert.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`glass rounded-2xl overflow-hidden border ${cert.borderColor} card-hover flex flex-col`}>
            <div className={`h-1.5 bg-gradient-to-r ${cert.gradient}`} />
            <div className="p-6 flex flex-col flex-1 space-y-4">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center text-2xl shrink-0`}>
                  {cert.icon}
                </div>
                <div>
                  <span className={`text-xs font-bold uppercase tracking-wider ${cert.accent}`}>
                    <Award size={10} className="inline mr-1" />Verified
                  </span>
                  <h2 className="text-fg font-bold text-base mt-0.5 leading-tight">{cert.title}</h2>
                </div>
              </div>
              <p className="text-muted text-sm font-semibold">{cert.org}</p>
              <p className="text-muted text-sm leading-relaxed flex-1">{cert.desc}</p>
              <div className="pt-3 border-t border-border space-y-1">
                <p className="text-muted/60 text-xs">{cert.date}</p>
                <p className="text-muted/60 text-xs">{cert.credential}</p>
              </div>
              <a href={cert.link} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-2 transition-colors">
                <ExternalLink size={13} /> View Credential
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

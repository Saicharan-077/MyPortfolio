'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Github } from 'lucide-react';
import { use } from 'react';

const projects: Record<string, ProjectData> = {
  'fire-smoke-detection': {
    title: 'Fire & Smoke Detection System',
    subtitle: 'Industrial AI Safety System',
    gradient: 'from-orange-500/40 via-red-500/30 to-rose-900/40',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-400',
    borderColor: 'border-orange-500/20',
    github: 'https://github.com/YOUR_GITHUB/fire-smoke-detection',
    tags: ['YOLOv11', 'PyTorch', 'Computer Vision', 'FastAPI', 'React', 'Deep Learning', 'Python', 'OpenCV'],
    overview: 'A production-grade AI safety solution that leverages YOLOv11 to detect fire and smoke in real-time from video streams. Includes a live monitoring dashboard, historical analytics, configurable alert thresholds, and multi-camera support for industrial environments.',
    problem: 'Traditional fire detection systems rely on smoke detectors and heat sensors that only trigger when fire is already well-established. Existing CCTV systems capture footage but lack intelligent analysis — security personnel cannot monitor dozens of feeds simultaneously, creating dangerous blind spots in industrial facilities.',
    objectives: [
      'Detect fire and smoke in real-time from live video streams',
      'Achieve high precision and recall to minimize false positives',
      'Provide a live monitoring dashboard for security operators',
      'Support multiple simultaneous camera feeds',
      'Generate historical analytics and detection reports',
      'Allow configurable confidence thresholds per environment',
    ],
    solution: 'YOLOv11 trained on a custom dataset serves as the core detection engine. A FastAPI backend streams detection results via WebSockets to a React dashboard showing live feeds with overlaid detections, real-time alerts, and analytics charts.',
    workflow: [
      { step: '01', title: 'Video Ingestion', desc: 'Camera feeds ingested via RTSP streams or video files.' },
      { step: '02', title: 'Frame Extraction', desc: 'Frames extracted at configurable FPS and preprocessed for model input.' },
      { step: '03', title: 'YOLOv11 Inference', desc: 'Each frame passes through YOLOv11 outputting bounding boxes, labels, and confidence scores.' },
      { step: '04', title: 'Threshold Filtering', desc: 'Detections below configured confidence threshold are filtered out.' },
      { step: '05', title: 'Alert Generation', desc: 'Confirmed detections trigger real-time alerts to dashboard and notification system.' },
      { step: '06', title: 'Logging & Analytics', desc: 'All detection events logged to database for historical analysis.' },
    ],
    architecture: [
      { layer: 'Frontend', tech: 'React.js Dashboard', desc: 'Live feeds, alerts, analytics charts, threshold controls' },
      { layer: 'Backend', tech: 'FastAPI + WebSockets', desc: 'Inference API, stream processing, event broadcasting' },
      { layer: 'AI Engine', tech: 'YOLOv11 + PyTorch', desc: 'Real-time object detection, model inference pipeline' },
    ],
    features: [
      { title: 'Real-Time Detection', desc: 'Processes live video streams at high FPS with YOLOv11 inference engine.' },
      { title: 'Monitoring Dashboard', desc: 'Live dashboard showing detection events, confidence scores, and camera feeds.' },
      { title: 'Analytics & Reporting', desc: 'Historical analytics with charts, detection frequency, and exportable reports.' },
      { title: 'Confidence Threshold Control', desc: 'Configurable confidence thresholds to minimize false positives.' },
      { title: 'Multi-Camera Support', desc: 'Simultaneous monitoring of multiple camera feeds.' },
      { title: 'Alert System', desc: 'Instant alerts when fire or smoke is detected above threshold.' },
    ],
    training: [
      { phase: 'Dataset Collection', desc: 'Curated diverse dataset of fire, smoke, and normal images from public datasets and custom captures.' },
      { phase: 'Data Annotation', desc: 'Annotated bounding boxes for fire and smoke regions using LabelImg in YOLO format.' },
      { phase: 'Augmentation', desc: 'Applied flipping, rotation, brightness/contrast variation, and mosaic augmentation.' },
      { phase: 'Model Training', desc: 'Fine-tuned YOLOv11 on custom dataset with transfer learning from COCO pretrained weights.' },
      { phase: 'Model Evaluation', desc: 'Evaluated using mAP@0.5, precision, recall, and F1-score on held-out test set.' },
      { phase: 'Export & Deployment', desc: 'Exported to ONNX format for optimized inference and deployed via FastAPI.' },
    ],
    challenges: [
      { title: 'Dataset Imbalance', solution: 'Applied augmentation techniques and class weighting to balance fire/smoke/normal samples.' },
      { title: 'Real-Time Latency', solution: 'Optimized inference pipeline with model quantization and batch processing.' },
      { title: 'False Positives', solution: 'Tuned confidence thresholds and added temporal filtering across consecutive frames.' },
      { title: 'Diverse Environments', solution: 'Trained on diverse datasets covering indoor, outdoor, day, and night scenarios.' },
    ],
    results: [
      { metric: 'mAP@0.5', value: '92%+', desc: 'Mean Average Precision' },
      { metric: 'Inference Speed', value: '30+ FPS', desc: 'Real-time processing' },
      { metric: 'False Positive Rate', value: '<5%', desc: 'After threshold tuning' },
    ],
    futureScope: [
      'Edge deployment on NVIDIA Jetson for on-premise processing',
      'Integration with building management systems (BMS)',
      'Mobile app for remote monitoring and alerts',
      'Expansion to detect other hazards (chemical spills, flooding)',
      'Federated learning for continuous model improvement',
      'Integration with fire suppression systems for automated response',
    ],
    screenshots: ['Detection Dashboard', 'Live Camera Feed', 'Analytics Charts', 'Alert System'],
    closing: "The Fire & Smoke Detection System demonstrates the power of modern computer vision in solving critical safety challenges. By combining YOLOv11's detection capabilities with a real-time monitoring infrastructure, this system provides industrial facilities with an intelligent, always-on safety layer that traditional sensor-based systems cannot match.",
  },

  'smart-parking-management': {
    title: 'Smart Parking Management System',
    subtitle: 'Full-Stack Communication Platform',
    gradient: 'from-blue-500/40 via-cyan-500/30 to-teal-900/40',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-400',
    borderColor: 'border-blue-500/20',
    github: 'https://github.com/YOUR_GITHUB/smart-parking',
    tags: ['Spring Boot', 'React.js', 'WebSockets', 'MySQL', 'REST APIs', 'Java', 'JavaScript'],
    overview: 'A full-stack parking management platform that bridges the critical communication gap between security personnel and faculty. Features real-time slot availability, WebSocket-powered notifications, role-based dashboards, and a streamlined workflow for parking coordination in institutional environments.',
    problem: 'In institutional campuses, faculty members waste significant time searching for parking slots while security personnel have no efficient way to communicate availability. The lack of a centralized system leads to congestion, miscommunication, unauthorized parking, and frustration for both faculty and security staff. There was no digital bridge connecting these two groups in real time.',
    objectives: [
      'Bridge the communication gap between security personnel and faculty',
      'Provide real-time parking slot availability to faculty',
      'Enable security to manage and update slot status instantly',
      'Implement role-based access for security and faculty users',
      'Send real-time notifications when slots become available',
      'Maintain a log of parking activity for administration',
    ],
    solution: 'A Spring Boot backend with WebSocket support enables real-time bidirectional communication. Security personnel update slot status through their dashboard, which instantly pushes notifications to faculty via WebSockets. A React frontend provides role-specific views for both user types.',
    workflow: [
      { step: '01', title: 'Faculty Login', desc: 'Faculty logs in and views real-time parking slot availability on their dashboard.' },
      { step: '02', title: 'Slot Request', desc: 'Faculty requests a parking slot through the system.' },
      { step: '03', title: 'Security Notification', desc: 'Security personnel receive the request on their dashboard instantly via WebSocket.' },
      { step: '04', title: 'Slot Assignment', desc: 'Security assigns an available slot and updates its status in the system.' },
      { step: '05', title: 'Faculty Alert', desc: 'Faculty receives real-time notification with assigned slot details.' },
      { step: '06', title: 'Activity Logging', desc: 'All parking activity is logged for administrative review and analytics.' },
    ],
    architecture: [
      { layer: 'Frontend', tech: 'React.js', desc: 'Role-based dashboards for faculty and security with real-time updates' },
      { layer: 'Backend', tech: 'Spring Boot + WebSockets', desc: 'REST APIs, WebSocket server, business logic, authentication' },
      { layer: 'Database', tech: 'MySQL', desc: 'Slot management, user data, activity logs, session management' },
    ],
    features: [
      { title: 'Real-Time Notifications', desc: 'WebSocket-powered instant notifications between security and faculty.' },
      { title: 'Role-Based Access', desc: 'Separate dashboards and permissions for security personnel and faculty.' },
      { title: 'Slot Management', desc: 'Security can add, update, and manage parking slot status in real time.' },
      { title: 'Communication Bridge', desc: 'Eliminates manual communication — everything flows through the platform.' },
      { title: 'Activity Logs', desc: 'Complete audit trail of all parking activities for administration.' },
      { title: 'Notification Flow', desc: 'Structured notification pipeline: request → assignment → confirmation.' },
    ],
    training: [],
    challenges: [
      { title: 'Real-Time Sync', solution: 'Implemented WebSocket STOMP protocol for reliable bidirectional real-time communication.' },
      { title: 'Concurrent Updates', solution: 'Used optimistic locking in Spring Boot to handle concurrent slot update conflicts.' },
      { title: 'Role Management', solution: 'Implemented Spring Security with JWT for role-based access control.' },
      { title: 'Notification Reliability', solution: 'Added acknowledgment mechanism to ensure notifications are delivered and confirmed.' },
    ],
    results: [
      { metric: 'Response Time', value: '<100ms', desc: 'Real-time notification delivery' },
      { metric: 'User Roles', value: '2', desc: 'Security & Faculty' },
      { metric: 'Communication Gap', value: 'Eliminated', desc: 'Digital bridge established' },
    ],
    futureScope: [
      'Mobile app for faculty to receive notifications on the go',
      'QR code-based slot check-in/check-out system',
      'Predictive analytics for peak parking hours',
      'Integration with campus entry/exit gates',
      'Visitor parking management module',
      'Admin analytics dashboard with occupancy trends',
    ],
    screenshots: ['Faculty Dashboard', 'Security Dashboard', 'Slot Map View', 'Notification Panel'],
    closing: 'The Smart Parking Management System successfully eliminates the communication gap between security personnel and faculty through a real-time, role-based platform. By leveraging WebSockets and a clean Spring Boot architecture, it transforms a manual, error-prone process into a seamless digital workflow that saves time and reduces campus congestion.',
  },

  'voxscholar': {
    title: 'VoxScholar',
    subtitle: 'AI-Powered Academic Assistant',
    gradient: 'from-violet-500/40 via-purple-500/30 to-fuchsia-900/40',
    accent: 'text-violet-400',
    accentBg: 'bg-violet-400',
    borderColor: 'border-violet-500/20',
    github: 'https://github.com/YOUR_GITHUB/voxscholar',
    tags: ['React.js', 'Node.js', 'FastAPI', 'MongoDB', 'REST APIs', 'JavaScript', 'Python'],
    overview: 'VoxScholar is an AI-powered academic assistant designed to enhance the learning experience for students and educators. It combines voice interaction, intelligent Q&A, personalized study tools, and AI-driven content generation to create a comprehensive academic companion.',
    problem: 'Students struggle with information overload, lack of personalized learning support, and inefficient study methods. Traditional educational tools are passive and one-size-fits-all. There was a need for an intelligent, interactive academic assistant that could understand student needs, answer questions contextually, and adapt to individual learning styles.',
    objectives: [
      'Build an AI-powered Q&A system for academic subjects',
      'Implement voice interaction for hands-free learning',
      'Provide personalized study tools and flashcard generation',
      'Create an intuitive, accessible interface for students',
      'Enable document upload and intelligent summarization',
      'Track learning progress and provide insights',
    ],
    solution: 'VoxScholar uses a React frontend with voice recognition APIs for voice interaction, a Node.js backend for user management and session handling, and a FastAPI service for AI-powered Q&A and content generation. MongoDB stores user data, study materials, and progress tracking.',
    workflow: [
      { step: '01', title: 'User Input', desc: 'Student inputs a question via text or voice through the React interface.' },
      { step: '02', title: 'Processing', desc: 'Input is sent to the FastAPI AI service for processing and context understanding.' },
      { step: '03', title: 'AI Response', desc: 'AI generates a contextual, accurate academic response with explanations.' },
      { step: '04', title: 'Content Generation', desc: 'System can generate flashcards, summaries, and practice questions from the topic.' },
      { step: '05', title: 'Progress Tracking', desc: 'Interaction is logged and used to track learning progress and identify weak areas.' },
      { step: '06', title: 'Personalization', desc: 'System adapts recommendations based on user history and performance.' },
    ],
    architecture: [
      { layer: 'Frontend', tech: 'React.js', desc: 'Voice UI, Q&A interface, study tools, progress dashboard' },
      { layer: 'Backend', tech: 'Node.js + FastAPI', desc: 'User management, session handling, AI service integration' },
      { layer: 'Database', tech: 'MongoDB', desc: 'User profiles, study materials, progress data, conversation history' },
    ],
    features: [
      { title: 'Voice Interaction', desc: 'Hands-free learning with voice input and text-to-speech responses.' },
      { title: 'AI-Powered Q&A', desc: 'Contextual academic question answering across multiple subjects.' },
      { title: 'Flashcard Generation', desc: 'Automatic flashcard creation from topics or uploaded documents.' },
      { title: 'Document Summarization', desc: 'Upload study materials and get intelligent summaries.' },
      { title: 'Progress Tracking', desc: 'Visual progress tracking and performance insights.' },
      { title: 'Personalized Learning', desc: 'Adaptive recommendations based on learning history.' },
    ],
    training: [],
    challenges: [
      { title: 'Voice Accuracy', solution: 'Integrated Web Speech API with fallback text input for cross-browser compatibility.' },
      { title: 'Response Quality', solution: 'Implemented prompt engineering techniques for accurate, educational responses.' },
      { title: 'Performance', solution: 'Used streaming responses and lazy loading for fast, responsive UI.' },
      { title: 'Data Privacy', solution: 'Implemented user data isolation and secure session management.' },
    ],
    results: [
      { metric: 'Response Time', value: '<2s', desc: 'AI response generation' },
      { metric: 'Features', value: '6+', desc: 'Core learning tools' },
      { metric: 'Stack', value: 'Full', desc: 'End-to-end implementation' },
    ],
    futureScope: [
      'Integration with university LMS platforms',
      'Collaborative study rooms with real-time sharing',
      'Advanced document parsing with PDF and image support',
      'Spaced repetition algorithm for flashcard scheduling',
      'Mobile app for on-the-go learning',
      'Multi-language support for international students',
    ],
    screenshots: ['Q&A Interface', 'Voice Interaction', 'Flashcard Generator', 'Progress Dashboard'],
    closing: 'VoxScholar represents the future of personalized academic assistance — combining the accessibility of voice interaction with the power of AI to create a learning companion that adapts to each student. By making intelligent academic support available to everyone, VoxScholar aims to democratize quality education.',
  },
};

interface WorkflowStep { step: string; title: string; desc: string; }
interface ArchLayer { layer: string; tech: string; desc: string; }
interface Feature { title: string; desc: string; }
interface Challenge { title: string; solution: string; }
interface Result { metric: string; value: string; desc: string; }
interface TrainingPhase { phase: string; desc: string; }

interface ProjectData {
  title: string; subtitle: string; gradient: string; accent: string; accentBg: string;
  borderColor: string; github: string; tags: string[]; overview: string; problem: string;
  objectives: string[]; solution: string; workflow: WorkflowStep[]; architecture: ArchLayer[];
  features: Feature[]; training: TrainingPhase[]; challenges: Challenge[]; results: Result[];
  futureScope: string[]; screenshots: string[]; closing: string;
}

export default function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug];
  if (!project) notFound();

  const num = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
        <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-fg text-sm font-medium transition-colors mb-10 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Projects
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
        className={`relative rounded-3xl overflow-hidden mb-16 border ${project.borderColor}`}>
        <div className={`h-72 md:h-96 bg-gradient-to-br ${project.gradient} flex flex-col justify-end p-10`}>
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
          <div className="relative z-10 space-y-3">
            <div className="flex flex-wrap gap-2">{project.tags.slice(0, 4).map(t => <span key={t} className="tech-badge">{t}</span>)}</div>
            <h1 className="text-4xl md:text-6xl font-black text-fg">{project.title}</h1>
            <p className="text-muted text-lg max-w-2xl">{project.subtitle}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl text-sm font-semibold text-fg border border-border hover:border-accent/30 transition-all mt-2">
              <Github size={15} /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-4 gap-10">
        {/* TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 glass rounded-2xl p-5 space-y-1">
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-3">Contents</p>
            {['Overview','Problem','Objectives','Solution','Workflow','Architecture','Tech Stack','Features',
              ...(project.training.length ? ['Training'] : []),
              'Challenges','Results','Gallery','Future Scope','Summary'
            ].map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(' ','-')}`}
                className="block px-3 py-2 rounded-lg text-sm text-muted hover:text-fg hover:bg-white/5 transition-all">{s}</a>
            ))}
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-3 space-y-14 prose-dark">

          {/* Overview */}
          <Section id="overview" num={num(1)} accent={project.accent} title="Overview">
            <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{project.overview}</p></div>
          </Section>

          {/* Problem */}
          <Section id="problem" num={num(2)} accent={project.accent} title="Problem Statement">
            <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{project.problem}</p></div>
          </Section>

          {/* Objectives */}
          <Section id="objectives" num={num(3)} accent={project.accent} title="Objectives">
            <div className="glass rounded-2xl p-6 border border-border">
              <ul className="space-y-3">{project.objectives.map(o => (
                <li key={o} className="flex items-start gap-3 text-muted">
                  <span className={`${project.accent} mt-1 shrink-0`}>▸</span><span>{o}</span>
                </li>
              ))}</ul>
            </div>
          </Section>

          {/* Solution */}
          <Section id="solution" num={num(4)} accent={project.accent} title="Solution">
            <div className="glass rounded-2xl p-6 border border-border"><p className="text-muted leading-relaxed">{project.solution}</p></div>
          </Section>

          {/* Workflow */}
          <Section id="workflow" num={num(5)} accent={project.accent} title="Workflow">
            <div className="space-y-3">{project.workflow.map(w => (
              <div key={w.step} className="flex gap-4 glass rounded-xl p-4 border border-border">
                <span className={`${project.accent} font-black text-lg shrink-0`}>{w.step}</span>
                <div><h4 className="text-fg font-semibold">{w.title}</h4><p className="text-muted text-sm mt-1">{w.desc}</p></div>
              </div>
            ))}</div>
          </Section>

          {/* Architecture */}
          <Section id="architecture" num={num(6)} accent={project.accent} title="Architecture">
            <div className="glass rounded-2xl p-6 border border-border">
              <div className="grid sm:grid-cols-3 gap-4">{project.architecture.map(a => (
                <div key={a.layer} className="bg-white/5 rounded-xl p-4 border border-border text-center">
                  <span className={`text-xs font-bold ${project.accent} uppercase tracking-wider`}>{a.layer}</span>
                  <h4 className="text-fg font-bold mt-1 text-sm">{a.tech}</h4>
                  <p className="text-muted text-xs mt-2">{a.desc}</p>
                </div>
              ))}</div>
            </div>
          </Section>

          {/* Tech Stack */}
          <Section id="tech-stack" num={num(7)} accent={project.accent} title="Tech Stack">
            <div className="flex flex-wrap gap-2">{project.tags.map(t => <span key={t} className="tech-badge text-sm px-3 py-1.5">{t}</span>)}</div>
          </Section>

          {/* Features */}
          <Section id="features" num={num(8)} accent={project.accent} title="Key Features">
            <div className="grid sm:grid-cols-2 gap-4">{project.features.map(f => (
              <div key={f.title} className="glass rounded-xl p-5 border border-border card-hover">
                <h4 className="text-fg font-bold mb-2">{f.title}</h4>
                <p className="text-muted text-sm">{f.desc}</p>
              </div>
            ))}</div>
          </Section>

          {/* Training (only for fire-smoke) */}
          {project.training.length > 0 && (
            <Section id="training" num={num(9)} accent={project.accent} title="Training Pipeline">
              <div className="glass rounded-2xl p-6 border border-border space-y-3">
                {project.training.map(t => (
                  <div key={t.phase} className="flex gap-4 items-start">
                    <span className={`w-2 h-2 rounded-full ${project.accentBg} mt-2 shrink-0`} />
                    <div><span className="text-fg font-semibold">{t.phase}: </span><span className="text-muted text-sm">{t.desc}</span></div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Challenges */}
          <Section id="challenges" num={num(project.training.length ? 10 : 9)} accent={project.accent} title="Challenges & Solutions">
            <div className="space-y-4">{project.challenges.map(c => (
              <div key={c.title} className="glass rounded-xl p-5 border border-border">
                <h4 className="text-fg font-bold mb-1">⚡ {c.title}</h4>
                <p className="text-muted text-sm">✅ {c.solution}</p>
              </div>
            ))}</div>
          </Section>

          {/* Results */}
          <Section id="results" num={num(project.training.length ? 11 : 10)} accent={project.accent} title="Results">
            <div className="grid sm:grid-cols-3 gap-4">{project.results.map(r => (
              <div key={r.metric} className={`glass rounded-2xl p-6 text-center border ${project.borderColor}`}>
                <div className={`text-3xl font-black ${project.accent} mb-1`}>{r.value}</div>
                <div className="text-fg font-semibold text-sm">{r.metric}</div>
                <div className="text-muted text-xs mt-1">{r.desc}</div>
              </div>
            ))}</div>
          </Section>

          {/* Gallery */}
          <Section id="gallery" num={num(project.training.length ? 12 : 11)} accent={project.accent} title="Image Gallery">
            <div className="grid sm:grid-cols-2 gap-4">{project.screenshots.map(s => (
              <div key={s} className="glass rounded-2xl h-48 flex items-center justify-center border border-border border-dashed">
                <div className="text-center"><div className="text-3xl mb-2">🖼️</div>
                  <p className="text-muted text-sm">{s}</p><p className="text-muted/50 text-xs mt-1">Screenshot placeholder</p>
                </div>
              </div>
            ))}</div>
          </Section>

          {/* Future Scope */}
          <Section id="future-scope" num={num(project.training.length ? 13 : 12)} accent={project.accent} title="Future Scope">
            <div className="glass rounded-2xl p-6 border border-border">
              <ul className="space-y-3">{project.futureScope.map(f => (
                <li key={f} className="flex items-start gap-3 text-muted">
                  <span className={`${project.accent} mt-1 shrink-0`}>▸</span><span>{f}</span>
                </li>
              ))}</ul>
            </div>
          </Section>

          {/* Closing */}
          <Section id="summary" num={num(project.training.length ? 14 : 13)} accent={project.accent} title="Closing Summary">
            <div className={`glass rounded-2xl p-8 border ${project.borderColor} text-center space-y-4`}>
              <p className="text-muted leading-relaxed max-w-2xl mx-auto">{project.closing}</p>
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-2 text-white rounded-xl font-semibold transition-all shadow-glow">
                <Github size={16} /> View on GitHub
              </a>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ id, num, accent, title, children }: {
  id: string; num: string; accent: string; title: string; children: React.ReactNode;
}) {
  return (
    <section id={id}>
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-black text-fg mb-4 flex items-center gap-2">
          <span className={accent}>{num}.</span> {title}
        </h2>
        {children}
      </motion.div>
    </section>
  );
}

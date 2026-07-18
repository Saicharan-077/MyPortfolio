import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
];

const socials = [
  { href: 'https://github.com/YOUR_GITHUB', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com/in/YOUR_LINKEDIN', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:your@email.com', icon: Mail, label: 'Email' },
  { href: 'https://twitter.com/YOUR_TWITTER', icon: Twitter, label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white font-bold text-sm">
                SC
              </div>
              <span className="font-bold text-fg">Sai Charan</span>
            </div>
            <p className="text-muted text-sm leading-relaxed max-w-xs">
              AI/ML Engineer & Full-Stack Developer building production-grade intelligent systems and premium web applications.
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              <span className="text-success text-xs font-medium">Available for opportunities</span>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-fg">Navigation</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-fg transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-fg">Connect</h3>
            <div className="flex flex-wrap gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 glass-light rounded-xl text-muted hover:text-fg hover:border-accent/30 transition-all hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Sai Charan. All rights reserved.
          </p>
          <p className="text-muted text-xs">
            Built with Next.js 15 · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

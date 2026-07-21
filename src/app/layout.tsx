import type { Metadata } from 'next';
import '@/app/globals.css';
import NavBar from '@/components/ui/NavBar';
import Footer from '@/components/ui/Footer';
import AuroraBackground from '@/components/ui/AuroraBackground';
import SmoothScrollProvider from '@/components/ui/SmoothScrollProvider';
import MouseSpotlight from '@/components/ui/MouseSpotlight';
import ThemeProvider from '@/components/ui/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Sai Charan – AI Engineer & Full-Stack Developer',
    template: '%s | Sai Charan',
  },
  description:
    'Portfolio of Sai Charan – AI/ML Engineer, Full-Stack Developer, and Systems Engineer building production-grade software and intelligent systems.',
  keywords: [
    'Sai Charan',
    'AI Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'YOLOv11',
    'Computer Vision',
    'Spring Boot',
    'Portfolio',
  ],
  authors: [{ name: 'Sai Charan' }],
  creator: 'Sai Charan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saicharan.dev',
    title: 'Sai Charan – AI Engineer & Full-Stack Developer',
    description:
      'Building production-grade AI systems and premium web applications.',
    siteName: 'Sai Charan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Charan – AI Engineer & Full-Stack Developer',
    description: 'Building production-grade AI systems and premium web applications.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('portfolio-theme');
                  if (theme === 'light' || theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-bg text-fg antialiased">
        <ThemeProvider>
          <SmoothScrollProvider>
            <AuroraBackground />
            <MouseSpotlight />
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

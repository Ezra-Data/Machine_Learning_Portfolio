import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/ui/FloatingContact';
import MobileBottomBar from '@/components/ui/MobileBottomBar';

export const metadata: Metadata = {
  metadataBase: new URL('https://ezra-portfolio.onrender.com'),
  title: {
    default: 'Ezra Ndinya Ogechi | Data Scientist & ML Engineer',
    template: '%s | Ezra Ndinya Ogechi',
  },
  description:
    'Data Scientist and Machine Learning Engineer building end to end ML systems, native Android ML apps, and teaching NeuralNest.',
  keywords: [
    'Data Scientist',
    'Machine Learning Engineer',
    'Kenya',
    'Nairobi',
    'Ezra Ndinya Ogechi',
    'Ezra Ndinya',
    'NeuralNest',
    'Python',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Data Analytics',
    'Power BI',
    'SQL',
  ],
  authors: [{ name: 'Ezra Ndinya Ogechi' }],
  creator: 'Ezra Ndinya Ogechi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ezra-portfolio.onrender.com',
    title: 'Ezra Ndinya Ogechi | Data Scientist & ML Engineer',
    description:
      'Data Scientist and Machine Learning Engineer building end to end ML systems, native Android ML apps, and teaching NeuralNest.',
    siteName: 'Ezra Ndinya Ogechi Portfolio',
    images: [
      {
        url: '/images/hero-data-orb.jpg',
        width: 1200,
        height: 630,
        alt: 'Ezra Ndinya Ogechi: Data Scientist and ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ezra Ndinya Ogechi | Data Scientist & ML Engineer',
    description:
      'Data Scientist & ML Engineer. Real machine learning projects, production models, and NeuralNest ML course.',
    creator: '@OgechiEzra',
    images: ['/images/hero-data-orb.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="midnight-aurora" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'daylight':'midnight-aurora';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <link rel="icon" href="/images/brand/logo-mark.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://ezra-portfolio.onrender.com/#person',
                  name: 'Ezra Ndinya Ogechi',
                  jobTitle: 'Data Scientist & ML Engineer',
                  url: 'https://ezra-portfolio.onrender.com',
                  image: 'https://ezra-portfolio.onrender.com/images/ezra-portrait.jpg',
                  sameAs: [
                    'https://github.com/Ezra-Data',
                    'https://www.linkedin.com/in/ezra-ogechi-1a615534a/',
                    'https://x.com/OgechiEzra',
                    'https://www.tiktok.com/@codetointelligence4',
                    'https://www.reddit.com/user/Ogechi_Ezra7054/',
                  ],
                  knowsAbout: [
                    'Machine Learning',
                    'Data Science',
                    'Deep Learning',
                    'Python',
                    'Natural Language Processing',
                    'Predictive Modeling',
                    'Power BI',
                    'SQL',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://ezra-portfolio.onrender.com/#website',
                  url: 'https://ezra-portfolio.onrender.com',
                  name: 'Ezra Ndinya Ogechi Portfolio',
                  publisher: { '@id': 'https://ezra-portfolio.onrender.com/#person' },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <Header />
          <main id="main-content" style={{ flex: 1, paddingTop: '72px' }}>
            {children}
          </main>
          <Footer />
          <FloatingContact />
          <MobileBottomBar />
        </ThemeProvider>
      </body>
    </html>
  );
}

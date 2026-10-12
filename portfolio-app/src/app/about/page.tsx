import type { Metadata } from 'next';
import { getAboutContent } from '@/lib/content';
import AboutSection from '@/components/sections/AboutSection';

export const metadata: Metadata = {
  title: 'About | Ezra Ndinya Ogechi',
  description:
    'Learn about Ezra Ndinya Ogechi, a data scientist and machine learning engineer from Nairobi building practical models and mobile apps.',
};

export default async function AboutPage() {
  const aboutHtml = await getAboutContent();

  return (
    <div style={{ paddingTop: '2rem' }}>
      <AboutSection aboutHtml={aboutHtml} />
    </div>
  );
}

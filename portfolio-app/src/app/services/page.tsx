import type { Metadata } from 'next';
import ServicesSection from '@/components/sections/ServicesSection';

export const metadata: Metadata = {
  title: 'Services & Android ML Apps | Ezra Ndinya Ogechi',
  description:
    'Machine learning model development, native offline Android ML apps, and 1 on 1 mentorship services offered by Ezra Ndinya Ogechi.',
};

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '2rem' }}>
      <ServicesSection />
    </div>
  );
}

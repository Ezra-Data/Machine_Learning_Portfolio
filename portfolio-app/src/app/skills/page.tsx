import type { Metadata } from 'next';
import { getSkills } from '@/lib/content';
import SkillsSection from '@/components/sections/SkillsSection';

export const metadata: Metadata = {
  title: 'Skills & Stack | Ezra Ndinya Ogechi',
  description:
    'Core technical skills, programming languages, ML frameworks, and tools used by Ezra Ndinya Ogechi.',
};

export default function SkillsPage() {
  const skillGroups = getSkills();

  return (
    <div style={{ paddingTop: '2rem' }}>
      <SkillsSection skillGroups={skillGroups} />
    </div>
  );
}

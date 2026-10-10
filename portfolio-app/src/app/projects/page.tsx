import { Suspense } from 'react';
import type { Metadata } from 'next';
import { getAllProjects } from '@/lib/content';
import ProjectsList from '@/components/projects/ProjectsList';

export const metadata: Metadata = {
  title: 'Projects | Ezra Ndinya Ogechi',
  description:
    'Explore 19+ machine learning and data analytics projects. Filter by track, algorithm, and category with direct links to reproducible GitHub repositories.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="section" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        {/* Page Header */}
        <div style={{ maxWidth: '720px', marginBottom: '2.5rem' }}>
          <div
            style={{
              fontSize: '0.8125rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--accent)',
              marginBottom: '0.5rem',
            }}
          >
            Portfolio Index
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '0.75rem',
            }}
          >
            All Projects & Implementations
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Every project here represents real, self contained work with clean data pipelines, validated models, and public repository source code.
          </p>
        </div>

        {/* Filter & Project Grid */}
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted)' }}>Loading projects...</div>}>
          <ProjectsList initialProjects={projects} />
        </Suspense>
      </div>
    </div>
  );
}

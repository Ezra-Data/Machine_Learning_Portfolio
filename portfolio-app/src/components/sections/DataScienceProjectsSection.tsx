import Link from 'next/link';
import { ArrowRight, Code2, FolderGit2 } from 'lucide-react';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjectGithubUrl } from '@/lib/urls';

interface DataScienceProjectsSectionProps {
  projects: Project[];
}

export default function DataScienceProjectsSection({ projects }: DataScienceProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div>
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
              Machine Learning Projects
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '0.5rem',
              }}
            >
              Featured Machine Learning Projects
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', maxWidth: '640px' }}>
              Practical projects in classification, regression, NLP, and recommendations with working code on GitHub.
            </p>
          </div>

          <Link href="/projects?track=data-science" className="btn btn-secondary">
            <span>View All 12 ML Projects</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Featured Projects Grid */}
        <div className="projects-grid" style={{ marginBottom: '3rem' }}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              githubUrl={getProjectGithubUrl(project)}
            />
          ))}
        </div>

        {/* Monorepo Banner Card */}
        <div
          className="glass-card"
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            background: 'linear-gradient(135deg, var(--card-bg), var(--surface))',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                background: 'var(--accent-glow)',
                color: 'var(--accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FolderGit2 size={24} />
            </div>
            <div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                Machine Learning Monorepo
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                All 12 projects are maintained in <code style={{ color: 'var(--accent)' }}>Ezra-Data/Machine_Learning_Projects</code>
              </div>
            </div>
          </div>

          <a
            href="https://github.com/Ezra-Data/Machine_Learning_Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
            style={{ border: '1px solid var(--border)' }}
          >
            <Code2 size={16} />
            <span>Browse Monorepo on GitHub</span>
          </a>
        </div>
      </div>

    </section>
  );
}

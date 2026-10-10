'use client';

import Link from 'next/link';
import { ArrowRight, BarChart2, ExternalLink, PieChart } from 'lucide-react';
import type { Project } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjectGithubUrl } from '@/lib/urls';

interface DataAnalyticsSectionProps {
  projects: Project[];
}

export default function DataAnalyticsSection({ projects }: DataAnalyticsSectionProps) {
  // Show first 3 featured analytics cards on home page
  const displayProjects = projects.slice(0, 3);

  return (
    <section id="analytics" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        {/* Section Header Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            marginBottom: '3rem',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08), var(--card-bg))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                fontSize: '0.8125rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#0EA5E9',
                marginBottom: '0.5rem',
              }}
            >
              Data Analytics Portfolio
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '0.75rem',
              }}
            >
              Data Analytics Projects
            </h2>
            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
              Excel, SQL (MySQL), Power BI, and Python (Pandas) projects solving business reporting, data cleaning, and KPI tracking challenges.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href="https://ezra-wl21.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '0.875rem 1.75rem',
                fontSize: '1rem',
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0284c7, #0EA5E9)',
                border: 'none',
                boxShadow: '0 8px 24px rgba(14, 165, 233, 0.25)',
              }}
            >
              <span>Visit my Data Analytics site</span>
              <ExternalLink size={18} />
            </a>

            <a
              href="https://ezra-wl21.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ justifyContent: 'center' }}
            >
              <span>Explore Analytics Companion Site</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Featured Analytics Cards Grid */}
        <div className="analytics-grid" style={{ marginBottom: '2rem' }}>
          {displayProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              githubUrl={getProjectGithubUrl(project)}
            />
          ))}
        </div>

        {/* More repos note */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            borderRadius: '16px',
            border: '1px dashed var(--border)',
            background: 'var(--surface)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            Looking for more reports? More data analytics projects, Power BI dashboards, and SQL queries can be accessed via the <strong>Data Analytics Site (Ezra The Analyst)</strong>.
          </p>
          <a
            href="https://ezra-wl21.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <span>Visit Data Analytics Site</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

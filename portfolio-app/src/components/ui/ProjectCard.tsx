'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ArrowRight, Clock, Trophy, BarChart2, Brain, LineChart, Sparkles, Cpu, Database } from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import type { Project } from '@/types';

// Category colors
const categoryColors: Record<string, string> = {
  Classification: '#8B5CF6',
  Regression: '#2DD4BF',
  Recommendation: '#F59E0B',
  Clustering: '#FB7185',
  NLP: '#22C55E',
  'AI Applications': '#38BDF8',
  SQL: '#0EA5E9',
  'Power BI': '#F59E0B',
  Excel: '#22C55E',
  Python: '#4F46E5',
};

// Category gradient backgrounds
const categoryGradients: Record<string, string> = {
  Classification: 'linear-gradient(135deg, #7c3aed20, #8B5CF620)',
  Regression: 'linear-gradient(135deg, #0d948420, #2DD4BF20)',
  Recommendation: 'linear-gradient(135deg, #d9770620, #F59E0B20)',
  Clustering: 'linear-gradient(135deg, #e1115020, #FB718520)',
  NLP: 'linear-gradient(135deg, #16a34a20, #22C55E20)',
  'AI Applications': 'linear-gradient(135deg, #0284c720, #38BDF820)',
  SQL: 'linear-gradient(135deg, #0284c720, #0EA5E920)',
  'Power BI': 'linear-gradient(135deg, #d9770620, #F59E0B20)',
  Excel: 'linear-gradient(135deg, #16a34a20, #22C55E20)',
  Python: 'linear-gradient(135deg, #4338ca20, #4F46E520)',
};

function getCategoryIcon(cat: string) {
  switch (cat) {
    case 'NLP':
    case 'Classification':
      return <Brain size={24} />;
    case 'Regression':
      return <LineChart size={24} />;
    case 'Recommendation':
    case 'AI Applications':
      return <Sparkles size={24} />;
    case 'Clustering':
    case 'Python':
      return <Cpu size={24} />;
    case 'SQL':
      return <Database size={24} />;
    case 'Power BI':
    case 'Excel':
    default:
      return <BarChart2 size={24} />;
  }
}

interface ProjectCardProps {
  project: Project;
  githubUrl: string;
}

export default function ProjectCard({ project, githubUrl }: ProjectCardProps) {
  const catColor = categoryColors[project.category] || 'var(--accent)';
  const catGradient = categoryGradients[project.category] || 'var(--accent-glow)';
  const isAnalytics = project.track === 'data-analytics';
  const isChana = project.slug === 'chana';

  return (
    <article
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
      }}
    >
      {/* Visual Header: Image preview if available, otherwise Theme-aware Category gradient bar */}
      {project.image ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '170px',
            background: 'var(--surface)',
            borderBottom: '1px solid var(--border)',
            overflow: 'hidden',
          }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(11, 16, 32, 0.7) 0%, transparent 60%)',
            }}
          />
        </div>
      ) : (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '140px',
            background: `linear-gradient(135deg, ${catColor}18 0%, rgba(15, 23, 42, 0.4) 60%, var(--surface) 100%)`,
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Subtle tech dot matrix grid */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(rgba(148, 163, 184, 0.18) 1px, transparent 1px)',
              backgroundSize: '16px 16px',
              opacity: 0.8,
            }}
          />
          {/* Ambient soft glow orb behind badge */}
          <div
            style={{
              position: 'absolute',
              width: '120px',
              height: '120px',
              borderRadius: '9999px',
              background: `radial-gradient(circle, ${catColor}30 0%, transparent 70%)`,
              filter: 'blur(10px)',
              pointerEvents: 'none',
            }}
          />
          {/* Centered glowing icon with rounded corners */}
          <div
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '16px',
                background: `linear-gradient(135deg, ${catColor}28, ${catColor}12)`,
                border: `1.5px solid ${catColor}70`,
                boxShadow: `0 8px 24px ${catColor}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: catColor,
                transition: 'transform 0.3s ease',
              }}
            >
              {getCategoryIcon(project.category)}
            </div>
            <span
              style={{
                fontSize: '0.6875rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: catColor,
                background: 'rgba(15, 23, 42, 0.7)',
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px',
                border: `1px solid ${catColor}40`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {project.category}
            </span>
          </div>
          {/* Bottom vignette */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '24px',
              background: 'linear-gradient(to top, var(--card-bg), transparent)',
            }}
          />
        </div>
      )}

      {/* Card Content Container */}
      <div
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '1rem',
        }}
      >
        {/* Category & Badge Strip */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                background: catGradient,
                color: catColor,
                border: `1px solid ${catColor}30`,
              }}
            >
              {project.category}
            </span>

            {project.award && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: '#F59E0B',
                  background: 'rgba(245, 158, 11, 0.15)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '9999px',
                }}
              >
                <Trophy size={11} />
                <span>{project.award}</span>
              </span>
            )}
          </div>

          {project.lastUpdated && (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: 'var(--muted)' }}>
              <Clock size={12} />
              {project.lastUpdated}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.2rem',
            lineHeight: 1.3,
            fontWeight: 700,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          {project.title}
        </h3>

        {/* Summary */}
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0, flex: 1 }}>
          {project.summary}
        </p>

        {/* Tool Chips */}
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {project.tools.map((tool) => (
            <span key={tool} className="chip" style={{ fontSize: '0.6875rem' }}>
              {tool}
            </span>
          ))}
          {project.algorithms.map((algo) => (
            <span key={algo} className="chip chip-category" style={{ fontSize: '0.6875rem' }}>
              {algo}
            </span>
          ))}
        </div>

        {/* Key Metric Result (only if provided) */}
        {project.result && (
          <div
            style={{
              padding: '0.5rem 0.75rem',
              borderRadius: '10px',
              background: 'var(--accent-glow)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--accent)',
            }}
          >
            {project.result}
          </div>
        )}

        {/* Actions Button Row */}
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            marginTop: 'auto',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {isAnalytics ? (
            // Data Analytics Card: Primary is GitHub, secondary is "See on analytics site"
            <>
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-sm"
                  style={{ flex: 1, justifyContent: 'center' }}
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}
              <a
                href="https://ezra-wl21.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                title="See on Ezra The Analyst"
              >
                <span>Analytics site</span>
                <ExternalLink size={13} />
              </a>
            </>
          ) : (
            // Data Science Card: Primary is View details, secondary is GitHub / On request
            <>
              <Link
                href={`/projects/${project.slug}`}
                className="btn btn-primary btn-sm"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <span>View details</span>
                <ArrowRight size={14} />
              </Link>

              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm"
                >
                  <ExternalLink size={14} />
                  <span>Demo</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

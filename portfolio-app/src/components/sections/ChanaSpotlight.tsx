'use client';

import Link from 'next/link';
import { Trophy, ArrowRight, Sparkles, Navigation, MessageSquare, ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import type { Project } from '@/types';

interface ChanaSpotlightProps {
  project?: Project;
  isRepoPublic?: boolean;
}

export default function ChanaSpotlight({ project, isRepoPublic = false }: ChanaSpotlightProps) {
  if (!project) return null;

  return (
    <section
      id="spotlight"
      style={{
        paddingTop: '2rem',
        paddingBottom: '3rem',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div className="container">
        {/* Headline Spotlight Card */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            borderRadius: '24px',
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--surface) 100%)',
            border: '1px solid var(--accent)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Subtle Ambient Glow Behind Badge */}
          <div
            style={{
              position: 'absolute',
              top: '-60px',
              right: '-60px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              filter: 'blur(70px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Top Badges Strip */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.75rem',
                marginBottom: '1.25rem',
              }}
            >
              {/* First Runner Up Badge */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.875rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(251, 113, 133, 0.2) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.5)',
                  color: '#F59E0B',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                }}
              >
                <Trophy size={15} />
                <span>First Runner Up: DeKUT Hackathon 2026</span>
              </div>

              {/* Category Pill */}
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.35rem 0.75rem',
                  borderRadius: '9999px',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                }}
              >
                <Sparkles size={13} />
                Featured Headline Project
              </span>
            </div>

            {/* Title & Tagline Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                alignItems: 'center',
                marginBottom: '1.75rem',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                    fontWeight: 800,
                    color: 'var(--text)',
                    lineHeight: 1.15,
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Chana
                </h2>
                <p
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                    maxWidth: '620px',
                    margin: 0,
                  }}
                >
                  Campus chatbot and navigation system for Dedan Kimathi University of Technology (DeKUT).
                </p>
              </div>

              {/* Highlights mini pill box */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  padding: '1.25rem',
                  borderRadius: '16px',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text)' }}>
                  <MessageSquare size={16} style={{ color: 'var(--accent)' }} />
                  <span>Conversational assistant for campus queries</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text)' }}>
                  <Navigation size={16} style={{ color: 'var(--accent-2)' }} />
                  <span>Pathfinding and landmark wayfinding for DeKUT</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                  Built by Team WAHENGA • Dedan Kimathi University of Technology
                </div>
              </div>
            </div>

            {/* Tool Chips */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem',
              }}
            >
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="badge"
                  style={{
                    fontSize: '0.8125rem',
                    background: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--text)',
                  }}
                >
                  {tool}
                </span>
              ))}
              {project.algorithms.map((algo) => (
                <span
                  key={algo}
                  className="badge"
                  style={{
                    fontSize: '0.8125rem',
                    background: 'var(--surface)',
                    borderColor: 'var(--border)',
                    color: 'var(--accent)',
                  }}
                >
                  {algo}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '0.875rem',
              }}
            >
              <Link href="/projects/chana" className="btn btn-primary">
                <span>View project</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="https://github.com/Ezra-Data/Chana"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                title="Direct link: https://github.com/Ezra-Data/Chana"
              >
                <Github size={16} />
                <span>GitHub Repo</span>
                <ExternalLink size={14} />
              </a>

              <Link
                href="/contact?service=web"
                className="btn btn-ghost"
                style={{ border: '1px solid var(--border)' }}
              >
                <span>Request Deployed System</span>
              </Link>
            </div>

            <p style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.5 }}>
              Direct GitHub link: <code style={{ color: 'var(--accent)' }}>github.com/Ezra-Data/Chana</code>. (If visiting without GitHub authentication shows 404, the repo is set to Private on GitHub. Click Request Deployed System for access).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { GitCommit, ExternalLink, Activity } from 'lucide-react';
import type { GitHubCommit } from '@/lib/github';
import { formatRelativeTime } from '@/lib/github';

interface CurrentlyBuildingProps {
  commits: GitHubCommit[];
}

export default function CurrentlyBuilding({ commits }: CurrentlyBuildingProps) {
  // If no commits available, render a clean fallback strip linking to the repository
  const latestCommit = commits && commits.length > 0 ? commits[0] : null;

  return (
    <section
      style={{
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg-alt)',
        padding: '0.875rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.875rem',
          }}
        >
          {/* Left: Indicator & Activity info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: '280px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.25rem 0.625rem',
                borderRadius: '9999px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              <Activity size={13} className="animate-pulse" />
              <span>LIVE MONOREPO</span>
            </div>

            {latestCommit ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '850px',
                }}
              >
                <GitCommit size={15} style={{ flexShrink: 0, color: 'var(--muted)' }} />
                <span
                  style={{
                    color: 'var(--text)',
                    fontWeight: 500,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                  title={latestCommit.message}
                >
                  {latestCommit.message}
                </span>
                <span style={{ color: 'var(--muted)', flexShrink: 0, fontSize: '0.75rem' }}>
                  ({formatRelativeTime(latestCommit.date)})
                </span>
              </div>
            ) : (
              <span style={{ color: 'var(--text-secondary)' }}>
                Active repository: <code style={{ color: 'var(--accent)' }}>Ezra-Data/Machine_Learning_Projects</code>
              </span>
            )}
          </div>

          {/* Right: Quick link to Monorepo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {latestCommit && (
              <a
                href={latestCommit.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-mono, monospace)',
                  fontSize: '0.75rem',
                  color: 'var(--muted)',
                  textDecoration: 'none',
                }}
              >
                {latestCommit.sha}
              </a>
            )}

            <a
              href="https://github.com/Ezra-Data/Machine_Learning_Projects"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                color: 'var(--accent)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                textDecoration: 'none',
              }}
            >
              <span>View Monorepo</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

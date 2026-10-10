'use client';

import Link from 'next/link';
import { Award, FileText, ArrowRight, ExternalLink } from 'lucide-react';
import type { Certification } from '@/types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export default function CertificationsSection({ certifications }: CertificationsSectionProps) {
  if (!certifications || certifications.length === 0) return null;

  const displayList = certifications.slice(0, 3);

  return (
    <section id="certifications" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '2.5rem',
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
              Recognition & Badges
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                margin: 0,
              }}
            >
              Certifications & Awards
            </h2>
          </div>

          <Link
            href="/certifications"
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <span>View all recognition</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Compact Strip Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {displayList.map((item, idx) => {
            const isAward = item.type === 'award';
            const typeLabel = isAward ? 'Award' : item.type === 'participation' ? 'Participation' : 'Course';

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.25rem',
                  border: isAward ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid var(--border)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        padding: '0.25rem 0.625rem',
                        borderRadius: '9999px',
                        background: isAward ? 'rgba(245, 158, 11, 0.15)' : 'var(--accent-glow)',
                        color: isAward ? '#F59E0B' : 'var(--accent)',
                        border: isAward ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid var(--border)',
                      }}
                    >
                      {isAward ? <Award size={13} /> : <FileText size={13} />}
                      {typeLabel}
                    </span>

                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 500 }}>
                      {item.date}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.3,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <div style={{ fontSize: '0.8125rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
                    {item.issuer}
                  </div>

                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                    flexWrap: 'wrap',
                  }}
                >
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <span>GitHub</span>
                      <ExternalLink size={13} />
                    </a>
                  )}

                  {item.projectSlug ? (
                    <Link
                      href={`/projects/${item.projectSlug}`}
                      className="btn btn-primary btn-sm"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <span>View project</span>
                      <ArrowRight size={13} />
                    </Link>
                  ) : item.file ? (
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <span>View document</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : null}

                  {item.demoRequestUrl && (
                    <Link
                      href={item.demoRequestUrl}
                      className="btn btn-ghost btn-sm"
                      style={{ fontSize: '0.8125rem', border: '1px solid var(--border)' }}
                    >
                      <span>Request System</span>
                    </Link>
                  )}

                  {item.verifyUrl ? (
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                      style={{ fontSize: '0.8125rem' }}
                    >
                      <span>Verify</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

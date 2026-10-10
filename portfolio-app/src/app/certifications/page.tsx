import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Award, FileText, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { getCertifications } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Recognition and Certificates | Ezra Ndinya Ogechi',
  description:
    'Hackathon results, certificates and training completed by Ezra Ndinya Ogechi.',
};

function getTypeLabel(type: string): string {
  switch (type) {
    case 'award':
      return 'Award';
    case 'participation':
      return 'Participation';
    case 'course':
      return 'Academic Transcript';
    case 'education':
      return 'Education';
    default:
      return 'Certificate';
  }
}

export default function CertificationsPage() {
  const certifications = getCertifications();

  const awards = certifications.filter((c) => c.type === 'award');
  const certificates = certifications.filter(
    (c) => c.type === 'participation' || c.type === 'course' || c.type === 'education'
  );

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '720px', marginBottom: '3.5rem' }}>
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
            Recognition and Certificates
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            Recognition & Certificates
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Hackathon results, certificates and training I have completed.
          </p>
        </div>

        {/* Group 1: Awards */}
        {awards.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#F59E0B',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Award size={20} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  margin: 0,
                }}
              >
                Awards & Competitions
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {awards.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#F59E0B',
                          background: 'rgba(245, 158, 11, 0.15)',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{item.date}</span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>
                      {item.issuer}
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {item.description}
                    </p>

                    {item.team && (
                      <div
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          background: 'var(--surface)',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <strong style={{ color: 'var(--text)' }}>Team:</strong> {item.team}
                        {item.role && <> &bull; <strong style={{ color: 'var(--text)' }}>Role:</strong> {item.role}</>}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    {item.githubUrl && (
                      <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <span>View on GitHub</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {item.demoRequestUrl && (
                      <Link href={item.demoRequestUrl} className="btn btn-secondary btn-sm">
                        <span>Request Deployed System</span>
                      </Link>
                    )}
                    {item.projectSlug && (
                      <Link href={`/projects/${item.projectSlug}`} className="btn btn-ghost btn-sm" style={{ border: '1px solid var(--border)' }}>
                        <span>Project Overview</span>
                        <ArrowRight size={14} />
                      </Link>
                    )}
                    {item.verifyUrl && (
                      <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                        <span>Verify</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {item.file && (
                      <a href={item.file} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                        <span>View document</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Group 2: Certificates & Training */}
        {certificates.length > 0 && (
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'var(--accent-glow)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FileText size={20} />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: 'var(--text)',
                  margin: 0,
                }}
              >
                Certificates & Training
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {certificates.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: 'var(--accent)',
                          background: 'var(--accent-glow)',
                          padding: '0.25rem 0.625rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>{item.date}</span>
                    </div>

                    {/* Certificate Thumbnail */}
                    {item.thumbnail && (
                      <div
                        style={{
                          position: 'relative',
                          width: '100%',
                          height: '240px',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          marginBottom: '1.25rem',
                          background: 'rgba(11, 16, 32, 0.95)',
                          border: '1px solid var(--border)',
                          padding: '6px',
                        }}
                      >
                        <Image
                          src={item.thumbnail}
                          alt={item.title}
                          fill
                          style={{ objectFit: 'contain' }}
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>
                    )}

                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '1rem' }}>
                      {item.issuer}
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                      {item.description}
                    </p>

                    {item.team && (
                      <div
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--text-secondary)',
                          background: 'var(--surface)',
                          padding: '0.5rem 0.75rem',
                          borderRadius: '8px',
                          border: '1px solid var(--border)',
                          marginBottom: '1.5rem',
                        }}
                      >
                        <strong style={{ color: 'var(--text)' }}>Team:</strong> {item.team}
                        {item.projectName && <> &bull; <strong style={{ color: 'var(--text)' }}>Project:</strong> {item.projectName}</>}
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                    {item.file && (
                      <a href={item.file} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        <span>View document</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {/* Only show Verify if verifyUrl is present */}
                    {item.verifyUrl && (
                      <a href={item.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                        <CheckCircle size={14} className="text-emerald-400" />
                        <span>Verify</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

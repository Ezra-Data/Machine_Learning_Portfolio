import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '520px',
          padding: '3rem 2.5rem',
          borderRadius: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.25rem',
        }}
      >
        <span
          style={{
            fontSize: '4.5rem',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1,
            color: 'var(--accent)',
            letterSpacing: '-0.03em',
          }}
        >
          404
        </span>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.75rem',
            fontWeight: 800,
            color: 'var(--text)',
            margin: 0,
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          The page or project you are looking for doesn&apos;t exist, was moved, or is currently being updated.
        </p>

        <div style={{ display: 'flex', gap: '0.875rem', marginTop: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-primary">
            <Home size={16} />
            <span>Back to Home</span>
          </Link>

          <Link href="/projects" className="btn btn-secondary">
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Globe, Award, Sparkles, Terminal, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  aboutHtml: string;
}

export default function AboutSection({ aboutHtml }: AboutSectionProps) {
  return (
    <section id="about" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
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
            About Me
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            Who I Am & What I Do
          </h2>
        </div>

        {/* Content Layout */}
        <div className="about-grid">
          {/* Left Column: Narrative */}
          <div>
            <div
              className="prose"
              style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'var(--text-secondary)',
                marginBottom: '2rem',
              }}
              dangerouslySetInnerHTML={{ __html: aboutHtml }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                alignItems: 'center',
                marginTop: '1.5rem',
              }}
            >
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20read%20your%20portfolio%20and%20would%20love%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Highlights & Key Facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Fact Card 1: Location & Availability */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
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
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                    Location
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                    Nairobi <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>(UTC+3)</span>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                I am located in Nairobi and work with remote teams and clients worldwide.
              </p>
            </div>

            {/* Fact Card 2: Dual Discipline */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-2-glow)',
                    color: 'var(--accent-2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Terminal size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                    Technical Foundations
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                    Data Analytics + Machine Learning
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                I started with SQL and Power BI dashboards, and now build full machine learning models and mobile apps.
              </p>
            </div>

            {/* Fact Card 3: NeuralNest */}
            <div className="glass-card" style={{ padding: '1.5rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
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
                  <Award size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                    Teaching
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
                    NeuralNest
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>
                A welcoming home for learners exploring AI and math, plus coding guides across social platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

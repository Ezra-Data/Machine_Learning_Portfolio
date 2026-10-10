import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import type { CourseData } from '@/types';

interface CourseTeaserSectionProps {
  course: CourseData;
}

export default function CourseTeaserSection({ course }: CourseTeaserSectionProps) {
  return (
    <section id="course" className="section" style={{ background: 'var(--bg-alt)', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-10%',
          transform: 'translateY(-50%)',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="course-grid">
          {/* Left Column: Brand & Overview */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.35rem 0.875rem',
                borderRadius: '9999px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                marginBottom: '1rem',
              }}
            >
              <div style={{ position: 'relative', width: '46px', height: '46px', minWidth: '46px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B1020', border: '2px solid var(--accent)', boxShadow: '0 0 10px var(--accent-glow)' }}>
                <Image
                  src="/images/brand/neuralnest-logo.png"
                  alt="NeuralNest logo"
                  width={38}
                  height={38}
                  style={{ objectFit: 'contain', borderRadius: '50%' }}
                />
              </div>
              <span style={{ fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                {course.brandName}
              </span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '1rem',
                lineHeight: 1.15,
              }}
            >
              {course.subtitle}
            </h2>

            <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Learn machine learning by building real projects. We skip boring theory and focus on writing code, training models, and building working apps.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              {course.whatStudentsBuild.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text)' }}>
                  <CheckCircle size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link href="/course" className="btn btn-primary">
                View 10 Module Syllabus
                <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27m%20interested%20in%20the%20NeuralNest%20ML%20course."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <MessageCircle size={16} />
                Ask About Next Cohort
              </a>
            </div>
          </div>

          {/* Right Column: Visual Box with Module Snapshot */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '460px',
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid var(--border)',
                background: 'linear-gradient(135deg, var(--card-bg), var(--surface))',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--accent-glow)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>
                      10 Week Syllabus
                    </div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--muted)' }}>
                      {course.format}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    padding: '0.25rem 0.625rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    background: 'rgba(34, 197, 94, 0.15)',
                    color: '#22C55E',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                  }}
                >
                  Cohort Open
                </span>
              </div>

              {/* Sample Modules Preview */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', marginBottom: '1.5rem' }}>
                {course.syllabus.slice(0, 5).map((module, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontFamily: 'var(--font-mono, monospace)',
                          color: 'var(--accent)',
                          fontWeight: 700,
                        }}
                      >
                        0{idx + 1}
                      </span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)' }}>
                        {module.title}
                      </span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                      {module.topics.length} topics
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ textAlign: 'center' }}>
                <Link
                  href="/course"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                  }}
                >
                  <span>See full 10 module syllabus and details</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

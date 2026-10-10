import type { Metadata } from 'next';
import Image from 'next/image';
import { getCourseData } from '@/lib/content';
import CourseView from '@/components/course/CourseView';

export const metadata: Metadata = {
  title: 'NeuralNest ML Course by Ezra Ndinya Ogechi',
  description:
    'A welcoming home for learners exploring neural networks, AI, and machine learning. A 10 module project driven curriculum taught by Ezra Ndinya Ogechi.',
  openGraph: {
    title: 'NeuralNest ML Course by Ezra Ndinya Ogechi',
    description:
      'A welcoming home for learners exploring neural networks, AI, and machine learning. 10 comprehensive modules with capstone projects.',
    images: ['/images/brand/neuralnest-logo.png'],
  },
};

export default function CoursePage() {
  const course = getCourseData();

  return (
    <div className="section" style={{ paddingTop: '2.5rem' }}>
      <div className="container">
        {/* Page Hero Header */}
        <div style={{ maxWidth: '960px', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.875rem',
              padding: '0.5rem 1.25rem',
              borderRadius: '9999px',
              background: 'var(--card-bg)',
              border: '1px solid var(--border)',
              marginBottom: '1.25rem',
            }}
          >
            <div style={{ position: 'relative', width: '54px', height: '54px', minWidth: '54px', borderRadius: '50%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0B1020', border: '2px solid var(--accent)', boxShadow: '0 0 12px var(--accent-glow)' }}>
              <Image
                src="/images/brand/neuralnest-logo.png"
                alt="NeuralNest logo"
                width={46}
                height={46}
                style={{ objectFit: 'contain', borderRadius: '50%' }}
              />
            </div>
            <span style={{ fontSize: '0.875rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>
              {course.brandName}
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            {course.title}
          </h1>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {course.subtitle}. A practical path from Python basics to machine learning workflows and models.
          </p>
        </div>

        {/* Course View (Accordion + Enquiry Form) */}
        <CourseView course={course} />
      </div>
    </div>
  );
}

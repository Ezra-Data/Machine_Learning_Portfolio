'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  BookOpen,
  CheckCircle2,
  Clock,
  Calendar,
  Send,
  MessageCircle,
  Sparkles,
  User,
  GraduationCap,
} from 'lucide-react';
import type { CourseData } from '@/types';

interface CourseViewProps {
  course: CourseData;
}

export default function CourseView({ course }: CourseViewProps) {
  const [openModule, setOpenModule] = useState<number | null>(0); // First module open by default

  // Enquiry form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    experience: 'Beginner (knows basic Python)',
    message: '',
    botField: '', // honeypot
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleModule = (idx: number) => {
    setOpenModule(openModule === idx ? null : idx);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.botField) return; // bot detected

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Direct Formspree submission (works reliably across static exports, Render, Vercel, and local)
      const res = await fetch('https://formspree.io/f/xkjobprb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `NeuralNest Course Enrollment Inquiry from ${formData.name || 'Student'}`,
          whatsapp: formData.whatsapp,
          experience: formData.experience,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to submit enquiry via Formspree');
      }

      // Also mirror to local API if running in dynamic mode
      fetch('/api/course-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        experience: 'Beginner (knows basic Python)',
        message: '',
        botField: '',
      });
    } catch {
      // Fallback directly to WhatsApp with prefilled message
      const text = encodeURIComponent(
        `Hi Ezra, I'm interested in the NeuralNest ML Course.\nName: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\nLevel: ${formData.experience}\nMessage: ${formData.message}`
      );
      window.open(`https://wa.me/254738933046?text=${text}`, '_blank');
      setStatus('success');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {/* Overview Cards (Who is it for + Prerequisites + What You Build) */}
      <div className="course-overview-grid">
        {/* Who is it for */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
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
              <User size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
              Who This Is For
            </h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {course.whoIsItFor.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Prerequisites */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'var(--accent-2-glow)',
                color: 'var(--accent-2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GraduationCap size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
              Prerequisites
            </h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {course.prerequisites.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-2)', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects You'll Build */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '12px',
                background: 'rgba(245, 158, 11, 0.15)',
                color: '#F59E0B',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Sparkles size={20} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
              What You Build
            </h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: 0, listStyle: 'none', margin: 0 }}>
            {course.whatStudentsBuild.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={18} style={{ color: '#F59E0B', flexShrink: 0, marginTop: '2px' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tuition & Learning Guidance (Communicated Directly Inbox) */}
      <div
        className="glass-card"
        style={{
          padding: '2.25rem',
          borderRadius: '24px',
          border: '1px solid var(--accent-glow)',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.05), var(--surface))',
        }}
      >
        <div style={{ maxWidth: '820px' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: 'var(--accent)',
              letterSpacing: '0.08em',
              marginBottom: '0.35rem',
            }}
          >
            Fees & Personalized Guidance
          </div>
          <h3
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.65rem',
              fontWeight: 800,
              margin: '0 0 0.5rem 0',
              color: 'var(--text)',
            }}
          >
            Tuition & Enrollment
          </h3>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.85rem',
              borderRadius: '9999px',
              background: 'var(--accent-glow)',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              marginBottom: '1rem',
            }}
          >
            Cost: Hidden & Custom-Quoted (Discussed After Direct Contact)
          </div>
          <p
            style={{
              fontSize: '1.025rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              margin: '0 0 1.5rem 0',
            }}
          >
            Lesson fees and learning schedules are tailored to each student and communicated directly via inbox after discussing your background, current skills, and learning goals. The cost is kept confidential until we connect, so after communicating through WhatsApp or email we can discuss and agree on a personalized fee structure that fits you.
          </p>

          {/* Key Points Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.35rem' }}>
                Tailored 1 on 1 Discussions
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                We discuss your roadmap and agreed fees in chat after communication before you start any sessions.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.35rem' }}>
                Flexible Schedule Options
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Sessions are scheduled to fit your routine, whether you are a university student or working professional.
              </p>
            </div>

            <div
              style={{
                padding: '1.25rem',
                borderRadius: '14px',
                background: 'rgba(34, 197, 94, 0.08)',
                border: '1px solid rgba(34, 197, 94, 0.25)',
              }}
            >
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#22C55E', marginBottom: '0.35rem' }}>
                100% Free Math Workflow
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                Basic Math for Machine Learning is freely available directly on this website with step by step text workflows.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20would%20like%20to%20discuss%20the%20ML%20course%20fees%20and%20learning%20options."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ background: '#25D366', color: '#000', border: 'none', fontWeight: 700 }}
            >
              <MessageCircle size={18} />
              <span>Chat Inbox on WhatsApp</span>
            </a>

            <a
              href="#enquiry-form"
              className="btn btn-secondary"
            >
              <span>Submit Interest Form Below</span>
            </a>
          </div>
        </div>
      </div>

      {/* 10 Module Syllabus Accordion */}
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem' }}>
            Curriculum
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>
            Machine Learning Workflow Curriculum
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)' }}>
            Step by step guidance covering Python, math concepts, and the 10 step project workflow with real code.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {course.syllabus.map((mod, idx) => {
            const isOpen = openModule === idx;
            const modNum = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid var(--accent)' : '1px solid var(--border)',
                  transition: 'border-color 200ms ease',
                }}
              >
                <button
                  onClick={() => toggleModule(idx)}
                  style={{
                    width: '100%',
                    padding: '1.25rem 1.5rem',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                  aria-expanded={isOpen}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        color: isOpen ? 'var(--accent)' : 'var(--muted)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '6px',
                        background: 'var(--surface)',
                      }}
                    >
                      {modNum}
                    </span>
                    <span style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text)' }}>
                      {mod.title}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                      {mod.topics.length} topics
                    </span>
                    {isOpen ? <ChevronUp size={20} style={{ color: 'var(--accent)' }} /> : <ChevronDown size={20} style={{ color: 'var(--muted)' }} />}
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem 1.5rem',
                      borderTop: '1px solid var(--border)',
                      paddingTop: '1rem',
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '0.75rem',
                      }}
                    >
                      {mod.topics.map((topic, topicIdx) => (
                        <div
                          key={topicIdx}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '8px',
                            background: 'var(--surface)',
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Instructor & Format Bar */}
      <div className="course-instructor-grid">
        {/* Instructor Card with Crisp Animated Rounded Portrait */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div
              className="portrait-glow-container"
              style={{ width: '84px', height: '84px', flexShrink: 0 }}
            >
              <div className="portrait-glow-halo" style={{ inset: '-6px' }} />
              <div className="portrait-glow-border" style={{ inset: '-2px' }} />
              <div
                className="portrait-glow-inner"
                style={{ width: '100%', height: '100%' }}
              >
                <Image
                  src="/images/Ezra.png"
                  alt={course.instructor.name}
                  fill
                  priority
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center 15%' }}
                />
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', textTransform: 'uppercase' }}>
                Course Instructor
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                {course.instructor.name}
              </h3>
            </div>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
            {course.instructor.bio}
          </p>
        </div>

        {/* Format & Details Card */}
        <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '1.25rem', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Clock size={20} style={{ color: 'var(--accent)' }} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>DURATION & FORMAT</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>{course.duration}, {course.format}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Calendar size={20} style={{ color: 'var(--accent-2)' }} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>COHORT SCHEDULE</div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>{course.schedule}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MessageCircle size={20} style={{ color: '#25D366' }} />
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>DIRECT WHATSAPP INQUIRY</div>
              <a
                href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20have%20a%20question%20about%20the%20NeuralNest%20ML%20course."
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}
              >
                Chat directly with Ezra →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div
        id="enquiry-form"
        className="glass-card"
        style={{
          padding: '2.5rem',
          borderRadius: '24px',
          maxWidth: '720px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem' }}>
            Join the Next Cohort
          </div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>
            Register Your Interest
          </h2>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
            Leave your contact details and Ezra will follow up with cohort dates, syllabus materials, and enrollment options.
          </p>
        </div>

        {status === 'success' ? (
          <div
            style={{
              padding: '2rem',
              borderRadius: '16px',
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              textAlign: 'center',
            }}
          >
            <CheckCircle2 size={44} style={{ color: '#22C55E', margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
              Enquiry Received!
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Thank you for your interest in the NeuralNest ML Course. Ezra will reach out to you via WhatsApp or email shortly.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn btn-secondary btn-sm"
              style={{ margin: '0 auto' }}
            >
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Honeypot field */}
            <input
              type="text"
              name="botField"
              value={formData.botField}
              onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. John Doe"
                className="input-field"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="input-field"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+254 700 000000"
                  className="input-field"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                Current Experience Level
              </label>
              <select
                className="input-field"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                style={{ background: 'var(--surface)', color: 'var(--text)' }}
              >
                <option value="Beginner (knows basic Python)">Beginner (knows basic Python)</option>
                <option value="Data Analyst (SQL, Excel, BI experience)">Data Analyst (SQL, Excel, BI experience)</option>
                <option value="Software Developer transitioning to ML">Software Developer transitioning to ML</option>
                <option value="Student / Career Switcher">Student / Career Switcher</option>
                <option value="Requesting dedicated Math for ML tutoring">Requesting dedicated Math for ML tutoring (Building models from scratch)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', marginBottom: '0.375rem' }}>
                Questions or Learning Goals (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="What project or career outcome do you want to achieve?"
                className="input-field"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ resize: 'vertical' }}
              />
            </div>

            {status === 'error' && (
              <div style={{ color: '#EF4444', fontSize: '0.875rem' }}>
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn btn-primary"
              style={{ justifyContent: 'center', marginTop: '0.5rem', width: '100%' }}
            >
              {status === 'submitting' ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send size={16} />
                  <span>Submit Course Enquiry</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>

    </div>
  );
}

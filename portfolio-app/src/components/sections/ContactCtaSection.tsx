'use client';

import Link from 'next/link';
import { MessageCircle, Mail, ArrowRight, Sparkles, Send } from 'lucide-react';

export default function ContactCtaSection() {
  return (
    <section id="contact-cta" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            borderRadius: '28px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            background: 'linear-gradient(135deg, var(--card-bg) 0%, var(--surface) 100%)',
            border: '1px solid var(--accent)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.25)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Ambient Glow */}
          <div
            style={{
              position: 'absolute',
              top: '-80px',
              right: '-80px',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              filter: 'blur(80px)',
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border)',
                  color: 'var(--accent)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '1rem',
                }}
              >
                <Sparkles size={13} />
                <span>Let&apos;s Build Together</span>
              </div>

              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                  letterSpacing: '-0.02em',
                }}
              >
                Have a Project, App Idea, or Role in Mind?
              </h2>

              <p
                style={{
                  fontSize: '1.0625rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  maxWidth: '540px',
                  margin: 0,
                }}
              >
                Whether you need a full machine learning web application, a native Android model integration, or practical guidance, let&apos;s talk.
              </p>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              <a
                href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '1rem 1.75rem',
                  fontSize: '1rem',
                  fontWeight: 700,
                  justifyContent: 'center',
                  background: '#25D366',
                  color: '#000',
                  boxShadow: '0 8px 24px rgba(37, 211, 102, 0.25)',
                }}
              >
                <MessageCircle size={20} />
                <span>Chat Instantly on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="btn btn-secondary"
                style={{
                  padding: '0.875rem 1.75rem',
                  fontSize: '0.95rem',
                  justifyContent: 'center',
                }}
              >
                <Send size={18} />
                <span>Send a Detailed Message</span>
                <ArrowRight size={16} />
              </Link>

              <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--muted)', marginTop: '0.25rem' }}>
                Replies typically within 24 hours (UTC+3)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

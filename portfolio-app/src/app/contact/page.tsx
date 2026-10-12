import { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  MessageCircle,
  Clock,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { Github, Linkedin, Twitter, TikTok, Reddit } from '@/components/ui/Icons';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Ezra Ndinya Ogechi | Work with Me',
  description:
    'Get in touch with Ezra Ndinya Ogechi for full time Data Scientist & ML Engineer opportunities, native ML apps, and 1 on 1 mentorship.',
};

// Social channels in verified PRD order: GitHub, LinkedIn, X, TikTok, Reddit, WhatsApp
const socials = [
  { label: 'GitHub', href: 'https://github.com/Ezra-Data', icon: Github, handle: '@Ezra-Data' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezra-ogechi-1a615534a/', icon: Linkedin, handle: 'Ezra Ogechi' },
  { label: 'X (Twitter)', href: 'https://x.com/OgechiEzra', icon: Twitter, handle: '@OgechiEzra' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@codetointelligence4', icon: TikTok, handle: '@codetointelligence4' },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Ogechi_Ezra7054/', icon: Reddit, handle: 'u/Ogechi_Ezra7054' },
  { label: 'WhatsApp', href: 'https://wa.me/254738933046', icon: MessageCircle, handle: '+254 738 933 046' },
];

export default function ContactPage() {
  return (
    <div className="section" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
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
            Get In Touch
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.5rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            Let&apos;s Work Together
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Send me a message if you want to hire me, collaborate on a project, or learn machine learning.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="contact-grid">
          {/* Left Column: Form */}
          <div>
            <Suspense fallback={<div style={{ padding: '2rem', color: 'var(--muted)' }}>Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

          {/* Right Column: Instant WhatsApp + Fast Response + Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* WhatsApp Priority Card */}
            <div
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '24px',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08), var(--surface))',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: '#25D36620',
                    color: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#25D366', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Fastest Response
                  </div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                    WhatsApp Direct Chat
                  </h3>
                </div>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                For quick questions or project discussions, send me a message on WhatsApp for the fastest reply.
              </p>
              <a
                href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27d%20like%20to%20discuss%20working%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  background: '#25D366',
                  color: '#000',
                  fontWeight: 700,
                  border: 'none',
                  justifyContent: 'center',
                  width: '100%',
                }}
              >
                <MessageCircle size={18} />
                <span>Open WhatsApp (+254 738 933 046)</span>
              </a>
            </div>

            {/* Commitments & Meta Card */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MessageCircle size={20} style={{ color: '#25D366', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>WHATSAPP</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>+254 738 933 046</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={20} style={{ color: 'var(--accent-2)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>LOCATION & TIMEZONE</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>Nairobi (EAT / UTC+3)</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock size={20} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>RESPONSE TIME</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>Within 24 hours</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShieldCheck size={20} style={{ color: '#22C55E', flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>PRIVACY</div>
                    <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--text)' }}>Your message and details stay private</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Channels List */}
            <div className="glass-card" style={{ padding: '1.75rem', borderRadius: '20px' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '1rem' }}>
                Verified Social Channels
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-item"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                        <Icon size={16} style={{ color: 'var(--accent)' }} />
                        <span style={{ fontWeight: 600 }}>{social.label}</span>
                      </div>
                      <span style={{ color: 'var(--muted)', fontSize: '0.8125rem' }}>{social.handle}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

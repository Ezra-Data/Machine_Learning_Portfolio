'use client';

import Link from 'next/link';
import { Cpu, Smartphone, GraduationCap, ArrowRight, ExternalLink, Check, BarChart3, Globe } from 'lucide-react';

const offers = [
  {
    id: 'native',
    title: 'Native ML Apps',
    subtitle: 'Android & Edge Intelligence',
    icon: Smartphone,
    color: 'var(--accent-2)',
    bgGlow: 'var(--accent-2-glow)',
    description:
      'Native Android applications with on device or API backed machine learning, engineered for speed, offline reliability, and Google Play Store publication.',
    bullets: [
      'On device inference with ultra low latency',
      'Offline prediction capabilities without constant server connectivity',
      'Clean, responsive mobile UI tailored for Android devices',
      'Preparation, testing, and compliance for Google Play Store release',
    ],
    ctaText: 'Build a Native ML App',
    ctaHref: '/contact?service=native',
    whatsappHref: 'https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27m%20interested%20in%20a%20native%20ML%20app.',
  },
  {
    id: 'web',
    title: 'ML Web Apps',
    subtitle: 'Full Stack Model Applications',
    icon: Globe,
    color: 'var(--accent)',
    bgGlow: 'var(--accent-glow)',
    description:
      'Custom web applications that put predictive machine learning models directly in front of real users, customers, and business decision makers.',
    bullets: [
      'Interactive frontends connected to machine learning backends',
      'Fast REST APIs for inference using Python and modern frameworks',
      'Automated data preprocessing and real time prediction pipelines',
      'Hosted deployments with continuous health monitoring',
    ],
    ctaText: 'Request an ML Web App',
    ctaHref: '/contact?service=web',
    whatsappHref: 'https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27m%20interested%20in%20a%20custom%20ML%20web%20app.',
  },
  {
    id: 'course',
    title: 'Learn Machine Learning',
    subtitle: 'NeuralNest ML Course',
    icon: GraduationCap,
    color: '#EC4899',
    bgGlow: 'rgba(236, 72, 153, 0.12)',
    description:
      'A structured, hands on machine learning course taking you from data preparation and exploratory analysis to training, tuning, and deploying production models.',
    bullets: [
      'Core Python, Pandas, and NumPy workflow mastery',
      'Regression, classification, clustering, and NLP models',
      'Model evaluation, tuning, and avoiding overfitting',
      'Deploying models as live web and Android apps',
    ],
    ctaText: 'Explore Course Details',
    ctaHref: '/course',
    whatsappHref: 'https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27m%20interested%20in%20the%20NeuralNest%20ML%20course.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem' }}>
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
            What I Offer
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1rem',
            }}
          >
            Services & Solutions
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Three core offerings designed to help teams and students turn data and ideas into shipped, production-ready machine learning intelligence.
          </p>
        </div>

        {/* 3 Offer Cards Grid */}
        <div className="services-grid" style={{ marginBottom: '2.5rem' }}>
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div
                key={offer.id}
                className="glass-card"
                style={{
                  padding: '2rem',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: offer.bgGlow,
                      color: offer.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <div
                    style={{
                      fontSize: '0.8125rem',
                      fontWeight: 600,
                      color: offer.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {offer.subtitle}
                  </div>

                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      marginBottom: '1rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {offer.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    {offer.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                    {offer.bullets.map((bullet, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        <Check size={16} style={{ color: offer.color, flexShrink: 0, marginTop: '2px' }} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom actions */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border)',
                  }}
                >
                  <Link href={offer.ctaHref} className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                    {offer.ctaText}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={offer.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-enquire-link"
                    style={{ textAlign: 'center', fontSize: '0.8125rem' }}
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional Fourth Line: Smaller Strip for Data Analysis & Dashboards */}
        <div
          className="glass-card"
          style={{
            padding: '1.75rem 2rem',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            background: 'linear-gradient(135deg, var(--card-bg), var(--surface))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '14px',
                background: 'rgba(14, 165, 233, 0.15)',
                color: '#0EA5E9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <BarChart3 size={24} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: '#0EA5E9',
                    letterSpacing: '0.08em',
                  }}
                >
                  Additional Capability
                </span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                Data Analysis & Executive Dashboards (Excel, Power BI, SQL)
              </h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.25rem 0 0' }}>
                Need enterprise reporting, complex SQL data cleaning, or custom Power BI KPIs? Also visit{' '}
                <strong style={{ color: 'var(--text)' }}>Ezra The Analyst</strong>.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <Link href="/contact?service=analytics" className="btn btn-secondary btn-sm">
              <span>Request Dashboard</span>
            </Link>
            <a
              href="https://ezra-wl21.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-sm"
            >
              <span>Visit Analytics Site</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';
import type { SiteConfig } from '@/types';

interface HeroSectionProps {
  config: SiteConfig;
}

const techBadges = [
  'Python',
  'PyTorch',
  'Scikit Learn',
  'TensorFlow',
  'SQL',
  'Power BI',
  'FastAPI',
  'Hugging Face',
  'Pandas',
  'NumPy',
];

// Timing configuration (independent per phrase or fallback to defaults)
interface RoleTimingConfig {
  typingSpeed?: number;   // ms per character typed
  pauseDuration?: number; // ms to pause while phrase is fully displayed
}

const DEFAULT_TYPING_SPEED = 65; // ms per character
const DEFAULT_PAUSE_DURATION = 2200; // ms to pause after typing
const INITIAL_PAUSE_DURATION = 2500; // ms to pause initial phrase on page load

// Configurable independently per phrase if different speeds or pauses are needed
const roleTimingOverrides: Record<string, RoleTimingConfig> = {
  // 'Data Scientist': { typingSpeed: 60, pauseDuration: 2400 },
  // 'ML Engineer': { typingSpeed: 70, pauseDuration: 2200 },
};

export default function HeroSection({ config }: HeroSectionProps) {
  const roles = config.heroRoles || [
    'Data Scientist',
    'ML Engineer',
    'Predictive Modeling Specialist',
    'Lead Instructor @ NeuralNest',
  ];

  // The first phrase is fully visible instantly when page loads (no blank start)
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(roles[0] || '');
  const [isTyping, setIsTyping] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (!roles || roles.length <= 1) return;

    // Respect reduced-motion accessibility preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const currentPhrase = roles[roleIndex] || '';
    const speed =
      roleTimingOverrides[currentPhrase]?.typingSpeed ?? DEFAULT_TYPING_SPEED;
    const pause = isInitialLoad
      ? INITIAL_PAUSE_DURATION
      : roleTimingOverrides[currentPhrase]?.pauseDuration ?? DEFAULT_PAUSE_DURATION;

    let timeoutId: NodeJS.Timeout;

    if (prefersReducedMotion) {
      timeoutId = setTimeout(() => {
        setIsInitialLoad(false);
        const nextIndex = (roleIndex + 1) % roles.length;
        setRoleIndex(nextIndex);
        setDisplayedText(roles[nextIndex] || '');
      }, pause);
      return () => clearTimeout(timeoutId);
    }

    if (!isTyping) {
      // Pause phase: phrase stays fully visible, then disappears instantly
      timeoutId = setTimeout(() => {
        setIsInitialLoad(false);
        const nextIndex = (roleIndex + 1) % roles.length;
        setRoleIndex(nextIndex);
        setDisplayedText(''); // Instant disappearance without letter-by-letter deletion
        setIsTyping(true);    // Begin typing next phrase
      }, pause);
    } else {
      // Typing phase: type next phrase one character at a time
      if (displayedText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentPhrase.slice(0, displayedText.length + 1));
        }, speed);
      } else {
        // Complete! Switch to pause phase
        setIsTyping(false);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [roleIndex, displayedText, isTyping, isInitialLoad, roles]);

  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '3rem',
        paddingBottom: '5rem',
      }}
    >
      {/* Background ambient glows */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '550px',
          height: '550px',
          borderRadius: '50%',
          background: 'var(--glow-1)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '-5%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'var(--glow-2)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Intro & CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Availability Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                width: 'fit-content',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#22C55E',
                  boxShadow: '0 0 10px #22C55E',
                }}
              />
              <span style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                Available for full time roles & projects
              </span>
            </div>

            {/* Main Title & Rotating Role */}
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(2.5rem, 5vw, 4.25rem)',
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  marginBottom: '0.75rem',
                }}
              >
                Hi, I&apos;m <span className="gradient-text">{config.name}</span>
              </h1>

              <div
                style={{
                  height: '2.5rem',
                  minHeight: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                }}
                aria-live="polite"
                aria-label={`Role: ${displayedText}`}
              >
                <span>{displayedText}</span>
                <span
                  aria-hidden="true"
                  className="typing-cursor"
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1.15em',
                    marginLeft: '4px',
                    borderRadius: '1px',
                    backgroundColor: 'var(--accent)',
                    verticalAlign: 'middle',
                  }}
                />
              </div>
            </div>

            {/* Value Proposition Statement */}
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                maxWidth: '720px',
              }}
            >
              {config.heroStatement}
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.875rem',
                alignItems: 'center',
                paddingTop: '0.5rem',
              }}
            >
              <Link href="/projects" className="btn btn-primary">
                Explore My Work
                <ArrowRight size={18} />
              </Link>

              <Link href="/contact" className="btn btn-secondary">
                <MessageCircle size={18} />
                Work With Me
              </Link>

              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '12px',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  transition: 'color 150ms ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = 'var(--text)';
                }}
              >
                <span>Services & Apps</span>
              </Link>
            </div>

            {/* Key Metrics Mini Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
                marginTop: '0.5rem',
              }}
            >
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>
                  19<span style={{ color: 'var(--accent)' }}>+</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                  Published Projects
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>
                  12
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                  ML Models
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>
                  7
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
                  Analytics & Dashboards
                </div>
              </div>
            </div>

            {/* Stack Badges Row */}
            <div style={{ marginTop: '0.5rem' }}>
              <div
                style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--muted)',
                  marginBottom: '0.625rem',
                  fontWeight: 600,
                }}
              >
                Core Technologies
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {techBadges.map((badge) => (
                  <span
                    key={badge}
                    className="badge"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--border)',
                      fontSize: '0.8125rem',
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Rounded Portrait with Animated Continuous Lights */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '480px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Rounded Portrait with Continuous Rotating Light Halo */}
              <div
                className="portrait-glow-container"
                style={{
                  width: '420px',
                  height: '420px',
                  maxWidth: '85vw',
                  maxHeight: '85vw',
                }}
              >
                <div className="portrait-glow-halo" />
                <div className="portrait-glow-border" />
                <div
                  className="portrait-glow-inner"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                >
                  <Image
                    src="/images/Ezra.png"
                    alt="Ezra Ndinya Ogechi"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 768px) 85vw, 380px"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center 15%',
                    }}
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '-18px',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  zIndex: 2,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <Sparkles size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>
                    Machine Learning
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                    Models & Apps
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass-card"
                style={{
                  position: 'absolute',
                  bottom: '-16px',
                  left: '-16px',
                  padding: '0.75rem 1rem',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.625rem',
                  zIndex: 2,
                  boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'var(--accent-2-glow)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-2)',
                  }}
                >
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--text)' }}>
                    NeuralNest
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)' }}>
                    ML & Math Learning
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

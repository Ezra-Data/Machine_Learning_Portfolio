'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MessageCircle, Mail, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { Github, Linkedin, Twitter, TikTok, Reddit } from '@/components/ui/Icons';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';

const navLinks = [
  { label: 'Home', shortLabel: 'Home', href: '/' },
  { label: 'About', shortLabel: 'About', href: '/about' },
  { label: 'Services', shortLabel: 'Services', href: '/services' },
  { label: 'Projects', shortLabel: 'Projects', href: '/projects' },
  { label: 'NeuralNest ML Course', shortLabel: 'NeuralNest ML Course', href: '/course', isCourse: true },
  { label: 'Learn Math', shortLabel: 'Learn', href: '/learn' },
  { label: 'Certifications', shortLabel: 'Certifications', href: '/certifications' },
  { label: 'Contact', shortLabel: 'Contact', href: '/contact' },
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/Ezra-Data', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezra-ogechi-1a615534a/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/OgechiEzra', icon: Twitter },
  { label: 'TikTok', href: 'https://www.tiktok.com/@codetointelligence4', icon: TikTok },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Ogechi_Ezra7054/', icon: Reddit },
  { label: 'WhatsApp', href: 'https://wa.me/254738933046', icon: MessageCircle },
];

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  return (
    <>
      {/* Top Navbar with Clean Right MENU Toggle */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 900,
          transition: 'all 250ms ease',
          background: scrolled ? 'var(--surface)' : 'rgba(10, 15, 29, 0.92)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px',
          }}
        >
          {/* Left Side: Brand & Title */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
              color: 'var(--text)',
            }}
          >
            <div style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden' }}>
              <Image
                src="/images/brand/logo-mark.png"
                alt="Ezra Ndinya Ogechi"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  display: 'block',
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                Ezra Ndinya Ogechi
              </span>
              <span style={{ fontSize: '0.72rem', color: 'var(--muted)', display: 'block' }}>
                Data Scientist & ML Engineer
              </span>
            </div>
          </Link>

          {/* Right Side: Full Desktop Navigation Bar (visible when screen size is big) */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`desktop-nav-link ${link.isCourse ? 'course-pill' : ''}`}
              >
                {link.shortLabel}
              </Link>
            ))}

            <div style={{ marginLeft: '0.25rem', display: 'flex', alignItems: 'center' }}>
              <ThemeSwitcher />
            </div>
          </nav>

          {/* Right Side: MENU Button (visible when screen size is small) */}
          <div className="mobile-menu-wrapper">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="mobile-menu-btn"
              aria-label={sidebarOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {sidebarOpen ? <X size={20} strokeWidth={2.4} /> : <Menu size={20} strokeWidth={2.4} />}
              <span>{sidebarOpen ? 'CLOSE' : 'MENU'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Left Collapsible Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Left Collapsible Sidebar Drawer */}
      <aside
        className={`left-sidebar ${sidebarOpen ? 'open' : 'closed'}`}
        aria-label="Side navigation"
      >
        <div>
          {/* Sidebar Top: Header & Close Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ position: 'relative', width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden' }}>
                <Image
                  src="/images/Ezra.png"
                  alt="Ezra Ndinya Ogechi"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text)' }}>
                  Ezra Ndinya Ogechi
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={12} />
                  <span>Nyeri (UTC+3)</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '0.4rem',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setSidebarOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.7rem 0.875rem',
                  borderRadius: '10px',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-glow)';
                  e.currentTarget.style.color = 'var(--accent)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text)';
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={14} style={{ opacity: 0.5 }} />
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar Bottom: Contact & Socials */}
        <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--border)', marginTop: '1.5rem' }}>

          {/* WhatsApp Direct */}
          <a
            href="https://wa.me/254738933046"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{
              width: '100%',
              justifyContent: 'center',
              marginBottom: '1rem',
              background: '#25D366',
              color: '#000',
              fontWeight: 700,
            }}
          >
            <MessageCircle size={16} />
            <span>Chat on WhatsApp</span>
          </a>

          {/* Theme switcher */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', padding: '0.25rem 0.5rem', borderRadius: '10px', background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text)', fontWeight: 600 }}>Theme Mode</span>
            <ThemeSwitcher />
          </div>

          {/* Social Icons Strip */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center' }}>
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'all 150ms ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                  }}
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

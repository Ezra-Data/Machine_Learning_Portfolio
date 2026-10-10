import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ExternalLink, Mail } from 'lucide-react';
import { Github, Linkedin, Twitter, TikTok, Reddit } from '@/components/ui/Icons';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ezra-Data', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ezra-ogechi-1a615534a/', icon: Linkedin },
  { label: 'X', href: 'https://x.com/OgechiEzra', icon: Twitter },
  { label: 'TikTok', href: 'https://www.tiktok.com/@codetointelligence4', icon: TikTok },
  { label: 'Reddit', href: 'https://www.reddit.com/user/Ogechi_Ezra7054/', icon: Reddit },
  { label: 'WhatsApp', href: 'https://wa.me/254738933046', icon: MessageCircle },
];

const quickLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'ML Course', href: '/course' },
  { label: 'Free Math Lessons', href: '/learn' },
  { label: 'Contact', href: '/contact' },
  { label: 'Data Analytics Site', href: 'https://ezra-wl21.onrender.com/', external: true },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Image
                src="/images/brand/logo-mark.png"
                alt="Ezra Ndinya Ogechi logo"
                width={48}
                height={48}
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: 'var(--text)' }}>
                  Ezra Ndinya Ogechi
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Data Scientist & ML Engineer
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', maxWidth: '360px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Turning data into deployed machine learning systems and Android apps. Teaching math and neural networks through NeuralNest.
            </p>
          </div>

          {/* Desktop: Quick Links + Socials */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }} className="footer-grid-desktop">
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '1rem' }}>
                Quick Links
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {quickLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}
                  >
                    {link.label}
                    {link.external && <ExternalLink size={12} />}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted)', marginBottom: '1rem' }}>
                Connect
              </h4>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {socialLinks.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.label}
                      style={{
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        border: '1px solid var(--border)',
                        color: 'var(--text-secondary)',
                        transition: 'all 200ms ease',
                        textDecoration: 'none',
                      }}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Privacy note & copyright */}
        <hr className="divider" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--muted)' }}>
            © 2026 Ezra Ndinya Ogechi. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
            This site collects no cookies. Contact form data is used only to respond to your enquiry.
          </p>
        </div>
      </div>

    </footer>
  );
}

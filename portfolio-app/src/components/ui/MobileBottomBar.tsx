'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MessageCircle, Send } from 'lucide-react';

export default function MobileBottomBar() {
  const pathname = usePathname();

  // Hidden on contact page
  if (pathname === '/contact') return null;

  return (
    <aside
      className="mobile-bottom-bar"
      aria-label="Quick contact"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 850,
        background: 'rgba(11, 16, 32, 0.94)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid var(--border)',
        padding: '0.625rem 1rem',
        display: 'none', // Controlled via media query in CSS (block on mobile)
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <a
        href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
        style={{
          flex: 1,
          justifyContent: 'center',
          background: '#25D366',
          color: '#000',
          fontWeight: 700,
          padding: '0.6rem 0.75rem',
        }}
      >
        <MessageCircle size={17} />
        <span>WhatsApp</span>
      </a>

      <Link
        href="/contact"
        className="btn btn-secondary btn-sm"
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: '0.6rem 0.75rem',
          fontSize: '0.85rem',
        }}
      >
        <Send size={15} />
        <span>Message</span>
      </Link>
    </aside>
  );
}

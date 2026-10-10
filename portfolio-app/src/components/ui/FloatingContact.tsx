'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Mail, Send } from 'lucide-react';
import Link from 'next/link';

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      ref={panelRef}
      style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 40,
      }}
    >
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: 'calc(100% + 0.75rem)',
            right: 0,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '1rem',
            width: '220px',
            boxShadow: 'var(--shadow-card)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 0.75rem',
              borderRadius: '10px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'background 150ms ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <Send size={18} style={{ color: 'var(--accent)' }} />
            Message
          </Link>
          <a
            href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%27d%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.625rem 0.75rem',
              borderRadius: '10px',
              color: 'var(--text)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              transition: 'background 150ms ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <MessageCircle size={18} style={{ color: '#25D366' }} />
            WhatsApp
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close contact options' : 'Open contact options'}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '16px',
          border: 'none',
          background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
          color: '#fff',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px var(--accent-glow)',
          transition: 'transform 200ms ease, box-shadow 200ms ease',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}

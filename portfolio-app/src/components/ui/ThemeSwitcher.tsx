'use client';

import { useState, useRef, useEffect } from 'react';
import { Palette } from 'lucide-react';
import { useTheme, themes } from '@/components/ThemeProvider';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={menuRef} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        className="btn-ghost"
        aria-label="Change theme"
        aria-expanded={open}
        aria-haspopup="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.5rem',
          borderRadius: '10px',
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          color: 'var(--text)',
          minWidth: '44px',
          minHeight: '44px',
          justifyContent: 'center',
        }}
      >
        <Palette size={20} />
      </button>

      {open && (
        <div
          role="menu"
          style={{
            position: 'absolute',
            right: 0,
            top: 'calc(100% + 0.5rem)',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '0.5rem',
            minWidth: '200px',
            boxShadow: 'var(--shadow-card)',
            zIndex: 100,
            backdropFilter: 'blur(16px)',
          }}
        >
          {themes.map(t => (
            <button
              key={t.name}
              role="menuitem"
              onClick={() => {
                setTheme(t.name);
                setOpen(false);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.625rem 0.75rem',
                border: 'none',
                background: theme === t.name ? 'var(--accent-glow)' : 'transparent',
                borderRadius: '10px',
                cursor: 'pointer',
                color: theme === t.name ? 'var(--accent)' : 'var(--text)',
                fontWeight: theme === t.name ? 600 : 400,
                fontSize: '0.875rem',
                fontFamily: 'Inter, sans-serif',
                transition: 'background 150ms ease',
                textAlign: 'left',
              }}
              onMouseEnter={e => {
                if (theme !== t.name) {
                  (e.currentTarget as HTMLElement).style.background = 'var(--accent-glow)';
                }
              }}
              onMouseLeave={e => {
                if (theme !== t.name) {
                  (e.currentTarget as HTMLElement).style.background = 'transparent';
                }
              }}
            >
              <span
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: t.swatch,
                  border: theme === t.name ? '2px solid var(--accent)' : '2px solid var(--border)',
                  flexShrink: 0,
                }}
              />
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

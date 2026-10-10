'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { ThemeName } from '@/types';

interface ThemeContextType {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'midnight-aurora',
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export const themes: { name: ThemeName; label: string; swatch: string }[] = [
  { name: 'midnight-aurora', label: 'Midnight Aurora', swatch: 'linear-gradient(135deg, #2DD4BF, #8B5CF6)' },
  { name: 'daylight', label: 'Daylight', swatch: 'linear-gradient(135deg, #4F46E5, #0EA5E9)' },
  { name: 'ember', label: 'Ember', swatch: 'linear-gradient(135deg, #F59E0B, #FB7185)' },
  { name: 'terminal', label: 'Terminal', swatch: 'linear-gradient(135deg, #22C55E, #16a34a)' },
];

function getSystemTheme(): ThemeName {
  if (typeof window === 'undefined') return 'midnight-aurora';
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? 'daylight'
    : 'midnight-aurora';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>('midnight-aurora');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('portfolio-theme') as ThemeName | null;
    const initial = stored || getSystemTheme();
    setThemeState(initial);
    document.documentElement.setAttribute('data-theme', initial);
    setMounted(true);
  }, []);

  const setTheme = (newTheme: ThemeName) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

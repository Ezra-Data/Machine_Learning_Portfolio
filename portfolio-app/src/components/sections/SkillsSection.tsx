import { Database, Brain, Rocket, GitBranch } from 'lucide-react';
import type { SkillGroup } from '@/types';

interface SkillsSectionProps {
  skillGroups: SkillGroup[];
}

const iconMap: Record<string, any> = {
  Database,
  Brain,
  Rocket,
  GitBranch,
};

const groupThemeColors: Record<string, { color: string; bg: string }> = {
  Data: { color: '#0EA5E9', bg: 'rgba(14, 165, 233, 0.12)' },
  'Machine Learning': { color: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.12)' },
  'Deployment & Apps': { color: '#2DD4BF', bg: 'rgba(45, 212, 191, 0.12)' },
  Other: { color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.12)' },
};

export default function SkillsSection({ skillGroups }: SkillsSectionProps) {
  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3.5rem' }}>
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
            Technical Stack
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
            Tools, Libraries & Frameworks
          </h2>
          <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            The tools and libraries I use daily to analyze data, train models, and build apps.
          </p>
        </div>

        {/* 4 Skill Group Cards */}
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const IconComponent = iconMap[group.icon] || Brain;
            const theme = groupThemeColors[group.name] || { color: 'var(--accent)', bg: 'var(--accent-glow)' };

            return (
              <div
                key={group.name}
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: theme.bg,
                      color: theme.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <IconComponent size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                      {group.name}
                    </h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                      {group.skills.length} core proficiencies
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip"
                      style={{
                        padding: '0.45rem 0.85rem',
                        fontSize: '0.8125rem',
                        fontWeight: 500,
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                        borderRadius: '10px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

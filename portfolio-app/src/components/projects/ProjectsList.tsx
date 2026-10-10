'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Search, Filter, Sparkles, Database, SlidersHorizontal, X, ExternalLink } from 'lucide-react';
import type { Project, ProjectTrack } from '@/types';
import ProjectCard from '@/components/ui/ProjectCard';
import { getProjectGithubUrl } from '@/lib/urls';

interface ProjectsListProps {
  initialProjects: Project[];
}

export default function ProjectsList({ initialProjects }: ProjectsListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read URL params
  const paramTrack = searchParams.get('track');
  const paramCat = searchParams.get('category');
  const paramSearch = searchParams.get('q');

  const [selectedTrack, setSelectedTrack] = useState<string>(paramTrack || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>(paramCat || 'all');
  const [searchQuery, setSearchQuery] = useState<string>(paramSearch || '');

  // Keep state in sync with URL
  useEffect(() => {
    if (paramTrack) setSelectedTrack(paramTrack);
    if (paramCat) setSelectedCategory(paramCat);
    if (paramSearch) setSearchQuery(paramSearch);
  }, [paramTrack, paramCat, paramSearch]);

  const updateFilters = (newTrack: string, newCat: string, newQuery: string) => {
    const params = new URLSearchParams();
    if (newTrack !== 'all') params.set('track', newTrack);
    if (newCat !== 'all') params.set('category', newCat);
    if (newQuery.trim()) params.set('q', newQuery.trim());

    const qs = params.toString();
    router.replace(`/projects${qs ? `?${qs}` : ''}`, { scroll: false });
  };

  const handleTrackChange = (track: string) => {
    setSelectedTrack(track);
    setSelectedCategory('all'); // reset category when track switches
    updateFilters(track, 'all', searchQuery);
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    updateFilters(selectedTrack, cat, searchQuery);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    updateFilters(selectedTrack, selectedCategory, q);
  };

  const clearAllFilters = () => {
    setSelectedTrack('all');
    setSelectedCategory('all');
    setSearchQuery('');
    router.replace('/projects', { scroll: false });
  };

  // Compute available categories based on selected track
  const availableCategories = useMemo(() => {
    let projs = initialProjects;
    if (selectedTrack !== 'all') {
      projs = projs.filter((p) => p.track === selectedTrack);
    }
    const cats = new Set(projs.map((p) => p.category));
    return Array.from(cats).sort();
  }, [initialProjects, selectedTrack]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return initialProjects.filter((project) => {
      // Track filter
      if (selectedTrack !== 'all' && project.track !== selectedTrack) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'all' && project.category !== selectedCategory) {
        return false;
      }
      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const inTitle = project.title.toLowerCase().includes(query);
        const inSummary = project.summary.toLowerCase().includes(query);
        const inTools = project.tools.some((t) => t.toLowerCase().includes(query));
        const inAlgos = project.algorithms.some((a) => a.toLowerCase().includes(query));
        const inCategory = project.category.toLowerCase().includes(query);
        if (!inTitle && !inSummary && !inTools && !inAlgos && !inCategory) {
          return false;
        }
      }
      return true;
    });
  }, [initialProjects, selectedTrack, selectedCategory, searchQuery]);

  return (
    <div>
      {/* Controls Container */}
      <div
        className="glass-card"
        style={{
          padding: '1.5rem',
          borderRadius: '20px',
          marginBottom: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}
      >
        {/* Top Bar: Track Buttons + Search Input */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Track Segmented Switch */}
          <div
            style={{
              display: 'inline-flex',
              padding: '0.25rem',
              background: 'var(--surface)',
              borderRadius: '14px',
              border: '1px solid var(--border)',
            }}
          >
            <button
              onClick={() => handleTrackChange('all')}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                border: 'none',
                background: selectedTrack === 'all' ? 'var(--accent)' : 'transparent',
                color: selectedTrack === 'all' ? '#000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              All Projects ({initialProjects.length})
            </button>

            <button
              onClick={() => handleTrackChange('data-science')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                border: 'none',
                background: selectedTrack === 'data-science' ? 'var(--accent)' : 'transparent',
                color: selectedTrack === 'data-science' ? '#000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              <Sparkles size={14} />
              Machine Learning (12)
            </button>

            <button
              onClick={() => handleTrackChange('data-analytics')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                border: 'none',
                background: selectedTrack === 'data-analytics' ? 'var(--accent)' : 'transparent',
                color: selectedTrack === 'data-analytics' ? '#000' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                transition: 'all 150ms ease',
              }}
            >
              <Database size={14} />
              Data Analytics ({initialProjects.filter(p => p.track === 'data-analytics').length})
            </button>
          </div>

          {/* Search Box */}
          <div style={{ position: 'relative', minWidth: '260px', flex: '1 1 260px', maxWidth: '420px' }}>
            <Search
              size={18}
              style={{
                position: 'absolute',
                left: '0.875rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--muted)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="Search by algorithm, tool, topic..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '2.5rem',
                paddingRight: searchQuery ? '2.5rem' : '1rem',
                fontSize: '0.875rem',
              }}
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  padding: '0.25rem',
                }}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Category Chips Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Category:
          </span>

          <button
            onClick={() => handleCategoryChange('all')}
            className={`chip ${selectedCategory === 'all' ? 'chip-active' : ''}`}
            style={{
              cursor: 'pointer',
              border: selectedCategory === 'all' ? '1px solid var(--accent)' : '1px solid var(--border)',
              background: selectedCategory === 'all' ? 'var(--accent-glow)' : 'var(--surface)',
              color: selectedCategory === 'all' ? 'var(--accent)' : 'var(--text-secondary)',
              fontWeight: 600,
            }}
          >
            All
          </button>

          {availableCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`chip ${isActive ? 'chip-active' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--accent)' : '1px solid var(--border)',
                  background: isActive ? 'var(--accent-glow)' : 'var(--surface)',
                  color: isActive ? 'var(--accent)' : 'var(--text-secondary)',
                  fontWeight: 600,
                }}
              >
                {cat}
              </button>
            );
          })}

          {(selectedCategory !== 'all' || selectedTrack !== 'all' || searchQuery) && (
            <button
              onClick={clearAllFilters}
              style={{
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                color: 'var(--muted)',
                fontSize: '0.8125rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <X size={14} />
              Reset filters
            </button>
          )}
        </div>
      </div>

      {/* Result Count Status */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1.5rem',
          fontSize: '0.875rem',
          color: 'var(--text-secondary)',
        }}
      >
        <span>
          Showing <strong style={{ color: 'var(--text)' }}>{filteredProjects.length}</strong> of {initialProjects.length} projects
        </span>
      </div>

      {/* If viewing all projects without search/category filter, render distinct separated sections */}
      {selectedTrack === 'all' && !searchQuery.trim() && selectedCategory === 'all' ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {/* Section 1: Machine Learning Projects */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'var(--accent-glow)',
                  color: 'var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Sparkles size={20} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                  Machine Learning Projects ({initialProjects.filter(p => p.track === 'data-science').length})
                </h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                  Classification, regression, NLP, and recommendation models with working code on GitHub.
                </p>
              </div>
            </div>

            <div className="projects-grid">
              {initialProjects
                .filter((p) => p.track === 'data-science')
                .map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    githubUrl={getProjectGithubUrl(project)}
                  />
                ))}
            </div>
          </div>

          {/* Section 2: Data Analytics Projects */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(14, 165, 233, 0.15)',
                    color: '#0EA5E9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Database size={20} />
                </div>
                <div>
                  <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                    Data Analytics & BI Projects ({initialProjects.filter(p => p.track === 'data-analytics').length})
                  </h2>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: '0.2rem 0 0' }}>
                    Interactive Power BI dashboards, SQL cleaning scripts, and exploratory data analysis.
                  </p>
                </div>
              </div>

              <a
                href="https://ezra-wl21.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Visit my Data Analytics site</span>
                <ExternalLink size={14} />
              </a>
            </div>

            <div className="projects-grid">
              {initialProjects
                .filter((p) => p.track === 'data-analytics')
                .map((project) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    githubUrl={getProjectGithubUrl(project)}
                  />
                ))}
            </div>

            {/* Note for more repos */}
            <div
              className="glass-card"
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem 1.75rem',
                borderRadius: '16px',
                border: '1px dashed var(--border)',
                background: 'var(--surface)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                Looking for more projects? Additional exploratory data analyses, Power BI dashboards, and SQL queries can be accessed via the <strong>Data Analytics Site (Ezra The Analyst)</strong>.
              </p>
              <a
                href="https://ezra-wl21.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <span>Visit Data Analytics Site</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              githubUrl={getProjectGithubUrl(project)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div
          className="glass-card"
          style={{
            padding: '4rem 2rem',
            borderRadius: '24px',
            textAlign: 'center',
            maxWidth: '520px',
            margin: '2rem auto',
          }}
        >
          <SlidersHorizontal size={40} style={{ color: 'var(--muted)', margin: '0 auto 1rem' }} />
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem' }}>
            No matching projects found
          </h3>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            Try broadening your search term or selecting a different category filter.
          </p>
          <button onClick={clearAllFilters} className="btn btn-secondary btn-sm" style={{ margin: '0 auto' }}>
            Clear all filters
          </button>
        </div>
      )}

    </div>
  );
}

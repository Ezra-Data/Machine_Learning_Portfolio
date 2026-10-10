import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  CheckCircle2,
  Trophy,
  Award,
  Users,
  Calendar,
  Lock,
} from 'lucide-react';
import { Github } from '@/components/ui/Icons';
import {
  getProjectBySlug,
  getProjectContent,
  getProjectSlugs,
  getAdjacentProjects,
  getProjectGithubUrl,
} from '@/lib/content';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found | Ezra Ndinya Ogechi',
    };
  }

  return {
    title: `${project.title} | Ezra Ndinya Ogechi`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Ezra Ndinya Ogechi`,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const [contentHtml, { prev, next }] = await Promise.all([
    getProjectContent(slug),
    Promise.resolve(getAdjacentProjects(slug, project.track)),
  ]);

  const isChana = project.slug === 'chana';
  const githubUrl = getProjectGithubUrl(project);
  const matchingService = project.track === 'data-science' ? 'web' : 'analytics';

  return (
    <article className="section" style={{ paddingTop: '7rem', paddingBottom: '5rem' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '2rem' }}>
          <Link
            href={`/projects?track=${project.track}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-secondary)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'color 150ms ease',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to {project.track === 'data-science' ? 'Machine Learning' : 'Data Analytics'} projects</span>
          </Link>
        </div>

        {/* Header Hero Area */}
        <header style={{ marginBottom: '2.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <span
              className="badge"
              style={{
                background: project.track === 'data-science' ? 'var(--accent-glow)' : 'rgba(14, 165, 233, 0.15)',
                color: project.track === 'data-science' ? 'var(--accent)' : '#0EA5E9',
                borderColor: project.track === 'data-science' ? 'var(--accent)' : '#0EA5E9',
                fontWeight: 600,
              }}
            >
              {project.track === 'data-science' ? 'Data Science & ML' : 'Data Analytics'}
            </span>

            <span
              className="badge"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--border)',
                fontWeight: 600,
              }}
            >
              {project.category}
            </span>

            {project.award && (
              <span
                className="badge"
                style={{
                  background: 'rgba(245, 158, 11, 0.15)',
                  color: '#F59E0B',
                  borderColor: 'rgba(245, 158, 11, 0.4)',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Trophy size={13} />
                <span>{project.award}</span>
              </span>
            )}
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.25rem, 4.5vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '1.25rem',
            }}
          >
            {project.title}
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
              marginBottom: '2rem',
            }}
          >
            {project.summary}
          </p>

          {/* Action buttons (GitHub, Live Demo, Request Code) */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={18} />
                <span>View on GitHub</span>
                <ExternalLink size={14} />
              </a>
            )}

            {isChana && (
              <Link
                href="/contact?service=web"
                className="btn btn-secondary"
              >
                <span>Request Deployed System</span>
              </Link>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <ExternalLink size={18} />
                <span>Live Interactive Demo</span>
              </a>
            )}

            <a
              href={`https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20saw%20your%20project%20"${encodeURIComponent(project.title)}"%20and%20want%20to%20discuss%20a%20similar%20solution.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
              style={{ border: '1px solid var(--border)' }}
            >
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </header>

        {/* Project Image Preview (for Analytics and Visual Projects) */}
        {project.image && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
              borderRadius: '24px',
              overflow: 'hidden',
              marginBottom: '3rem',
              border: '1px solid var(--border)',
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>
        )}

        {/* Chana Recognition Block (PRD Section 5.5c) */}
        {isChana && (
          <div
            className="glass-card"
            style={{
              padding: '2rem',
              borderRadius: '20px',
              marginBottom: '3rem',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), var(--card-bg))',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1.25rem' }}>
              <Trophy size={22} style={{ color: '#F59E0B' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                Hackathon Recognition & Placement
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Award Placement
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#F59E0B', marginTop: '0.2rem' }}>
                  First Runner-Up
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Event & Organiser
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginTop: '0.2rem' }}>
                  DeKUT Hackathon (Dedan Kimathi University of Technology)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Team
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginTop: '0.2rem' }}>
                  Team WAHENGA
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Ezra&apos;s Role
                </div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text)', marginTop: '0.2rem' }}>
                  Team Member & ML Developer
                </div>
              </div>
            </div>

            {project.proofUrl && (
              <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                <a
                  href={project.proofUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                >
                  <span>View Proof of Placement</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            )}
          </div>
        )}

        {/* Project Meta Information Card */}
        <div
          className="glass-card"
          style={{
            padding: '2rem',
            borderRadius: '20px',
            marginBottom: '3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Tools & Tech */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--muted)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
              <Layers size={16} />
              <span>Tools & Libraries</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {project.tools.map((tool) => (
                <span key={tool} className="chip" style={{ fontSize: '0.8125rem' }}>
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Algorithms */}
          {project.algorithms.length > 0 && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--muted)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <Cpu size={16} />
                <span>Algorithms & Methods</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {project.algorithms.map((algo) => (
                  <span
                    key={algo}
                    className="chip"
                    style={{
                      fontSize: '0.8125rem',
                      background: 'var(--accent-glow)',
                      color: 'var(--accent)',
                      borderColor: 'var(--accent)',
                    }}
                  >
                    {algo}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Key Result if available */}
          {project.result && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: 'var(--muted)', fontSize: '0.8125rem', fontWeight: 600, textTransform: 'uppercase' }}>
                <CheckCircle2 size={16} />
                <span>Primary Outcome</span>
              </div>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text)', margin: 0, fontWeight: 500 }}>
                {project.result}
              </p>
            </div>
          )}
        </div>

        {/* Project Detailed Description */}
        <section
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'var(--card-bg)',
            border: '1px solid var(--border)',
            marginBottom: '3.5rem',
          }}
        >
          <h2 style={{ fontSize: '1.375rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.25rem' }}>
            Implementation Details & Technical Overview
          </h2>
          <div
            className="prose"
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
            }}
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </section>

        {/* Case Study Call to Action (PRD Section 15.5) */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            textAlign: 'center',
            marginBottom: '3rem',
            background: 'linear-gradient(135deg, var(--card-bg), var(--surface))',
          }}
        >
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.75rem' }}>
            Need something like this? Talk to me
          </h3>
          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto 1.75rem' }}>
            I build production-ready machine learning models, native Android apps, and interactive analytics dashboards.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href={`/contact?service=${matchingService}`}
              className="btn btn-primary"
            >
              <span>Get a Quote / Contact Ezra</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href={`https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20saw%20your%20project%20"${encodeURIComponent(project.title)}"%20and%20want%20to%20discuss%20a%20similar%20solution.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Adjacent Navigation */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                maxWidth: '300px',
              }}
            >
              <ArrowLeft size={16} />
              <div>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Previous Project
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                textAlign: 'right',
                maxWidth: '300px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 600 }}>
                  Next Project
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {next.title}
                </div>
              </div>
              <ArrowRight size={16} />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </article>
  );
}

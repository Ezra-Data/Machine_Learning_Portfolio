import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getMathTopics, getAllMathLessons } from '@/lib/content';
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Cpu,
  Layers,
  GraduationCap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'NeuralNest: Free Math for Machine Learning | Ezra Ndinya Ogechi',
  description:
    'Free, plain language mathematics lessons for machine learning: Linear Algebra, Statistics, Probability, and Calculus with interactive visual graphs.',
};

export default function LearnOverviewPage() {
  const topics = getMathTopics();
  const allLessons = getAllMathLessons();
  const totalLessons = allLessons.length;
  const totalMinutes = topics.reduce((acc, t) => acc + t.totalMinutes, 0);
  const totalHours = (totalMinutes / 60).toFixed(1);

  return (
    <div className="container mx-auto py-12">
      {/* ── NeuralNest Header Branding ── */}
      <div className="mb-12 text-center">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1.25rem',
            padding: '0.75rem 1.75rem',
            borderRadius: '9999px',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-card)',
            marginBottom: '1.75rem',
          }}
        >
          {/* Prominent circular NeuralNest logo clearly visible */}
          <div
            style={{
              position: 'relative',
              width: '76px',
              height: '76px',
              minWidth: '76px',
              minHeight: '76px',
              borderRadius: '50%',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#0B1020',
              border: '2.5px solid var(--accent)',
              boxShadow: '0 0 16px var(--accent-glow)',
            }}
          >
            <Image
              src="/images/brand/neuralnest-logo.png"
              alt="NeuralNest logo"
              width={68}
              height={68}
              style={{ objectFit: 'contain', borderRadius: '50%' }}
            />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '0.02em', color: 'var(--text)' }}>
                NeuralNest
              </span>
              <span
                style={{
                  borderRadius: '9999px',
                  background: 'var(--accent-glow)',
                  padding: '0.2rem 0.625rem',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent)',
                  border: '1px solid rgba(45, 212, 191, 0.3)',
                }}
              >
                Learning Site
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', margin: '0.25rem 0 0 0', maxWidth: '420px', lineHeight: 1.4 }}>
              A welcoming home for learners exploring neural networks, AI, and machine learning
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text)] sm:text-5xl">
          Free Math for Machine Learning
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-[var(--text-secondary)] sm:text-lg">
          Master the foundational mathematics behind modern AI in plain English. No high brow academic jargon, no skipped steps, and completely free.
        </p>

        {/* ── Key stats strip ── */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-[var(--muted)]">
          <span className="inline-flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-[var(--accent)]" /> {topics.length} Core Topics
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[var(--accent-2)]" /> {totalLessons} Bite sized Lessons
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[var(--accent)]" /> ~{totalHours} Hours Total
          </span>
          <span className="inline-flex items-center gap-1.5 font-medium text-[var(--text)]">
            100% Free &bull; No Sign Up Required
          </span>
        </div>
      </div>

      {/* ── START HERE: Introduction to Math & The Importance of Vectors ── */}
      <div className="mb-12 rounded-3xl border-2 border-[var(--accent)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-6 sm:p-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="rounded-md bg-[var(--accent)]/15 px-2.5 py-1 font-mono text-xs font-bold text-[var(--accent)]">
                Start Here &bull; The Foundation
              </span>
              <span className="text-xs text-[var(--muted)]">Why Math Matters for AI</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--text)] sm:text-3xl">
              Introduction to Vectors: What They Are and Why They Matter
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Every machine learning system begins with <strong>Data</strong>. In computers, data is represented as <strong>vectors</strong>: an ordered list of numbers representing measurements, words in a sentence, image pixels, or financial metrics.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              When models make predictions, they perform <strong>dot products</strong> (measuring similarity), <strong>matrix multiplications</strong> (layer transformations), and <strong>vector updates</strong> (gradient descent). Understanding vectors turns machine learning from a confusing black box into clear geometry.
            </p>
          </div>

          <div className="flex flex-col gap-3 shrink-0">
            <Link
              href="/learn/math/00-introduction/01-big-picture"
              className="btn btn-primary"
              style={{ justifyContent: 'center' }}
            >
              <span>Begin Lesson 0.1: The Big Picture</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/learn/math/01-linear-algebra/00-vectors-intro"
              className="btn btn-secondary"
              style={{ justifyContent: 'center' }}
            >
              <span>Jump to Vectors (Lesson 1.0)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Topics Cards in PRD Order ── */}
      <div className="space-y-10">
        {topics.map((topic, tIdx) => (
          <section
            key={topic.slug}
            className="rounded-3xl border border-[var(--border)] bg-[var(--card-bg)] p-6 sm:p-8 backdrop-blur-md shadow-sm transition-all hover:border-[var(--accent)]/30"
          >
            <div className="flex flex-col justify-between gap-4 border-b border-[var(--border)] pb-6 sm:flex-row sm:items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    Topic {tIdx}
                  </span>
                  <span className="text-xs text-[var(--muted)]">&bull;</span>
                  <span className="text-xs text-[var(--muted)]">
                    {topic.lessonCount} lessons &bull; {topic.totalMinutes} mins
                  </span>
                </div>
                <h2 className="mt-1 text-2xl font-bold text-[var(--text)]">
                  {topic.title}
                </h2>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {topic.description}
                </p>
              </div>

              {topic.lessons.length > 0 && (
                <Link
                  href={`/learn/math/${topic.slug}/${topic.lessons[0].slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--surface)] px-4 py-2 text-xs font-semibold text-[var(--text)] border border-[var(--border)] hover:bg-[var(--surface-hover)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                >
                  Start Topic <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              )}
            </div>

            {/* ── Lesson List inside Topic ── */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topic.lessons.map(lesson => (
                <Link
                  key={lesson.slug}
                  href={`/learn/math/${topic.slug}/${lesson.slug}`}
                  className="group relative flex flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all hover:border-[var(--accent)]/50 hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-mono font-bold text-[var(--accent)]">
                        Lesson {lesson.lessonNumber}
                      </span>
                      <span className="text-[var(--muted)] flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {lesson.minutes}m
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-[var(--text)] group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                      {lesson.title}
                    </h3>
                    <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2">
                      {lesson.summary}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-end text-xs font-semibold text-[var(--accent)] opacity-80 group-hover:opacity-100">
                    Read lesson <ChevronRight className="h-3.5 w-3.5 ml-0.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ── ADVANCED MATH: Building Models from Scratch ── */}
      <section className="mt-16 rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 sm:p-10 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Cpu className="h-5 w-5 text-[var(--accent)]" />
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
            Deep Dive Curriculum
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-[var(--text)] sm:text-3xl">
          More Mathematics for Building ML Models From Scratch
        </h2>
        <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed max-w-3xl">
          While high-level frameworks like Scikit-learn handle computations automatically, building robust models from scratch requires deeper mathematics:
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
            <h3 className="font-bold text-sm text-[var(--text)] mb-2">
              Matrix Calculus & Backprop
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Jacobians, Hessians, and multivariable chain rules needed to backpropagate gradients through deep multi-layer neural networks without Autograd.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
            <h3 className="font-bold text-sm text-[var(--text)] mb-2">
              Matrix Decompositions (PCA & SVD)
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Eigenvalues, eigenvectors, and Singular Value Decomposition (SVD) for dimensionality reduction, latent semantic analysis, and recommendation systems.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5">
            <h3 className="font-bold text-sm text-[var(--text)] mb-2">
              Convex Optimization & Loss Derivations
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Deriving MSE, Binary Cross-Entropy (Log Loss), and Softmax loss functions from Maximum Likelihood Estimation (MLE) and implementing SGD, Momentum, and Adam.
            </p>
          </div>
        </div>
      </section>

      {/* ── REQUEST TUTORING: Student Mentoring Request Callout ── */}
      <div className="mt-12 rounded-3xl border border-[var(--accent-2)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-8 text-center sm:p-12 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-2)]/15 px-3 py-1 text-xs font-bold text-[var(--accent-2)] mb-4 border border-[var(--accent-2)]/30">
          <GraduationCap className="h-4 w-4" /> 1 on 1 & Group Math Tutoring
        </div>
        <h2 className="text-2xl font-extrabold text-[var(--text)] sm:text-3xl">
          Want personalized Math for Machine Learning tutoring?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[var(--text-secondary)] sm:text-base">
          If you want to be taught more math, need dedicated help understanding derivations, or want guidance building models from scratch, you can request custom Math for ML tutoring with <strong>Ezra Ndinya Ogechi</strong>.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact?service=course"
            className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-bold text-gray-900 shadow-md hover:opacity-90 transition-opacity"
          >
            Request Math for ML Tutoring
          </Link>
          <a
            href="https://wa.me/254738933046?text=Hi%20Ezra%2C%20I%20would%20like%20to%20request%20tutoring%20in%20Math%20for%20Machine%20Learning."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors"
          >
            <MessageCircle className="h-4 w-4 text-emerald-400" />
            <span>Chat with Ezra on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}

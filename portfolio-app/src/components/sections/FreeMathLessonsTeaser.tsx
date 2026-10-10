'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Sparkles, ArrowRight, CheckCircle2, FunctionSquare, GraduationCap } from 'lucide-react';

const topics = [
  { num: '0', title: 'The Big Picture', mins: '6m', desc: 'Data, Model, Training: the path every ML system follows.' },
  { num: '1', title: 'Linear Algebra', mins: '93m', desc: 'Vectors, matrices, operations, dot products and projections.' },
  { num: '2', title: 'Statistics', mins: '104m', desc: 'Central tendency, variability, percentiles and hypothesis tests.' },
  { num: '3', title: 'Probability', mins: '76m', desc: 'Distributions, normal curve, Poisson and Bayes theorem.' },
  { num: '4', title: 'Calculus for ML', mins: '57m', desc: 'Slopes, derivatives, gradients and gradient descent from scratch.' },
];

export default function FreeMathLessonsTeaser() {
  return (
    <section id="free-math" className="section relative overflow-hidden py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-gradient-to-b from-[var(--surface)] to-[var(--bg)] p-8 sm:p-12 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'var(--accent)' }}
          />

          {/* NeuralNest Branding Badge (Vector icon, no oversized image) */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-[var(--border)] pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  borderRadius: '50%',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                }}
              >
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-base tracking-wide text-[var(--text)]">
                    NeuralNest
                  </span>
                  <span className="rounded-full bg-[var(--accent)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--accent)] border border-[var(--accent)]/30">
                    Free Math for ML
                  </span>
                </div>
                <p className="text-xs text-[var(--muted)]">
                  A welcoming home for learners exploring neural networks, AI, and machine learning
                </p>
              </div>
            </div>

            <Link
              href="/learn"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--accent)] px-5 py-2.5 text-xs font-bold text-gray-900 shadow-md hover:opacity-90 transition-opacity self-start sm:self-auto"
            >
              Explore All Lessons <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left column */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-2)]">
                Step by Step Curriculum
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
                Master the Mathematics Behind Every Model
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                Written directly from practical engineering notes. No hand waving and no skipped steps.
                Understand exactly how data transforms into predictions, how loss is calculated, and how gradient descent finds the minimum.
              </p>

              <div className="mt-6 space-y-2.5 text-xs text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                  <span>Interactive SVG graphs and KaTeX display formulas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                  <span>Practice questions with step by step answers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[var(--accent)]" />
                  <span>Completely free to read, print, and explore at your pace</span>
                </div>
              </div>
            </div>

            {/* Right column: 5 topic cards */}
            <div className="lg:col-span-7 grid gap-3 sm:grid-cols-2">
              {topics.map(t => (
                <Link
                  key={t.num}
                  href="/learn"
                  className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-all hover:border-[var(--accent)]/50 hover:bg-[var(--surface-hover)]"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-mono font-bold text-[var(--accent)]">Topic {t.num}</span>
                    <span className="text-[var(--muted)]">{t.mins}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text)] group-hover:text-[var(--accent)] transition-colors">
                    {t.title}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--text-secondary)] line-clamp-2">
                    {t.desc}
                  </p>
                </Link>
              ))}

              <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)]/50 p-4 flex flex-col justify-center items-center text-center">
                <FunctionSquare className="h-6 w-6 text-[var(--accent-2)] mb-1" />
                <span className="text-xs font-semibold text-[var(--text)]">Curated Lessons</span>
                <span className="text-[11px] text-[var(--muted)]">Self paced learning for engineers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import katex from 'katex';
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, BookOpen, Clock, Copy, Check, Sparkles } from 'lucide-react';
import MathGraph, { GraphSpec } from './MathGraph';
import type { MathLesson } from '@/types';

function renderFormula(latex: string): string {
  try {
    return katex.renderToString(latex.trim(), {
      displayMode: true,
      throwOnError: false,
    });
  } catch {
    return `<code class="text-xs">${latex}</code>`;
  }
}

function isFormula(line: string): boolean {
  const trimmed = line.trim();
  if (trimmed.startsWith('$$') && trimmed.endsWith('$$')) return true;
  if (
    trimmed.includes('\\frac') ||
    trimmed.includes('\\begin{bmatrix}') ||
    trimmed.includes('\\begin{vmatrix}') ||
    trimmed.includes('\\sqrt') ||
    trimmed.includes('\\sum') ||
    trimmed.includes('\\int') ||
    trimmed.includes('\\nabla') ||
    trimmed.includes('\\sin') ||
    trimmed.includes('\\cos') ||
    trimmed.includes('\\tan') ||
    trimmed.includes('\\lim_') ||
    trimmed.includes('\\cdot') ||
    trimmed.includes('\\times')
  ) {
    return true;
  }
  return false;
}

export default function MathLessonRenderer({
  lesson,
  prevLesson,
  nextLesson,
}: {
  lesson: MathLesson;
  prevLesson: MathLesson | null;
  nextLesson: MathLesson | null;
}) {
  const [completed, setCompleted] = useState<boolean>(false);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('neuralnest_math_progress');
      if (stored) {
        const arr = JSON.parse(stored);
        if (arr.includes(lesson.slug)) {
          setCompleted(true);
        }
      }
    } catch {}
  }, [lesson.slug]);

  const toggleCompleted = () => {
    try {
      const stored = localStorage.getItem('neuralnest_math_progress');
      let arr: string[] = stored ? JSON.parse(stored) : [];
      if (completed) {
        arr = arr.filter(id => id !== lesson.slug);
        setCompleted(false);
      } else {
        if (!arr.includes(lesson.slug)) arr.push(lesson.slug);
        setCompleted(true);
      }
      localStorage.setItem('neuralnest_math_progress', JSON.stringify(arr));
    } catch {}
  };

  const toggleAnswer = (key: string) => {
    setOpenAnswers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const copyCode = (codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Parse lesson content blocks
  const lines = lesson.content.split('\n');
  const sections: {
    type: 'goal' | 'idea' | 'text' | 'formula' | 'graph' | 'code' | 'note' | 'rules' | 'practice' | 'ml';
    content: any;
  }[] = [];

  let i = 0;
  while (i < lines.length) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // Check for Graph block
    if (trimmed.startsWith('{"type"')) {
      let depth = 0;
      let startIdx = i;
      let jsonStr = '';
      let closed = false;

      while (i < lines.length) {
        const l = lines[i];
        jsonStr += ' ' + l;
        for (const char of l) {
          if (char === '{') depth++;
          if (char === '}') {
            depth--;
            if (depth === 0) {
              closed = true;
              break;
            }
          }
        }
        i++;
        if (closed) break;
      }

      try {
        const cleaned = jsonStr.replace(/[\r\n]+/g, ' ');
        const spec: GraphSpec = JSON.parse(cleaned);
        sections.push({ type: 'graph', content: spec });
      } catch (err) {
        sections.push({ type: 'text', content: jsonStr });
      }
      continue;
    }

    // Check for Python Code block
    if (trimmed.startsWith('import ') || trimmed.startsWith('from scipy')) {
      const codeLines: string[] = [];
      while (i < lines.length) {
        const l = lines[i];
        if (l.trim().startsWith('Key rules') || l.trim().startsWith('Step ') || l.trim().startsWith('Practice') || l.trim().startsWith('Where this is')) {
          break;
        }
        codeLines.push(l);
        i++;
      }
      sections.push({ type: 'code', content: codeLines.join('\n') });
      continue;
    }

    // Goal
    if (trimmed.startsWith('Goal:')) {
      sections.push({ type: 'goal', content: trimmed.replace(/^Goal:\s*/, '') });
      i++;
      continue;
    }

    // The idea in plain words
    if (trimmed.startsWith('The idea in plain words')) {
      sections.push({ type: 'idea', content: trimmed.replace(/^The idea in plain words\s*/, '') });
      i++;
      continue;
    }

    // Note Callout
    if (trimmed.startsWith('Note ')) {
      sections.push({ type: 'note', content: trimmed.replace(/^Note\s*/, '') });
      i++;
      continue;
    }

    // Key Rules
    if (trimmed.startsWith('Key rules')) {
      const ruleLines: string[] = [];
      i++;
      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith('Practice') || l.startsWith('Where this is') || l.startsWith('Step ')) break;
        if (l) ruleLines.push(l);
        i++;
      }
      sections.push({ type: 'rules', content: ruleLines });
      continue;
    }

    // Practice
    if (trimmed.startsWith('Practice')) {
      const qaItems: { q: string; a: string; key: string }[] = [];
      i++;
      let currentQ = '';
      let currentA = '';

      while (i < lines.length) {
        const l = lines[i].trim();
        if (l.startsWith('Where this is')) break;

        if (l.startsWith('Q')) {
          if (currentQ) {
            qaItems.push({ q: currentQ, a: currentA, key: `qa-${qaItems.length}` });
            currentA = '';
          }
          currentQ = l;
        } else if (l.startsWith('A')) {
          currentA = l;
        } else if (l) {
          if (currentA) currentA += ' ' + l;
          else if (currentQ) currentQ += ' ' + l;
        }
        i++;
      }
      if (currentQ) {
        qaItems.push({ q: currentQ, a: currentA, key: `qa-${qaItems.length}` });
      }
      sections.push({ type: 'practice', content: qaItems });
      continue;
    }

    // Where this is used in machine learning
    if (trimmed.startsWith('Where this is used in machine learning:')) {
      const mlLines: string[] = [trimmed.replace(/^Where this is used in machine learning:\s*/, '')];
      i++;
      while (i < lines.length) {
        if (lines[i].trim()) mlLines.push(lines[i].trim());
        i++;
      }
      sections.push({ type: 'ml', content: mlLines.join(' ') });
      continue;
    }

    // Formula line
    if (isFormula(trimmed)) {
      sections.push({ type: 'formula', content: trimmed.replace(/^\$\$/g, '').replace(/\$\$$/g, '') });
      i++;
      continue;
    }

    // Regular text line
    sections.push({ type: 'text', content: rawLine });
    i++;
  }

  return (
    <article className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Sub-brand Header Bar ── */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border)] pb-4">
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Math Lessons
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-[var(--muted)]">
            NeuralNest Math &bull; {lesson.topic}
          </span>
          <button
            onClick={toggleCompleted}
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all ${
              completed
                ? 'bg-[var(--accent)]/15 text-[var(--accent)] border border-[var(--accent)]/30'
                : 'bg-[var(--surface)] text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text)]'
            }`}
            title="Mark lesson as completed"
          >
            {completed ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
            {completed ? 'Completed' : 'Mark Complete'}
          </button>
        </div>
      </div>

      {/* ── Lesson Title & Metadata ── */}
      <header className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block rounded-md bg-[var(--accent)]/10 px-2.5 py-1 text-xs font-bold text-[var(--accent)] font-mono">
            Lesson {lesson.lessonNumber}
          </span>
          <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)]">
            <Clock className="h-3.5 w-3.5" /> {lesson.minutes} min read
          </span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl">
          {lesson.title}
        </h1>

        {lesson.prerequisites && lesson.prerequisites.length > 0 && lesson.prerequisites[0] !== 'none' && (
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
            <span className="text-[var(--muted)]">Prerequisites:</span>
            {lesson.prerequisites.map((p, idx) => (
              <span
                key={idx}
                className="rounded-full bg-[var(--surface)] px-2.5 py-0.5 border border-[var(--border)] font-mono"
              >
                Lesson {p}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* ── Content Sections ── */}
      <div className="space-y-6 text-[var(--text)] leading-relaxed">
        {sections.map((sec, idx) => {
          switch (sec.type) {
            case 'goal':
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-5 shadow-sm"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)] mb-1">
                    Goal
                  </p>
                  <p className="text-base font-semibold text-[var(--text)]">
                    {sec.content}
                  </p>
                </div>
              );

            case 'idea':
              return (
                <div key={idx} className="my-4">
                  <h3 className="text-lg font-bold text-[var(--text)] mb-2">
                    The idea in plain words
                  </h3>
                  <p className="text-[var(--text-secondary)] text-base">
                    {sec.content}
                  </p>
                </div>
              );

            case 'formula':
              return (
                <div
                  key={idx}
                  className="my-4 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-center"
                  dangerouslySetInnerHTML={{ __html: renderFormula(sec.content) }}
                />
              );

            case 'graph':
              return <MathGraph key={idx} spec={sec.content} />;

            case 'code':
              return (
                <div key={idx} className="relative my-4 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4 font-mono text-sm">
                  <button
                    onClick={() => copyCode(sec.content)}
                    className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-[var(--surface)] px-2.5 py-1 text-xs text-[var(--text-secondary)] border border-[var(--border)] hover:text-[var(--text)] transition-colors"
                  >
                    {copiedCode ? <Check className="h-3.5 w-3.5 text-[var(--accent)]" /> : <Copy className="h-3.5 w-3.5" />}
                    {copiedCode ? 'Copied' : 'Copy'}
                  </button>
                  <pre className="overflow-x-auto text-[var(--accent)] pr-16">{sec.content}</pre>
                </div>
              );

            case 'note':
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[var(--accent-2)]/30 bg-[var(--accent-2)]/10 p-4 text-sm text-[var(--text)]"
                >
                  <strong className="text-[var(--accent-2)]">Note:</strong> {sec.content}
                </div>
              );

            case 'rules':
              return (
                <div
                  key={idx}
                  className="my-6 rounded-2xl border-2 border-[var(--accent)]/30 bg-[var(--surface)] p-6 shadow-md"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-[var(--accent)]" />
                    <h3 className="text-base font-bold text-[var(--text)]">Key Rules</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc pl-5">
                    {sec.content.map((r: string, rIdx: number) => (
                      <li key={rIdx}>{r.replace(/^[-•]\s*/, '')}</li>
                    ))}
                  </ul>
                </div>
              );

            case 'practice':
              return (
                <div
                  key={idx}
                  className="my-6 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-[var(--text)] mb-4">Practice</h3>
                  <div className="space-y-4">
                    {sec.content.map((item: any, qIdx: number) => {
                      const isOpen = !!openAnswers[item.key];
                      return (
                        <div
                          key={qIdx}
                          className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4"
                        >
                          <p className="font-semibold text-sm text-[var(--text)]">{item.q}</p>
                          <div className="mt-3">
                            <button
                              onClick={() => toggleAnswer(item.key)}
                              className="rounded-md bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--accent)] border border-[var(--border)] hover:bg-[var(--surface-hover)] transition-colors"
                            >
                              {isOpen ? 'Hide answer' : 'Show answer'}
                            </button>
                            {isOpen && (
                              <div className="mt-2.5 rounded-lg bg-[var(--accent)]/10 p-3 text-xs font-medium text-[var(--text)] border border-[var(--accent)]/20 animate-in fade-in">
                                {item.a}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );

            case 'ml':
              return (
                <div
                  key={idx}
                  className="my-6 rounded-2xl border border-[var(--accent-2)]/30 bg-[var(--accent-2)]/5 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="h-5 w-5 text-[var(--accent-2)]" />
                    <h3 className="text-base font-bold text-[var(--text)]">
                      Where this is used in machine learning
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {sec.content}
                  </p>
                </div>
              );

            case 'text':
            default:
              return (
                <p key={idx} className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {sec.content}
                </p>
              );
          }
        })}
      </div>

      {/* ── Navigation Between Lessons ── */}
      <nav className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-6">
        {prevLesson ? (
          <Link
            href={`/learn/math/${prevLesson.topicSlug}/${prevLesson.slug}`}
            className="group flex flex-col items-start rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-left transition-all hover:border-[var(--accent)]/50 sm:w-5/12"
          >
            <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)] group-hover:text-[var(--accent)]">
              <ArrowLeft className="h-3.5 w-3.5" /> Previous Lesson
            </span>
            <span className="font-semibold text-sm text-[var(--text)] mt-1 line-clamp-1">
              {prevLesson.lessonNumber} {prevLesson.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block sm:w-5/12" />
        )}

        {nextLesson ? (
          <Link
            href={`/learn/math/${nextLesson.topicSlug}/${nextLesson.slug}`}
            className="group flex flex-col items-end rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 text-right transition-all hover:border-[var(--accent)]/50 sm:w-5/12 ml-auto"
          >
            <span className="inline-flex items-center gap-1 text-xs text-[var(--muted)] group-hover:text-[var(--accent)]">
              Next Lesson <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="font-semibold text-sm text-[var(--text)] mt-1 line-clamp-1">
              {nextLesson.lessonNumber} {nextLesson.title}
            </span>
          </Link>
        ) : (
          <div className="hidden sm:block sm:w-5/12" />
        )}
      </nav>

      {/* ── Join the ML Course Call to Action (PRD Section 18.2) ── */}
      <section className="mt-12 rounded-3xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--surface)] to-[var(--bg)] p-8 text-center shadow-lg">
        <h3 className="text-xl font-extrabold text-[var(--text)] sm:text-2xl">
          Ready to put this math into production?
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm text-[var(--text-secondary)]">
          Join the <strong>NeuralNest ML Course by Ezra Ndinya Ogechi</strong>. Build real world machine learning systems, train models from scratch, and deploy native Android and web apps.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/course"
            className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-semibold text-gray-900 shadow-md hover:opacity-90 transition-opacity"
          >
            Join the ML course
          </Link>
          <Link
            href="/contact?service=course"
            className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-2.5 text-sm font-semibold text-[var(--text)] hover:bg-[var(--surface-hover)] transition-colors"
          >
            Enquire with Ezra
          </Link>
        </div>
      </section>
    </article>
  );
}

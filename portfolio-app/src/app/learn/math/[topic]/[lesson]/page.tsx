import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllMathLessons, getMathLesson, getAdjacentMathLessons } from '@/lib/content';
import MathLessonRenderer from '@/components/learn/MathLessonRenderer';

interface PageProps {
  params: Promise<{
    topic: string;
    lesson: string;
  }>;
}

export async function generateStaticParams() {
  const allLessons = getAllMathLessons();
  return allLessons.map(l => ({
    topic: l.topicSlug,
    lesson: l.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic, lesson: lessonSlug } = await params;
  const lesson = getMathLesson(topic, lessonSlug);

  if (!lesson) {
    return {
      title: 'Lesson Not Found | NeuralNest Math',
    };
  }

  return {
    title: `Lesson ${lesson.lessonNumber}: ${lesson.title} | NeuralNest Math`,
    description: lesson.summary || `Free Machine Learning Math lesson: ${lesson.title} by Ezra Ndinya Ogechi.`,
  };
}

export default async function MathLessonDetailPage({ params }: PageProps) {
  const { topic, lesson: lessonSlug } = await params;
  const lesson = getMathLesson(topic, lessonSlug);

  if (!lesson) {
    notFound();
  }

  const { prev, next } = getAdjacentMathLessons(lessonSlug);

  return (
    <div className="min-h-screen bg-[var(--bg)] py-8">
      <MathLessonRenderer
        lesson={lesson}
        prevLesson={prev}
        nextLesson={next}
      />
    </div>
  );
}

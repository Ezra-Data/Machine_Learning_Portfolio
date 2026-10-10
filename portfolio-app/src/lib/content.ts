import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Project, ProjectTrack, SiteConfig, CourseData, PlayStoreApp, Testimonial, Certification } from '@/types';

const contentDir = path.join(process.cwd(), 'content');
const projectsDir = path.join(contentDir, 'projects');

// ── Markdown to HTML ──
async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

// ── Site Config ──
export function getSiteConfig(): SiteConfig {
  const filePath = path.join(contentDir, 'site.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── About ──
export async function getAboutContent(): Promise<string> {
  const filePath = path.join(contentDir, 'about.md');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return markdownToHtml(raw);
}

// ── Skills ──
export function getSkills() {
  const filePath = path.join(contentDir, 'skills.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── Course ──
export function getCourseData(): CourseData {
  const filePath = path.join(contentDir, 'course.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── Apps ──
export function getApps(): PlayStoreApp[] {
  const filePath = path.join(contentDir, 'apps.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── Testimonials ──
export function getTestimonials(): Testimonial[] {
  const filePath = path.join(contentDir, 'testimonials.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── Certifications & Recognition ──
export function getCertifications(): Certification[] {
  const filePath = path.join(contentDir, 'certifications.json');
  if (!fs.existsSync(filePath)) return [];
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

// ── Projects ──
export function getAllProjects(): Project[] {
  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));

  const projects: Project[] = files.map(filename => {
    const filePath = path.join(projectsDir, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    return {
      title: data.title || '',
      slug: data.slug || filename.replace('.md', ''),
      track: data.track || 'data-science',
      category: data.category || 'Classification',
      summary: data.summary || '',
      tools: data.tools || [],
      algorithms: data.algorithms || [],
      githubPath: data.githubPath || '',
      githubUrl: data.githubUrl || '',
      demoUrl: data.demoUrl || '',
      result: data.result || '',
      featured: data.featured || false,
      spotlight: data.spotlight || false,
      award: data.award || '',
      event: data.event || '',
      eventDate: data.eventDate || '',
      role: data.role || '',
      team: data.team || '',
      proofUrl: data.proofUrl || '',
      image: data.image || '',
      order: data.order ?? 99,
      published: data.published !== false,
      content,
    };
  });

  return projects
    .filter(p => p.published)
    .sort((a, b) => a.order - b.order);
}

export function getSpotlightProject(): Project | undefined {
  return getAllProjects().find(p => p.spotlight);
}

export function getProjectsByTrack(track: ProjectTrack): Project[] {
  return getAllProjects().filter(p => p.track === track);
}

export function getFeaturedProjects(track: ProjectTrack): Project[] {
  return getProjectsByTrack(track).filter(p => p.featured).slice(0, 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find(p => p.slug === slug);
}

export async function getProjectContent(slug: string): Promise<string> {
  const project = getProjectBySlug(slug);
  if (!project) return '';
  return markdownToHtml(project.content);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map(p => p.slug);
}

export function getAdjacentProjects(slug: string, track: ProjectTrack): {
  prev: Project | null;
  next: Project | null;
} {
  const projects = getProjectsByTrack(track);
  const idx = projects.findIndex(p => p.slug === slug);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

export function getCategoriesForTrack(track: ProjectTrack): string[] {
  const projects = getProjectsByTrack(track);
  const cats = new Set(projects.map(p => p.category));
  return Array.from(cats).sort();
}

export { getGithubFolderUrl, getProjectGithubUrl } from './urls';

// ── Math Lessons & Topics ──
export const MATH_TOPICS: { slug: string; title: string; description: string; order: number }[] = [
  {
    slug: '00-introduction',
    title: 'Introduction',
    description: 'The big picture of math for machine learning: Data, Model, and Training.',
    order: 0,
  },
  {
    slug: '01-linear-algebra',
    title: 'Linear Algebra',
    description: 'Vectors, matrices, operations, dot products, projections, and ML data structures.',
    order: 1,
  },
  {
    slug: '02-statistics',
    title: 'Statistics',
    description: 'Measures of central tendency, variability, percentiles, correlation, and hypothesis testing.',
    order: 2,
  },
  {
    slug: '03-probability',
    title: 'Probability',
    description: 'Random variables, distributions, normal curve, Poisson distribution, and Bayes’ theorem.',
    order: 3,
  },
  {
    slug: '04-calculus',
    title: 'Calculus',
    description: 'Functions, slopes, derivatives, partial derivatives, gradients, and gradient descent from scratch.',
    order: 4,
  },
];

const mathBaseDir = path.join(contentDir, 'learn', 'math');

export function getAllMathLessons(): import('@/types').MathLesson[] {
  if (!fs.existsSync(mathBaseDir)) return [];

  const topicFolders = fs.readdirSync(mathBaseDir).filter(f => {
    return fs.statSync(path.join(mathBaseDir, f)).isDirectory();
  });

  const lessons: import('@/types').MathLesson[] = [];

  for (const topicFolder of topicFolders) {
    const topicPath = path.join(mathBaseDir, topicFolder);
    const files = fs.readdirSync(topicPath).filter(f => f.endsWith('.md'));

    for (const filename of files) {
      const filePath = path.join(topicPath, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);

      lessons.push({
        slug: filename.replace('.md', ''),
        lessonNumber: data.lessonNumber || '',
        title: data.title || '',
        topic: data.topic || '',
        topicSlug: data.topicSlug || topicFolder,
        order: data.order ?? 999,
        minutes: data.minutes ?? 10,
        prerequisites: data.prerequisites || [],
        summary: data.summary || '',
        mlUse: data.mlUse || '',
        content,
      });
    }
  }

  return lessons.sort((a, b) => a.order - b.order);
}

export function getMathTopics(): import('@/types').MathTopic[] {
  const allLessons = getAllMathLessons();

  return MATH_TOPICS.map(t => {
    const topicLessons = allLessons.filter(l => l.topicSlug === t.slug);
    const totalMinutes = topicLessons.reduce((sum, l) => sum + (l.minutes || 0), 0);
    return {
      slug: t.slug,
      title: t.title,
      description: t.description,
      lessonCount: topicLessons.length,
      totalMinutes,
      lessons: topicLessons,
    };
  });
}

export function getMathLesson(topicSlug: string, lessonSlug: string): import('@/types').MathLesson | undefined {
  const allLessons = getAllMathLessons();
  return allLessons.find(l => l.topicSlug === topicSlug && l.slug === lessonSlug);
}

export function getAdjacentMathLessons(lessonSlug: string): {
  prev: import('@/types').MathLesson | null;
  next: import('@/types').MathLesson | null;
} {
  const allLessons = getAllMathLessons();
  const idx = allLessons.findIndex(l => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  };
}

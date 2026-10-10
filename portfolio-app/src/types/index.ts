// ── Project Types ──
export type ProjectTrack = 'data-science' | 'data-analytics';

export type ProjectCategory =
  | 'Classification'
  | 'Regression'
  | 'Recommendation'
  | 'Clustering'
  | 'NLP'
  | 'AI Applications'
  | 'SQL'
  | 'Power BI'
  | 'Excel'
  | 'Python';

export interface Project {
  title: string;
  slug: string;
  track: ProjectTrack;
  category: ProjectCategory;
  summary: string;
  tools: string[];
  algorithms: string[];
  githubPath: string;
  githubUrl?: string;
  demoUrl?: string;
  result?: string;
  featured: boolean;
  spotlight?: boolean;
  award?: string;
  event?: string;
  eventDate?: string;
  role?: string;
  team?: string;
  proofUrl?: string;
  image?: string;
  order: number;
  published: boolean;
  content: string;
  lastUpdated?: string;
  readmeContent?: string;
}

// ── Certification Types ──
export type CertificationType = 'award' | 'participation' | 'course' | 'education';

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  type: CertificationType;
  description: string;
  file?: string;
  thumbnail?: string;
  verifyUrl?: string;
  projectSlug?: string;
  team?: string;
  projectName?: string;
  role?: string;
  githubUrl?: string;
  demoRequestUrl?: string;
}

// ── Math Lesson Types ──
export interface MathLesson {
  slug: string;
  lessonNumber: string;
  title: string;
  topic: string;
  topicSlug: string;
  order: number;
  minutes: number;
  prerequisites: string[];
  summary: string;
  mlUse: string;
  content: string;
}

export interface MathTopic {
  slug: string;
  title: string;
  description: string;
  lessonCount: number;
  totalMinutes: number;
  lessons: MathLesson[];
}

// ── Course Types ──
export interface CourseModule {
  title: string;
  topics: string[];
}

export interface CourseData {
  title: string;
  subtitle: string;
  brandName: string;
  whoIsItFor: string[];
  prerequisites: string[];
  syllabus: CourseModule[];
  format: string;
  duration: string;
  schedule: string;
  price: string;
  whatStudentsBuild: string[];
  instructor: {
    name: string;
    bio: string;
    image: string;
  };
  status: 'open' | 'waitlist' | 'coming-soon';
}

// ── App Types ──
export interface PlayStoreApp {
  name: string;
  slug: string;
  description: string;
  icon: string;
  screenshots: string[];
  playStoreUrl: string;
  features: string[];
}

// ── Site Config Types ──
export interface SiteConfig {
  name: string;
  tagline: string;
  heroStatement: string;
  heroRoles: string[];
  socials: {
    github: string;
    linkedin: string;
    x: string;
    tiktok: string;
    reddit: string;
    whatsapp: string;
    whatsappNumber: string;
    analyticsUrl: string;
    email?: string;
  };
  contact: {
    replyTime: string;
    calendarUrl?: string;
  };
  meta: {
    siteUrl: string;
    ogImage: string;
    twitterHandle: string;
  };
}

// ── Testimonial Types ──
export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  quote: string;
  image?: string;
}

// ── Skills Types ──
export interface SkillGroup {
  name: string;
  icon: string;
  skills: string[];
}

// ── Theme Types ──
export type ThemeName = 'midnight-aurora' | 'daylight' | 'ember' | 'terminal';

export interface ThemeConfig {
  name: ThemeName;
  label: string;
  character: string;
  swatch: string;
}

import {
  getSiteConfig,
  getAboutContent,
  getSkills,
  getCourseData,
  getApps,
  getCertifications,
  getProjectsByTrack,
  getSpotlightProject,
} from '@/lib/content';
import { getRecentCommits } from '@/lib/github';
import HeroSection from '@/components/sections/HeroSection';
import CurrentlyBuilding from '@/components/sections/CurrentlyBuilding';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DataScienceProjectsSection from '@/components/sections/DataScienceProjectsSection';
import DataAnalyticsSection from '@/components/sections/DataAnalyticsSection';
import ChanaSpotlight from '@/components/sections/ChanaSpotlight';
import SkillsSection from '@/components/sections/SkillsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import CourseTeaserSection from '@/components/sections/CourseTeaserSection';
import FreeMathLessonsTeaser from '@/components/sections/FreeMathLessonsTeaser';
import ContactCtaSection from '@/components/sections/ContactCtaSection';

export default async function HomePage() {
  const [
    siteConfig,
    aboutHtml,
    skills,
    courseData,
    apps,
    certifications,
    dsProjects,
    analyticsProjects,
    recentCommits,
  ] = await Promise.all([
    getSiteConfig(),
    getAboutContent(),
    getSkills(),
    getCourseData(),
    getApps(),
    getCertifications(),
    getProjectsByTrack('data-science'),
    getProjectsByTrack('data-analytics'),
    getRecentCommits(5),
  ]);

  // Headline Featured project (Chana)
  const spotlightProject = getSpotlightProject() || dsProjects.find(p => p.slug === 'chana');

  // Filter regular DS featured projects (exclude spotlight so Chana has its dedicated spotlight right after Data Analytics)
  const regularDsProjects = dsProjects.filter(p => !p.spotlight && p.slug !== 'chana');

  return (
    <>
      {/* 1. Hero */}
      <HeroSection config={siteConfig} />

      {/* 2. Currently Building (live GitHub activity strip) */}
      <CurrentlyBuilding commits={recentCommits} />

      {/* 3. About */}
      <AboutSection aboutHtml={aboutHtml} />

      {/* 4. What I Offer (three offers + dashboards strip) */}
      <ServicesSection />

      {/* 5. Data Science Projects (3 featured cards) */}
      <DataScienceProjectsSection projects={regularDsProjects.slice(0, 3)} />

      {/* 6. Data Analytics Projects, then Featured Work (Chana spotlight) */}
      <DataAnalyticsSection projects={analyticsProjects.slice(0, 3)} />
      <ChanaSpotlight project={spotlightProject} isRepoPublic={false} />

      {/* 7. Skills and Tools, then Certifications and Recognition */}
      <SkillsSection skillGroups={skills} />
      <CertificationsSection certifications={certifications} />

      {/* 8. ML Course teaser, then Free Math Lessons teaser */}
      <CourseTeaserSection course={courseData} />
      <FreeMathLessonsTeaser />

      {/* 9. Apps on Google Play (Conditional) */}
      {apps && apps.length > 0 && (
        <section id="apps" className="section">
          {/* Renders when apps.json has at least one entry */}
        </section>
      )}

      {/* 10. Contact call to action */}
      <ContactCtaSection />
    </>
  );
}

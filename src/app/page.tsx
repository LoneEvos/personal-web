import { Navbar } from '@/components/sections/navbar';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { TechStackSection } from '@/components/sections/tech-stack-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';
import { BeamsBackground } from '@/components/ui/beams-background';
import { CursorGlow } from '@/components/ui/cursor-glow';

export default function Home() {
  return (
    <>
      <BeamsBackground />
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

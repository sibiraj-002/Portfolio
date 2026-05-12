import AboutSection from "./components/portfolio/AboutSection";
import ContactSection from "./components/portfolio/ContactSection";
import HeroSection from "./components/portfolio/HeroSection";
import Navbar from "./components/portfolio/Navbar";
import ProjectsSection from "./components/portfolio/ProjectsSection";
import SkillsSection from "./components/portfolio/SkillsSection";
import { portfolioData } from "./components/portfolio/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#a5b4fc_0%,transparent_40%),radial-gradient(circle_at_bottom_right,#93c5fd_0%,transparent_45%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22)_0%,transparent_40%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.2)_0%,transparent_45%)] dark:text-slate-100">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10">
        <Navbar name={portfolioData.name} />
        <HeroSection data={portfolioData} />
        <AboutSection data={portfolioData} />
        <SkillsSection skills={portfolioData.skills} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contact={portfolioData.contact} />
      </div>
    </main>
  );
}

import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectsSection";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <NavBar />
      <HeroSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="experiences">
        <ExperiencesSection />
      </section>
      <Footer />
    </div>
  )
}

import AboutSection from "@/components/AboutSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectsSection";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <NavBar />
      <HeroSection />
      <section id="about" className="scroll-mt-20 w-full flex justify-center">
        <AboutSection />
      </section>
      <section id="projects" className="scroll-mt-20 w-full flex justify-center">
        <ProjectSection />
      </section>
      <section id="experiences" className="scroll-mt-20 w-full flex justify-center">
        <ExperiencesSection />
      </section>
      <Separator />
      <section id="contact" className="scroll-mt-20 w-full">
        <Footer />
      </section>
    </div>
  )
}

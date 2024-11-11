import { BackgroundLines } from "@/components/ui/background-lines";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

export default function page() {
  return (
    <div className="flex flex-col">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 mt-64 md:-mt-0">
        <Hero />
      </BackgroundLines>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

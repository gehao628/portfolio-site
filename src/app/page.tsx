import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import AIStack from "@/components/sections/AIStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AIStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  );
}

import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import AIStack from "@/components/sections/AIStack";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 深色区：Hero + Profile + AIStack */}
        <Hero />
        <Profile />
        <AIStack />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

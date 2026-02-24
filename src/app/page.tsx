import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import TransitionZone from "@/components/sections/TransitionZone";
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
        {/* 深色区：Hero */}
        <Hero />

        {/* 过渡：深 → 浅 */}
        <TransitionZone direction="dark-to-light" />

        {/* 浅色区 */}
        <AIStack />
        <Projects />
        <Experience />
        <Education />

        {/* 过渡：浅 → 深 */}
        <TransitionZone direction="light-to-dark" />

        {/* 深色区：联系 + 页脚 */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

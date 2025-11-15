import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingParticles from "@/components/FloatingParticles";
import GradientBlobs from "@/components/GradientBlobs";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <GradientBlobs />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </div>
  );
};

export default Index;

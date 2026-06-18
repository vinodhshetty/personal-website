import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-[#1E3A5F] border-t border-blue-900 py-6 text-center">
        <p className="text-blue-300 text-sm">
          © {new Date().getFullYear()} Vinod S A · Built with Next.js &amp; Tailwind CSS
        </p>
      </footer>
    </>
  );
}

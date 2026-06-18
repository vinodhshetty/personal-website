"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Hobbies from "@/components/Hobbies";
import Games from "@/components/Games";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import { WaveDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />

        {/* Hero → About: light to white */}
        <WaveDivider from="fill-[#fbfbfd] dark:fill-black" to="fill-white dark:fill-[#0a0a0a]" />
        <About />

        {/* About → Skills: white to gray */}
        <WaveDivider from="fill-white dark:fill-[#0a0a0a]" to="fill-[#f5f5f7] dark:fill-black" />
        <Skills />

        {/* Skills → Projects: gray to white */}
        <WaveDivider from="fill-[#f5f5f7] dark:fill-black" to="fill-white dark:fill-[#0a0a0a]" />
        <Projects />

        {/* Projects → Experience: white to gray */}
        <WaveDivider from="fill-white dark:fill-[#0a0a0a]" to="fill-[#f5f5f7] dark:fill-black" />
        <Experience />

        {/* Experience → Testimonials: same gray bg, no divider needed */}
        <Testimonials />

        {/* Testimonials → Hobbies: gray to white */}
        <WaveDivider from="fill-[#f5f5f7] dark:fill-black" to="fill-white dark:fill-[#0a0a0a]" />
        <Hobbies />

        {/* Hobbies → Games: white to light */}
        <WaveDivider from="fill-white dark:fill-[#0a0a0a]" to="fill-[#fbfbfd] dark:fill-black" />
        <Games />

        {/* Games → Contact: light to dark */}
        <WaveDivider from="fill-[#fbfbfd] dark:fill-black" to="fill-[#1d1d1f] dark:fill-[#0a0a0a]" />
        <Contact />
      </main>
      <footer className="bg-[#1d1d1f] dark:bg-black py-8 text-center border-t border-transparent dark:border-white/5">
        <p className="text-[#86868b] text-sm tracking-wide">
          © {new Date().getFullYear()} Vinod S A · Built with Next.js & Tailwind CSS
        </p>
      </footer>
      <BackToTop />
    </>
  );
}

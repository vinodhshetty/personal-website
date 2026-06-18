"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Engineering Manager | Product Manager",
    company: "DoctusTech",
    period: "May 2025 — Present",
    highlight:
      "Lead engineering across AI, backend, frontend, and mobile — establishing sprint systems, delivery pipelines, and translating healthcare workflows into agentic automations.",
    tags: ["Engineering Management", "AI Platforms", "Cross-functional Leadership"],
  },
  {
    role: "Team Lead",
    company: "DoctusTech",
    period: "May 2023 — May 2025",
    highlight:
      "Led the full engineering and product lifecycle for the clinical education division — driving architecture revamp, analytics integration, and significant improvements in user retention.",
    tags: ["Team Leadership", "Product Lifecycle", "Mobile Architecture"],
  },
  {
    role: "Senior Android Developer",
    company: "DoctusTech",
    period: "May 2022 — Jun 2023",
    highlight:
      "Built and maintained core Android features using Coroutines, MVVM, and Jetpack libraries — delivering high-quality, scalable mobile releases.",
    tags: ["Android", "Kotlin", "MVVM", "Jetpack"],
  },
  {
    role: "Android Developer",
    company: "DoctusTech",
    period: "Sep 2021 — May 2022",
    highlight:
      "Built Android features across multiple healthcare verticals, introduced unit testing frameworks, and improved code coverage and release quality.",
    tags: ["Android", "Kotlin", "Unit Testing"],
  },
  {
    role: "Founder & CEO",
    company: "PublicPosts",
    period: "Feb 2019 — Sep 2021",
    highlight:
      "Founded and scaled a hyperlocal social platform to 4,000+ community hubs — led all product, engineering, marketing, and business functions from zero.",
    tags: ["Founder", "0-to-1", "Product Strategy", "Growth"],
  },
  {
    role: "Co-founder",
    company: "Just For You",
    period: "2018 — 2019",
    highlight:
      "Co-founded a real-time GPS-based service provider app and led a team of 4 through geo-location feature development and product scaling.",
    tags: ["Co-founder", "GPS", "Team Lead"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-[#f5f5f7] dark:bg-black transition-colors duration-500" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            Where I&apos;ve been.
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#1E3A5F] dark:from-blue-400 via-[#1E3A5F]/40 dark:via-blue-400/30 to-transparent origin-top hidden sm:block"
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + i * 0.12,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative sm:pl-14"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + i * 0.12,
                  }}
                  className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full bg-white dark:bg-[#1c1c1e] border-2 border-[#1E3A5F] dark:border-blue-400 items-center justify-center flex-shrink-0 shadow-sm"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E3A5F] dark:bg-blue-400" />
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -2,
                    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.12)",
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  className="bg-white dark:bg-[#1c1c1e] rounded-2xl p-7 border border-[#e8e8ed] dark:border-[#2c2c2e] shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7] text-lg tracking-tight">
                        {exp.role}
                      </h3>
                      <p className="text-[#1E3A5F] dark:text-blue-400 font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-[#86868b] text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed mb-4">
                    {exp.highlight}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#6e6e73] dark:text-[#a1a1a6] text-xs px-3 py-1.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

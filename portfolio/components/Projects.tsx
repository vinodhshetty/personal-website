"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    title: "DoctusTech Agentic Healthcare Platform",
    role: "Led",
    description:
      "End-to-end agentic automation platform for clinical workflows — spanning AI, backend, frontend, and mobile verticals.",
    outcomes: [
      "Reduced clinical admin cycle time via automated workflow pipelines",
      "Established sprint systems and delivery pipelines that improved team velocity",
      "Multi-agent orchestration powering real-time healthcare decision support",
    ],
    tags: ["Agentic AI", "LLM", "RAG", "Healthcare", "Engineering Management"],
    gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5",
  },
  {
    title: "Clinical Education Mobile Platform",
    role: "Built & Led",
    description:
      "Mobile learning product used by clinicians for HCC training, assessments, and certifications.",
    outcomes: [
      "Significantly improved user retention and platform reliability",
      "Revamped mobile architecture with MVVM + Clean Architecture",
      "Scaled platform reach through analytics integration and feature expansion",
    ],
    tags: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "Firebase"],
    gradient: "from-cyan-500/10 to-blue-500/10 dark:from-cyan-500/5 dark:to-blue-500/5",
  },
  {
    title: "PublicPosts",
    role: "Founded & Built",
    description:
      "Hyperlocal community-driven social media platform with real-time features across mobile and web.",
    outcomes: [
      "Grew to 4,000+ local community hubs across India",
      "Built Marketplace with 200+ product categories",
      "Real-time messaging, blood volunteering, COVID-19 tools, and trending topics",
    ],
    tags: ["0-to-1", "Social Platform", "Android", "Marketplace", "Founder"],
    gradient: "from-violet-500/10 to-purple-500/10 dark:from-violet-500/5 dark:to-purple-500/5",
  },
  {
    title: "Just For You",
    role: "Co-founded",
    description:
      "Real-time GPS-based service provider app connecting users with nearby service professionals.",
    outcomes: [
      "Led a team of 4 through geo-location feature development",
      "Shipped real-time location matching and provider discovery",
      "Validated product-market fit through rapid iteration",
    ],
    tags: ["GPS", "Android", "Real-time", "Service Marketplace", "Co-founder"],
    gradient: "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5",
  },
];

const roleBadgeColors: Record<string, string> = {
  "Led": "bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f]",
  "Built & Led": "bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f]",
  "Founded & Built": "bg-gradient-to-r from-[#1E3A5F] to-[#2563eb] text-white",
  "Co-founded": "bg-[#6e6e73] dark:bg-[#86868b] text-white dark:text-[#1d1d1f]",
};

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0];
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.15 * index,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        animate={isHovered ? { y: -6 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`bg-gradient-to-br ${project.gradient} dark:bg-[#1c1c1e] rounded-3xl p-8 border border-[#e8e8ed] dark:border-[#2c2c2e] hover:border-[#d2d2d7] dark:hover:border-[#48484a] transition-all duration-500 flex flex-col h-full relative overflow-hidden`}
        style={{
          boxShadow: isHovered
            ? "0 20px 60px rgba(0, 0, 0, 0.15)"
            : "0 2px 20px rgba(0, 0, 0, 0.04)",
        }}
      >
        <div className="flex items-start justify-between mb-5">
          <span
            className={`text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider ${
              roleBadgeColors[project.role] ?? "bg-[#e8e8ed] dark:bg-[#38383a] text-[#6e6e73] dark:text-[#a1a1a6]"
            }`}
          >
            {project.role}
          </span>
        </div>

        <h3 className="text-xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <ul className="space-y-3 mb-6 flex-1">
          {project.outcomes.map((outcome, i) => (
            <motion.li
              key={outcome}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.15 + i * 0.1 }}
              className="flex items-start gap-2.5 text-sm text-[#6e6e73] dark:text-[#a1a1a6]"
            >
              <svg
                className="w-4 h-4 text-[#1E3A5F] dark:text-blue-400 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {outcome}
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-sm text-[#6e6e73] dark:text-[#86868b] text-xs px-3 py-1.5 rounded-full border border-white/40 dark:border-white/10 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-32 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            Featured projects.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

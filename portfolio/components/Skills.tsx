"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const engineeringSkills = [
  "Engineering Management",
  "Mobile / Web / Backend",
  "AI & LLM Integration",
  "Sprint Planning",
  "System & Agentic Architecture",
  "Cloud — GCP & AWS",
  "Multi Agent System",
];

const productSkills = [
  "Roadmap Planning",
  "Product Discovery",
  "User Story Mapping",
  "Product Analytics",
  "0-to-1 Product Development",
  "Stakeholder Communication",
  "Prompt Engineering",
];

const techStack = [
  "Android", "Kotlin", "Java", "Swift", "KMM", "Jetpack Compose",
  "React.js", "TypeScript", "Node.js", "Firebase", "GCP", "AWS",
  "PostgreSQL", "MongoDB", "Redis", "OAuth 2.0", "JWT",
  "LLM Integration", "RAG", "Multi-agent Systems",
];

function SkillCard({
  title,
  subtitle,
  skills,
  delay,
  isInView,
  icon,
}: {
  title: string;
  subtitle: string;
  skills: string[];
  delay: number;
  isInView: boolean;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)] border border-[#e8e8ed] dark:border-[#2c2c2e] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-shadow duration-500"
    >
      <div className="flex items-center gap-3.5 mb-8">
        <div className="w-11 h-11 bg-gradient-to-br from-[#1E3A5F] to-[#2563eb] rounded-2xl flex items-center justify-center shadow-sm">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7] text-lg">{title}</h3>
          <p className="text-[#86868b] text-sm">{subtitle}</p>
        </div>
      </div>
      <ul className="space-y-3.5">
        {skills.map((skill, i) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: delay + 0.1 + i * 0.04 }}
            className="flex items-center gap-3 text-[#6e6e73] dark:text-[#a1a1a6] text-sm group"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1E3A5F]/40 dark:bg-blue-400/40 group-hover:bg-[#1E3A5F] dark:group-hover:bg-blue-400 group-hover:scale-150 transition-all duration-300" />
            <span className="group-hover:text-[#1d1d1f] dark:group-hover:text-[#f5f5f7] transition-colors duration-300">
              {skill}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-[#f5f5f7] dark:bg-black transition-colors duration-500" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            What I bring to the table.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <SkillCard
            title="Engineering"
            subtitle="Foundation"
            skills={engineeringSkills}
            delay={0.2}
            isInView={isInView}
            icon={
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
          <SkillCard
            title="Product & Leadership"
            subtitle="Direction"
            skills={productSkills}
            delay={0.35}
            isInView={isInView}
            icon={
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-8 bg-white dark:bg-[#1c1c1e] rounded-3xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)] border border-[#e8e8ed] dark:border-[#2c2c2e]"
        >
          <h3 className="font-semibold text-[#86868b] text-xs uppercase tracking-[0.15em] mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.03 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#1E3A5F",
                  color: "#ffffff",
                  transition: { duration: 0.2 },
                }}
                className="bg-[#f5f5f7] dark:bg-[#2c2c2e] text-[#6e6e73] dark:text-[#a1a1a6] text-xs font-medium px-4 py-2 rounded-full cursor-default border border-[#e8e8ed] dark:border-[#38383a] transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const facts = [
  { label: "Currently", value: "Engineering Manager & PM", sub: "DoctusTech" },
  { label: "Experience", value: "7+ Years", sub: "Engineering → Leadership" },
  { label: "Education", value: "B.E. Computer Science", sub: "BIT, 2018" },
  { label: "Location", value: "Bengaluru, India", sub: null },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            The journey so far.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-16 items-start">
          <div className="md:col-span-2 space-y-6">
            {[
              "I started as an Android developer building healthcare apps from the ground up — writing the code, shipping the features, and debugging production issues at midnight. Over 7+ years at DoctusTech, I grew from individual contributor to Engineering Manager, leading cross-functional teams across AI, mobile, backend, and frontend.",
              <>What pulled me toward product and project leadership wasn&apos;t a pivot — it was a natural extension. The problems I found most energizing were never just technical: they were about <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">why</span> we were building something, for <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">whom</span>, and whether it actually worked in the real world.</>,
              "I also co-founded PublicPosts, a hyperlocal social platform that grew to 4,000+ community hubs — running the full stack: product, engineering, and growth. That experience taught me what no corporate job can: how to move fast with limited resources and keep shipping.",
              "Today I bring engineering credibility to every product conversation — I can read the code, challenge the estimates, and earn the trust of the engineers doing the work.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="text-[#6e6e73] dark:text-[#a1a1a6] text-lg leading-[1.7]"
              >
                {text}
              </motion.p>
            ))}
          </div>

          <div className="space-y-8">
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <p className="text-xs font-semibold text-[#86868b] uppercase tracking-[0.15em] mb-1.5">
                  {fact.label}
                </p>
                <p className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-base">{fact.value}</p>
                {fact.sub && <p className="text-[#6e6e73] dark:text-[#86868b] text-sm mt-0.5">{fact.sub}</p>}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

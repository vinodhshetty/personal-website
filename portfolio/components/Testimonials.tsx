"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "What sets Vinod apart is his ability to not only get the job done but also to guide and inspire the team towards achieving our common goals. His leadership and commitment have been instrumental in our success.",
    name: "Preeti Bhatt",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "Vinod is an exceptional leader who combines technical expertise with strong managerial skills to drive results. His combination of technical expertise, leadership acumen, and interpersonal skills is truly rare and would be a significant asset to any organization.",
    name: "Neha Ghosh",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "Vinodh is a fantastic team player. Their positive attitude, collaborative spirit, and excellent communication skills have fostered a productive and harmonious work environment. He has greatly contributed to the professional growth of the team.",
    name: "Ajinkya Choube",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "Vinodh is a strong engineer and operational leader who consistently brings the best solutions to the team. He is the go-to person for matters related to quality, product framework, and technical frameworks, particularly in Mobile Development.",
    name: "Mohammad Jazim",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "His problem-solving skill always amazes me. He understands the problem and tries to deliver the project on time, no matter how complex. His way of working towards achieving a goal inspired the team and kept us at the pace.",
    name: "Asfaque Ali Ansari",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "I have known Vinod for 8 years, his dedication, innovative mindset make him an exceptional leader and a true asset to any organisation.",
    name: "Sahana Gowda",
    role: "Long-time Associate",
  },
  {
    quote:
      "Vinod Shetty is an exceptional Lead with unmatched technical skills and a sharp mind for innovative solutions. His strategic leadership has consistently driven our projects to success. Even in remote work, his sense of humor keeps the team's spirits high.",
    name: "Abdul Jabbar",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "As an exceptional team leader, he guides the team with expertise and fosters a cooperative environment. Beyond technical prowess, Vinodh possesses remarkable conversation skills. With an unparalleled ability to lead, communicate, and contribute, Vinodh is an invaluable asset.",
    name: "Joel Philip",
    role: "Colleague, DoctusTech",
  },
  {
    quote:
      "You're an amazing friend and team player. Your knack for solving problems, leading with kindness, and your awesome photography skills really stand out. Thanks for always having our backs and being there for the team, no matter what.",
    name: "Lokesh Negi",
    role: "Colleague & Friend",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-32 px-6 bg-[#f5f5f7] dark:bg-black transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            What people say.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          <div className="bg-white dark:bg-[#1c1c1e] rounded-3xl p-10 md:p-14 border border-[#e8e8ed] dark:border-[#2c2c2e] shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)] min-h-[300px] flex flex-col justify-center relative overflow-hidden">
            <svg
              className="w-10 h-10 text-[#1E3A5F]/20 dark:text-blue-400/20 mb-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  opacity: active === i ? 1 : 0,
                  y: active === i ? 0 : 10,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className={active === i ? "" : "absolute inset-0 px-10 md:px-14 pt-24 pointer-events-none"}
              >
                <p className="text-[#1d1d1f] dark:text-[#f5f5f7] text-lg md:text-xl leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold text-base">
                    {t.name}
                  </p>
                  <p className="text-[#6e6e73] dark:text-[#86868b] text-sm">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  active === i
                    ? "w-8 bg-[#1E3A5F] dark:bg-blue-400"
                    : "w-2 bg-[#d2d2d7] dark:bg-[#48484a] hover:bg-[#86868b]"
                }`}
                aria-label={`Show testimonial from ${testimonials[i].name}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

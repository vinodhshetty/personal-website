"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

interface Hobby {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const hobbies: Hobby[] = [
  {
    title: "Photography",
    description:
      "Capturing moments through the lens — from street photography to landscapes. There's a unique joy in freezing a fleeting moment.",
    image: "/hobbies/photography.jpg",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Running",
    description:
      "Hitting the road clears the mind like nothing else. Whether it's a morning jog or a weekend long run, it keeps me grounded.",
    image: "/hobbies/running.jpg",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Travel",
    description:
      "Exploring new places, cultures, and cuisines. Every trip is a reminder of how much there is to see and learn.",
    image: "/hobbies/travel.jpg",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Reading",
    description:
      "From product strategy to sci-fi novels — books shape how I think about problems, people, and possibilities.",
    image: "/hobbies/reading.jpg",
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

function HobbyCard({
  hobby,
  index,
  isInView,
}: {
  hobby: Hobby;
  index: number;
  isInView: boolean;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: 0.2 + index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
      className="group bg-white dark:bg-[#1c1c1e] rounded-3xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.2)] border border-[#e8e8ed] dark:border-[#2c2c2e] hover:shadow-[0_12px_48px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)] transition-shadow duration-500"
    >
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1E3A5F]/10 to-[#2563eb]/10 dark:from-[#1E3A5F]/30 dark:to-[#2563eb]/30">
        {!imageError ? (
          <Image
            src={hobby.image}
            alt={hobby.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A5F] to-[#2563eb] rounded-2xl flex items-center justify-center opacity-60">
              {hobby.icon}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-gradient-to-br from-[#1E3A5F] to-[#2563eb] rounded-xl flex items-center justify-center shadow-sm">
            {hobby.icon}
          </div>
          <h3 className="font-bold text-[#1d1d1f] dark:text-[#f5f5f7] text-lg">
            {hobby.title}
          </h3>
        </div>
        <p className="text-[#6e6e73] dark:text-[#a1a1a6] text-sm leading-relaxed">
          {hobby.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="hobbies"
      className="py-32 px-6 bg-white dark:bg-[#0a0a0a] transition-colors duration-500"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-3">
            Beyond Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-16 tracking-tight">
            Things I enjoy.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, i) => (
            <HobbyCard key={hobby.title} hobby={hobby} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

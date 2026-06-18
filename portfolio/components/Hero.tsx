"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 bg-[#fbfbfd] dark:bg-black transition-colors duration-500"
    >
      {/* Ambient gradient orbs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/60 to-indigo-100/40 dark:from-blue-900/30 dark:to-indigo-900/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-purple-100/40 to-pink-100/30 dark:from-purple-900/20 dark:to-pink-900/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-50/50 to-blue-50/30 dark:from-cyan-900/15 dark:to-blue-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#6e6e73] dark:text-[#86868b] font-medium text-sm tracking-[0.2em] uppercase mb-6"
        >
          Bengaluru, India
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-6xl md:text-8xl font-bold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 leading-[1.05] tracking-tight"
        >
          Vinod S A
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-[#1E3A5F] via-[#2563eb] to-[#7c3aed] dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent animate-gradient"
        >
          Engineer → Engineering Manager → Product Leader
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg md:text-xl text-[#6e6e73] dark:text-[#86868b] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I build things. Now I help teams build better things.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            className="bg-[#1d1d1f] dark:bg-[#f5f5f7] text-white dark:text-[#1d1d1f] font-semibold px-8 py-3.5 rounded-full text-base hover:bg-[#1E3A5F] dark:hover:bg-blue-400 dark:hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(30, 58, 95, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-[#1d1d1f]/20 dark:border-[#f5f5f7]/20 text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold px-8 py-3.5 rounded-full text-base hover:border-[#1E3A5F] hover:text-[#1E3A5F] dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-24 flex justify-center"
        >
          <motion.a
            href="#about"
            aria-label="Scroll down"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-[#86868b]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

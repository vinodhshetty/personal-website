export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <p className="text-[#1E3A5F] font-semibold text-sm tracking-widest uppercase mb-4 opacity-0 animate-fade-in">
          Bengaluru, India
        </p>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
          Vinod S A
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-[#1E3A5F] font-semibold mb-6">
          Engineer → Engineering Manager → Product Leader
        </p>

        {/* Positioning statement */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build things. Now I help teams build better things.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-[#1E3A5F] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#16304f] transition-colors text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold px-8 py-3 rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-colors text-base"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex justify-center">
          <a href="#about" aria-label="Scroll down">
            <svg
              className="w-6 h-6 text-slate-400 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

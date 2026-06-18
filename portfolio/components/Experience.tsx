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
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Experience</h2>
        <div className="w-12 h-1 bg-[#1E3A5F] mb-10 rounded-full" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200 hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative sm:pl-14">
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full bg-[#1E3A5F] items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>

                <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{exp.role}</h3>
                      <p className="text-[#1E3A5F] font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-slate-400 text-sm font-medium whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{exp.highlight}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    link: null,
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
    link: null,
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
    link: null,
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
    link: null,
  },
];

const roleBadgeColors: Record<string, string> = {
  "Led": "bg-[#1E3A5F] text-white",
  "Built & Led": "bg-[#1E3A5F] text-white",
  "Founded & Built": "bg-blue-700 text-white",
  "Co-founded": "bg-slate-600 text-white",
  "Built": "bg-slate-700 text-white",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Featured Projects</h2>
        <div className="w-12 h-1 bg-[#1E3A5F] mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Role badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${
                    roleBadgeColors[project.role] ?? "bg-slate-200 text-slate-700"
                  }`}
                >
                  {project.role}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Outcomes */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-[#1E3A5F] mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-white border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

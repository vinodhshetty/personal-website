const engineeringSkills = [
  { label: "Engineering Management", icon: "👥" },
  { label: "Agile / Scrum", icon: "🔄" },
  { label: "Sprint Planning", icon: "📋" },
  { label: "Android / Kotlin / Java", icon: "📱" },
  { label: "System & Agentic Architecture", icon: "🏗️" },
  { label: "Backend — Node.js, REST APIs", icon: "⚙️" },
  { label: "Cloud — GCP, AWS, Firebase", icon: "☁️" },
  { label: "Databases — PostgreSQL, MongoDB, Redis", icon: "🗄️" },
  { label: "AI & LLM Integration", icon: "🤖" },
  { label: "CI/CD & DevOps", icon: "🚀" },
];

const productSkills = [
  { label: "Roadmap Planning", icon: "🗺️" },
  { label: "Feature Prioritization", icon: "🎯" },
  { label: "OKR Alignment", icon: "📊" },
  { label: "User Story Mapping", icon: "🗂️" },
  { label: "Product Analytics", icon: "📈" },
  { label: "0-to-1 Product Development", icon: "🌱" },
  { label: "Stakeholder Communication", icon: "🤝" },
  { label: "Multi-agent Orchestration", icon: "🧠" },
  { label: "RAG Pipelines", icon: "🔗" },
  { label: "Prompt Engineering", icon: "✍️" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-[#1E3A5F] mb-10 rounded-full" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Engineering column */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#1E3A5F] rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Engineering</h3>
                <p className="text-slate-500 text-sm">Foundation</p>
              </div>
            </div>
            <ul className="space-y-3">
              {engineeringSkills.map((skill) => (
                <li key={skill.label} className="flex items-center gap-3">
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-slate-700 text-sm">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product column */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Product & Leadership</h3>
                <p className="text-slate-500 text-sm">Direction</p>
              </div>
            </div>
            <ul className="space-y-3">
              {productSkills.map((skill) => (
                <li key={skill.label} className="flex items-center gap-3">
                  <span className="text-base">{skill.icon}</span>
                  <span className="text-slate-700 text-sm">{skill.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech stack tags */}
        <div className="mt-10 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <h3 className="font-semibold text-slate-700 text-sm uppercase tracking-widest mb-5">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Android", "Kotlin", "Java", "Swift", "KMM", "Jetpack Compose",
              "React.js", "TypeScript", "Node.js", "Firebase", "GCP", "AWS",
              "PostgreSQL", "MongoDB", "Redis", "OAuth 2.0", "JWT",
              "LLM Integration", "RAG", "Multi-agent Systems",
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

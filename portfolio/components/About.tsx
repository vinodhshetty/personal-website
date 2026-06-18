export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">About</h2>
        <div className="w-12 h-1 bg-[#1E3A5F] mb-10 rounded-full" />

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Bio */}
          <div className="md:col-span-2 space-y-5">
            <p className="text-slate-700 text-lg leading-relaxed">
              I started as an Android developer building healthcare apps from the ground up — writing the code,
              shipping the features, and debugging production issues at midnight. Over 7+ years at DoctusTech,
              I grew from individual contributor to Engineering Manager, leading cross-functional teams across
              AI, mobile, backend, and frontend.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              What pulled me toward product and project leadership wasn&apos;t a pivot — it was a natural extension.
              The problems I found most energizing were never just technical: they were about{" "}
              <span className="text-[#1E3A5F] font-medium">why</span> we were building something, for{" "}
              <span className="text-[#1E3A5F] font-medium">whom</span>, and whether it actually worked in the
              real world.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              I also co-founded PublicPosts, a hyperlocal social platform that grew to 4,000+ community hubs —
              running the full stack: product, engineering, and growth. That experience taught me what no
              corporate job can: how to move fast with limited resources and keep shipping.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              Today I bring engineering credibility to every product conversation — I can read the code,
              challenge the estimates, and earn the trust of the engineers doing the work.
            </p>
          </div>

          {/* Quick facts */}
          <div className="space-y-6">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Currently</p>
              <p className="text-slate-800 font-medium">Engineering Manager & PM</p>
              <p className="text-slate-500 text-sm">DoctusTech</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Experience</p>
              <p className="text-slate-800 font-medium">7+ Years</p>
              <p className="text-slate-500 text-sm">Engineering → Leadership</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Education</p>
              <p className="text-slate-800 font-medium">B.E. Computer Science</p>
              <p className="text-slate-500 text-sm">BIT, 2018</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-slate-800 font-medium">Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SkillsSection({ skills }) {
  return (
    <section id="skills" className="mt-16 scroll-mt-24">
      <h2 className="animate-fade-up text-2xl font-bold tracking-tight md:text-3xl">Technical Skills</h2>
      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`animate-fade-up rounded-full border border-slate-900/15 bg-white/75 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 dark:border-slate-300/20 dark:bg-slate-900/60 ${
              index < 5 ? `animation-delay-${index + 1}` : ""
            }`}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

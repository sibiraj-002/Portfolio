export default function AboutSection({ data }) {
  return (
    <section id="about" className="mt-16 scroll-mt-24">
      <h2 className="animate-fade-up text-2xl font-bold tracking-tight md:text-3xl">About Me</h2>
      <p className="animate-fade-up animation-delay-1 mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
        {data.summary}
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <article className="animate-fade-up animation-delay-1 rounded-2xl border border-slate-900/10 bg-white/70 p-5 shadow-sm dark:border-slate-300/20 dark:bg-slate-900/60">
          <p className="text-sm text-slate-500 dark:text-slate-400">Current Role</p>
          <p className="mt-2 font-semibold">
            {data.role} at {data.company}
          </p>
        </article>
        <article className="animate-fade-up animation-delay-2 rounded-2xl border border-slate-900/10 bg-white/70 p-5 shadow-sm dark:border-slate-300/20 dark:bg-slate-900/60">
          <p className="text-sm text-slate-500 dark:text-slate-400">Experience</p>
          <p className="mt-2 font-semibold">{data.experience} in this organization</p>
        </article>
        <article className="animate-fade-up animation-delay-3 rounded-2xl border border-slate-900/10 bg-white/70 p-5 shadow-sm dark:border-slate-300/20 dark:bg-slate-900/60">
          <p className="text-sm text-slate-500 dark:text-slate-400">Focus</p>
          <p className="mt-2 font-semibold">Handling and delivering web projects end to end</p>
        </article>
      </div>
    </section>
  );
}

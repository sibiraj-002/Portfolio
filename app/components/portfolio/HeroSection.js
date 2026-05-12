export default function HeroSection({ data }) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-8 shadow-xl backdrop-blur-sm md:p-12 dark:border-slate-200/20 dark:bg-slate-900/70">
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 animate-float-slow rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-56 w-56 animate-float-slow rounded-full bg-sky-400/20 blur-3xl [animation-delay:0.8s]" />

      <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">
        {data.role} at {data.company}
      </p>
      <h1 className="animate-fade-up animation-delay-1 mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
        Hi, I am {data.name}.
      </h1>
      <p className="animate-fade-up animation-delay-2 mt-5 max-w-3xl text-base text-slate-700 md:text-lg dark:text-slate-300">
        {data.headline}
      </p>
      <div className="animate-fade-up animation-delay-3 mt-7 flex flex-wrap gap-3">
        <a
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 dark:bg-slate-100 dark:text-slate-900"
          href="#projects"
        >
          View My Work
        </a>
        <a
          className="rounded-full border border-slate-900/20 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-900/5 dark:border-slate-300/30 dark:hover:bg-slate-100/10"
          href="#contact"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}

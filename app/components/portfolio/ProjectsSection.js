export default function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="mt-16 scroll-mt-24">
      <h2 className="animate-fade-up text-2xl font-bold tracking-tight md:text-3xl">Projects</h2>
      <p className="animate-fade-up animation-delay-1 mt-3 text-slate-700 dark:text-slate-300">
        Selected projects I have handled and delivered.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className={`animate-fade-up rounded-2xl border border-slate-900/10 bg-white/80 p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-300/20 dark:bg-slate-900/70 ${
              index < 4 ? `animation-delay-${index + 1}` : ""
            }`}
          >
            <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
            <p className="mt-3 text-slate-700 dark:text-slate-300">{project.description}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">{project.stack.join(" · ")}</p>
            <a
              className="mt-5 inline-flex rounded-full border border-slate-900/20 px-4 py-2 text-sm font-medium transition hover:bg-slate-900/5 dark:border-slate-300/30 dark:hover:bg-slate-100/10"
              href={project.url}
              rel="noreferrer"
              target="_blank"
            >
              Visit Website
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

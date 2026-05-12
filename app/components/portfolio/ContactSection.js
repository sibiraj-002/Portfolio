export default function ContactSection({ contact }) {
  return (
    <section id="contact" className="mt-16 scroll-mt-24 pb-8">
      <div className="animate-fade-up rounded-2xl border border-slate-900/10 bg-white/80 p-8 shadow-md dark:border-slate-300/20 dark:bg-slate-900/70">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Contact</h2>
        <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">
          I am available to discuss web development projects and collaboration opportunities.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            className="rounded-full bg-slate-800 border border-slate-900/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            className="rounded-full border border-slate-900/20 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-900/5 dark:border-slate-300/30 dark:hover:bg-slate-100/10"
            href={contact.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="rounded-full border border-slate-900/20 px-5 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-slate-900/5 dark:border-slate-300/30 dark:hover:bg-slate-100/10"
            href={contact.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

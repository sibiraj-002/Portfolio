export default function Navbar({ name }) {
  return (
    <header className="sticky top-4 z-20 mb-10 animate-fade-up rounded-2xl border border-slate-900/10 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-md dark:border-slate-200/20 dark:bg-slate-900/60">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-lg font-semibold tracking-tight">{name}</p>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700 dark:text-slate-300">
          <li>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="transition hover:text-slate-900 dark:hover:text-white" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

"use client";
import { useRef, useState } from "react";
import type { Project } from "@/data/projects";

const statTones = ["green", "yellow", "key"];

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="border-t-2 border-ink pt-3 text-sm font-bold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed">
        {items.map((x) => (
          <li key={x} className="flex gap-3">
            <span aria-hidden className="mt-[7px] h-2 w-2 shrink-0 rounded-[2px] bg-green" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProjectTabs({ projects }: { projects: Project[] }) {
  const [i, setI] = useState(0);
  const [touched, setTouched] = useState(false);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (n: number) => {
    const next = (n + projects.length) % projects.length;
    setI(next); setTouched(true);
    refs.current[next]?.focus();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); select(i + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); select(i - 1); }
    if (e.key === "Home") { e.preventDefault(); select(0); }
    if (e.key === "End") { e.preventDefault(); select(projects.length - 1); }
  };

  return (
    // The dark board the case studies sit on, like a game's dark mode.
    <div className="rounded-lg bg-ink p-4 md:p-8">
      {/* The tabs double as the overview: all four projects show with a one-line summary. */}
      <div role="tablist" aria-label="Projects" onKeyDown={onKey} className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, n) => (
          <button
            key={p.id} ref={(el) => { refs.current[n] = el; }} role="tab" id={`tab-${p.id}`}
            aria-selected={i === n} aria-controls={`panel-${p.id}`} tabIndex={i === n ? 0 : -1}
            onClick={() => select(n)}
            className={`press rounded-md px-4 py-3.5 text-left ${i === n ? "bg-green text-white" : "bg-key text-ink hover:bg-white"}`}
          >
            <span className="block text-xs font-bold uppercase tracking-wide">{p.tab}</span>
            <span className="mt-1 block text-xs leading-snug">{p.blurb}</span>
          </button>
        ))}
      </div>

      {projects.map((p, n) => (
        <div
          key={p.id} role="tabpanel" id={`panel-${p.id}`} aria-labelledby={`tab-${p.id}`} hidden={i !== n} tabIndex={0}
          className={`${i === n ? "block" : "hidden"} mt-4 rounded-lg bg-white p-6 md:p-10 ${touched ? "panel-in" : ""}`}
        >
          <div className="flex flex-wrap items-center gap-2">
            {p.flagship && <span className="tile-green rounded-sm border-2 px-3 py-1 text-xs font-bold">Flagship project</span>}
            {p.award && <span className="tile-yellow rounded-sm border-2 px-3 py-1 text-xs font-bold">★ {p.award}</span>}
            {p.context && <span className="tile-key rounded-sm border-2 px-3 py-1 text-xs font-bold">{p.context}</span>}
          </div>
          <h3 className="mt-5 font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl">{p.title}</h3>

          <dl className="mt-8 grid gap-7 lg:grid-cols-3 lg:gap-8">
            {([["Problem", p.problem], ["Approach", p.approach], ["Outcome", p.outcome]] as const).map(([k, v]) => (
              <div key={k}>
                <dt className="border-t-2 border-ink pt-3 text-sm font-bold">{k}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted">{v}</dd>
              </div>
            ))}
          </dl>

          {p.metrics.length > 0 && (
            <ul className="mt-8 grid gap-2 sm:grid-cols-3">
              {p.metrics.map((m, k) => (
                <li key={m.label} className={`tile-${statTones[k % 3]} rounded-sm border-2 p-5`}>
                  <p className="font-sans text-4xl font-bold leading-none tracking-tight md:text-5xl">{m.value}</p>
                  <p className="mt-3 text-sm font-medium">{m.label}</p>
                </li>
              ))}
            </ul>
          )}

          {(p.highlights || p.challenges) && (
            <div className="mt-8 grid gap-7 md:grid-cols-2 md:gap-8">
              {p.highlights && <List title="Technical highlights" items={p.highlights} />}
              {p.challenges && <List title="Engineering challenges" items={p.challenges} />}
            </div>
          )}

          <p className="mt-8 font-mono text-xs text-muted"><span className="font-bold text-ink">Built with</span> {p.stack.join(", ")}</p>

          {p.links && (
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {p.links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm font-bold underline decoration-green decoration-4 underline-offset-8 transition-colors hover:decoration-ink">{l.label} →</a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

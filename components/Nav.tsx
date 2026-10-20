"use client";
import { useEffect, useState } from "react";
import { nav, profile } from "@/data/profile";

export default function Nav() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-10">
        <a href="#top" className="shrink-0 font-serif text-xl font-bold tracking-tight">Anushka Singh</a>
        {/* Navigation links are styled as keyboard keys */}
        <ul className="hidden gap-1.5 xl:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} aria-current={active === n.id ? "true" : undefined}
                 className={`block rounded-md px-3.5 py-2.5 text-xs font-bold uppercase tracking-wide press ${active === n.id ? "bg-green text-white" : "bg-key text-ink hover:bg-ink hover:text-bg"}`}>
                {n.label}
              </a>
            </li>
          ))}
          {profile.links.resume && (
            <li>
              <a href={profile.links.resume} className="press tile-yellow block rounded-md border-2 px-3.5 py-2 text-xs font-bold uppercase tracking-wide">Resume</a>
            </li>
          )}
        </ul>
        <a href={`mailto:${profile.email}`} className="hidden shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-bg transition-colors hover:bg-green xl:block">Email me</a>
        <button className="rounded-md bg-key px-4 py-2 text-xs font-bold uppercase tracking-wide xl:hidden" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-line bg-bg px-5 pb-6 xl:hidden">
          <ul className="mt-2 grid gap-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="flex items-center gap-4 rounded-md bg-key px-4 py-3.5 text-sm font-bold uppercase tracking-wide">
                  <span className="font-mono text-xs text-muted">{n.n}</span>{n.label}
                </a>
              </li>
            ))}
            {profile.links.resume && (
              <li>
                <a href={profile.links.resume} onClick={() => setOpen(false)} className="tile-yellow flex items-center gap-4 rounded-md border-2 px-4 py-3.5 text-sm font-bold uppercase tracking-wide">
                  <span className="font-mono text-xs">↓</span>Resume
                </a>
              </li>
            )}
          </ul>
          <a href={`mailto:${profile.email}`} className="mt-4 block rounded-full bg-ink px-5 py-3 text-center text-sm font-bold text-bg">Email me</a>
        </div>
      )}
    </header>
  );
}

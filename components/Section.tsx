import type { ReactNode } from "react";

// Editorial layout: a sticky numbered tile and title on the left, content on the right.
export default function Section({ id, index, title, children }: {
  id: string; index: string; title: ReactNode; children: ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-line px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <span className="tile-green flex h-8 w-10 items-center justify-center rounded-sm border-2 font-mono text-xs">{index}</span>
          <h2 id={`${id}-h`} className="mt-5 font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">{title}</h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

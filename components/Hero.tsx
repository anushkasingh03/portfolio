import type { CSSProperties } from "react";
import Portrait from "./Portrait";
import { profile } from "@/data/profile";

const d = (ms: number) => ({ "--d": `${ms}ms` } as CSSProperties);

// The name as a solved board: every letter in the right spot.
const ROWS = ["anushka", "singh"];
const press = "press rounded-full px-7 py-3.5 text-sm font-bold";

export function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") ? <em key={i}>{part.slice(1, -1)}</em> : <span key={i}>{part}</span>
      )}
    </>
  );
}

export default function Hero() {
  let n = 0;
  return (
    <section id="top" aria-labelledby="hero-title" className="px-5 pb-20 pt-12 md:px-10 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="rise inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm" style={d(0)}>
            <span aria-hidden className="h-2.5 w-2.5 rounded-sm bg-green" />{profile.status}
          </p>

          <h1 id="hero-title" className="mt-8 max-w-[640px]">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="grid grid-cols-7 gap-1.5 md:gap-2">
              {ROWS.flatMap((row, r) =>
                [...row].map((letter, i) => (
                  <span
                    key={`${r}${i}`}
                    className="tile-green tile-flip tile-hover flex aspect-square items-center justify-center border-2 font-sans text-[clamp(1.5rem,6.5vw,3.5rem)] font-bold uppercase"
                    style={{ ...d(100 + n++ * 90), gridColumn: i + 1, gridRow: r + 1 }}
                  >
                    {letter}
                  </span>
                ))
              )}
            </span>
          </h1>

          <p className="rise mt-8 text-sm font-bold uppercase tracking-[0.12em] md:text-base" style={d(1000)}>{profile.role}</p>
          <p className="rise mt-1.5 text-sm text-muted md:text-base" style={d(1050)}>{profile.subtitle}</p>
          <p className="rise mt-6 max-w-xl font-serif text-2xl leading-snug md:text-3xl" style={d(1100)}>
            <Emphasis text={profile.statement} />
          </p>
          <p className="rise mt-4 max-w-lg leading-relaxed" style={d(1150)}>{profile.supporting}</p>
          <div className="rise mt-10 flex flex-wrap items-center gap-x-4 gap-y-4" style={d(1200)}>
            <a href="#projects" className={`${press} bg-ink text-bg hover:bg-green`}>View projects</a>
            {profile.links.resume && (
              <a href={profile.links.resume} className={`${press} tile-yellow border-2`}>Resume</a>
            )}
            <a href={`mailto:${profile.email}`} className="press px-3 py-2 text-sm font-bold underline decoration-green decoration-4 underline-offset-8 hover:decoration-ink">Get in touch →</a>
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-[18rem] pb-4 pr-4 md:max-w-sm lg:ml-auto lg:mr-0" style={d(300)}>
          <Portrait />
        </div>
      </div>
    </section>
  );
}

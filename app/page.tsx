import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SkillsBoard from "@/components/SkillsBoard";
import ProjectTabs from "@/components/ProjectTabs";
import { profile, summary } from "@/data/profile";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { papers } from "@/data/papers";

// Contact buttons, in this order. Empty links are skipped.
const contactLinks = (["linkedin", "github"] as const)
  .map((k) => [k, profile.links[k]] as const)
  .filter(([, v]) => v);
const btn = "press rounded-full px-7 py-3.5 text-sm font-bold";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="about" index="01" title="About">
          <p className="max-w-2xl font-serif text-3xl font-bold leading-tight tracking-tight md:text-4xl">{summary.line}</p>
          <div className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed">
            {summary.paragraphs.map((t) => <p key={t}>{t}</p>)}
          </div>
        </Section>

        <Section id="projects" index="02" title="Projects">
          <ProjectTabs projects={projects} />
        </Section>

        <Section id="skills" index="03" title="Skills">
          <SkillsBoard />
        </Section>

        <Section id="experience" index="04" title="Experience">
          <ol className="border-l-2 border-line pl-8 md:pl-10">
            {experience.map((r) => (
              <li key={r.org + r.title} className="relative pb-14 last:pb-0">
                <span aria-hidden className="tile-green absolute -left-[43px] top-1 h-4 w-4 rounded-sm border-2 md:-left-[51px]" />
                <p className="tile-key inline-block rounded-sm border-2 px-3 py-1 text-xs font-bold">{r.dates}</p>
                <h3 className="mt-3 font-serif text-2xl font-bold leading-snug tracking-tight md:text-[1.7rem]">{r.title}</h3>
                <p className="mt-1 text-muted">{r.org} · {r.place}</p>
                {r.impact && (
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {r.impact.map((x) => <li key={x} className="tile-yellow rounded-sm border-2 px-3 py-1 text-xs font-bold">{x}</li>)}
                  </ul>
                )}
                {r.points.length > 0 && (
                  <ul className="mt-5 max-w-prose space-y-3 leading-relaxed">
                    {r.points.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span aria-hidden className="mt-[9px] h-2 w-2 shrink-0 rounded-[2px] bg-line" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section id="papers" index="05" title="Papers">
          <ul>
            {papers.map((p) => (
              <li key={p.title} className="border-t border-line py-9 first:border-t-0 first:pt-0">
                <p className="tile-key inline-block rounded-sm border-2 px-3 py-1 text-xs font-bold">{p.venue}, {p.year}</p>
                <h3 className="mt-3 max-w-prose font-serif text-2xl font-bold leading-snug tracking-tight">{p.title}</h3>
                <p className="mt-4 max-w-prose leading-relaxed">{p.summary}</p>
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                  <a href={p.href} className="press text-sm font-bold underline decoration-green decoration-4 underline-offset-8 hover:decoration-ink">Read the paper →</a>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="education" index="06" title="Education">
          <ul>
            {education.map((s) => (
              <li key={s.school + s.degree} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-line py-8 first:border-t-0 first:pt-0 md:grid-cols-[4.5rem_1fr] md:gap-7">
                <span aria-hidden className="tile-yellow flex h-14 w-14 items-center justify-center rounded-md border-2 font-sans text-lg font-bold md:h-[4.5rem] md:w-[4.5rem] md:text-xl">{s.mark}</span>
                <div>
                  <h3 className="font-serif text-2xl font-bold leading-snug tracking-tight">{s.degree}</h3>
                  <p className="mt-1 italic text-muted">{s.school} · {s.dates}</p>
                  <p className="mt-4 max-w-prose text-sm leading-relaxed">
                    <span className="font-bold">Relevant coursework: </span>{s.coursework.join(", ")}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="contact" index="07" title="Let&rsquo;s connect.">
          <a href={`mailto:${profile.email}`} className="inline-block max-w-full break-words font-serif text-[clamp(1.2rem,5.4vw,3rem)] font-bold leading-tight underline decoration-green decoration-4 underline-offset-8 transition-colors hover:decoration-ink">
            {profile.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className={`${btn} bg-ink text-bg hover:bg-green`}>Email me</a>
            {contactLinks.map(([k, v]) => (
              <a key={k} href={v} className={`${btn} border-2 border-ink capitalize hover:bg-key`}>{k === "linkedin" ? "LinkedIn" : "GitHub"}</a>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-line px-5 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl justify-between text-sm text-muted">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top" className="press font-bold hover:text-ink">Back to top</a>
        </div>
      </footer>
    </>
  );
}

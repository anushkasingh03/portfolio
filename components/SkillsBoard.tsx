"use client";
import { useState } from "react";
import { skills } from "@/data/profile";

// Round-robin across groups so neighbours rarely share a category.
const mixed = (() => {
  const out: { label: string }[] = [];
  const max = Math.max(...skills.map((g) => g.items.length));
  for (let i = 0; i < max; i++)
    for (let k = 0; k < skills.length; k++) {
      const g = skills[(k + i) % skills.length];
      if (g.items[i]) out.push({ label: g.items[i] });
    }
  return out;
})();

export default function SkillsBoard() {
  const [grouped, setGrouped] = useState(true);
  const [touched, setTouched] = useState(false); // animate only after a click, not on load
  const toggle = () => { setGrouped(!grouped); setTouched(true); };
  const flip = touched ? "tile-flip" : "";

  return (
    <div>
      {grouped ? (
        <ul key="grouped" className="space-y-2.5">
          {skills.map((g, i) => (
            <li
              key={g.title}
              style={{ "--d": `${i * 110}ms` } as React.CSSProperties}
              className={`tile-${g.tone} ${flip} grid gap-3 rounded-md border-2 p-5 md:grid-cols-[13rem_1fr] md:gap-6 md:p-6`}
            >
              <p className="text-sm font-bold uppercase leading-snug tracking-wide md:pt-1">{g.title}</p>
              <ul className="flex flex-wrap gap-2">
                {g.items.map((x) => (
                  <li key={x} className="rounded-sm bg-white/30 px-3 py-1.5 text-sm font-bold">{x}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <ul key="tiles" className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
          {mixed.map((s, i) => (
            <li
              key={s.label}
              style={{ "--d": `${i * 30}ms` } as React.CSSProperties}
              className={`tile-key skill-tile ${flip} flex min-h-[4.25rem] cursor-default items-center justify-center rounded-md border-2 px-2 py-3 text-center text-xs font-bold uppercase tracking-wide md:text-sm`}
            >
              {s.label}
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        aria-pressed={!grouped}
        onClick={toggle}
        className="press mt-6 rounded-full border-2 border-ink px-7 py-3 text-sm font-bold hover:bg-ink hover:text-bg"
      >
        {grouped ? "Shuffle tiles" : "Group tiles"}
      </button>
    </div>
  );
}

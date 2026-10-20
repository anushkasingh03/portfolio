"use client";
import { useEffect, useRef, useState } from "react";

// Photo with a green tile offset behind it. If the file is missing, shows "AS" tiles instead.
export default function Portrait() {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  // Catches a missing file whose error fired before hydration.
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="relative">
      <div aria-hidden className="tile-yellow absolute inset-0 translate-x-3 translate-y-3 rounded-md border-2 md:translate-x-4 md:translate-y-4" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-md border-2 border-ink bg-white">
        {failed ? (
          <div className="flex h-full items-center justify-center gap-2" aria-label="Anushka Singh">
            {["A", "S"].map((l) => (
              <span key={l} className="tile-green flex h-20 w-20 items-center justify-center border-2 font-sans text-5xl font-bold">{l}</span>
            ))}
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            ref={ref}
            src="/images/anushka.jpg"
            alt="Portrait of Anushka Singh"
            width={768}
            height={1024}
            fetchPriority="high"
            onError={() => setFailed(true)}
            className="h-full w-full object-cover object-[50%_30%]"
          />
        )}
      </div>
    </div>
  );
}

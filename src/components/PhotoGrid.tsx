"use client";

import type { Photo } from "@/content/music";
import { LightboxProvider, useLightbox } from "./Lightbox";

/** Performance photos. Clicking one opens the full-screen viewer at that photo. */
export function PhotoGrid({ items }: { items: Photo[] }) {
  return (
    <LightboxProvider>
      <Grid items={items} />
    </LightboxProvider>
  );
}

function Grid({ items }: { items: Photo[] }) {
  const open = useLightbox();
  return (
    <div className="grid">
      {items.map((p, i) => (
        <button key={p.src} type="button" className="zoom" aria-label={`View larger: ${p.alt}`} onClick={() => open(items, i)}>
          <img src={p.src} alt={p.alt} loading="lazy" style={p.focus ? { objectPosition: p.focus } : undefined} />
        </button>
      ))}
    </div>
  );
}

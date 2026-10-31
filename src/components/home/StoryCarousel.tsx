"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/Icons";

// Horizontal scroll-snap row with prev/next buttons beside the heading.
export function StoryCarousel({ heading, children }: { heading: ReactNode; children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? el.clientWidth) + 16), behavior: "smooth" });
  };

  const arrow =
    "grid h-8 w-8 place-items-center rounded-full border border-black/10 bg-white text-night transition-colors hover:border-brand hover:text-brand disabled:opacity-35 disabled:hover:border-black/10 disabled:hover:text-night";

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        {heading}
        <div className="flex shrink-0 gap-2">
          <button type="button" aria-label="Previous stories" className={arrow} onClick={() => scroll(-1)} disabled={!canPrev}>
            <ChevronLeftIcon size={16} />
          </button>
          <button type="button" aria-label="Next stories" className={arrow} onClick={() => scroll(1)} disabled={!canNext}>
            <ChevronRightIcon size={16} />
          </button>
        </div>
      </div>
      <ul
        ref={track}
        onScroll={update}
        className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </ul>
    </>
  );
}

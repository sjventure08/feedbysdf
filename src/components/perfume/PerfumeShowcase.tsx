"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import type { Perfume } from "@/data/perfumes";

// A tall section with a sticky screen inside it. Each perfume gets one
// viewport of scroll; as you pass through, the background, text colours,
// details and bottle all switch to the next perfume.
export function PerfumeShowcase({ perfumes }: { perfumes: Perfume[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      setEntered(rect.top < vh * 0.5 && rect.bottom > vh * 0.5);
      const scrollable = rect.height - vh;
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.9999);
      setActive(Math.floor(progress * perfumes.length));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [perfumes.length]);

  const goTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const step = (section.offsetHeight - window.innerHeight) / perfumes.length;
    window.scrollTo({ top: section.offsetTop + step * index + step * 0.35, behavior: "smooth" });
  };

  const current = perfumes[active];
  const t = current.theme;
  const themeVars = {
    "--p-bg": t.bg,
    "--p-ink": t.ink,
    "--p-muted": t.muted,
    "--p-accent": t.accent,
    "--p-on-accent": t.onAccent,
    "--p-glow": t.glow,
  } as CSSProperties;

  return (
    <section
      ref={sectionRef}
      aria-label="Our fragrances"
      className="relative"
      style={{ height: `${perfumes.length * 100 + 50}vh` }}
    >
      <div
        style={themeVars}
        className="perfume-stage sticky top-0 flex h-svh w-full items-center overflow-hidden bg-[var(--p-bg)] text-[var(--p-ink)]"
      >
        {/* Oversized name watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {perfumes.map((p, i) => (
            <span
              key={p.slug}
              className="perfume-anim absolute whitespace-nowrap font-serif text-[22vw] leading-none text-[var(--p-ink)] md:text-[16vw]"
              style={{
                opacity: entered && i === active ? 0.06 : 0,
                transform: `translateX(${(i - active) * 12}%)`,
              }}
            >
              {p.name.split(" ")[0]}
            </span>
          ))}
        </div>

        <div className="relative mx-auto grid h-full w-full max-w-6xl grid-rows-[1fr_auto] items-center gap-4 px-6 py-10 md:grid-cols-2 md:grid-rows-1 md:gap-12 md:px-10">
          {/* Details (left on desktop, below the bottle on mobile) */}
          <div className="relative order-2 min-h-[17rem] md:order-1 md:min-h-[26rem]">
            {perfumes.map((p, i) => {
              const state = !entered ? "below" : i === active ? "in" : i < active ? "above" : "below";
              return (
                <article
                  key={p.slug}
                  aria-hidden={state !== "in"}
                  className="perfume-anim absolute inset-0 flex flex-col justify-center"
                  style={{
                    opacity: state === "in" ? 1 : 0,
                    transform: state === "in" ? "none" : state === "above" ? "translateY(-2.5rem)" : "translateY(2.5rem)",
                    pointerEvents: state === "in" ? "auto" : "none",
                    transitionDelay: state === "in" ? "180ms" : "0ms",
                  }}
                >
                  <p className="text-xs font-medium uppercase tracking-[0.3em] text-[var(--p-muted)]">
                    {String(i + 1).padStart(2, "0")} / {String(perfumes.length).padStart(2, "0")} · {p.family}
                  </p>
                  <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">{p.name}</h2>
                  <p className="mt-1 text-lg text-[var(--p-muted)] md:text-xl">{p.tamilName}</p>
                  <p className="mt-4 font-serif text-lg italic md:text-xl">{p.tagline}</p>
                  <p className="mt-3 hidden max-w-md text-[var(--p-muted)] sm:block">{p.description}</p>

                  <dl className="mt-5 grid max-w-md grid-cols-3 gap-3 border-t border-[color-mix(in_srgb,var(--p-ink)_20%,transparent)] pt-4 text-sm">
                    {(["top", "heart", "base"] as const).map((k) => (
                      <div key={k}>
                        <dt className="text-[0.65rem] uppercase tracking-[0.25em] text-[var(--p-accent)]">{k}</dt>
                        <dd className="mt-1 leading-snug">{p.notes[k]}</dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={p.href}
                      tabIndex={state === "in" ? 0 : -1}
                      className="rounded-full bg-[var(--p-accent)] px-6 py-3 text-sm font-semibold tracking-wide text-[var(--p-on-accent)] transition hover:opacity-90"
                    >
                      Shop {p.name}
                    </a>
                    <span className="text-sm text-[var(--p-muted)]">
                      {p.price} · {p.size}
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottle (right on desktop, top on mobile) */}
          <div className="relative order-1 h-full min-h-0 md:order-2 md:h-[80vh]">
            <div
              aria-hidden
              className="perfume-anim absolute left-1/2 top-1/2 aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--p-glow)] opacity-60 blur-3xl"
            />
            {perfumes.map((p, i) => {
              const state = !entered ? "below" : i === active ? "in" : i < active ? "above" : "below";
              return (
                <div
                  key={p.slug}
                  className="perfume-anim absolute inset-0"
                  style={{
                    opacity: state === "in" ? 1 : 0,
                    transform:
                      state === "in"
                        ? "none"
                        : state === "above"
                          ? "translateY(-30%) scale(0.85) rotate(-8deg)"
                          : "translateY(35%) scale(0.9) rotate(6deg)",
                  }}
                >
                  <Image
                    src={p.image}
                    alt={`${p.name} perfume bottle, ${p.size}`}
                    fill
                    sizes="(min-width: 768px) 45vw, 80vw"
                    loading={i === 0 ? "eager" : "lazy"}
                    className="object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Progress dots */}
        <nav
          aria-label="Choose a fragrance"
          className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-3 md:right-8"
        >
          {perfumes.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={p.name}
              aria-current={i === active}
              className="perfume-anim h-2.5 w-2.5 rounded-full border border-[var(--p-ink)]"
              style={{
                background: i === active ? "var(--p-ink)" : "transparent",
                transform: i === active ? "scale(1.3)" : "none",
              }}
            />
          ))}
        </nav>
      </div>
    </section>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";

// Inner-page banner: breadcrumb, title and intro on a warm cream band,
// with an optional photo on the right.
export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
  imageAlt = "",
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  image?: string;
  imageAlt?: string;
  note?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6ec] to-sand">
      <div aria-hidden className="absolute -top-20 right-0 h-80 w-[520px] rounded-full bg-[#ffe3c7]/60 blur-3xl" />
      <Container
        className={`relative grid items-center gap-10 py-12 sm:py-16 ${image ? "lg:grid-cols-[1.2fr_0.8fr]" : ""}`}
      >
        <div className="animate-fade-up">
          <nav aria-label="Breadcrumb" className="text-[11px] font-semibold tracking-[0.18em] text-night/60 uppercase">
            <Link href="/" className="hover:text-brand">Home</Link>
            <span className="mx-2 text-brand">•</span>
            <span className="text-brand">{eyebrow}</span>
          </nav>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] font-bold tracking-tight text-night sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-night/70">{intro}</p>
        </div>
        {image && (
          <div className="relative mx-auto w-full max-w-sm rotate-2 animate-fade-up [animation-delay:150ms]">
            <Photo
              src={image}
              alt={imageAlt}
              sizes="(min-width: 1024px) 380px, 80vw"
              preload
              className="aspect-[4/3] rounded-2xl border-[6px] border-white shadow-xl"
            />
            {note && (
              <span className="absolute -bottom-5 -left-4 -rotate-6 rounded-sm bg-[#fdf6e9] px-3 py-2 font-hand text-xl leading-none text-night shadow-lg">
                {note}
              </span>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}

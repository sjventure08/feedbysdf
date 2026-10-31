import type { Metadata } from "next";
import { JoinCta } from "@/components/home/JoinCta";
import { StatsStrip } from "@/components/home/StatsStrip";
import { Stories } from "@/components/home/Stories";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { IMPACT } from "@/data/pages";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Meals served, communities reached and the people behind the numbers.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Impact"
        title={
          <>
            Every meal is a moment of <span className="text-brand">hope</span>
          </>
        }
        intro="Behind each number is a family who could face the day without worrying about their next meal."
        image={IMPACT.image}
        imageAlt="A family sharing a meal served by Feed bySDF"
        note="Good Food, Stronger People"
      />

      <div className="-mt-2 pb-4">
        <StatsStrip />
      </div>

      {/* Promise */}
      <section className="bg-surface-blue py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Our Promise to Donors</h2>
          <p className="mt-1 text-night/65">Your trust is the most important ingredient.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT.promises.map((p, i) => (
              <li key={p.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                <span className={`font-hand text-3xl ${i % 2 ? "text-forest" : "text-brand"}`}>0{i + 1}</span>
                <h3 className="mt-2 font-serif text-lg font-bold text-night">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-night/65">{p.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">From the Ground</h2>
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {IMPACT.galleryImages.map((src, i) => (
              <li key={src} className={i % 2 ? "rotate-1" : "-rotate-1"}>
                <Photo
                  src={src}
                  alt="Feed bySDF meal service"
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="aspect-square rounded-xl border-[5px] border-white shadow-lg"
                />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Stories />
      <JoinCta />
    </>
  );
}

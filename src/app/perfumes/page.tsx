import type { Metadata } from "next";
import { PerfumeShowcase } from "@/components/perfume/PerfumeShowcase";
import { perfumes } from "@/data/perfumes";

export const metadata: Metadata = {
  title: "Fragrances",
  description: "Japaa — sacred nature, bottled. Jasmine, sandalwood, rose and vetiver.",
};

export default function PerfumesPage() {
  return (
    <>
      <section className="flex min-h-[70svh] flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-muted">Japaa · Sacred Nature</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">The Collection</h1>
        <p className="mt-4 max-w-md text-muted">Scroll to meet each fragrance.</p>
      </section>
      <PerfumeShowcase perfumes={perfumes} />
      <section className="flex min-h-[50svh] items-center justify-center px-6 text-center">
        <p className="font-serif text-3xl">More fragrances coming soon.</p>
      </section>
    </>
  );
}

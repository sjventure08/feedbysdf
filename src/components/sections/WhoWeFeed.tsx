import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BENEFICIARIES } from "@/data/beneficiaries";

export function WhoWeFeed() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Who we feed"
            title="A meal is more than food. It's being remembered."
            intro="We serve the people most likely to be missed: those who can't cook, can't afford to, or have no one to cook for them."
          />
          <blockquote className="border-l-2 border-turmeric pl-5 font-serif text-xl leading-snug text-ink italic">
            “Anna daanam maha daanam.” Giving food is the greatest gift.
          </blockquote>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFICIARIES.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-leaf/30 hover:shadow-[0_12px_32px_-12px_rgba(194,65,12,0.25)]">
                <span className="font-serif text-sm text-leaf">0{i + 1}</span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

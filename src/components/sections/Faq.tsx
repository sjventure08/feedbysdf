import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/data/faq";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-leaf-soft py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions donors ask us." />
        </Reveal>
        <Reveal delay={100}>
          <Accordion items={FAQ} />
        </Reveal>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatItem } from "@/components/ui/StatItem";
import { MEALS_PER_DAY, MEALS_PER_MONTH, MEALS_PER_YEAR, PROGRAMME } from "@/data/programme";
import { formatLakh, formatNumber } from "@/lib/meals";

const STATS = [
  { value: formatNumber(PROGRAMME.beneficiaries), label: "people fed every day" },
  { value: formatNumber(MEALS_PER_DAY), label: "meals cooked daily" },
  { value: formatNumber(MEALS_PER_MONTH), label: "meals every month" },
  { value: formatLakh(MEALS_PER_YEAR), label: "meals a year" },
];

export function ImpactStats() {
  return (
    <section id="impact" className="scroll-mt-16 bg-leaf-dark py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="The scale of it"
            title="Every day, without a break."
            intro="Two freshly cooked meals, served with care, every single day of the year."
          />
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="border-l border-white/15 pl-5">
              <StatItem {...stat} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

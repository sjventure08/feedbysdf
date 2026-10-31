import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COST_PER_PERSON_PER_DAY, MONTHLY_COST, PROGRAMME } from "@/data/programme";
import { formatINR, formatLakh } from "@/lib/meals";

const WAYS = [
  {
    eyebrow: "Monthly",
    title: "Adopt a person",
    price: formatINR(COST_PER_PERSON_PER_DAY * PROGRAMME.daysPerMonth),
    unit: "/ month",
    body: "Cover every meal for one person, every day. Cancel any time.",
    cta: { href: "/#donate", label: "Give monthly" },
    featured: false,
  },
  {
    eyebrow: "Occasions",
    title: "Sponsor a full day",
    price: formatINR(PROGRAMME.dailyCost),
    unit: "/ day",
    body: `Feed all ${PROGRAMME.beneficiaries.toLocaleString("en-IN")} people for a birthday, anniversary, festival or in memory of a loved one.`,
    cta: { href: "/sponsor-a-day", label: "Choose a date" },
    featured: true,
  },
  {
    eyebrow: "Companies",
    title: "CSR partnership",
    price: `₹${formatLakh(MONTHLY_COST)}`,
    unit: "/ month",
    body: "Fund the whole programme for a month with full reporting and site visits.",
    cta: { href: "/csr", label: "Enquire" },
    featured: false,
  },
];

export function WaysToGive() {
  return (
    <section id="ways-to-give" className="scroll-mt-16 bg-white py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Ways to give"
            title="Choose how you'd like to help."
          />
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
          {WAYS.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <article
                className={`relative flex h-full flex-col rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  w.featured
                    ? "bg-leaf text-white shadow-[0_24px_48px_-20px_rgba(124,45,18,0.55)]"
                    : "border border-line bg-cream"
                }`}
              >
                {w.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-turmeric px-3 py-1 text-xs font-semibold text-leaf-dark">
                    Most meaningful
                  </span>
                )}
                <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${w.featured ? "text-turmeric" : "text-leaf"}`}>
                  {w.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold">{w.title}</h3>
                <p className="mt-5">
                  <span className="font-serif text-4xl font-semibold">{w.price}</span>
                  <span className={`ml-1 text-sm ${w.featured ? "text-white/60" : "text-muted"}`}>
                    {w.unit}
                  </span>
                </p>
                <p className={`mt-4 flex-1 leading-relaxed ${w.featured ? "text-white/75" : "text-muted"}`}>
                  {w.body}
                </p>
                <ButtonLink
                  href={w.cta.href}
                  variant={w.featured ? "primary" : "ghost"}
                  className="mt-8 w-full"
                >
                  {w.cta.label}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

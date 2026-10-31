import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROMISES = [
  {
    title: "Receipts for every gift",
    body: "An emailed receipt for every donation, with your PAN for tax records.",
  },
  {
    title: "Monthly impact updates",
    body: "Meals served, photos from the kitchen and spending against budget.",
  },
  {
    title: "Open to visit",
    body: "Donors and CSR partners are welcome to visit the kitchen and serving points.",
  },
  {
    title: "Secure payments",
    body: "Processed by Razorpay. We never see or store your card details.",
  },
];

export function Accountability() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our promise"
            title="Transparent by design."
            intro="You trust us with your generosity. Here's how we earn it."
          />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PROMISES.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="bg-white p-7">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden className="text-leaf">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 12.5l2.5 2.5L16 9.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="mt-4 font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

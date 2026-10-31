import { DonationCard } from "@/components/donate/DonationCard";
import { Container } from "@/components/ui/Container";
import { COST_PER_PERSON_PER_DAY, MEALS_PER_DAY, PROGRAMME } from "@/data/programme";
import { formatNumber } from "@/lib/meals";

export function Hero() {
  return (
    <section id="donate" className="relative overflow-hidden bg-leaf text-white">
      <div aria-hidden className="grain absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-turmeric/20 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-48 -left-32 h-[420px] w-[420px] rounded-full bg-[#ea580c]/60 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-28">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-turmeric" />
            Annadanam · Serving {formatNumber(MEALS_PER_DAY)} meals every day
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            No one should go to sleep{" "}
            <em className="text-turmeric not-italic">hungry.</em>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Food for Dignity serves warm lunch and dinner to{" "}
            {formatNumber(PROGRAMME.beneficiaries)} people every day, from the elderly living alone
            to families on daily wages. Just ₹{COST_PER_PERSON_PER_DAY} feeds one person for a whole
            day.
          </p>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8">
            {[
              [`₹${COST_PER_PERSON_PER_DAY}`, "feeds one person a day"],
              [formatNumber(PROGRAMME.beneficiaries), "people fed daily"],
              ["365", "days a year"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-2xl font-semibold text-white sm:text-3xl">{value}</dd>
                <dd className="mt-1 text-xs leading-snug text-white/60 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="animate-fade-up [animation-delay:150ms]">
          <DonationCard />
        </div>
      </Container>
    </section>
  );
}

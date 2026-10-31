import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BUDGET } from "@/data/budget";
import { COST_PER_MEAL, PROGRAMME } from "@/data/programme";
import { formatINR } from "@/lib/meals";

export function BudgetBreakdown() {
  const total = BUDGET.reduce((sum, item) => sum + item.amount, 0);
  const max = Math.max(...BUDGET.map((b) => b.amount));
  const mismatch = total !== PROGRAMME.dailyCost;

  return (
    <section id="budget" className="scroll-mt-16 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            eyebrow="Where your money goes"
            title="Every rupee, accounted for."
            intro={`It costs ${formatINR(PROGRAMME.dailyCost)} a day to run the kitchen, about ${formatINR(Math.round(COST_PER_MEAL))} per meal. Here is the daily breakdown.`}
          />
          <div className="rounded-2xl bg-leaf p-6 text-white">
            <p className="text-sm text-white/70">Cost per meal</p>
            <p className="mt-1 font-serif text-4xl font-semibold text-turmeric">
              ≈ {formatINR(Math.round(COST_PER_MEAL))}
            </p>
            <p className="mt-2 text-sm text-white/70">
              Ingredients, cooking, packing and delivery included.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
            <ul className="space-y-4">
              {BUDGET.map((item) => (
                <li key={item.label}>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-ink">{item.label}</span>
                    <span className="font-medium tabular-nums text-ink">{formatINR(item.amount)}</span>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-leaf-soft">
                    <div
                      className="h-full rounded-full bg-leaf"
                      style={{ width: `${(item.amount / max) * 100}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-baseline justify-between border-t border-line pt-5">
              <span className="font-semibold text-ink">Total per day</span>
              <span className="font-serif text-2xl font-semibold tabular-nums text-leaf">
                {formatINR(total)}
                {mismatch && (
                  <span className="ml-2 align-middle text-xs font-sans font-semibold text-red-700">
                    [CONFIRM]
                  </span>
                )}
              </span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

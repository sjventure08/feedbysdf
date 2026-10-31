import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENU } from "@/data/menu";

const TIMES: Record<string, string> = {
  Lunch: "12:00 – 2:00 pm",
  Dinner: "7:00 – 8:30 pm",
  Doorstep: "Daily delivery",
};

export function MealMenu() {
  return (
    <section id="menu" className="scroll-mt-16 bg-turmeric-soft py-20 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="On the plate"
            title="Simple, wholesome, cooked fresh each day."
            intro="Balanced South Indian meals made in a hygienic kitchen and served hot."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {MENU.map((m, i) => (
            <Reveal key={m.meal} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl font-semibold text-leaf">{m.meal}</h3>
                  {/* TODO(SDF): confirm serving times */}
                  <span className="text-xs font-medium text-muted">{TIMES[m.meal]}</span>
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {m.items.map((item) => (
                    <li key={item} className="flex gap-3 text-ink">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turmeric" />
                      {item}
                    </li>
                  ))}
                </ul>
                {m.note && (
                  <p className="mt-6 border-t border-line pt-4 text-sm text-muted">{m.note}</p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

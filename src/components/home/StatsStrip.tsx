import { Container } from "@/components/ui/Container";
import { ICONS } from "@/components/ui/Icons";
import { STATS } from "@/data/home";

const TONES = [
  "bg-brand-soft text-brand",
  "bg-forest-soft text-forest",
  "bg-brand-soft text-brand",
  "bg-forest-soft text-forest",
];

export function StatsStrip() {
  return (
    <section id="impact" className="scroll-mt-24">
      <Container>
        <ul className="grid grid-cols-1 gap-3 rounded-2xl bg-[#fdf0e1] p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-4">
          {STATS.map((stat, i) => {
            const Icon = ICONS[stat.icon];
            return (
              <li key={stat.label} className="flex items-center gap-4 rounded-xl bg-white px-5 py-5 shadow-sm">
                <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${TONES[i]}`}>
                  <Icon size={28} />
                </span>
                <span>
                  <span className="block font-serif text-2xl leading-none font-bold text-night">{stat.value}</span>
                  <span className="mt-1 block text-sm font-semibold text-night">{stat.label}</span>
                  <span className="mt-0.5 block text-[11.5px] text-night/55">{stat.note}</span>
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

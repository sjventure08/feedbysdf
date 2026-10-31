import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, ICONS } from "@/components/ui/Icons";
import { WAYS } from "@/data/home";

const TONE = {
  brand: {
    card: "bg-brand-soft",
    icon: "text-brand",
    title: "text-brand",
    button: "bg-brand hover:bg-brand-dark",
  },
  forest: {
    card: "bg-forest-soft",
    icon: "text-forest",
    title: "text-night",
    button: "bg-forest hover:bg-accent-dark",
  },
};

export function GetInvolved() {
  return (
    <section id="get-involved" className="scroll-mt-24 bg-surface-blue py-12">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Get Involved</h2>
          <p className="text-sm text-night/65">There are many ways you can make a difference.</p>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WAYS.map((way) => {
            const Icon = ICONS[way.icon];
            const t = TONE[way.tone];
            return (
              <li key={way.title} className={`flex flex-col rounded-xl p-5 shadow-sm ring-1 ring-black/5 ${t.card}`}>
                <div className="mb-5 flex items-start gap-4">
                  <Icon size={40} className={`shrink-0 ${t.icon}`} />
                  <div>
                    <h3 className={`font-serif text-lg font-bold ${t.title}`}>{way.title}</h3>
                    <p className="mt-1 text-[13px] leading-snug text-night/65">{way.body}</p>
                  </div>
                </div>
                <Link
                  href={way.href}
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors ${t.button}`}
                >
                  {way.cta} <ArrowRightIcon size={15} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

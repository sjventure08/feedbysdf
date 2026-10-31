import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { COST_PER_PERSON_PER_DAY } from "@/data/programme";

export function ClosingCta() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-leaf px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div aria-hidden className="grain absolute inset-0" />
            <div aria-hidden className="absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-turmeric/25 blur-3xl" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold leading-tight sm:text-5xl">
                Tonight, someone eats because of you.
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg text-white/75">
                ₹{COST_PER_PERSON_PER_DAY} feeds one person for a whole day. Start with one.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <ButtonLink href="/#donate">Sponsor meals now</ButtonLink>
                <ButtonLink href="/sponsor-a-day" variant="ghost" className="border-white/30 text-white hover:bg-white/10">
                  Sponsor a special day
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, HeartIcon, ICONS } from "@/components/ui/Icons";
import { Photo, hasImage } from "@/components/ui/Photo";
import { MISSION, STEPS } from "@/data/home";

const STEP_TONES = ["text-brand", "text-forest", "text-brand"];

export function HowItWorks() {
  return (
    <section className="py-16 lg:py-20">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-10">
        {/* How it works */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">How Feed bySDF Works</h2>
          <p className="mt-1 text-night/65">A simple process. A big difference.</p>

          <ol className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-x-12">
            {STEPS.map((step, i) => {
              const Icon = ICONS[step.icon];
              return (
                <li key={step.title} className="relative">
                  <div className="relative mx-auto w-fit sm:mx-0">
                    <span className="absolute -top-1 -left-1 z-10 grid h-8 w-8 place-items-center rounded-full bg-brand-soft font-serif text-sm font-bold text-brand ring-4 ring-sand">
                      {i + 1}
                    </span>
                    {hasImage(step.image) ? (
                      <Photo
                        src={step.image}
                        alt={step.title}
                        sizes="128px"
                        imgClassName="object-contain"
                        className="h-28 w-28 rounded-full bg-[#fde8d4]"
                      />
                    ) : (
                      <span className={`grid h-28 w-28 place-items-center rounded-full bg-[#fde8d4] ${STEP_TONES[i]}`}>
                        <Icon size={54} />
                      </span>
                    )}
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRightIcon
                      size={24}
                      className="absolute top-[52px] -right-9 hidden text-brand sm:block"
                    />
                  )}
                  <h3 className="mt-4 text-center font-serif text-xl font-bold text-night sm:text-left">{step.title}</h3>
                  <p className="mt-1 text-center text-sm leading-relaxed text-night/65 sm:text-left">{step.body}</p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mission */}
        <div id="about" className="grid scroll-mt-24 gap-6 border-black/10 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:border-l lg:pl-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-night">Our Mission</h2>
            <p className="mt-4 text-sm leading-relaxed text-night/70">{MISSION.body}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-md border-2 border-forest px-4 py-2 text-[13px] font-semibold text-forest transition-colors hover:bg-forest-soft"
            >
              Learn More About Us <ArrowRightIcon size={15} />
            </Link>
          </div>
          <div className="relative rotate-1">
            <Photo
              src={MISSION.image}
              alt="A young girl holding a plate of food"
              sizes="(min-width: 1024px) 200px, 50vw"
              className="aspect-[3/4] w-full rounded-xl border-[5px] border-white shadow-lg"
            />
            <span className="absolute top-4 left-3 -rotate-12 rounded-sm bg-[#fdf6e9]/95 px-2 py-1.5 font-hand text-lg leading-none text-night shadow">
              Because
              <br />
              Compassion
              <br />
              Feeds Lives <HeartIcon size={12} className="inline text-brand" />
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

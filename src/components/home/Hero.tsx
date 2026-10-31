import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, HeartIcon, LeafDishIcon, UsersIcon } from "@/components/ui/Icons";
import { Photo } from "@/components/ui/Photo";
import { HERO_IMAGES } from "@/data/home";

const FEATURES = [
  { Icon: LeafDishIcon, title: "Nutritious Food", body: "Wholesome & hygienic meals", tone: "bg-brand-soft text-brand" },
  { Icon: UsersIcon, title: "Dignity First", body: "Everyone deserves a meal with respect", tone: "bg-forest-soft text-forest" },
  { Icon: HeartIcon, title: "Community Support", body: "Stronger, kinder communities", tone: "bg-brand-soft text-brand" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff6ec] to-sand">
      <div
        aria-hidden
        className="absolute top-10 right-0 h-[480px] w-[640px] rounded-full bg-[#ffe3c7]/60 blur-3xl"
      />
      <Container className="relative grid items-center gap-12 pt-10 pb-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6 lg:pt-14">
        {/* Copy */}
        <div className="animate-fade-up">
          <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-night/70 uppercase">
            Food <span className="text-accent">•</span> Care <span className="text-accent">•</span> Stronger communities
          </p>
          <h1 className="mt-4 font-serif text-[2.6rem] leading-[1.02] font-bold tracking-tight text-night sm:text-6xl">
            A Meal of Hope
            <br />
            For Every
            <br />
            <span className="text-brand">Family</span>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-night/75">
            Feed bySDF serves hygienic, nutritious meals to poor families, the elderly and
            people in need across our communities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2.5 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(242,106,27,0.7)] transition-colors hover:bg-brand-dark"
            >
              <HeartIcon size={17} /> Donate Meals <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2.5 rounded-md border-2 border-forest bg-white px-6 py-[10px] text-sm font-semibold text-forest transition-colors hover:bg-forest-soft"
            >
              <UsersIcon size={18} /> Become a Volunteer <ArrowRightIcon size={16} />
            </Link>
          </div>

          <ul className="mt-10 grid max-w-xl grid-cols-1 gap-5 sm:grid-cols-3">
            {FEATURES.map(({ Icon, title, body, tone }) => (
              <li key={title} className="flex items-start gap-3">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-full ${tone}`}>
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-[13px] font-semibold text-night">{title}</span>
                  <span className="mt-0.5 block text-[11.5px] leading-snug text-night/60">{body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo collage */}
        <div className="relative mx-auto w-full max-w-[600px] animate-fade-up [animation-delay:150ms] lg:mr-0">
          <div className="grid grid-cols-[1.75fr_1fr] items-center gap-3 sm:gap-4">
            <div className="relative -rotate-2">
              <Photo
                src={HERO_IMAGES.main}
                alt="A Feed bySDF volunteer serving food to families in the community"
                sizes="(min-width: 1024px) 360px, 60vw"
                preload
                className="aspect-[4/4.6] rounded-2xl border-[6px] border-white shadow-xl"
              />
              {/* Paper tag */}
              <div className="absolute -right-4 -bottom-6 z-10 rotate-[-8deg] rounded-sm bg-[#fdf6e9] px-4 py-2.5 font-hand text-[19px] leading-[1.05] text-night shadow-lg sm:-right-8 sm:text-[23px]">
                Good Food
                <br />
                Brighter Days
                <br />
                Stronger People
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="relative rotate-2">
                <Photo
                  src={HERO_IMAGES.topRight}
                  alt="A smiling child eating a meal"
                  sizes="(min-width: 1024px) 200px, 35vw"
                  className="aspect-[4/3.6] rounded-xl border-[5px] border-white shadow-lg"
                />
                <span className="absolute top-2 right-2 text-right font-hand text-base leading-none text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] sm:text-lg">
                  A smile
                  <br />
                  with every meal
                </span>
              </div>
              <div className="relative -rotate-1">
                <Photo
                  src={HERO_IMAGES.bottomRight}
                  alt="An elderly man enjoying a meal"
                  sizes="(min-width: 1024px) 200px, 35vw"
                  className="aspect-[4/4.2] rounded-xl border-[5px] border-white shadow-lg"
                />
                <span className="absolute right-1 bottom-3 rotate-[-8deg] rounded-sm bg-[#fdf6e9]/95 px-2 py-1 text-right font-hand text-base leading-none text-night shadow sm:text-lg">
                  Food
                  <br />
                  Brings
                  <br />
                  Hope <HeartIcon size={12} className="inline text-brand" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

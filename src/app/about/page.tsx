import type { Metadata } from "next";
import { GetInvolved } from "@/components/home/GetInvolved";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { HeartIcon, ICONS } from "@/components/ui/Icons";
import { Photo } from "@/components/ui/Photo";
import { ABOUT, MILESTONES, VALUES } from "@/data/pages";

export const metadata: Metadata = {
  title: "About Us",
  description: "Why Feed bySDF serves meals to people in need, and the values behind every plate.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title={
          <>
            Because no one should go hungry while caring for a <span className="text-brand">loved one</span>
          </>
        }
        intro="Feed bySDF brings warm, hygienic meals to the families, attendants and people in need in our communities — served with care, respect and a smile."
        image={ABOUT.image}
        imageAlt="Feed bySDF volunteers serving meals"
        note={<>Because Compassion Feeds Lives <HeartIcon size={14} className="inline text-brand" /></>}
      />

      {/* Our story */}
      <section className="py-16 lg:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative -rotate-1">
            <Photo
              src={ABOUT.storyImage}
              alt="Families sharing a meal"
              sizes="(min-width: 1024px) 520px, 100vw"
              className="aspect-[5/4] rounded-2xl border-[6px] border-white shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Our Story</h2>
            {ABOUT.story.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-night/70">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white/60 py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">What We Stand For</h2>
          <p className="mt-1 text-night/65">The values behind every plate we serve.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <li key={v.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5">
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-full ${
                      i % 2 ? "bg-forest-soft text-forest" : "bg-brand-soft text-brand"
                    }`}
                  >
                    <Icon size={26} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-night">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-night/65">{v.body}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <HowItWorks />

      {/* Journey */}
      <section className="border-t border-black/5 py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Our Journey</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-4 md:gap-6">
            {MILESTONES.map((m, i) => (
              <li key={m.year} className="relative md:pt-8">
                <span
                  aria-hidden
                  className="absolute top-3 left-0 hidden h-0.5 w-full bg-brand/25 md:block"
                />
                <span
                  aria-hidden
                  className={`absolute top-1 left-0 hidden h-4 w-4 rounded-full ring-4 ring-sand md:block ${
                    i === MILESTONES.length - 1 ? "bg-forest" : "bg-brand"
                  }`}
                />
                <p className="font-hand text-2xl text-brand">{m.year}</p>
                <p className="mt-1 text-sm leading-relaxed text-night/70">{m.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <GetInvolved />
    </>
  );
}

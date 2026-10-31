import { Container } from "@/components/ui/Container";
import { Photo } from "@/components/ui/Photo";
import { STORIES } from "@/data/home";
import { StoryCarousel } from "./StoryCarousel";

export function Stories() {
  return (
    <section className="py-12">
      <Container>
        <StoryCarousel
          heading={
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Stories That Inspire</h2>
              <p className="text-sm text-night/65">Real people. Real stories. Real impact.</p>
            </div>
          }
        >
          {STORIES.map((s) => (
            <li
              key={s.name}
              className="flex w-[88%] shrink-0 snap-start gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
            >
              <Photo
                src={s.image}
                alt={s.name}
                sizes="96px"
                className="h-24 w-24 shrink-0 rounded-lg sm:h-[88px] sm:w-[88px]"
              />
              <figure>
                <blockquote className="text-[12.5px] leading-relaxed text-night/75">“{s.quote}”</blockquote>
                <figcaption className="mt-2 text-[12.5px]">
                  <span className="block font-semibold text-night">– {s.name}</span>
                  <span className="text-night/60">{s.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </StoryCarousel>
      </Container>
    </section>
  );
}

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, HeartIcon } from "@/components/ui/Icons";
import { Photo, hasImage } from "@/components/ui/Photo";
import { CTA_IMAGE } from "@/data/home";

export function JoinCta() {
  return (
    <section className="relative isolate overflow-hidden bg-forest-dark">
      {hasImage(CTA_IMAGE) && (
        <Photo src={CTA_IMAGE} alt="" sizes="100vw" className="absolute! inset-0 -z-10 opacity-40" />
      )}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark/90 via-brand/80 to-forest-dark/90"
      />
      <Container className="flex flex-col items-center justify-between gap-6 py-10 text-center md:flex-row md:text-left">
        <div className="md:pl-[8%]">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-[34px]">Join Hands to Feed More Lives</h2>
          <p className="mt-2 text-white/80">Your support helps us reach more communities and serve more people in need.</p>
        </div>
        <Link
          href="/donate"
          className="inline-flex shrink-0 items-center gap-2.5 rounded-md bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-dark"
        >
          <HeartIcon size={17} /> Donate Now <ArrowRightIcon size={16} />
        </Link>
      </Container>
    </section>
  );
}

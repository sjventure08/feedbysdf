import type { Metadata } from "next";
import { DonationCard } from "@/components/donate/DonationCard";
import { Container } from "@/components/ui/Container";
import { HeartIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Donate Meals",
  description: "Donate nutritious meals for poor families and people in need.",
};

export default function DonatePage() {
  return (
    <section className="bg-gradient-to-b from-[#fff6ec] to-sand">
      <Container className="grid items-start gap-10 py-14 lg:grid-cols-[1fr_1fr] lg:py-20">
        <div>
          <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-brand uppercase">
            <HeartIcon size={14} /> Donate a meal
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-bold text-night sm:text-5xl">
            Your gift becomes a warm meal for someone in need.
          </h1>
          <p className="mt-5 max-w-md text-[17px] leading-relaxed text-night/70">
            Families who travel for a loved one&apos;s treatment often go without food. Every donation
            helps Feed bySDF serve hygienic, nutritious meals to them with dignity.
          </p>
        </div>
        <DonationCard />
      </Container>
    </section>
  );
}

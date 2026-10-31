import { GetInvolved } from "@/components/home/GetInvolved";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { JoinCta } from "@/components/home/JoinCta";
import { StatsStrip } from "@/components/home/StatsStrip";
import { Stories } from "@/components/home/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <HowItWorks />
      <GetInvolved />
      <Stories />
      <JoinCta />
    </>
  );
}

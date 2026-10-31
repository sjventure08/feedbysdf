import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CONTACT } from "@/data/programme";

export const metadata: Metadata = {
  title: "Payment not completed",
  robots: { index: false },
};

export default function FailedPage() {
  return (
    <Container className="max-w-2xl py-24 text-center sm:py-32">
      <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
        Your payment didn&apos;t go through.
      </h1>
      <p className="mt-5 text-lg text-muted">
        No money has been taken. If an amount was debited, it will be refunded automatically by your
        bank within 5–7 days.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <ButtonLink href="/donate">Try again</ButtonLink>
        <ButtonLink href={`mailto:${CONTACT.email}`} variant="ghost">
          Contact us
        </ButtonLink>
      </div>
    </Container>
  );
}

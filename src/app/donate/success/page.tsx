import type { Metadata } from "next";
import { Suspense } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { amountToMeals, formatINR, formatNumber } from "@/lib/meals";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false },
};

async function Details({ searchParams }: { searchParams: PageProps<"/donate/success">["searchParams"] }) {
  const params = await searchParams;
  const amount = Number(params.amount) || 0;
  const monthly = params.frequency === "monthly";
  const ref = typeof params.ref === "string" ? params.ref : null;

  return (
    <>
      {amount > 0 && (
        <p className="mt-5 text-lg text-muted">
          Your {monthly ? "monthly " : ""}gift of{" "}
          <strong className="text-ink">{formatINR(amount)}</strong> provides about{" "}
          <strong className="text-leaf">{formatNumber(amountToMeals(amount))} meals</strong>
          {monthly ? " every month" : ""}.
        </p>
      )}
      {ref && <p className="mt-3 text-sm text-muted">Payment reference: {ref}</p>}
    </>
  );
}

export default function SuccessPage({ searchParams }: PageProps<"/donate/success">) {
  return (
    <Container className="max-w-2xl py-24 text-center sm:py-32">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-leaf-soft text-leaf animate-fade-up">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h1 className="mt-8 font-serif text-4xl font-semibold text-ink sm:text-5xl">Thank you.</h1>
      <Suspense fallback={<p className="mt-5 text-lg text-muted">Confirming your gift…</p>}>
        <Details searchParams={searchParams} />
      </Suspense>
      <p className="mt-6 text-muted">
        A receipt is on its way to your email. We&apos;ll send you updates from the kitchen.
      </p>
      <ButtonLink href="/" variant="secondary" className="mt-10">
        Back to home
      </ButtonLink>
    </Container>
  );
}

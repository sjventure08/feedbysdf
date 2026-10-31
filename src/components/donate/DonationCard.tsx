"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { MIN_DONATION } from "@/data/tiers";
import { useDonation } from "@/hooks/useDonation";
import { AmountTiers } from "./AmountTiers";
import { CustomAmountInput } from "./CustomAmountInput";
import { DonorDetailsForm } from "./DonorDetailsForm";
import { FrequencyToggle } from "./FrequencyToggle";
import { MealSummary } from "./MealSummary";

export function DonationCard() {
  const { frequency, setFrequency, amount, setAmount, tiers, busy, error, donate } = useDonation();
  const [step, setStep] = useState<"amount" | "details">("amount");
  const isCustom = !tiers.some((t) => t.amount === amount);
  const valid = amount >= MIN_DONATION;

  return (
    <div className="rounded-3xl bg-white p-6 text-ink shadow-[0_32px_64px_-24px_rgba(0,0,0,0.45)] sm:p-8">
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="font-serif text-2xl font-semibold">Sponsor meals</h2>
        <span className="text-xs text-muted">Step {step === "amount" ? 1 : 2} of 2</span>
      </div>

      {step === "amount" ? (
        <div className="space-y-4">
          <FrequencyToggle value={frequency} onChange={setFrequency} />
          <AmountTiers tiers={tiers} amount={amount} onSelect={setAmount} />
          <CustomAmountInput amount={amount} isCustom={isCustom} onChange={setAmount} />
          <MealSummary amount={amount} frequency={frequency} />
          <Button className="w-full" disabled={!valid} onClick={() => setStep("details")}>
            Continue
          </Button>
          {!valid && amount > 0 && (
            <p className="text-center text-xs text-red-700">Minimum donation is ₹{MIN_DONATION}.</p>
          )}
        </div>
      ) : (
        <DonorDetailsForm
          amount={amount}
          frequency={frequency}
          busy={busy}
          onBack={() => setStep("amount")}
          onSubmit={donate}
        />
      )}

      {error && (
        <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 11V7a4 4 0 118 0v4" stroke="currentColor" strokeWidth="2" />
        </svg>
        Secure payment · UPI, cards, netbanking
      </p>
    </div>
  );
}

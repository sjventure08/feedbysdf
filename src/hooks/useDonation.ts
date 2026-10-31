"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { DEFAULT_TIER_ID, MONTHLY_TIERS, ONE_TIME_TIERS } from "@/data/tiers";
import { loadRazorpayScript, type RazorpayResponse } from "@/lib/loadRazorpayScript";
import type { Donor } from "@/lib/validation";
import type { DonationStatus, Frequency } from "@/types/donation";

type CheckoutSession = {
  keyId: string;
  orderId?: string;
  subscriptionId?: string;
  amount: number;
};

function tiersFor(frequency: Frequency) {
  return frequency === "once" ? ONE_TIME_TIERS : MONTHLY_TIERS;
}

function defaultAmount(frequency: Frequency) {
  return tiersFor(frequency).find((t) => t.id === DEFAULT_TIER_ID[frequency])!.amount;
}

async function postJSON<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error ?? "Something went wrong. Please try again.");
  return data as T;
}

export function useDonation() {
  const router = useRouter();
  const [frequency, setFrequencyState] = useState<Frequency>("once");
  const [amount, setAmount] = useState<number>(defaultAmount("once"));
  const [status, setStatus] = useState<DonationStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const setFrequency = useCallback((f: Frequency) => {
    setFrequencyState(f);
    setAmount(defaultAmount(f));
  }, []);

  const donate = useCallback(
    async (donor: Donor) => {
      setError(null);
      setStatus("creating");
      try {
        const [loaded, session] = await Promise.all([
          loadRazorpayScript(),
          postJSON<CheckoutSession>(
            frequency === "once" ? "/api/donations/create-order" : "/api/subscriptions/create",
            { amount, donor },
          ),
        ]);
        if (!loaded || !window.Razorpay) {
          throw new Error("Couldn't load the payment window. Check your connection and try again.");
        }

        setStatus("checkout");
        const checkout = new window.Razorpay({
          key: session.keyId,
          name: "Food for Dignity",
          description: frequency === "once" ? "One-time donation" : "Monthly donation",
          order_id: session.orderId,
          subscription_id: session.subscriptionId,
          prefill: { name: donor.name, email: donor.email, contact: donor.phone },
          theme: { color: "#C2410C" },
          handler: async (response: RazorpayResponse) => {
            setStatus("verifying");
            try {
              await postJSON("/api/donations/verify", response);
              const params = new URLSearchParams({
                amount: String(amount),
                frequency,
                ref: response.razorpay_payment_id,
              });
              router.push(`/donate/success?${params}`);
            } catch (e) {
              setStatus("error");
              setError((e as Error).message);
            }
          },
          modal: { ondismiss: () => setStatus("idle") },
        });
        checkout.on("payment.failed", () => {
          router.push("/donate/failed");
        });
        checkout.open();
      } catch (e) {
        setStatus("error");
        setError((e as Error).message);
      }
    },
    [amount, frequency, router],
  );

  return {
    frequency,
    setFrequency,
    amount,
    setAmount,
    tiers: tiersFor(frequency),
    status,
    error,
    busy: status === "creating" || status === "checkout" || status === "verifying",
    donate,
  };
}

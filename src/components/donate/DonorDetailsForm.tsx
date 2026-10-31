"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { donorSchema, type Donor } from "@/lib/validation";
import { formatINR } from "@/lib/meals";
import type { Frequency } from "@/types/donation";

const FIELDS = [
  { name: "name", label: "Full name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
  { name: "pan", label: "PAN (optional, for tax receipt)", type: "text", autoComplete: "off" },
] as const;

export function DonorDetailsForm({
  amount,
  frequency,
  busy,
  onBack,
  onSubmit,
}: {
  amount: number;
  frequency: Frequency;
  busy: boolean;
  onBack: () => void;
  onSubmit: (donor: Donor) => void;
}) {
  const [errors, setErrors] = useState<Partial<Record<keyof Donor, string>>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const result = donorSchema.safeParse(values);
    if (!result.success) {
      const next: typeof errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof Donor;
        next[key] ??= issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    onSubmit(result.data);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-3">
      {FIELDS.map((f) => (
        <label key={f.name} className="block">
          <span className="mb-1 block text-xs font-medium text-muted">{f.label}</span>
          <input
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            aria-invalid={Boolean(errors[f.name])}
            className="w-full rounded-xl border border-line px-4 py-2.5 text-sm text-ink outline-none transition-all focus:border-leaf focus:ring-1 focus:ring-leaf aria-invalid:border-red-600"
          />
          {errors[f.name] && <span className="mt-1 block text-xs text-red-700">{errors[f.name]}</span>}
        </label>
      ))}
      <div className="flex gap-2 pt-2">
        <Button type="button" variant="ghost" onClick={onBack} disabled={busy} className="px-4">
          Back
        </Button>
        <Button type="submit" disabled={busy} className="flex-1">
          {busy
            ? "Opening secure payment…"
            : `Donate ${formatINR(amount)}${frequency === "monthly" ? " / month" : ""}`}
        </Button>
      </div>
    </form>
  );
}

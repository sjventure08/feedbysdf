"use client";

import { useState, type FormEvent } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "date" | "textarea" | "select";
  options?: { value: string; label: string }[];
  required?: boolean;
  autoComplete?: string;
  min?: string;
  defaultValue?: string;
};

export function EnquiryForm({
  type,
  fields,
  submitLabel,
  successTitle,
  successBody,
}: {
  type: "sponsor-a-day" | "csr" | "volunteer" | "contact";
  fields: Field[];
  submitLabel: string;
  successTitle: string;
  successBody: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[] | undefined>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, ...values }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setState("idle");
      setError(data.error ?? "Something went wrong. Please try again.");
      setFieldErrors(data.issues ?? {});
      return;
    }
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div role="status" className="rounded-2xl bg-forest-soft p-8 text-center">
        <p className="font-serif text-2xl font-bold text-forest">{successTitle}</p>
        <p className="mt-2 text-night/70">{successBody}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-black/15 bg-white px-4 py-3 text-sm text-night outline-none transition-all focus:border-forest focus:ring-1 focus:ring-forest aria-invalid:border-red-600";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      {fields.map((f) => {
        const err = fieldErrors[f.name]?.[0];
        const wide = f.type === "textarea";
        return (
          <label key={f.name} className={`block ${wide ? "sm:col-span-2" : ""}`}>
            <span className="mb-1.5 block text-sm font-medium text-night">
              {f.label}
              {!f.required && <span className="font-normal text-night/50"> (optional)</span>}
            </span>
            {f.type === "textarea" ? (
              <textarea name={f.name} rows={4} defaultValue={f.defaultValue} required={f.required} aria-invalid={!!err} className={inputClass} />
            ) : f.type === "select" ? (
              <select name={f.name} defaultValue={f.defaultValue} required={f.required} aria-invalid={!!err} className={inputClass}>
                {f.options?.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            ) : (
              <input
                name={f.name}
                type={f.type ?? "text"}
                defaultValue={f.defaultValue}
                required={f.required}
                autoComplete={f.autoComplete}
                min={f.min}
                aria-invalid={!!err}
                className={inputClass}
              />
            )}
            {err && <span className="mt-1 block text-xs text-red-700">{err}</span>}
          </label>
        );
      })}
      {error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2">
          {error}
        </p>
      )}
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex w-full items-center justify-center rounded-md bg-forest px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {state === "sending" ? "Sending…" : submitLabel}
        </button>
      </div>
    </form>
  );
}

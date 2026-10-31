import type { Frequency } from "@/types/donation";

const OPTIONS: { value: Frequency; label: string }[] = [
  { value: "once", label: "Give once" },
  { value: "monthly", label: "Monthly" },
];

export function FrequencyToggle({
  value,
  onChange,
}: {
  value: Frequency;
  onChange: (f: Frequency) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Donation frequency" className="grid grid-cols-2 rounded-full bg-leaf-soft p-1">
      {OPTIONS.map((o) => {
        const active = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(o.value)}
            className={`rounded-full py-2.5 text-sm font-semibold transition-all ${
              active ? "bg-white text-leaf shadow-sm" : "text-muted hover:text-leaf"
            }`}
          >
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

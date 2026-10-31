import { formatINR } from "@/lib/meals";
import type { Tier } from "@/types/donation";

export function AmountTiers({
  tiers,
  amount,
  onSelect,
}: {
  tiers: Tier[];
  amount: number;
  onSelect: (amount: number) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Donation amount" className="grid gap-2">
      {tiers.map((t) => {
        const active = t.amount === amount;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onSelect(t.amount)}
            className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
              active
                ? "border-leaf bg-leaf-soft ring-1 ring-leaf"
                : "border-line hover:border-leaf/40"
            }`}
          >
            <span>
              <span className="block text-sm font-semibold text-ink">{t.label}</span>
              <span className="block text-xs text-muted">{t.description}</span>
            </span>
            <span className="font-serif text-lg font-semibold tabular-nums text-leaf">
              {formatINR(t.amount)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

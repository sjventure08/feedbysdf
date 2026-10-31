import { MIN_DONATION } from "@/data/tiers";

export function CustomAmountInput({
  amount,
  isCustom,
  onChange,
}: {
  amount: number;
  isCustom: boolean;
  onChange: (amount: number) => void;
}) {
  return (
    <label className="block">
      <span className="sr-only">Other amount in rupees</span>
      <div
        className={`flex items-center rounded-xl border px-4 transition-all focus-within:border-leaf focus-within:ring-1 focus-within:ring-leaf ${
          isCustom ? "border-leaf" : "border-line"
        }`}
      >
        <span className="text-muted">₹</span>
        <input
          type="number"
          inputMode="numeric"
          min={MIN_DONATION}
          step={1}
          placeholder="Other amount"
          value={isCustom ? amount || "" : ""}
          onChange={(e) => onChange(Math.max(0, Math.floor(Number(e.target.value))))}
          className="w-full bg-transparent px-2 py-3 text-sm text-ink outline-none placeholder:text-muted/70 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </label>
  );
}

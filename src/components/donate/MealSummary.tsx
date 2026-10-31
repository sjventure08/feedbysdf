import { amountToMeals, formatINR, formatNumber } from "@/lib/meals";
import type { Frequency } from "@/types/donation";

export function MealSummary({ amount, frequency }: { amount: number; frequency: Frequency }) {
  const meals = amountToMeals(amount);
  return (
    <p aria-live="polite" className="rounded-xl bg-turmeric-soft px-4 py-3 text-sm text-ink">
      {meals > 0 ? (
        <>
          <strong className="font-semibold">{formatINR(amount)}</strong>
          {frequency === "monthly" ? " a month" : ""} provides about{" "}
          <strong className="font-semibold text-leaf">{formatNumber(meals)} meals</strong>
          {frequency === "monthly" ? " every month" : ""}.
        </>
      ) : (
        "Enter an amount to see how many meals it provides."
      )}
    </p>
  );
}

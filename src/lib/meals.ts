import { COST_PER_MEAL } from "@/data/programme";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export function formatINR(amount: number): string {
  return inr.format(amount);
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-IN");
}

/** 7,35,840 → "7.36 lakh" */
export function formatLakh(n: number): string {
  return `${(n / 100000).toFixed(2).replace(/\.?0+$/, "")} lakh`;
}

export function amountToMeals(amount: number): number {
  return Math.floor(amount / COST_PER_MEAL);
}

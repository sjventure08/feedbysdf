import type { BudgetItem } from "@/types/donation";

// TODO(SDF): PLACEHOLDER figures. Replace with the 15 daily line items from the
// programme brief. The Budget section flags a mismatch if these don't sum to
// PROGRAMME.dailyCost.
export const BUDGET: BudgetItem[] = [
  { label: "Rice", amount: 9000 },
  { label: "Dal and pulses", amount: 4500 },
  { label: "Vegetables", amount: 6000 },
  { label: "Oil, spices and condiments", amount: 3500 },
  { label: "Milk and curd", amount: 2500 },
  { label: "Cooking gas", amount: 3000 },
  { label: "Cooks and helpers", amount: 5000 },
  { label: "Packing material", amount: 2500 },
  { label: "Doorstep delivery and transport", amount: 3000 },
  { label: "Kitchen hygiene and water", amount: 2000 },
];

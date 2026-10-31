export type Frequency = "once" | "monthly";

export type Tier = {
  id: string;
  amount: number;
  label: string;
  description: string;
  frequency: Frequency;
};

export type BudgetItem = {
  label: string;
  amount: number; // rupees per day
};

export type MenuItem = {
  meal: "Lunch" | "Dinner" | "Doorstep";
  items: string[];
  note?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type DonationStatus = "idle" | "creating" | "checkout" | "verifying" | "error";

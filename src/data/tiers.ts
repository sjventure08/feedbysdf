import type { Tier } from "@/types/donation";
import { COST_PER_PERSON_PER_DAY, PROGRAMME } from "./programme";

const perDay = COST_PER_PERSON_PER_DAY;
const perMonth = perDay * PROGRAMME.daysPerMonth;

export const ONE_TIME_TIERS: Tier[] = [
  {
    id: "one-day",
    amount: perDay,
    label: "Feed one person for a day",
    description: "Lunch and dinner for one person",
    frequency: "once",
  },
  {
    id: "one-month",
    amount: perMonth,
    label: "Feed one person for a month",
    description: "60 meals over 30 days",
    frequency: "once",
  },
  {
    id: "one-year",
    amount: perDay * PROGRAMME.daysPerMonth * 12,
    label: "Feed one person for a year",
    description: "Two meals a day, every day",
    frequency: "once",
  },
  {
    id: "full-day",
    amount: PROGRAMME.dailyCost,
    label: "Sponsor a full day",
    description: `All ${PROGRAMME.beneficiaries.toLocaleString("en-IN")} people, one day`,
    frequency: "once",
  },
];

export const MONTHLY_TIERS: Tier[] = [
  {
    id: "monthly-week",
    amount: perDay * 7,
    label: "One person, a week each month",
    description: "14 meals every month",
    frequency: "monthly",
  },
  {
    id: "monthly-adopt",
    amount: perMonth,
    label: "Adopt one person",
    description: "Every meal, every day, for one person",
    frequency: "monthly",
  },
  {
    id: "monthly-five",
    amount: perMonth * 5,
    label: "Adopt five people",
    description: "300 meals every month",
    frequency: "monthly",
  },
];

export const DEFAULT_TIER_ID = { once: "one-month", monthly: "monthly-adopt" } as const;
export const MIN_DONATION = 100;

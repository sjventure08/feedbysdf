// Single source of truth for programme numbers. Change these and every
// tier, meal count and budget bar on the site updates.

export const PROGRAMME = {
  name: "Food for Dignity",
  organisation: "SDF",
  // TODO(SDF): confirm partner names — brief lists them as two organisations.
  partners: [
    "National Sustainable Development Foundation",
    "Amudham Arutpani Aanmeekam Trust",
  ],
  beneficiaries: 1008,
  mealsPerPersonPerDay: 2,
  // TODO(SDF): brief states ₹41,000/day but the line items add up to ₹42,000.
  dailyCost: 41000,
  daysPerMonth: 30,
  // Brief gives 7,25,760 (12 × 30) and 7.36 lakh (365 days). Using 365 days.
  daysPerYear: 365,
} as const;

export const MEALS_PER_DAY = PROGRAMME.beneficiaries * PROGRAMME.mealsPerPersonPerDay; // 2,016
export const MEALS_PER_MONTH = MEALS_PER_DAY * PROGRAMME.daysPerMonth; // 60,480
export const MEALS_PER_YEAR = MEALS_PER_DAY * PROGRAMME.daysPerYear; // ~7.36 lakh

export const COST_PER_PERSON_PER_DAY = Math.round(PROGRAMME.dailyCost / PROGRAMME.beneficiaries); // ₹41
export const COST_PER_MEAL = PROGRAMME.dailyCost / MEALS_PER_DAY; // ≈ ₹20.3
export const MONTHLY_COST = PROGRAMME.dailyCost * PROGRAMME.daysPerMonth; // ₹12.3 lakh

// Placeholders until SDF confirms.
export const CONTACT = {
  email: "contact@example.org", // TODO(SDF)
  phone: "+91 00000 00000", // TODO(SDF)
  registrationNo: "[CONFIRM]", // TODO(SDF)
  has80G: false, // TODO(SDF): flip once 80G status is confirmed
  locations: ["[CONFIRM distribution locations]"],
};

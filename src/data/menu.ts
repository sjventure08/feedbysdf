import type { MenuItem } from "@/types/donation";

// TODO(SDF): replace with the menu from the brief.
export const MENU: MenuItem[] = [
  {
    meal: "Lunch",
    items: ["Rice", "Sambar", "Poriyal (vegetable)", "Rasam", "Buttermilk"],
    note: "Served fresh at midday",
  },
  {
    meal: "Dinner",
    items: ["Chapati or idli", "Vegetable kurma", "Dal"],
    note: "Light, easy to digest",
  },
  {
    meal: "Doorstep",
    items: ["Packed meals delivered to elderly and bedridden people who cannot travel"],
    note: "For those who can't come to us",
  },
];

// Content for the inner pages (About, Impact, Volunteer, Contact).
// Image paths follow the same rule as src/data/home.ts: drop a file with that
// name into /public (any of .webp/.jpg/.jpeg/.png/.avif).

// TODO(SDF): placeholder copy and figures — review before launch.

export const ABOUT = {
  image: "/images/about-hero",
  story: [
    "Every day, thousands of families in our cities — daily-wage workers, the elderly and people without a home — skip meals simply because they cannot afford them.",
    "Feed bySDF began as a small kitchen serving a few dozen plates in one neighbourhood. Today, with volunteers, donors and partners, we serve hygienic, nutritious meals across the country — with dignity and without asking questions.",
  ],
  storyImage: "/images/about-story",
};

export const VALUES = [
  { icon: "heart", title: "Dignity First", body: "Every person is served with respect, a smile and a clean plate — no questions asked." },
  { icon: "dish", title: "Hygiene & Nutrition", body: "Freshly cooked, balanced meals prepared in clean kitchens with quality ingredients." },
  { icon: "users", title: "Community Powered", body: "Volunteers, donors and local partners make every meal possible." },
  { icon: "pin", title: "Where It's Needed", body: "We go where hunger meets hardship — right into the neighbourhoods that need it most." },
] as const;

export const MILESTONES = [
  { year: "Start", text: "First meal service in a single neighbourhood." },
  { year: "Growth", text: "Volunteer network formed; daily service across multiple communities." },
  { year: "Scale", text: "Expanded to new cities with partner kitchens and local tie-ups." },
  { year: "Today", text: "500,000+ meals served across 45+ communities in 12 cities." },
];

export const IMPACT = {
  image: "/images/impact-hero",
  promises: [
    { title: "Transparent reports", body: "Donors receive regular updates with meal counts and photos from the ground." },
    { title: "Every rupee tracked", body: "Funds go to ingredients, cooking and distribution — reviewed every quarter." },
    { title: "Visit any time", body: "Join a service shift and see your contribution reach people first-hand." },
    { title: "Receipt for every gift", body: "A donation receipt is emailed for every contribution made online." },
  ],
  galleryImages: ["/images/impact/1", "/images/impact/2", "/images/impact/3", "/images/impact/4"],
};

export const VOLUNTEER = {
  image: "/images/volunteer-hero",
  roles: [
    { icon: "pot", title: "Kitchen Crew", body: "Help prepare and pack fresh meals in our partner kitchens.", time: "Mornings, 2–3 hrs" },
    { icon: "serve", title: "Meal Service", body: "Serve meals with care to families in need.", time: "Lunch or dinner, 2 hrs" },
    { icon: "calendar", title: "Drives & Events", body: "Organise food drives and fundraisers in your community.", time: "Flexible" },
    { icon: "handshake", title: "Skills & Outreach", body: "Lend design, photography, tech or social media skills.", time: "Remote, flexible" },
  ] as const,
  steps: [
    { title: "Sign up", body: "Fill in the form with your city and availability." },
    { title: "Orientation", body: "A short briefing on hygiene, safety and how we serve." },
    { title: "Serve", body: "Join a shift near you and make your first meal count." },
  ],
};

export const CONTACT_SUBJECTS = [
  { value: "general", label: "General enquiry" },
  { value: "partnership", label: "Partner with us or request meals" },
  { value: "media", label: "Media & press" },
  { value: "other", label: "Something else" },
];

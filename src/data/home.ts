// Content for the Feed bySDF homepage. Edit text and numbers here.
//
// Images: drop files into /public/images using the names below. Any of
// .webp, .jpg, .jpeg, .png or .avif works — e.g. "/images/hero-main" will
// pick up public/images/hero-main.jpg. Until a file exists, a labelled
// placeholder is shown in its place.

// TODO(SDF): numbers and contacts below come from the design mockup — confirm before launch.

export const SITE = {
  name: "Feed bySDF",
  tagline: "Meals Today · Brighter Tomorrows",
  announcement: "Serving meals. Spreading hope. Across communities.",
  phone: "+91 98765 43210",
  email: "info@feedbysdf.org",
  address: ["123 Seva Marg, New Delhi - 110001", "India"],
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
    x: "#",
  },
};

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/volunteer", label: "Volunteer" },
];

export const HERO_IMAGES = {
  main: "/images/hero-main",
  topRight: "/images/hero-child",
  bottomRight: "/images/hero-elder",
};

export const STATS = [
  { icon: "bowl", value: "500,000+", label: "Meals Served", note: "Nutritious meals to those in need" },
  { icon: "heart", value: "45+", label: "Communities Reached", note: "Across major cities" },
  { icon: "users", value: "2,500+", label: "Volunteers", note: "People serving with compassion" },
  { icon: "pin", value: "12", label: "Cities", note: "Growing to reach more people" },
] as const;

export const STEPS = [
  {
    title: "Cook",
    body: "We prepare nutritious, hygienic meals with care and love.",
    image: "/images/how-cook",
    icon: "pot",
  },
  {
    title: "Serve",
    body: "Our volunteers distribute meals to families and people in need.",
    image: "/images/how-serve",
    icon: "serve",
  },
  {
    title: "Care",
    body: "We spread hope, dignity and support — one meal at a time.",
    image: "/images/how-care",
    icon: "users",
  },
] as const;

export const MISSION = {
  body: "No one should go to bed hungry. Feed bySDF is committed to serving nutritious meals to poor families, the elderly and people in need, and building stronger, healthier communities.",
  image: "/images/mission",
};

export const WAYS = [
  {
    title: "Donate a Meal",
    body: "Help us serve nutritious meals to people in need.",
    cta: "Donate Now",
    href: "/donate",
    icon: "bowl",
    tone: "brand",
  },
  {
    title: "Sponsor a Day",
    body: "Sponsor a full day of meals in a community of your choice.",
    cta: "Sponsor a Day",
    href: "/sponsor-a-day",
    icon: "calendar",
    tone: "forest",
  },
  {
    title: "Volunteer",
    body: "Be a part of our on-ground service and spread kindness.",
    cta: "Join as a Volunteer",
    href: "/volunteer#join",
    icon: "users",
    tone: "brand",
  },
  {
    title: "Partner With Us",
    body: "Organizations and corporates can collaborate for greater impact.",
    cta: "Get in Touch",
    href: "/csr",
    icon: "handshake",
    tone: "forest",
  },
] as const;

// TODO(SDF): sample stories from the mockup — replace with real, consented ones.
export const STORIES = [
  {
    quote:
      "We came to the city from a small village with very little. Feed bySDF's meals gave us strength during a very difficult time.",
    name: "Savitri Devi",
    role: "Beneficiary, New Delhi",
    image: "/images/stories/savitri",
  },
  {
    quote:
      "When my father lost his job, we struggled to find affordable food. These meals were a blessing for our family. Thank you, Feed bySDF!",
    name: "Ramesh Kumar",
    role: "Beneficiary, Mumbai",
    image: "/images/stories/ramesh",
  },
  {
    quote:
      "The volunteers are so kind and respectful. It's not just a meal, it's hope. We feel supported and cared for.",
    name: "Ayesha Khan",
    role: "Beneficiary, Hyderabad",
    image: "/images/stories/ayesha",
  },
];

export const CTA_IMAGE = "/images/cta-background";

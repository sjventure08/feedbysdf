export type PerfumeTheme = {
  /** Section background */
  bg: string;
  /** Main text colour */
  ink: string;
  /** Secondary text colour */
  muted: string;
  /** Highlights: notes chips, rule lines, button */
  accent: string;
  /** Text colour on top of the accent (button label) */
  onAccent: string;
  /** Soft glow behind the bottle */
  glow: string;
};

export type Perfume = {
  slug: string;
  name: string;
  tamilName: string;
  family: string;
  tagline: string;
  description: string;
  notes: { top: string; heart: string; base: string };
  size: string;
  price: string;
  image: string;
  href: string;
  theme: PerfumeTheme;
};

// Swap `image` for each bottle's own photo (transparent PNG/WebP works best).
export const perfumes: Perfume[] = [
  {
    slug: "madurai-malli",
    name: "Madurai Malli",
    tamilName: "மதுரை மல்லி",
    family: "White Floral",
    tagline: "Jasmine strung at dawn by the temple gates.",
    description:
      "Fresh-picked Madurai jasmine, dewy and green, wrapped around a soft musk that stays close to the skin long after the flowers fade.",
    notes: { top: "Green leaf, Bergamot", heart: "Madurai jasmine, Tuberose", base: "White musk, Vetiver" },
    size: "50 ml",
    price: "₹2,450",
    image: "/perfumes/madurai-malli.webp",
    href: "#",
    theme: {
      bg: "#1f3b2b",
      ink: "#f4efe2",
      muted: "#b9c9b4",
      accent: "#bcd7a2",
      onAccent: "#1f3b2b",
      glow: "#4f8a5f",
    },
  },
  {
    slug: "mysore-santhanam",
    name: "Mysore Santhanam",
    tamilName: "மைசூர் சந்தனம்",
    family: "Woody Amber",
    tagline: "Warm sandalwood paste on cool temple stone.",
    description:
      "Creamy Mysore sandalwood, golden and slow, softened with cardamom and a trace of honeyed amber.",
    notes: { top: "Cardamom, Saffron", heart: "Mysore sandalwood, Orris", base: "Amber, Tonka" },
    size: "50 ml",
    price: "₹2,850",
    image: "/perfumes/madurai-malli.webp",
    href: "#",
    theme: {
      bg: "#e6b94d",
      ink: "#2b1c08",
      muted: "#5c4219",
      accent: "#3a2608",
      onAccent: "#f6e2ae",
      glow: "#fff1c2",
    },
  },
  {
    slug: "panneer-roja",
    name: "Panneer Roja",
    tamilName: "பன்னீர் ரோஜா",
    family: "Rose Chypre",
    tagline: "Rose water sprinkled over a wedding welcome.",
    description:
      "Velvety rose petals and sweet rose water, lifted by pink pepper and grounded in a quiet patchouli warmth.",
    notes: { top: "Pink pepper, Litchi", heart: "Damask rose, Rose water", base: "Patchouli, Cashmere wood" },
    size: "50 ml",
    price: "₹2,650",
    image: "/perfumes/madurai-malli.webp",
    href: "#",
    theme: {
      bg: "#b9475f",
      ink: "#fff1f2",
      muted: "#f6c9d1",
      accent: "#ffd9df",
      onAccent: "#7a2236",
      glow: "#f08da0",
    },
  },
  {
    slug: "vettiver",
    name: "Vettiver",
    tamilName: "வெட்டிவேர்",
    family: "Earthy Woody",
    tagline: "Rain on khus mats through a long summer afternoon.",
    description:
      "Smoky vetiver root, cool and earthy, brightened with grapefruit and settled into dry cedar.",
    notes: { top: "Grapefruit, Ginger", heart: "Vetiver root, Clary sage", base: "Cedarwood, Smoked woods" },
    size: "50 ml",
    price: "₹2,550",
    image: "/perfumes/madurai-malli.webp",
    href: "#",
    theme: {
      bg: "#3f2c22",
      ink: "#f3e7d6",
      muted: "#cdb69c",
      accent: "#d9a876",
      onAccent: "#3f2c22",
      glow: "#8a5a3c",
    },
  },
];

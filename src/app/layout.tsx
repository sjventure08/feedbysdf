import type { Metadata } from "next";
import { Caveat, Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Feed bySDF — A Meal of Hope for Every Family",
    template: "%s — Feed bySDF",
  },
  description:
    "Feed bySDF serves hygienic, nutritious meals to poor families, the elderly and people in need across our communities.",
  openGraph: {
    title: "Feed bySDF — A Meal of Hope for Every Family",
    description: "Serving meals. Spreading hope. Across communities.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

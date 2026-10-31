import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { HeartIcon, PinIcon, UsersIcon } from "@/components/ui/Icons";
import { NAV, SITE } from "@/data/home";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";

export function Header() {
  return (
    <>
      {/* Announcement bar */}
      <div className="bg-forest-dark text-[12px] text-white">
        <Container className="flex h-9 items-center justify-between gap-4">
          <p className="flex items-center gap-2 truncate">
            <HeartIcon size={14} className="shrink-0 text-accent" />
            <span className="truncate">{SITE.announcement}</span>
          </p>
          <ul className="hidden shrink-0 items-center gap-6 md:flex">
            <li className="flex items-center gap-1.5">
              <PinIcon size={14} className="text-accent" /> Active in 12 cities
            </li>
            <li className="flex items-center gap-1.5">
              <UsersIcon size={14} className="text-accent" /> 500,000+ meals served
            </li>
            <li>
              <Link href="/volunteer" className="flex items-center gap-1.5 hover:underline">
                <HeartIcon size={14} className="text-accent" /> Join our mission
              </Link>
            </li>
          </ul>
        </Container>
      </div>

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur-md">
        <Container className="flex h-[72px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
            <NavLinks links={NAV} />
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
            >
              <HeartIcon size={16} /> Donate
            </Link>
            <Link href="/contact" className="text-sm font-semibold text-night hover:text-brand">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              className="hidden items-center gap-1.5 rounded-md bg-brand px-4 py-2 text-sm font-semibold text-white sm:inline-flex"
            >
              <HeartIcon size={14} /> Donate
            </Link>
            <MobileNav links={[...NAV, { href: "/contact", label: "Contact" }]} />
          </div>
        </Container>
      </header>
    </>
  );
}

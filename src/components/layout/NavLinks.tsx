"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Desktop nav links; "Home" gets the orange underline on the homepage.
export function NavLinks({ links }: { links: { href: string; label: string }[] }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`relative py-2 text-sm font-semibold transition-colors hover:text-brand ${
              active
                ? "text-brand after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded after:bg-brand"
                : "text-night"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

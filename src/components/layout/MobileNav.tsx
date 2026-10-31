"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function MobileNav({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-md border border-black/10 text-night"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      {open && (
        // Positioned against the sticky header, so it always starts right below it.
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto bg-sand px-4 py-6"
        >
          <nav aria-label="Mobile" className="flex flex-col">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-black/10 py-4 font-serif text-xl font-semibold text-night"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/donate"
            onClick={() => setOpen(false)}
            className="mt-8 flex w-full items-center justify-center rounded-md bg-brand px-6 py-3.5 font-semibold text-white"
          >
            Donate
          </Link>
        </div>
      )}
    </div>
  );
}

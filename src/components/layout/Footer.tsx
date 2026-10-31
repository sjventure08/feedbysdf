import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/Icons";
import { SITE } from "@/data/home";
import { Logo } from "./Logo";

const QUICK_LINKS = [
  [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/impact", label: "Our Impact" },
  ],
  [
    { href: "/volunteer", label: "Volunteer" },
    { href: "/donate", label: "Donate" },
    { href: "/csr", label: "Partner With Us" },
    { href: "/contact", label: "Contact" },
  ],
];

const SOCIALS = [
  { href: SITE.socials.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: SITE.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.socials.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: SITE.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SITE.socials.x, label: "X", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white text-sm text-night/80">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1.3fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-6 text-xs text-night/70">
            © 2026 Feed bySDF. All rights reserved.
          </p>
          <p className="mt-1 flex items-center gap-1 text-xs text-night/70">
            Food today. A kinder tomorrow. <HeartIcon size={12} className="text-brand" />
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold text-night">Quick Links</p>
          <div className="grid grid-cols-2 gap-x-6">
            {QUICK_LINKS.map((col, i) => (
              <ul key={i} className="space-y-1.5">
                {col.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-brand">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-night">Contact Us</p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2.5">
              <PhoneIcon size={16} className="shrink-0 text-night" />
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-brand">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MailIcon size={16} className="shrink-0 text-night" />
              <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <PinIcon size={16} className="mt-0.5 shrink-0 text-night" />
              <span>
                {SITE.address[0]}
                <br />
                {SITE.address[1]}
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <p className="mb-3 font-semibold text-night">Follow Us</p>
          <ul className="flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} className="block transition-transform hover:-translate-y-0.5">
                  <Icon size={26} />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-8 -rotate-6 font-hand text-xl leading-tight text-night/80 lg:text-right">
            Good Food
            <br />
            Stronger People
            <br />
            Healthier Tomorrows
          </p>
        </div>
      </Container>
    </footer>
  );
}

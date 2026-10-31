import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/Icons";
import { SITE } from "@/data/home";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Feed bySDF about donations, volunteering, partnerships or media.",
};

const CARDS = [
  {
    Icon: PhoneIcon,
    title: "Call us",
    lines: [SITE.phone],
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
    tone: "bg-brand-soft text-brand",
  },
  { Icon: MailIcon, title: "Email us", lines: [SITE.email], href: `mailto:${SITE.email}`, tone: "bg-forest-soft text-forest" },
  { Icon: PinIcon, title: "Visit us", lines: SITE.address, tone: "bg-brand-soft text-brand" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            We&apos;d love to <span className="text-brand">hear from you</span>
          </>
        }
        intro="Questions about donating, volunteering or bringing meals to your neighbourhood? Send us a message and our team will reply soon."
      />

      <section className="pb-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <ul className="space-y-4">
            {CARDS.map(({ Icon, title, lines, href, tone }) => (
              <li key={title} className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${tone}`}>
                  <Icon size={20} />
                </span>
                <div>
                  <h2 className="font-serif text-lg font-bold text-night">{title}</h2>
                  {href ? (
                    <a href={href} className="text-sm text-night/70 hover:text-brand">
                      {lines[0]}
                    </a>
                  ) : (
                    lines.map((l) => (
                      <p key={l} className="text-sm text-night/70">
                        {l}
                      </p>
                    ))
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-night">Send us a message</h2>
            <p className="mt-1 mb-6 text-sm text-night/60">We usually reply within two working days.</p>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}

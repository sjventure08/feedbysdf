import type { Metadata } from "next";
import { Stories } from "@/components/home/Stories";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { HeartIcon, ICONS } from "@/components/ui/Icons";
import { VOLUNTEER } from "@/data/pages";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join Feed bySDF volunteers to cook, serve and spread kindness in your community.",
};

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title={
          <>
            Give a few hours. <span className="text-brand">Feed many hearts.</span>
          </>
        }
        intro="Join 2,500+ volunteers who cook, serve and bring a smile to families in need. No experience needed — just a kind heart."
        image={VOLUNTEER.image}
        imageAlt="Volunteers serving food in the community"
        note={<>A smile with every meal <HeartIcon size={14} className="inline text-brand" /></>}
      />

      {/* Roles */}
      <section className="py-16">
        <Container>
          <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">Ways to Volunteer</h2>
          <p className="mt-1 text-night/65">Pick what fits your time and skills.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VOLUNTEER.roles.map((r, i) => {
              const Icon = ICONS[r.icon];
              return (
                <li
                  key={r.title}
                  className={`flex flex-col rounded-xl p-6 shadow-sm ring-1 ring-black/5 ${
                    i % 2 ? "bg-forest-soft" : "bg-brand-soft"
                  }`}
                >
                  <Icon size={38} className={i % 2 ? "text-forest" : "text-brand"} />
                  <h3 className="mt-4 font-serif text-lg font-bold text-night">{r.title}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-night/65">{r.body}</p>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-night/55 uppercase">{r.time}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Steps + form */}
      <section id="join" className="scroll-mt-24 bg-surface-blue py-16">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="font-serif text-3xl font-bold text-night sm:text-[34px]">How to Join</h2>
            <ol className="mt-8 space-y-6">
              {VOLUNTEER.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand font-serif font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-night">{s.title}</h3>
                    <p className="text-sm leading-relaxed text-night/65">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-10 -rotate-2 font-hand text-2xl text-forest">
              Good Food · Brighter Days · Stronger People
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
            <h2 className="font-serif text-2xl font-bold text-night">Sign up as a volunteer</h2>
            <p className="mt-1 mb-6 text-sm text-night/60">We&apos;ll call you to plan your first shift.</p>
            <EnquiryForm
              type="volunteer"
              submitLabel="Join as a Volunteer"
              successTitle="Welcome to the Feed bySDF family!"
              successBody="Our volunteer team will call you within a few days to plan your first shift."
              fields={[
                { name: "name", label: "Full name", required: true, autoComplete: "name" },
                { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
                { name: "phone", label: "Mobile number", type: "tel", required: true, autoComplete: "tel" },
                { name: "city", label: "City", required: true, autoComplete: "address-level2" },
                {
                  name: "availability",
                  label: "Availability",
                  type: "select",
                  required: true,
                  options: [
                    { value: "weekends", label: "Weekends" },
                    { value: "weekdays", label: "Weekdays" },
                    { value: "both", label: "Weekdays & weekends" },
                    { value: "occasional", label: "Occasionally / events" },
                  ],
                },
                { name: "message", label: "Anything you'd like us to know?", type: "textarea" },
              ]}
            />
          </div>
        </Container>
      </section>

      <Stories />
    </>
  );
}

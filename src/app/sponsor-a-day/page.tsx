import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { MEALS_PER_DAY, PROGRAMME } from "@/data/programme";
import { formatINR, formatNumber } from "@/lib/meals";

export const metadata: Metadata = {
  title: "Sponsor a full day",
  description: `Feed all ${PROGRAMME.beneficiaries} people for a day to mark a birthday, anniversary, festival or memory.`,
};

export default function SponsorADayPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sponsor a full day"
        title="Mark a day that matters by feeding everyone."
        intro={`${formatINR(PROGRAMME.dailyCost)} provides ${formatNumber(MEALS_PER_DAY)} meals, lunch and dinner for all ${formatNumber(PROGRAMME.beneficiaries)} people, on the date you choose.`}
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="space-y-6">
          {[
            ["Pick a date", "A birthday, anniversary, festival, or a loved one's remembrance day."],
            ["Add a dedication", "We'll mention it at the serving and in our update to you."],
            ["Receive photos", "You'll get photos from the day and a receipt for your records."],
          ].map(([title, body], i) => (
            <div key={title} className="flex gap-4">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-turmeric-soft font-serif font-semibold text-leaf">
                {i + 1}
              </span>
              <div>
                <h2 className="font-semibold text-ink">{title}</h2>
                <p className="mt-1 text-muted">{body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
          <EnquiryForm
            type="sponsor-a-day"
            submitLabel="Request this date"
            successTitle="Thank you. We've received your request."
            successBody="We'll confirm the date and send payment details within one working day."
            fields={[
              { name: "name", label: "Your name", required: true, autoComplete: "name" },
              { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
              { name: "phone", label: "Mobile number", type: "tel", required: true, autoComplete: "tel" },
              { name: "date", label: "Date to sponsor", type: "date", required: true },
              {
                name: "occasion",
                label: "Occasion",
                type: "select",
                required: true,
                options: [
                  { value: "birthday", label: "Birthday" },
                  { value: "anniversary", label: "Anniversary" },
                  { value: "memorial", label: "In memory of a loved one" },
                  { value: "festival", label: "Festival" },
                  { value: "other", label: "Other" },
                ],
              },
              { name: "dedication", label: "Dedication message", type: "textarea" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}

import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { MEALS_PER_MONTH, MONTHLY_COST } from "@/data/programme";
import { formatLakh, formatNumber } from "@/lib/meals";

export const metadata: Metadata = {
  title: "CSR partnerships",
  description: "Partner with Food for Dignity through your company's CSR programme.",
};

const OFFER = [
  "Monthly impact report with meal counts and photos",
  "Budget versus actual spending each quarter",
  "Site visits and employee volunteering",
  "Registration and compliance documents on request",
];

export default function CsrPage() {
  return (
    <>
      <PageHeader
        eyebrow="CSR partnerships"
        title="Put your CSR budget where it's measured in meals."
        intro={`₹${formatLakh(MONTHLY_COST)} funds the whole programme for a month: ${formatNumber(MEALS_PER_MONTH)} meals. Partial and multi-year partnerships are welcome.`}
      />
      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-ink">What partners receive</h2>
          <ul className="mt-6 space-y-4">
            {OFFER.map((item) => (
              <li key={item} className="flex gap-3 text-muted">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-turmeric" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
          <EnquiryForm
            type="csr"
            submitLabel="Send enquiry"
            successTitle="Thank you for reaching out."
            successBody="Our partnerships team will get back to you within two working days."
            fields={[
              { name: "company", label: "Company", required: true, autoComplete: "organization" },
              { name: "contactName", label: "Contact name", required: true, autoComplete: "name" },
              { name: "email", label: "Work email", type: "email", required: true, autoComplete: "email" },
              { name: "phone", label: "Mobile number", type: "tel", required: true, autoComplete: "tel" },
              { name: "budget", label: "Indicative budget" },
              { name: "message", label: "Message", type: "textarea" },
            ]}
          />
        </div>
      </Container>
    </>
  );
}

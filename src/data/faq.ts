import type { FaqItem } from "@/types/donation";
import { COST_PER_PERSON_PER_DAY, PROGRAMME } from "./programme";

export const FAQ: FaqItem[] = [
  {
    question: "How much does one meal cost?",
    answer: `It costs about ₹${COST_PER_PERSON_PER_DAY} to give one person lunch and dinner for a day. That covers ingredients, cooking, packing and delivery.`,
  },
  {
    question: "Will I get a tax receipt?",
    // TODO(SDF): update once 80G status is confirmed.
    answer:
      "Every donor receives a receipt by email. 80G tax-exemption details will be confirmed shortly. Please enter your PAN if you want it on the receipt.",
  },
  {
    question: "Can I sponsor meals on a special day?",
    answer: `Yes. Sponsoring a full day (₹${PROGRAMME.dailyCost.toLocaleString("en-IN")}) feeds everyone in the programme. You can dedicate it to a birthday, anniversary, festival or the memory of a loved one.`,
  },
  {
    question: "Can I cancel a monthly donation?",
    answer:
      "Yes, at any time. Use the link in your confirmation email or write to us and we'll cancel it straight away.",
  },
  {
    question: "Is online payment safe?",
    answer:
      "Payments are processed by Razorpay, a PCI-DSS compliant gateway. We never see or store your card or bank details.",
  },
  {
    question: "Can my company support this through CSR?",
    answer:
      "Yes. Use the CSR enquiry form and we'll share our registration documents, budget and reporting plan.",
  },
];

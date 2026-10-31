"use client";

import { useEffect, useState } from "react";
import { CONTACT_SUBJECTS } from "@/data/pages";
import { EnquiryForm } from "./EnquiryForm";

// Contact form; preselects the subject from ?subject=….
export function ContactForm() {
  const [subject, setSubject] = useState("general");

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get("subject");
    if (wanted && CONTACT_SUBJECTS.some((s) => s.value === wanted)) setSubject(wanted);
  }, []);

  return (
    <EnquiryForm
      key={subject}
      type="contact"
      submitLabel="Send Message"
      successTitle="Thank you for writing to us."
      successBody="Our team will get back to you within two working days."
      fields={[
        { name: "name", label: "Your name", required: true, autoComplete: "name" },
        { name: "email", label: "Email", type: "email", required: true, autoComplete: "email" },
        { name: "phone", label: "Mobile number", type: "tel", autoComplete: "tel" },
        { name: "subject", label: "Subject", type: "select", required: true, options: CONTACT_SUBJECTS, defaultValue: subject },
        { name: "message", label: "Message", type: "textarea", required: true },
      ]}
    />
  );
}

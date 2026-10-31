import { notifyTeam } from "@/lib/email";
import { enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  const parsed = enquirySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json(
      { error: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 },
    );
  }

  // TODO: store enquiries (DB / CRM) in addition to emailing the team.
  const subjects = {
    csr: "New CSR enquiry",
    "sponsor-a-day": "New sponsor-a-day request",
    volunteer: "New volunteer sign-up",
    contact: "New contact message",
  } as const;
  await notifyTeam(subjects[parsed.data.type], parsed.data);

  return Response.json({ ok: true });
}

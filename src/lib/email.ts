import "server-only";

type ReceiptInput = {
  to: string;
  name: string;
  amount: number;
  paymentId: string;
  frequency: "once" | "monthly";
};

// TODO: wire up an email provider (Resend, SES, etc.) and send a real receipt.
// Kept as a stub so the payment flow works end to end without one.
export async function sendReceipt(input: ReceiptInput): Promise<void> {
  console.info("[email] receipt pending provider setup", {
    to: input.to,
    amount: input.amount,
    paymentId: input.paymentId,
    frequency: input.frequency,
  });
}

export async function notifyTeam(subject: string, body: Record<string, unknown>): Promise<void> {
  console.info(`[email] team notification: ${subject}`, body);
}

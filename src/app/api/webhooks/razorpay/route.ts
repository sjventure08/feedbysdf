import { sendReceipt } from "@/lib/email";
import { verifyWebhookSignature } from "@/lib/razorpay";

type PaymentEntity = {
  id: string;
  amount: number;
  email?: string;
  notes?: Record<string, string>;
  subscription_id?: string;
};

export async function POST(request: Request) {
  const raw = await request.text();
  const signature = request.headers.get("x-razorpay-signature") ?? "";

  if (!verifyWebhookSignature(raw, signature)) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(raw) as {
    event: string;
    payload: { payment?: { entity: PaymentEntity } };
  };

  switch (event.event) {
    case "payment.captured":
    case "subscription.charged": {
      const payment = event.payload.payment?.entity;
      if (payment) {
        // TODO: persist the donation (DB) and make this idempotent on payment.id.
        await sendReceipt({
          to: payment.notes?.email ?? payment.email ?? "",
          name: payment.notes?.name ?? "Donor",
          amount: payment.amount / 100,
          paymentId: payment.id,
          frequency: event.event === "subscription.charged" ? "monthly" : "once",
        });
      }
      break;
    }
    default:
      break;
  }

  return Response.json({ received: true });
}

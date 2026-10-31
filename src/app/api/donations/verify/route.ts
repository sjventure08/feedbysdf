import {
  isRazorpayConfigured,
  verifyOrderSignature,
  verifySubscriptionSignature,
} from "@/lib/razorpay";
import { verifySchema } from "@/lib/validation";

export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return Response.json({ error: "Online payments aren't set up yet." }, { status: 503 });
  }
  const parsed = verifySchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Invalid payment response." }, { status: 400 });
  }
  const { razorpay_order_id, razorpay_subscription_id, razorpay_payment_id, razorpay_signature } =
    parsed.data;

  const valid = razorpay_order_id
    ? verifyOrderSignature(razorpay_order_id, razorpay_payment_id, razorpay_signature)
    : razorpay_subscription_id
      ? verifySubscriptionSignature(razorpay_subscription_id, razorpay_payment_id, razorpay_signature)
      : false;

  if (!valid) {
    return Response.json({ error: "We couldn't verify this payment. Please contact us." }, { status: 400 });
  }

  // The webhook is the source of truth for recording the donation and sending
  // the receipt, so a donor closing the tab early still gets one.
  return Response.json({ ok: true, paymentId: razorpay_payment_id });
}

import { getRazorpay, isRazorpayConfigured } from "@/lib/razorpay";
import { createSubscriptionSchema } from "@/lib/validation";

export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return Response.json({ error: "Online payments aren't set up yet." }, { status: 503 });
  }

  const parsed = createSubscriptionSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Please check the amount and your details." }, { status: 400 });
  }
  const { amount, donor } = parsed.data;
  const razorpay = getRazorpay();

  try {
    // One plan per amount. For production, cache plan ids per amount
    // (or pre-create plans for the fixed tiers) instead of creating each time.
    const plan = await razorpay.plans.create({
      period: "monthly",
      interval: 1,
      item: { name: `Food for Dignity monthly ₹${amount}`, amount: amount * 100, currency: "INR" },
    });
    const subscription = await razorpay.subscriptions.create({
      plan_id: plan.id,
      total_count: 120, // up to 10 years; donor can cancel any time
      customer_notify: 1,
      notes: { name: donor.name, email: donor.email, phone: donor.phone, pan: donor.pan ?? "" },
    });
    return Response.json({
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.RAZORPAY_KEY_ID,
      subscriptionId: subscription.id,
      amount,
    });
  } catch (err) {
    console.error("[create-subscription]", err);
    return Response.json({ error: "Couldn't start the payment. Please try again." }, { status: 502 });
  }
}

import { getRazorpay, isRazorpayConfigured } from "@/lib/razorpay";
import { createOrderSchema } from "@/lib/validation";

export async function POST(request: Request) {
  if (!isRazorpayConfigured()) {
    return Response.json({ error: "Online payments aren't set up yet." }, { status: 503 });
  }

  const parsed = createOrderSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Please check the amount and your details." }, { status: 400 });
  }
  const { amount, donor, dedication } = parsed.data;

  try {
    const order = await getRazorpay().orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: `ffd_${Date.now()}`,
      notes: {
        name: donor.name,
        email: donor.email,
        phone: donor.phone,
        pan: donor.pan ?? "",
        dedication: dedication ?? "",
      },
    });
    return Response.json({
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? process.env.RAZORPAY_KEY_ID,
      orderId: order.id,
      amount,
    });
  } catch (err) {
    console.error("[create-order]", err);
    return Response.json({ error: "Couldn't start the payment. Please try again." }, { status: 502 });
  }
}

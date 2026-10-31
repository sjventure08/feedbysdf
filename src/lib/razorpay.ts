import "server-only";
import crypto from "node:crypto";
import Razorpay from "razorpay";

let client: Razorpay | null = null;

export function isRazorpayConfigured(): boolean {
  return Boolean(process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET);
}

export function getRazorpay(): Razorpay {
  if (!isRazorpayConfigured()) {
    throw new Error("Razorpay keys are missing. Set them in .env.local.");
  }
  client ??= new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
  return client;
}

function hmac(payload: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

/** Checkout signature for a one-time order. */
export function verifyOrderSignature(orderId: string, paymentId: string, signature: string) {
  return safeEqual(hmac(`${orderId}|${paymentId}`, process.env.RAZORPAY_KEY_SECRET!), signature);
}

/** Checkout signature for a subscription's first payment. */
export function verifySubscriptionSignature(
  subscriptionId: string,
  paymentId: string,
  signature: string,
) {
  return safeEqual(
    hmac(`${paymentId}|${subscriptionId}`, process.env.RAZORPAY_KEY_SECRET!),
    signature,
  );
}

export function verifyWebhookSignature(rawBody: string, signature: string) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) return false;
  return safeEqual(hmac(rawBody, secret), signature);
}

import { z } from "zod";
import { MIN_DONATION } from "@/data/tiers";

const phone = z
  .string()
  .trim()
  .regex(/^(\+91[\s-]?)?[6-9]\d{9}$/, "Enter a valid Indian mobile number");

export const donorSchema = z.object({
  name: z.string().trim().min(2, "Enter your name"),
  email: z.email("Enter a valid email"),
  phone,
  pan: z
    .string()
    .trim()
    .toUpperCase()
    .regex(/^[A-Z]{5}\d{4}[A-Z]$/, "Enter a valid PAN")
    .optional()
    .or(z.literal("")),
});

export const createOrderSchema = z.object({
  amount: z.number().int().min(MIN_DONATION).max(10_000_000),
  donor: donorSchema,
  dedication: z.string().trim().max(200).optional(),
});

export const createSubscriptionSchema = z.object({
  amount: z.number().int().min(MIN_DONATION).max(1_000_000),
  donor: donorSchema,
});

export const verifySchema = z.object({
  razorpay_order_id: z.string().optional(),
  razorpay_subscription_id: z.string().optional(),
  razorpay_payment_id: z.string(),
  razorpay_signature: z.string(),
});

export const enquirySchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("sponsor-a-day"),
    name: z.string().trim().min(2),
    email: z.email(),
    phone,
    date: z.iso.date(),
    occasion: z.enum(["birthday", "anniversary", "memorial", "festival", "other"]),
    dedication: z.string().trim().max(200).optional(),
  }),
  z.object({
    type: z.literal("csr"),
    company: z.string().trim().min(2),
    contactName: z.string().trim().min(2),
    email: z.email(),
    phone,
    budget: z.string().trim().optional(),
    message: z.string().trim().max(2000).optional(),
  }),
  z.object({
    type: z.literal("volunteer"),
    name: z.string().trim().min(2),
    email: z.email(),
    phone,
    city: z.string().trim().min(2),
    availability: z.enum(["weekdays", "weekends", "both", "occasional"]),
    message: z.string().trim().max(2000).optional(),
  }),
  z.object({
    type: z.literal("contact"),
    name: z.string().trim().min(2),
    email: z.email(),
    phone: phone.optional().or(z.literal("")),
    subject: z.enum(["general", "partnership", "media", "other"]),
    message: z.string().trim().min(5).max(2000),
  }),
]);

export type Donor = z.infer<typeof donorSchema>;
export type CreateOrderInput = z.infer<typeof createOrderSchema>;
export type Enquiry = z.infer<typeof enquirySchema>;

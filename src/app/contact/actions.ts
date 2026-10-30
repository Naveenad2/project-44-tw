"use server";

import { site } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error" | "fallback";
  message?: string;
  errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
  mailto?: string;
  /** Echoed back so the form keeps what the visitor typed (React resets forms after an action). */
  values?: Record<string, string>;
};

const clean = (v: FormDataEntryValue | null, max = 2000) =>
  String(v ?? "")
    .trim()
    .slice(0, max);
const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendEnquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (clean(formData.get("website"))) return { status: "success", message: "Thanks! We'll be in touch shortly." };

  const data = {
    name: clean(formData.get("name"), 120),
    company: clean(formData.get("company"), 160),
    email: clean(formData.get("email"), 200),
    phone: clean(formData.get("phone"), 40),
    service: clean(formData.get("service"), 120),
    message: clean(formData.get("message"), 4000),
  };

  const errors: ContactState["errors"] = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "Please enter a valid email address.";
  if (data.phone && !/^[+\d][\d\s()-]{6,}$/.test(data.phone)) errors.phone = "Please enter a valid phone number.";
  if (data.message.length < 10) errors.message = "Please tell us a little more (at least 10 characters).";
  if (Object.keys(errors).length)
    return { status: "error", errors, message: "Please fix the highlighted fields.", values: data };

  const lines = [
    `Name: ${data.name}`,
    `Company: ${data.company || "-"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "-"}`,
    `Service: ${data.service || "-"}`,
    "",
    data.message,
  ];

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(`Website enquiry from ${data.name}`)}&body=${encodeURIComponent(lines.join("\n"))}`;
    return {
      status: "fallback",
      message: "Almost there! Click below to send your enquiry from your email app.",
      mailto,
      values: data,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Arqivo Website <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? site.email],
        reply_to: data.email,
        subject: `New enquiry: ${data.service || "General"} – ${data.name}`,
        text: lines.join("\n"),
        html: `<pre style="font-family:system-ui,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(lines.join("\n"))}</pre>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
    return {
      status: "success",
      message: "Thank you! Your enquiry has been sent. We'll reply within one business day.",
    };
  } catch (err) {
    console.error("Contact form delivery failed", err);
    return {
      status: "error",
      message: `Sorry, something went wrong. Please email us directly at ${site.email} or call ${site.phones[0].display}.`,
      values: data,
    };
  }
}

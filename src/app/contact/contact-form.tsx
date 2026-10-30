"use client";

import { useActionState, useLayoutEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { sendEnquiry, type ContactState } from "./actions";

const initial: ContactState = { status: "idle" };

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15 aria-[invalid=true]:border-red-400";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-navy-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ services }: { services: string[] }) {
  const [key, setKey] = useState(0);
  const sent = useRef(false);

  // Navigation keeps this page mounted but hidden; start fresh after a completed send.
  useLayoutEffect(() => {
    return () => {
      if (sent.current) {
        sent.current = false;
        setKey((k) => k + 1);
      }
    };
  }, []);

  return (
    <EnquiryForm
      key={key}
      services={services}
      onSent={() => (sent.current = true)}
      onReset={() => setKey((k) => k + 1)}
    />
  );
}

function EnquiryForm({ services, onSent, onReset }: { services: string[]; onSent: () => void; onReset: () => void }) {
  const [state, action, pending] = useActionState(async (prev: ContactState, data: FormData) => {
    const next = await sendEnquiry(prev, data);
    if (next.status === "success") onSent();
    return next;
  }, initial);
  const e = state.errors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl bg-white p-10 text-center ring-1 ring-slate-200">
        <span className="grid size-16 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-8" aria-hidden />
        </span>
        <h3 className="mt-5 text-2xl font-bold text-navy-900">Enquiry received</h3>
        <p className="mt-2 max-w-sm text-slate-600" role="status">
          {state.message}
        </p>
        <button type="button" onClick={onReset} className="mt-6 text-sm font-semibold text-brand-600 hover:underline">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      action={action}
      noValidate
      className="grid gap-5 rounded-3xl bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-slate-200 sm:grid-cols-2 sm:p-8"
    >
      <div className="hidden" aria-hidden>
        <label>
          Website <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <Field label="Full name *" name="name" error={e.name}>
        <input
          id="name"
          name="name"
          defaultValue={v.name}
          required
          autoComplete="name"
          placeholder="Your name"
          className={input}
          aria-invalid={!!e.name}
          aria-describedby={e.name ? "name-error" : undefined}
        />
      </Field>
      <Field label="Company" name="company">
        <input
          id="company"
          name="company"
          defaultValue={v.company}
          autoComplete="organization"
          placeholder="Company name"
          className={input}
        />
      </Field>
      <Field label="Work email *" name="email" error={e.email}>
        <input
          id="email"
          name="email"
          defaultValue={v.email}
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={input}
          aria-invalid={!!e.email}
          aria-describedby={e.email ? "email-error" : undefined}
        />
      </Field>
      <Field label="Phone" name="phone" error={e.phone}>
        <input
          id="phone"
          name="phone"
          defaultValue={v.phone}
          type="tel"
          autoComplete="tel"
          placeholder="+91 98765 43210"
          className={input}
          aria-invalid={!!e.phone}
          aria-describedby={e.phone ? "phone-error" : undefined}
        />
      </Field>
      <div className="sm:col-span-2">
        <Field label="Service you're interested in" name="service">
          <select id="service" name="service" key={v.service} defaultValue={v.service ?? ""} className={input}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Other / Not sure yet</option>
          </select>
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field label="How can we help? *" name="message" error={e.message}>
          <textarea
            id="message"
            name="message"
            defaultValue={v.message}
            required
            rows={5}
            placeholder="Tell us about your process, expected volumes and timelines."
            className={`${input} resize-y`}
            aria-invalid={!!e.message}
            aria-describedby={e.message ? "message-error" : undefined}
          />
        </Field>
      </div>

      {state.message && state.status !== "fallback" && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 sm:col-span-2">
          {state.message}
        </p>
      )}
      {state.status === "fallback" && state.mailto && (
        <div
          role="status"
          className="flex flex-col gap-3 rounded-xl bg-brand-50 p-4 text-sm text-navy-900 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between"
        >
          {state.message}
          <a
            href={state.mailto}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 font-semibold text-white hover:bg-navy-800"
          >
            <Mail className="size-4" aria-hidden /> Open email app
          </a>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-slate-500">
          We respect your privacy. Your details are only used to respond to your enquiry.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" aria-hidden /> : <Send className="size-4" aria-hidden />}
          {pending ? "Sending..." : "Send Enquiry"}
        </button>
      </div>
    </form>
  );
}

import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections";
import { FaqList, SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.name} for a free consultation on outsourcing your customer support, call center, back office or data operations.`,
  alternates: { canonical: "/contact" },
};

const faqs = [
  { q: "How soon will you respond?", a: "We reply to enquiries within one business day. For urgent requirements, please call us directly." },
  { q: "Is the first consultation free?", a: "Yes. The initial consultation and proposal are free and come with no obligation." },
  { q: "What should I include in my enquiry?", a: "Tell us which process you want to outsource, approximate volumes, working hours and the tools you use. We will take it from there." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business"
        text="Share your requirements and our team will get back to you with ideas, a recommended engagement model and a transparent quote."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div className="order-2 space-y-4 lg:order-1">
            <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-brand-700 p-7 text-white sm:p-8">
              <h2 className="text-2xl font-bold">Contact details</h2>
              <p className="mt-2 text-sm text-blue-100/80">Speak directly with our team.</p>
              <ul className="mt-7 space-y-5">
                {site.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="flex items-center gap-4 hover:text-brand-200">
                      <span className="grid size-11 place-items-center rounded-xl bg-white/15">
                        <Phone className="size-5" aria-hidden />
                      </span>
                      <span>
                        <span className="block text-xs text-blue-100/70">Phone</span>
                        <span className="font-semibold">{p.display}</span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-4 hover:text-brand-200">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                      <Mail className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-blue-100/70">Email</span>
                      <span className="block break-all font-semibold">{site.email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                    <Clock className="size-5" aria-hidden />
                  </span>
                  <span className="text-sm">{site.hours}</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/15">
                    <MapPin className="size-5" aria-hidden />
                  </span>
                  <span className="text-sm">{site.location} · Serving clients worldwide</span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-surface p-7 sm:p-8">
              <p className="font-display text-lg font-bold text-navy-900">{site.leader.name}</p>
              <p className="text-sm text-brand-600">{site.leader.role}</p>
              <p className="mt-3 text-sm text-slate-600">
                Have a larger or more complex requirement? Ask to speak with our Managing Director directly.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ContactForm services={services.map((s) => s.title)} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 sm:py-24">
        <div className="container-x max-w-4xl">
          <SectionHeading eyebrow="Good to know" title="Before you reach out" />
          <div className="mt-10">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}

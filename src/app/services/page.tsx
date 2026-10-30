import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "BPO Services",
  description:
    "Inbound and outbound call center, omnichannel customer support, technical helpdesk, back office, data entry, document digitization and finance & accounting outsourcing from Arqivo LLP.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Outsourcing services that scale with your business"
        text="Choose a single process or a complete operations partnership. Every service comes with trained people, documented workflows, quality checks and transparent reporting."
        crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      >
        <ButtonLink href="/contact" variant="white" arrow>
          Get a Free Quote
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-x space-y-6">
          {services.map(({ slug, title, short, icon: Icon, features }, i) => (
            <article
              key={slug}
              className="reveal group grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-xl hover:shadow-brand-500/10 sm:p-8 lg:grid-cols-[auto_1fr_1.1fr] lg:items-center lg:gap-12 lg:p-10"
            >
              <div className="flex items-center gap-5 lg:block">
                <span className="grid size-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-800 text-white shadow-lg shadow-brand-500/25">
                  <Icon className="size-8" aria-hidden />
                </span>
                <span className="font-display text-sm font-bold text-slate-300 lg:mt-4 lg:block">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy-900">{title}</h2>
                <p className="mt-3 text-slate-600">{short}</p>
                <Link
                  href={`/services/${slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:gap-3"
                >
                  View service details <ArrowRight className="size-4 transition-all" aria-hidden />
                </Link>
              </div>
              <ul className="grid gap-3 rounded-2xl bg-surface p-5 sm:grid-cols-2">
                {features.slice(0, 6).map((f) => (
                  <li key={f.title} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                    {f.title}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Included with every service"
            title="The Arqivo standard"
            text="Whatever you outsource, these foundations come as standard."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Dedicated account manager", "One point of contact who knows your business."],
              ["Documented SOPs", "Clear procedures, agreed with you before go-live."],
              ["Quality assurance", "Regular audits, scorecards and coaching."],
              ["Transparent reporting", "Daily, weekly and monthly performance reports."],
            ].map(([t, d]) => (
              <div key={t} className="reveal rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <CheckCircle2 className="size-6 text-brand-500" aria-hidden />
                <h3 className="mt-4 font-bold text-navy-900">{t}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

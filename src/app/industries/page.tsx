import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Outsourced customer support, call center, back office and data services tailored for e-commerce, healthcare, BFSI, insurance, real estate, telecom, travel, education, logistics and SaaS.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industry-ready teams for every kind of business"
        text="Every industry has its own customers, vocabulary and rules. We train our teams on yours, so your customers get informed, confident support from day one."
        crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      >
        <ButtonLink href="/contact" variant="white" arrow>
          Discuss Your Industry
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {industries.map(({ name, icon: Icon, text, uses }) => (
            <article
              key={name}
              className="reveal group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10 sm:p-9"
            >
              <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-brand-50 transition-transform duration-500 group-hover:scale-125" />
              <div className="relative flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-800 text-white shadow-lg shadow-brand-500/25">
                  <Icon className="size-7" aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">{name}</h2>
              </div>
              <p className="relative mt-5 text-slate-600">{text}</p>
              <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                {uses.map((u) => (
                  <li key={u} className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                    <CheckCircle2 className="size-4 shrink-0 text-brand-500" aria-hidden />
                    {u}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <CtaBand title="Don't see your industry?" text="Our processes adapt to most businesses. Share your requirements and we will show you how we can help." />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Eye, Heart, Lightbulb, Scale, Target, Users, Zap } from "lucide-react";
import mark from "@/assets/arqivo-mark.png";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, Eyebrow, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Arqivo LLP, a business process outsourcing company focused on reliable people, structured processes and better outcomes for clients.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Heart, title: "Customer Obsession", text: "Every interaction reflects on our clients' brands, so we treat their customers like our own." },
  { icon: Scale, title: "Integrity", text: "Honest reporting, clear pricing and doing what we say we will do." },
  { icon: Target, title: "Accountability", text: "We own outcomes, measure everything and fix issues quickly." },
  { icon: Lightbulb, title: "Continuous Improvement", text: "We look for better ways to work and share ideas with our clients." },
  { icon: Users, title: "People First", text: "Well-trained, supported and motivated teams deliver the best service." },
  { icon: Zap, title: "Agility", text: "We adapt quickly to new requirements, volumes and technologies." },
];

const differentiators = [
  ["Tailored, not templated", "Every programme is designed around your processes, tools and customers."],
  ["Senior involvement", "Leadership stays directly involved in client relationships and quality."],
  ["Fast, structured onboarding", "A proven transition plan gets you live quickly without disruption."],
  ["Flexible and scalable", "Start small, scale up, or change models as your business evolves."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Arqivo"
        title="We help businesses do more with the right people and processes"
        text="Arqivo LLP is a business process outsourcing company that takes on customer-facing and back office work so our clients can focus on what they do best."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Built to make outsourcing simple and dependable</h2>
            <div className="mt-6 space-y-5 text-slate-600 sm:text-lg">
              <p>
                Arqivo LLP was founded with a clear belief: outsourcing should feel like adding a capable, committed
                department to your business, not handing work to a faceless vendor.
              </p>
              <p>
                We bring together trained professionals, documented processes and modern tools to handle customer
                support, call center, back office, data and finance operations. Our clients get consistent quality,
                predictable costs and the freedom to scale.
              </p>
              <p>
                Our promise is captured in three words on every card we hand out:{" "}
                <strong className="text-navy-900">{site.slogan.join(". ")}.</strong>
              </p>
            </div>
          </div>
          <div className="reveal relative">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-600 p-10 text-white sm:p-14">
              <div aria-hidden className="bg-grid absolute inset-0" />
              <Image src={mark} alt="Arqivo LLP logo mark" sizes="160px" className="relative w-32 rounded-2xl bg-white p-4 sm:w-40" />
              <div className="relative mt-10 grid gap-6 sm:grid-cols-3">
                {site.slogan.map((s, i) => (
                  <div key={s} className="border-l-2 border-brand-400 pl-4">
                    <span className="font-display text-sm font-bold text-brand-300">0{i + 1}</span>
                    <p className="mt-1 font-display text-lg font-bold leading-tight">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Compass,
              label: "Our mission",
              text: "To deliver reliable, secure and cost-effective business process services that help our clients serve their customers better and grow faster.",
            },
            {
              icon: Eye,
              label: "Our vision",
              text: "To be the outsourcing partner businesses recommend first, known for the quality of our people, the strength of our processes and the outcomes we deliver.",
            },
          ].map(({ icon: Icon, label, text }) => (
            <div key={label} className="reveal rounded-3xl bg-white p-8 ring-1 ring-slate-200 sm:p-10">
              <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-navy-800 text-white">
                <Icon className="size-7" aria-hidden />
              </span>
              <h2 className="mt-6 text-2xl font-bold text-navy-900">{label}</h2>
              <p className="mt-3 leading-relaxed text-slate-600 sm:text-lg">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="What guides our work every day" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal group rounded-2xl border border-slate-200 p-7 transition-all hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/10">
                <Icon className="size-8 text-brand-500 transition-transform group-hover:scale-110" aria-hidden />
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div className="reveal rounded-3xl bg-white/[0.05] p-8 ring-1 ring-white/10 sm:p-10">
            <div className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 font-display text-2xl font-extrabold">
              {site.leader.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <p className="mt-6 font-display text-2xl font-bold">{site.leader.name}</p>
            <p className="text-brand-300">{site.leader.role}</p>
            <blockquote className="mt-6 border-l-2 border-brand-400 pl-5 leading-relaxed text-blue-100/80">
              “Our clients trust us with their customers and their data. We earn that trust every day through
              disciplined processes, open communication and a team that genuinely cares about results.”
            </blockquote>
          </div>
          <div>
            <SectionHeading
              light
              align="left"
              eyebrow="Leadership & approach"
              title="What makes Arqivo different"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {differentiators.map(([t, d]) => (
                <div key={t} className="reveal">
                  <h3 className="font-bold">{t}</h3>
                  <p className="mt-1.5 text-sm text-blue-100/70">{d}</p>
                </div>
              ))}
            </div>
            <ButtonLink href="/contact" variant="white" arrow className="reveal mt-10">
              Work With Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

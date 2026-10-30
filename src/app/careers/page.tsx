import type { Metadata } from "next";
import { Award, BookOpen, Briefcase, HeartHandshake, Mail, TrendingUp, Users } from "lucide-react";
import { CtaBand, PageHero } from "@/components/sections";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build your career in business process outsourcing with Arqivo LLP. We hire customer support, calling, back office, data and finance professionals.",
  alternates: { canonical: "/careers" },
};

const perks = [
  { icon: BookOpen, title: "Structured training", text: "Product, communication and process training before you start, and coaching after." },
  { icon: TrendingUp, title: "Clear growth paths", text: "Grow from associate to team lead, quality analyst, trainer and beyond." },
  { icon: Award, title: "Recognition", text: "Performance incentives and recognition for great work." },
  { icon: HeartHandshake, title: "Supportive culture", text: "Approachable leaders, respectful teams and a professional workplace." },
];

const roles = [
  "Customer Support Executive (Voice)",
  "Chat & Email Support Executive",
  "Telesales / Outbound Calling Executive",
  "Technical Support Associate",
  "Back Office & Data Entry Executive",
  "Accounts Assistant",
  "Quality Analyst",
  "Team Leader",
];

const subject = encodeURIComponent("Job application – [Role name]");
const body = encodeURIComponent("Hello Arqivo team,\n\nI would like to apply for the role of ...\n\nPlease find my CV attached.\n\nName:\nPhone:\nExperience:\n");

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Grow your career with Arqivo"
        text="We are always looking for clear communicators, quick learners and people who take pride in doing things right. Join a team where your work makes a difference to businesses and their customers."
        crumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      >
        <ButtonLink href={`mailto:${site.email}?subject=${subject}&body=${body}`} variant="white" arrow>
          Send Your CV
        </ButtonLink>
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why join us" title="A workplace that invests in you" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal rounded-2xl border border-slate-200 p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div className="reveal">
            <SectionHeading
              align="left"
              eyebrow="Roles we hire for"
              title="Find your fit"
              text="Openings change with client needs. Send us your CV with the role you are interested in and we will contact you when a matching position opens."
            />
            <div className="mt-8 rounded-2xl bg-navy-900 p-6 text-white">
              <p className="flex items-center gap-2 font-semibold">
                <Mail className="size-5 text-brand-300" aria-hidden /> How to apply
              </p>
              <p className="mt-2 text-sm text-blue-100/80">
                Email your CV to{" "}
                <a href={`mailto:${site.email}`} className="font-semibold text-white underline underline-offset-4">
                  {site.email}
                </a>{" "}
                with the role name in the subject line.
              </p>
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {roles.map((r) => (
              <li key={r} className="reveal flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  {r.includes("Lead") || r.includes("Analyst") ? (
                    <Users className="size-5" aria-hidden />
                  ) : (
                    <Briefcase className="size-5" aria-hidden />
                  )}
                </span>
                <span className="text-sm font-semibold text-navy-900">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Looking for an outsourcing partner instead?" />
    </>
  );
}

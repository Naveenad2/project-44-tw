import type { Metadata } from "next";
import { PageHero } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

const sections = [
  {
    h: "Information we collect",
    p: "When you contact us through this website, by email or by phone, we collect the details you choose to share, such as your name, company, email address, phone number and the content of your message.",
  },
  {
    h: "How we use your information",
    p: "We use this information only to respond to your enquiry, prepare proposals, provide our services and communicate with you about your request. We do not sell your personal information.",
  },
  {
    h: "Client data",
    p: "Data that clients share with us to deliver outsourcing services is handled under the confidentiality and data-protection terms of the relevant client agreement, with access limited to authorised team members.",
  },
  {
    h: "Data security",
    p: "We use reasonable administrative, technical and physical safeguards to protect information against unauthorised access, loss or misuse.",
  },
  {
    h: "Data retention",
    p: "We keep enquiry information only for as long as needed to respond and maintain our business records, or as required by law.",
  },
  {
    h: "Your choices",
    p: `You may ask us to access, correct or delete the personal information you have shared with us by emailing ${site.email}.`,
  },
  {
    h: "Changes to this policy",
    p: "We may update this policy from time to time. The latest version will always be available on this page.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text={`${site.name} respects your privacy. This policy explains how we handle information shared with us through this website.`}
        crumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
      />
      <section className="py-16 sm:py-20">
        <div className="container-x max-w-3xl space-y-10">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-bold text-navy-900 sm:text-2xl">{s.h}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{s.p}</p>
            </div>
          ))}
          <div className="rounded-2xl bg-surface p-6 text-sm text-slate-600">
            Questions about this policy? Contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-brand-600">
              {site.email}
            </a>
            .
          </div>
        </div>
      </section>
    </>
  );
}

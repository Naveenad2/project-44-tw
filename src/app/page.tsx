import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Eye,
  FileCheck2,
  Gauge,
  Handshake,
  KeyRound,
  Lock,
  Rocket,
  Scale,
  Server,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import mark from "@/assets/arqivo-mark.png";
import { CardStripes, CtaBand, ServiceCard } from "@/components/sections";
import { ButtonLink, Eyebrow, FaqList, JsonLd, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/industries";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const highlights = [
  { value: "24/7", label: "Round-the-clock operations", icon: Clock },
  { value: `${services.length}+`, label: "Core outsourcing services", icon: Sparkles },
  { value: `${industries.length}+`, label: "Industries supported", icon: Target },
  { value: "2–4 wks", label: "Typical go-live timeline", icon: Rocket },
];

const pillars = [
  { icon: BadgeCheck, title: "Quality First", text: "Documented SOPs, call and transaction audits, and regular calibration keep standards consistently high." },
  { icon: ShieldCheck, title: "Data Security", text: "NDA-backed engagements, role-based access and controlled workstations protect your information." },
  { icon: TrendingUp, title: "Scalable Teams", text: "Ramp up for launches and peak seasons, then scale back, without the cost of hiring and layoffs." },
  { icon: Scale, title: "Cost Efficiency", text: "Reduce operating costs significantly compared with building and managing the same team in-house." },
  { icon: Eye, title: "Full Transparency", text: "Daily dashboards, weekly reviews and monthly business reports keep you in control." },
  { icon: Handshake, title: "Dedicated Partnership", text: "A single point of contact and a team that learns your business like an in-house department." },
];

const steps = [
  { icon: Users, title: "Discover", text: "We understand your processes, volumes, tools and goals." },
  { icon: ClipboardCheck, title: "Design", text: "We define SOPs, staffing, SLAs and a transparent pricing model." },
  { icon: UserCheck, title: "Onboard & Train", text: "Agents are recruited and trained on your products and systems." },
  { icon: Rocket, title: "Go Live", text: "A supervised pilot moves into full production with daily reporting." },
  { icon: Gauge, title: "Optimise", text: "We review KPIs together and keep improving quality and cost." },
];

const models = [
  {
    name: "Dedicated Team",
    text: "A full-time team working exclusively on your account, managed by us and integrated with your workflows.",
    points: ["Exclusive trained agents", "Dedicated team lead", "Best for steady, ongoing volumes"],
    featured: true,
  },
  {
    name: "Shared Team",
    text: "Pay for the work done, such as per hour, per call or per transaction, with a team shared across clients.",
    points: ["Lower entry cost", "Pay-as-you-go pricing", "Best for variable or smaller volumes"],
    featured: false,
  },
  {
    name: "Project Based",
    text: "Fixed-scope projects such as digitization, data clean-up or outbound campaigns with clear deliverables.",
    points: ["Defined scope and timeline", "Fixed or milestone pricing", "Best for one-time initiatives"],
    featured: false,
  },
];

const security = [
  { icon: FileCheck2, title: "NDA & confidentiality agreements", text: "Every engagement and every team member is bound by confidentiality." },
  { icon: KeyRound, title: "Role-based access control", text: "Agents only access the systems and data their role requires." },
  { icon: Lock, title: "Controlled workstations", text: "Restricted USB, printing and personal device use in production areas." },
  { icon: Server, title: "Secure data transfer", text: "Encrypted channels and approved tools for sharing files and data." },
];

const faqs = [
  { q: "What is business process outsourcing (BPO)?", a: "BPO means partnering with a specialist company to run business functions such as customer support, call handling, back office processing or data management. You get trained people, proven processes and lower costs, while keeping full visibility." },
  { q: "Which services does Arqivo LLP provide?", a: `We provide ${services.map((s) => s.title.toLowerCase()).join(", ")}. Each programme can be tailored to your volumes and tools.` },
  { q: "How quickly can we get started?", a: "After an initial consultation we share a proposal within a few days. Most programmes go live within two to four weeks, including recruitment, training and a supervised pilot." },
  { q: "How do you price your services?", a: "We offer dedicated team, shared team (per hour, per call or per transaction) and project-based pricing. We recommend a model after understanding your requirements." },
  { q: "Can we start with a small pilot?", a: "Yes. Many clients begin with a single process or a small team so they can evaluate quality before scaling up." },
];

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <div className="absolute inset-[8%] rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-600 shadow-2xl shadow-navy-900/30">
        <div aria-hidden className="bg-grid absolute inset-0 rounded-[2.5rem]" />
      </div>
      <div aria-hidden className="absolute inset-[18%] rounded-full border border-dashed border-white/20 motion-safe:animate-orbit">
        <span className="absolute -top-1.5 left-1/2 size-3 rounded-full bg-brand-300 shadow-[0_0_20px_4px] shadow-brand-400/60" />
      </div>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid size-[44%] place-items-center rounded-full bg-white shadow-2xl shadow-brand-900/40">
          <Image src={mark} alt="" preload sizes="180px" className="w-[68%]" />
        </div>
      </div>

      <div className="absolute left-0 top-[14%] w-[52%] rounded-2xl bg-white p-3.5 shadow-xl shadow-navy-900/15 ring-1 ring-slate-100 motion-safe:animate-float sm:p-4">
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500 sm:text-xs">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          Support desk · Live
        </div>
        <p className="mt-1.5 font-display text-sm font-bold text-navy-900 sm:text-base">Calls, chats & emails</p>
        <div className="mt-2 flex -space-x-2">
          {["bg-brand-500", "bg-navy-800", "bg-brand-300", "bg-sky-400"].map((c) => (
            <span key={c} className={`size-6 rounded-full ring-2 ring-white ${c}`} />
          ))}
          <span className="grid size-6 place-items-center rounded-full bg-brand-50 text-[10px] font-bold text-brand-600 ring-2 ring-white">
            24/7
          </span>
        </div>
      </div>

      <div className="absolute bottom-[12%] right-0 w-[50%] rounded-2xl bg-white p-3.5 shadow-xl shadow-navy-900/15 ring-1 ring-slate-100 motion-safe:animate-float [animation-delay:-3s] sm:p-4">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 sm:text-xs">
          SLA dashboard <BarChart3 className="size-4 text-brand-500" aria-hidden />
        </div>
        <div className="mt-3 flex h-12 items-end gap-1.5" aria-hidden>
          {[45, 62, 55, 78, 70, 88, 95].map((h, i) => (
            <span
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-t bg-gradient-to-t from-brand-600 to-brand-300"
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[30%] left-[2%] flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-xs font-semibold text-navy-900 shadow-lg ring-1 ring-slate-100 sm:text-sm">
        <span className="grid size-7 place-items-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircle2 className="size-4" aria-hidden />
        </span>
        Quality audit passed
      </div>
      <div className="absolute right-[4%] top-[6%] flex items-center gap-2 rounded-full bg-white py-2 pl-2 pr-4 text-xs font-semibold text-navy-900 shadow-lg ring-1 ring-slate-100 sm:text-sm">
        <span className="grid size-7 place-items-center rounded-full bg-brand-50 text-brand-600">
          <ShieldCheck className="size-4" aria-hidden />
        </span>
        Data secured
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="bg-dots absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div aria-hidden className="absolute -right-40 -top-40 -z-10 size-[36rem] rounded-full bg-brand-100/60 blur-3xl" />
        <CardStripes className="-left-24 -top-6 -z-10 h-16 w-72 rotate-180 sm:h-24 sm:w-96" />
        <CardStripes className="-right-28 bottom-0 -z-10 h-14 w-72 sm:h-20 sm:w-[26rem]" />

        <div className="container-x grid items-center gap-12 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-8 lg:pb-32 lg:pt-20">
          <div>
            <Eyebrow>{site.tagline}</Eyebrow>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] text-navy-900 sm:text-6xl lg:text-[4.1rem]">
              Your Processes.
              <br />
              Our People.
              <br />
              <span className="bg-gradient-to-r from-brand-600 via-brand-500 to-brand-400 bg-clip-text text-transparent">
                Better Outcomes.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Arqivo LLP runs your customer support, call center, back office and data operations with trained teams,
              secure processes and transparent reporting, so you can focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" arrow>
                Get a Free Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Explore Our Services
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-slate-700">
              {["24/7 operations", "NDA-backed security", "Flexible pricing"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-brand-500" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <HeroVisual />
        </div>
      </section>

      {/* Highlights */}
      <section aria-label="Highlights" className="relative z-10 -mt-14 lg:-mt-20">
        <div className="container-x">
          <dl className="grid grid-cols-2 overflow-hidden rounded-3xl bg-navy-900 shadow-2xl shadow-navy-900/25 lg:grid-cols-4">
            {highlights.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className={`flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:p-8 ${i % 2 === 0 ? "border-r border-white/10" : ""} ${i < 2 ? "border-b border-white/10 lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300 ring-1 ring-brand-400/30">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div>
                  <dt className="sr-only">{label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</dd>
                  <dd className="text-xs text-blue-100/70 sm:text-sm">{label}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[2rem] bg-surface p-4 sm:p-10">
              <div aria-hidden className="bg-dots absolute inset-0" />
              <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Users, t: "People", d: "Carefully selected, trained and coached teams." },
                  { icon: Settings2, t: "Process", d: "Documented SOPs with built-in quality checks." },
                  { icon: BarChart3, t: "Performance", d: "KPIs and SLAs tracked and reported daily." },
                  { icon: ShieldCheck, t: "Protection", d: "Security practices that safeguard your data." },
                ].map(({ icon: Icon, t, d }) => (
                  <div key={t} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/70 sm:p-5">
                    <Icon className="size-6 text-brand-500" aria-hidden />
                    <p className="mt-3 font-display font-bold text-navy-900">{t}</p>
                    <p className="mt-1 text-sm text-slate-600">{d}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="relative -mt-8 ml-auto w-[90%] rounded-2xl bg-gradient-to-r from-navy-900 to-brand-700 p-6 text-white shadow-xl sm:w-[80%]">
              <blockquote className="text-sm leading-relaxed text-blue-50 sm:text-base">
                “We treat every client process as if it were our own business. Reliable people, clear processes and
                honest reporting are how we earn long-term trust.”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <span className="font-semibold">{site.leader.name}</span>
                <span className="text-blue-200/80"> · {site.leader.role}</span>
              </figcaption>
            </figure>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Who we are"
              title={
                <>
                  An outsourcing partner built on <span className="text-brand-500">people and process</span>
                </>
              }
              text="Arqivo LLP helps startups, growing businesses and enterprises run critical operations more efficiently. We combine skilled teams with structured workflows and modern tools to deliver consistent results at a lower cost."
            />
            <ul className="reveal mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Customer-centric communication",
                "Process-driven delivery",
                "Measurable SLAs & KPIs",
                "Flexible engagement models",
                "Quick onboarding & ramp-up",
                "Single point of contact",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand-500" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="reveal mt-10">
              <ButtonLink href="/about" arrow>
                More About Arqivo
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative bg-surface py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we do"
            title="End-to-end business process outsourcing"
            text="From the first customer conversation to the last line of data, we take care of the work that keeps your business running."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-28">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div aria-hidden className="absolute -left-40 top-20 -z-10 size-[32rem] rounded-full bg-brand-600/30 blur-3xl" />
        <div className="container-x">
          <SectionHeading
            light
            eyebrow="Why Arqivo"
            title={
              <>
                Six reasons businesses <span className="text-gradient">trust us</span> with their operations
              </>
            }
            text="Outsourcing should make your business simpler, not riskier. Here is how we deliver peace of mind."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-brand-400/40 hover:bg-white/[0.07]"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-600/30">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-100/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="How we work"
            title="A simple, proven path from enquiry to results"
            text="A structured transition means no disruption to your customers and full visibility for you at every step."
          />
          <ol className="relative mt-16 grid gap-8 md:grid-cols-5 md:gap-4">
            <div aria-hidden className="absolute left-[10%] right-[10%] top-8 hidden h-0.5 bg-gradient-to-r from-brand-100 via-brand-400 to-brand-100 md:block" />
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="reveal relative flex gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative grid size-16 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-lg shadow-brand-500/15 ring-1 ring-brand-100">
                  <Icon className="size-7" aria-hidden />
                  <span className="absolute -right-2 -top-2 grid size-6 place-items-center rounded-full bg-navy-900 text-[11px] font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-900 md:mt-5">{title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading
              align="left"
              eyebrow="Industries"
              title="Specialised support for your industry"
              text="We adapt our people, scripts and processes to the language, regulations and customer expectations of your sector."
            />
            <ButtonLink href="/industries" variant="outline" arrow className="reveal shrink-0">
              All Industries
            </ButtonLink>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {industries.map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href="/industries"
                className="reveal group flex flex-col items-start gap-4 rounded-2xl bg-white p-5 ring-1 ring-slate-200 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-500/10 hover:ring-brand-200"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold text-navy-900 sm:text-base">{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="py-20 sm:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Engagement models"
            title="Flexible ways to work together"
            text="Choose the model that matches your volumes and budget. You can switch as your needs change."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {models.map((m) => (
              <div
                key={m.name}
                className={`reveal relative flex flex-col rounded-3xl p-8 ${
                  m.featured
                    ? "bg-gradient-to-br from-navy-900 to-brand-700 text-white shadow-2xl shadow-brand-700/25 lg:-my-4 lg:py-12"
                    : "bg-white ring-1 ring-slate-200"
                }`}
              >
                {m.featured && (
                  <span className="absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                    Recommended
                  </span>
                )}
                <h3 className={`text-2xl font-bold ${m.featured ? "" : "text-navy-900"}`}>{m.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${m.featured ? "text-blue-100/80" : "text-slate-600"}`}>{m.text}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {m.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className={`size-5 ${m.featured ? "text-brand-300" : "text-brand-500"}`} aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant={m.featured ? "white" : "outline"} arrow className="mt-8">
                  Request a Quote
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Security & compliance"
              title="Your data is protected at every step"
              text="We understand that outsourcing means trusting us with your customers and your information. Security is built into how we hire, train and operate."
            />
            <div className="reveal mt-8">
              <ButtonLink href="/contact" arrow>
                Discuss Your Requirements
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {security.map(({ icon: Icon, title, text }) => (
              <div key={title} className="reveal rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <span className="grid size-11 place-items-center rounded-xl bg-navy-900 text-brand-300">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 font-bold text-navy-900">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SectionHeading
              align="left"
              eyebrow="FAQ"
              title="Questions, answered"
              text="Can't find what you're looking for? Our team is happy to help."
            />
            <Link href="/contact" className="reveal mt-6 inline-flex items-center gap-2 font-semibold text-brand-600 hover:gap-3">
              Ask us anything <ArrowRight className="size-4 transition-all" aria-hidden />
            </Link>
          </div>
          <div className="reveal">
            <FaqList items={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </>
  );
}

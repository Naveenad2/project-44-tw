import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Mail, Phone } from "lucide-react";
import type { ReactNode } from "react";
import mark from "@/assets/arqivo-mark.png";
import { ButtonLink, Eyebrow } from "@/components/ui";
import type { Service } from "@/lib/services";
import { site } from "@/lib/site";

/** Diagonal blue bands, echoing the corners of the business card. */
export function CardStripes({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute ${className}`}>
      <div className="absolute inset-0 origin-bottom-right -skew-x-[38deg] bg-gradient-to-r from-brand-700 via-brand-500 to-brand-400" />
      <div className="absolute inset-y-0 -left-10 w-6 origin-bottom-right -skew-x-[38deg] bg-brand-400/60" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_30rem_at_85%_-10%,rgb(47_107_245/0.45),transparent_60%)]" />
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <CardStripes className="-right-20 bottom-0 -z-10 hidden h-24 w-[28rem] opacity-90 md:block" />
      <Image
        src={mark}
        alt=""
        aria-hidden
        sizes="420px"
        className="pointer-events-none absolute -right-10 top-6 -z-10 hidden w-[420px] opacity-[0.07] lg:block"
      />
      <div className="container-x py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-blue-100/70">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="size-3.5" aria-hidden />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <Eyebrow light>{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base text-blue-100/80 sm:text-lg">{text}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to streamline your operations?",
  text = "Tell us about your processes and goals. We will design a team, workflow and pricing model that fits your business, with no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-x">
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 px-6 py-12 text-white sm:px-12 lg:px-16 lg:py-16">
          <div aria-hidden className="bg-grid absolute inset-0 -z-10 opacity-60" />
          <CardStripes className="-right-16 top-0 -z-10 h-full w-40 opacity-40" />
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
              <p className="mt-4 max-w-xl text-blue-100/80">{text}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="white" arrow>
                  Book a Free Consultation
                </ButtonLink>
                <ButtonLink href="/services" variant="ghostLight">
                  View Services
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-3">
              {site.phones.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-500">
                    <Phone className="size-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-xs text-blue-100/70">Call us</span>
                    <span className="font-semibold">{p.display}</span>
                  </span>
                </a>
              ))}
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur transition-colors hover:bg-white/15"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-500">
                  <Mail className="size-5" aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-blue-100/70">Email us</span>
                  <span className="block truncate font-semibold">{site.email}</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Link
      href={`/services/${service.slug}`}
      className="reveal group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/10"
    >
      <span aria-hidden className="absolute right-5 top-5 font-display text-4xl font-extrabold text-slate-100 transition-colors group-hover:text-brand-50">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="relative grid size-12 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-navy-800 text-white shadow-lg shadow-brand-500/25">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="relative mt-5 text-lg font-bold text-navy-900">{service.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.short}</p>
      <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
        Learn more
        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-brand-300 transition-transform duration-300 group-hover:scale-x-100" />
    </Link>
  );
}

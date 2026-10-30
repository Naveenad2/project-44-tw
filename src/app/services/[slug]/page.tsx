import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2, Phone } from "lucide-react";
import { CtaBand, PageHero, ServiceCard } from "@/components/sections";
import { ButtonLink, Eyebrow, FaqList, JsonLd, SectionHeading } from "@/components/ui";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: `${service.title} Outsourcing`,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | ${site.name}`, description: service.short, url: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const Icon = service.icon;
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        eyebrow={service.title}
        title={service.headline}
        text={service.short}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]}
      >
        <ButtonLink href="/contact" variant="white" arrow>
          Get a Free Quote
        </ButtonLink>
        <ButtonLink href={site.phones[0].href} variant="ghostLight">
          <Phone className="size-4" aria-hidden /> Call {site.phones[0].display}
        </ButtonLink>
      </PageHero>

      {/* Overview */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">{service.title} by Arqivo</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              {service.overview.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="reveal h-fit rounded-3xl bg-gradient-to-br from-navy-900 to-brand-700 p-8 text-white shadow-xl shadow-navy-900/20 lg:sticky lg:top-28">
            <span className="grid size-14 place-items-center rounded-2xl bg-white/15 ring-1 ring-white/20">
              <Icon className="size-7" aria-hidden />
            </span>
            <h3 className="mt-5 text-xl font-bold">Key benefits</h3>
            <ul className="mt-5 space-y-3.5">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-blue-50">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-300" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="white" arrow className="mt-8 w-full">
              Talk to an Expert
            </ButtonLink>
          </aside>
        </div>
      </section>

      {/* Features */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="What's included" title="Everything you need, handled by experts" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f, i) => (
              <div key={f.title} className="reveal rounded-2xl bg-white p-7 ring-1 ring-slate-200">
                <span className="font-display text-sm font-extrabold text-brand-500">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases + FAQ */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="reveal">
            <Eyebrow>Common use cases</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold text-navy-900">Where this service makes an impact</h2>
            <ul className="mt-8 grid gap-3">
              {service.useCases.map((u) => (
                <li key={u} className="flex items-center gap-3 rounded-xl bg-brand-50 px-5 py-4 font-medium text-navy-900">
                  <CheckCircle2 className="size-5 text-brand-500" aria-hidden />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mb-8 mt-4 text-3xl font-bold text-navy-900">Frequently asked questions</h2>
            <FaqList items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Explore more" title="Related services" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((s) => (
              <ServiceCard key={s.slug} service={s} index={services.indexOf(s)} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Let's talk about ${service.title.toLowerCase()}`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.title,
          description: service.short,
          serviceType: service.title,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: "Worldwide",
        }}
      />
    </>
  );
}

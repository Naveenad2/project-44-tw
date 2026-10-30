import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Clock, Mail, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { DesktopNav, DesktopNavLinks } from "@/components/desktop-nav";
import { MobileMenu } from "@/components/mobile-menu";
import { ButtonLink } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

function ServicesMenu() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-navy-950/15">
      <div className="grid grid-cols-2 gap-1 p-3">
        {services.map(({ slug, title, short, icon: Icon }) => (
          <Link
            key={slug}
            href={`/services/${slug}`}
            className="group/item flex gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover/item:bg-brand-500 group-hover/item:text-white">
              <Icon className="size-5" aria-hidden />
            </span>
            <span>
              <span className="block text-sm font-semibold text-navy-900">{title}</span>
              <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-slate-500">{short}</span>
            </span>
          </Link>
        ))}
      </div>
      <Link
        href="/services"
        className="flex items-center justify-between bg-navy-900 px-6 py-3.5 text-sm font-medium text-white hover:bg-navy-800"
      >
        Explore all services and engagement models
        <ArrowRight className="size-4" aria-hidden />
      </Link>
    </div>
  );
}

export function Header() {
  const servicesMenu = <ServicesMenu />;
  return (
    <>
      <div className="hidden bg-navy-950 text-xs text-blue-100/80 lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p className="flex items-center gap-2">
            <Clock className="size-3.5 text-brand-300" aria-hidden />
            {site.hours}
          </p>
          <div className="flex items-center gap-6">
            {site.phones.map((p) => (
              <a key={p.href} href={p.href} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="size-3.5 text-brand-300" aria-hidden /> {p.display}
              </a>
            ))}
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="size-3.5 text-brand-300" aria-hidden /> {site.email}
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
        <nav className="container-x flex h-[72px] items-center justify-between gap-4" aria-label="Main">
          <Logo priority />
          <Suspense fallback={<DesktopNavLinks servicesMenu={servicesMenu} />}>
            <DesktopNav servicesMenu={servicesMenu} />
          </Suspense>
          <div className="flex items-center gap-3">
            <ButtonLink href="/contact" arrow className="max-sm:hidden">
              Get a Free Quote
            </ButtonLink>
            <MobileMenu services={services.map(({ title, slug }) => ({ title, slug }))} />
          </div>
        </nav>
      </header>
    </>
  );
}

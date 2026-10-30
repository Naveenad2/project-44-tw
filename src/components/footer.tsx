import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { services } from "@/lib/services";
import { nav, site } from "@/lib/site";

async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-blue-100/75">
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 size-[30rem] rounded-full bg-brand-600/25 blur-3xl" />
      <div className="container-x relative grid grid-cols-2 gap-x-6 gap-y-12 py-16 lg:grid-cols-12 lg:py-20">
        <div className="col-span-2 lg:col-span-4">
          <div className="inline-block rounded-2xl bg-white px-4 py-3">
            <Logo />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed">{site.description}</p>
          <p className="mt-5 font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            {site.slogan.join("  ·  ")}
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="transition-colors hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Get in touch</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-3 hover:text-white">
                  <span className="grid size-9 place-items-center rounded-full bg-white/10 text-brand-300">
                    <Phone className="size-4" aria-hidden />
                  </span>
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand-300">
                  <Mail className="size-4" aria-hidden />
                </span>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid size-9 place-items-center rounded-full bg-white/10 text-brand-300">
                <MapPin className="size-4" aria-hidden />
              </span>
              {site.location} · Serving clients worldwide
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

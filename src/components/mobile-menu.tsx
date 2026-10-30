"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function MobileMenu({ services }: { services: { title: string; slug: string }[] }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.dataset.menuOpen = String(open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.documentElement.dataset.menuOpen = "false";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-11 place-items-center rounded-full border border-slate-200 bg-white text-navy-900 transition-colors hover:border-brand-500 hover:text-brand-600"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open &&
        createPortal(
          <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-white">
            <nav className="container-x flex flex-col gap-1 py-6" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-lg font-semibold text-navy-900 hover:bg-brand-50"
                >
                  {item.label}
                  <ArrowRight className="size-4 text-brand-500" aria-hidden />
                </Link>
              ))}

              <p className="mt-5 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Services</p>
              <div className="mt-2 grid grid-cols-1 gap-1 sm:grid-cols-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    onClick={close}
                    className="rounded-lg px-3 py-2.5 text-sm text-slate-700 hover:bg-brand-50 hover:text-brand-600"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl bg-navy-900 p-5 text-white">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="flex items-center gap-3 text-sm">
                    <Phone className="size-4 text-brand-300" aria-hidden /> {p.display}
                  </a>
                ))}
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-sm">
                  <Mail className="size-4 text-brand-300" aria-hidden /> {site.email}
                </a>
                <Link
                  href="/contact"
                  onClick={close}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold"
                >
                  Get a Free Quote <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </nav>
          </div>,
          // Portal out of the header: its backdrop-filter would otherwise trap this fixed panel.
          document.body,
        )}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { nav } from "@/lib/site";

type Props = { servicesMenu: ReactNode; pathname?: string | null };

export function DesktopNavLinks({ servicesMenu, pathname = null }: Props) {
  const isActive = (href: string) =>
    pathname !== null && (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <ul className="hidden items-center gap-1 lg:flex">
      {nav.map((item) => {
        const active = isActive(item.href);
        const cls = `relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
          active ? "text-brand-600" : "text-slate-700 hover:text-brand-600"
        }`;

        if (item.href === "/services") {
          return (
            <li key={item.href} className="group relative">
              <Link href={item.href} className={cls} aria-current={active ? "page" : undefined}>
                {item.label}
                <ChevronDown className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />
              </Link>
              <div className="invisible absolute left-1/2 top-full z-50 w-[min(44rem,90vw)] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                {servicesMenu}
              </div>
            </li>
          );
        }

        return (
          <li key={item.href}>
            <Link href={item.href} className={cls} aria-current={active ? "page" : undefined}>
              {item.label}
              {active && <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DesktopNav(props: Omit<Props, "pathname">) {
  const pathname = usePathname();
  return <DesktopNavLinks {...props} pathname={pathname} />;
}

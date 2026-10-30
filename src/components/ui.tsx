import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98]";

const variants = {
  primary:
    "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600 hover:shadow-brand-600/30",
  white: "bg-white text-navy-900 shadow-lg shadow-navy-950/20 hover:bg-brand-50",
  outline: "border border-navy-900/15 bg-white text-navy-900 hover:border-brand-500 hover:text-brand-600",
  ghostLight: "border border-white/25 text-white hover:border-white/60 hover:bg-white/10",
} as const;

export function ButtonLink({
  variant = "primary",
  arrow = false,
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: keyof typeof variants; arrow?: boolean }) {
  const cls = `group ${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />}
    </>
  );
  if (typeof props.href === "string" && /^(tel|mailto):/.test(props.href)) {
    return (
      <a href={props.href} className={cls}>
        {content}
      </a>
    );
  }
  return (
    <Link {...props} className={cls}>
      {content}
    </Link>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${
        light ? "bg-white/10 text-brand-200 ring-1 ring-white/15" : "bg-brand-50 text-brand-600 ring-1 ring-brand-100"
      }`}
    >
      <span className={`size-1.5 rounded-full ${light ? "bg-brand-300" : "bg-brand-500"}`} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: ReactNode;
  light?: boolean;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <div className={`reveal max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15] ${light ? "text-white" : "text-navy-900"}`}>
        {title}
      </h2>
      {text && <p className={`mt-4 text-base sm:text-lg ${light ? "text-blue-100/80" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer items-center justify-between gap-6 px-5 py-5 text-left font-semibold text-navy-900 transition-colors hover:text-brand-600 sm:px-7">
            {item.q}
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 group-open:bg-brand-500 group-open:text-white">
              <Plus className="faq-icon size-4 transition-transform duration-300" aria-hidden />
            </span>
          </summary>
          <p className="px-5 pb-6 text-slate-600 sm:px-7">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

import Image from "next/image";
import Link from "next/link";
import mark from "@/assets/arqivo-mark.png";

/** The "A" in the ARQIVO wordmark: a chevron with a blue triangle, as on the business card. */
function WordmarkA() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="mr-[0.04em] inline-block h-[0.74em] w-[0.82em] align-baseline">
      <polygon points="50,2 98,98 76,98 50,44 24,98 2,98" fill="currentColor" />
      <polygon points="50,62 63,88 37,88" fill="var(--color-brand-500)" />
    </svg>
  );
}

export function Logo({ tone = "dark", priority = false }: { tone?: "dark" | "light"; priority?: boolean }) {
  const text = tone === "dark" ? "text-navy-900" : "text-white";
  return (
    <Link href="/" aria-label="Arqivo LLP home" className="group inline-flex shrink-0 items-center gap-2.5">
      <Image
        src={mark}
        alt=""
        width={52}
        height={41}
        sizes="52px"
        preload={priority}
        className="h-[34px] w-auto transition-transform duration-500 group-hover:-rotate-6 sm:h-[41px]"
      />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.35rem] font-extrabold tracking-[0.06em] sm:text-[1.6rem] ${text}`}>
          <WordmarkA />
          RQIVO
        </span>
        <span className="mt-0.5 self-end pr-1 font-display text-[0.62rem] font-bold tracking-[0.35em] text-brand-500 sm:text-xs">
          LLP
        </span>
      </span>
    </Link>
  );
}

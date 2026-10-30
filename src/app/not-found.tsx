import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-dots py-28 sm:py-36">
      <div className="container-x text-center">
        <p className="font-display text-8xl font-extrabold text-brand-500 sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-slate-600">
          The page you are looking for doesn&apos;t exist or has moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="outline">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

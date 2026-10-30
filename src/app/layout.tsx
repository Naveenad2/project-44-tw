import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/ui";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Business Process Outsourcing Company`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "BPO company",
    "business process outsourcing",
    "call center outsourcing",
    "customer support outsourcing",
    "back office outsourcing",
    "data entry services",
    "Arqivo LLP",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: "/",
    title: `${site.name} | Business Process Outsourcing`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1f5c",
  width: "device-width",
  initialScale: 1,
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/arqivo-mark.png`,
  email: site.email,
  description: site.description,
  slogan: site.slogan.join(" | "),
  founder: { "@type": "Person", name: site.leader.name, jobTitle: site.leader.role },
  contactPoint: site.phones.map((p) => ({
    "@type": "ContactPoint",
    telephone: p.href.replace("tel:", ""),
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <JsonLd data={organization} />
      </body>
    </html>
  );
}

export const site = {
  name: "Arqivo LLP",
  shortName: "Arqivo",
  tagline: "Business Process Outsourcing",
  slogan: ["Your Processes", "Our People", "Better Outcomes"],
  description:
    "Arqivo LLP is a business process outsourcing partner delivering customer support, call center, back office, data and finance operations with trained teams, secure processes and measurable outcomes.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arqivollp.com").replace(/\/$/, ""),
  email: "arqivollp@gmail.com",
  phones: [
    { display: "+91 88480 63605", href: "tel:+918848063605" },
    { display: "+91 83300 91733", href: "tel:+918330091733" },
  ],
  location: "India",
  hours: "Operations 24/7 · Office Mon–Sat, 9:00 AM – 6:00 PM IST",
  leader: { name: "Ajmal Rahim", role: "Managing Director" },
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

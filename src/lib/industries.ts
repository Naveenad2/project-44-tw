import {
  Building2,
  Cpu,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  RadioTower,
  ShieldCheck,
  ShoppingCart,
  Truck,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  text: string;
  uses: string[];
};

export const industries: Industry[] = [
  {
    name: "E-commerce & Retail",
    icon: ShoppingCart,
    text: "Support shoppers before and after purchase while keeping catalogues, orders and returns moving.",
    uses: ["Order & delivery support", "Returns & refunds", "Catalogue management", "Marketplace operations"],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    text: "Patient-friendly communication and careful handling of administrative and records work.",
    uses: ["Appointment scheduling", "Patient helplines", "Records digitization", "Billing support"],
  },
  {
    name: "Banking & Financial Services",
    icon: Landmark,
    text: "Accurate, compliant processes for customer service, onboarding and transaction support.",
    uses: ["Customer onboarding & KYC", "Loan lead qualification", "Payment reminders", "Reconciliations"],
  },
  {
    name: "Insurance",
    icon: ShieldCheck,
    text: "Faster policy servicing and claims support with clear, empathetic communication.",
    uses: ["Policy servicing", "Claims intake & processing", "Renewal campaigns", "Document verification"],
  },
  {
    name: "Real Estate",
    icon: Building2,
    text: "Never miss a buyer enquiry, and keep property documentation organised.",
    uses: ["Lead response & qualification", "Site visit scheduling", "Tenant support", "Document management"],
  },
  {
    name: "Telecom & Utilities",
    icon: RadioTower,
    text: "High-volume service lines and technical support for connections, billing and service issues.",
    uses: ["Customer service lines", "Technical troubleshooting", "Billing queries", "Retention campaigns"],
  },
  {
    name: "Travel & Hospitality",
    icon: Plane,
    text: "Round-the-clock booking and guest support across time zones and peak seasons.",
    uses: ["Reservations desk", "Booking changes", "Guest support", "Feedback surveys"],
  },
  {
    name: "Education & EdTech",
    icon: GraduationCap,
    text: "Support students, parents and institutions through admissions, onboarding and learning.",
    uses: ["Admissions counselling", "Student helpdesk", "Course enrolment calls", "Records processing"],
  },
  {
    name: "Logistics & Supply Chain",
    icon: Truck,
    text: "Keep shipments, partners and customers in sync with responsive operations support.",
    uses: ["Shipment tracking support", "Proof-of-delivery processing", "Vendor coordination", "Invoice processing"],
  },
  {
    name: "Technology & SaaS",
    icon: Cpu,
    text: "Scalable product support and back office work for fast-growing software companies.",
    uses: ["Tier 1 & Tier 2 support", "User onboarding", "Billing support", "Data operations"],
  },
];

import {
  Calculator,
  FileStack,
  Headset,
  Keyboard,
  Layers,
  MessagesSquare,
  PhoneOutgoing,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: LucideIcon;
  headline: string;
  overview: string[];
  features: { title: string; text: string }[];
  benefits: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "inbound-call-center",
    title: "Inbound Call Center",
    short:
      "Trained agents who answer every call promptly, resolve queries at first contact and protect your brand voice.",
    icon: Headset,
    headline: "Every call answered, every customer heard.",
    overview: [
      "Your customers expect a quick, friendly and knowledgeable answer every time they call. Our inbound call center teams act as an extension of your business, handling order queries, service requests, complaints and general enquiries with care and consistency.",
      "We build call flows, scripts and knowledge bases around your processes, then train agents on your products before they ever take a live call. Calls are monitored, scored and coached against agreed quality standards so your service keeps improving.",
    ],
    features: [
      { title: "Customer service lines", text: "Order status, account queries, returns, refunds and general product information." },
      { title: "Order & reservation desks", text: "Accurate order taking, bookings and confirmations with real-time updates to your systems." },
      { title: "Complaint handling", text: "Empathetic resolution, escalation matrices and closed-loop follow-ups." },
      { title: "After-hours & overflow", text: "Night, weekend and peak-season cover so no call goes to voicemail." },
      { title: "IVR & call routing", text: "Smart routing and IVR design that gets callers to the right agent faster." },
      { title: "Call recording & QA", text: "Recorded calls, quality scorecards and regular calibration with your team." },
    ],
    benefits: [
      "Higher first-call resolution and customer satisfaction",
      "Lower cost per call than an in-house team",
      "Scale up for seasonal peaks without hiring delays",
      "Clear SLAs for answer speed, abandonment and quality",
      "Daily and monthly performance reports",
    ],
    useCases: ["E-commerce order support", "Utility & telecom helplines", "Healthcare appointment lines", "Travel booking desks"],
    faqs: [
      { q: "Can your agents use our CRM and ticketing tools?", a: "Yes. We work inside your existing CRM, helpdesk or telephony platform, or we can recommend a setup if you are starting fresh." },
      { q: "How quickly can an inbound team go live?", a: "Most programmes go live within two to four weeks, covering recruitment, product training, systems access and a supervised pilot." },
      { q: "Do you offer 24/7 coverage?", a: "Yes. We can run round-the-clock shifts or cover specific windows such as nights, weekends and holidays." },
    ],
  },
  {
    slug: "outbound-call-center",
    title: "Outbound Calling & Telesales",
    short:
      "Lead generation, appointment setting, telesales and follow-up campaigns that turn conversations into revenue.",
    icon: PhoneOutgoing,
    headline: "Proactive conversations that grow your pipeline.",
    overview: [
      "Outbound calling works when the right agent reaches the right person with the right message. We run targeted campaigns for lead generation, qualification, appointment setting, renewals, collections reminders and customer surveys.",
      "Every campaign starts with a clear goal, a tested script and agreed compliance rules. We track contact rates, conversions and call quality daily and refine the approach as results come in.",
    ],
    features: [
      { title: "Lead generation & qualification", text: "Identify, contact and qualify prospects against your ideal customer profile." },
      { title: "Appointment setting", text: "Book qualified meetings straight into your sales team's calendars." },
      { title: "Telesales & upselling", text: "Product sales, cross-sell and upgrade campaigns with trained closers." },
      { title: "Renewals & win-back", text: "Retain customers with timely renewal reminders and win-back offers." },
      { title: "Payment reminders", text: "Polite, compliant reminder calls that improve on-time collections." },
      { title: "Surveys & feedback", text: "NPS, CSAT and market research calls with structured data capture." },
    ],
    benefits: [
      "More qualified leads and booked meetings for your sales team",
      "Campaigns that launch fast and scale with demand",
      "Transparent dashboards for contacts, conversions and cost per lead",
      "Scripts and processes that follow applicable do-not-call rules",
      "Your sales team stays focused on closing",
    ],
    useCases: ["B2B appointment setting", "Insurance & loan lead qualification", "Subscription renewals", "Event & webinar registrations"],
    faqs: [
      { q: "Do you provide the calling data?", a: "We usually work with your lists or CRM data. Where needed, we can help enrich and clean data before the campaign starts." },
      { q: "How do you measure campaign success?", a: "We agree KPIs upfront, such as contact rate, qualified leads, appointments or sales, and report on them daily and weekly." },
      { q: "Can we listen to calls?", a: "Yes. Call recordings and QA scorecards are shared, and you are welcome to join calibration sessions." },
    ],
  },
  {
    slug: "customer-support",
    title: "Omnichannel Customer Support",
    short:
      "Email, live chat, WhatsApp and social media support with fast response times and a consistent tone.",
    icon: MessagesSquare,
    headline: "Consistent support on every channel your customers use.",
    overview: [
      "Customers move between email, chat, messaging apps and social media, and they expect the same quality everywhere. Our omnichannel support teams handle written conversations with clear, friendly and accurate responses.",
      "We build response templates, tone guides and escalation paths with you, and track first response time, resolution time and satisfaction across every channel.",
    ],
    features: [
      { title: "Email & ticket support", text: "Ticket triage, tagging and resolution inside your helpdesk." },
      { title: "Live chat", text: "Real-time chat support that converts browsers and resolves issues quickly." },
      { title: "WhatsApp & messaging", text: "Conversational support on the apps your customers already use." },
      { title: "Social media care", text: "Monitor mentions, reply to comments and DMs, and flag issues early." },
      { title: "Reviews & reputation", text: "Respond to marketplace and app store reviews professionally." },
      { title: "Knowledge base upkeep", text: "Keep FAQs and help articles current based on real customer questions." },
    ],
    benefits: [
      "Faster first response and resolution times",
      "One brand voice across every channel",
      "Lower ticket backlogs during peaks and launches",
      "Insights on recurring issues to improve your product",
      "Flexible coverage across time zones",
    ],
    useCases: ["D2C & e-commerce brands", "SaaS & app support", "Marketplace seller support", "Subscription businesses"],
    faqs: [
      { q: "Which helpdesk platforms do you work with?", a: "Our teams are comfortable with common helpdesk, chat and CRM platforms and can be trained on your internal tools." },
      { q: "Can you match our brand tone?", a: "Yes. We create a tone guide and template library with you and review samples regularly during the first weeks." },
      { q: "Do you support multiple languages?", a: "We can staff English-language support and discuss additional languages based on your customer base." },
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Helpdesk",
    short:
      "Tier 1 and Tier 2 technical support for software, devices and IT users with structured troubleshooting.",
    icon: Wrench,
    headline: "Patient, knowledgeable technical help for your users.",
    overview: [
      "Technical issues frustrate users and drive churn. Our helpdesk teams troubleshoot with patience and structure, resolving common issues at first contact and escalating complex ones with full context.",
      "We work from your runbooks and knowledge base, log every interaction properly and contribute to documentation so recurring issues are resolved faster over time.",
    ],
    features: [
      { title: "Tier 1 support", text: "Password resets, account access, setup guidance and how-to questions." },
      { title: "Tier 2 troubleshooting", text: "Deeper diagnosis, configuration issues and reproduction of bugs." },
      { title: "Product & app support", text: "Support for SaaS products, mobile apps and connected devices." },
      { title: "Internal IT helpdesk", text: "Employee IT support for hardware, software and access requests." },
      { title: "Ticket management", text: "Accurate categorisation, prioritisation and SLA tracking." },
      { title: "Escalation handoffs", text: "Clean handoffs to your engineering teams with steps, logs and screenshots." },
    ],
    benefits: [
      "Engineers freed from repetitive support work",
      "Shorter resolution times for end users",
      "Better documentation and fewer repeat tickets",
      "Extended hours without extra internal headcount",
      "Clear SLA reporting by priority level",
    ],
    useCases: ["SaaS product support", "Consumer electronics", "Internal employee IT", "Telecom & broadband"],
    faqs: [
      { q: "What level of technical support do you provide?", a: "We typically handle Tier 1 and Tier 2 support and escalate engineering-level issues to your team with complete context." },
      { q: "How are agents trained on our product?", a: "We run structured product training using your documentation, sandbox access and shadowing before agents go live." },
      { q: "Can you work with remote access tools?", a: "Yes, subject to your security policies and approval we can use approved remote assistance tools." },
    ],
  },
  {
    slug: "back-office",
    title: "Back Office Operations",
    short:
      "Order processing, CRM updates, verification, reconciliation and admin work handled accurately and on time.",
    icon: Layers,
    headline: "Reliable back office work so your team can focus on growth.",
    overview: [
      "Back office tasks keep your business running but take time away from customers and growth. We take on repetitive, rules-based processes and deliver them accurately within agreed turnaround times.",
      "Every process is documented in standard operating procedures, checked with multi-level quality controls and reported on transparently, so you always know where work stands.",
    ],
    features: [
      { title: "Order & claims processing", text: "End-to-end processing of orders, returns, claims and requests." },
      { title: "CRM & catalogue management", text: "Product listings, catalogue updates and CRM hygiene." },
      { title: "Verification & KYC support", text: "Document checks, background verification support and onboarding." },
      { title: "Email & inbox management", text: "Shared inbox triage, routing and response handling." },
      { title: "Reporting & MIS", text: "Daily, weekly and monthly reports prepared from your data." },
      { title: "Administrative support", text: "Scheduling, data updates, documentation and general admin." },
    ],
    benefits: [
      "Lower operating costs for routine processes",
      "Consistent accuracy backed by documented SOPs",
      "Faster turnaround on time-sensitive work",
      "Capacity that scales with your volumes",
      "More time for your core team to focus on strategy",
    ],
    useCases: ["E-commerce operations", "Insurance claims support", "Real estate documentation", "HR & payroll administration"],
    faqs: [
      { q: "How do you make sure work is accurate?", a: "We use documented SOPs, maker-checker reviews and sample audits, and share accuracy metrics in regular reports." },
      { q: "Can we start with a single process?", a: "Yes. Many clients start with one process as a pilot and expand once the workflow and quality are proven." },
      { q: "Do you work in our systems?", a: "Yes. We work within your tools using access controls you define, or in shared workspaces you approve." },
    ],
  },
  {
    slug: "data-entry",
    title: "Data Entry & Processing",
    short:
      "Fast, accurate data entry, cleansing, enrichment and validation that keeps your records reliable.",
    icon: Keyboard,
    headline: "Clean, accurate data your business can trust.",
    overview: [
      "Decisions are only as good as the data behind them. Our data teams capture, clean, standardise and validate information from forms, documents, websites and legacy systems.",
      "We combine trained operators with validation checks and quality sampling to deliver high accuracy at volume, with turnaround times that fit your operations.",
    ],
    features: [
      { title: "Online & offline data entry", text: "Data capture from forms, PDFs, images and handwritten documents." },
      { title: "Data cleansing", text: "Remove duplicates, fix formatting and standardise records." },
      { title: "Data enrichment", text: "Fill gaps with verified information from approved sources." },
      { title: "Data validation", text: "Rule-based checks and manual review for completeness and accuracy." },
      { title: "Product data management", text: "Catalogue data, attributes and pricing for online stores." },
      { title: "Data migration support", text: "Map and move records between systems with reconciliation." },
    ],
    benefits: [
      "Reliable records for reporting and decisions",
      "High-volume capacity with predictable turnaround",
      "Significant savings versus in-house data teams",
      "Secure handling of confidential information",
      "Output in the format your systems need",
    ],
    useCases: ["Survey & form processing", "E-commerce catalogue data", "Healthcare records", "Financial documents"],
    faqs: [
      { q: "What accuracy can we expect?", a: "We agree accuracy targets for each project and use double-entry or sampling checks to meet them. Results are reported regularly." },
      { q: "What file formats do you work with?", a: "Spreadsheets, PDFs, scanned images, web forms, databases and most common business formats." },
      { q: "How is our data kept secure?", a: "Work happens under NDA with role-based access, controlled workstations and secure file transfer." },
    ],
  },
  {
    slug: "data-digitization",
    title: "Document Digitization",
    short:
      "Convert paper and scanned records into searchable, indexed digital files that are easy to find and share.",
    icon: FileStack,
    headline: "Turn paper archives into searchable digital assets.",
    overview: [
      "Paper records are slow to search, costly to store and easy to lose. We convert documents into well-organised digital files with accurate indexing, so information is available in seconds.",
      "From scanning and OCR to indexing and metadata tagging, we follow a documented workflow with quality checks at each step and hand back files ready for your document management system.",
    ],
    features: [
      { title: "Scanning & conversion", text: "Convert paper, microfilm and image files into searchable PDFs." },
      { title: "OCR & text extraction", text: "Extract text and key fields from scanned documents." },
      { title: "Indexing & metadata", text: "Tag files with custom fields so they are easy to retrieve." },
      { title: "Forms processing", text: "Capture structured data from applications and forms." },
      { title: "Archive organisation", text: "Folder structures and naming rules that match how you work." },
      { title: "Quality verification", text: "Page counts, legibility checks and field-level verification." },
    ],
    benefits: [
      "Instant search and retrieval of records",
      "Reduced physical storage costs",
      "Better compliance and audit readiness",
      "Easier remote access and collaboration",
      "Protection against loss and damage",
    ],
    useCases: ["Legal & contract archives", "Patient & medical records", "Property documents", "HR employee files"],
    faqs: [
      { q: "Can you work with old or damaged documents?", a: "Yes. We assess documents first and use careful handling and image enhancement where possible." },
      { q: "Which output formats do you provide?", a: "Searchable PDF, PDF/A, TIFF, JPEG and structured data exports such as Excel or CSV." },
      { q: "Can the files go straight into our DMS?", a: "Yes. We structure files and metadata to match your document management system's import format." },
    ],
  },
  {
    slug: "finance-accounting",
    title: "Finance & Accounting Support",
    short:
      "Bookkeeping, accounts payable and receivable, reconciliations and reporting support for growing businesses.",
    icon: Calculator,
    headline: "Accurate books and on-time financial operations.",
    overview: [
      "Finance teams spend too much time on transactional work. We support bookkeeping, payables, receivables and reconciliations so your finance leaders can focus on planning and control.",
      "Our teams work in your accounting software following your chart of accounts and approval policies, with maker-checker reviews and month-end checklists.",
    ],
    features: [
      { title: "Bookkeeping", text: "Day-to-day transaction recording and ledger maintenance." },
      { title: "Accounts payable", text: "Invoice processing, vendor reconciliation and payment runs support." },
      { title: "Accounts receivable", text: "Invoicing, cash application and collections follow-up." },
      { title: "Bank reconciliations", text: "Regular bank, card and ledger reconciliations." },
      { title: "Expense management", text: "Expense report review, coding and policy checks." },
      { title: "Financial reporting", text: "Month-end support, MIS packs and management reports." },
    ],
    benefits: [
      "Up-to-date books and faster month-end close",
      "Fewer errors through structured review",
      "Better cash flow visibility",
      "Lower cost than expanding an in-house team",
      "Work done in your existing accounting tools",
    ],
    useCases: ["Small & mid-sized businesses", "Accounting firms", "E-commerce sellers", "Real estate & property managers"],
    faqs: [
      { q: "Which accounting software do you use?", a: "We work in common accounting platforms and can be trained on the tools you already use." },
      { q: "Do you replace our accountant or auditor?", a: "No. We handle transactional and support work, while your accountants or auditors retain oversight and sign-off." },
      { q: "How do approvals work?", a: "We follow your approval matrix. Payments and sensitive actions are prepared for your authorised approvers." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

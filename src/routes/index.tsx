import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { ArrowUpRight, Mail, MessageCircle, Calendar, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import s1 from "@/assets/S1.png";
import s2 from "@/assets/S2.png";
import s3 from "@/assets/S3.png";
import crm from "@/assets/CRM_Management.png";
import board from "@/assets/Client_Dasboard.png";
import kpi from "@/assets/KPI_Tracker_Construction_Operations.png";
import emailMgmt from "@/assets/Email_Management.png";
import emailMgmt2 from "@/assets/Email_Management_2.png";
import travel from "@/assets/Travel_Itinerary.png";
import meetingNotes from "@/assets/Meeting_Notes.png";
import weekly from "@/assets/Weekly_Calendar.png";
import opsHub from "@/assets/Ops_Workspace.png";
import onboarding from "@/assets/Client_Onboarding_List.png";
import onboarding3 from "@/assets/Client_Onboarding_List_Image3.png";
import opsBoard from "@/assets/Client_Ops_Board.png";

export const Route = createFileRoute("/")({ component: Index });

const INK = "#16131F";
const BLUSH = "#F0D9E4";
const DECANTING = "#C1A0AC";
const MOON = "#806C79";
const FUNKIE = "#4A3F4B";

const tools = {
  "CRM Systems": [
    ["salesforce", "Salesforce"], ["hubspot", "HubSpot"],
    ["zendesk", "Zendesk"], ["gohighlevel", "GoHighLevel"],
  ],
  "Communication": [
    ["slack", "Slack"], ["zoom", "Zoom"], ["microsoftteams", "Microsoft Teams"],
    ["googlemeet", "Google Meet"], ["discord", "Discord"], ["whatsapp", "WhatsApp"],
    ["gmail", "Gmail"], ["microsoftoutlook", "Outlook"], ["ringcentral", "RingCentral"],
    ["avaya", "Avaya"], ["genesys", "Genesys"],
  ],
  "Productivity": [
    ["google", "Google Workspace"], ["microsoft", "Microsoft Office"],
    ["clickup", "ClickUp"], ["notion", "Notion"], ["trello", "Trello"],
    ["googledrive", "Google Drive"], ["dropbox", "Dropbox"],
    ["googlecalendar", "Google Calendar"], ["calendly", "Calendly"],
    ["canva", "Canva"], ["adobeacrobatreader", "Adobe Acrobat"],
  ],
  "Reporting": [
    ["microsoftexcel", "Microsoft Excel"], ["googlesheets", "Google Sheets"],
    ["microsoftpowerpoint", "PowerPoint"], ["looker", "Looker Studio"],
    ["airtable", "Airtable"],
  ],
  "AI Productivity": [
    ["openai", "ChatGPT"], ["anthropic", "Claude"], ["googlegemini", "Gemini"],
    ["grammarly", "Grammarly"], ["notion", "Notion AI"],
  ],
} as const;

const helpGroups = [
  { title: "Email & Client Communication", items: [
    "Organize and maintain clutter-free inboxes",
    "Sort, label, and prioritize incoming messages",
    "Draft professional responses to emails, chats, and inquiries",
    "Monitor shared inboxes and follow up on pending conversations",
    "Handle escalated concerns professionally",
    "Coordinate with different departments as needed",
  ]},
  { title: "Calendar & Scheduling", items: [
    "Schedule appointments and meetings",
    "Coordinate calendars across multiple team members",
    "Send reminders and meeting invitations",
    "Prevent scheduling conflicts",
    "Manage recurring meetings and daily/weekly schedules",
  ]},
  { title: "Administrative & Organizational Support", items: [
    "Data entry and database management",
    "Document preparation and formatting",
    "Digital file and Google Drive organization",
    "SOP creation and documentation",
    "Research and information gathering",
    "Spreadsheet management",
    "Standardized template creation",
  ]},
  { title: "Reporting & Operations", items: [
    "Prepare weekly and monthly reports",
    "Monitor operational KPIs and performance metrics",
    "Assist leadership with operational updates",
    "Ensure accuracy of business records",
  ]},
  { title: "CRM & Customer Management", items: [
    "Update and maintain customer information",
    "Track customer interactions and document case histories",
    "Process account updates",
    "Manage customer databases",
  ]},
];

const experiences = [
  {
    company: "Freelance",
    role: "Admin & Operations Support | VA",
    period: "2025 – Present",
    responsibilities: [
      "Managed email inboxes and calendars to ensure organized communication and efficient scheduling.",
      "Maintained CRM databases, spreadsheets, and digital files with accuracy and attention to detail.",
      "Prepared reports, documents, and presentations to support daily business operations.",
      "Coordinated meetings, tracked tasks, and followed up on deadlines to keep projects on schedule.",
      "Conducted online research and provided reliable administrative support to improve operational efficiency.",
    ],
    achievements: [
      "Streamlined administrative workflows through organized email, calendar, and file management.",
      "Maintained accurate records and ensured timely completion of administrative tasks.",
      "Improved operational efficiency by providing reliable day-to-day administrative support.",
      "Enhanced team productivity by coordinating schedules, tracking tasks, and managing documentation.",
      "Established organized digital systems for easy access to business files and information.",
    ],
  },
  {
    company: "TELUS International",
    role: "Tier 3 Technical Support",
    period: "2020 – 2025",
    responsibilities: [
      "Managed and updated customer records using CRM and ticketing systems.",
      "Documented every customer interaction accurately for future reference and compliance.",
      "Coordinated dispatch schedules with field technicians and engineering teams.",
      "Processed warranty claims, replacement requests, and repair documentation.",
      "Created and maintained knowledge base articles and internal documentation.",
      "Managed multiple customer cases simultaneously while meeting strict deadlines.",
      "Provided email, SMS, chat, and phone support across multiple communication channels.",
      "Maintained organized case histories and ensured accurate recordkeeping.",
      "Followed data privacy and quality assurance procedures.",
      "Consistently met KPI, SLA, and operational performance targets.",
    ],
    achievements: [
      "Consistently met and exceeded KPI, SLA, and quality assurance standards while managing a high volume of customer cases.",
      "Improved operational efficiency through accurate case documentation, organized recordkeeping, and timely follow-ups.",
      "Successfully coordinated with field technicians and cross-functional teams to ensure prompt service delivery and issue resolution.",
      "Contributed to knowledge management by creating and maintaining internal documentation and knowledge base resources.",
      "Recognized for effectively managing complex customer concerns across multiple communication channels while maintaining a high standard of service.",
    ],
  },
  {
    company: "Allied International Credit",
    role: "Operations Floor Support",
    period: "2018 – 2020",
    responsibilities: [
      "Supported daily business operations for front-line teams.",
      "Coordinated communication between agents and leadership.",
      "Prepared weekly operational reports and performance summaries.",
      "Organized training schedules and onboarding sessions.",
      "Created and updated training materials and internal documentation.",
      "Maintained performance records and coaching documentation.",
      "Assisted supervisors with workflow coordination and daily operational planning.",
      "Monitored KPIs and prepared reports for management review.",
      "Updated internal process documents and procedural guides.",
      "Ensured operational compliance and documentation accuracy.",
    ],
    achievements: [
      "Streamlined daily operations by coordinating communication between front-line agents and leadership.",
      "Supported team performance by preparing accurate operational reports and monitoring KPIs.",
      "Enhanced onboarding and employee development by organizing training sessions and materials.",
      "Improved operational consistency through up-to-date process documentation and compliance.",
      "Contributed to team productivity by assisting supervisors with workflow coordination.",
    ],
  },
  {
    company: "Allied International Credit",
    role: "Third Party Collections Representative & SME",
    period: "2017 – 2018",
    responsibilities: [
      "Maintained detailed customer records and account histories.",
      "Updated CRM databases with accurate information.",
      "Processed payment arrangements and account updates.",
      "Verified customer information and documentation.",
      "Managed dispute records and compliance documentation.",
      "Coordinated with supervisors and legal teams regarding complex accounts.",
      "Maintained confidential customer information.",
      "Documented every interaction according to company standards.",
      "Ensured compliance with regulatory requirements.",
    ],
    achievements: [
      "Maintained accurate customer records and CRM databases, ensuring data integrity and compliance.",
      "Successfully managed complex customer accounts through coordination with supervisors and legal teams.",
      "Ensured accurate documentation of interactions, payment arrangements, and dispute cases.",
      "Contributed to operational efficiency by verifying information and maintaining organized records.",
      "Upheld regulatory and company compliance requirements through meticulous documentation.",
    ],
  },
  {
    company: "McDonald's",
    role: "Service Crew",
    period: "2016 – 2017",
    responsibilities: [
      "Processed customer transactions accurately.",
      "Maintained inventory and workstation organization.",
      "Assisted with onboarding and training new employees.",
      "Followed operational procedures and documentation.",
      "Managed cash handling and daily transaction accuracy.",
      "Supported team coordination in a fast-paced environment.",
    ],
    achievements: [
      "Maintained accuracy in processing transactions while ensuring compliance with service standards.",
      "Contributed to smooth daily operations by keeping workstations organized.",
      "Assisted in onboarding and training new team members.",
      "Demonstrated reliability and adaptability across multiple responsibilities.",
      "Supported team productivity through strong collaboration and customer focus.",
    ],
  },
];

const testimonials = [
  { quote: "Working with Afsaneh has been a huge asset to our team. She kept our inboxes, calendars, and documents organized, making our daily operations much more efficient. Her attention to detail, proactive communication, and reliability allowed us to focus on serving our clients while knowing the administrative side of the business was in good hands.", name: "Sarah M.", role: "Operations Manager, Coastal Realty Group" },
  { quote: "Afsaneh consistently demonstrated exceptional organizational skills and professionalism. She efficiently coordinated day-to-day operations, maintained accurate records, and ensured tasks were completed on time. Her ability to stay organized under pressure made her a dependable support for our growing team.", name: "Michael C.", role: "Operations Manager, Harbor Home Services" },
  { quote: "Working alongside Afsaneh made my job so much easier. She was always my go-to person whenever I needed help with a task, had questions about a process, or needed a second set of eyes on something. She was incredibly patient, approachable, and always willing to share her knowledge without hesitation.", name: "Liza P.", role: "EA, Harbor Home Services" },
  { quote: "Afsaneh was one of our most dependable Tier 3 specialists. She handled complex technical issues with confidence while maintaining excellent customer satisfaction. Her documentation, attention to detail, and willingness to support both customers and teammates made her a valuable member of our organization.", name: "Jennifer C.", role: "Team Manager, TELUS International" },
  { quote: "Afsaneh's promotion into our Operations Floor Support role was well deserved. She consistently showed strong leadership, initiative, and a commitment to helping both agents and the leadership team succeed. From coaching employees to managing operational workflows and reporting, she became someone we could always rely on.", name: "Jason T.", role: "Operations Manager, Allied International Credit" },
];

const deliverables = [
  { src: crm, title: "CRM & Pipeline Management", desc: "Harbor Home Services — daily pipeline, tasks, and follow-ups." },
  { src: board, title: "Client Dashboard", desc: "Coastal Realty Group — centralized operations overview." },
  { src: kpi, title: "KPI Tracker & Reporting", desc: "Construction operations — monthly rollups with trend charts." },
  { src: opsBoard, title: "Client Ops Board", desc: "Kanban board — listings, leads, and vendor coordination." },
  { src: opsHub, title: "Ops Workspace Hub", desc: "Centralized client records, SOPs, and task tracking." },
  { src: emailMgmt, title: "Email Management", desc: "Organized inbox with ops-based categories and labels." },
  { src: emailMgmt2, title: "Inbox Zero", desc: "Sorted, labeled, and prioritized across multiple accounts." },
  { src: weekly, title: "Weekly Ops Schedule", desc: "Color-coded calendar by client and internal admin work." },
  { src: meetingNotes, title: "Meeting Notes", desc: "Weekly client check-in — agenda, discussion, action items." },
  { src: travel, title: "Travel Itinerary", desc: "Full trip plan — flights, hotel, meetings, and transport." },
  { src: onboarding, title: "Client Onboarding Doc", desc: "Coastal Realty Group — phased onboarding checklist." },
  { src: onboarding3, title: "Onboarding Checklist", desc: "Kickoff → setup → first 30 days, tracked and dated." },
];

const faqs = [
  { q: "What time zone do you work in?", a: "I can work EST, CST, MST, and some PST." },
  { q: "What tools do you use?", a: "See the full list on the tools section — I adapt to whatever your business already uses." },
  { q: "How do we get started?", a: "Book a free call, and we'll map out what support looks like for your business." },
  { q: "Why do we need a discovery call?", a: "This is for me to understand your business and how I can help you with it." },
  { q: "Do you sign NDAs?", a: "Yes, confidentiality is standard practice for every client." },
];

const navLinks = [
  ["about", "About"],
  ["deliverables", "Work"],
  ["help", "Services"],
  ["tools", "Tools"],
  ["experience", "Experience"],
  ["testimonials", "Words"],
  ["contact", "Contact"],
] as const;

/* ---------------------- primitives ---------------------- */

function Reveal({ children, delay = 0, y = 28 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ background: MOON }} />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  children,
  center = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <Reveal>
          <div className={center ? "flex justify-center" : ""}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className="font-serif-display mt-5"
          style={{
            fontSize: "clamp(40px, 6.5vw, 88px)",
            lineHeight: 0.98,
            fontWeight: 500,
            color: INK,
          }}
        >
          {children}
        </h2>
      </Reveal>
    </div>
  );
}

/* ---------------------- tools icon ---------------------- */

const CLEARBIT_DOMAIN: Record<string, string> = {
  gohighlevel: "gohighlevel.com",
  avaya: "avaya.com",
  genesys: "genesys.com",
  ringcentral: "ringcentral.com",
};

function ToolIcon({ slug, name }: { slug: string; name: string }) {
  const [stage, setStage] = useState<0 | 1 | 2>(CLEARBIT_DOMAIN[slug] ? 1 : 0);
  const initials = name.split(/\s|\.|&/).filter(Boolean).slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
  const src =
    stage === 0
      ? `https://cdn.simpleicons.org/${slug}/16131F`
      : `https://logo.clearbit.com/${CLEARBIT_DOMAIN[slug] ?? `${slug}.com`}`;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group inline-flex items-center gap-2.5 rounded-full border bg-white/70 px-4 py-2 backdrop-blur-sm"
      style={{ borderColor: "rgba(22,19,31,0.08)" }}
    >
      <div className="flex h-5 w-5 items-center justify-center">
        {stage === 2 ? (
          <span className="text-[10px] font-medium" style={{ color: INK }}>{initials}</span>
        ) : (
          <img
            src={src}
            alt={name}
            loading="lazy"
            className="h-4 w-4 object-contain"
            onError={() => setStage((s) => (s === 0 ? 1 : 2))}
          />
        )}
      </div>
      <span className="text-[12px] tracking-tight" style={{ color: INK }}>{name}</span>
    </motion.div>
  );
}

/* ---------------------- flip card ---------------------- */

function FlipCard({ e }: { e: typeof experiences[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`flip-card h-[460px] w-full select-none ${flipped ? "is-flipped" : ""}`}>
      <div className="flip-inner">
        {/* Front */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlipped(true)}
          onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setFlipped(true); } }}
          className="flip-face soft-card overflow-hidden cursor-pointer transition-shadow hover:shadow-[0_30px_60px_-30px_rgba(74,63,75,0.35)]"
          style={{ background: INK }}
        >
          <div className="flex h-full flex-col p-6" style={{ color: BLUSH }}>
            <span className="eyebrow" style={{ color: DECANTING }}>{e.period}</span>
            <div className="mt-3 font-serif-display text-[22px] leading-tight" style={{ color: BLUSH }}>{e.company}</div>
            <div className="mt-1 text-[13px]" style={{ color: DECANTING }}>{e.role}</div>
            <div className="my-4 h-px" style={{ background: "rgba(240,217,228,0.15)" }} />
            <ul
              className="min-h-0 flex-1 space-y-2 overflow-y-auto pr-1 text-[12.5px] leading-relaxed"
              onWheel={(ev) => ev.stopPropagation()}
            >
              {e.responsibilities.map((r) => (
                <li key={r} className="flex gap-2">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: DECANTING }} />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={(ev) => { ev.stopPropagation(); setFlipped(true); }}
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full border px-4 py-2 text-[11px] tracking-[0.18em] uppercase transition hover:bg-white/10"
              style={{ borderColor: "rgba(240,217,228,0.35)", color: BLUSH }}
            >
              Achievements <ArrowUpRight size={12} />
            </button>
          </div>
        </div>
        {/* Back */}
        <div
          className="flip-face flip-back soft-card overflow-hidden"
          style={{ background: "#ffffff" }}
        >
          <div className="flex h-full flex-col p-6" style={{ color: FUNKIE }}>
            <span className="eyebrow" style={{ color: MOON }}>Key Achievements</span>
            <div className="mt-3 font-serif-display text-[22px] leading-tight" style={{ color: INK }}>{e.role}</div>
            <div className="my-4 h-px" style={{ background: "rgba(22,19,31,0.08)" }} />
            <ul
              className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 text-[12.5px] leading-relaxed"
              onWheel={(ev) => ev.stopPropagation()}
            >
              {e.achievements.map((a) => (
                <li key={a} className="flex gap-2">
                  <Sparkles size={12} className="mt-1 shrink-0" style={{ color: DECANTING }} />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setFlipped(false)}
              className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full px-4 py-2 text-[11px] tracking-[0.18em] uppercase transition hover:opacity-90"
              style={{ background: INK, color: "#fff" }}
            >
              <ChevronLeft size={12} /> Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- help carousel ---------------------- */

function HelpCarousel({ groups }: { groups: typeof helpGroups }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [perView, setPerView] = useState(3);
  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      setPerView(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % groups.length), 4200);
    return () => clearInterval(id);
  }, [paused, groups.length]);
  const visible = Array.from({ length: perView }, (_, k) => {
    const gi = (index + k) % groups.length;
    return { g: groups[gi], gi };
  });
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className={`grid gap-6 ${perView === 1 ? "grid-cols-1" : perView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        <AnimatePresence mode="popLayout">
          {visible.map(({ g, gi }, i) => (
            <motion.div
              key={`${index}-${gi}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="soft-card flex h-[460px] flex-col p-8"
              style={{ background: INK }}
            >
              <span className="eyebrow" style={{ color: DECANTING }}>0{gi + 1} — Service</span>
              <h3 className="font-serif-display mt-4 text-[24px] leading-tight" style={{ color: BLUSH }}>{g.title}</h3>
              <div className="my-5 h-px" style={{ background: "rgba(240,217,228,0.15)" }} />
              <ul className="min-h-0 flex-1 space-y-2.5 overflow-y-auto pr-1 text-[13.5px] leading-relaxed" style={{ color: BLUSH }}>
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: DECANTING }} />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          onClick={() => setIndex((i) => (i - 1 + groups.length) % groups.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white"
          style={{ borderColor: "rgba(22,19,31,0.15)", color: INK }}
          aria-label="Previous"
        ><ChevronLeft size={16} /></button>
        <div className="flex gap-1.5">
          {groups.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === index ? 28 : 8, background: i === index ? INK : "rgba(22,19,31,0.2)" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % groups.length)}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white"
          style={{ borderColor: "rgba(22,19,31,0.15)", color: INK }}
          aria-label="Next"
        ><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

/* ---------------------- generic carousel ---------------------- */

function Carousel<T>({ items, perView = 2, render }: { items: T[]; perView?: number; render: (item: T, i: number) => React.ReactNode }) {
  const [start, setStart] = useState(0);
  const total = items.length;
  const maxStart = Math.max(0, total - perView);
  const clamped = Math.min(start, maxStart);
  const visible = items.slice(clamped, clamped + perView);
  const next = () => setStart((s) => (s + 1 > maxStart ? 0 : s + 1));
  const prev = () => setStart((s) => (s === 0 ? maxStart : s - 1));
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 min-h-[320px]">
        <AnimatePresence mode="wait">
          {visible.map((item, i) => (
            <motion.div
              key={`${clamped}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              {render(item, clamped + i)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white"
          style={{ borderColor: "rgba(22,19,31,0.15)", color: INK }}
          aria-label="Previous"
        ><ChevronLeft size={16} /></button>
        <div className="flex gap-1.5">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className="h-1.5 rounded-full transition-all"
              style={{ width: i === clamped ? 28 : 8, background: i === clamped ? INK : "rgba(22,19,31,0.2)" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="flex h-11 w-11 items-center justify-center rounded-full border transition hover:bg-white"
          style={{ borderColor: "rgba(22,19,31,0.15)", color: INK }}
          aria-label="Next"
        ><ChevronRight size={16} /></button>
      </div>
    </div>
  );
}

/* ---------------------- top nav ---------------------- */

function TopNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(240,217,228,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(22,19,31,0.06)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-serif-display text-[26px] leading-none tracking-tight" style={{ color: INK }}>
          Afsaneh<span style={{ color: DECANTING }}>.</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative rounded-full px-3.5 py-2 text-[12px] tracking-wide transition-colors"
              style={{ color: FUNKIE }}
            >
              <span className="relative">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ background: INK }} />
              </span>
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[12px] tracking-wide transition-all hover:scale-[1.03]"
          style={{ background: INK, color: "#fff" }}
        >
          Let's talk
          <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </motion.nav>
  );
}

/* ============================================================
   PAGE
============================================================ */

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  return (
    <main id="top" className="min-h-screen" style={{ background: BLUSH, color: INK }}>
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{ background: INK, scaleX }}
      />
      <TopNav />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-28">
        {/* Soft gradient wash */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 500px at 15% 10%, rgba(193,160,172,0.35), transparent 60%), radial-gradient(700px 400px at 90% 80%, rgba(128,108,121,0.18), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
            <div>
              <Reveal>
                <Eyebrow>Virtual Admin · Operations · Est. 2017</Eyebrow>
              </Reveal>
              <motion.h1
                style={{ y: heroY }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-serif-display mt-6 leading-[0.9]"
              >
                <span style={{ fontSize: "clamp(52px, 10vw, 132px)", color: INK, display: "block", fontWeight: 500 }}>
                  Afsaneh
                </span>
                <span
                  className="font-italic-serif block"
                  style={{ fontSize: "clamp(48px, 9vw, 120px)", color: FUNKIE, marginTop: "-0.05em" }}
                >
                  Jalandoni
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="mt-8 max-w-md text-[16px] leading-relaxed"
                style={{ color: FUNKIE }}
              >
                A calm, organized presence behind the scenes — quietly running the
                admin and operations side of your business so you can focus on
                what matters.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.55 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[13px] tracking-wide transition-all hover:scale-[1.03]"
                  style={{ background: INK, color: "#fff" }}
                >
                  Book a discovery call
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="mt-14 flex items-center gap-6 text-[11px] tracking-[0.2em] uppercase"
                style={{ color: MOON }}
              >
                <span>8+ Years</span>
                <span className="h-px w-6" style={{ background: MOON }} />
                <span>Remote · EST / CST / MST / PST</span>
              </motion.div>
            </div>

            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px]">
                <motion.div
                  aria-hidden
                  className="absolute -inset-6 rounded-[32px]"
                  style={{ background: "linear-gradient(160deg, #ffffff 0%, rgba(240,217,228,0.4) 100%)" }}
                  animate={{ rotate: [0, 0.6, 0] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative h-full w-full overflow-hidden rounded-[28px] shadow-[0_40px_80px_-40px_rgba(74,63,75,0.5)]">
                  <motion.img
                    src={s1}
                    alt="Afsaneh at her desk"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                {/* Floating tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="absolute -bottom-6 -left-4 rounded-2xl bg-white/90 px-5 py-4 shadow-[0_20px_40px_-20px_rgba(74,63,75,0.35)] backdrop-blur"
                  style={{ border: "1px solid rgba(22,19,31,0.06)" }}
                >
                  <div className="eyebrow">Currently</div>
                  <div className="mt-1 text-[13px]" style={{ color: INK }}>Accepting new clients / new projects</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative px-6 py-28 md:px-10 md:py-40" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.2fr] md:items-center">
            <Reveal>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px]">
                <div
                  aria-hidden
                  className="absolute -inset-4 rounded-[28px]"
                  style={{ background: BLUSH }}
                />
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.6 }}
                  className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_30px_60px_-30px_rgba(74,63,75,0.35)]"
                >
                  <img src={s2} alt="Afsaneh working" className="h-full w-full object-cover" />
                </motion.div>
              </div>
            </Reveal>
            <div>
              <SectionHeading eyebrow="About">
                Calm order,<br />
                <span className="font-italic-serif" style={{ color: FUNKIE }}>quietly delivered.</span>
              </SectionHeading>
              <Reveal delay={0.15}>
                <div className="mt-10 space-y-6 text-[16px] leading-relaxed" style={{ color: FUNKIE }}>
                  <p>Hi, I'm <span style={{ color: INK, fontWeight: 500 }}>Afsaneh</span>. For the past 8+ years, I've helped businesses stay organized behind the scenes — from managing inboxes and calendars to keeping CRMs tidy and building simple systems that just work.</p>
                  <p>I know what it's like to watch a business owner drowning in admin work they didn't sign up for. That's where I come in. I take the repetitive, time-consuming tasks off your hands so you can get back to doing what you actually love — growing your business.</p>
                  <p>Think of me as the calm, organized presence working quietly in the background, so you don't have to be.</p>
                  <p className="font-italic-serif text-[22px] leading-snug" style={{ color: INK }}>
                    Let's lighten your load, one task at a time.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section id="deliverables" className="px-6 py-28 md:px-10 md:py-40" style={{ background: BLUSH }}>
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-10">
            <SectionHeading eyebrow="Selected Work">
              Proof of<br />
              <span className="font-italic-serif" style={{ color: FUNKIE }}>deliverables.</span>
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-[14px] leading-relaxed md:mt-0" style={{ color: FUNKIE }}>
                A quiet look at the systems, boards, and reports I keep humming
                for the businesses I support.
              </p>
            </Reveal>
          </div>
          <div className="mt-16">
            <Carousel
              items={deliverables}
              perView={2}
              render={(p) => (
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="soft-card h-full overflow-hidden"
                >
                  <div className="overflow-hidden" style={{ background: "#F8ECF1" }}>
                    <motion.img
                      src={p.src}
                      alt={p.title}
                      className="h-80 w-full object-cover object-top"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <figcaption className="flex items-start justify-between gap-4 p-7">
                    <div>
                      <div className="font-serif-display text-[20px]" style={{ color: INK }}>{p.title}</div>
                      <div className="mt-1.5 text-[13px]" style={{ color: MOON }}>{p.desc}</div>
                    </div>
                    <ArrowUpRight size={18} style={{ color: MOON }} className="mt-1 shrink-0" />
                  </figcaption>
                </motion.figure>
              )}
            />
          </div>
        </div>
      </section>

      {/* HELP / SERVICES */}
      <section id="help" className="px-6 py-28 md:px-10 md:py-40" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Services" center>
            How I can help<br />
            <span className="font-italic-serif" style={{ color: FUNKIE }}>your business.</span>
          </SectionHeading>
          <div className="mt-16">
            <HelpCarousel groups={helpGroups} />
          </div>
          <Reveal delay={0.2}>
            <div className="mx-auto mt-20 max-w-3xl rounded-[28px] px-10 py-12 text-center" style={{ background: "#806C79" }}>
              <p className="font-italic-serif leading-snug" style={{ color: "#ffffff", fontSize: "clamp(22px, 3vw, 30px)" }}>
                <span style={{ color: BLUSH }}>My goal is simple:</span> take the operational load off your shoulders so you can spend your time on strategy, clients, and growth.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="px-6 py-28 md:px-10 md:py-40" style={{ background: BLUSH }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-start">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="Toolkit">
                Tools I'm<br />
                <span className="font-italic-serif" style={{ color: FUNKIE }}>skilled at.</span>
              </SectionHeading>
              <Reveal delay={0.15}>
                <p className="mt-8 max-w-sm text-[15px] leading-relaxed" style={{ color: FUNKIE }}>
                  Whatever stack you're on, I'll meet you there. These are the
                  tools I use every day to keep clients organized.
                </p>
              </Reveal>
            </div>
            <div className="space-y-10">
              {Object.entries(tools).map(([category, items], ci) => (
                <Reveal key={category} delay={ci * 0.05}>
                  <div>
                    <div className="flex items-baseline gap-4">
                      <span className="font-serif-display text-[13px]" style={{ color: MOON }}>0{ci + 1}</span>
                      <h3 className="font-serif-display text-[22px]" style={{ color: INK }}>{category}</h3>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2.5">
                      {items.map(([slug, name]) => (
                        <ToolIcon key={`${category}-${name}`} slug={slug} name={name} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="px-6 py-28 md:px-10 md:py-40" style={{ background: "#ffffff" }}>
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between md:gap-10">
            <SectionHeading eyebrow="Experience">
              A quiet<br />
              <span className="font-italic-serif" style={{ color: FUNKIE }}>track record.</span>
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-sm text-[14px] leading-relaxed md:mt-0" style={{ color: MOON }}>
                Tap any card to reveal the achievements on the reverse.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <FlipCard e={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-28 md:px-10 md:py-40" style={{ background: BLUSH }}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Words" center>
            Kind things clients<br />
            <span className="font-italic-serif" style={{ color: FUNKIE }}>have said.</span>
          </SectionHeading>
          <div className="mt-16">
            <Carousel
              items={testimonials}
              perView={2}
              render={(t) => (
                <motion.blockquote
                  whileHover={{ y: -4 }}
                  className="soft-card flex h-full flex-col p-10"
                >
                  <div className="font-serif-display leading-none" style={{ color: DECANTING, fontSize: 72 }}>"</div>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed" style={{ color: FUNKIE }}>{t.quote}</p>
                  <footer className="mt-8 flex items-center gap-4 border-t pt-6" style={{ borderColor: "rgba(22,19,31,0.08)" }}>
                    <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: BLUSH, color: INK }}>
                      <span className="text-[12px] tracking-wider">{t.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <div className="font-serif-display text-[15px]" style={{ color: INK }}>{t.name}</div>
                      <div className="text-[11.5px] tracking-wide" style={{ color: MOON }}>{t.role}</div>
                    </div>
                  </footer>
                </motion.blockquote>
              )}
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="px-6 py-28 md:px-10 md:py-40" style={{ background: "#ffffff" }}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px]">
              <div aria-hidden className="absolute -inset-4 rounded-[28px]" style={{ background: BLUSH }} />
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.6 }}
                className="relative h-full w-full overflow-hidden rounded-[24px] shadow-[0_30px_60px_-30px_rgba(74,63,75,0.35)]"
              >
                <img src={s3} alt="Afsaneh at work" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="Mission">
              A dependable partner,<br />
              <span className="font-italic-serif" style={{ color: FUNKIE }}>every step of the way.</span>
            </SectionHeading>
            <Reveal delay={0.15}>
              <p className="mt-10 text-[16px] leading-relaxed" style={{ color: FUNKIE }}>
                My mission is to become a dependable administrative partner who keeps your business organized, your operations running efficiently, and your daily workload manageable. By taking ownership of administrative tasks, documentation, coordination, and operational support, I help create more time for you to focus on growing your business with confidence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden px-6 py-28 md:px-10 md:py-40" style={{ background: BLUSH }}>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(193,160,172,0.5), transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(128,108,121,0.35), transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-6xl">
          <Reveal>
            <div className="rounded-[32px] p-10 md:p-16" style={{ background: "#ffffff", boxShadow: "0 40px 80px -40px rgba(74,63,75,0.35)" }}>
              <Eyebrow>Get in touch</Eyebrow>
              <h2
                className="font-serif-display mt-6"
                style={{ fontSize: "clamp(36px, 6vw, 76px)", lineHeight: 0.98, color: INK, fontWeight: 500 }}
              >
                Ready to get your<br />
                <span className="font-italic-serif" style={{ color: FUNKIE }}>time back?</span>
              </h2>
              <p className="mt-8 max-w-2xl text-[16px] leading-relaxed" style={{ color: FUNKIE }}>
                Whether you need a few hours a week of admin support or a dedicated partner to manage your day-to-day operations, I'd love to hear about your business and how I can help.
              </p>
              <p className="mt-4 max-w-2xl font-italic-serif text-[17px]" style={{ color: MOON }}>
                Flexible engagement options — hourly, part-time retainer, or dedicated full-time support.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <motion.a
                  href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-[13px] tracking-wide"
                  style={{ background: INK, color: "#fff" }}
                >
                  Book a discovery call
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.a>
                <a
                  href="mailto:workwithAfsaneh@gmail.com"
                  className="inline-flex items-center gap-2 text-[13px] tracking-wide underline-offset-8 hover:underline"
                  style={{ color: FUNKIE }}
                >
                  Or send a quick email
                </a>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-10 border-t pt-12 md:grid-cols-2" style={{ borderColor: "rgba(22,19,31,0.08)" }}>
                <div>
                  <div className="eyebrow">Reach me</div>
                  <ul className="mt-6 space-y-4 text-[14px]">
                    {[
                      { icon: Mail, label: "Email", value: <a className="underline underline-offset-4" style={{ color: INK }} href="mailto:workwithAfsaneh@gmail.com">workwithAfsaneh@gmail.com</a> },
                      { icon: MessageCircle, label: "WhatsApp", value: "+63 945 325 8870" },
                      { icon: Calendar, label: "Booking", value: <a className="underline underline-offset-4" style={{ color: INK }} href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh" target="_blank" rel="noreferrer">calendly.com/workwithafsaneh</a> },
                      { icon: Clock, label: "Response time", value: "Within a few hours during business hours" },
                    ].map((row, i) => (
                      <motion.li
                        key={row.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="flex items-start gap-3"
                      >
                        <row.icon size={16} className="mt-0.5 shrink-0" style={{ color: MOON }} />
                        <div>
                          <div className="text-[11px] tracking-[0.2em] uppercase" style={{ color: MOON }}>{row.label}</div>
                          <div className="mt-1" style={{ color: FUNKIE }}>{row.value}</div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="eyebrow">FAQ</div>
                  <dl className="mt-6 space-y-5 text-[14px]">
                    {faqs.map((f, i) => (
                      <motion.div
                        key={f.q}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="rounded-2xl border p-5 transition-colors hover:bg-[#F8ECF1]"
                        style={{ borderColor: "rgba(22,19,31,0.08)" }}
                      >
                        <dt className="font-serif-display text-[16px]" style={{ color: INK }}>{f.q}</dt>
                        <dd className="mt-1.5 leading-relaxed" style={{ color: FUNKIE }}>{f.a}</dd>
                      </motion.div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-14 md:px-10" style={{ background: "#ffffff" }}>
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 text-center">
          <div className="font-serif-display text-[22px]" style={{ color: INK }}>
            Afsaneh<span style={{ color: DECANTING }}>.</span>
          </div>
          <div className="h-px w-24" style={{ background: "rgba(22,19,31,0.12)" }} />
          <p className="text-[12px] tracking-wide" style={{ color: MOON }}>
            © {new Date().getFullYear()} Afsaneh Jalandoni — Admin &amp; Operations Support
          </p>
        </div>
      </footer>
    </main>
  );
}

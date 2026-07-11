import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { useState, useEffect, useRef } from "react";
import s1 from "@/assets/S1.png.asset.json";
import s2 from "@/assets/S2.png.asset.json";
import s3 from "@/assets/S3.png.asset.json";
import crm from "@/assets/CRM_Management.png.asset.json";
import board from "@/assets/Client_Dasboard.png.asset.json";
import kpi from "@/assets/KPI_Tracker_Construction_Operations.png.asset.json";
import emailMgmt from "@/assets/Email_Management.png.asset.json";
import emailMgmt2 from "@/assets/Email_Management_2.png.asset.json";
import travel from "@/assets/Travel_Itinerary.png.asset.json";
import meetingNotes from "@/assets/Meeting_Notes.png.asset.json";
import weekly from "@/assets/Weekly_Calendar.png.asset.json";
import opsHub from "@/assets/Ops_Workspace.png.asset.json";
import onboarding from "@/assets/Client_Onboarding_List.png.asset.json";
import onboarding3 from "@/assets/Client_Onboarding_List_Image3.png.asset.json";
import opsBoard from "@/assets/Client_Ops_Board.png.asset.json";

export const Route = createFileRoute("/")({ component: Index });

const GOLD = "#fce08b";
const MAROON_RED = "#af2c35";
const ABOUT_BODY = "#401804";
const SUB_GREY = "#DCDBDC";
const PEACH_BG = "#FDEFE0";

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
  { src: crm.url, title: "CRM & Pipeline Management", desc: "Harbor Home Services — daily pipeline, tasks, and follow-ups." },
  { src: board.url, title: "Client Dashboard", desc: "Coastal Realty Group — centralized operations overview." },
  { src: kpi.url, title: "KPI Tracker & Reporting", desc: "Construction operations — monthly rollups with trend charts." },
  { src: opsBoard.url, title: "Client Ops Board", desc: "Kanban board — listings, leads, and vendor coordination." },
  { src: opsHub.url, title: "Ops Workspace Hub", desc: "Centralized client records, SOPs, and task tracking." },
  { src: emailMgmt.url, title: "Email Management", desc: "Organized inbox with ops-based categories and labels." },
  { src: emailMgmt2.url, title: "Inbox Zero", desc: "Sorted, labeled, and prioritized across multiple accounts." },
  { src: weekly.url, title: "Weekly Ops Schedule", desc: "Color-coded calendar by client and internal admin work." },
  { src: meetingNotes.url, title: "Meeting Notes", desc: "Weekly client check-in — agenda, discussion, action items." },
  { src: travel.url, title: "Travel Itinerary", desc: "Full trip plan — flights, hotel, meetings, and transport." },
  { src: onboarding.url, title: "Client Onboarding Doc", desc: "Coastal Realty Group — phased onboarding checklist." },
  { src: onboarding3.url, title: "Onboarding Checklist", desc: "Kickoff → setup → first 30 days, tracked and dated." },
];

const faqs = [
  { q: "What time zone do you work in?", a: "I can work EST, CST, MST, and some PST." },
  { q: "What tools do you use?", a: "See the full list on the tools section — I adapt to whatever your business already uses." },
  { q: "How do we get started?", a: "Book a free call, and we'll map out what support looks like for your business." },
  { q: "Do you sign NDAs?", a: "Yes, confidentiality is standard practice for every client." },
];

const navLinks = [
  ["about", "About"],
  ["deliverables", "Deliverables"],
  ["help", "Services"],
  ["tools", "Tools"],
  ["experience", "Experience"],
  ["testimonials", "Testimonials"],
  ["mission", "Mission"],
  ["contact", "Contact"],
] as const;

function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Big gold headings (size > 50 + gold color) use Arial Black per user's global rule.
function GoldHeading({ children, size, className = "" }: { children: React.ReactNode; size: number; className?: string }) {
  return (
    <Reveal>
      <h2
        className={`font-arial-black ${className}`}
        style={{ color: GOLD, fontSize: `clamp(36px, 8vw, ${size}px)`, lineHeight: 1.05, fontWeight: 900 }}
      >
        {children}
      </h2>
    </Reveal>
  );
}

const CLEARBIT_DOMAIN: Record<string, string> = {
  gohighlevel: "gohighlevel.com",
  avaya: "avaya.com",
  genesys: "genesys.com",
  ringcentral: "ringcentral.com",
};

function ToolIcon({ slug, name }: { slug: string; name: string }) {
  const [stage, setStage] = useState<0 | 1 | 2>(CLEARBIT_DOMAIN[slug] ? 1 : 0);
  const initials = name
    .split(/\s|\.|&/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");
  const src =
    stage === 0
      ? `https://cdn.simpleicons.org/${slug}`
      : `https://logo.clearbit.com/${CLEARBIT_DOMAIN[slug] ?? `${slug}.com`}`;
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group flex w-[84px] shrink-0 flex-col items-center gap-1.5"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-lg shadow-sm overflow-hidden"
        style={{ background: "#ffffff" }}
      >
        {stage === 2 ? (
          <span className="text-[11px] font-bold" style={{ color: "#af2c35" }}>{initials}</span>
        ) : (
          <img
            src={src}
            alt={name}
            loading="lazy"
            className="h-7 w-7 object-contain"
            onError={() => setStage((s) => (s === 0 ? 1 : 2))}
          />
        )}
      </div>
      <span className="text-[10px] font-dm text-center leading-tight" style={{ color: "#4a1e12" }}>{name}</span>
    </motion.div>
  );
}

function FlipCard({ e }: { e: typeof experiences[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className={`flip-card h-[440px] w-full select-none ${flipped ? "is-flipped" : ""}`}>
      <div className="flip-inner">
        {/* Front — entire face clickable to flip */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setFlipped(true)}
          onKeyDown={(ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); setFlipped(true); } }}
          className="flip-face rounded-[20px] border overflow-hidden cursor-pointer transition-shadow hover:shadow-[0_18px_40px_-20px_rgba(0,0,0,0.6)]"
          style={{ borderColor: "rgba(252,224,139,0.35)", background: "linear-gradient(160deg, var(--maroon-deep), var(--maroon))" }}
        >
          <div className="flex h-full flex-col p-4">
            <div className="font-gotham text-[10px] tracking-[0.25em]" style={{ color: GOLD }}>{e.company}</div>
            <h3 className="mt-1 text-[13px] font-semibold leading-snug">{e.role}</h3>
            <div className="mt-0.5 text-[10px] text-muted-foreground">{e.period}</div>
            <div className="mt-3 mb-1.5 font-gotham text-[9px] tracking-widest text-foreground/70">Responsibilities</div>
            <ul
              className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1 text-[11px] leading-snug text-foreground/85"
              onWheel={(ev) => ev.stopPropagation()}
            >
              {e.responsibilities.map((r) => (
                <li key={r} className="flex gap-1.5"><span style={{ color: GOLD }}>▸</span><span>{r}</span></li>
              ))}
            </ul>
            <button
              type="button"
              onClick={(ev) => { ev.stopPropagation(); setFlipped(true); }}
              className="mt-3 self-end rounded-full border px-3 py-1 text-[10px] font-gotham tracking-[0.2em] transition hover:scale-105"
              style={{ borderColor: "rgba(252,224,139,0.5)", color: GOLD }}
            >
              Achievements →
            </button>
          </div>
        </div>
        {/* Back */}
        <div
          className="flip-face flip-back rounded-[20px] border overflow-hidden"
          style={{ borderColor: "rgba(252,224,139,0.45)", background: "linear-gradient(135deg, var(--maroon), var(--maroon-deep))" }}
        >
          <div className="flex h-full flex-col p-4">
            <div className="font-gotham text-[10px] tracking-[0.25em]" style={{ color: GOLD }}>Key Achievements</div>
            <h3 className="mt-1 text-[13px] font-semibold leading-snug">{e.role}</h3>
            <ul
              className="mt-3 min-h-0 flex-1 space-y-1.5 overflow-y-auto pr-1 text-[11px] leading-snug text-foreground/90"
              onWheel={(ev) => ev.stopPropagation()}
            >
              {e.achievements.map((a) => (
                <li key={a} className="flex gap-1.5"><span style={{ color: GOLD }}>★</span><span>{a}</span></li>
              ))}
            </ul>
            <button
              onClick={() => setFlipped(false)}
              className="mt-3 self-start rounded-full border px-3 py-1 text-[10px] font-gotham tracking-[0.25em] transition hover:scale-105"
              style={{ borderColor: "rgba(252,224,139,0.5)", color: GOLD }}
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`grid gap-6 ${perView === 1 ? "grid-cols-1" : perView === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        <AnimatePresence mode="popLayout">
          {visible.map(({ g, gi }, i) => (
            <motion.div
              key={`${index}-${gi}`}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="h-[440px] w-full rounded-[28px] border px-6 py-8 flex flex-col"
              style={{
                background: "linear-gradient(180deg, var(--maroon-deep) 0%, rgba(42,19,11,0.85) 100%)",
                borderColor: "rgba(252,224,139,0.35)",
                boxShadow: "inset 0 0 0 2px rgba(252,224,139,0.08), 0 20px 40px -20px rgba(0,0,0,0.5)",
              }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full" style={{ background: "rgba(252,224,139,0.12)", border: "1px solid rgba(252,224,139,0.35)" }}>
                <span className="font-gotham text-sm" style={{ color: GOLD }}>{String(gi + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-center font-gotham text-sm leading-snug" style={{ color: GOLD }}>{g.title}</h3>
              <ul className="mt-5 flex-1 space-y-2 overflow-y-auto pr-1 font-dm text-[13px] text-foreground/85">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2"><span style={{ color: GOLD }}>●</span><span>{it}</span></li>
                ))}
              </ul>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => setIndex((i) => (i - 1 + groups.length) % groups.length)}
          className="rounded-full w-10 h-10 flex items-center justify-center border transition hover:scale-110"
          style={{ borderColor: "rgba(252,224,139,0.4)", color: GOLD }}
          aria-label="Previous"
        >‹</button>
        <div className="flex gap-1.5">
          {groups.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === index ? 24 : 8,
                background: i === index ? GOLD : "rgba(252,224,139,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setIndex((i) => (i + 1) % groups.length)}
          className="rounded-full w-10 h-10 flex items-center justify-center border transition hover:scale-110"
          style={{ borderColor: "rgba(252,224,139,0.4)", color: GOLD }}
          aria-label="Next"
        >›</button>
      </div>
    </div>
  );
}

function WorkspaceAnimation() {
  // Floating "task cards" + orbiting tool dots — professional decorative motion.
  const tasks = [
    { label: "Inbox zero", tick: true, delay: 0 },
    { label: "Client report sent", tick: true, delay: 0.4 },
    { label: "Calendar synced", tick: true, delay: 0.8 },
    { label: "CRM updated", tick: false, delay: 1.2 },
  ];
  return (
    <div className="relative h-[640px] w-full max-w-[560px]">
      {/* Outer soft ring */}
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ width: 560, height: 560, border: "1px dashed rgba(175,44,53,0.18)" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      {/* Orbit ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{ width: 460, height: 460, borderColor: "rgba(175,44,53,0.3)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute h-5 w-5 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              background: i % 2 ? "#af2c35" : "#fce08b",
              transform: `rotate(${deg}deg) translate(230px) rotate(-${deg}deg) translate(-10px,-10px)`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </motion.div>

      {/* Center badge */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-56 w-56 items-center justify-center rounded-full shadow-2xl"
        style={{ background: "var(--maroon-deep)", border: "4px solid #fce08b" }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-arial-black text-6xl" style={{ color: GOLD }}>AJ</span>
      </motion.div>


      {/* Floating task cards */}
      {tasks.map((t, i) => {
        const positions = [
          { top: "8%", left: "4%" },
          { top: "18%", right: "6%" },
          { bottom: "12%", left: "6%" },
          { bottom: "6%", right: "4%" },
        ];
        return (
          <motion.div
            key={t.label}
            className="absolute rounded-lg px-3 py-2 shadow-md flex items-center gap-2"
            style={{ ...positions[i], background: "#ffffff", border: "1px solid rgba(175,44,53,0.15)", minWidth: 140 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: t.delay }}
          >
            <motion.span
              className="flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold"
              style={{ background: t.tick ? "#af2c35" : "rgba(175,44,53,0.15)", color: t.tick ? "#fce08b" : "#af2c35" }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: t.delay + 0.2, type: "spring", stiffness: 300 }}
            >
              {t.tick ? "✓" : "·"}
            </motion.span>
            <span className="text-[11px] font-dm" style={{ color: "#4a1e12" }}>{t.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}


function Carousel<T>({ items, perView = 2, render }: { items: T[]; perView?: number; render: (item: T, i: number) => React.ReactNode }) {
  const [start, setStart] = useState(0);
  const total = items.length;
  const maxStart = Math.max(0, total - perView);
  const clamped = Math.min(start, maxStart);
  const visible = items.slice(clamped, clamped + perView);
  const next = () => setStart((s) => (s + perView >= total ? 0 : Math.min(s + 1, maxStart)));
  const prev = () => setStart((s) => (s === 0 ? maxStart : Math.max(s - 1, 0)));
  const currentPage = Math.floor(clamped / 1);
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 min-h-[280px]">
        <AnimatePresence mode="wait">
          {visible.map((item, i) => (
            <motion.div
              key={`${clamped}-${i}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {render(item, clamped + i)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          className="rounded-full w-10 h-10 flex items-center justify-center border transition hover:scale-110"
          style={{ borderColor: "rgba(252,224,139,0.4)", color: GOLD }}
          aria-label="Previous"
        >‹</button>
        <div className="flex gap-1.5">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === currentPage ? 24 : 8,
                background: i === currentPage ? GOLD : "rgba(252,224,139,0.3)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="rounded-full w-10 h-10 flex items-center justify-center border transition hover:scale-110"
          style={{ borderColor: "rgba(252,224,139,0.4)", color: GOLD }}
          aria-label="Next"
        >›</button>
      </div>
    </div>
  );
}

function TopNav() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(42,19,11,0.85)", borderBottom: "1px solid rgba(252,224,139,0.15)" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-arial-black leading-none"
          style={{ color: GOLD, fontSize: "34px", letterSpacing: "0.08em", fontWeight: 900 }}
        >
          AJ
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-3 py-1.5 text-xs font-dm tracking-wide text-foreground/80 hover:text-foreground transition-all hover:bg-white/5"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full px-4 py-1.5 text-xs font-gotham tracking-widest transition-all hover:scale-105"
          style={{ background: GOLD, color: "#2a130b" }}
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}

function Index() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <motion.div
        aria-hidden
        className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
        style={{ background: GOLD, scaleX }}
      />
      <TopNav />

      {/* HERO */}
      <section className="relative grid min-h-[90vh] grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{ background: "var(--maroon)" }}>
        <div className="flex flex-col justify-center px-8 py-16 md:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-nunito leading-[0.88]"
            style={{ color: GOLD, fontSize: "clamp(64px, 13vw, 140px)", fontWeight: 900, letterSpacing: "-0.03em" }}
          >
            Afsaneh<br />Jalandoni
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 font-dm tracking-[0.2em]"
            style={{ color: SUB_GREY, fontSize: "18px" }}
          >
            Admin &amp; Operations Support | VA
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-8 py-4 font-gotham text-sm tracking-widest text-foreground transition-all hover:scale-105 hover:shadow-lg"
              style={{ background: "var(--maroon-deep)" }}
            >
              Contact
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative min-h-[400px] md:min-h-full overflow-hidden"
        >
          <img src={s1.url} alt="Afsaneh at her desk" className="absolute inset-0 h-full w-full object-cover" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-24 md:px-20" style={{ background: PEACH_BG }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <Reveal>
              <h2 className="font-arial-black" style={{ color: MAROON_RED, fontSize: "clamp(48px, 9vw, 70px)", fontWeight: 900, lineHeight: 1 }}>
                About
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="mt-8 overflow-hidden rounded-md"
              >
                <img src={s2.url} alt="Afsaneh working" className="h-full w-full object-cover" />
              </motion.div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div
              className="space-y-5 font-dm leading-relaxed"
              style={{ color: ABOUT_BODY, fontSize: "18px" }}
            >
              <p>Hi, I'm <strong>Afsaneh</strong>! For the past 8+ years, I've helped businesses stay organized behind the scenes — from managing inboxes and calendars to keeping CRMs tidy and building simple systems that just work.</p>
              <p>I know what it's like to watch a business owner drowning in admin work they didn't sign up for. That's where I come in. I take the repetitive, time-consuming tasks off your hands so you can get back to doing what you actually love — growing your business.</p>
              <p>Think of me as the calm, organized presence working quietly in the background, so you don't have to be.</p>
              <p className="font-bold" style={{ fontWeight: 900 }}>Let's lighten your load, one task at a time.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF OF DELIVERABLES */}
      <section id="deliverables" className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <GoldHeading size={70}>Proof of Deliverables</GoldHeading>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl font-dm text-muted-foreground">A glimpse into the systems, boards, and reports I keep humming for clients. Use the arrows to browse.</p>
          </Reveal>
          <div className="mt-12">
            <Carousel
              items={deliverables}
              perView={2}
              render={(p) => (
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="overflow-hidden rounded-xl border h-full"
                  style={{ borderColor: "rgba(252,224,139,0.15)" }}
                >
                  <div className="bg-white overflow-hidden">
                    <motion.img
                      src={p.src}
                      alt={p.title}
                      className="h-72 w-full object-cover object-top"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <figcaption className="p-5" style={{ background: "var(--card)" }}>
                    <div className="font-gotham text-sm" style={{ color: GOLD }}>{p.title}</div>
                    <div className="mt-1 text-sm font-dm text-muted-foreground">{p.desc}</div>
                  </figcaption>
                </motion.figure>
              )}
            />
          </div>
        </div>
      </section>

      {/* HOW I CAN HELP */}
      <section id="help" className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-6xl">
          <GoldHeading size={64}>How I Can Help Your Business</GoldHeading>
          <div className="mt-14">
            <HelpCarousel groups={helpGroups} />
          </div>
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-14 rounded-xl px-8 py-10 text-center animate-floaty"
              style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)" }}
            >
              <p
                className="font-poppins mx-auto max-w-3xl leading-relaxed"
                style={{ fontSize: "22px", color: SUB_GREY, fontWeight: 500 }}
              >
                <span style={{ color: GOLD, fontWeight: 700 }}>My goal is simple:</span> take the operational load off your shoulders so you can spend your time on strategy, clients, and growth.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="px-6 py-20 md:px-20" style={{ background: PEACH_BG }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2
              className="font-arial-black"
              style={{ color: MAROON_RED, fontSize: "clamp(36px, 8vw, 63px)", lineHeight: 1.05, fontWeight: 900 }}
            >
              Tools I'm Skilled At
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div className="space-y-8">
              {Object.entries(tools).map(([category, items], ci) => (
                <Reveal key={category} delay={ci * 0.05}>
                  <div>
                    <h3 className="font-gotham text-xs tracking-[0.25em]" style={{ color: "#4a1e12" }}>{category}</h3>
                    <div className="mt-4 flex flex-wrap gap-x-2 gap-y-5">
                      {items.map(([slug, name]) => (
                        <ToolIcon key={`${category}-${name}`} slug={slug} name={name} />
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2}>
              <div className="hidden lg:flex sticky top-24 h-[calc(100vh-8rem)] items-center justify-center">
                <WorkspaceAnimation />
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="px-6 py-24 md:px-12" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-[1400px]">
          <GoldHeading size={70}>Work Experience</GoldHeading>
          <Reveal delay={0.1}>
            <p className="mt-3 font-dm text-sm text-foreground/70">
              Tap any card to flip and see key achievements. Use the ← Back button on the reverse to return.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {experiences.map((e, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <FlipCard e={e} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <GoldHeading size={70}>Testimonials</GoldHeading>
          <div className="mt-12">
            <Carousel
              items={testimonials}
              perView={2}
              render={(t) => (
                <motion.blockquote
                  whileHover={{ y: -4 }}
                  className="ornate-frame rounded-md p-8 h-full"
                  style={{ background: "var(--card)" }}
                >
                  <div className="font-serif text-5xl leading-none italic" style={{ color: GOLD }}>"</div>
                  <p className="mt-2 font-dm text-sm leading-relaxed text-foreground/90">{t.quote}</p>
                  <footer className="mt-6 border-t pt-4" style={{ borderColor: "rgba(252,224,139,0.2)" }}>
                    <div className="font-gotham text-sm" style={{ color: GOLD }}>— {t.name}</div>
                    <div className="text-xs font-dm text-muted-foreground">{t.role}</div>
                  </footer>
                </motion.blockquote>
              )}
            />
          </div>
        </div>
      </section>

      {/* MY MISSION */}
      <section id="mission" className="px-6 py-24 md:px-20" style={{ background: PEACH_BG }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <Reveal>
            <motion.div
              whileHover={{ scale: 1.02, rotate: -0.5 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="overflow-hidden rounded-xl"
            >
              <img src={s3.url} alt="Afsaneh at work" className="h-full w-full object-cover" />
            </motion.div>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="font-arial-black"
                style={{ color: MAROON_RED, fontSize: "clamp(40px, 8vw, 60px)", lineHeight: 1.05, fontWeight: 900 }}
              >
                My Mission
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-dm text-lg leading-relaxed" style={{ color: ABOUT_BODY }}>
                My mission is to become a dependable administrative partner who keeps your business organized, your operations running efficiently, and your daily workload manageable. By taking ownership of administrative tasks, documentation, coordination, and operational support, I help create more time for you to focus on growing your business with confidence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-20">
        {/* Animated background blobs */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(252,224,139,0.15), transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(175,44,53,0.25), transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-4xl">
          <Reveal>
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="rounded-xl px-8 py-10"
              style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)", boxShadow: "0 20px 40px -20px rgba(0,0,0,0.5)" }}
            >
              <motion.h2
                className="font-arial-black"
                style={{ color: GOLD, fontSize: "clamp(36px, 7vw, 55px)", fontWeight: 900, lineHeight: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                Ready to get your time back?
              </motion.h2>
              <p className="mt-4 font-dm text-foreground/90">
                Whether you need a few hours a week of admin support or a dedicated partner to manage your day-to-day operations, I'd love to hear about your business and how I can help.
              </p>
              <p className="mt-4 font-portland text-foreground/80">
                Flexible engagement options — hourly, part-time retainer, or dedicated full-time support. Let's find what fits your budget and workload.
              </p>
              <motion.a
                href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 font-gotham text-xs tracking-widest"
                style={{ background: GOLD, color: "#2a130b" }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(252,224,139,0.5)", "0 0 0 14px rgba(252,224,139,0)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeOut" } }}
              >
                Book a discovery call →
              </motion.a>
            </motion.div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal>
              <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
                <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Get in touch</h3>
                <ul className="mt-4 space-y-3 font-dm text-sm text-foreground/90">
                  {[
                    ["Email:", <a key="e" className="underline" style={{ color: GOLD }} href="mailto:workwithAfsaneh@gmail.com">workwithAfsaneh@gmail.com</a>],
                    ["WhatsApp:", "+63 945 325 8870"],
                    ["Booking:", <a key="b" className="underline" style={{ color: GOLD }} href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh" target="_blank" rel="noreferrer">calendly.com/workwithafsaneh</a>],
                    ["Response time:", "Within a few hours during business hours"],
                    ["Availability:", "Currently accepting new clients"],
                  ].map(([label, value], i) => (
                    <motion.li
                      key={String(label)}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08, duration: 0.5 }}
                    >
                      <span className="text-muted-foreground">{label}</span> {value}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Frequently asked questions</h3>
                <dl className="mt-4 space-y-4 font-dm text-sm">
                  {faqs.map((f, i) => (
                    <motion.div
                      key={f.q}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      whileHover={{ x: 4 }}
                      className="rounded-lg border border-transparent p-2 transition-colors hover:border-[rgba(252,224,139,0.2)]"
                    >
                      <dt className="font-semibold text-foreground">{f.q}</dt>
                      <dd className="mt-1 text-foreground/80">{f.a}</dd>
                    </motion.div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs font-dm text-muted-foreground" style={{ background: "var(--maroon-deep)" }}>
        © {new Date().getFullYear()} Afsaneh Jalandoni — Admin & Operations Support
      </footer>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import s1 from "@/assets/S1.png.asset.json";
import s2 from "@/assets/S2.png.asset.json";
import s3 from "@/assets/S3.png.asset.json";
import crm from "@/assets/CRM_Management.png.asset.json";
import board from "@/assets/Client_Dasboard.png.asset.json";
import kpi from "@/assets/KPI_Tracker_Construction_Operations.png.asset.json";

export const Route = createFileRoute("/")({ component: Index });

const GOLD = "#fce08b";
const MAROON_RED = "#af2c35";
const ABOUT_BODY = "#401804";
const SUB_GREY = "#DCDBDC";

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
    ["google", "Google Workspace"], ["microsoftoffice", "Microsoft Office"],
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
    period: "December 2025 – July 2026",
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
    role: "Tier 3 Technical Support Representative",
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

function SectionTitle({ children, size, color = GOLD, className = "" }: { children: React.ReactNode; size: number; color?: string; className?: string }) {
  return (
    <Reveal>
      <h2
        className={`font-gotham ${className}`}
        style={{ color, fontSize: `clamp(36px, 8vw, ${size}px)`, lineHeight: 1.05 }}
      >
        {children}
      </h2>
    </Reveal>
  );
}

function ToolIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group flex flex-col items-center gap-1.5"
    >
      <div
        className="flex h-12 w-12 items-center justify-center rounded-lg shadow-sm"
        style={{ background: "#ffffff" }}
      >
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt={name}
          loading="lazy"
          className="h-7 w-7"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.opacity = "0.3"; }}
        />
      </div>
      <span className="text-[10px] font-dm text-foreground/70 text-center leading-tight max-w-[80px]">{name}</span>
    </motion.div>
  );
}

function FlipCard({ e }: { e: typeof experiences[number] }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`flip-card h-[440px] cursor-pointer ${flipped ? "is-flipped" : ""}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-inner">
        {/* Front */}
        <div
          className="flip-face rounded-[28px_8px_28px_8px] border p-6 overflow-y-auto"
          style={{ borderColor: "rgba(252,224,139,0.3)", background: "var(--maroon-deep)" }}
        >
          <div className="font-gotham text-[11px] tracking-[0.25em]" style={{ color: GOLD }}>{e.company}</div>
          <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
          <div className="mt-1 text-xs text-muted-foreground">{e.period}</div>
          <div className="mt-4 mb-2 font-gotham text-[10px] tracking-widest text-foreground/70">Responsibilities</div>
          <ul className="space-y-1.5 text-[12px] text-foreground/85">
            {e.responsibilities.slice(0, 6).map((r) => (
              <li key={r} className="flex gap-2"><span style={{ color: GOLD }}>▸</span><span>{r}</span></li>
            ))}
          </ul>
          <div className="mt-4 text-[10px] font-dm uppercase tracking-widest opacity-60">Click to flip →</div>
        </div>
        {/* Back */}
        <div
          className="flip-face flip-back rounded-[8px_28px_8px_28px] border p-6 overflow-y-auto"
          style={{ borderColor: "rgba(252,224,139,0.45)", background: "linear-gradient(135deg, var(--maroon), var(--maroon-deep))" }}
        >
          <div className="font-gotham text-[11px] tracking-[0.25em]" style={{ color: GOLD }}>Key Achievements</div>
          <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
          <ul className="mt-4 space-y-2 text-[12px] text-foreground/90">
            {e.achievements.map((a) => (
              <li key={a} className="flex gap-2"><span style={{ color: GOLD }}>★</span><span>{a}</span></li>
            ))}
          </ul>
          <div className="mt-4 text-[10px] font-dm uppercase tracking-widest opacity-60">← Click to flip back</div>
        </div>
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
        <a href="#top" className="font-gotham text-sm tracking-[0.2em]" style={{ color: GOLD }}>AJ</a>
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
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      <TopNav />

      {/* HERO */}
      <section className="relative grid min-h-[90vh] grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{ background: "var(--maroon)" }}>
        <div className="flex flex-col justify-center px-8 py-16 md:px-20">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-gotham leading-[0.9]"
            style={{ color: GOLD, fontSize: "clamp(56px, 12vw, 118px)", fontWeight: 700 }}
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
      <section id="about" className="px-6 py-24 md:px-20" style={{ background: "#fdefe0" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <Reveal>
              <h2 className="font-gotham" style={{ color: MAROON_RED, fontSize: "clamp(48px, 9vw, 70px)", fontWeight: 700, lineHeight: 1 }}>
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
            <div className="space-y-5 font-dm leading-relaxed" style={{ color: ABOUT_BODY, fontSize: "18px" }}>
              <p>Hi, I'm <strong>Afsaneh</strong>! For the past 8+ years, I've helped businesses stay organized behind the scenes — from managing inboxes and calendars to keeping CRMs tidy and building simple systems that just work.</p>
              <p>I know what it's like to watch a business owner drowning in admin work they didn't sign up for. That's where I come in. I take the repetitive, time-consuming tasks off your hands so you can get back to doing what you actually love — growing your business.</p>
              <p>Think of me as the calm, organized presence working quietly in the background, so you don't have to be.</p>
              <p className="font-semibold">Let's lighten your load, one task at a time.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROOF OF DELIVERABLES */}
      <section id="deliverables" className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle size={70}>Proof of Deliverables</SectionTitle>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-2xl font-dm text-muted-foreground">A glimpse into the systems, boards, and reports I keep humming for clients.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { src: crm.url, title: "CRM & Pipeline Management", desc: "Harbor Home Services — daily pipeline, tasks, and follow-ups." },
              { src: board.url, title: "Client Ops Board", desc: "Coastal Realty Group — Kanban board for listings, leads, and vendors." },
              { src: kpi.url, title: "KPI Tracker & Reporting", desc: "Construction operations — monthly rollups with trend charts." },
            ].map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
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
                      className="h-64 w-full object-cover object-top"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  <figcaption className="p-5" style={{ background: "var(--card)" }}>
                    <div className="font-gotham text-sm" style={{ color: GOLD }}>{p.title}</div>
                    <div className="mt-1 text-sm font-dm text-muted-foreground">{p.desc}</div>
                  </figcaption>
                </motion.figure>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <div className="flex h-full items-center justify-center rounded-xl border p-8 text-center" style={{ borderColor: "rgba(252,224,139,0.15)", background: "var(--card)" }}>
                <p className="font-portland text-xl leading-relaxed" style={{ color: GOLD }}>
                  "Behind every organized business is someone who keeps the wheels turning quietly."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW I CAN HELP */}
      <section id="help" className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle size={64}>How I Can Help Your Business</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {helpGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  className="blob-frame border p-6 h-full"
                  style={{ borderColor: "rgba(252,224,139,0.3)", background: "var(--maroon-deep)" }}
                >
                  <h3 className="font-gotham text-lg" style={{ color: GOLD }}>{g.title}</h3>
                  <ul className="mt-4 space-y-2 font-dm text-sm text-foreground/85">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span style={{ color: GOLD }}>●</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-12 rounded-xl px-8 py-10 text-center animate-floaty"
              style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)" }}
            >
              <p className="font-portland mx-auto max-w-3xl leading-relaxed" style={{ fontSize: "23px", color: GOLD, fontWeight: 700 }}>
                My goal is simple: take the operational load off your shoulders so you can spend your time on strategy, clients, and growth.
              </p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TOOLS */}
      <section id="tools" className="px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle size={63}>Tools I'm Skilled At</SectionTitle>
          <div className="mt-10 space-y-8">
            {Object.entries(tools).map(([category, items], ci) => (
              <Reveal key={category} delay={ci * 0.05}>
                <div>
                  <h3 className="font-gotham text-xs tracking-[0.25em] text-foreground/70">{category}</h3>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-5">
                    {items.map(([slug, name]) => (
                      <ToolIcon key={`${category}-${name}`} slug={slug} name={name} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section id="experience" className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-6xl">
          <SectionTitle size={70}>Work Experience</SectionTitle>
          <Reveal delay={0.1}>
            <p className="mt-3 font-dm text-sm text-foreground/70">Hover or tap a card to flip and reveal key achievements.</p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionTitle size={70}>Testimonials</SectionTitle>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MY MISSION */}
      <section id="mission" className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
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
            <SectionTitle size={60}>My Mission</SectionTitle>
            <Reveal delay={0.15}>
              <p className="mt-8 font-dm text-lg leading-relaxed text-foreground/90">
                My mission is to become a dependable administrative partner who keeps your business organized, your operations running efficiently, and your daily workload manageable. By taking ownership of administrative tasks, documentation, coordination, and operational support, I help create more time for you to focus on growing your business with confidence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="rounded-xl px-8 py-10" style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)" }}>
              <h2 className="font-gotham" style={{ color: GOLD, fontSize: "clamp(36px, 7vw, 55px)", fontWeight: 700, lineHeight: 1.05 }}>
                Ready to get your time back?
              </h2>
              <p className="mt-4 font-dm text-foreground/90">
                Whether you need a few hours a week of admin support or a dedicated partner to manage your day-to-day operations, I'd love to hear about your business and how I can help.
              </p>
              <p className="mt-4 font-portland text-foreground/80">
                Flexible engagement options — hourly, part-time retainer, or dedicated full-time support. Let's find what fits your budget and workload.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Get in touch</h3>
                <ul className="mt-4 space-y-3 font-dm text-sm text-foreground/90">
                  <li><span className="text-muted-foreground">Email:</span> <a className="underline" style={{ color: GOLD }} href="mailto:workwithAfsaneh@gmail.com">workwithAfsaneh@gmail.com</a></li>
                  <li><span className="text-muted-foreground">WhatsApp:</span> +63 945 325 8870</li>
                  <li><span className="text-muted-foreground">Booking:</span> <a className="underline" style={{ color: GOLD }} href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh" target="_blank" rel="noreferrer">calendly.com/workwithafsaneh</a></li>
                  <li><span className="text-muted-foreground">Response time:</span> Within a few hours during business hours</li>
                  <li><span className="text-muted-foreground">Availability:</span> Currently accepting new clients</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Frequently asked questions</h3>
                <dl className="mt-4 space-y-4 font-dm text-sm">
                  {faqs.map((f) => (
                    <div key={f.q}>
                      <dt className="font-semibold text-foreground">{f.q}</dt>
                      <dd className="mt-1 text-foreground/80">{f.a}</dd>
                    </div>
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

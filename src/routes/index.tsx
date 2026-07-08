import { createFileRoute } from "@tanstack/react-router";
import s1 from "@/assets/S1.png.asset.json";
import s2 from "@/assets/S2.png.asset.json";
import s3 from "@/assets/S3.png.asset.json";
import crm from "@/assets/CRM_Management.png.asset.json";
import board from "@/assets/Client_Dasboard.png.asset.json";
import kpi from "@/assets/KPI_Tracker_Construction_Operations.png.asset.json";

export const Route = createFileRoute("/")({ component: Index });

const GOLD = "#fce08b";

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
    role: "Third Party Collections Representative & Subject Matter Expert",
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

function GoldHeading({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`font-gotham text-3xl md:text-5xl ${className}`}
      style={{ color: GOLD }}
    >
      {children}
    </h2>
  );
}

function ToolIcon({ slug, name }: { slug: string; name: string }) {
  return (
    <div className="group flex flex-col items-center gap-2">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-xl border transition-all group-hover:scale-105"
        style={{ borderColor: "rgba(252,224,139,0.2)", background: "rgba(252,224,139,0.04)" }}
      >
        <img
          src={`https://cdn.simpleicons.org/${slug}/fce08b`}
          alt={name}
          loading="lazy"
          className="h-8 w-8"
        />
      </div>
      <span className="text-xs text-muted-foreground text-center leading-tight">{name}</span>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative grid min-h-[90vh] grid-cols-1 md:grid-cols-[1.1fr_1fr]" style={{ background: "var(--maroon)" }}>
        <div className="flex flex-col justify-center px-8 py-16 md:px-20">
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.95]" style={{ color: GOLD, fontFamily: "var(--font-display)" }}>
            Afsaneh<br />Jalandoni
          </h1>
          <p className="mt-6 font-gotham text-sm md:text-base tracking-[0.2em] text-foreground/80">
            Admin &amp; Operations Support | VA
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full px-8 py-4 font-gotham text-sm tracking-widest text-foreground transition-all hover:scale-105"
              style={{ background: "var(--maroon-deep)" }}
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative min-h-[400px] md:min-h-full overflow-hidden">
          <img src={s1.url} alt="Afsaneh at her desk" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 md:px-20" style={{ background: "#fdefe0" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
          <div>
            <h2 className="font-serif text-6xl md:text-7xl font-bold italic" style={{ color: "#8b1e1e", fontFamily: "var(--font-serif)" }}>About</h2>
            <div className="mt-8 overflow-hidden rounded-md">
              <img src={s2.url} alt="Afsaneh working" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: "#2a1a14" }}>
            <p>Hi, I'm <strong>Afsaneh</strong>! For the past 8+ years, I've helped businesses stay organized behind the scenes — from managing inboxes and calendars to keeping CRMs tidy and building simple systems that just work.</p>
            <p>I know what it's like to watch a business owner drowning in admin work they didn't sign up for. That's where I come in. I take the repetitive, time-consuming tasks off your hands so you can get back to doing what you actually love — growing your business.</p>
            <p>Think of me as the calm, organized presence working quietly in the background, so you don't have to be.</p>
            <p className="font-semibold">Let's lighten your load, one task at a time.</p>
          </div>
        </div>
      </section>

      {/* PROOF OF DELIVERABLES */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <GoldHeading>Proof of Deliverables</GoldHeading>
          <p className="mt-4 max-w-2xl text-muted-foreground">A glimpse into the systems, boards, and reports I keep humming for clients.</p>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              { src: crm.url, title: "CRM & Pipeline Management", desc: "Harbor Home Services — daily pipeline, tasks, and follow-ups." },
              { src: board.url, title: "Client Ops Board", desc: "Coastal Realty Group — Kanban board for listings, leads, and vendors." },
              { src: kpi.url, title: "KPI Tracker & Reporting", desc: "Construction operations — monthly rollups with trend charts." },
            ].map((p) => (
              <figure key={p.title} className="overflow-hidden rounded-xl border" style={{ borderColor: "rgba(252,224,139,0.15)" }}>
                <div className="bg-white">
                  <img src={p.src} alt={p.title} className="h-64 w-full object-cover object-top" />
                </div>
                <figcaption className="p-5" style={{ background: "var(--card)" }}>
                  <div className="font-gotham text-sm" style={{ color: GOLD }}>{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </figcaption>
              </figure>
            ))}
            <div className="flex items-center justify-center rounded-xl border p-8 text-center" style={{ borderColor: "rgba(252,224,139,0.15)", background: "var(--card)" }}>
              <p className="font-portland text-xl leading-relaxed" style={{ color: GOLD }}>
                "Behind every organized business is someone who keeps the wheels turning quietly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW I CAN HELP */}
      <section className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-6xl">
          <GoldHeading>How I Can Help Your Business</GoldHeading>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {helpGroups.map((g) => (
              <div key={g.title} className="rounded-xl border p-6" style={{ borderColor: "rgba(252,224,139,0.2)", background: "var(--maroon-deep)" }}>
                <h3 className="font-gotham text-lg" style={{ color: GOLD }}>{g.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {g.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span style={{ color: GOLD }}>●</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl px-8 py-10 text-center" style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)" }}>
            <p className="font-portland mx-auto max-w-3xl leading-relaxed" style={{ fontSize: "23px", color: GOLD }}>
              My goal is simple: take the operational load off your shoulders so you can spend your time on strategy, clients, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* TOOLS */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <GoldHeading>Tools I'm Skilled At</GoldHeading>
          <div className="mt-12 space-y-10">
            {Object.entries(tools).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-gotham text-sm tracking-[0.25em] text-foreground/70">{category}</h3>
                <div className="mt-6 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                  {items.map(([slug, name]) => (
                    <ToolIcon key={`${category}-${name}`} slug={slug} name={name} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto max-w-5xl">
          <GoldHeading>Work Experience</GoldHeading>
          <div className="mt-12 space-y-8">
            {experiences.map((e, i) => (
              <article key={i} className="rounded-xl border p-8" style={{ borderColor: "rgba(252,224,139,0.2)", background: "var(--maroon-deep)" }}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="font-gotham text-xs tracking-[0.25em]" style={{ color: GOLD }}>{e.company}</div>
                    <h3 className="mt-1 text-xl md:text-2xl font-semibold">{e.role}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.period}</div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="mb-3 font-gotham text-xs tracking-widest text-foreground/70">Responsibilities</div>
                    <ul className="space-y-2 text-sm text-foreground/85">
                      {e.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2"><span style={{ color: GOLD }}>▸</span><span>{r}</span></li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="mb-3 font-gotham text-xs tracking-widest text-foreground/70">Key Achievements</div>
                    <ul className="space-y-2 text-sm text-foreground/85">
                      {e.achievements.map((a) => (
                        <li key={a} className="flex gap-2"><span style={{ color: GOLD }}>★</span><span>{a}</span></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <GoldHeading>Testimonials</GoldHeading>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="rounded-xl border p-8" style={{ borderColor: "rgba(252,224,139,0.2)", background: "var(--card)" }}>
                <div className="text-4xl leading-none" style={{ color: GOLD }}>"</div>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">{t.quote}</p>
                <footer className="mt-6 border-t pt-4" style={{ borderColor: "rgba(252,224,139,0.15)" }}>
                  <div className="font-semibold">— {t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* MY MISSION */}
      <section className="px-6 py-24 md:px-20" style={{ background: "var(--maroon)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img src={s3.url} alt="Afsaneh at work" className="h-full w-full object-cover" />
          </div>
          <div>
            <GoldHeading>My Mission</GoldHeading>
            <p className="mt-8 text-lg leading-relaxed text-foreground/90">
              My mission is to become a dependable administrative partner who keeps your business organized, your operations running efficiently, and your daily workload manageable. By taking ownership of administrative tasks, documentation, coordination, and operational support, I help create more time for you to focus on growing your business with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-xl px-8 py-10" style={{ background: "rgba(252,224,139,0.08)", border: "1px solid rgba(252,224,139,0.25)" }}>
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: GOLD, fontFamily: "var(--font-serif)" }}>
              Ready to get your time back?
            </h2>
            <p className="mt-4 text-foreground/90">
              Whether you need a few hours a week of admin support or a dedicated partner to manage your day-to-day operations, I'd love to hear about your business and how I can help.
            </p>
            <p className="mt-4 font-portland text-foreground/80">
              Flexible engagement options — hourly, part-time retainer, or dedicated full-time support. Let's find what fits your budget and workload.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Get in touch</h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                <li><span className="text-muted-foreground">Email:</span> <a className="underline" style={{ color: GOLD }} href="mailto:workwithAfsaneh@gmail.com">workwithAfsaneh@gmail.com</a></li>
                <li><span className="text-muted-foreground">WhatsApp:</span> +63 945 325 8870</li>
                <li><span className="text-muted-foreground">Booking:</span> <a className="underline" style={{ color: GOLD }} href="https://calendly.com/workwithafsaneh/discovery-call-with-afsaneh" target="_blank" rel="noreferrer">calendly.com/workwithafsaneh</a></li>
                <li><span className="text-muted-foreground">Response time:</span> Within a few hours during business hours</li>
                <li><span className="text-muted-foreground">Availability:</span> Currently accepting new clients</li>
              </ul>
            </div>
            <div>
              <h3 className="font-gotham text-lg" style={{ color: GOLD }}>Frequently asked questions</h3>
              <dl className="mt-4 space-y-4 text-sm">
                {faqs.map((f) => (
                  <div key={f.q}>
                    <dt className="font-semibold text-foreground">{f.q}</dt>
                    <dd className="mt-1 text-foreground/80">{f.a}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-xs text-muted-foreground" style={{ background: "var(--maroon-deep)" }}>
        © {new Date().getFullYear()} Afsaneh Jalandoni — Admin & Operations Support
      </footer>
    </main>
  );
}

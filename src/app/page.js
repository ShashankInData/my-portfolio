"use client";

import {
  Github, Linkedin, Mail, Phone,
  Briefcase, FolderGit2, BarChart3, GraduationCap, Award, Sparkles
} from "lucide-react";

/* ========= CONTENT (edit me) ========= */
const INFO = {
  name: "Poorna Shashank Bodapati",
  title: "Data / AI • Python • SQL • Power BI",
  about:
    "Graduate Data & AI professional (MSc). I build clean data pipelines, self-service dashboards, and ML/GenAI prototypes that improve decisions. Strong with data quality, documentation, and explaining insights to non-technical stakeholders.",
  location: "UK • Open to relocate • Hybrid/Remote",
  email: "bodapatishashank@gmail.com",
  phone: "+44 7767970447",
  github: "https://github.com/ShashankInData",
  linkedin: "https://www.linkedin.com/in/shashankbodapati/",
};

const HIGHLIGHTS = [
  "Data cleaning, validation & repeatable QA",
  "Python & SQL automation for analysis",
  "Power BI / Looker Studio dashboards",
  "Hands-on ML/GenAI (RAG, WhisperX, agents)",
];

const PROJECTS = [
  {
    title: "RBAC + RAG Chatbot",
    summary:
      "FastAPI + LangChain + ChromaDB with JWT role-based access; secure Q&A over internal docs with citations.",
    stack: ["FastAPI", "LangChain", "ChromaDB", "JWT"],
    link: "https://github.com/ShashankInData", // replace with repo/demo
  },
  {
    title: "AI Financial Analyst Agents",
    summary:
      "Multi-agent equity analysis (CrewAI/LLMs) + yfinance; auto briefs with quick, source-linked insights.",
    stack: ["Python", "LLMs", "yfinance", "CrewAI"],
    link: "https://github.com/ShashankInData",
  },
  {
    title: "ASR + Diarization App",
    summary:
      "WhisperX + diarization with a Streamlit UI; exports timestamped, speaker-labelled transcripts to TXT/JSON.",
    stack: ["WhisperX", "PyAnnote", "Streamlit"],
    link: "https://github.com/ShashankInData",
  },
  {
    title: "AI Web Scraper & Formatter",
    summary:
      "Selenium + Streamlit; scrapes and exports clean JSON/Markdown with AI summaries and schema validation.",
    stack: ["Python", "Selenium", "Streamlit", "LangChain"],
    link: "https://github.com/ShashankInData",
  },
  {
    title: "AgriTech – Potato Blight",
    summary:
      "VGG19 CNN (~95% acc.) to detect leaf disease; deployed on Gradio to support early interventions.",
    stack: ["TensorFlow", "Python", "Gradio"],
    link: "https://github.com/ShashankInData",
  },
  {
    title: "Grocery Price Spike Early-Warning (Concept)",
    summary:
      "ONS data + time-series (Prophet/TFT) + alerts to flag UK grocery price anomalies early.",
    stack: ["Python", "Pandas", "Prophet/TFT"],
    link: "https://github.com/ShashankInData",
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst Intern",
    org: "AlphaAnalytics Ltd, Chelmsford, UK",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Built Python/SQL pipelines to ingest/transform multi-source travel data; cut manual prep ~60%.",
      "Rolled out self-service KPI dashboards (Power BI/Looker Studio) used by marketing for uplift.",
      "Implemented GDPR-aware validation & documentation; improved downstream engagement & trust.",
    ],
  },
];

const SKILLS = {
  "Data & Analytics": ["Python", "Pandas", "NumPy", "SQL", "Statistics", "EDA"],
  "BI & Viz": ["Power BI", "Looker Studio", "KPI Design"],
  "ML & GenAI": ["Classification/Regression", "RAG", "ChromaDB", "LangChain"],
  "Platforms/Tools": ["Git/GitHub", "Hugging Face", "JWT Auth"],
  "Learning": ["Azure Synapse", "ADF", "Cognitive Services", "Power Automate", "MLOps concepts"],
};

const EDUCATION = [
  { qual: "MSc Applied AI & Data Science", inst: "Solent University (UK)", when: "2023 – 2024" },
  { qual: "BTech Mechanical Engineering", inst: "CMR Engineering College (IN)", when: "2017 – 2021" },
];

const CERTS = [
  "AWS Cloud Practitioner Essentials",
  "Prompt Engineering for AI/NLP Apps",
  "Advanced Excel for Data Analysis",
];

/* ========= HELPERS ========= */
const SocialIcon = ({ href, children, label }) => (
  <a
    aria-label={label}
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className="group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 bg-neutral-950/60 backdrop-blur
               transition hover:border-red-500 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]"
  >
    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/15 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    {children}
  </a>
);

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
          {icon}
        </span>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const Dot = () => <span className="mt-1 inline-block h-2 w-2 rounded-full bg-red-500" />;

/* ========= PAGE ========= */
export default function Page() {
  return (
    <main className="bg-neutral-950 text-neutral-100">
      <Header />
      <Hero />
      <Highlights />

      <Section id="projects" title="Projects" icon={<FolderGit2 className="h-4 w-4 text-red-400" />}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" icon={<Briefcase className="h-4 w-4 text-red-400" />}>
        <ExpTimeline items={EXPERIENCE} />
      </Section>

      <Section id="skills" title="Skills" icon={<BarChart3 className="h-4 w-4 text-red-400" />}>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS).map(([group, items]) => (
            <SkillGroup key={group} group={group} items={items} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education & Certifications" icon={<GraduationCap className="h-4 w-4 text-red-400" />}>
        <ul className="space-y-3">
          {EDUCATION.map((ed) => (
            <li key={ed.qual} className="flex items-start gap-3">
              <Dot />
              <div>
                <p className="font-medium">{ed.qual}</p>
                <p className="text-sm text-neutral-400">{ed.inst} · {ed.when}</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <p className="text-sm font-medium text-red-400 flex items-center gap-2"><Award className="h-4 w-4" /> Certifications</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {CERTS.map((c) => (
              <li key={c} className="rounded-full border border-neutral-800 bg-neutral-900 px-3 py-1 text-xs">{c}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Contact />
      <Footer />
    </main>
  );
}

/* ========= SECTIONS ========= */
function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">{INFO.name}</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-red-400">Projects</a>
          <a href="#experience" className="hover:text-red-400">Experience</a>
          <a href="#skills" className="hover:text-red-400">Skills</a>
          <a href="#education" className="hover:text-red-400">Education</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <SocialIcon href={INFO.github} label="GitHub"><Github className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={INFO.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={`mailto:${INFO.email}`} label="Email"><Mail className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone"><Phone className="h-5 w-5" /></SocialIcon>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-900">
      {/* Red glow background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-250px,rgba(239,68,68,0.22),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/10 px-3 py-1 text-xs tracking-wide text-red-400">
          <Sparkles className="h-3.5 w-3.5" /> Available for Data/AI roles
        </span>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight">
          {INFO.title}
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-300">{INFO.about}</p>
        <div className="mt-3 text-sm text-neutral-400">{INFO.location}</div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white hover:bg-red-500"
          >
            See Projects
          </a>
          <a
            href="#experience"
            className="rounded-xl border border-neutral-700 px-5 py-2.5 font-medium hover:border-neutral-500"
          >
            Experience
          </a>
          <a
            href="#skills"
            className="rounded-xl border border-neutral-700 px-5 py-2.5 font-medium hover:border-neutral-500"
          >
            Skills
          </a>

          {/* Inline social row for quick access */}
          <div className="ml-2 flex items-center gap-2">
            <SocialIcon href={INFO.github} label="GitHub"><Github className="h-5 w-5" /></SocialIcon>
            <SocialIcon href={INFO.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
            <SocialIcon href={`mailto:${INFO.email}`} label="Email"><Mail className="h-5 w-5" /></SocialIcon>
            <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone"><Phone className="h-5 w-5" /></SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <Section title="What I Bring" icon={<BarChart3 className="h-4 w-4 text-red-400" />}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {HIGHLIGHTS.map((h) => (
          <li key={h} className="flex items-start gap-3">
            <Dot />
            <span className="text-neutral-300">{h}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProjectCard({ title, summary, stack, link }) {
  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-sm transition
                        hover:border-red-500/60 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-300">{summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {stack.map((t) => (
          <span key={t} className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-red-400 hover:text-red-300"
        >
          View repo/demo →
        </a>
      </div>
    </article>
  );
}

function ExpTimeline({ items }) {
  return (
    <ol className="relative border-l border-neutral-800 pl-6">
      {items.map((e, idx) => (
        <li key={idx} className="mb-8 ml-2">
          <span className="absolute -left-2 mt-1 inline-block h-3 w-3 rounded-full bg-red-500" />
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-semibold">{e.role}</h3>
              <span className="text-xs text-neutral-400">{e.period}</span>
            </div>
            <p className="mt-1 text-sm text-neutral-300">{e.org}</p>
            <ul className="mt-3 space-y-2">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-300">
                  <Dot />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}

function SkillGroup({ group, items }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
      <p className="font-medium text-red-400">{group}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span key={s} className="rounded-full bg-neutral-800 px-3 py-1 text-xs">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
            <Mail className="h-4 w-4 text-red-400" />
          </span>
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        </div>

        <p className="mt-3 text-neutral-300">
          The fastest way to reach me is email. I’m happy to discuss roles, projects, or collaborations.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard label="Email" value={INFO.email} href={`mailto:${INFO.email}`} icon={<Mail className="h-4 w-4" />} />
          <ContactCard label="Phone" value={INFO.phone} href={`tel:${INFO.phone.replace(/\s/g, "")}`} icon={<Phone className="h-4 w-4" />} />
          <ContactCard label="LinkedIn" value="linkedin.com/in/shashankbodapati" href={INFO.linkedin} icon={<Linkedin className="h-4 w-4" />} />
          <ContactCard label="GitHub" value="github.com/ShashankInData" href={INFO.github} icon={<Github className="h-4 w-4" />} />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href, icon }) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition hover:border-red-500/60 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]"
    >
      <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-neutral-400">
        {icon}
        {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neutral-900">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
        <span>© {new Date().getFullYear()} {INFO.name}. Built with Next.js & Tailwind.</span>
        <div className="flex items-center gap-3">
          <SocialIcon href={INFO.github} label="GitHub"><Github className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={INFO.linkedin} label="LinkedIn"><Linkedin className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={`mailto:${INFO.email}`} label="Email"><Mail className="h-5 w-5" /></SocialIcon>
          <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone"><Phone className="h-5 w-5" /></SocialIcon>
        </div>
      </div>
    </footer>
  );
}

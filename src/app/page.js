"use client";

import { useEffect, useState } from "react";
import {
  Github, Linkedin, Mail, Phone,
  Briefcase, FolderGit2, BarChart3, GraduationCap, Award, Sparkles
} from "lucide-react";

/* ========= CONTENT (edit me) ========= */
const INFO = {
  name: "Shashank Bodapati",
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
  // --- pick any/all of the new ones below ---
  "Time-series & anomaly detection for KPIs (Prophet/TFT)",
  "Experimentation & uplift: A/B tests, cohort analysis",
  "RAG/LLM pipelines with grounding, eval & guardrails",
  "Data quality at scale: validation, reproducible notebooks, lineage",
];

const PROJECTS = [
  {
    title: "ScribeFlow - Audio/Video Transcription",
    summary:
      "Comprehensive transcription app with OpenAI Whisper, speaker diarization, and AI-powered analysis. Supports multiple formats, YouTube URLs, and exports to SRT/VTT/DOCX/PDF.",
    stack: ["Streamlit", "OpenAI Whisper", "PyAnnote", "FFmpeg"],
    link: "https://github.com/ShashankInData/-Scribe_Flow",
  },
  {
    title: "RBAC Internal Chatbot",
    summary:
      "Role-based access control chatbot for internal company queries. Secure Q&A system with JWT authentication and role-specific data access for engineering, finance, HR, and marketing teams.",
    stack: ["FastAPI", "LangChain", "ChromaDB", "JWT"],
    link: "https://github.com/ShashankInData/rbac",
  },
  {
    title: "Intelligent Document Summarizer",
    summary:
      "AI-powered document analysis and summarization tool that processes various document formats and generates intelligent summaries with key insights and action items.",
    stack: ["Python", "LangChain", "Document Processing", "AI"],
    link: "https://github.com/ShashankInData/Intelligent-Document-Summarizer",
  },
  {
    title: "AI Web Scraper & Formatter",
    summary:
      "Intelligent web scraping tool with Selenium and Streamlit UI. Extracts data, applies AI-powered formatting, and exports clean JSON/Markdown with schema validation.",
    stack: ["Python", "Selenium", "Streamlit", "LangChain"],
    link: "https://github.com/ShashankInData/ai_web-scrapper",
  },
  {
    title: "Crypto Price Forecasting with LSTM",
    summary:
      "Deep learning model using LSTM neural networks to predict cryptocurrency price movements. Features time-series analysis and real-time prediction capabilities.",
    stack: ["Python", "LSTM", "TensorFlow", "Time Series"],
    link: "https://github.com/ShashankInData/Crypto-Price-Forecasting-using-LSTM",
  },
  {
    title: "Finance Agent - Multi-Agent Analysis",
    summary:
      "Multi-agent financial analysis system using CrewAI and LLMs. Automates equity research, generates investment briefs, and provides source-linked financial insights.",
    stack: ["Python", "CrewAI", "LLMs", "yfinance"],
    link: "https://github.com/ShashankInData/finance_agent",
  },
];

const EXPERIENCE = [
  {
    role: "Data with AI – Research (Freelance)",
    org: "Independent",
    period: "Dec 2024 – Present",
    bullets: [
      "Prototype LLM/RAG evaluators and guardrails for safer answers; compare embedding models and retrieval strategies.",
      "Design small ETL jobs to prep text/metrics for downstream analysis; build quick dashboards to monitor model drift.",
      "Advise on data quality and documentation for reproducible experiments.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "AlphaAnalytics Ltd, Chelmsford, UK",
    period: "Mar 2024 – Jun 2024",
    bullets: [
      "Built Python/SQL pipelines to ingest/transform multi-source travel data; cut manual prep ~60%.",
      "Rolled out self-service KPI dashboards (Power BI/Looker Studio) used by marketing for uplift.",
      "Implemented GDPR-aware validation & documentation; improved downstream engagement & trust.",
      // travel-focused additions:
      "Developed a travel **recommendation prototype** combining weather, seasonal holidays, flight prices, and macro indicators to prioritize destinations.",
      "Created a **competitive pricing view** comparing UK holiday packages vs leading sites; surfaced anomalies and promos for weekly action.",
      "Published a **comprehensive travel insights dashboard** (geo trends, seasonality, conversion funnels) to align product & marketing.",
    ],
  },
];

const SKILLS = {
  "Data & Analytics": [
    "Python (pandas, NumPy)", "SQL (CTEs, window fns)", "Statistics", "EDA",
    "Time-series (Prophet/TFT)", "Anomaly detection"
  ],
  "BI & Viz": ["Power BI (measures, basics of DAX)", "Looker Studio", "KPI design", "Excel (advanced)"],
  "ML & GenAI": [
    "LLMs (prompting & eval)", "RAG", "Embeddings", "Vector DBs (ChromaDB/FAISS)",
    "LangChain", "CrewAI / LangGraph (basics)"
  ],
  "Platforms/Tools": [
    "FastAPI", "Streamlit", "Git/GitHub", "Docker", "Vercel/Railway",
    "Great Expectations (data validation)"
  ],
  "Cloud (learning)": ["AWS (S3, Lambda basics)", "GCP BigQuery basics"],
};

const EDUCATION = [
  { qual: "MSc Applied AI & Data Science", inst: "Solent University (UK)", when: "2023 – 2024" },
  { qual: "BTech Mechanical Engineering", inst: "CMR Engineering College (IN)", when: "2017 – 2021" },
];

const CERTS = [
  "AWS Cloud Practitioner Essentials",
  "Prompt Engineering for AI/NLP Apps",
  "Advanced Excel for Data Analysis",
  "Complete Data Analyst Bootcamp – From Basics to Advanced",
];

/* ========= HOOKS ========= */
function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? null);
  useEffect(() => {
    const observers = [];
    const options = { rootMargin: "-45% 0% -50% 0%", threshold: 0.01 };
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActiveId(id);
      }, options);
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds.join(",")]);
  return activeId;
}

/* ========= UI HELPERS ========= */
const SocialIcon = ({ href, children, label, className = "" }) => (
  <a
    aria-label={label}
    href={href}
    target={href?.startsWith("http") ? "_blank" : undefined}
    rel="noopener noreferrer"
    className={`group relative inline-flex h-11 w-11 items-center justify-center rounded-full border
               border-neutral-800 bg-neutral-950/60 backdrop-blur transition-all duration-300
               hover:border-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] focus:outline-none
               focus:ring-2 focus:ring-red-500/50 hover:scale-110 ${className}`}
  >
    <span className="absolute inset-0 rounded-full bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
    <span className="relative z-10 group-hover:text-red-400 transition-colors duration-200">
      {children}
    </span>
  </a>
);

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
    <article className="group relative rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 shadow-sm transition-all duration-300
                        hover:border-neutral-600 hover:shadow-lg hover:shadow-red-500/10 hover:-translate-y-1 transform">
      {/* Subtle inner light effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <h3 className="font-semibold group-hover:text-red-400 transition-colors duration-200">{title}</h3>
        <p className="mt-2 text-sm text-neutral-300 group-hover:text-neutral-200 transition-colors duration-200">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((t) => (
            <span key={t} className="rounded-full bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300 group-hover:bg-neutral-700 transition-colors duration-200">
              {t}
            </span>
          ))}
        </div>
        {link && (
          <div className="mt-4">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-400 hover:text-red-400 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2"
            >
              View repo <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </div>
        )}
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
          The fastest way to reach me is email. I'm happy to discuss roles, projects, or collaborations.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ContactCard label="Email" value={INFO.email} href={`mailto:${INFO.email}`} icon={<Mail className="h-5 w-5" />} />
          <ContactCard label="Phone" value={INFO.phone} href={`tel:${INFO.phone.replace(/\s/g, "")}`} icon={<Phone className="h-5 w-5" />} />
          <ContactCard label="LinkedIn" value="linkedin.com/in/shashankbodapati" href={INFO.linkedin} icon={<Linkedin className="h-5 w-5" />} />
          <ContactCard label="GitHub" value="github.com/ShashankInData" href={INFO.github} icon={<Github className="h-5 w-5" />} />
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
      className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5 transition
                 hover:border-red-500/60 hover:shadow-[0_0_0_1px_rgba(239,68,68,0.35)]"
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
          <SocialIcon href={INFO.github} label="GitHub"><Github className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={INFO.linkedin} label="LinkedIn"><Linkedin className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={`mailto:${INFO.email}`} label="Email"><Mail className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone"><Phone className="h-6 w-6" /></SocialIcon>
        </div>
      </div>
    </footer>
  );
}

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

function Hero({ active, btnBase, btnActive, btnIdle }) {
  const [displayedName, setDisplayedName] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const name = INFO.name;
    let i = 0;
    const typeWriter = () => {
      if (i < name.length) {
        setDisplayedName(name.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      } else {
        setIsTyping(false);
      }
    };
    typeWriter();
  }, []);

  useEffect(() => {
    // Generate particles only on client side
    const generateParticles = () => {
      const newParticles = [...Array(15)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 2 + Math.random() * 3
      }));
      setParticles(newParticles);
    };
    
    generateParticles();
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-neutral-900">
      {/* Enhanced background effects */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-250px,rgba(239,68,68,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      {/* Floating particles - only render on client */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-red-400/30 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-red-600/50 bg-red-600/10 px-3 py-1 text-xs tracking-wide text-red-400 animate-pulse">
          <Sparkles className="h-3.5 w-3.5" /> Available for Data/AI roles
        </span>
        
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
            {displayedName}
            {isTyping && <span className="animate-pulse">|</span>}
          </span>
        </h1>
        
        <h2 className="mt-2 text-xl sm:text-2xl text-neutral-300 font-medium bg-gradient-to-r from-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          {INFO.title}
        </h2>
        
        <p className="mt-4 max-w-2xl text-neutral-300 leading-relaxed">{INFO.about}</p>
        <div className="mt-3 text-sm text-neutral-400 flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          {INFO.location}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className={`${btnBase} ${active === "projects" ? btnActive : btnIdle} transform hover:scale-105 transition-all duration-200`}
          >
            See Projects
          </a>
          <a
            href="#experience"
            className={`${btnBase} ${active === "experience" ? btnActive : btnIdle} transform hover:scale-105 transition-all duration-200`}
          >
            Experience
          </a>
          <a
            href="#skills"
            className={`${btnBase} ${active === "skills" ? btnActive : btnIdle} transform hover:scale-105 transition-all duration-200`}
          >
            Skills
          </a>

          {/* Enhanced social icons */}
          <div className="ml-2 flex items-center gap-2">
            <SocialIcon href={INFO.github} label="GitHub" className="transform hover:scale-110 transition-all duration-200">
              <Github className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href={INFO.linkedin} label="LinkedIn" className="transform hover:scale-110 transition-all duration-200">
              <Linkedin className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href={`mailto:${INFO.email}`} label="Email" className="transform hover:scale-110 transition-all duration-200">
              <Mail className="h-6 w-6" />
            </SocialIcon>
            <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone" className="transform hover:scale-110 transition-all duration-200">
              <Phone className="h-6 w-6" />
            </SocialIcon>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========= PAGE ========= */
export default function Page() {
  const sectionIds = ["projects", "experience", "skills", "education", "contact"];
  const active = useScrollSpy(sectionIds);

  const btnBase =
    "rounded-xl px-5 py-2.5 font-medium transition border";
  const btnActive =
    "bg-red-600/20 border-red-500/50 text-red-200";
  const btnIdle =
    "border-neutral-700 hover:border-neutral-500";

  const navLink = (id) =>
    `px-3 py-1 rounded-lg transition ${
      active === id ? "bg-red-600/15 text-red-300" : "hover:text-red-400"
    }`;

  return (
    <main className="relative bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Global scroll-based lighting effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_50%,rgba(239,68,68,0.15),transparent_70%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_30%_70%,rgba(239,68,68,0.1),transparent_60%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(500px_250px_at_70%_30%,rgba(239,68,68,0.08),transparent_50%)] opacity-30" />
      </div>
      
      <div className="relative z-10">
        <Header navLink={navLink} />
        <Hero
          active={active}
          btnBase={btnBase}
          btnActive={btnActive}
          btnIdle={btnIdle}
        />
        <Highlights />

        <section id="projects" className="relative overflow-hidden border-b border-neutral-900 scroll-mt-28">
          {/* Red glow background */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-250px,rgba(239,68,68,0.22),transparent_60%)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-12">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-800 bg-neutral-900">
                <FolderGit2 className="h-4 w-4 text-red-400" />
              </span>
              <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>

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
      </div>
    </main>
  );
}

/* ========= SECTIONS ========= */
function Header({ navLink }) {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-900 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-center">
        <nav className="flex items-center gap-2 text-sm">
          <a href="#projects" className={navLink("projects")}>Projects</a>
          <a href="#experience" className={navLink("experience")}>Experience</a>
          <a href="#skills" className={navLink("skills")}>Skills</a>
          <a href="#education" className={navLink("education")}>Education</a>
          <a href="#contact" className={navLink("contact")}>Contact</a>
        </nav>
        <div className="absolute right-4 flex items-center gap-3">
          <SocialIcon href={INFO.github} label="GitHub"><Github className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={INFO.linkedin} label="LinkedIn"><Linkedin className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={`mailto:${INFO.email}`} label="Email"><Mail className="h-6 w-6" /></SocialIcon>
          <SocialIcon href={`tel:${INFO.phone.replace(/\s/g, "")}`} label="Phone"><Phone className="h-6 w-6" /></SocialIcon>
        </div>
      </div>
    </header>
  );
}


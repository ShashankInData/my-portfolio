"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  CheckCircle,
  Database,
  BarChart3,
  Brain,
  TrendingUp,
  FlaskConical,
  Shield,
  ClipboardCheck,
  Menu,
  X,
  ArrowDown,
  ExternalLink,
  Download,
} from "lucide-react";

/* ========= DATA ========= */

const PROJECTS = [
  {
    slug: "obesity360",
    title: "AI-Powered Obesity Treatment Planner",
    description:
      "Multi-agent AI system with 5 specialized agents processing 9,730+ patient records for personalized treatment plans in the Indian healthcare context.",
    techStack: ["Python", "CrewAI", "LangChain", "ChromaDB", "Gradio", "GPT-4o"],
    github: "https://github.com/ShashankInData/AI-Powered_INDIAN_Obesity_Treatment_Planner",
    live: null,
  },
  {
    slug: "scribeflow",
    title: "ScribeFlow — Speech to Structured Text",
    description:
      "End-to-end audio/video transcription app with speaker diarization, AI summaries, and multi-format exports (SRT, VTT, DOCX, PDF).",
    techStack: ["Python", "Streamlit", "OpenAI Whisper", "PyAnnote", "FFmpeg"],
    github: "https://github.com/ShashankInData/-Scribe_Flow",
    live: "https://scribe-flow-ebon.vercel.app",
  },
  {
    slug: "rbac-chatbot",
    title: "RBAC Internal Chatbot",
    description:
      "Secure Q&A system with role-based access control, JWT authentication, and vector search over internal documents for department-specific queries.",
    techStack: ["FastAPI", "LangChain", "ChromaDB", "Groq", "JWT", "Streamlit"],
    github: "https://github.com/ShashankInData/rbac",
    live: null,
  },
  {
    slug: "ai-cctv",
    title: "AI CCTV Retail Security",
    description:
      "Computer vision system for small retailers — detects theft and incidents in real-time, retrainable on new data for custom use cases.",
    techStack: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    github: null,
    live: null,
    comingSoon: true,
  },
];

const HIGHLIGHTS = [
  { text: "Data cleaning, validation & repeatable QA", icon: ClipboardCheck },
  { text: "Python & SQL automation for analysis", icon: Database },
  { text: "Power BI / Looker Studio dashboards", icon: BarChart3 },
  { text: "Hands-on ML/GenAI (RAG, WhisperX, agents)", icon: Brain },
  { text: "Time-series & anomaly detection for KPIs (Prophet/TFT)", icon: TrendingUp },
  { text: "Experimentation & uplift: A/B tests, cohort analysis", icon: FlaskConical },
  { text: "RAG/LLM pipelines with grounding, eval & guardrails", icon: Shield },
  { text: "Data quality at scale: validation, reproducible notebooks, lineage", icon: CheckCircle },
];

const EXPERIENCE = [
  {
    role: "Freelance Data & AI Engineer",
    org: "ShashankInData (Self-employed)",
    period: "February 2025 – Present",
    location: "United Kingdom",
    bullets: [
      "Prototype LLM/RAG evaluators and guardrails for safer answers; compare embedding models and retrieval strategies",
      "Design ETL jobs to prep text/metrics for downstream analysis; build dashboards to monitor model drift",
      "Advise on data quality and documentation for reproducible experiments",
    ],
  },
  {
    role: "Junior Data Analyst",
    org: "AlphaAnalytics Ltd",
    period: "March 2024 – February 2025",
    location: "London, United Kingdom",
    bullets: [
      "Built Python/SQL ETL pipelines to ingest and transform multi-source travel data, cutting manual data preparation time by 60%",
      "Developed travel recommendation prototype combining weather patterns, seasonal holidays, flight prices, and macro indicators",
      "Created competitive pricing view comparing UK holiday packages, surfacing pricing anomalies and promotions for weekly action",
      "Published travel insights dashboard (geo trends, seasonality, conversion funnels) aligning product and marketing teams",
      "Rolled out self-service KPI dashboards in Power BI/Looker Studio used by marketing for conversion uplift analysis",
      "Implemented GDPR-aware data validation and documentation",
    ],
  },
  {
    role: "Shift Manager",
    org: "Shell",
    period: "March 2023 – February 2024",
    location: "Southampton",
    bullets: [
      "Managed daily operations and team of 4-6 staff across high-volume retail shifts",
      "Maintained inventory accuracy and cash handling compliance",
      "Part-time role during MSc studies",
    ],
  },
];

const SKILLS = {
  "Data & Analytics": [
    "Python (pandas, NumPy)",
    "SQL (CTEs, window fns)",
    "Statistics",
    "EDA",
    "Time-series (Prophet/TFT)",
    "Anomaly detection",
  ],
  "BI & Viz": [
    "Power BI",
    "Looker Studio",
    "KPI design",
    "Excel (advanced)",
  ],
  "ML & GenAI": [
    "LLMs",
    "RAG",
    "Embeddings",
    "Vector DBs (ChromaDB/FAISS)",
    "LangChain",
    "CrewAI/LangGraph",
  ],
  "Platforms/Tools": [
    "FastAPI",
    "Streamlit",
    "Git/GitHub",
    "Docker",
    "Vercel",
  ],
};

const EDUCATION = [
  {
    qual: "MSc Applied AI & Data Science",
    inst: "Solent University",
    when: "2023 – 2024",
  },
  {
    qual: "BTech Mechanical Engineering",
    inst: "CMR Engineering College",
    when: "2017 – 2021",
  },
];

const CERTS = [
  "AWS Cloud Practitioner Essentials",
  "Prompt Engineering for AI/NLP Apps",
];

/* ========= ANIMATION VARIANTS ========= */

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ========= SCROLL SPY HOOK ========= */

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

/* ========= COMPONENTS ========= */

function Navbar({ activeId }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <a
          href="#"
          className="font-heading text-lg font-bold tracking-tight text-text-primary"
        >
          SB
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative px-3 py-1.5 font-heading text-sm transition-colors ${
                activeId === l.id
                  ? "text-accent-gold"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {l.label}
              {activeId === l.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text-secondary hover:text-text-primary"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border-subtle bg-bg-primary/95 backdrop-blur-md px-4 py-4"
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setMobileOpen(false)}
              className={`block py-2 font-heading text-sm ${
                activeId === l.id
                  ? "text-accent-gold"
                  : "text-text-secondary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}

function Hero() {
  const name = "SHASHANK BODAPATI";
  const letters = name.split("");

  return (
    <section className="relative hero-bg">
      <div className="mx-auto max-w-5xl px-4 py-32 md:py-48 text-center">
        {/* Name — staggered letter reveal */}
        <h1 className="font-heading text-5xl md:text-7xl font-bold text-text-primary">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4, ease: "easeOut" }}
              className="inline-block"
              style={{ whiteSpace: letter === " " ? "pre" : undefined }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-4 font-heading text-xl text-accent-gold"
        >
          Data Analyst & AI Engineer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mx-auto mt-6 max-w-2xl text-base text-text-secondary leading-relaxed"
        >
          Data & AI professional (MSc Applied AI & Data Science). I build clean
          data pipelines, self-service dashboards, and ML/GenAI prototypes that
          improve decisions. Strong with data quality, documentation, and
          explaining insights to non-technical stakeholders.
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="mt-3 text-sm text-text-muted"
        >
          UK &middot; Hybrid/Remote
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-bg-primary transition-colors hover:bg-accent-gold-dim"
          >
            See Projects <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-accent-gold px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-accent-gold transition-colors hover:bg-accent-gold/10"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function WhatIBring() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-accent-gold"
        >
          What I Bring
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HIGHLIGHTS.map((h) => {
            const Icon = h.icon;
            return (
              <motion.div
                key={h.text}
                variants={staggerItem}
                className="rounded-lg border border-border-subtle bg-bg-surface p-4 transition-colors hover:border-accent-gold/50"
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 shrink-0 text-accent-gold" />
                  <span className="text-sm font-medium text-text-primary">
                    {h.text}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-accent-gold"
        >
          Projects
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {PROJECTS.map((p) => (
            <motion.article
              key={p.slug}
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-xl border border-border-subtle bg-bg-surface p-6 transition-all duration-300 hover:border-accent-gold/60 hover:shadow-[0_0_20px_rgba(240,192,64,0.1)]"
            >
              <h3 className="font-heading text-xl font-semibold text-text-primary">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">{p.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.techStack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-bg-surface-hover px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-accent-blue"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                {p.comingSoon ? (
                  <span className="text-sm text-text-muted italic">
                    Coming Soon
                  </span>
                ) : (
                  <Link
                    href={`/projects/${p.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent-gold transition-colors hover:text-accent-gold-dim"
                  >
                    View Case Study
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-accent-gold"
        >
          Experience
        </motion.h2>

        <div className="relative mt-10 ml-4 border-l-2 border-border-subtle pl-8">
          {EXPERIENCE.map((e, idx) => (
            <motion.div
              key={idx}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline dot */}
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-3 w-3 rounded-full border-2 border-accent-gold ${
                  idx === 0
                    ? "bg-accent-gold shadow-[0_0_8px_rgba(240,192,64,0.6)]"
                    : "bg-bg-primary"
                }`}
              />

              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {e.role}
              </h3>
              <p className="mt-0.5 text-sm text-text-secondary">
                {e.org} &middot; {e.period}
              </p>
              <p className="text-sm text-text-muted">{e.location}</p>

              <ul className="mt-3 space-y-2">
                {e.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold/60" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-bg-surface">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-accent-gold"
        >
          About
        </motion.h2>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid gap-12 md:grid-cols-2"
        >
          {/* Left — Story */}
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I started in mechanical engineering, then pivoted to data and AI
              during my MSc at Solent University. That engineering background
              gives me a different lens — I think about systems, processes, and
              where things break before they break.
            </p>
            <p>
              At AlphaAnalytics, I worked on travel analytics — building
              pipelines, dashboards, and recommendation systems that marketing
              teams actually used. Now I build GenAI prototypes and data tools
              independently, focusing on RAG systems, multi-agent architectures,
              and making AI outputs trustworthy.
            </p>
            <p>
              I care about clean data, clear documentation, and explaining
              technical work to people who aren&apos;t technical.
            </p>
          </div>

          {/* Right — Skills, Education, Certs */}
          <div className="space-y-6">
            {Object.entries(SKILLS).map(([group, items]) => (
              <div key={group}>
                <p className="text-sm font-medium text-accent-gold">{group}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-bg-surface-hover px-3 py-1 text-xs text-text-secondary"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div>
              <p className="text-sm font-medium text-accent-gold">Education</p>
              <ul className="mt-2 space-y-1">
                {EDUCATION.map((ed) => (
                  <li key={ed.qual} className="text-sm text-text-secondary">
                    {ed.qual} — {ed.inst} ({ed.when})
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-sm font-medium text-accent-gold">
                Certifications
              </p>
              <ul className="mt-2 space-y-1">
                {CERTS.map((c) => (
                  <li key={c} className="text-sm text-text-secondary">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Download CV button */}
            <a
              href="/Shashank_Bodapati_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent-gold px-5 py-2 font-heading text-sm font-semibold uppercase tracking-wider text-accent-gold transition-colors hover:bg-accent-gold/10"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "bodapatishashank@gmail.com",
      href: "mailto:bodapatishashank@gmail.com",
    },
    {
      icon: Phone,
      label: "+44 7767970447",
      href: "tel:+447767970447",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/shashankbodapati",
      href: "https://www.linkedin.com/in/shashankbodapati/",
    },
    {
      icon: Github,
      label: "github.com/ShashankInData",
      href: "https://github.com/ShashankInData",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <motion.h2
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="font-heading text-3xl md:text-4xl font-semibold text-accent-gold text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-4 text-center text-text-secondary"
        >
          The fastest way to reach me is email. Happy to discuss roles, projects,
          or collaborations.
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8"
        >
          {contactLinks.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                variants={staggerItem}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-text-secondary transition-colors hover:text-accent-gold"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm">{c.label}</span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border-subtle py-8 text-center">
      <p className="text-sm text-text-muted">
        &copy; 2026 Shashank Bodapati &middot; Built with Next.js & Tailwind
      </p>
    </footer>
  );
}

/* ========= PAGE ========= */

export default function Page() {
  const sectionIds = ["projects", "experience", "about", "contact"];
  const activeId = useScrollSpy(sectionIds);

  return (
    <main className="relative">
      <Navbar activeId={activeId} />
      <Hero />
      <WhatIBring />
      <Projects />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

/* ========= CASE STUDY DATA ========= */

const CASE_STUDIES = {
  obesity360: {
    title: "AI-Powered Obesity Treatment Planner",
    description:
      "Multi-agent AI system for personalized obesity treatment in India",
    techStack: [
      "Python",
      "CrewAI",
      "LangChain",
      "ChromaDB",
      "Gradio",
      "GPT-4o",
    ],
    github:
      "https://github.com/ShashankInData/AI-Powered_INDIAN_Obesity_Treatment_Planner",
    live: null,
    problem: [
      "India\u2019s obesity rates are climbing \u2014 24% of women and 22% of men are now overweight or obese according to NFHS-5 data. But most treatment guidance follows Western dietary patterns and cost structures that don\u2019t apply to Indian patients. A patient in Telangana eats rice and jowar, not quinoa and kale. Medication costs in India range from \u20b9100 to \u20b920,000/month \u2014 generic advice doesn\u2019t help when affordability varies that dramatically.",
      "I built a system that generates personalized, culturally appropriate treatment plans using real Indian health survey data and 5 AI agents that collaborate like a medical team.",
    ],
    architectureDescription:
      "The system works sequentially: (1) User provides 14 health factors (age, BMI, state, diet preference, etc.) (2) Data Analyst agent analyzes health metrics and identifies risk factors (3) Dietician agent retrieves state-specific food data from ChromaDB and creates a 7-day meal plan (vegetarian-aware, regional cuisine) (4) Medical Advisor agent evaluates medication needs using WHO guidelines retrieved via RAG, includes Indian cost estimates (5) Fitness Trainer agent designs a 4-week progressive exercise program adjusted for urban/rural context (6) Care Coordinator agent synthesizes everything into a 30-day action plan.",
    architectureSteps: [
      "User Input \u2014 14 Health Factors",
      "BMI Calculation + Validation",
      "State Food Context Lookup",
      "Agent 1: Data Analyst",
      "Agent 2: Dietician",
      "Agent 3: Medical Advisor",
      "Agent 4: Fitness Trainer",
      "Agent 5: Care Coordinator",
    ],
    architectureOutputs: [
      "7-Day Meal Plan",
      "4-Week Exercise Program",
      "Medical Recommendations + Costs",
      "30-Day Action Plan",
    ],
    architectureKnowledge: [
      "WHO Guidelines",
      "9,730 NFHS-5 Records",
      "State Food Databases \u2014 36 regions",
      "Medication Cost Data",
    ],
    howBuilt: [
      "The core orchestration uses CrewAI to manage 5 specialized agents. Each agent has a defined role, goal, and backstory that shapes its responses. They execute sequentially \u2014 each agent\u2019s output feeds into the next, mimicking how a real medical team would collaborate.",
      "The knowledge base is powered by ChromaDB with sentence-transformer embeddings (all-MiniLM-L6-v2). I pre-indexed WHO obesity guidelines, Indian medical research, medication databases with Indian market costs, and state-specific food databases covering all 36 regions.",
      "The patient data comes from NFHS-5 (National Family Health Survey 2019-21) \u2014 9,730 de-identified records with BMI, age, state, residence type, and socioeconomic indicators. This powers the similarity search: the system finds patients with similar profiles to generate evidence-backed recommendations.",
      "I used Asian BMI cutoffs (overweight at 23, not 25) which are medically more appropriate for Indian populations. The UI is built with Gradio and deployed on Hugging Face Spaces.",
      "A key technical challenge was the vegetarian filter \u2014 early versions would recommend fish and chicken to vegetarian users because the LLM pulled from general food databases. I solved this by pre-filtering the food context passed to the Dietician agent based on the user\u2019s dietary preference.",
    ],
    results: [
      "Generates comprehensive treatment plans covering diet, exercise, medication, and costs in under 3 minutes",
      "Covers all 36 Indian states/UTs with region-specific meal plans",
      "Includes cost breakdowns in Indian Rupees (\u20b9)",
      "Handles vegetarian/non-veg/semi-veg dietary preferences accurately",
      "Deployed and accessible on Hugging Face Spaces",
    ],
    whatIdDo: [
      "Add multi-language support (Hindi, Telugu, Tamil) \u2014 the system currently only generates English plans, limiting accessibility",
      "Implement proper evaluation metrics for the generated plans \u2014 currently there\u2019s no automated way to measure plan quality beyond manual review",
      "The 2-commit history doesn\u2019t reflect the actual development effort. In future projects, I\u2019d commit more frequently to show iterative progress",
    ],
  },

  scribeflow: {
    title: "ScribeFlow \u2014 Speech to Structured Text",
    description:
      "End-to-end audio/video transcription with speaker diarization",
    techStack: [
      "Python",
      "Streamlit",
      "OpenAI Whisper",
      "PyAnnote",
      "FFmpeg",
    ],
    github: "https://github.com/ShashankInData/-Scribe_Flow",
    live: "https://scribe-flow-ebon.vercel.app",
    problem: [
      "Transcription tools either give you raw text with no speaker labels, or they\u2019re expensive SaaS products. If you\u2019re a researcher, journalist, or content creator processing interviews or meetings, you need timestamped transcripts with speaker identification, exportable in standard formats (SRT for subtitles, DOCX for documents). Most open-source options handle one piece of this but not the full pipeline.",
      "ScribeFlow handles the complete workflow: upload audio/video (or paste a YouTube URL), get a timestamped transcript with speaker labels, rename speakers, export in your preferred format, and generate an AI summary \u2014 all in one interface.",
    ],
    architectureDescription:
      "Audio/video is uploaded or fetched via YouTube URL, processed through FFmpeg for normalization, optionally diarized with PyAnnote 3.1 for speaker identification, transcribed with OpenAI Whisper, and exported in multiple formats (SRT, WebVTT, DOCX, PDF) with an optional AI-generated summary.",
    architectureSteps: [
      "Audio/Video Upload or YouTube URL",
      "FFmpeg: Extract & Normalize Audio",
      "Diarization Check",
      "PyAnnote 3.1: Speaker Diarization",
      "OpenAI Whisper: Transcription",
      "Map Speakers to Segments",
      "Timestamped Transcript with Speaker Labels",
      "Speaker Rename UI",
    ],
    architectureOutputs: [
      "SRT \u2014 Subtitles",
      "WebVTT \u2014 Web Subtitles",
      "DOCX \u2014 Word Document",
      "PDF \u2014 Document",
    ],
    architectureKnowledge: [],
    howBuilt: [
      "The transcription engine uses OpenAI\u2019s gpt-4o-mini-transcribe model via API. Audio is first processed through FFmpeg for format normalization.",
      "Speaker diarization uses PyAnnote.audio 3.1, which identifies who spoke when. It runs on CPU by default but switches to GPU when CUDA is available. The diarization output is then mapped back to the transcription segments to assign speaker labels.",
      "The export module generates proper byte-encoded files for each format. SRT and WebVTT follow their respective timing specifications. DOCX and PDF exports are generated server-side and served as downloadable files.",
      "The Streamlit UI includes a speaker rename interface \u2014 when multiple speakers are detected, users can assign real names (e.g., \u201cSpeaker 1\u201d \u2192 \u201cDr. Smith\u201d) which updates across all exports.",
      "I also added YouTube URL support via yt-dlp, so users can paste a video link instead of downloading and re-uploading files.",
    ],
    results: [
      "Supports MP3, WAV, M4A, MP4, MOV, AVI, FLAC, OGG formats",
      "Accurate speaker separation for multi-person recordings",
      "4 export formats covering subtitle and document use cases",
      "AI-generated summaries for quick content overview",
      "Deployed on Vercel",
    ],
    whatIdDo: [
      "Add a progress bar / streaming output for long files \u2014 currently users wait with no feedback during processing",
      "Implement chunked processing for very large files to manage memory",
      "Add a \u201cchapters\u201d feature that auto-segments long recordings by topic",
    ],
  },

  "rbac-chatbot": {
    title: "RBAC Internal Chatbot",
    description: "Secure Q&A system with role-based document access",
    techStack: [
      "FastAPI",
      "LangChain",
      "ChromaDB",
      "Groq",
      "JWT",
      "Streamlit",
    ],
    github: "https://github.com/ShashankInData/rbac",
    live: null,
    problem: [
      "Companies have internal documents spread across departments \u2014 engineering specs, financial reports, HR policies, marketing materials. Employees need quick answers from these documents, but they shouldn\u2019t access everything. An engineer shouldn\u2019t read salary data, and marketing shouldn\u2019t see security architecture details.",
      "I built an internal chatbot that answers questions from company documents while enforcing role-based access control. Each user only gets answers from documents their role is authorized to access.",
    ],
    architectureDescription:
      "Users authenticate via JWT, get assigned a role (Engineering, Finance, HR, or Marketing), then queries are filtered through the vector store by role before the LLM generates a grounded response with citations.",
    architectureSteps: [
      "User Login",
      "JWT Authentication",
      "Role Assignment (Engineering / Finance / HR / Marketing)",
      "User Query",
      "Role-Based Document Filter",
      "ChromaDB: Semantic Search",
      "Retrieve Relevant Chunks \u2014 Role-Filtered",
      "Groq LLM: Generate Answer",
    ],
    architectureOutputs: ["Grounded Response with Citations"],
    architectureKnowledge: [
      "Engineering Docs",
      "Finance Reports",
      "HR Policies",
      "Marketing Materials",
    ],
    howBuilt: [
      "The backend is FastAPI with JWT-based authentication. When a user logs in, they receive a token encoding their role (Engineering, Finance, HR, or Marketing). Every subsequent query includes this token.",
      "Documents are ingested via a preprocessing script that splits markdown files into chunks, generates embeddings using HuggingFace sentence transformers, and stores them in ChromaDB with role metadata attached to each chunk.",
      "When a user asks a question, the system first filters the vector store by the user\u2019s role \u2014 an HR user\u2019s query only searches HR-tagged chunks. The relevant chunks are passed as context to the Groq LLM (LLaMA 3.3), which generates a grounded response.",
      "The frontend is Streamlit with a chat interface and login screen.",
    ],
    results: [
      "4 distinct access roles with isolated document access",
      "JWT authentication with secure token handling",
      "Semantic search across internal documents",
      "Grounded responses \u2014 the LLM only answers from retrieved context",
      "API documentation auto-generated at /docs endpoint",
    ],
    whatIdDo: [
      "Build from scratch rather than forking a starter repo \u2014 the fork label on GitHub undersells the amount of custom work I added",
      "Add conversation memory so follow-up questions work naturally",
      "Implement proper logging and audit trail for compliance",
    ],
  },

  "ai-cctv": {
    title: "AI CCTV Retail Security",
    description:
      "Computer vision system for theft detection in small retail stores",
    techStack: ["Python", "OpenCV", "YOLO", "TensorFlow"],
    github: null,
    live: null,
    comingSoon: true,
    problem: [
      "Small retailers lose thousands annually to theft but can\u2019t afford enterprise security systems. Existing CCTV just records \u2014 someone still has to watch hours of footage. An AI-powered system that detects suspicious behaviour in real-time and alerts store staff would be transformative for small businesses.",
    ],
    architectureDescription: "",
    architectureSteps: [],
    architectureOutputs: [],
    architectureKnowledge: [],
    howBuilt: [],
    results: [],
    whatIdDo: [],
    plannedFeatures: [
      "Real-time video stream analysis",
      "Theft/incident detection with configurable alerts",
      "Retrainable on new data for custom use cases",
      "Lightweight enough to run on standard retail hardware",
    ],
  },
};

/* ========= ANIMATION VARIANTS ========= */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ========= ARCHITECTURE DIAGRAM ========= */

function ArchitectureDiagram({ steps, outputs, knowledge }) {
  if (!steps.length) return null;

  return (
    <div className="mt-6 overflow-x-auto">
      <div className="min-w-[600px] space-y-3">
        {/* Steps pipeline */}
        <div className="flex flex-wrap gap-2 items-center">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`rounded-lg px-4 py-2 text-xs font-medium ${
                  i === 0
                    ? "bg-accent-gold text-bg-primary"
                    : "bg-bg-surface-hover text-text-primary border border-border-subtle"
                }`}
              >
                {step}
              </div>
              {i < steps.length - 1 && (
                <span className="text-text-muted">&rarr;</span>
              )}
            </div>
          ))}
        </div>

        {/* Knowledge sources */}
        {knowledge.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-accent-blue mb-2">
              Knowledge Sources
            </p>
            <div className="flex flex-wrap gap-2">
              {knowledge.map((k, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-accent-blue/10 border border-accent-blue/30 px-3 py-1.5 text-xs text-accent-blue"
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Outputs */}
        {outputs.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-accent-gold mb-2">
              Outputs
            </p>
            <div className="flex flex-wrap gap-2">
              {outputs.map((o, i) => (
                <span
                  key={i}
                  className="rounded-lg bg-accent-gold/10 border border-accent-gold/30 px-3 py-1.5 text-xs text-accent-gold"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ========= CASE STUDY PAGE ========= */

export default function CaseStudyPage() {
  const { slug } = useParams();
  const study = CASE_STUDIES[slug];

  if (!study) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-bg-primary">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-text-primary">
            Project Not Found
          </h1>
          <Link
            href="/"
            className="mt-4 inline-block text-accent-gold hover:text-accent-gold-dim"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg-primary">
      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* Back link */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 text-sm text-accent-gold hover:text-accent-gold-dim transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-8"
        >
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
            {study.title}
          </h1>
          <p className="mt-2 text-text-secondary">{study.description}</p>

          {/* Tech badges */}
          <div className="mt-4 flex flex-wrap gap-2">
            {study.techStack.map((t) => (
              <span
                key={t}
                className="rounded-full bg-bg-surface-hover px-2.5 py-0.5 text-xs font-medium uppercase tracking-wider text-accent-blue"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap gap-3">
            {study.github && (
              <a
                href={study.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-accent-gold px-4 py-2 text-sm font-medium text-accent-gold transition-colors hover:bg-accent-gold/10"
              >
                <Github className="h-4 w-4" /> View GitHub
              </a>
            )}
            {study.live && (
              <a
                href={study.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent-gold px-4 py-2 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-gold-dim"
              >
                <ExternalLink className="h-4 w-4" /> Live Demo
              </a>
            )}
          </div>
        </motion.div>

        <hr className="my-10 border-border-subtle" />

        {/* Coming Soon state */}
        {study.comingSoon ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="py-12 text-center"
          >
            <p className="text-text-secondary">
              This project is currently in development. Check back soon for the
              full case study.
            </p>
            {study.plannedFeatures && (
              <div className="mt-8 text-left">
                <h2 className="font-heading text-xl font-semibold text-text-primary">
                  Planned Features
                </h2>
                <ul className="mt-4 space-y-2">
                  {study.plannedFeatures.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold/60" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ) : (
          <>
            {/* THE PROBLEM */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                The Problem
              </h2>
              <div className="mt-4 space-y-4">
                {study.problem.map((p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.section>

            <hr className="my-10 border-border-subtle" />

            {/* ARCHITECTURE */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Architecture
              </h2>
              <ArchitectureDiagram
                steps={study.architectureSteps}
                outputs={study.architectureOutputs}
                knowledge={study.architectureKnowledge}
              />
              {study.architectureDescription && (
                <p className="mt-6 text-sm text-text-secondary leading-relaxed">
                  {study.architectureDescription}
                </p>
              )}
            </motion.section>

            <hr className="my-10 border-border-subtle" />

            {/* HOW I BUILT IT */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                How I Built It
              </h2>
              <div className="mt-4 space-y-4">
                {study.howBuilt.map((p, i) => (
                  <p key={i} className="text-text-secondary leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </motion.section>

            <hr className="my-10 border-border-subtle" />

            {/* RESULTS & IMPACT */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                Results & Impact
              </h2>
              <ul className="mt-4 space-y-2">
                {study.results.map((r, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-text-secondary"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold/60" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.section>

            <hr className="my-10 border-border-subtle" />

            {/* WHAT I'D DO DIFFERENTLY */}
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <h2 className="font-heading text-2xl font-semibold text-text-primary">
                What I&apos;d Do Differently
              </h2>
              <ul className="mt-4 space-y-2">
                {study.whatIdDo.map((w, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-text-secondary"
                  >
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-gold/60" />
                    {w}
                  </li>
                ))}
              </ul>
            </motion.section>
          </>
        )}

        {/* Footer back link */}
        <div className="mt-16 border-t border-border-subtle pt-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1 text-sm text-accent-gold hover:text-accent-gold-dim transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}

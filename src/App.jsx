import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Sun,
  Moon,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  FileText,
  Mail,
  Phone,
} from "lucide-react";

const Github = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ============================================================================
// PORTFOLIO DATA SPECIFICATION (ADITYA TIWARI // "AFTERIT")
// ============================================================================

const NAV_LINKS = [
  { index: "01", label: "Home", href: "#home" },
  { index: "02", label: "About", href: "#about" },
  { index: "03", label: "Experience", href: "#experience" },
  { index: "04", label: "Projects", href: "#projects" },
  { index: "05", label: "Skills", href: "#skills" },
  { index: "06", label: "Achievements", href: "#achievements" },
  { index: "07", label: "Contact", href: "#contact" },
];

const MARQUEE_ITEMS = [
  "Aditya Tiwari — AI Engineer & Data Analyst — B.Tech CSE (AI)",
  "Solo Hackathon Moniker: AFTERIT — 12th Rank / 1,006 Teams @ TechCircuit",
  "First-Author Published Researcher (IJSRT) — Sub-150ms Edge CNNs",
  "Gemini 3 Flash API — Explainable AI (XAI) — PyTorch — FastAPI — React 18",
  "Technocrats Institute of Technology, Bhopal (2024–2028)",
];

const ABOUT_PILLARS = [
  {
    id: "01 — Academic & Research Base",
    title: "B.Tech CSE (AI) · 5th Semester",
    body: "3rd-year undergraduate at Technocrats Institute of Technology, Bhopal (2024–2028) and First-Author published researcher (IJSRT), focusing on Data Structures & Algorithms, OOP, Artificial Intelligence, and Cloud Computing.",
  },
  {
    id: "02 — Production Architecture",
    title: "Hybrid XAI & Low-Latency Pipelines",
    body: "Proven ability to architect hybrid Explainable AI platforms (Gemini 3 Flash API + React 18 executing compliance checks in <50ms) and low-latency Computer Vision/NLP microservices (<150ms local tensor inference).",
  },
  {
    id: "03 — Solo Handle: 'AfterIt'",
    title: "Top 1.2% National Hackathon Builder",
    body: "Frequently competing solo under the moniker 'AfterIt' (and Team Leader of AFTERIT), securing 12th Rank Nationally out of 1,006 teams at TechCircuit and Top 20 out of 364 in the ShaSang A.I. Challenge.",
  },
];

const EXPERIENCES = [
  {
    counter: "01 / 01 — INTERNSHIP — DATA & AI ENGINEERING",
    role: "Data & AI Engineering Intern",
    company: "SWYNEX Technologies",
    period: "Sept 2026 — Oct 2026",
    location: "Remote / Bhopal, India",
    mode: "Production & Edge AI",
    tags: [
      "python",
      "tensorflow",
      "fastapi",
      "cnn optimization",
      "pytest",
      "cli tooling",
      "edge inference",
    ],
    brief:
      "Architect an end-to-end agricultural diagnostics pipeline, CLI tool, and production FastAPI microservice capable of real-time execution in low-resource edge environments.",
    deliverables: [
      "Architected an end-to-end agricultural diagnostics pipeline and CLI tool using Python and TensorFlow for real-time edge environments.",
      "Optimized a lightweight Convolutional Neural Network (CNN) tailored for low-resource execution, achieving sub-150ms local inference latency for image tensors.",
      "Built a production-ready FastAPI microservice with automated Pytest unit tests, enforcing strict schema validation and deterministic fallbacks.",
    ],
    metrics: [
      { label: "Inference Latency", value: "< 150ms Local Tensor" },
      { label: "Backend Stack", value: "Python · FastAPI · TensorFlow" },
      { label: "Verification", value: "Automated Pytest Suite" },
      { label: "Deployment Target", value: "Real-Time Edge + CLI" },
    ],
  },
];

const PROJECTS = [
  {
    index: "01 / 04",
    category: "EXPLAINABLE AI — FULL-STACK SPA",
    title: "BrandGuard AI — Autonomous Brand Governance Platform",
    subtitle: "12th Rank Nationally (out of 1,006 Teams) @ TechCircuit Hackathon",
    date: "Oct 2026 · Solo Engineer (AFTERIT)",
    posterCode: "TECHCIRCUIT // RANK #12 OF 1,006",
    posterMetric: "< 50ms XAI Rule Engine",
    posterGradient: "from-[#FF4D00]/35 via-[#18181B] to-[#09090B]",
    accentHex: "#FF4D00",
    description:
      "Engineered a production-grade SPA as Solo Full-Stack Engineer and Team Leader of AFTERIT, integrating Gemini 3 Flash with an in-browser Explainable AI (XAI) rule engine.",
    architectureNote:
      "Built during the TechCircuit National Hackathon (ranked Top 1.2% nationwide). Pairs generative multimodal analysis via Gemini 3 Flash API with a deterministic in-browser Explainable AI (XAI) compliance engine that audits brand assets in under 50ms while eliminating LLM hallucination risks.",
    deliverables: [
      "Secured 12th Rank Nationally out of 1,006 competing teams as Solo Full-Stack Engineer (Team AFTERIT).",
      "Integrated Gemini 3 Flash API with an in-browser XAI rule engine executing deterministic compliance checks in <50ms.",
      "Eliminated generative hallucination risks by binding LLM outputs to verifiable audit rules in React 18 and Tailwind CSS.",
    ],
    tags: [
      "react 18",
      "tailwind css",
      "gemini 3 flash api",
      "explainable ai (xai)",
      "techcircuit #12",
    ],
    status: "12th / 1,006 Nationally",
    githubUrl: "https://github.com/AdityaIsOnGithub",
  },
  {
    index: "02 / 04",
    category: "COMPUTER VISION — FASTAPI & IJSRT PUBLICATION",
    title: "Automated Plant Disease Detection & Classification",
    subtitle: "CNN Diagnostic Microservice & First-Author IJSRT Research",
    date: "Oct 2026 · Production API & Manuscript",
    posterCode: "IJSRT JOURNAL // FIRST-AUTHOR",
    posterMetric: "< 150ms Tensor Inference",
    posterGradient: "from-emerald-500/35 via-[#111827] to-[#09090B]",
    accentHex: "#10B981",
    description:
      "Built a robust diagnostic tool using Convolutional Neural Networks, a FastAPI backend, dynamic tensor preprocessing, and automated Pytest suites—backed by a first-author IJSRT research manuscript.",
    architectureNote:
      "Combines a production FastAPI + TensorFlow diagnostic microservice (achieving sub-150ms tensor inference and validated by automated Pytest unit suites) with a first-author research manuscript submitted to the IJSRT Journal benchmarking sequential Keras architectures across multi-class datasets.",
    deliverables: [
      "First-author of research manuscript submitted to IJSRT benchmarking sequential Keras architectures and spatial feature extraction.",
      "Engineered dynamic tensor preprocessing and a lightweight CNN achieving <150ms local inference latency.",
      "Built a FastAPI backend with automated Pytest unit tests enforcing schema validation and deterministic fallbacks.",
    ],
    tags: [
      "convolutional neural networks",
      "fastapi",
      "tensorflow",
      "keras",
      "pytest",
      "ijsrt journal",
    ],
    status: "Published & Deployed",
    githubUrl: "https://github.com/AdityaIsOnGithub",
  },
  {
    index: "03 / 04",
    category: "NLP PIPELINE — WORKFORCE ANALYTICS",
    title: "Employee Sentiment Analytics Engine (AI Sentiment Tool)",
    subtitle: "PyTorch & Hugging Face Unstructured Feedback Classifier",
    date: "Aug 2026 · NLP Pipeline",
    posterCode: "NLP // TRANSFORMER PIPELINE",
    posterMetric: "K-Fold Cross-Validated",
    posterGradient: "from-sky-500/35 via-[#0F172A] to-[#09090B]",
    accentHex: "#38BDF8",
    description:
      "Developed an automated NLP sentiment classification pipeline utilizing PyTorch, Hugging Face, and Scikit-learn cross-validation to categorize unstructured feedback.",
    architectureNote:
      "Ingests unstructured workforce and user text streams, applies tokenization and transformer embeddings via Hugging Face and PyTorch, and validates classification generalizability through Scikit-learn cross-validation folds to surface actionable risk indicators.",
    deliverables: [
      "Constructed an end-to-end NLP sentiment pipeline using Python, PyTorch, and Hugging Face transformers.",
      "Implemented rigorous Scikit-learn cross-validation to prevent overfitting on imbalanced feedback corpora.",
      "Generated structured polarity scores and actionable retention risk indicators from raw text.",
    ],
    tags: [
      "python",
      "pytorch",
      "hugging face",
      "scikit-learn",
      "nlp",
      "sentiment analysis",
    ],
    status: "Verified Pipeline",
    githubUrl: "https://github.com/AdityaIsOnGithub",
  },
  {
    index: "04 / 04",
    category: "ALGORITHMIC ECOLOGY — GENERATIVE SYSTEMS",
    title: "Rooted Intelligence (Algorithmic Urban Ecology)",
    subtitle: "AI-Driven Architectural Proposal · Thinknest Prompt Challenge",
    date: "Aug 2026 · Solo Submission (AfterIt)",
    posterCode: "THINKNEST // SOLO BLUEPRINT",
    posterMetric: "Generative Ecology",
    posterGradient: "from-amber-500/35 via-[#1C1917] to-[#09090B]",
    accentHex: "#F59E0B",
    description:
      "Engineered an AI-driven architectural and algorithmic urban ecology proposal for the Thinknest Prompt Challenge.",
    architectureNote:
      "Formulated a structured generative AI framework modeling high-density urban infrastructure as a self-regulating ecological system, optimizing thermal airflow, canopy distribution, and hydrological retention through multi-stage constraint prompting.",
    deliverables: [
      "Designed multi-stage generative prompt constraints translating ecological metrics into spatial architecture.",
      "Modeled algorithmic feedback loops balancing urban heat-island mitigation and structural density.",
      "Submitted solo under the competitive moniker 'AfterIt' for the Thinknest Prompt Challenge.",
    ],
    tags: [
      "generative ai",
      "agentic workflows",
      "prompt engineering",
      "algorithmic ecology",
      "thinknest",
    ],
    status: "Challenge Blueprint",
    githubUrl: "https://github.com/AdityaIsOnGithub",
  },
];

const SKILL_CATEGORIES = [
  {
    index: "01",
    codeLabel: "[ 01 ] // Core Languages & CS Foundations",
    title: "Core Programming & Engineering",
    weight: "25 pts",
    description:
      "Strong algorithmic foundations in Data Structures & Algorithms, Object-Oriented Programming, Automated Testing, and AI Ethics.",
    skills: [
      "Python",
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "C/C++",
      "JavaScript (ES6+)",
      "SQL",
      "HTML5 & CSS3",
      "Automated Testing",
      "AI Ethics",
    ],
  },
  {
    index: "02",
    codeLabel: "[ 02 ] // Intelligence & Model Layer",
    title: "AI, Machine Learning & Deep Learning",
    weight: "40 pts",
    description:
      "Architecting low-latency Computer Vision CNNs, NLP transformer pipelines, Explainable AI (XAI) rule engines, and Agentic workflows.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision (CNNs)",
      "Generative AI",
      "Agentic AI",
      "Explainable AI (XAI)",
      "NLP",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Hugging Face",
      "Scikit-learn",
      "Gemini 3 Flash API",
      "Pandas",
    ],
  },
  {
    index: "03",
    codeLabel: "[ 03 ] // Production Backends, Cloud & UI",
    title: "Backend, Frameworks & Cloud Tools",
    weight: "25 pts",
    description:
      "Building deterministic REST microservices, responsive React frontends, and cloud-native deployments.",
    skills: [
      "FastAPI",
      "REST APIs",
      "Pytest",
      "React 18",
      "Tailwind CSS",
      "Git & GitHub",
      "Windows PowerShell",
      "AWS",
      "Microsoft Azure",
      "Snowflake",
    ],
  },
  {
    index: "04",
    codeLabel: "[ 04 ] // Active Expansion",
    title: "Currently Learning",
    weight: "10 pts",
    description:
      "Expanding core OOP mastery into enterprise JVM backend ecosystems and concurrent programming.",
    skills: ["Java"],
  },
];

const ACHIEVEMENTS = [
  {
    index: "01",
    tier: "NATIONAL FINALIST — TOP 1.2% (12TH / 1,006)",
    title: "TechCircuit National Finalist — 12th Rank",
    issuer: "We Code Coders · Team Leader of AFTERIT",
    year: "Oct 2026",
    detail:
      "Placed 12th Nationally out of 1,006 competing teams (Top 1.2%) as Solo Full-Stack Engineer and Team Leader of AFTERIT by engineering BrandGuard AI.",
    badge: "Rank: 12 / 1,006",
  },
  {
    index: "02",
    tier: "NATIONAL FINALIST — TOP 5.4% (TOP 20 / 364)",
    title: "Top 20 Finalist (out of 364) — ShaSang A.I. Challenge",
    issuer: "ShaSang A.I. National Growth Strategy Challenge",
    year: "Sept 2026",
    detail:
      "Recognized among the Top 20 National Finalists (Top 5.4%) out of 364 registered entrants for architecting a data-backed AI growth and deployment strategy.",
    badge: "Top 20 / 364",
  },
  {
    index: "03",
    tier: "FIRST-AUTHOR RESEARCH MANUSCRIPT",
    title: "Published Researcher — Automated Plant Disease Detection via CNNs",
    issuer: "IJSRT Journal",
    year: "Oct 2026",
    detail:
      "First-author of manuscript submitted to IJSRT; led a research group benchmarking sequential Keras CNN architectures and spatial feature extraction across multi-class datasets.",
    badge: "First-Author · IJSRT",
  },
  {
    index: "04",
    tier: "VERIFIED CERTIFICATION — AGENTIC & GEN AI",
    title: "Build an AI Agent & Generative AI Professional",
    issuer: "IBM SkillsBuild & Snowflake",
    year: "2026",
    detail:
      "Earned the IBM SkillsBuild 'Build an AI Agent' certification alongside the Snowflake Generative AI Professional credential.",
    badge: "IBM + Snowflake",
  },
  {
    index: "05",
    tier: "EUROPEAN ACADEMIC CREDIT — 82% SCORE",
    title: "Elements of AI (2 ECTS Credits)",
    issuer: "University of Helsinki",
    year: "June 2026",
    detail:
      "Completed the University of Helsinki's Elements of AI curriculum with an 82% score, earning 2 European Credit Transfer and Accumulation System (ECTS) credits.",
    badge: "82% Score · 2 ECTS",
  },
  {
    index: "06",
    tier: "MULTI-CLOUD OPERATIONS CREDENTIALS",
    title: "Getting Started with Cloud Ops & Azure Essentials",
    issuer: "AWS Educate & Microsoft Azure",
    year: "Sept 2026",
    detail:
      "Verified foundational cloud operations, compute provisioning, and deployment workflow proficiency across both AWS Educate and Microsoft Azure Essentials.",
    badge: "AWS + Azure",
  },
];

// ============================================================================
// REUSABLE WECODECODERS.IN UI COMPONENTS
// ============================================================================

function RolloverNavLink({ index, label, href, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-baseline font-mono text-xs uppercase tracking-wider px-2.5 py-1.5"
    >
      <span className="text-[#FF4D00] opacity-85 mr-1 group-hover:opacity-100 transition-opacity font-bold">
        {index}
      </span>
      <span className="relative inline-block overflow-hidden h-[1.25em] leading-[1.25em]">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">
          {label}
        </span>
        <span
          aria-hidden="true"
          className="block absolute left-0 top-full transition-transform duration-300 ease-out group-hover:-translate-y-full font-semibold text-[#FF4D00] underline underline-offset-4"
        >
          {label}
        </span>
      </span>
    </a>
  );
}

function SplitCharacterLink({ index, label, href, onClick }) {
  const chars = label.split("");
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-center justify-between py-3.5 border-b border-current/15 font-mono text-sm uppercase tracking-widest hover:pl-2 transition-all"
    >
      <div className="flex items-center space-x-1">
        <span className="text-[#FF4D00] mr-2 font-bold">{index}.</span>
        {chars.map((char, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.025 }}
            className="inline-block"
          >
            {char}
            <span className="opacity-30">.</span>
          </motion.span>
        ))}
      </div>
      <ArrowUpRight className="w-4 h-4 text-[#FF4D00]" />
    </a>
  );
}

function SectionHeader({ index, comment, title, subtitle, metaRight }) {
  return (
    <div className="border-b border-current/15 pb-6 mb-10">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="font-mono text-xs sm:text-sm tracking-tight flex items-center gap-2">
          <span className="font-bold text-[#FF4D00]">[ {index} ]</span>
          <span className="opacity-65">// {comment}</span>
        </div>
        {metaRight && (
          <span className="font-mono text-[11px] uppercase tracking-widest border border-[#FF4D00]/40 text-[#FF4D00] bg-[#FF4D00]/5 px-2.5 py-0.5 font-semibold">
            {metaRight}
          </span>
        )}
      </div>
      <h2 className="text-2xl sm:text-4xl font-bold tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2.5 text-sm sm:text-base opacity-75 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ============================================================================
// MAIN PORTFOLIO APPLICATION
// ============================================================================

export default function AdityaTiwariPortfolio() {
  const [theme, setTheme] = useState("dark");
  const [preloaderCount, setPreloaderCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [istTime, setIstTime] = useState("--:--:--");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Recruiter / Hiring Team (AI / Full-Stack)",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Preloader 00 -> 100 hydration counter
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 5;
      if (current >= 100) {
        setPreloaderCount(100);
        clearInterval(interval);
      } else {
        setPreloaderCount(current);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Live IST Clock (`Schedules in IST — --:--:--` -> `HH:MM:SS`)
  useEffect(() => {
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setIstTime(formatter.format(new Date()));
      } catch {
        setIstTime("23:40:00");
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const [isSending, setIsSending] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "6031aab8-6ddb-4f9d-baf3-46551125a287",
          subject: `[AfterIt Portfolio] New Message from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
      } else {
        alert("Transmission failed. Please try again.");
      }
    } catch (error) {
      console.error("Dispatch error:", error);
    } finally {
      setIsSending(false);
    }
  };

  const formattedCounter = String(preloaderCount).padStart(2, "0");

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#F4F1EA]"
          : "bg-[#F4F1EA] text-[#111110]"
      }`}
    >
      {/* TOP PRELOADER BAR (`00` -> `100 Independent builder culture`) */}
      <div
        className={`border-b text-[11px] font-mono py-1.5 px-4 sm:px-8 flex flex-wrap items-center justify-between gap-2 ${
          theme === "dark"
            ? "bg-[#111110] border-[#262522] text-[#A8A29E]"
            : "bg-[#EAE5DC] border-[#D6D0C4] text-[#57534E]"
        }`}
      >
        <div className="flex items-center gap-2">
          <span className="inline-block px-1.5 py-0.5 font-bold bg-[#FF4D00] text-white">
            {formattedCounter}
          </span>
          <span>
            Independent builder culture — Solo Moniker:{" "}
            <strong className="text-[#FF4D00]">AfterIt</strong> — Top 12
            National Finalist
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open to AI & Full-Stack Roles</span>
          </span>
          <span>•</span>
          <span>Bhopal, MP, India (IST)</span>
        </div>
      </div>

      {/* 1. STICKY NAVIGATION BAR */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-md border-b ${
          theme === "dark"
            ? "bg-[#0A0A09]/90 border-[#262522]"
            : "bg-[#F4F1EA]/90 border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs px-1.5 py-0.5 border border-[#FF4D00] text-[#FF4D00] bg-[#FF4D00]/10 font-bold">
                AT // AfterIt
              </span>
              <span className="font-bold tracking-tight text-sm sm:text-base">
                Aditya Tiwari
              </span>
            </div>
            <span className="font-mono text-[10px] opacity-60 hidden sm:inline">
              AI Engineer & Data Analyst — Verifiable Proof of Work
            </span>
          </a>

          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_LINKS.map((link) => (
              <RolloverNavLink
                key={link.index}
                index={link.index}
                label={link.label}
                href={link.href}
              />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setTheme((prev) => (prev === "dark" ? "light" : "dark"))
              }
              type="button"
              className={`font-mono text-xs px-3 py-1.5 border flex items-center gap-1.5 transition-colors ${
                theme === "dark"
                  ? "border-[#262522] hover:border-[#FF4D00] bg-[#141413] text-[#F4F1EA]"
                  : "border-[#D6D0C4] hover:border-[#FF4D00] bg-[#EAE5DC] text-[#111110]"
              }`}
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span className="hidden sm:inline">Paper Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#FF4D00]" />
                  <span className="hidden sm:inline">Dark Mode</span>
                </>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              type="button"
              className="lg:hidden font-mono text-xs uppercase tracking-widest px-3 py-1.5 border border-[#FF4D00] text-[#FF4D00] font-bold"
            >
              {mobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`lg:hidden overflow-hidden border-t px-4 sm:px-8 pb-6 ${
                theme === "dark"
                  ? "bg-[#0A0A09] border-[#262522]"
                  : "bg-[#F4F1EA] border-[#D6D0C4]"
              }`}
            >
              <div className="pt-2 flex flex-col">
                {NAV_LINKS.map((link) => (
                  <SplitCharacterLink
                    key={link.index}
                    index={link.index}
                    label={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION */}
      <section
        id="home"
        className={`relative border-b ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-14 pb-16 md:pt-20 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs sm:text-sm mb-6 flex flex-wrap items-center gap-2">
                <span className="font-bold text-[#FF4D00]">
                  [ Aditya Tiwari // AfterIt ]
                </span>
                <span className="opacity-70">
                  // Independent builder culture — Build in public. Leave with
                  proof.
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
                Aditya Tiwari
              </h1>

              <p className="mt-4 font-mono text-base sm:text-xl md:text-2xl font-medium text-[#FF4D00]">
                AI Engineer & Data Analyst | B.Tech CSE (AI)
              </p>

              <p className="mt-4 text-base sm:text-lg opacity-85 max-w-2xl leading-relaxed">
                Specializing in Machine Learning, Computer Vision, and Agentic
                AI. 3rd-year B.Tech CSE (AI) undergraduate architecting hybrid
                Explainable AI platforms (Gemini 3 Flash API, React 18) and
                sub-150ms Computer Vision/NLP microservices. First-author
                published researcher (IJSRT) and Top 12 National Hackathon
                Finalist (
                <span className="font-mono font-semibold text-[#FF4D00]">
                  'AfterIt'
                </span>
                ).
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 font-bold inline-flex items-center gap-2 border border-[#FF4D00] bg-[#FF4D00] text-white hover:bg-[#e04400] transition-all"
                >
                  <span>[01] View Projects</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/AdityaIsOnGithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-mono text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 font-semibold inline-flex items-center gap-2 border transition-all ${
                    theme === "dark"
                      ? "border-[#262522] hover:border-[#FF4D00] bg-[#141413] text-[#F4F1EA]"
                      : "border-[#D6D0C4] hover:border-[#FF4D00] bg-[#EAE5DC] text-[#111110]"
                  }`}
                >
                  <Github className="w-4 h-4 text-[#FF4D00]" />
                  <span>GitHub (AdityaIsOnGithub)</span>
                  <ArrowUpRight className="w-4 h-4 opacity-60" />
                </a>

                <a
                  href="/Aditya_Tiwari_Resume.pdf"
                  download
                  className={`font-mono text-xs sm:text-sm uppercase tracking-wider px-5 py-3.5 font-semibold inline-flex items-center gap-2 border transition-all ${
                    theme === "dark"
                      ? "border-[#262522] hover:border-[#FF4D00] text-[#A8A29E]"
                      : "border-[#D6D0C4] hover:border-[#FF4D00] text-[#57534E]"
                  }`}
                >
                  <FileText className="w-4 h-4 text-[#FF4D00]" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>

            {/* Right Callout Card (Matches wecodecoders.in 'Next event TechCircuit' box) */}
            <div
              className={`lg:col-span-4 border p-6 font-mono text-xs space-y-4 ${
                theme === "dark"
                  ? "border-[#262522] bg-[#121210]"
                  : "border-[#D6D0C4] bg-[#EAE5DC]/80"
              }`}
            >
              <div className="flex items-center justify-between border-b border-current/15 pb-3">
                <span className="text-[#FF4D00] font-bold uppercase">
                  [ Latest Proof // Oct 2026 ]
                </span>
                <span className="inline-flex items-center gap-1.5 text-emerald-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Verified
                </span>
              </div>
              <div>
                <div className="opacity-60 text-[11px]">Featured Standing</div>
                <div className="text-base font-bold mt-0.5">
                  TechCircuit National Hackathon
                </div>
                <div className="text-[#FF4D00] font-semibold mt-0.5">
                  12th Rank Nationally / 1,006 Teams (Top 1.2%)
                </div>
              </div>
              <div className="pt-2 border-t border-current/15 flex items-center justify-between">
                <span>Role: Solo Engineer (AFTERIT)</span>
                <a
                  href="#projects"
                  className="text-[#FF4D00] font-bold hover:underline inline-flex items-center gap-1"
                >
                  <span>Inspect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          <div
            className={`mt-12 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs ${
              theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
            }`}
          >
            <div>
              <span className="text-[#FF4D00] block text-[10px] uppercase font-bold">
                01 // Experience
              </span>
              <span className="font-semibold">
                SWYNEX Technologies (AI Intern)
              </span>
            </div>
            <div>
              <span className="text-[#FF4D00] block text-[10px] uppercase font-bold">
                02 // TechCircuit Standing
              </span>
              <span className="font-semibold">
                12th Rank / 1,006 Teams (Top 1.2%)
              </span>
            </div>
            <div>
              <span className="text-[#FF4D00] block text-[10px] uppercase font-bold">
                03 // Research Output
              </span>
              <span className="font-semibold">
                First-Author (IJSRT Journal)
              </span>
            </div>
            <div>
              <span className="text-[#FF4D00] block text-[10px] uppercase font-bold">
                04 // ShaSang AI Standing
              </span>
              <span className="font-semibold">
                Top 20 / 364 Finalist (Top 5.4%)
              </span>
            </div>
          </div>
        </div>

        {/* INFINITE MARQUEE TICKER */}
        <div
          className={`border-t overflow-hidden py-3 font-mono text-xs uppercase tracking-widest ${
            theme === "dark"
              ? "border-[#262522] bg-[#121210] text-[#F4F1EA]"
              : "border-[#D6D0C4] bg-[#EAE5DC] text-[#111110]"
          }`}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
            className="flex whitespace-nowrap w-max"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <span key={idx} className="mx-6 inline-flex items-center gap-6">
                <span>{item}</span>
                <span className="text-[#FF4D00] font-bold">//</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section
        id="about"
        className={`border-b py-16 md:py-24 ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="01"
            comment="What this is — Builder Manifesto"
            title="A room where intelligent systems are built, tested, and shipped."
            metaRight="Solo Moniker: AfterIt"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-8 space-y-4">
              <p className="text-lg sm:text-xl leading-relaxed font-medium">
                I am a B.Tech Computer Science & Engineering student
                specializing in Artificial Intelligence at Technocrats Institute
                of Technology, Bhopal (2024–2028). I am passionate about
                building intelligent systems and deploying scalable backend
                architectures. I frequently compete in hackathons and coding
                challenges as a solo competitor under the moniker{" "}
                <span className="font-mono font-bold px-2 py-0.5 border border-[#FF4D00] text-[#FF4D00] bg-[#FF4D00]/10">
                  'AfterIt'
                </span>
                .
              </p>
              <blockquote className="border-l-2 border-[#FF4D00] pl-4 py-1 font-mono text-xs sm:text-sm opacity-85">
                Relevant Coursework: Data Structures & Algorithms,
                Object-Oriented Programming (OOP), Artificial Intelligence, and
                Cloud Computing.
              </blockquote>
            </div>

            <div
              className={`lg:col-span-4 border p-5 font-mono text-xs space-y-3 ${
                theme === "dark"
                  ? "border-[#262522] bg-[#121210]"
                  : "border-[#D6D0C4] bg-[#EAE5DC]"
              }`}
            >
              <div className="flex items-center justify-between border-b border-current/15 pb-2">
                <span className="uppercase text-[#FF4D00] font-bold">
                  [ Education Spec ]
                </span>
                <span className="font-semibold">5th Semester</span>
              </div>
              <div>
                <div className="opacity-60">Institution</div>
                <div className="font-semibold">
                  Technocrats Institute of Technology, Bhopal
                </div>
              </div>
              <div>
                <div className="opacity-60">Degree</div>
                <div className="font-semibold">
                  B.Tech CSE (Artificial Intelligence) · 2024–2028
                </div>
              </div>
              <div>
                <div className="opacity-60">Competition Handle</div>
                <div className="font-semibold text-[#FF4D00]">
                  AfterIt (Team AFTERIT)
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 border ${
              theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
            }`}
          >
            {ABOUT_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className={`p-6 flex flex-col justify-between ${
                  idx < 2
                    ? theme === "dark"
                      ? "border-b md:border-b-0 md:border-r border-[#262522]"
                      : "border-b md:border-b-0 md:border-r border-[#D6D0C4]"
                    : ""
                }`}
              >
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-semibold mb-2">
                    {pillar.id}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-current/10 font-mono text-[11px] opacity-60">
                  // Verified Pillar 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE SECTION */}
      <section
        id="experience"
        className={`border-b py-16 md:py-24 ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="02"
            comment="Industrial deployment — Experience"
            title="Artificial Intelligence Intern | SWYNEX Technologies"
            subtitle="End-to-end agricultural diagnostics pipelines, sub-150ms edge CNNs, and production FastAPI microservices."
            metaRight="Sept 2026 – Oct 2026"
          />

          {EXPERIENCES.map((exp) => (
            <div
              key={exp.company}
              className={`border ${
                theme === "dark"
                  ? "border-[#262522] bg-[#121210]"
                  : "border-[#D6D0C4] bg-[#EAE5DC]"
              }`}
            >
              <div
                className={`px-6 py-3 border-b font-mono text-xs flex flex-wrap items-center justify-between gap-2 ${
                  theme === "dark"
                    ? "border-[#262522] bg-[#181816]"
                    : "border-[#D6D0C4] bg-[#E2DDD0]"
                }`}
              >
                <span className="font-bold text-[#FF4D00]">{exp.counter}</span>
                <span className="opacity-75">
                  {exp.period} · {exp.location}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-current/15">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="font-mono text-sm sm:text-base mt-1 opacity-85">
                      @ {exp.company} — {exp.location}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-[11px] px-2.5 py-1 border ${
                          theme === "dark"
                            ? "border-[#262522] bg-[#0A0A09] text-[#F4F1EA]"
                            : "border-[#D6D0C4] bg-[#F4F1EA] text-[#111110]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-semibold">
                      [ Brief ] // Engineering Mandate
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed opacity-90">
                      {exp.brief}
                    </p>
                    <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.label}
                          className={`p-3 border ${
                            theme === "dark"
                              ? "border-[#262522] bg-[#0A0A09]"
                              : "border-[#D6D0C4] bg-[#F4F1EA]"
                          }`}
                        >
                          <div className="text-[#FF4D00] text-[10px] uppercase font-bold">
                            {m.label}
                          </div>
                          <div className="font-semibold mt-1">{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#FF4D00] font-semibold mb-4">
                      [ Deliverables ] // Verified Contributions
                    </div>
                    <div className="space-y-3">
                      {exp.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className={`p-4 border flex items-start gap-3.5 ${
                            theme === "dark"
                              ? "border-[#262522] bg-[#0A0A09]"
                              : "border-[#D6D0C4] bg-[#F4F1EA]"
                          }`}
                        >
                          <span className="font-mono text-xs font-bold text-[#FF4D00] mt-0.5">
                            * 0{i + 1}
                          </span>
                          <p className="text-sm leading-relaxed opacity-90">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. PROJECTS & PUBLICATIONS SECTION (WITH WECODECODERS POSTER BANNERS) */}
      <section
        id="projects"
        className={`border-b py-16 md:py-24 ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="03"
            comment="What I build — Projects & Research Publications"
            title="From hackathon problem statements to peer-reviewed & deployed systems."
            metaRight="04 / 04 Indexed Builds"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <motion.article
                key={project.index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`group border flex flex-col justify-between transition-colors ${
                  theme === "dark"
                    ? "border-[#262522] hover:border-[#FF4D00] bg-[#121210]"
                    : "border-[#D6D0C4] hover:border-[#FF4D00] bg-[#EAE5DC]"
                }`}
              >
                <div>
                  {/* Top Counter Strip */}
                  <div
                    className={`px-5 py-3 border-b font-mono text-[11px] flex items-center justify-between ${
                      theme === "dark"
                        ? "border-[#262522] bg-[#181816]"
                        : "border-[#D6D0C4] bg-[#E2DDD0]"
                    }`}
                  >
                    <span className="font-bold text-[#FF4D00]">
                      {project.index}
                    </span>
                    <span className="opacity-75 truncate max-w-[260px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Brutalist Event-Style Visual Poster Banner */}
                  <div
                    className={`relative h-40 border-b overflow-hidden px-6 py-5 flex flex-col justify-between bg-gradient-to-br ${project.posterGradient} border-[#262522] text-white`}
                  >
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
                        backgroundSize: "18px 18px",
                      }}
                    />
                    <div className="relative z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                      <span
                        className="px-2 py-0.5 font-bold text-black"
                        style={{ backgroundColor: project.accentHex }}
                      >
                        {project.posterCode}
                      </span>
                      <span className="text-zinc-300 font-semibold">
                        {project.posterMetric}
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                        {project.date} — {project.status}
                      </div>
                      <div className="text-lg font-bold tracking-tight mt-0.5 truncate">
                        {project.title}
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold tracking-tight leading-snug group-hover:text-[#FF4D00] transition-colors">
                      {project.title}
                    </h3>
                    <div className="font-mono text-xs opacity-75 mt-1">
                      // {project.subtitle}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed opacity-90">
                      {project.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-current/10 space-y-2">
                      {project.deliverables.map((deliv, idx) => (
                        <div
                          key={idx}
                          className="text-xs opacity-85 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="font-mono font-bold text-[#FF4D00]">
                            0{idx + 1}
                          </span>
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`font-mono text-[10px] px-2 py-0.5 border ${
                            theme === "dark"
                              ? "border-[#262522] bg-[#0A0A09] text-[#A8A29E]"
                              : "border-[#D6D0C4] bg-[#F4F1EA] text-[#57534E]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={`px-6 py-3.5 border-t font-mono text-xs flex items-center justify-between ${
                    theme === "dark"
                      ? "border-[#262522] bg-[#0A0A09]"
                      : "border-[#D6D0C4] bg-[#F4F1EA]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(project)}
                    className="font-bold text-[#FF4D00] inline-flex items-center gap-1.5 hover:underline underline-offset-4"
                  >
                    <span>Inspect architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-75 hover:opacity-100 inline-flex items-center gap-1"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SKILLS SECTION */}
      <section
        id="skills"
        className={`border-b py-16 md:py-24 ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="04"
            comment="Technical Capability Matrix — Skills"
            title="Core, AI/ML, Backend & Cloud Engineering Stack."
            metaRight="100-Point Rubric"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.index}
                className={`border p-6 flex flex-col justify-between ${
                  theme === "dark"
                    ? "border-[#262522] bg-[#121210]"
                    : "border-[#D6D0C4] bg-[#EAE5DC]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-current/15 font-mono text-xs">
                    <span className="font-bold text-[#FF4D00]">
                      {cat.codeLabel}
                    </span>
                    <span className="px-2 py-0.5 border border-[#FF4D00] text-[#FF4D00] font-bold">
                      {cat.weight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cat.title}</h3>
                  <p className="text-xs sm:text-sm opacity-75 mb-5 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 border inline-flex items-center gap-2 transition-colors hover:border-[#FF4D00] ${
                        theme === "dark"
                          ? "border-[#262522] bg-[#0A0A09] text-[#F4F1EA]"
                          : "border-[#D6D0C4] bg-[#F4F1EA] text-[#111110]"
                      }`}
                    >
                      <span className="text-[#FF4D00] text-[10px] font-bold">
                        {String(sIdx + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. ACHIEVEMENTS & CERTIFICATIONS */}
      <section
        id="achievements"
        className={`border-b py-16 md:py-24 ${
          theme === "dark" ? "border-[#262522]" : "border-[#D6D0C4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="05"
            comment="Leave with proof — Honors, Achievements & Certifications"
            title="National Hackathon Finalist Ranks & Verified Credentials."
            metaRight="06 Verified Records"
          />

          <div className="divide-y border border-current/20 divide-current/15">
            {ACHIEVEMENTS.map((item) => (
              <div
                key={item.index}
                className={`p-6 sm:p-8 transition-colors ${
                  theme === "dark"
                    ? "bg-[#121210] hover:bg-[#181816]"
                    : "bg-[#EAE5DC] hover:bg-[#E2DDD0]"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
                  <div className="lg:col-span-3 font-mono text-xs">
                    <div className="font-bold text-sm text-[#FF4D00]">
                      * {item.index} // PROOF
                    </div>
                    <div className="opacity-70 mt-1">{item.tier}</div>
                    <div className="mt-2 inline-block px-2 py-0.5 border border-[#FF4D00] text-[#FF4D00] text-[11px] font-bold">
                      {item.badge}
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <h3 className="text-lg sm:text-xl font-bold leading-snug">
                      {item.title}
                    </h3>
                    <div className="font-mono text-xs opacity-75 mt-1">
                      {item.issuer} ({item.year})
                    </div>
                  </div>

                  <div className="lg:col-span-5 text-sm opacity-85 leading-relaxed">
                    {item.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & FOOTER */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <SectionHeader
            index="06"
            comment="Direct channel — Contact & Dispatch"
            title="Seeking high-impact AI/ML and Full-Stack Engineering roles."
            metaRight="Bhopal, MP, India"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 space-y-6">
              <div
                className={`border p-6 space-y-4 font-mono text-xs ${
                  theme === "dark"
                    ? "border-[#262522] bg-[#121210]"
                    : "border-[#D6D0C4] bg-[#EAE5DC]"
                }`}
              >
                <div className="uppercase text-[#FF4D00] font-bold border-b border-current/15 pb-2">
                  [ Verified Coordinates ] // Aditya Tiwari
                </div>

                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 shrink-0 text-[#FF4D00]" />
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-[#FF4D00]" />
                  <a
                    href="mailto:aadityatiwari854@gmail.com"
                    className="hover:underline"
                  >
                    aadityatiwari854@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 shrink-0 text-[#FF4D00]" />
                  <a href="tel:+919425674419" className="hover:underline">
                    +91 9425674419
                  </a>
                </div>

                <div className="pt-2 space-y-2.5">
                  <a
                    href="https://github.com/AdityaIsOnGithub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full p-3 border flex items-center justify-between font-semibold transition-colors ${
                      theme === "dark"
                        ? "border-[#262522] bg-[#0A0A09] hover:border-[#FF4D00]"
                        : "border-[#D6D0C4] bg-[#F4F1EA] hover:border-[#FF4D00]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="w-4 h-4 text-[#FF4D00]" />
                      <span>01 // github.com/AdityaIsOnGithub</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF4D00]" />
                  </a>

                  <a
                    href="https://linkedin.com/in/aditya-tiwari-4a88ab311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full p-3 border flex items-center justify-between font-semibold transition-colors ${
                      theme === "dark"
                        ? "border-[#262522] bg-[#0A0A09] hover:border-[#FF4D00]"
                        : "border-[#D6D0C4] bg-[#F4F1EA] hover:border-[#FF4D00]"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-[#FF4D00]" />
                      <span>02 // linkedin.com/in/aditya-tiwari-4a88ab311</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#FF4D00]" />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className={`border p-6 sm:p-8 space-y-5 ${
                  theme === "dark"
                    ? "border-[#262522] bg-[#121210]"
                    : "border-[#D6D0C4] bg-[#EAE5DC]"
                }`}
              >
                <div className="flex items-center justify-between border-b border-current/15 pb-3 font-mono text-xs">
                  <span className="font-bold text-[#FF4D00]">
                    [ Send Message ] // Direct Dispatch
                  </span>
                  <span className="opacity-60">Recipient: Aditya Tiwari</span>
                </div>

                {formSubmitted ? (
                  <div className="p-6 border border-emerald-500/40 font-mono text-xs space-y-3">
                    <div className="flex items-center gap-2 font-bold text-sm text-emerald-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>[ 200 OK ] // Message Queued</span>
                    </div>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Your message
                      has been dispatched to{" "}
                      <strong>aadityatiwari854@gmail.com</strong>.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-mono text-xs uppercase opacity-75 mb-1.5">
                          01 // Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`w-full px-3.5 py-2.5 font-mono text-xs border focus:outline-none focus:border-[#FF4D00] ${
                            theme === "dark"
                              ? "bg-[#0A0A09] border-[#262522] text-[#F4F1EA]"
                              : "bg-[#F4F1EA] border-[#D6D0C4] text-[#111110]"
                          }`}
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs uppercase opacity-75 mb-1.5">
                          02 // Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-3.5 py-2.5 font-mono text-xs border focus:outline-none focus:border-[#FF4D00] ${
                            theme === "dark"
                              ? "bg-[#0A0A09] border-[#262522] text-[#F4F1EA]"
                              : "bg-[#F4F1EA] border-[#D6D0C4] text-[#111110]"
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-mono text-xs uppercase opacity-75 mb-1.5">
                        03 // Message / Brief *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className={`w-full px-3.5 py-2.5 font-mono text-xs border focus:outline-none focus:border-[#FF4D00] ${
                          theme === "dark"
                            ? "bg-[#0A0A09] border-[#262522] text-[#F4F1EA]"
                            : "bg-[#F4F1EA] border-[#D6D0C4] text-[#111110]"
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 font-mono text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 border border-[#FF4D00] bg-[#FF4D00] text-white hover:bg-[#e04400] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSending ? "Dispatching..." : "Send Message"}</span>
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <footer
        className={`border-t font-mono text-xs ${
          theme === "dark"
            ? "border-[#262522] bg-[#070706] text-[#A8A29E]"
            : "border-[#D6D0C4] bg-[#EAE5DC] text-[#57534E]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-8">
          <div className="text-sm sm:text-base italic opacity-90">
            “Events end. The work, feedback and people you meet should
            not.”
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-current/15">
            {NAV_LINKS.map((link) => (
              <a
                key={link.index}
                href={link.href}
                className="hover:text-[#FF4D00] py-1 transition-colors"
              >
                <span className="text-[#FF4D00] font-bold">{link.index}</span>
                <span className="font-semibold text-current ml-1">
                  {link.label}
                </span>
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-current/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px]">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#FF4D00]" />
              <span>Schedules in IST — {istTime}</span>
            </div>
            <div>
              Aditya Tiwari ('AfterIt') · Bhopal, MP, India — Est.
              2026 — Open to anyone
            </div>
          </div>
        </div>
      </footer>

      {/* PROJECT ARCHITECTURE MODAL */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProjectModal(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.96, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className={`max-w-2xl w-full border max-h-[88vh] overflow-y-auto ${
                theme === "dark"
                  ? "bg-[#121210] border-[#FF4D00] text-[#F4F1EA]"
                  : "bg-[#F4F1EA] border-[#FF4D00] text-[#111110]"
              }`}
            >
              <div className="px-6 py-4 border-b border-current/15 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#FF4D00]">
                  {activeProjectModal.index} — {activeProjectModal.category}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="px-2.5 py-1 border border-[#FF4D00] text-[#FF4D00] uppercase font-bold"
                >
                  Close
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-5">
                <h3 className="text-2xl font-bold">
                  {activeProjectModal.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {activeProjectModal.architectureNote}
                </p>
                <div className="space-y-2">
                  {activeProjectModal.deliverables.map((d, i) => (
                    <div
                      key={i}
                      className="p-3 border border-current/15 text-xs flex items-start gap-2.5"
                    >
                      <span className="font-mono font-bold text-[#FF4D00]">
                        * 0{i + 1}
                      </span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
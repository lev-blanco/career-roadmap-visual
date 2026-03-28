// Career Roadmap Data — structured from the career plan document
// Design: Mission Control Aesthetic

export interface Certification {
  name: string;
  cost: string;
  timeline: string;
  roi: string;
  status: "locked" | "in-progress" | "earned";
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  priority: "critical" | "high" | "medium";
}

export interface TimelinePhase {
  id: string;
  months: string;
  title: string;
  items: string[];
  status: "completed" | "active" | "upcoming";
}

export interface ActionItem {
  text: string;
  done: boolean;
  urgent?: boolean;
}

export interface ActionGroup {
  title: string;
  period: string;
  items: ActionItem[];
}

export interface PortfolioProject {
  title: string;
  description: string;
  impact: "highest" | "high" | "medium";
  tags: string[];
}

export interface Strategy {
  title: string;
  icon: string;
  points: string[];
}

// ─── Overview ───
export const overview = {
  title: "Senior React / React Native Developer",
  subtitle: "Career Strategy & Roadmap",
  target: "$80,000 – $130,000+ USD/year",
  location: "Brazil → Remote US-Market",
  investment: "~$1,500 – $2,000 USD",
  pillars: [
    { label: "Certifications", desc: "Survive ATS and Boolean recruiter searches" },
    { label: "AI-Augmented Skills", desc: "Commanding 20–40% salary premiums" },
    { label: "LinkedIn Engineering", desc: "Algorithmic discovery optimization" },
    { label: "Portfolio Artifacts", desc: "Signal Staff/Principal-level thinking" },
    { label: "Niche Positioning", desc: "Generate consistent inbound interest" },
  ],
};

// ─── Skills ───
export const skillCategories: SkillCategory[] = [
  {
    title: "AI & LLM Integration",
    icon: "brain",
    priority: "critical",
    skills: [
      "Vercel AI SDK — streaming UI, useChat, tool calling, agentic workflows",
      "OpenAI & Anthropic APIs — SSE, context management, cost optimization",
      "RAG — vector stores, embeddings, similarity search, chunking",
      "LangChain.js / LangGraph.js — backend orchestration, stateful agents",
      "Prompt Engineering — structured JSON output, TypeScript interfaces",
      "Supabase — vector + backend",
      "AI Design Patterns — Latent UI, human-in-the-loop workflows",
    ],
  },
  {
    title: "On-Device / Mobile AI",
    icon: "smartphone",
    priority: "high",
    skills: [
      "react-native-executorch — ExecuTorch on-device inference",
      "react-native-fast-tflite — TensorFlow Lite with JSI zero-copy",
      "react-native-ai — run Llama/Mistral offline on device",
      "MLC LLM — unified JS API for cloud and on-device inference",
      "TensorFlow Lite / Apple Core ML — GPU/NPU optimization",
      "Firebase ML Kit — barcode, facial recognition, translation",
    ],
  },
  {
    title: "React Native — New Architecture",
    icon: "layers",
    priority: "critical",
    skills: [
      "TurboModules & Fabric (Bridgeless mode) — #1 senior differentiator",
      "JSI — synchronous, high-performance native calls; C++ knowledge",
      "Custom Native Modules — Swift/Objective-C, Kotlin/Java",
      "Build Systems — Gradle, CocoaPods/Ruby, dependency debugging",
      "Native Profiling — Xcode Instruments, Android Studio Profiler",
      "Hermes — bytecode optimization, performance profiling",
      "FlashList + Reanimated — advanced rendering performance",
      "WatermelonDB — offline-first, conflict resolution with GraphQL",
      "Re.Pack / Rspack + Module Federation — micro-frontend, OTA",
    ],
  },
  {
    title: "Accessibility (WCAG)",
    icon: "accessibility",
    priority: "high",
    skills: [
      "Deep WCAG AAA implementation and remediation",
      "Assistive tech — JAWS, NVDA, VoiceOver, TalkBack",
      "Automated + manual testing — WAVE, Lighthouse, axe",
      "Semantic HTML over unnecessary ARIA; keyboard navigation",
      "AI-assisted alt text generation",
      "Web Speech API for text-to-speech accessibility",
    ],
  },
  {
    title: "Frontend & Full-Stack",
    icon: "code",
    priority: "medium",
    skills: [
      "TypeScript — strict interfaces, structured output enforcement",
      "GraphQL — schema design, 60%+ payload reduction",
      "Node.js — JWT auth, bcrypt/Argon2, rate-limiting",
      "Fastlane — mobile CI/CD automation",
      "TensorFlow.js / ONNX.js — on-device inference in browser",
    ],
  },
  {
    title: "Tooling & DevOps",
    icon: "settings",
    priority: "medium",
    skills: [
      "GitHub Actions — automated testing and deployment",
      "Jest / Playwright / RNTL — unit, integration, E2E testing",
      "Cursor IDE + GitHub Copilot — baseline proficiency",
      "Mermaid.js — architecture diagrams in READMEs",
      "Docker — reproducible dev environments",
    ],
  },
];

// ─── Certifications ───
export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer – Associate (DVA-C02)",
    cost: "$150",
    timeline: "4–8 weeks",
    roi: "Highest — appears in Boolean recruiter searches",
    status: "in-progress",
  },
  {
    name: "IAAP CPACC",
    cost: "$170 (EDE)",
    timeline: "Months 1–3",
    roi: "Foundation for CPWA designation",
    status: "locked",
  },
  {
    name: "IAAP WAS (Web Accessibility Specialist)",
    cost: "$170 (EDE)",
    timeline: "After CPACC",
    roi: "Elite differentiator; 3-yr experience prereq",
    status: "locked",
  },
  {
    name: "AWS Certified AI Practitioner",
    cost: "$150",
    timeline: "Months 3–6",
    roi: "AI literacy within AWS ecosystem",
    status: "locked",
  },
  {
    name: "AWS Solutions Architect – Associate",
    cost: "$150",
    timeline: "Months 3–6",
    roi: "Signals architectural/principal-level thinking",
    status: "locked",
  },
];

// ─── Timeline ───
export const timelinePhases: TimelinePhase[] = [
  {
    id: "phase-1",
    months: "Months 1–3",
    title: "Foundation & Launch",
    status: "active",
    items: [
      "Earn AWS Developer Associate certification",
      "Begin IAAP CPACC study ($170 EDE rate)",
      "Launch Vercel AI SDK learning path",
      "Post 3x/week on LinkedIn",
      "Curate LinkedIn Featured section (4–6 items)",
      "Complete LinkedIn skill assessments",
      "Initialize first open-source project with ADRs",
      "Add Mermaid.js diagrams to all GitHub READMEs",
      "Submit CFP to Chain React (deadline: April 15)",
    ],
  },
  {
    id: "phase-2",
    months: "Months 3–6",
    title: "Build & Ship",
    status: "upcoming",
    items: [
      "Earn IAAP WAS certification",
      "Begin AWS Solutions Architect study",
      "Ship v1.0 of OTA framework or Module Federation Kit",
      "Launch Substack newsletter",
      "Submit CFPs to React Summit",
      "Build LLM integration portfolio projects (RAG + streaming)",
      "Earn AWS Certified AI Practitioner",
      "Publish companion blog series (4–6 posts)",
    ],
  },
  {
    id: "phase-3",
    months: "Months 6–12",
    title: "Authority & Inbound",
    status: "upcoming",
    items: [
      "Deliver first conference talk",
      "Grow newsletter to 500+ subscribers",
      "Achieve 500+ GitHub stars on primary project",
      "Establish recognized niche authority",
      "Begin receiving consistent inbound at $100K–$130K+",
    ],
  },
];

// ─── Action Items ───
export const actionGroups: ActionGroup[] = [
  {
    title: "Immediate",
    period: "This Week",
    items: [
      { text: "Enable 'Open to Work' (Recruiters Only) on LinkedIn", done: false, urgent: true },
      { text: "Rewrite LinkedIn headline using the formula", done: false, urgent: true },
      { text: "Rewrite LinkedIn About section with Pain-First framework", done: false, urgent: true },
      { text: "Pin React.js, React Native, TypeScript as top 3 LinkedIn skills", done: false },
      { text: "Enable 'Make follow primary' in LinkedIn privacy settings", done: false },
      { text: "Register on: Revelo, Turing, Arc.dev, Strider", done: false },
      { text: "Join Reactiflux Discord and Expo Community Discord", done: false },
      { text: "Begin AWS Developer Associate study plan", done: false },
    ],
  },
  {
    title: "Months 1–3",
    period: "Foundation",
    items: [
      { text: "Earn AWS Certified Developer – Associate", done: false },
      { text: "Begin IAAP CPACC study", done: false },
      { text: "Launch Vercel AI SDK learning path", done: false },
      { text: "Start posting 3x/week on LinkedIn", done: false },
      { text: "Curate LinkedIn Featured section", done: false },
      { text: "Complete LinkedIn skill assessments for badges", done: false },
      { text: "Initialize first open-source project with public ADRs", done: false },
      { text: "Submit CFP to Chain React (April 15 deadline)", done: false, urgent: true },
    ],
  },
  {
    title: "Months 3–6",
    period: "Build & Ship",
    items: [
      { text: "Earn IAAP WAS certification", done: false },
      { text: "Begin AWS Solutions Architect study", done: false },
      { text: "Ship v1.0 of open-source project", done: false },
      { text: "Launch Substack newsletter", done: false },
      { text: "Submit CFPs to React Summit", done: false },
      { text: "Build LLM integration portfolio projects", done: false },
      { text: "Earn AWS Certified AI Practitioner", done: false },
    ],
  },
  {
    title: "Months 6–12",
    period: "Authority",
    items: [
      { text: "Deliver first conference talk", done: false },
      { text: "Grow newsletter to 500+ subscribers", done: false },
      { text: "Achieve 500+ GitHub stars on primary project", done: false },
      { text: "Establish recognized niche authority", done: false },
      { text: "Consistent inbound at $100K–$130K+ USD", done: false },
    ],
  },
];

// ─── Portfolio Projects ───
export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Open-Source OTA Update Framework",
    description: "Version management, differential updates, staged rollouts, rollback, Hermes bytecode-aware bundling. Companion blog series + conference talk pitch.",
    impact: "highest",
    tags: ["React Native", "Hermes", "OTA", "Open Source"],
  },
  {
    title: "Module Federation Starter Kit",
    description: "Re.Pack 5, Rspack, Module Federation v2, shared dependencies, Hermes bytecode compilation. Navigation integration across federated modules.",
    impact: "high",
    tags: ["Re.Pack", "Rspack", "Module Federation", "Micro-Frontend"],
  },
  {
    title: "Accessible AI Tool",
    description: "On-device ML (object detection) + VoiceOver/TalkBack for visually impaired users. Demonstrates AI + WCAG in one project.",
    impact: "high",
    tags: ["ML", "WCAG", "VoiceOver", "TalkBack"],
  },
  {
    title: "Performance Audit Project",
    description: "Before/After: Lighthouse scores, Web Vitals, screen reader testing videos. Documents the 'why,' not just the 'how.'",
    impact: "medium",
    tags: ["Lighthouse", "Web Vitals", "Performance"],
  },
  {
    title: "AI-Driven Dashboard",
    description: "React/TypeScript + Node.js/GraphQL + LangChain.js — 'chat with your data' interface.",
    impact: "medium",
    tags: ["React", "GraphQL", "LangChain", "AI"],
  },
];

// ─── Career Strategy ───
export const careerStrategies: Strategy[] = [
  {
    title: "Positioning",
    icon: "target",
    points: [
      "Niche: React Native performance + WCAG + AI integration",
      "One of the rarest skill combinations globally",
      "Anchor to US market rates, not Brazilian rates",
      "EST/CST timezone overlap = 20–30% premium",
      "No visa sponsorship = risk-mitigating asset",
    ],
  },
  {
    title: "Legal & Financial",
    icon: "building",
    points: [
      "PJ (LTDA) under Simples Nacional — not MEI",
      "Wise Business for US routing number",
      "Deel ($49/mo) or Remote.com ($29/mo) for EOR",
      "Hire accountant for international income",
    ],
  },
  {
    title: "Job Discovery",
    icon: "search",
    points: [
      "Revelo — 400K+ LATAM developer network",
      "Turing — AI-based matching",
      "Arc.dev — salary data, pre-vetting",
      "Strider — 10,000+ pre-vetted LATAM devs",
      "Reactiflux + Expo Community Discord",
    ],
  },
  {
    title: "Vibe Coding Cleanup",
    icon: "wrench",
    points: [
      "Re-architect AI-generated prototypes into enterprise-grade software",
      "Refactoring & modularization of monolithic AI code",
      "Dependency auditing — remove hallucinated libraries",
      "Type safety enforcement with strict TypeScript",
      "Accessibility remediation + security patching",
    ],
  },
];

// ─── LinkedIn Strategy ───
export const linkedinStrategy = {
  headline: 'Senior Frontend & Mobile Engineer (React / React Native) | Architecting High-Performance, Accessible (WCAG) SaaS Interfaces | Remote (EST Overlap)',
  aboutFramework: [
    { step: "Capability & Context", desc: "What you build and at what scale" },
    { step: "Remote & Async Risk Mitigation", desc: "Timezone overlap, documentation quality" },
    { step: "Concrete Achievements", desc: 'Metrics: "$50M in transactions," "60% API reduction"' },
    { step: "Call to Action", desc: "Current availability + GitHub link with ADRs" },
  ],
  topSkills: ["React.js", "React Native", "TypeScript"],
  postingCadence: "2–5x/week, Tue–Thu, 8–10 AM EST",
  keyRules: [
    "Never include external links in posts — add in comments",
    "Reply to comments within 30 minutes",
    "5–10 thoughtful comments daily on engineering managers/CTOs",
    "Enable 'Open to Work' (Recruiters Only)",
  ],
};

// ─── Content Strategy ───
export const contentStrategy = {
  platforms: [
    { name: "Personal Blog", desc: "Hugo or Next.js — permanent, owned content" },
    { name: "Dev.to", desc: "DA 83 — strong developer community" },
    { name: "LinkedIn Articles", desc: "Best for recruiter visibility" },
    { name: "Substack", desc: "Authority building; 500–2,000 targeted subscribers" },
  ],
  highValueTopics: [
    "Migrating from Metro to Re.Pack/Rspack: A Production Case Study",
    "Building Micro-Frontends in React Native with Module Federation v2",
    "Hermes Bytecode Optimization: Measuring Real-World Impact",
    "How to Ensure Your React Native AI Chatbot is 100% WCAG Compliant",
    "Migrating a Legacy React Native App to TurboModules",
    "A Senior's Guide to WCAG Compliance in React Native",
  ],
  conferences: [
    { name: "Chain React", location: "Portland, July 2026", deadline: "April 15" },
    { name: "React Universe Summit", location: "Wroclaw", deadline: "TBD" },
    { name: "React Summit", location: "Amsterdam/NYC", deadline: "TBD" },
  ],
};

// ─── Technologies ───
export const techCategories = [
  { category: "AI/LLM Frameworks", items: ["Vercel AI SDK", "LangChain.js", "LangGraph.js"] },
  { category: "APIs", items: ["OpenAI API", "Anthropic Claude API"] },
  { category: "Mobile AI", items: ["react-native-executorch", "react-native-fast-tflite", "react-native-ai", "MLC LLM"] },
  { category: "Vector / Backend", items: ["Supabase", "pgvector", "Pinecone"] },
  { category: "Bundling", items: ["Re.Pack", "Rspack", "Module Federation v2"] },
  { category: "Runtime", items: ["Hermes"] },
  { category: "Offline", items: ["WatermelonDB"] },
  { category: "Performance", items: ["FlashList", "Reanimated", "Flipper"] },
  { category: "Testing", items: ["Jest", "Playwright", "RNTL", "fast-check"] },
  { category: "CI/CD", items: ["GitHub Actions", "Fastlane"] },
  { category: "Accessibility", items: ["WAVE", "Lighthouse", "axe"] },
];

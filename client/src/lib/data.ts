// Career Roadmap Data — structured from the career plan document
// Design: Mission Control Aesthetic

export interface Certification {
  name: string;
  cost: string;
  priceNum: number;
  timeline: string;
  studyHours: string;
  effort: "low" | "medium" | "high";
  roi: string;
  status: "locked" | "in-progress" | "earned" | "mandatory";
  provider: "aws" | "gcp" | "iaap" | "isc2" | "google" | "ibm";
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

export interface Course {
  title: string;
  provider: string;
  category: "ai" | "system-design" | "mobile" | "accessibility" | "fullstack" | "security";
  description: string;
  priority: "high" | "medium" | "recommended";
  cost: string;
  priceNum: number;
  studyHours: string;
  effort: "low" | "medium" | "high";
}

export interface EducationItem {
  name: string;
  type: "certification" | "course";
  provider: string;
  cost: string;
  priceNum: number;
  studyHours: string;
  effort: "low" | "medium" | "high";
  priority: "critical" | "high" | "medium" | "recommended";
  category: string;
}

// ─── Overview ───
export const overview = {
  title: "Senior React / React Native Engineer",
  subtitle: "Mobile Architecture, AI & AppSec Career Strategy",
  target: "$80,000 - $130,000+ USD/year",
  location: "Brazil -> Remote US-Market",
  investment: "~$3,500 - $4,500 USD (Includes $1,200 AI/Sec Budget)",
  pillars: [
    { label: "Certifications", desc: "Survive ATS and Boolean recruiter searches" },
    { label: "AI & Security Focus", desc: "Combining AppSec (CSSLP) with LLM Integration" },
    { label: "LinkedIn Engineering", desc: "Algorithmic discovery optimization" },
    { label: "Portfolio Artifacts", desc: "Signal Staff/Principal-level technical execution" },
    { label: "Niche Positioning", desc: "Generate consistent inbound interest" },
  ],
};

// ─── Skills ───
export const skillCategories: SkillCategory[] = [
  {
    title: "Cybersecurity & AppSec",
    icon: "shield",
    priority: "critical",
    skills: [
      "Secure Software Development Lifecycle (SSDLC) - CSSLP standards",
      "Web Vulnerability Mitigation - XSS, SQLi, CSRF, Authentication flaws",
      "Interactive Labs & Pentesting - TryHackMe, PortSwigger Web Security",
      "SIEM Tools & IDS - Incident response and log analysis",
      "Threat Modeling - Architecture review for React Native/Node.js stacks",
    ],
  },
  {
    title: "AI & LLM Integration",
    icon: "brain",
    priority: "critical",
    skills: [
      "Vercel AI SDK - streaming UI, tool calling, agentic workflows",
      "RAG Pipelines - LangChain, vector stores, chunking, embeddings",
      "Applied Deep Learning - Fast.ai, model training without heavy math",
      "ML Tooling - TensorFlow, PyTorch, Keras, scikit-learn",
      "Prompt Engineering - structured JSON output, TypeScript interfaces",
      "Supabase - vector + backend",
    ],
  },
  {
    title: "React Native - New Architecture",
    icon: "layers",
    priority: "critical",
    skills: [
      "TurboModules & Fabric (Bridgeless mode) - Custom Native Modules (Swift/Kotlin)",
      "JSI - synchronous, high-performance native calls; C++ knowledge",
      "Hermes - bytecode optimization, performance profiling",
      "Re.Pack / Rspack + Module Federation - micro-frontend, OTA",
      "Native Profiling - Xcode Instruments, Android Studio Profiler",
    ],
  },
  {
    title: "On-Device / Mobile AI",
    icon: "smartphone",
    priority: "high",
    skills: [
      "react-native-executorch - ExecuTorch on-device inference",
      "react-native-fast-tflite - TensorFlow Lite with JSI zero-copy",
      "react-native-ai - run Llama/Mistral offline on device",
      "TensorFlow Lite / Apple Core ML - GPU/NPU optimization",
    ],
  },
  {
    title: "Accessibility (WCAG)",
    icon: "accessibility",
    priority: "high",
    skills: [
      "Deep WCAG AAA implementation and remediation",
      "Assistive tech - JAWS, NVDA, VoiceOver, TalkBack",
      "Automated + manual testing - WAVE, Lighthouse, axe",
      "AI-assisted alt text generation via Azure Cognitive Services",
    ],
  },
  {
    title: "Frontend & Full-Stack",
    icon: "code",
    priority: "medium",
    skills: [
      "TypeScript - strict interfaces, structured output enforcement",
      "GraphQL - schema design, 60%+ payload reduction",
      "Node.js - JWT auth, bcrypt/Argon2, rate-limiting",
      "Docker - reproducible dev environments",
    ],
  },
];

// ─── Certifications ───
export const certifications: Certification[] = [
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    cost: "$0 (1M pledge)",
    priceNum: 0,
    timeline: "Months 1-3",
    studyHours: "30 hours",
    effort: "low",
    roi: "Entry into ISC2 ecosystem at $0; sets foundation for CSSLP.",
    status: "mandatory",
    provider: "isc2",
  },
  {
    name: "ISC2 CSSLP (Certified Secure Software Lifecycle Professional)",
    cost: "$599",
    priceNum: 599,
    timeline: "Months 8-12",
    studyHours: "100-150 hours (2-4 months)",
    effort: "high",
    roi: "THE developer-specific security cert. Highly recognized in US markets. Qualifies immediately with 7+ years SDLC experience.",
    status: "mandatory",
    provider: "isc2",
  },
  {
    name: "IAAP CPACC (Certified Professional in Accessibility Core Competencies)",
    cost: "$170 (EDE)",
    priceNum: 170,
    timeline: "Months 1-3",
    studyHours: "60-80 hours (6-8 weeks)",
    effort: "medium",
    roi: "Foundation for CPWA designation - mandatory for accessibility niche",
    status: "in-progress",
    provider: "iaap",
  },
  {
    name: "IAAP WAS (Web Accessibility Specialist)",
    cost: "$170 (EDE)",
    priceNum: 170,
    timeline: "After CPACC",
    studyHours: "80-120 hours (8-12 weeks)",
    effort: "high",
    roi: "Elite differentiator; 3-yr experience prereq",
    status: "locked",
    provider: "iaap",
  },
  {
    name: "AWS Certified Developer - Associate (DVA-C02)",
    cost: "$150",
    priceNum: 150,
    timeline: "4-8 weeks",
    studyHours: "40-80 hours (4-8 weeks)",
    effort: "medium",
    roi: "Highest - appears in Boolean recruiter searches",
    status: "locked",
    provider: "aws",
  },
];

// ─── Timeline ───
export const timelinePhases: TimelinePhase[] = [
  {
    id: "phase-1",
    months: "Months 1-3",
    title: "Foundation & Security Launch",
    status: "active",
    items: [
      "Complete Fast.ai Practical Deep Learning for Coders",
      "Complete PortSwigger Web Security Academy Labs",
      "Pass ISC2 Certified in Cybersecurity (CC) Exam (Free)",
      "Begin IAAP CPACC study ($170 EDE rate)",
      "Curate LinkedIn Featured section (4-6 items)",
      "Post 3x/week on LinkedIn",
    ],
  },
  {
    id: "phase-2",
    months: "Months 3-8",
    title: "Core Credentials & Building",
    status: "upcoming",
    items: [
      "Subscribe to Coursera Plus ($240/yr discount)",
      "Complete IBM Generative AI Engineering Certificate",
      "Complete IBM AI Engineering Professional Certificate",
      "Complete Google Cybersecurity Professional Certificate",
      "Ship v1.0 of OTA framework or Module Federation Kit",
      "Build LLM integration portfolio projects (RAG + streaming)",
      "Earn IAAP WAS certification",
    ],
  },
  {
    id: "phase-3",
    months: "Months 8-12",
    title: "Capstone, Authority & Inbound",
    status: "upcoming",
    items: [
      "Study for and pass ISC2 CSSLP Exam ($599)",
      "Maintain active TryHackMe free tier practice",
      "Deliver first conference talk",
      "Achieve 500+ GitHub stars on primary AI/Security project",
      "Establish recognized niche authority as an IC",
      "Begin receiving consistent inbound at $100K-$130K+",
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
      { text: "Register for ISC2 1 Million Certified in Cybersecurity pledge", done: false, urgent: true },
      { text: "Rewrite LinkedIn About section highlighting technical IC expertise", done: false, urgent: true },
      { text: "Pin React.js, React Native, TypeScript as top 3 LinkedIn skills", done: false },
      { text: "Register on: Revelo, Turing, Arc.dev, Strider", done: false },
    ],
  },
  {
    title: "Months 1-3",
    period: "Foundation",
    items: [
      { text: "Start Fast.ai Practical Deep Learning", done: false },
      { text: "Begin PortSwigger Web Security labs", done: false },
      { text: "Pass ISC2 CC Exam", done: false, urgent: true },
      { text: "Earn IAAP CPACC", done: false },
      { text: "Initialize first open-source project with public ADRs", done: false },
    ],
  },
  {
    title: "Months 3-8",
    period: "Build & Ship",
    items: [
      { text: "Purchase Coursera Plus Annual Subscription", done: false },
      { text: "Complete IBM Generative AI & AI Eng Certificates", done: false },
      { text: "Complete Google Cybersecurity Certificate", done: false },
      { text: "Earn IAAP WAS certification", done: false },
      { text: "Ship v1.0 of open-source project", done: false },
    ],
  },
  {
    title: "Months 8-12",
    period: "Authority",
    items: [
      { text: "Pass ISC2 CSSLP Exam", done: false, urgent: true },
      { text: "Deliver first conference talk", done: false },
      { text: "Consistent inbound at $100K-$130K+ USD", done: false },
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
    title: "AI Agentic RAG Application",
    description: "Built with React, LangChain, and Vercel AI SDK. Demonstrates production-grade prompt engineering, vector search, and streaming UI.",
    impact: "highest",
    tags: ["AI", "RAG", "LangChain", "React"],
  },
  {
    title: "Accessible AI Object Detection Tool",
    description: "On-device ML (TensorFlow Lite) + VoiceOver/TalkBack for visually impaired users. Demonstrates AI + WCAG + AppSec in one project.",
    impact: "high",
    tags: ["ML", "WCAG", "Security", "React Native"],
  },
  {
    title: "Module Federation Starter Kit",
    description: "Re.Pack 5, Rspack, Module Federation v2, shared dependencies, Hermes bytecode compilation.",
    impact: "medium",
    tags: ["Re.Pack", "Rspack", "Micro-Frontend"],
  },
];

// ─── Career Strategy ───
export const careerStrategies: Strategy[] = [
  {
    title: "Positioning",
    icon: "target",
    points: [
      "Niche: React Native architecture + AppSec (CSSLP) + AI implementation",
      "Strict Individual Contributor (IC) focus—heavy emphasis on code, scaling, and security",
      "Anchor to US market rates, not Brazilian rates",
      "EST/CST timezone overlap = 20-30% premium",
    ],
  },
  {
    title: "Job Discovery",
    icon: "search",
    points: [
      "Revelo - 400K+ LATAM developer network",
      "Turing - AI-based matching",
      "Arc.dev - salary data, pre-vetting",
      "Strider - 10,000+ pre-vetted LATAM devs",
    ],
  },
  {
    title: "Vibe Coding Cleanup",
    icon: "wrench",
    points: [
      "Re-architect AI-generated prototypes into enterprise-grade secure software",
      "Dependency auditing - remove hallucinated libraries",
      "Type safety enforcement with strict TypeScript",
      "Accessibility remediation + security patching (OWASP standards)",
    ],
  },
];

// ─── LinkedIn Strategy ───
export const linkedinStrategy = {
  headline: "Senior Frontend & Mobile Engineer (React / React Native) | AI Integration & AppSec (CSSLP) | Remote (EST Overlap)",
  aboutFramework: [
    { step: "Capability & Context", desc: "What you build, the security constraints, and scale" },
    { step: "Remote & Async Risk Mitigation", desc: "Timezone overlap, documentation quality" },
    { step: "Concrete Achievements", desc: "Metrics: '60% API reduction,' 'Zero critical vulnerabilities'" },
    { step: "Call to Action", desc: "Current availability + GitHub link with ADRs" },
  ],
  topSkills: ["React Native", "TypeScript", "Application Security"],
  postingCadence: "2-5x/week, Tue-Thu, 8-10 AM EST",
  keyRules: [
    "Never include external links in posts - add in comments",
    "Reply to comments within 30 minutes",
    "Enable 'Open to Work' (Recruiters Only)",
  ],
};

// ─── Content Strategy ───
export const contentStrategy = {
  platforms: [
    { name: "Personal Blog", desc: "Hugo or Next.js - permanent, owned content" },
    { name: "Dev.to", desc: "DA 83 - strong developer community" },
    { name: "Substack", desc: "Authority building; 500-2,000 targeted subscribers" },
  ],
  highValueTopics: [
    "A Senior's Guide to WCAG Compliance & Application Security in React Native",
    "Building Micro-Frontends in React Native with Module Federation v2",
    "Hermes Bytecode Optimization: Measuring Real-World Impact",
    "Implementing Secure RAG Pipelines in Frontend Architectures",
    "Migrating from Metro to Re.Pack/Rspack: A Production Case Study",
  ],
  blogPostStrategy: {
    description: "Write 2-3 deep technical blog posts. Publish on your own blog AND cross-post to dev.to and Medium. Focus heavily on code architecture and implementation details.",
    crossPostTo: ["Personal Blog", "Dev.to"],
    linkedinUse: "Feature in LinkedIn Featured section",
  },
  conferences: [
    { name: "Chain React", location: "Portland", deadline: "April 15" },
    { name: "React Universe Summit", location: "Wroclaw", deadline: "TBD" },
  ],
};

// ─── Technologies ───
export const techCategories = [
  { category: "AI/LLM Frameworks", items: ["Vercel AI SDK", "LangChain", "Fast.ai"] },
  { category: "Security / AppSec", items: ["PortSwigger", "TryHackMe", "OWASP", "SIEM"] },
  { category: "ML in JavaScript", items: ["TensorFlow.js", "ONNX.js", "ONNX Runtime Web"] },
  { category: "Bundling", items: ["Re.Pack", "Rspack", "Module Federation v2"] },
  { category: "Runtime", items: ["Hermes", "TurboModules", "JSI"] },
  { category: "Performance", items: ["FlashList", "Reanimated", "Flipper"] },
  { category: "Accessibility", items: ["WAVE", "Lighthouse", "axe", "Web Speech API"] },
];

// ─── Courses ───
export const courses: Course[] = [
  {
    title: "Fast.ai — Practical Deep Learning for Coders",
    provider: "Fast.ai",
    category: "ai",
    description: "The gold standard for applied deep learning. Build real models from week 1 covering neural nets, NLP, and vision. No heavy math.",
    priority: "high",
    cost: "$0",
    priceNum: 0,
    studyHours: "~100 hours",
    effort: "high",
  },
  {
    title: "PortSwigger Web Security Academy",
    provider: "PortSwigger",
    category: "security",
    description: "Hands-on web app security labs from the creators of Burp Suite. Covers XSS, SQLi, CSRF, directly relevant to frontend/fullstack.",
    priority: "high",
    cost: "$0",
    priceNum: 0,
    studyHours: "~60 hours",
    effort: "medium",
  },
  {
    title: "IBM Generative AI Engineering",
    provider: "Coursera",
    category: "ai",
    description: "LLMs, RAG pipelines, LangChain, prompt engineering, agentic AI. Applicable to building AI-powered web apps.",
    priority: "medium",
    cost: "$240/yr (Coursera Plus)",
    priceNum: 240,
    studyHours: "~150 hours",
    effort: "medium",
  },
  {
    title: "IBM AI Engineering",
    provider: "Coursera",
    category: "ai",
    description: "Broader ML/DL coverage: TensorFlow, PyTorch, Keras, scikit-learn. Deep learning capstone projects.",
    priority: "medium",
    cost: "Included in Plus",
    priceNum: 0,
    studyHours: "~200 hours",
    effort: "high",
  },
  {
    title: "Google Cybersecurity Professional",
    provider: "Coursera",
    category: "security",
    description: "Covers Linux, SQL, Python for security, SIEM tools, IDS, incident response.",
    priority: "recommended",
    cost: "Included in Plus",
    priceNum: 0,
    studyHours: "~180 hours",
    effort: "medium",
  },
  {
    title: "Grokking Modern System Design",
    provider: "Educative.io",
    category: "system-design",
    description: "Interactive system design course covering distributed systems, scalability patterns, and architecture decisions.",
    priority: "high",
    cost: "$59/mo (Educative)",
    priceNum: 118,
    studyHours: "40-60 hours",
    effort: "high",
  },
];

// ─── Education Pricing (combined view) ───
export function getEducationItems(): EducationItem[] {
  const certItems: EducationItem[] = certifications.map((c) => ({
    name: c.name,
    type: "certification" as const,
    provider: c.provider === "aws" ? "AWS" : c.provider === "gcp" ? "Google Cloud" : c.provider === "isc2" ? "ISC2" : "IAAP",
    cost: c.cost,
    priceNum: c.priceNum,
    studyHours: c.studyHours,
    effort: c.effort,
    priority: c.status === "mandatory" ? "critical" : c.status === "in-progress" ? "high" : "medium",
    category: c.provider === "iaap" ? "Accessibility" : c.provider === "isc2" ? "Security" : "Cloud",
  }));

  const courseItems: EducationItem[] = courses.map((c) => ({
    name: c.title,
    type: "course" as const,
    provider: c.provider,
    cost: c.cost,
    priceNum: c.priceNum,
    studyHours: c.studyHours,
    effort: c.effort,
    priority: c.priority === "high" ? "high" : c.priority === "medium" ? "medium" : "recommended",
    category: c.category === "ai" ? "AI" : c.category === "system-design" ? "System Design" : c.category === "security" ? "Security" : "Mobile",
  }));

  return [...certItems, ...courseItems];
}

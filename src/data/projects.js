/**
 * Project data.
 * github / live: set to null for private or unreleased work.
 *   - live may point to a public marketing/product site even when the
 *     underlying app or dashboard itself is private.
 * featured: true = shown in the primary full-width layout.
 */
export const projects = [
  {
    id:          "sara-ai",
    number:      "01",
    title:       "Sara AI",
    category:    "AI ENGINEERING · MULTI-AGENT RAG",
    description:
      "Architected a multi-agent AI practice companion with Chat, Speaking, and Pronunciation experiences. Built with LangGraph, Qdrant hybrid search, and Cohere reranking to ground AI coaching in a proprietary knowledge corpus.",
    highlights: [
      "Multi-agent orchestration with LangGraph",
      "Hybrid retrieval using Qdrant vector database",
      "Cohere reranking for improved relevance",
      "Grounded grammar and phoneme feedback — zero hallucination",
    ],
    github:   null,
    live:     null,
    featured: true,
  },
  {
    id:          "speak2talk",
    number:      "02",
    title:       "Speak2Talk Platform",
    category:    "FULL STACK · EDTECH · PAYMENTS",
    description:
      "Built and operated the full stack for a multi-sided education platform — a React and Tailwind CSS frontend backed by Django systems serving live classes, subscriptions, teacher payouts, enterprise licensing, and AI-powered learning.",
    highlights: [
      "React and Tailwind CSS frontend for classrooms, billing, and dashboards",
      "Plan-gated subscription and entitlement APIs",
      "Teacher payroll and Stripe Connect withdrawal workflows",
      "Share and Earn affiliate commission system",
      "LiveKit video classrooms with S3-backed recording",
      "AWS EC2, S3, CloudFront, and CI/CD deployments",
    ],
    github:   null,
    live:     null,
    featured: true,
  },
  {
    id:          "hiring-scout",
    number:      "03",
    title:       "Hiring Scout",
    category:    "FULL STACK · ATS · VOICE AI",
    description:
      "Built Hiring Scout at Code Graphers — an AI-driven applicant tracking and interview screening product with a Vue.js frontend. Engineered the ATS integration layer alongside a Pipecat voice agent and Twilio-integrated screening bot for automated candidate interviews.",
    highlights: [
      "Vue.js frontend for interview screening and ATS workflows",
      "ATS integration for candidate pipeline management",
      "30% reduction in STT latency via the Pipecat Python SDK",
      "50% reduction in screening-bot infrastructure costs over Daily.co",
    ],
    github:   null,
    live:     null,
    featured: true,
  },
  {
    id:          "shams-vision",
    number:      "04",
    title:       "Shams Vision",
    category:    "DJANGO · AI RAG · COMPUTER VISION",
    description:
      "Built the Django backend for Shams Vision, a retail intelligence platform that helps field teams and FMCG brands in Saudi Arabia capture and analyse store-shelf data. Engineered an AI RAG pipeline that turns shelf photos captured in the field into structured distribution and pricing insights.",
    highlights: [
      "Django backend powering photo-based shelf data collection",
      "AI RAG pipeline achieving 90%+ accuracy categorising real-time captured store images",
      "Geo-location auto-assignment system for store visit routing",
      "Real-time dashboards for field visit management and reporting",
    ],
    github:   null,
    live:     "https://shamsvision.com/",
    featured: true,
  },
  {
    id:          "project-management",
    number:      "05",
    title:       "AI-Powered Project Management",
    category:    "FULL STACK · PRODUCT ENGINEERING",
    description:
      "Multi-tenant project management platform with secure authentication, role-based access control, Kanban boards, real-time collaboration, and LangChain-powered AI task automation.",
    highlights: [
      "Django and React architecture with JWT and RBAC",
      "Real-time collaboration via WebSockets and WebRTC",
      "LangChain-powered task summarization and auto-creation",
      "Analytics dashboard with project-level insights",
    ],
    github:   "https://github.com/SobanAhmedK/Project-management-tool",
    live:     "https://project-management-tool-two.vercel.app/",
    featured: false,
  },
  {
    id:          "ai-interview",
    number:      "06",
    title:       "AI Mock Interview Platform",
    category:    "FASTAPI · GENERATIVE AI",
    description:
      "Secure FastAPI backend for an AI-conducted mock interview experience — resume parsing, voice-based interviews via VAPI, and structured scoring feedback.",
    highlights: [
      "FastAPI backend with JWT authentication",
      "LLM-powered resume parsing",
      "VAPI-powered voice interviews",
      "Structured per-question feedback and scoring",
    ],
    github:   "https://github.com/vampi-007/AI-Interviewer/tree/behzad",
    live:     null,
    featured: false,
  },
];

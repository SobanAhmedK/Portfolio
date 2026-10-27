import { motion } from "framer-motion";

const columns = [
  {
    number: "01",
    title:  "Backend Engineering",
    body:
      "Production-ready Python backends, REST APIs, asynchronous processing, authentication, payment integrations, and subscription systems built to support real business workflows.",
    tech: ["Python", "Django", "DRF", "FastAPI", "PostgreSQL", "Redis", "Celery"],
    cta:  null,
  },
  {
    number: "02",
    title:  "Frontend Engineering",
    body:
      "Full-stack ownership end to end, React and Vue.js interfaces wired directly to the backends and APIs I build, from dashboards and classrooms to ATS workflows.",
    tech: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "WebSockets", "WebRTC"],
    cta:  null,
  },
  {
    number: "03",
    title:  "AI Engineering",
    body:
      "Voice agents, multi-agent architectures, retrieval-augmented generation, hybrid search, and grounded AI experiences designed around real product requirements.",
    tech: ["LangChain", "LangGraph", "Qdrant", "RAG", "Pipecat", "Deepgram"],
    cta:  null,
  },
  {
    number: "04",
    title:  "Cloud and Infrastructure",
    body:
      "Containerised deployments, cloud-hosted services, automated delivery pipelines, media storage, and production infrastructure built for reliable operation.",
    tech: ["AWS", "ECS", "EC2", "S3", "Docker", "CI/CD", "CloudFront"],
    cta:  null,
  },
];

function Expertise() {
  return (
    <section id="engineering" className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">What I Build</p>
          <h2 className="section-heading text-brand-fg">
            Full stack engineering, end to end.
          </h2>
        </motion.div>

        {/* Four columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {columns.map((col, i) => (
            <motion.div
              key={i}
              className="bg-brand-bg p-8 md:p-9"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Number */}
              <p className="project-number mb-6">{col.number}</p>

              {/* Title */}
              <h3 className="font-syne font-[600] text-xl text-brand-fg mb-4 leading-tight">
                {col.title}
              </h3>

              {/* Body */}
              <p className="body-text mb-8 text-[15px]">{col.body}</p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8 border-t border-brand-border pt-6">
                {col.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;

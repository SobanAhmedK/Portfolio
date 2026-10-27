import { motion } from "framer-motion";
import { experiences } from "../data/experience";

function ExperienceEntry({ exp, index }) {
  return (
    <motion.div
      className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 py-12 md:py-14 border-b border-brand-border last:border-b-0"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Left: meta */}
      <div className="flex md:flex-col gap-4 md:gap-3 md:pt-0.5">
        <div>
          <p className="font-inter text-[11px] font-[500] tracking-[0.15em] uppercase text-brand-coral mb-1">
            {exp.period}
          </p>
          <p className="font-inter text-[11px] font-[300] text-brand-muted tracking-wide">
            {exp.location}
          </p>
        </div>
      </div>

      {/* Right: content */}
      <div>
        {/* Company + role */}
        <div className="mb-5">
          <h3 className="font-syne font-[600] text-xl md:text-2xl text-brand-fg tracking-[-0.02em] leading-tight mb-1">
            {exp.company}
          </h3>
          <p className="font-inter text-[13px] font-[400] text-brand-muted">
            {exp.role}
          </p>
        </div>

        {/* Description */}
        <p className="font-inter text-[14px] font-[300] text-brand-muted leading-relaxed mb-7">
          {exp.description}
        </p>

        {/* Contributions */}
        <ul className="space-y-3">
          {exp.contributions.map((c, i) => (
            <li
              key={i}
              className="flex gap-4 font-inter text-[13px] font-[300] text-brand-muted leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-brand-coral mt-[9px] flex-shrink-0" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-brand-card">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">Experience</p>
          <h2 className="section-heading text-brand-fg">
            From APIs to AI-powered products.
          </h2>
        </motion.div>

        {/* Entries */}
        <div className="border-t border-brand-border mt-12">
          {experiences.map((exp, i) => (
            <ExperienceEntry key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

const featured   = projects.filter((p) => p.featured);
const secondary  = projects.filter((p) => !p.featured);

/* ── Single featured project card ─────────────────────────── */
function FeaturedCard({ project, index }) {
  return (
    <motion.article
      data-cursor="project"
      className="border-b border-brand-border py-12 md:py-16 grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 group"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      {/* Left */}
      <div>
        <p className="project-number mb-3">{project.number}</p>
        <p className="font-inter text-[10px] font-[500] tracking-[0.18em] uppercase text-brand-muted mb-6">
          {project.category}
        </p>
        <h3 className="font-syne font-[600] text-2xl md:text-3xl text-brand-fg leading-tight tracking-[-0.02em] mb-6 group-hover:text-brand-coral transition-colors duration-300">
          {project.title}
        </h3>

        {/* Links */}
        {(project.github || project.live) && (
          <div className="flex flex-wrap gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-inter text-[12px] font-[500] text-brand-muted hover:text-brand-coral transition-colors group/link"
              >
                GitHub
                <ArrowUpRight
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-inter text-[12px] font-[500] text-brand-muted hover:text-brand-coral transition-colors group/link"
              >
                Live Demo
                <ArrowUpRight
                  size={13}
                  className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right */}
      <div>
        <p className="body-text mb-8 text-[15px]">{project.description}</p>
        <ul className="space-y-3">
          {project.highlights.map((h, i) => (
            <li
              key={i}
              className="flex gap-4 font-inter text-[13px] font-[300] text-brand-muted leading-relaxed"
            >
              <span className="w-1 h-1 rounded-full bg-brand-coral mt-[8px] flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

/* ── Secondary project card ──────────────────────────────── */
function SecondaryCard({ project, index }) {
  return (
    <motion.article
      data-cursor="project"
      className="border border-brand-border p-7 md:p-8 group hover:border-brand-coral/30 transition-colors duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <p className="project-number mb-3">{project.number}</p>
      <p className="font-inter text-[10px] font-[500] tracking-[0.18em] uppercase text-brand-muted mb-4">
        {project.category}
      </p>
      <h3 className="font-syne font-[600] text-xl text-brand-fg leading-tight tracking-[-0.02em] mb-4 group-hover:text-brand-coral transition-colors duration-300">
        {project.title}
      </h3>
      <p className="font-inter text-[13px] font-[300] text-brand-muted leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Links */}
      {(project.github || project.live) && (
        <div className="flex flex-wrap gap-4 pt-4 border-t border-brand-border">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-inter text-[12px] font-[500] text-brand-muted hover:text-brand-coral transition-colors"
            >
              GitHub <ArrowUpRight size={12} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-inter text-[12px] font-[500] text-brand-muted hover:text-brand-coral transition-colors"
            >
              Live Demo <ArrowUpRight size={12} />
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

/* ── Section ──────────────────────────────────────────────── */
function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">Selected Work</p>
          <h2 className="section-heading text-brand-fg mb-4">
            Systems built for the real world.
          </h2>
          <p className="body-text max-w-xl">
            A selection of production engineering work spanning AI, education technology,
            cloud infrastructure, and backend systems.
          </p>
        </motion.div>

        {/* Featured 3 */}
        <div className="border-t border-brand-border mt-12">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Secondary 2 */}
        {secondary.length > 0 && (
          <div className="grid md:grid-cols-2 gap-4 mt-12">
            {secondary.map((project, i) => (
              <SecondaryCard key={project.id} project={project} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedProjects;

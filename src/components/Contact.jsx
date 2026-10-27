import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { config } from "../data/config";
import Resume from "../assets/Soban-Ahmed-resume.pdf";

function Contact() {
  return (
    <section id="contact" className="bg-brand-coral py-20 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Label */}
        <motion.p
          className="font-inter text-[10px] font-[600] tracking-[0.2em] uppercase text-brand-bg/70 mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Have a project in mind?
        </motion.p>

        {/* Heading */}
        <motion.h2
          className="font-syne font-[600] text-brand-bg leading-tight tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Let's build something meaningful.
        </motion.h2>

        {/* Description */}
        <motion.p
          className="font-inter text-[15px] md:text-[17px] font-[300] text-brand-bg/75 leading-[1.75] max-w-xl mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Interested in backend engineering, AI-powered products, voice agents, or production
          infrastructure? I'm open to connecting with people who are building ambitious things.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          className="flex flex-wrap items-center gap-6 md:gap-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <a
            href={`mailto:${config.email}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-bg text-brand-fg font-inter font-[600] text-sm tracking-wide hover:bg-brand-bg/90 transition-colors group"
          >
            Email me
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
            />
          </a>

          {/* Secondary links */}
          <div className="flex flex-wrap items-center gap-7">
            <a
              href={config.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm font-[500] text-brand-bg/75 hover:text-brand-bg transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={config.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-sm font-[500] text-brand-bg/75 hover:text-brand-bg transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="font-inter text-sm font-[500] text-brand-bg/75 hover:text-brand-bg transition-colors"
            >
              Resume ↗
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import profilePic from "../assets/pic.jpg";
import Resume from "../assets/Soban-Ahmed-Resume.pdf";

function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">A Little About Me</p>
          <h2 className="section-heading text-brand-fg">
            I like building things that actually work.
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden bg-brand-card border border-brand-border">
              <img
                src={profilePic}
                alt="Soban Ahmed, Full Stack and AI Engineer, Lahore"
                className="w-full aspect-[3/4] object-cover object-top"
                style={{ filter: "grayscale(0.3) contrast(1.05)" }}
                loading="lazy"
              />
              {/* Subtle corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-brand-coral" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="space-y-6 lg:pt-2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="body-text">
              I'm Soban Ahmed, a Full Stack and AI Engineer based in Lahore, Pakistan.
              My work spans the full product, from React and Vue.js frontends, scalable Python
              backends, AI-powered features, and cloud-hosted infrastructure that moves
              beyond prototypes into production.
            </p>
            <p className="body-text">
              I've worked across education technology, applicant tracking systems, retail
              intelligence, voice AI, multi-agent RAG systems, payment workflows, and real-time
              applications. I enjoy owning the full picture from interface and API design
              to data infrastructure, deployment, and the end-user experience.
            </p>
            <p className="body-text">
              I also enjoy learning new AI engineering patterns, exploring system architecture,
              and helping turn ambiguous product requirements into clear technical solutions.
            </p>

            {/* Education callout */}
            <div className="pt-6 border-t border-brand-border">
              <p className="font-inter text-[11px] font-[500] tracking-[0.18em] uppercase text-brand-muted mb-2">
                Education
              </p>
              <p className="font-inter text-[14px] font-[300] text-brand-fg leading-relaxed">
                B.S. Computer Science — University of Management and Technology (UMT), Lahore
              </p>
            </div>

            {/* Resume link */}
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-inter text-sm font-[500] text-brand-muted hover:text-brand-coral transition-colors group"
            >
              Download my resume
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

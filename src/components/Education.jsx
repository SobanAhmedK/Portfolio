import { motion } from "framer-motion";

function Education() {
  return (
    <section id="education" className="py-16 md:py-24 bg-brand-card border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
        >
          <p className="label mb-8">Foundations</p>

          <div className="grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">

            {/* Institution */}
            <div className="bg-brand-card p-7 md:p-8">
              <p className="font-inter text-[10px] font-[500] tracking-[0.18em] uppercase text-brand-muted mb-3">
                2021 – 2025
              </p>
              <h3 className="font-syne font-[600] text-lg text-brand-fg mb-1 leading-tight">
                University of Management and Technology
              </h3>
              <p className="font-inter text-[13px] font-[300] text-brand-muted mb-4">
                B.S. Computer Science · CGPA 3.2+
              </p>
              <p className="font-inter text-[13px] font-[300] text-brand-muted leading-relaxed">
                Strong foundation in algorithms, databases, operating systems, and software engineering
                principles, and applied directly in production systems.
              </p>
            </div>

            {/* Community */}
            <div className="bg-brand-card p-7 md:p-8">
              <p className="font-inter text-[10px] font-[500] tracking-[0.18em] uppercase text-brand-coral mb-3">
                Community
              </p>
              <h3 className="font-syne font-[600] text-lg text-brand-fg mb-1 leading-tight">
                UMT ACM Chapter
              </h3>
              <p className="font-inter text-[13px] font-[300] text-brand-muted mb-4">
                Competition Management Lead
              </p>
              <p className="font-inter text-[13px] font-[300] text-brand-muted leading-relaxed">
                Led competition management, organised LeetCode coaching sessions, and hosted
                programming events, helping peers develop competitive programming skills.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;

import { motion } from "framer-motion";
import { toolkit } from "../data/technologies";

function Toolkit() {
  return (
    <section id="toolkit" className="py-20 md:py-32 bg-brand-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">My Toolkit</p>
          <h2 className="section-heading text-brand-fg">
            The tools behind the work.
          </h2>
        </motion.div>

        {/* Groups */}
        <div className="space-y-0 divide-y divide-brand-border border-y border-brand-border">
          {toolkit.map((group, gi) => (
            <motion.div
              key={group.category}
              className="grid md:grid-cols-[200px_1fr] gap-6 py-7 md:py-8 items-start"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: gi * 0.07 }}
              viewport={{ once: true }}
            >
              {/* Category label */}
              <p className="font-inter text-[11px] font-[500] tracking-[0.18em] uppercase text-brand-muted pt-0.5">
                {group.category}
              </p>

              {/* Items */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    className="font-inter text-[13px] font-[300] text-brand-fg/80 hover:text-brand-fg transition-colors duration-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: gi * 0.06 + ii * 0.03 }}
                    viewport={{ once: true }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const metrics = [
  {
    value:   30,
    suffix:  "%",
    label:   "Lower STT latency",
    context: "Pipecat voice agent — Speak2Talk",
  },
  {
    value:   50,
    suffix:  "%",
    label:   "Lower screening-bot infrastructure costs",
    context: "Twilio media streams vs Daily.co — Speak2Talk",
  },
  {
    value:   90,
    suffix:  "%+",
    label:   "Accuracy in store-data categorisation",
    context: "Django AI RAG pipeline on real-time shelf images — Shams Vision",
  },
  {
    value:   200,
    suffix:  "",
    label:   "Weekly class-session records automated",
    context: "Teacher payroll reconciliation — Speak2Talk",
  },
];

/** Counts up from 0 to `value` once scrolled into view, then stays put. */
function Counter({ value, suffix, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value, delay]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

function Impact() {
  return (
    <section id="impact" className="py-20 md:py-32 bg-brand-card border-y border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="label mb-4">Measurable Impact</p>
          <h2 className="section-heading text-brand-fg">
            Results matter more than buzzwords.
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              className="bg-brand-card p-6 sm:p-7 md:p-9 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
              viewport={{ once: true }}
            >
              {/* Figure */}
              <p
                className="font-syne font-extrabold text-brand-coral leading-none mb-4 tabular-nums whitespace-nowrap"
                style={{ fontSize: "clamp(32px, 4vw, 60px)" }}
              >
                <Counter value={m.value} suffix={m.suffix} delay={i * 0.1} />
              </p>

              {/* Label */}
              <p className="font-inter font-[500] text-sm text-brand-fg leading-snug mb-3">
                {m.label}
              </p>

              {/* Context */}
              <p className="font-inter font-[300] text-[11px] text-brand-muted leading-relaxed">
                {m.context}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-8 font-inter text-[11px] font-[300] text-brand-muted/60 max-w-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          
        </motion.p>
      </div>
    </section>
  );
}

export default Impact;

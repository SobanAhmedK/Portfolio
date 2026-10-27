import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import profilePic from "../assets/Confident Gentleman in Black Suit.png";
import Resume from "../assets/Soban-Ahmed-Resume.pdf";
import ChatBot from "./ChatBot";

/* ── animation presets ─────────────────────────────────────── */
const nameVariant = (delay = 0) => ({
  hidden:  { y: 110, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1], delay },
  },
});

/* Shared style for the giant name text */
const nameStyle = {
  fontSize:      "clamp(52px, 13vw, 220px)",
  lineHeight:    0.82,
  letterSpacing: "-0.05em",
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden bg-brand-bg"
    >

      {/* ── Coral label ─────────────────────────────────────── */}
      <motion.p
        className="pt-[104px] text-center label"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Full Stack · AI Engineer · Pakistan
      </motion.p>

      {/* ════════════════════════════════════════════════════════
          NAME + PORTRAIT — centered in remaining space, normal
          document flow (no absolute positioning), so nothing can
          ever render on top of it and hide it after load.
      ════════════════════════════════════════════════════════ */}
      <div className="flex-1 flex flex-col items-center justify-center py-6">

        {/* ── Desktop: layered SOBAN / portrait / AHMED ── */}
        <div className="hidden lg:flex flex-col items-center">

          {/* SOBAN — z:10, behind portrait */}
          <motion.h1
            className="relative z-10 font-syne font-extrabold uppercase text-brand-fg select-none text-center"
            style={nameStyle}
            variants={nameVariant(0)}
            initial="hidden"
            animate="visible"
          >
            SOBAN
          </motion.h1>

          {/* Portrait — z:20, pulled up to overlap SOBAN's bottom */}
          <motion.img
            src={profilePic}
            alt="Soban Ahmed, Full Stack and AI Engineer"
            className="relative z-20 h-[80vh] w-auto object-contain object-top -mt-[8vw] pointer-events-none"
            style={{ filter: "brightness(0.76)" }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.45, ease: "easeOut" }}
          />

          {/* AHMED — z:30, pulled up to overlap portrait's bottom */}
          <motion.h1
            className="relative z-30 font-syne font-extrabold uppercase text-brand-fg select-none text-center -mt-[15vw]"
            style={nameStyle}
            variants={nameVariant(0.2)}
            initial="hidden"
            animate="visible"
          >
            AHMED
          </motion.h1>
        </div>

        {/* ── Mobile: stacked name, portrait below ── */}
        <div className="lg:hidden flex flex-col items-center">
          <motion.div
            className="text-center select-none"
            variants={nameVariant(0)}
            initial="hidden"
            animate="visible"
          >
            <div className="font-syne font-extrabold uppercase text-brand-fg" style={nameStyle}>
              SOBAN
            </div>
            <div
              className="font-syne font-extrabold uppercase text-brand-fg"
              style={{ ...nameStyle, marginTop: "-0.06em" }}
            >
              AHMED
            </div>
          </motion.div>

          <motion.img
            src={profilePic}
            alt="Soban Ahmed, Full Stack and AI Engineer"
            className="mt-6 h-[32vh] w-auto object-contain object-top"
            style={{ filter: "grayscale(1) contrast(1.08) brightness(0.86)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════
          BOTTOM — positioning statement + CTAs.
          Sits in normal flow below the name/portrait block,
          so it can never overlap or cover it.
      ════════════════════════════════════════════════════════ */}
      <motion.div
        className="relative z-40 px-6 lg:px-10 pt-6 pb-8 lg:pb-10"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.6 }}
      >
        <div className="max-w-[1280px] mx-auto">

          {/* Positioning statement (desktop) */}
          <p className="hidden lg:block body-text max-w-md mb-4  mt-[2vw]">
            I build production software and AI systems that solve real-world problems.
          </p>

          {/* Supporting copy (desktop) */}
          <p className="hidden lg:block font-inter text-[13px] font-[300] leading-relaxed text-brand-muted/70 max-w-lg mb-6">
            From React and Vue.js frontends to scalable Python backends, cloud infrastructure,
            voice agents, and retrieval-augmented generation, I turn complex ideas into
            complete, working products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-5 mb-6">
            <a
              href="#engineering"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("engineering")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-coral text-brand-bg font-inter font-[600] text-sm tracking-wide hover:opacity-90 transition-opacity group"
            >
              Explore my work
              <ArrowRight
                size={15}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </a>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-inter text-sm font-[500] text-brand-muted hover:text-brand-fg transition-colors group"
            >
              Download resume
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 inline-block ml-0.5">
                ↗
              </span>
            </a>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-px h-6 bg-brand-muted/40" />
              <span className="label-muted">Scroll</span>
            </div>
            <span className="hidden lg:block label-muted">Lahore, Pakistan</span>
          </div>

        </div>
      </motion.div>

      {/* AI Chatbot widget (fixed, top-right) */}
      <ChatBot />
    </section>
  );
}

export default Hero;

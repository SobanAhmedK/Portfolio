import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CORAL_FILL = "hsl(8, 92%, 62%)";
const DARK_FILL  = "hsl(0, 0%, 6%)";

/**
 * Coral spring-tracked cursor dot.
 * Desktop (pointer: fine) only — hidden on touch devices.
 * Expands to 64px with "View" label when hovering [data-cursor="project"].
 * Respects prefers-reduced-motion.
 */
function CustomCursor() {
  const [isTouch,     setIsTouch]     = useState(false);
  const [isReduced,   setIsReduced]   = useState(false);
  const [isExpanded,  setIsExpanded]  = useState(false);
  const [isVisible,   setIsVisible]   = useState(false);
  const [isOnContact, setIsOnContact] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springCfg = { stiffness: 280, damping: 22, mass: 0.45 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  useEffect(() => {
    // Touch device: bail out
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }
    // Reduced motion: bail out
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReduced(true);
      return;
    }

    // Hide the system cursor globally
    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      const card = e.target.closest("[data-cursor='project']");
      setIsExpanded(!!card);

      // Contact section has a coral background — swap cursor to a dark
      // fill there so it never blends into the background color.
      const onContact = e.target.closest("#contact");
      setIsOnContact(!!onContact);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover",  onOver);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isTouch || isReduced) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full overflow-hidden"
        animate={{
          width:           isExpanded  ? 64 : 10,
          height:          isExpanded  ? 64 : 10,
          opacity:         isVisible   ? 1  : 0,
          backgroundColor: isOnContact ? DARK_FILL : CORAL_FILL,
        }}
        transition={{
          width:           { type: "spring", stiffness: 380, damping: 28 },
          height:          { type: "spring", stiffness: 380, damping: 28 },
          opacity:         { type: "spring", stiffness: 380, damping: 28 },
          backgroundColor: { duration: 0.15, ease: "easeOut" },
        }}
      >
        {isExpanded && (
          <span
            className={`font-inter text-[10px] font-semibold select-none ${
              isOnContact ? "text-brand-fg" : "text-brand-bg"
            }`}
          >
            View
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}

export default CustomCursor;

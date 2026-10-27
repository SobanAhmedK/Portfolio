import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { mailtoHref } from "../data/config";

const navItems = [
  { name: "Work",        to: "projects"    },
  { name: "Engineering", to: "engineering" },
  { name: "Impact",      to: "impact"      },
  { name: "About",       to: "about"       },
  { name: "Contact",     to: "contact"     },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen,   setIsOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">

          {/* Monogram */}
          <Link
            to="hero"
            smooth
            offset={-72}
            className="font-syne font-extrabold text-2xl text-brand-fg tracking-tight cursor-pointer select-none"
          >
            SA.
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                offset={-72}
                className="font-inter text-[13px] font-[400] text-brand-muted hover:text-brand-fg transition-colors duration-200 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={mailtoHref}
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-brand-coral text-brand-bg font-inter text-[12px] font-[600] tracking-wide hover:opacity-90 transition-opacity"
          >
            Let's connect
          </a>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href={mailtoHref}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-coral text-brand-bg font-inter text-[11px] font-[600] tracking-wide"
            >
              Connect
            </a>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="text-brand-fg"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-brand-bg flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 h-[72px]">
              <span className="font-syne font-extrabold text-2xl text-brand-fg">SA.</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="text-brand-fg"
              >
                <X size={22} />
              </button>
            </div>

            {/* Large nav links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                >
                  <Link
                    to={item.to}
                    smooth
                    offset={-72}
                    className="block font-syne font-[600] text-5xl text-brand-fg hover:text-brand-coral transition-colors duration-200 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom */}
            <div className="px-8 pb-12">
              <a
                href={mailtoHref}
                className="inline-flex items-center px-6 py-3 rounded-full bg-brand-coral text-brand-bg font-inter text-sm font-[600] tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                Let's connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

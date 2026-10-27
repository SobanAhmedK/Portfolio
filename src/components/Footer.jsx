import { Link } from "react-scroll";
import { config } from "../data/config";

const socialLinks = [
  { label: "Email",    href: `mailto:${config.email}`, external: false },
  { label: "GitHub",   href: config.github,            external: true  },
  { label: "LinkedIn", href: config.linkedin,          external: true  },
];

function Footer() {
  return (
    <footer className="bg-brand-foot border-t border-brand-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">

        {/* Main row */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Left: monogram name */}
          <Link
            to="hero"
            smooth
            offset={-72}
            className="font-syne font-extrabold text-xl text-brand-fg tracking-tight cursor-pointer select-none"
          >
            SOBAN AHMED.
          </Link>

          {/* Center: role */}
          <p className="font-inter text-[10px] font-[500] tracking-[0.2em] uppercase text-brand-muted">
            Full Stack &amp; AI Engineer
          </p>

          {/* Right: social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="font-inter text-[12px] font-[400] text-brand-muted hover:text-brand-coral transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-brand-border py-5 text-center">
          <p className="font-inter text-[11px] font-[300] text-brand-muted/60">
            &copy; {new Date().getFullYear()} Soban Ahmed. Built with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { marqueeItems } from "../data/technologies";

/** Full-width continuous marquee of technology names */
function TechnologyMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems]; // seamless loop

  return (
    <div
      id="marquee"
      className="overflow-hidden border-y border-brand-border bg-brand-bg py-5 select-none"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 pr-8 font-inter text-[11px] font-[500] tracking-[0.18em] uppercase text-brand-muted/55 hover:text-brand-muted transition-colors duration-300 whitespace-nowrap"
          >
            {item}
            <span
              aria-hidden="true"
              className="inline-block w-px h-3 bg-brand-border flex-shrink-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default TechnologyMarquee;

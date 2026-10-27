/**
 * Single source of truth for all external URLs, contact info, and identity.
 * Update here to reflect changes across the entire site.
 */
export const config = {
  name:      "Soban Ahmed",
  role:      "Full Stack & AI Engineer",
  location:  "Lahore, Pakistan",
  email:     "ahmedsoban648@gmail.com",
  github:    "https://github.com/SobanAhmedK",
  linkedin:  "https://www.linkedin.com/in/sobanahmedk/",
  portfolio: "https://soban-ahmed-porfolio.vercel.app",
};

/**
 * Plain mailto only. Outlook mishandles "Name <email>" and often
 * shows the address duplicated as "email <email>".
 */
export const mailtoHref = `mailto:${config.email}?subject=${encodeURIComponent("Hello Soban - from your portfolio")}`;

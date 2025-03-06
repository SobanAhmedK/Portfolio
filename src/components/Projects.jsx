import { GitlabIcon as GitHub, ExternalLink } from "lucide-react";

function ProjectCard({ title, description, tags, image, github, demo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm group">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
          >
            <GitHub className="h-5 w-5" />
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Django Polls Application",
      description:
        "Built a full stack polls application following Django's official documentation, implementing features like authentication, authorzation voting, search, results display, and UI enhancements.",
      tags: ["Django", "Bootstrap", "PostgreSQL"],
      image:  "/polls_app.jpg",
      github: "https://github.com/SobanAhmedK/Django-Official-Polls-app",
      demo: "", // Add demo link if available
    },
    {
      title: "Digital Wallet System",
      description:
        "Developed a backend digital wallet that supports transactions, deposits, withdrawals, and currency management using FastAPI and SQL databases.",
      tags: ["FastAPI", "SQL", "React", "PostgreSQL"],
      image: "/Digital_wallet.jpg",
      github: "https://github.com/SobanAhmedK/E-wallet-using-FASTAPI",
      demo: "", // Add demo link if available
    },
    {
      title: "E-Store Platform",
      description:
        "Using DSA and CPP effectively implemented an e-commerce platform with features for buyers and sellers, including product management, shopping cart, order processing, and user authentication.",
      tags: ["C++", "Data Structures", "CSV Handling"],
      image: "/E-store.webp",
      github: "https://github.com/SobanAhmedK/E-store",
      demo: "", // Add demo link if available
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/SobanAhmedK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            View All Projects on GitHub <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

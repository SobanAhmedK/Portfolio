import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Django Polls Application",
    description:
      "Developed and deployed on AWS (Gunicorn + Nginx) pursuing production-level practices and implemented features like Authentication, Authorization, polls creation, voting, searching, pagination, testing, results display, and a friendly UI.",
    tags: ["Django", "Bootstrap", "PostgreSQL"],
    image: "/polls_app.jpg",
    github: "https://github.com/SobanAhmedK/Django-Official-Polls-app",
    live: 1,
  },
  {
    title: "Digital Wallet System",
    description:
      "Developed a backend digital wallet that supports transactions, deposits, withdrawals, and currency management using FastAPI and SQL databases.",
    tags: ["FastAPI", "SQL", "React", "PostgreSQL"],
    image: "/Digital_wallet.jpg",
    github: "https://github.com/SobanAhmedK/E-wallet-using-FASTAPI",
    live: 0,
  },
  {
    title: "E-Store Platform",
    description:
      "Using DSA and CPP effectively implemented an e-commerce platform with features for buyers and sellers, including product management, shopping cart, order processing, and user authentication.",
    tags: ["C++", "Data Structures", "CSV Handling"],
    image: "/E-store.webp",
    github: "https://github.com/SobanAhmedK/E-store",
    live: 0,
  },
  {
    title: "CarParkling OpenCV and Twillio",
    description:
      "The CarParking-OpenCv-Twillio project is designed to monitor parking spaces by detecting empty spots and notifying administrators through an API. It utilizes OpenCV for image processing to identify vacant parking spaces and integrates with Twilio to send alerts to administrators.",
    tags: ["Python", "OpenCv", "Twillio"],
    image: "/parking.jpg",
    github: "https://github.com/SobanAhmedK/CarParking-OpenCv-Twillio",
    live: 0,
  },
  {
    title: "Ai - Domain Name Finder",
    description:
      "Developed an AI-driven NameFinder application that generates business or product name suggestions and verifies domain availability through GoDaddy's API. Implemented in Python , the project emphasizes code quality by incorporating pre-commit hooks and comprehensive test cases.",
    tags: ["Python", "OpenCv", "Twillio"],
    image: "/domain.avif",
    github: "https://github.com/SobanAhmedK/AI---NameFinder-",
    live: 0,
  },
  {
    title: "Food on Wheels - OOPS",
    description:
      "Developed a Restaurant Management System in C++ employing Object-Oriented Programming (OOP) principles. The system features classes for Restaurant, Customer, Rider, and Admin, facilitating functionalities such as menu management, order processing, delivery tracking, and payment handling.",
    tags: ["Python", "OpenCv", "Twillio"],
    image: "/food.jpg",
    github: "https://github.com/SobanAhmedK/OOPS-Project",
    live: 0,
  },
];

function Projects() {
  return (
    <section id="projects" className="py-10 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-0">

          {projects.map((project, index) => (
            <CardContainer key={index} className="inter-var ">
              <CardBody className="bg-gray-50  relative dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[22rem] md:w-[24rem] h-auto rounded-xl p-6 border mb-2">

                <CardItem translateZ={50} className="text-xl font-bold text-neutral-600 dark:text-white">
                  {project.title}
                </CardItem>

                <CardItem as="p" translateZ={60} className="text-neutral-500 text-sm mt-2 dark:text-neutral-300">
                  {project.description}
                </CardItem>

                <CardItem translateZ={100} className="w-full mt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  />
                </CardItem>

                <div className="flex justify-between items-center mt-6">
                  <CardItem translateZ={20} as={Link} to={project.github} target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-medium dark:text-white border border-gray-400 dark:border-white/[0.4] hover:bg-gray-100 dark:hover:bg-gray-700">
                    View Code →
                  </CardItem>

                  {project.live === 1 && <CardItem
                    translateZ={20}
                    as="a"
                    href="https://pollssoft.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 dark:bg-yellow-400 dark:text-black text-white text-xs font-bold hover:bg-blue-700 dark:hover:bg-yellow-500 animate-bounceFast"
                  >
                    🚀 Visit Live
                  </CardItem>}

                </div>
              </CardBody>
            </CardContainer>
          ))}
<div className="flex justify-center items-center col-span-full">
  <a
    href="https://github.com/SobanAhmedK"
    target="_blank"
    rel="noopener noreferrer"
    className="relative text-white text-xl font-bold px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/50 
               transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/50"
  >
    🚀 Explore All Projects →
    <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-lg"></span>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default Projects;

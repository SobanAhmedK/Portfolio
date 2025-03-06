import { Briefcase } from "lucide-react";

function ExperienceItem({ title, company, period, description, technologies }) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="text-xl text-indigo-600 dark:text-indigo-400 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:top-12 sm:w-32">
        {period}
      </div>
      <div className="absolute left-0 top-10 mt-0.5 h-10 w-10 flex items-center justify-center rounded-full bg-indigo-600 text-white sm:left-[8.5rem] shadow-lg">
        <Briefcase className="h-5 w-5" />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sm:ml-20">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{company}</p>
          </div>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Artilence",
      period: "Aug 2024 - Oct 2024",
      description:
        "Collaborated on AI-powered ATS and interview systems using Django, FastAPI, and OpenAI. Developed a student community platform using Golang and WebSockets. Implemented resume parsing, optimized media transfer, and explored RAG solutions with LangChain and vector databases.",
      technologies: ["Django", "FastAPI", "React", "OpenAI", "Golang", "PostgreSQL", "LangChain"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-gray-200">Work Experience</h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 dark:before:via-gray-700 before:to-transparent">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

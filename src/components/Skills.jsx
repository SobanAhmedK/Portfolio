function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "Golang", level: 75 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Django", level: 90 },
    { name: "DRF", level: 90 },
    { name: "React", level: 90 },
    { name: "FastAPI", level: 90 },
    { name: "LangChain", level: 70 },
    { name: "OpenCV", level: 65 },
    { name: "PostgreSQL", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Git & GitHub", level: 90 },
    { name: "REST APIs", level: 90 },
    { name: "Linux", level: 80 },
    { name: "Bash Scripting", level: 70 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-center">My Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-indigo-600 dark:bg-indigo-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

function About() {
  const stats = [
    { label: "Experience", value: "3 months" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "__" },
    { label: "Technologies Mastered", value: "10+" },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
              <b>From Kashmir’s Serenity to Lahore’s Innovation: A Journey of Growth   </b>Transitioning from the serene landscapes of Kashmir to the fast-paced tech hub of Lahore, my journey has been one of continuous learning and transformation. I am student of BSCS from the University of Management and Technology, I have cultivated a strong foundation in computer science, algorithms, databases, and operating systems, which enables me to build scalable and impactful tech solutions. </p>
              <p>My expertise lies in <b>full-stack development, AI-driven applications, and system optimization.</b> I have worked with technologies like <b>Django, FastAPI, React, Golang, and LangChain,</b> developing AI-powered ATS system, real-time applications,and differnt full stack Projects.
              </p>
              <p>
              Beyond coding, I am passionate about solving real-world problems through AI and machine learning, continuously seeking to push the boundaries of innovation. For me, computer science is not just about technology—it’s about creating solutions that improve lives.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                  <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{stat.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


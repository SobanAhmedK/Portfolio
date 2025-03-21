import { motion } from "framer-motion";

function About() {
  const stats = [
    { label: "Experience", value: "3 months" },
    { label: "Projects Completed", value: "10+" },
    { label: "Happy Clients", value: "__" },
    { label: "Technologies Mastered", value: "10+" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <b>From Kashmir’s Serenity to Lahore’s Innovation: A Journey of Growth</b> 
                Transitioning from the serene landscapes of Kashmir to the fast-paced tech hub of Lahore, 
                my journey has been one of continuous learning and transformation. 
                As a BSCS student at the University of Management and Technology, 
                I have built a strong foundation in computer science, algorithms, databases, and operating systems.
              </p>
              <p>
                My expertise lies in <b>full-stack development, AI-driven applications, and system optimization.</b> 
                I have worked with technologies like <b>Django, FastAPI, React, Golang, and LangChain</b>, 
                developing AI-powered ATS systems, real-time applications, and various full-stack projects.
              </p>
              <p>
                Beyond coding, I am passionate about solving real-world problems through AI and machine learning, 
                continuously seeking to push the boundaries of innovation. For me, computer science is not just about 
                technology—it’s about creating solutions that improve lives.
              </p>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="flex-1 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center transform transition duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  {stat.value}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;

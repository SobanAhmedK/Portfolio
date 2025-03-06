import { GitlabIcon as GitHub, Linkedin, Mail, MoveRight, Download, Clipboard } from "lucide-react";
import { useState } from "react";
import profilePic from "../assets/pic.jpg";
import Resume from "../assets/Soban-Ahmed-resume.pdf";

function Hero() {
  const [showEmail, setShowEmail] = useState(false);
  const email = "ahmedsoban648@gmail.com";

  const copyEmail = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  const redirectToGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };

  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-block rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1 text-xl">
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Soban Ahmed</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
            Bridging AI and Full-Stack Development to Create Scalable, Intelligent Solutions.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
              >
                View My Work <MoveRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href={Resume}
                target="_blank"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </div>
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/SobanAhmedK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <GitHub className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sobanahmedk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <div
                className="relative cursor-pointer"
                onMouseEnter={() => setShowEmail(true)}
                onMouseLeave={() => {
                  setTimeout(() => {setShowEmail(false)
                    
                  }, 2000);
                }}
                onClick={redirectToGmail}
              >
                <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" />
                {showEmail && (
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md flex items-center">
                    {email}
                    <button onClick={copyEmail} className="ml-2">
                      <Clipboard className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-indigo-600/20">
              <img
                src={profilePic}
                alt="Soban Ahmed"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

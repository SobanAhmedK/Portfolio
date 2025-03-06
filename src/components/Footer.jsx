import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold">
              <span className="text-indigo-600 dark:text-indigo-400">Soban</span>
              Portfolio
            </span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Soban Ahmed. All rights reserved.
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/SobanAhmedK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sobanahmedk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ahmedsoban648@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


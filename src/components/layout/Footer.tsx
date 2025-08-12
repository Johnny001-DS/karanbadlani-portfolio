import { Mail, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  KB
                </div>
                <span className="ml-2 text-xl font-bold">
                  Karan <span className="text-blue-400">Badlani</span>
                </span>
              </div>
                <p className="mt-2 text-gray-400 max-w-md">
                Passionate about building impactful Data solutions.<br />
                Let&apos;s connect and create something amazing together!
                </p>
            </div>
            
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Quick Links</h3>
                <ul className="flex space-x-3">
                  <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
                  <li><a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a 
                href="mailto:karanbadlani001@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/karan-badlani/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Johnny001-DS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
            
            <div className="text-gray-400 flex items-center text-sm">
              <p>© {new Date().getFullYear()} Karan Badlani</p>
              <span className="mx-2">•</span>
              <p className="flex items-center">
                By Karan Badlani
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NavItem from '@/components/layout/NavItem';
import ThemeToggle from '@/components/layout/ThemeToggle';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ activeSection, setActivePage }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [scrollY, setScrollY] = useState<number>(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
      
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const scrollToSection = (sectionId: string) => {
      setMobileMenuOpen(false);
      
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    const headerClass = `fixed w-full z-50 transition-all duration-300 ${
      scrollY > 10 
        ? 'backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`;
  
    return (
      <nav className={headerClass}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="#" onClick={() => setActivePage('home')} className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  KB
                </div>
                <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Karan <span className="text-gray-800 dark:text-white">Badlani</span>
                </span>
              </div>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center space-x-2">
              <ul className="flex space-x-1">
                <NavItem 
                  text="Home" 
                  active={activeSection === "home"} 
                  onClick={() => scrollToSection("home")}
                  href="#home"
                />
                <NavItem 
                  text="About" 
                  active={activeSection === "about"} 
                  onClick={() => scrollToSection("about")}
                  href="#about"
                />
                <NavItem 
                  text="Skills" 
                  active={activeSection === "skills"} 
                  onClick={() => scrollToSection("skills")}
                  href="#skills"
                />
                <NavItem 
                  text="Projects" 
                  active={activeSection === "projects"} 
                  onClick={() => scrollToSection("projects")}
                  href="#projects"
                />
                <NavItem 
                  text="Experience" 
                  active={activeSection === "experience"} 
                  onClick={() => scrollToSection("experience")}
                  href="#experience"
                />
                <NavItem 
                  text="Contact" 
                  active={activeSection === "contact"} 
                  onClick={() => scrollToSection("contact")}
                  href="#contact"
                />
              </ul>
              <div className="ml-4">
                <ThemeToggle />
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button 
                type="button" 
                className="ml-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 animate-slideDown">
            <ul className="pt-2 pb-3 space-y-1 px-4">
              <NavItem text="Home" active={activeSection === "home"} onClick={() => scrollToSection("home")} href="#home" />
              <NavItem text="About" active={activeSection === "about"} onClick={() => scrollToSection("about")} href="#about" />
              <NavItem text="Skills" active={activeSection === "skills"} onClick={() => scrollToSection("skills")} href="#skills" />
              <NavItem text="Projects" active={activeSection === "projects"} onClick={() => scrollToSection("projects")} href="#projects" />
              <NavItem text="Experience" active={activeSection === "experience"} onClick={() => scrollToSection("experience")} href="#experience" />
              <NavItem text="Contact" active={activeSection === "contact"} onClick={() => scrollToSection("contact")} href="#contact" />
            </ul>
          </div>
        )}
      </nav>
    );
  };

export default Header;
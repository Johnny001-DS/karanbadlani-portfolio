import { ArrowDownCircle } from "lucide-react";
import { useState, useEffect } from "react";

const Hero: React.FC = () => {
    const scrollToAbout = () => {
      const element = document.getElementById('about');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };
    
    // Phrases to cycle through
    const phrases = [
      "Strategic Data Professional",
      "Data Scientist",
      "Data Analyst",
      "AI & Machine Learning Engineer",
      "Data Engineer"
    ];

    const [displayText, setDisplayText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isBlinkingCursor, setIsBlinkingCursor] = useState(true);

    useEffect(() => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      const timeout = setTimeout(() => {
        if (!isDeleting) {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
          
          if (displayText.length === currentPhrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
          
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
          }
        }
      }, isDeleting ? 50 : 100);
      
      return () => clearTimeout(timeout);
    }, [displayText, currentPhraseIndex, isDeleting, phrases]);

    useEffect(() => {
      const cursorInterval = setInterval(() => {
        setIsBlinkingCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(cursorInterval);
    }, []);
  
    return (
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-1/4 w-64 h-64 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-600 opacity-5 blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 z-10">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between relative">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <div className="relative">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  <span className="block">Hi, I&apos;m</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                    Karan Badlani
                  </span>
                </h1>
                
                {/* Typewriter effect replacing static h2 */}
                <div className="mt-4 min-h-[2rem] md:min-h-[2.5rem]">
                  <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 inline">
                    {displayText}
                    <span className={`${isBlinkingCursor ? 'opacity-100' : 'opacity-0'} transition-opacity ml-1`}>|</span>
                  </h2>
                </div>
                
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                  Data Science student at Northeastern University currently working as a Data Science Analyst. I&apos;m passionate about creating intuitive and
                  scalable applications.
                </p>
                
                <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
                  <a 
                    href="#projects"
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    View My Work
                  </a>
                  <a 
                    href="/app/files/KB_DS_Boston.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white dark:bg-gray-800 border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-blue-600 dark:border-blue-400 rounded-tl-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-purple-600 dark:border-purple-400 rounded-br-lg"></div>
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
                  <img 
                    src="/app/images/misc/KB.jpeg"
                    alt="Karan Badlani" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-lg shadow-lg transform -rotate-6"></div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-600 dark:bg-purple-500 rounded-lg shadow-lg transform rotate-12"></div>
              </div>
            </div>
          </div>
          
          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button onClick={scrollToAbout} aria-label="Scroll down">
              <ArrowDownCircle className="text-blue-600 dark:text-blue-400" size={32} />
            </button>
          </div>
        </div>
      </section>
    );
};

export default Hero;
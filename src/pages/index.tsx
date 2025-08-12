import type { NextPage } from 'next';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills'; // Import the new Skills component
import ProjectsSection from '@/components/home/ProjectsSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import Contact from '@/components/home/Contact';
import Footer from '@/components/layout/Footer';
import ProjectDetails from '@/components/projects/ProjectDetails';
import ExperienceDetails from '@/components/experience/ExperienceDetails';
import { Project, Experience } from '@/types';
import AllProjects from '@/components/projects/AllProjects';

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [activePage, setActivePage] = useState<string>("home");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (activePage !== 'home') return;
      
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activePage]);

  // Add custom animation class
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      @keyframes slideDown {
        from { transform: translateY(-10px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-slideDown {
        animation: slideDown 0.3s ease-out;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Karan Badlani - Data Science and ML Portfolio</title>
        <meta name="description" content="Personal portfolio showcasing my projects and skills as a developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header 
          activeSection={activeSection} 
          setActivePage={setActivePage}
        />
        
        {activePage === 'home' && (
          <>
            <main>
              <Hero />
              <About />
              <Skills /> {/* Add the Skills component here */}
              <ProjectsSection 
                onProjectSelect={setSelectedProject} 
                setActivePage={setActivePage}
              />
              <ExperienceSection onExperienceSelect={setSelectedExperience} />
              <Contact />
            </main>
            <Footer />
          </>
        )}
        
        {activePage === 'projects' && (
          <AllProjects 
            setActivePage={setActivePage} 
            onProjectSelect={setSelectedProject}
          />
        )}
        
        {selectedProject && (
          <ProjectDetails 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
        
        {selectedExperience && (
          <ExperienceDetails 
            experience={selectedExperience} 
            onClose={() => setSelectedExperience(null)} 
          />
        )}
      </div>
    </>
  );
};

export default Home;
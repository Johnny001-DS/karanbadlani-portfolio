import { ProjectsSectionProps } from "@/types";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onProjectSelect, setActivePage }) => {
    return (
      <section id="projects" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Featured Projects
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            </div>
            <button 
              onClick={() => setActivePage('projects')}
              className="mt-4 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              View All Projects <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onSelect={onProjectSelect} 
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={() => setActivePage('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Explore All Projects
            </button>
          </div>
        </div>
      </section>
    );
};

export default ProjectsSection
import { ProjectCardProps } from "@/types";
import { ArrowRight } from "lucide-react";
import { getTechIcon } from "../projects/IconCard";

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
      onClick={() => onSelect(project)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/70 dark:to-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      
      {/* Technology Icons Section */}
      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-6 max-w-xs">
          {project.icons.slice(0, 6).map((icon, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 group-hover:scale-110 transition-transform duration-300">
              {getTechIcon(icon, 24)}
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium max-w-16 truncate">
                {icon}
              </span>
            </div>
          ))}
          {project.icons.length > 6 && (
            <div className="flex flex-col items-center space-y-2">
              <div className="w-6 h-6 bg-gray-300 dark:bg-gray-600 rounded-full text-xs flex items-center justify-center font-medium text-gray-700 dark:text-gray-300">
                +{project.icons.length - 6}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">
                more
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs font-medium"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded text-xs font-medium">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <button 
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <button 
          className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          View Project
        </button>
      </div>
    </div>
);

export default ProjectCard;
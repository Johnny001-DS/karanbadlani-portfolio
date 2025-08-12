import { AllProjectsCardProps } from '@/types/index';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { getTechIcon } from '../projects/IconCard';

const AllProjectsCard: React.FC<AllProjectsCardProps> = ({ project, onSelect }) => (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800">
        {/* Technology Icons Grid */}
        <div className="h-full flex items-center justify-center p-6">
          <div className="grid grid-cols-3 gap-4 max-w-xs">
            {project.icons.slice(0, 6).map((icon, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 group-hover:scale-110 transition-transform duration-300">
                {getTechIcon(icon, 20)}
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium max-w-14 truncate">
                  {icon}
                </span>
              </div>
            ))}
            {project.icons.length > 6 && (
              <div className="flex flex-col items-center space-y-1">
                <div className="w-5 h-5 bg-gray-300 dark:bg-gray-600 rounded-full text-xs flex items-center justify-center font-medium text-gray-700 dark:text-gray-300">
                  +{project.icons.length - 6}
                </div>
                <span className="text-xs text-gray-600 dark:text-gray-400 text-center font-medium">
                  more
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Overlay with category and external link */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <span className="text-sm text-white font-medium px-2 py-1 bg-blue-600/80 rounded-full">
                {project.category || 'Web Application'}
              </span>
              <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors">
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
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
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(project);
          }}
        >
          View Details <ArrowRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
);

export default AllProjectsCard;
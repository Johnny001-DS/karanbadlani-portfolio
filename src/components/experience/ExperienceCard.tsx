import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { ExperienceCardProps } from '@/types';

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, onSelect, isActive = false }) => {
    const cardClasses = `relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
      isActive ? 'border-l-4 border-blue-600 dark:border-blue-400' : ''
    }`;
    
    return (
      <div 
        className={cardClasses}
        onClick={() => onSelect(experience)}
      >
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-md overflow-hidden">
              <img 
                src={experience.logo} 
                alt={experience.company} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
            <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{experience.company}</div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
              <Calendar size={14} className="mr-1" /> {experience.period}
              <span className="mx-2">•</span>
              {experience.location}
            </div>
            <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onSelect(experience);
              }}
              className="mt-4 text-blue-600 dark:text-blue-400 flex items-center text-sm font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              View Details <ChevronRight size={14} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default ExperienceCard;
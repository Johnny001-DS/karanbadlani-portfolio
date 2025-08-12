import React from 'react';
import { Calendar } from 'lucide-react';
import { ExperienceDetailsProps } from '@/types';
import { MapPin, Briefcase, Code, Award, MessageSquare } from 'lucide-react';
import { X } from 'lucide-react';

const ExperienceDetails: React.FC<ExperienceDetailsProps> = ({ experience, onClose }) => {
    if (!experience) return null;
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl mx-auto animate-fadeIn">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full bg-gray-100 dark:bg-gray-800 z-10"
            >
              <X size={24} />
            </button>
            
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center">
                    <img 
                      src={experience.logo} 
                      alt={experience.company} 
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{experience.position}</h2>
                  <div className="text-xl text-blue-600 dark:text-blue-400">{experience.company}</div>
                  <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <div className="flex items-center mr-4">
                      <Calendar size={14} className="mr-1" /> {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={14} className="mr-1" /> {experience.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Briefcase size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Responsibilities</h3>
                  </div>
                  <ul className="space-y-2">
                    {experience.details.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Code size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Technologies Used</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.details.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Award size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Key Achievements</h3>
                  </div>
                  <ul className="space-y-2">
                    {experience.details.achievements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {experience.details.testimonial && (
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                    <div className="flex items-center text-gray-900 dark:text-white mb-3">
                      <MessageSquare size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-lg font-semibold">Testimonial</h3>
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">
                      &quot;{experience.details.testimonial.text}&quot;
                    </blockquote>
                    <div className="mt-2 text-right text-gray-600 dark:text-gray-400">
                      — {experience.details.testimonial.author}
                    </div>
                  </div>
                )}
                
                {experience.details.projects && (
                  <div>
                    <div className="flex items-center text-gray-900 dark:text-white mb-3">
                      <Code size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-lg font-semibold">Notable Projects</h3>
                    </div>
                    <ul className="space-y-2">
                      {experience.details.projects.map((project, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExperienceDetails;
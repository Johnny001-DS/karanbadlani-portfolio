import { ExperienceSectionProps } from "@/types";
import { Calendar } from "lucide-react";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { experiences } from "@/data/experience";

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onExperienceSelect }) => {
    return (
      <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Experience
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Timeline line - visible on all screens */}
            <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>
            
            <div className="space-y-12 md:space-y-0">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="relative md:flex md:items-center md:justify-between md:mb-12">
                  {/* Timeline dot - visible on all screens */}
                  <div className="absolute md:left-1/2 left-4 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 z-10"></div>
                  
                  {/* Mobile layout (consistent for all items) */}
                  <div className="block md:hidden pl-12 w-full">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                      <Calendar size={14} className="inline mr-1" /> {experience.period}
                    </div>
                    <div className="font-bold text-xl mb-1">{experience.company}</div>
                    <div className="text-blue-600 dark:text-blue-400 mb-6">{experience.position}</div>
                    <ExperienceCard 
                      experience={experience} 
                      onSelect={onExperienceSelect} 
                    />
                  </div>
                  
                  {/* Desktop layout (alternating) - hidden on mobile */}
                  {index % 2 === 0 ? (
                    <>
                      <div className="hidden md:block md:w-5/12 mb-6 md:mb-0 md:pr-8 md:text-right">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={14} className="inline mr-1" /> {experience.period}
                        </div>
                        <div className="font-bold text-xl mb-1">{experience.company}</div>
                        <div className="text-blue-600 dark:text-blue-400">{experience.position}</div>
                      </div>
                      <div className="hidden md:block md:w-5/12 md:pl-8">
                        <ExperienceCard 
                          experience={experience} 
                          onSelect={onExperienceSelect} 
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:w-5/12 md:pr-8">
                        <ExperienceCard 
                          experience={experience} 
                          onSelect={onExperienceSelect} 
                        />
                      </div>
                      <div className="hidden md:block md:w-5/12 md:pl-8 md:text-left">
                        <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                          <Calendar size={14} className="inline mr-1" /> {experience.period}
                        </div>
                        <div className="font-bold text-xl mb-1">{experience.company}</div>
                        <div className="text-blue-600 dark:text-blue-400">{experience.position}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
};

export default ExperienceSection;
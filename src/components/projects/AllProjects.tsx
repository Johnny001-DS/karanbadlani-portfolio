import { useState } from 'react';
import { AllProjectsProps } from '@/types/index';
import { allProjects } from '@/data/projects';
import { ArrowLeft, Search, Code } from 'lucide-react';
import AllProjectsCard from '@/components/projects/AllProjectsCard';
import FilterButton from '@/components/ui/FilterButton';

const AllProjects: React.FC<AllProjectsProps> = ({ setActivePage, onProjectSelect }) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState<string>('All');
    
    const filters = ['All', 'Data Science', 'GenAI'];
    
    const filteredProjects = allProjects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesFilter = activeFilter === 'All' || (project.category && project.category === activeFilter);
      
      return matchesSearch && matchesFilter;
    });
    
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setActivePage('home')} 
              className="mr-4 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">All Projects</h1>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full md:w-64 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <FilterButton 
                  key={filter}
                  label={filter}
                  active={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                />
              ))}
            </div>
          </div>
          
          {filteredProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <AllProjectsCard 
                  key={project.id} 
                  project={project} 
                  onSelect={onProjectSelect} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Code size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Try adjusting your search or filter to find what you&apos;re looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    );
};

export default AllProjects;
import { useState } from 'react';
import { ProjectDetailsProps } from "@/types";
import { X, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
    const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'gallery'>('overview');
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    
    if (!project) return null;
    
    const navigateImage = (direction: 'prev' | 'next') => {
        if (!project?.details?.gallery) return;
        
        const totalImages = project.details.gallery.length;
        let newIndex;
        if (direction === 'prev') {
            newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        } else {
            newIndex = (currentImageIndex + 1) % totalImages;
        }
        setCurrentImageIndex(newIndex);
        setEnlargedImage(project.details.gallery[newIndex]);
    };
    
    const openEnlargedImage = (image: string, index: number) => {
        setCurrentImageIndex(index);
        setEnlargedImage(image);
    };
    
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>
        
        {/* Modal */}
        <div className="relative min-h-screen flex items-center justify-center p-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-4xl mx-auto animate-fadeIn overflow-hidden">
            {/* Close button */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 rounded-full bg-gray-100 dark:bg-gray-800 z-10"
            >
              <X size={24} />
            </button>
            
            {/* Header */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <div className="w-full h-full object-cover bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 flex items-center justify-center">
                <div className="text-center">
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Tabs */}
            <div className="border-b border-gray-200 dark:border-gray-700">
              <nav className="flex px-6" aria-label="Tabs">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('features')}
                  className={`px-3 py-4 text-sm font-medium border-b-2 ${
                    activeTab === 'features'
                      ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  Features
                </button>
                {project?.details?.gallery && project.details.gallery.length > 0 && (
                  <button
                    onClick={() => setActiveTab('gallery')}
                    className={`px-3 py-4 text-sm font-medium border-b-2 ${
                      activeTab === 'gallery'
                        ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                        : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    Gallery
                  </button>
                )}
              </nav>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Project Overview</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Challenge</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.details.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Solution</h3>
                      <p className="text-gray-700 dark:text-gray-300">{project.details.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Results</h3>
                    <p className="text-gray-700 dark:text-gray-300">{project.details.results}</p>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-100 dark:bg-blue-800 text-gray-800 dark:text-gray-200 rounded-md shadow-md hover:bg-blue-200 dark:hover:bg-blue-700 transition-colors flex items-center"
                    >
                      Source Code <Github size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              )}
              
              {activeTab === 'features' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Key Features</h3>
                  <ul className="space-y-2">
                    {project.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === 'gallery' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.details.gallery.map((image, index) => (
                      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openEnlargedImage(image, index)}>
                        <img 
                          src={image} 
                          alt={`${project.title} screenshot ${index + 1}`} 
                          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Enlarged Image Modal */}
        {enlargedImage && (
          <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-90" onClick={() => setEnlargedImage(null)}>
            <div className="relative w-full h-full flex items-center justify-center p-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setEnlargedImage(null);
                }}
                className="absolute top-4 right-4 p-3 text-white hover:text-gray-300 rounded-full bg-black/70 hover:bg-black/80 transition-colors z-10"
              >
                <X size={28} />
              </button>
              
              {/* Navigation Arrows */}
              {project?.details?.gallery && project.details.gallery.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:text-gray-300 rounded-full bg-black/70 hover:bg-black/80 transition-colors z-10"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 text-white hover:text-gray-300 rounded-full bg-black/70 hover:bg-black/80 transition-colors z-10"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
              
              <img 
                src={enlargedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              {/* Image Counter */}
              {project?.details?.gallery && project.details.gallery.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
                  {currentImageIndex + 1} / {project.details.gallery.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
};

export default ProjectDetails;
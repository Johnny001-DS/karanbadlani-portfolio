import { useState } from 'react';
import { X, Calendar, MapPin, Briefcase, Code, Award, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

interface ClubDetailsProps {
  club: {
    name: string;
    role: string;
    period: string;
    location?: string;
    description: string;
    image: string;
    details: {
      activities: string[];
      skills: string[];
      achievements: string[];
      testimonial?: {
        text: string;
        author: string;
      };
      gallery: string[];
    };
  } | null;
  onClose: () => void;
}

const ClubDetails: React.FC<ClubDetailsProps> = ({ club, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activities' | 'gallery'>('overview');
  const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  if (!club) return null;
  
  const navigateImage = (direction: 'prev' | 'next') => {
    if (!club?.details?.gallery) return;
    
    const totalImages = club.details.gallery.length;
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    } else {
      newIndex = (currentImageIndex + 1) % totalImages;
    }
    setCurrentImageIndex(newIndex);
    setEnlargedImage(club.details.gallery[newIndex]);
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
            <img 
              src={club.image} 
              alt={club.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h2 className="text-3xl font-bold text-white mb-2">{club.name}</h2>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600/80 text-white rounded-full text-sm font-medium">
                  {club.role}
                </span>
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
                onClick={() => setActiveTab('activities')}
                className={`px-3 py-4 text-sm font-medium border-b-2 ${
                  activeTab === 'activities'
                    ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                Activities
              </button>
              {club?.details?.gallery && club.details.gallery.length > 0 && (
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
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Club Overview</h3>
                  <p className="text-gray-700 dark:text-gray-300">{club.description}</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center mb-2">
                      <Calendar size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Period</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{club.period}</p>
                  </div>
                  
                  {club.location && (
                    <div>
                      <div className="flex items-center mb-2">
                        <MapPin size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{club.location}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <Briefcase size={18} className="text-blue-600 dark:text-blue-400 mr-2" />
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Role</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{club.role}</p>
                </div>
                
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Award size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Key Achievements</h3>
                  </div>
                  <ul className="space-y-2">
                    {club.details.achievements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-5 h-5 mt-0.5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                          ✓
                        </span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {club.details.testimonial && (
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-blue-600 dark:border-blue-400">
                    <div className="flex items-center text-gray-900 dark:text-white mb-3">
                      <MessageSquare size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-lg font-semibold">Testimonial</h3>
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">
                      &quot;{club.details.testimonial.text}&quot;
                    </blockquote>
                    <div className="mt-2 text-right text-gray-600 dark:text-gray-400">
                      — {club.details.testimonial.author}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'activities' && (
              <div>
                <div>
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Briefcase size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Activities & Responsibilities</h3>
                  </div>
                  <ul className="space-y-2">
                    {club.details.activities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center text-gray-900 dark:text-white mb-3">
                    <Code size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-lg font-semibold">Skills Developed</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {club.details.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'gallery' && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Club Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {club.details.gallery.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer" onClick={() => openEnlargedImage(image, index)}>
                      <img 
                        src={image} 
                        alt={`${club.name} image ${index + 1}`} 
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
            {club?.details?.gallery && club.details.gallery.length > 1 && (
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
            {club?.details?.gallery && club.details.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-black/70 text-white rounded-full text-sm">
                {currentImageIndex + 1} / {club.details.gallery.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ClubDetails;
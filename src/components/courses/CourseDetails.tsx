import React from 'react';
import { X } from 'lucide-react';

interface CourseDetailsProps {
  course: {
    title: string;
    description: string;
    skillsLearned: string[];
  };
  onClose: () => void;
}

const CourseDetails: React.FC<CourseDetailsProps> = ({ course, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{course.title}</h3>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">{course.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-2">Skills Learned</h4>
            <div className="flex flex-wrap gap-2">
              {course.skillsLearned.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
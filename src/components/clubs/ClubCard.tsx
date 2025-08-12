import { ArrowRight } from "lucide-react";
import { ClubCardProps } from "@/types";

const ClubCard: React.FC<ClubCardProps> = ({ club, onSelect }) => (
  <div 
    className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
    onClick={() => onSelect(club)}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/0 to-blue-600/70 dark:to-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
    
    <img 
      src={club.image} 
      alt={club.name} 
      className="w-full h-48 object-cover object-center"
    />
    
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {club.name}
      </h3>
      
      <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{club.role}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{club.period}</div>
      
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        {club.description}
      </p>
      
      <button 
        className="text-blue-600 dark:text-blue-400 font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(club);
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
          onSelect(club);
        }}
      >
        View Details
      </button>
    </div>
  </div>
);

export default ClubCard;
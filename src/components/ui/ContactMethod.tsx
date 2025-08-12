import { ContactMethodProps } from "@/types";

const ContactMethod: React.FC<ContactMethodProps> = ({ icon, title, value, href, isLink = false }) => (
    isLink ? (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full"
      >
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-lg font-medium text-gray-800 dark:text-white break-words">{value}</p>
        </div>
      </a>
    ) : (
      <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md w-full">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4 flex-shrink-0">
          {icon}
        </div>
        <div className="flex-grow">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
          <p className="text-lg font-medium text-gray-800 dark:text-white break-words">{value}</p>
        </div>
      </div>
    )
);

export default ContactMethod;
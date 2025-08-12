import { NavItemProps } from "@/types";

const NavItem: React.FC<NavItemProps> = ({ text, active, onClick, href }) => (
    <li>
      <a 
        href={href}
        className={`cursor-pointer py-2 px-4 relative group transition-all duration-300 ${
          active ? 'text-blue-600 dark:text-blue-400' : 'text-gray-800 dark:text-gray-300'
        }`} 
        onClick={onClick}
      >
        {text}
        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform origin-left transition-transform duration-300 ${
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-75'
        }`}></span>
      </a>
    </li>
);

export default NavItem;
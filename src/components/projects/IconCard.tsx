// Technology icon mapping - you'll need to install react-icons: npm install react-icons
import { 
  DiPython, DiReact, DiNodejs, DiDocker, DiLinux, DiPostgresql, DiGit
} from 'react-icons/di';
import { 
  SiTypescript, SiNextdotjs, SiUnity, SiPytorch, SiDiscord,
  SiOpenai, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiOpencv,
  SiDotnet, SiSupabase, SiSelenium
} from 'react-icons/si';

import { MdOutlineSoupKitchen } from "react-icons/md";

import { TbBrandCSharp } from "react-icons/tb";

export const getTechIcon = (tech: string, size: number = 24) => {
  const techLower = tech.toLowerCase();
  const iconProps = { size, className: "text-gray-600 dark:text-gray-400" };
  
  switch (techLower) {
    case 'python': return <DiPython {...iconProps} className="text-blue-500" />;
    case 'react': return <DiReact {...iconProps} className="text-blue-400" />;
    case 'typescript': return <SiTypescript {...iconProps} className="text-blue-600" />;
    case 'javascript': return <SiJavascript {...iconProps} className="text-yellow-500" />;
    case 'nodejs': case 'node.js': return <DiNodejs {...iconProps} className="text-green-500" />;
    case 'docker': return <DiDocker {...iconProps} className="text-blue-500" />;
    case 'linux': return <DiLinux {...iconProps} className="text-yellow-600" />;
    case 'postgresql': return <DiPostgresql {...iconProps} className="text-blue-700" />;
    case 'c#': return <TbBrandCSharp {...iconProps} className="text-purple-600" />;
    case 'unity': return <SiUnity {...iconProps} className="text-gray-800 dark:text-white" />;
    case 'pytorch': return <SiPytorch {...iconProps} className="text-red-500" />;
    case 'discord': return <SiDiscord {...iconProps} className="text-indigo-500" />;
    case 'openai api': case 'openai': return <SiOpenai {...iconProps} className="text-green-600" />;
    case 'tailwindcss': case 'tailwind': return <SiTailwindcss {...iconProps} className="text-teal-500" />;
    case 'next.js': case 'nextjs': return <SiNextdotjs {...iconProps} className="text-black dark:text-white" />;
    case 'asp.net': return <SiDotnet {...iconProps} className="text-purple-600" />;
    case 'html5': case 'html': return <SiHtml5 {...iconProps} className="text-orange-500" />;
    case 'css3': case 'css': return <SiCss3 {...iconProps} className="text-blue-500" />;
    case 'opencv': return <SiOpencv {...iconProps} className="text-green-600" />;
    case 'supabase': return <SiSupabase {...iconProps} className="text-green-500" />;
    case 'machine learning': case 'ml': return <SiPytorch {...iconProps} className="text-red-500" />;
    case 'nlp': return <SiPytorch {...iconProps} className="text-purple-500" />;
    case 'discord': return <SiDiscord {...iconProps} className="text-blue-500" />;
    case '3d graphics': case '3d': return <SiUnity {...iconProps} className="text-gray-700 dark:text-gray-300" />;
    case '2d graphics': case '2d': return <SiUnity {...iconProps} className="text-blue-600" />;
    case 'shaders': return <SiUnity {...iconProps} className="text-purple-500" />;
    case 'navmesh': return <SiUnity {...iconProps} className="text-green-600" />;
    case 'game development': return <SiUnity {...iconProps} className="text-gray-800 dark:text-white" />;
    case 'github': case 'git': return <DiGit {...iconProps} className="text-orange-600" />;
    case 'education': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-blue-500 rounded text-white flex items-center justify-center text-xs font-bold`}>📚</div>;
    case 'automation': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-green-500 rounded text-white flex items-center justify-center text-xs font-bold`}>⚙️</div>;
    case 'computer vision': return <SiOpencv {...iconProps} className="text-blue-600" />;
    case 'ocr': return <SiOpencv {...iconProps} className="text-purple-600" />;
    case 'csv': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-green-600 rounded text-white flex items-center justify-center text-xs font-bold`}>📊</div>;
    case 'calendar': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-red-500 rounded text-white flex items-center justify-center text-xs font-bold`}>📅</div>;
    case 'cloud': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-blue-400 rounded text-white flex items-center justify-center text-xs font-bold`}>☁️</div>;
    case 'networking': return <div className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-purple-500 rounded text-white flex items-center justify-center text-xs font-bold`}>🌐</div>;
    case 'selenium': return <SiSelenium {...iconProps} className="text-green-700" />;
    case 'beautiful soup': case 'bs4': return <MdOutlineSoupKitchen {...iconProps} className="text-gray-800 dark:text-white" />;
    default: 
      return (
        <div 
          className={`w-${Math.floor(size/4)} h-${Math.floor(size/4)} bg-gray-300 dark:bg-gray-600 rounded text-xs flex items-center justify-center font-medium text-gray-700 dark:text-gray-300`}
          style={{ width: `${size}px`, height: `${size}px` }}
        >
          {tech.charAt(0).toUpperCase()}
        </div>
      );
  }
};
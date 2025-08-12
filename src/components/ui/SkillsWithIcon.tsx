import React from 'react';
import { 
  Layout, Server, Code, Globe, Database, GitBranch, 
  Box, Terminal, Cloud, FileCode, PenTool, Repeat,
  CheckCircle
} from 'lucide-react';

interface SkillWithIconProps {
  name: string;
}

const SkillWithIcon: React.FC<SkillWithIconProps> = ({ name }) => {
  const getIconForSkill = (skillName: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      // Frontend
      'React': <Repeat className="text-blue-600 dark:text-blue-400" size={16} />,
      'TypeScript': <FileCode className="text-blue-600 dark:text-blue-400" size={16} />,
      'Next.js': <Globe className="text-blue-600 dark:text-blue-400" size={16} />,
      'Tailwind CSS': <PenTool className="text-blue-600 dark:text-blue-400" size={16} />,
      'Redux': <Box className="text-blue-600 dark:text-blue-400" size={16} />,
      
      // Backend
      'Node.js': <Server className="text-purple-600 dark:text-purple-400" size={16} />,
      'Express': <Server className="text-purple-600 dark:text-purple-400" size={16} />,
      'Python': <Terminal className="text-purple-600 dark:text-purple-400" size={16} />,
      'Django': <Layout className="text-purple-600 dark:text-purple-400" size={16} />,
      'MongoDB': <Database className="text-purple-600 dark:text-purple-400" size={16} />,
      'PostgreSQL': <Database className="text-purple-600 dark:text-purple-400" size={16} />,
      
      // Tools
      'Git': <GitBranch className="text-blue-600 dark:text-blue-400" size={16} />,
      'Docker': <Box className="text-blue-600 dark:text-blue-400" size={16} />,
      'AWS': <Cloud className="text-blue-600 dark:text-blue-400" size={16} />,
      'Jest': <CheckCircle className="text-blue-600 dark:text-blue-400" size={16} />,
      'Cypress': <CheckCircle className="text-blue-600 dark:text-blue-400" size={16} />,
    };
    
    return iconMap[skillName] || <Code className="text-gray-500" size={16} />;
  };

  return (
    <div className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
      <span className="mr-1.5">{getIconForSkill(name)}</span>
      {name}
    </div>
  );
};

export default SkillWithIcon;
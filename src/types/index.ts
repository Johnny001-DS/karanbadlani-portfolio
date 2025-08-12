// Types and interfaces
export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    icons: string[];
    category?: string;
    link: string;
    details: {
        challenge: string;
        solution: string;
        features: string[];
        results: string;
        gallery: string[];
    };
}
  
export interface Experience {
    id: number;
    company: string;
    logo: string;
    position: string;
    period: string;
    location: string;
    description: string;
    details: {
        responsibilities: string[];
        technologies: string[];
        achievements: string[];
        testimonial?: {
        text: string;
        author: string;
        };
        projects?: string[];
    };
}

export interface NavItemProps {
    text: string;
    active: boolean;
    onClick: () => void;
    href: string;
}

export interface HeaderProps {
    activeSection: string;
    setActivePage: (page: string) => void;
}

export interface ProjectCardProps {
    project: Project;
    onSelect: (project: Project) => void;
}

export interface ProjectsSectionProps {
    onProjectSelect: (project: Project) => void;
    setActivePage: (page: string) => void;
}

export interface ExperienceCardProps {
    experience: Experience;
    onSelect: (experience: Experience) => void;
    isActive?: boolean;
}

export interface ExperienceSectionProps {
    onExperienceSelect: (experience: Experience) => void;
}

export interface ContactMethodProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    href?: string;
    isLink?: boolean;
}

export interface ProjectDetailsProps {
project: Project | null;
onClose: () => void;
}

export interface ExperienceDetailsProps {
    experience: Experience | null;
    onClose: () => void;
}

export interface FilterButtonProps {
    label: string;
    active: boolean;
    onClick: () => void;
}

export interface AllProjectsProps {
    setActivePage: (page: string) => void;
    onProjectSelect: (project: Project) => void;
}

export interface SkillCategoryProps {
    icon: React.ReactNode;
    title: string;
    skills: string[];
}

export interface FormState {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface AllProjectsCardProps {
    project: Project;
    onSelect: (project: Project) => void;
}

export interface Club {
    name: string;
    role: string;
    period: string;
    location: string;
    description: string;
    image: string;
    details: {
        activities: string[];
        skills: string[];
        achievements: string[];
        gallery: string[];
    };
}

export interface Course {
    title: string;
    description: string;
    skillsLearned: string[];
}

export interface ClubCardProps {
    club: Club;
    onSelect: (club: Club) => void;
}

export interface ClubDetailsProps {
    club: Club | null;
    onClose: () => void;
}

export interface CourseDetailsProps {
    course: Course | null;
    onClose: () => void;
}
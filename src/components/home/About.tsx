import React from 'react';
import { GraduationCap, Award, Star } from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                About Me
                </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3"></div>
                    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                        <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Hi there! I&apos;m Karan, a Data science grad student at Northeastern University with a lifelong curiosity for how things work, especially in the world of tech. From building Electronics in my early years to exploring advanced machine learning concepts today, I&apos;m passionate about understanding how technology can make a tangible impact. This passion has led me to some exciting projects and opportunities, like creating tools to help finanaical community.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Beyond the screen, you can often find me practicing my deadlifts, planning my next travel adventure, enjoying a good cup of tea, getting lost in a movie, or hitting the trails for a hike.
                        </p>
                    </div>
                    </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                    <div className="flex items-center mb-4">
                        <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                        <h3 className="text-2xl font-bold ml-3">Education</h3>
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Northeastern University</h4>
                        <p className="text-blue-600 dark:text-blue-400">Boston, MA</p>
                        <p className="text-gray-700 dark:text-gray-300 mt-1">Master of Science</p>
                        <p className="text-gray-700 dark:text-gray-300">Concentration: Data Science</p>
                        <p className="text-gray-700 dark:text-gray-300">Expected Graduation: December 2025</p>
                    </div>
                    
                    <div className="flex items-center mb-4">
                        <Award className="text-blue-600 dark:text-blue-400" size={24} />
                        <h3 className="text-xl font-bold ml-3">Achievements</h3>
                    </div>
                    
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <Star className="text-blue-600 dark:text-blue-400 mt-1 mr-2" size={16} />
                            <span className="text-gray-700 dark:text-gray-300">NUPL Team meamber</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;
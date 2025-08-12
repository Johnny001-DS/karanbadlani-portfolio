import { Mail, Linkedin, Github, Phone, MapPin } from 'lucide-react';
import ContactMethod from '@/components/ui/ContactMethod';

const Contact: React.FC = () => {
    return (
      <section id="contact" className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I&apos;m currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I&apos;ll get back to you as soon as possible!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ContactMethod 
                icon={<Mail className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Email"
                value="karanbadlani001@gmail.com"
                href="mailto:karanbadlani001@gmail.com"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Linkedin className="text-blue-600 dark:text-blue-400" size={20} />}
                title="LinkedIn"
                value="linkedin.com/in/karan-badlani"
                href="https://www.linkedin.com/in/karan-badlani/"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Github className="text-blue-600 dark:text-blue-400" size={20} />}
                title="GitHub"
                value="github.com/Johnny001-DS"
                href="https://github.com/Johnny001-DS"
                isLink={true}
              />
              
              <ContactMethod 
                icon={<Phone className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Phone"
                value="(617)-992-1174"
              />
              
              <ContactMethod 
                icon={<MapPin className="text-blue-600 dark:text-blue-400" size={20} />}
                title="Location"
                value="Boston, MA"
              />
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;
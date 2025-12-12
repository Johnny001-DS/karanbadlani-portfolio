import React from 'react';
import Head from 'next/head';
import { Github, Linkedin, Mail } from 'lucide-react';

const Maintenance = () => {
  return (
    <>
      <Head>
        <title>Under Maintenance | Karan Badlani</title>
        <meta name="description" content="Site currently under maintenance" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <div className="max-w-md w-full space-y-8">
          {/* Icon or Graphic could go here */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Under Maintenance
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              I&apos;m currently updating my portfolio to bring you a better experience.
              Please check back soon!
            </p>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-500">
              In the meantime, feel free to reach out:
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:karanbadlani001@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://linkedin.com/in/karan-badlani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Johnny001-DS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;

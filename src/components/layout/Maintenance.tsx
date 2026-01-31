import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Github, Linkedin, Mail, Loader2 } from 'lucide-react';

const Maintenance = () => {
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);

  useEffect(() => {
    // Show the message after 2 seconds so the user has time to read it before redirect
    const messageTimer = setTimeout(() => {
      setShowRedirectMessage(true);
    }, 2000);

    // Redirect to GitHub after 5 seconds total (3 seconds after message appears)
    const redirectTimer = setTimeout(() => {
      window.location.href = 'https://github.com/Johnny001-DS';
    }, 5000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Under Maintenance | Karan Badlani</title>
        <meta name="description" content="Site currently under maintenance" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 relative">
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

        {/* Redirect Modal */}
        {showRedirectMessage && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-sm w-full border border-gray-200 dark:border-gray-700 text-center space-y-4">
              <div className="mx-auto bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-fit">
                <Github className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Redirecting to GitHub
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Hey I&apos;m currently revamping my portfolio but let me direct to you my GitHub profile.
                </p>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Redirecting shortly...</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Maintenance;

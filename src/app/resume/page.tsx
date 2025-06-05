'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import personalInfo from '../../utils/personalInfo';

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!personalInfo.resumeUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-lg text-center space-y-6">
          <h1 className="text-3xl font-bold mb-8">Resume</h1>
          <p>Resume is currently unavailable.</p>
          <Link 
            href="/"
            className="inline-block mt-8 border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-6 py-3 rounded-md transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col pt-20 pb-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between gap-4 items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{personalInfo.name}'s Resume</h1>
            {personalInfo.resumeLastUpdated && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Last updated: {personalInfo.resumeLastUpdated}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <a 
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </a>
            <Link 
              href="/"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-md transition-colors text-center"
            >
              Back to Home
            </Link>
          </div>
        </div>
        
        <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          {isClient ? (
            <iframe
              src={`${personalInfo.resumeUrl}#view=FitH`}
              className="w-full h-[calc(100vh-160px)] min-h-[600px] border-0"
              title="Resume"
            />
          ) : (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
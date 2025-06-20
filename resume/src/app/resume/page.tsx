'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import personalInfo from '../../utils/personalInfo';
import { getResumeMetadata, downloadResume } from '../../utils/resumeUtils';

export default function ResumePage() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Use resumeUtils to get structured resume data
  const resumeData = getResumeMetadata();

  // State to track PDF loading errors
  const [pdfError, setPdfError] = useState(false);

  // Handle client-side rendering for the iframe
  useEffect(() => {
    setIsClient(true);
    // Add a small delay to ensure PDF loading animation shows
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Check if PDF file exists
    const checkPdfExists = async () => {
      try {
        const response = await fetch(resumeData.url, { 
          method: 'HEAD',
          // Add cache control to prevent caching issues
          headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          } 
        });
        if (!response.ok) {
          console.error('PDF file not found:', resumeData.url);
          setPdfError(true);
        } else {
          // If the response is OK, we can assume the PDF exists
          console.log('PDF file found:', resumeData.url);
        }
      } catch (error) {
        console.error('Error checking PDF file:', error);
        setPdfError(true);
      }
    };
    
    if (resumeData.url) {
      checkPdfExists();
    } else {
      setPdfError(true);
    }
    
    return () => clearTimeout(timer);
  }, [resumeData.url]);

  if (!resumeData.url) {
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
      <div className="container mx-auto max-w-7xl">
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                </svg>
                <span className="ml-1 text-blue-600 md:ml-2 dark:text-blue-500">Resume</span>
              </div>
            </li>
          </ol>
        </nav>
        
        <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{personalInfo.name}'s Resume</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Last updated: {resumeData.lastUpdated} • {resumeData.pages} pages
            </p>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            <Link 
              href="/resume/dedicated"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
              aria-label="View interactive resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
              </svg>
              Interactive Resume
            </Link>
            <button
              onClick={() => {
                // Show feedback to the user
                const button = document.activeElement as HTMLButtonElement;
                const originalText = button.innerText;
                button.innerText = "Downloading...";
                button.disabled = true;
                
                // Download after a small delay to allow UI to update
                setTimeout(() => {
                  downloadResume(resumeData.url, resumeData.fileName)
                    .then(success => {
                      // Reset button state after download initiated
                      setTimeout(() => {
                        button.innerText = originalText;
                        button.disabled = false;
                      }, 1000);
                    });
                }, 100);
              }}
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-md transition-colors flex items-center gap-2"
              aria-label="Download resume PDF"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download
            </button>
            <a 
              href={resumeData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open in New Tab
            </a>
            <Link 
              href="/"
              className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Main PDF viewer (taking 3/4 of the screen on large displays) */}
          <div className="lg:col-span-3 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {isClient ? (
              <>
                {pdfError ? (
                  <div className="flex flex-col items-center justify-center p-8 h-[calc(100vh-160px)] min-h-[600px]">
                    <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 mb-2">Resume PDF cannot be displayed</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                      The resume file could not be loaded in the viewer. Please use the download button above to view the PDF.
                    </p>
                    <button
                      onClick={() => {
                        // Show feedback to the user
                        const button = document.activeElement as HTMLButtonElement;
                        const originalText = button.innerText;
                        button.innerText = "Downloading...";
                        button.disabled = true;
                        
                        // Download after a small delay to allow UI to update
                        setTimeout(() => {
                          downloadResume(resumeData.url, resumeData.fileName)
                            .then(success => {
                              // Reset button state after download initiated
                              setTimeout(() => {
                                button.innerText = originalText;
                                button.disabled = false;
                              }, 1000);
                            })
                            .catch(() => {
                              // If there's an error, still reset the button
                              setTimeout(() => {
                                button.innerText = originalText;
                                button.disabled = false;
                              }, 1000);
                            });
                        }, 100);
                      }}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-colors flex items-center gap-2"
                      aria-label="Download resume PDF"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                    </button>
                  </div>
                ) : (
                  <div className="relative w-full h-[calc(100vh-160px)] min-h-[600px]">
                    <iframe
                      src={`${resumeData.url}${isLoading ? '' : '#view=FitH'}`}
                      className="w-full h-full border-0"
                      title="Resume"
                      onLoad={() => {
                        // Set a timeout to ensure the PDF has actually loaded
                        // and not just an error page within the iframe
                        setTimeout(() => {
                          setIsLoading(false);
                        }, 500);
                      }}
                      onError={(e) => {
                        console.error('Error loading PDF:', e);
                        setPdfError(true);
                        setIsLoading(false);
                      }}
                    />
                    {isLoading && (
                      <div className="absolute inset-0 flex justify-center items-center bg-white/80 dark:bg-gray-800/80">
                        <div className="flex flex-col items-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Loading resume...</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
              </div>
            )}
          </div>

          {/* Resume sidebar with highlights */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-5 mb-5">
              <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">Key Skills</h2>
              <ul className="space-y-2">
                {resumeData.highlights?.map((skill, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {resumeData.experience && resumeData.experience.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-5 mb-5">
                <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">Experience</h2>
                <div className="space-y-4">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                      <h3 className="font-medium text-lg">{exp.position}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">
                        {exp.startDate} - {exp.endDate || 'Present'} • {exp.location}
                      </p>
                      {exp.responsibilities && exp.responsibilities.length > 0 && (
                        <div className="mt-2 text-sm">
                          <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">Key Responsibilities:</p>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-400">
                            {exp.responsibilities.slice(0, 2).map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resumeData.education && resumeData.education.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-5 mb-5">
                <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">Education</h2>
                <div className="space-y-4">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                      <h3 className="font-medium">{edu.degree} in {edu.field}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {edu.startDate} - {edu.endDate || 'Present'}
                        {edu.location && <span> • {edu.location}</span>}
                      </p>
                      {edu.description && (
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{edu.description}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {resumeData.keywords && resumeData.keywords.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-5 mb-5">
                <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">Key Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {resumeData.keywords.map((keyword, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-5">
              <h2 className="text-xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">Connect With Me</h2>
              <div className="space-y-4">
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Email
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
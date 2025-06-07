'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import personalInfo from '../../../utils/personalInfo';
import { getResumeMetadata, downloadResume } from '../../../utils/resumeUtils';

export default function DedicatedResumePage() {
  const resumeData = getResumeMetadata();
  const [activeTab, setActiveTab] = useState('experience');
  
  // Handle tab switching
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  
  // Global keyboard navigation for tabs
  useEffect(() => {
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (e.altKey) {
        // Alt + 1/2/3 to switch tabs
        if (e.key === '1') {
          setActiveTab('experience');
        } else if (e.key === '2') {
          setActiveTab('education');
        } else if (e.key === '3') {
          setActiveTab('skills');
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyboardNavigation);
    return () => window.removeEventListener('keydown', handleKeyboardNavigation);
  }, []);
  
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-4 md:mb-0 text-sm" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link href="/resume" className="ml-1 text-gray-600 hover:text-blue-500 md:ml-2 dark:text-gray-400 dark:hover:text-blue-400">
                    Resume
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="ml-1 text-blue-600 md:ml-2 dark:text-blue-500">Interactive View</span>
                </div>
              </li>
            </ol>
          </nav>
          
          {/* Quick access to PDF view */}
          <Link 
            href="/resume"
            className="inline-flex items-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md transition-colors text-sm shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            View PDF Resume
          </Link>
        </div>
        {/* Header with name, title, and download button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-1">{personalInfo.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Last updated: {resumeData.lastUpdated}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                // Show feedback to the user
                const button = document.activeElement as HTMLButtonElement;
                const originalText = button.innerText;
                button.innerText = "Downloading...";
                button.disabled = true;
                
                // Download after a small delay to allow UI to update
                setTimeout(() => {
                  downloadResume(resumeData.url, resumeData.fileName);
                  
                  // Reset button state after download initiated
                  setTimeout(() => {
                    button.innerText = originalText;
                    button.disabled = false;
                  }, 1000);
                }, 100);
              }}
              className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label="Download PDF Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            
            <Link
              href="/resume"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2"
              aria-label="View resume as PDF"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View PDF
            </Link>
            
            <Link
              href="/"
              className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 flex items-center gap-2"
              aria-label="Return to homepage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="flex flex-wrap gap-4 md:gap-6 items-center text-sm border-t border-b border-gray-200 dark:border-gray-700 py-3 mb-6 text-gray-700 dark:text-gray-300" aria-label="Contact Information">
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1 hover:text-blue-500 transition-colors" aria-label="Email address">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {personalInfo.email}
          </a>
          <span className="flex items-center gap-1" aria-label="Location">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {personalInfo.location}
          </span>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors" aria-label="GitHub Profile">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            github.com/imkrisk
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500 transition-colors" aria-label="LinkedIn Profile">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
            linkedin.com/in/Kristoffer.Kelly
          </a>
        </div>
        
        {/* Skills Bar / Tags */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Key Skills</h2>
          <div className="flex flex-wrap gap-2">
            {resumeData.highlights.map((skill, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
            
            {resumeData.keywords.slice(0, 5).map((keyword, index) => (
              <span 
                key={`kw-${index}`} 
                className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 text-xs px-3 py-1 rounded-full"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>          {/* Tab Navigation */}
        <div className="mb-2 text-xs text-gray-500 dark:text-gray-400 flex flex-wrap gap-2">
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded" title="Navigate with arrow keys">
            <span className="font-mono">←</span>/<span className="font-mono">→</span> to navigate
          </span>
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded" title="Use Alt+1, Alt+2, Alt+3 as shortcuts">
            <span className="font-mono">Alt+1/2/3</span> for shortcuts
          </span>
        </div>
        
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8" role="tablist" aria-label="Resume sections">
            <button
              onClick={() => handleTabChange('experience')}
              onKeyDown={(e) => {
                // Handle left/right arrows for keyboard navigation between tabs
                if (e.key === 'ArrowRight') {
                  handleTabChange('education');
                } else if (e.key === 'ArrowLeft') {
                  handleTabChange('skills');
                }
              }}
              className={`py-2 px-4 border-b-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all ${
                activeTab === 'experience'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              role="tab"
              aria-selected={activeTab === 'experience'}
              aria-controls="tab-experience"
              id="tab-button-experience"
              tabIndex={activeTab === 'experience' ? 0 : -1}
            >
              <span className="flex items-center">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-1.5">1</span>
                Experience
              </span>
            </button>
            <button
              onClick={() => handleTabChange('education')}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  handleTabChange('skills');
                } else if (e.key === 'ArrowLeft') {
                  handleTabChange('experience');
                }
              }}
              className={`py-2 px-4 border-b-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all ${
                activeTab === 'education'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              role="tab"
              aria-selected={activeTab === 'education'}
              aria-controls="tab-education"
              id="tab-button-education"
              tabIndex={activeTab === 'education' ? 0 : -1}
            >
              <span className="flex items-center">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-1.5">2</span>
                Education
              </span>
            </button>
            <button
              onClick={() => handleTabChange('skills')}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight') {
                  handleTabChange('experience');
                } else if (e.key === 'ArrowLeft') {
                  handleTabChange('education');
                }
              }}
              className={`py-2 px-4 border-b-2 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all ${
                activeTab === 'skills'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
              role="tab"
              aria-selected={activeTab === 'skills'}
              aria-controls="tab-skills"
              id="tab-button-skills"
              tabIndex={activeTab === 'skills' ? 0 : -1}
            >
              <span className="flex items-center">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 w-5 h-5 flex items-center justify-center rounded-full text-xs mr-1.5">3</span>
                Skills Detail
              </span>
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-12">
          {/* Experience Tab Content */}
          {activeTab === 'experience' && (
            <div 
              id="tab-experience" 
              role="tabpanel" 
              aria-labelledby="tab-button-experience"
              tabIndex={0}
            >
              <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{job.position}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">{job.company}</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm md:text-right mt-1 md:mt-0">
                        <p>{job.startDate} - {job.endDate || 'Present'}</p>
                        <p>{job.location}</p>
                      </div>
                    </div>
                    <ul className="list-disc ml-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                      {job.responsibilities?.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Education Tab Content */}
          {activeTab === 'education' && (
            <div
              id="tab-education" 
              role="tabpanel" 
              aria-labelledby="tab-button-education"
              tabIndex={0}
            >
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-8">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4 py-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{edu.degree} in {edu.field}</h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300">{edu.institution}</p>
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm md:text-right mt-1 md:mt-0">
                        <p>{edu.startDate} - {edu.endDate || 'Present'}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                    {edu.description && (
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Skills Detail Tab Content */}
          {activeTab === 'skills' && (
            <div
              id="tab-skills" 
              role="tabpanel" 
              aria-labelledby="tab-button-skills"
              tabIndex={0}
            >
              <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frontend Skills */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Frontend</h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>React</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Next.js</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>TypeScript</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Tailwind CSS</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>CSS/SCSS</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Backend Skills */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Backend</h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Node.js</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Express</span>
                        <span>80%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>MongoDB</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>PostgreSQL</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>GraphQL</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
                
                {/* Tools */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Git</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Docker</span>
                        <span>70%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>AWS</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>Figma</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </li>
                    <li className="flex flex-col">
                      <div className="flex justify-between mb-1">
                        <span>VS Code</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
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
  
  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header with name, title, and download button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Kristoffer K.</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mt-1">Full-Stack Developer</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Last updated: {resumeData.lastUpdated}
            </p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => downloadResume(resumeData.url, resumeData.fileName)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm"
              aria-label="Download PDF Resume"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </button>
            
            <Link
              href="/resume"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-4 py-2 rounded-md transition-colors text-sm"
            >
              View PDF
            </Link>
            
            <Link
              href="/"
              className="border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-4 py-2 rounded-md transition-colors text-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
        
        {/* Contact Info Bar */}
        <div className="flex flex-wrap gap-4 md:gap-6 items-center text-sm border-t border-b border-gray-200 dark:border-gray-700 py-3 mb-6 text-gray-700 dark:text-gray-300">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            imKrisK@icloud.com
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Las Vegas, NV
          </span>
          <a href="https://github.com/imkrisk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
            github.com/imkrisk
          </a>
          <a href="https://linkedin.com/in/Kristoffer.Kelly" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-blue-500">
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
        </div>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
          <nav className="flex space-x-8">
            <button
              onClick={() => handleTabChange('experience')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'experience'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => handleTabChange('education')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'education'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => handleTabChange('skills')}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'skills'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              Skills Detail
            </button>
          </nav>
        </div>
        
        {/* Tab Content */}
        <div className="mb-12">
          {/* Experience Tab Content */}
          {activeTab === 'experience' && (
            <div>
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
            <div>
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
            <div>
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

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import personalInfo from "../../../utils/personalInfo";
import { getResumeMetadata, downloadResume } from "../../../utils/resumeUtils";

export default function DedicatedResumePage() {
  const resumeData = personalInfo.resume;
  const [activeTab, setActiveTab] = useState("experience");

  // Keyboard navigation for tabs
  useEffect(() => {
    const handleKeyboardNavigation = (e: KeyboardEvent) => {
      if (e.altKey) {
        if (e.key === "1") setActiveTab("experience");
        else if (e.key === "2") setActiveTab("education");
        else if (e.key === "3") setActiveTab("skills");
      }
    };
    window.addEventListener("keydown", handleKeyboardNavigation);
    return () => window.removeEventListener("keydown", handleKeyboardNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 py-6 md:py-16 flex flex-col items-center">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-10 px-2 md:px-8 xl:px-16">
        {/* Sidebar */}
        <aside className="lg:w-1/3 w-full flex flex-col gap-8 bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-6 md:p-8 h-fit sticky top-10 self-start border border-blue-100 dark:border-gray-800">
          <div className="flex flex-col items-center text-center gap-3">
            <h1 className="text-4xl font-extrabold text-blue-800 dark:text-blue-200 mb-1 tracking-tight">{personalInfo.name}</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 font-medium">{personalInfo.title}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{personalInfo.description}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">Last updated: {resumeData?.lastUpdated}</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <button
                onClick={() => {
                  const button = document.activeElement as HTMLButtonElement;
                  const originalText = button.innerText;
                  button.innerText = "Downloading...";
                  button.disabled = true;
                  setTimeout(() => {
                    downloadResume(resumeData?.url || '/resume/Professional Resume.pdf', resumeData?.fileName || 'Professional Resume.pdf');
                    setTimeout(() => {
                      button.innerText = originalText;
                      button.disabled = false;
                    }, 1000);
                  }, 100);
                }}
                className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-5 py-2 rounded-lg transition-colors flex items-center gap-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow"
                aria-label="Download PDF Resume"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </button>
              <a
                href={resumeData?.url || "/resume/Professional Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 px-5 py-2 rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2 shadow"
                aria-label="View resume as PDF"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View PDF
              </a>
            </div>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-5 flex flex-col gap-3 mt-3">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-base" aria-label="Email address">
              <span className="font-semibold">Email:</span> {personalInfo.email}
            </a>
            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 text-base" aria-label="Location">
              <span className="font-semibold">Location:</span> {personalInfo.location}
            </span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-base" aria-label="GitHub Profile">
              <span className="font-semibold">GitHub:</span> {personalInfo.github.replace('https://', '')}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors text-base" aria-label="LinkedIn Profile">
              <span className="font-semibold">LinkedIn:</span> {personalInfo.linkedin.replace('https://', '')}
            </a>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 pt-5 mt-3">
            <h2 className="text-lg font-semibold mb-2 text-blue-700 dark:text-blue-300">Key Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resumeData?.highlights?.map((skill, idx) => (
                <span key={idx} className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 text-xs px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
        {/* Main Content */}
        <main className="flex-1 w-full">
          <div className="bg-white/95 dark:bg-gray-900/95 rounded-3xl shadow-2xl p-6 md:p-10 min-h-[600px] border border-blue-100 dark:border-gray-800 flex flex-col gap-8">
            <nav className="flex gap-2 md:gap-6 mb-8 border-b border-gray-200 dark:border-gray-700 pb-2 text-lg font-semibold" role="tablist" aria-label="Resume sections">
              <button
                onClick={() => setActiveTab("experience")}
                className={`py-2 px-6 rounded-t-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === "experience" ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300" : "text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"}`}
                role="tab"
                aria-selected={activeTab === "experience"}
                aria-controls="tab-experience"
                id="tab-button-experience"
                tabIndex={activeTab === "experience" ? 0 : -1}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`py-2 px-6 rounded-t-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === "education" ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300" : "text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"}`}
                role="tab"
                aria-selected={activeTab === "education"}
                aria-controls="tab-education"
                id="tab-button-education"
                tabIndex={activeTab === "education" ? 0 : -1}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`py-2 px-6 rounded-t-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === "skills" ? "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300" : "text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-300"}`}
                role="tab"
                aria-selected={activeTab === "skills"}
                aria-controls="tab-skills"
                id="tab-button-skills"
                tabIndex={activeTab === "skills" ? 0 : -1}
              >
                Skills
              </button>
            </nav>
            <section className="mt-2 md:mt-4 flex-1">
              {activeTab === "experience" && (
                <div id="tab-experience" role="tabpanel" aria-labelledby="tab-button-experience">
                  <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 tracking-tight">Professional Experience</h2>
                  <div className="flex flex-col gap-8">
                    {resumeData?.experience?.map((job, idx) => (
                      <div key={idx} className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-7 shadow border border-blue-100 dark:border-gray-800 md:mx-0 mx-[-8px] md:w-auto w-[calc(100%+16px)]">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                          <div>
                            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200">{job.position}</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{job.company}</p>
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-base md:text-right mt-1 md:mt-0">
                            <p>{job.startDate} - {job.endDate || "Present"}</p>
                            <p>{job.location}</p>
                          </div>
                        </div>
                        <ul className="list-disc ml-5 space-y-2 mt-3 text-gray-700 dark:text-gray-300 text-base">
                          {job.responsibilities?.map((responsibility, i) => (
                            <li key={i}>{responsibility}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "education" && (
                <div id="tab-education" role="tabpanel" aria-labelledby="tab-button-education">
                  <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 tracking-tight">Education</h2>
                  <div className="flex flex-col gap-8">
                    {resumeData?.education?.map((edu, idx) => (
                      <div key={idx} className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-7 shadow border border-blue-100 dark:border-gray-800 md:mx-0 mx-[-8px] md:w-auto w-[calc(100%+16px)]">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-2">
                          <div>
                            <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-200">{edu.degree} in {edu.field}</h3>
                            <p className="text-lg text-gray-700 dark:text-gray-300">{edu.institution}</p>
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-base md:text-right mt-1 md:mt-0">
                            <p>{edu.startDate} - {edu.endDate || "Present"}</p>
                            <p>{edu.location}</p>
                          </div>
                        </div>
                        {edu.description && (
                          <p className="text-gray-700 dark:text-gray-300 mt-2 text-base">{edu.description}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeTab === "skills" && (
                <div id="tab-skills" role="tabpanel" aria-labelledby="tab-button-skills">
                  <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-300 tracking-tight">Technical Skills</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Frontend Skills */}
                    <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-7 shadow border border-blue-100 dark:border-gray-800 flex flex-col h-full">
                      <h3 className="text-xl font-semibold border-b border-blue-200 dark:border-gray-700 pb-2 mb-4 text-blue-900 dark:text-blue-200">Frontend</h3>
                      <ul className="space-y-4">
                        {personalInfo.skills.frontend.map((skill, idx) => (
                          <li key={idx} className="flex flex-col">
                            <div className="flex justify-between mb-1">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Backend Skills */}
                    <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-7 shadow border border-blue-100 dark:border-gray-800 flex flex-col h-full">
                      <h3 className="text-xl font-semibold border-b border-blue-200 dark:border-gray-700 pb-2 mb-4 text-blue-900 dark:text-blue-200">Backend</h3>
                      <ul className="space-y-4">
                        {personalInfo.skills.backend.map((skill, idx) => (
                          <li key={idx} className="flex flex-col">
                            <div className="flex justify-between mb-1">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Tools */}
                    <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-7 shadow border border-blue-100 dark:border-gray-800 flex flex-col h-full">
                      <h3 className="text-xl font-semibold border-b border-blue-200 dark:border-gray-700 pb-2 mb-4 text-blue-900 dark:text-blue-200">Tools</h3>
                      <ul className="space-y-4">
                        {personalInfo.skills.tools.map((skill, idx) => (
                          <li key={idx} className="flex flex-col">
                            <div className="flex justify-between mb-1">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

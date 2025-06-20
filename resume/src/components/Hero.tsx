'use client';

import Image from 'next/image';
import Link from 'next/link';
import personalInfo from '../utils/personalInfo';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-32 md:pb-20 relative bg-gradient-mesh">
      {/* Decorative elements for the background */}
      {/* Enhanced decorative elements with improved visibility and positioning */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-4000"></div>
      
      {/* Additional decorative elements for more depth */}
      <div className="absolute top-40 right-1/4 w-48 h-48 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-5000"></div>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 relative">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500">{personalInfo.name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl">
            {personalInfo.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-lg">
            {personalInfo.description}
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link 
              href="#projects" 
              className="bg-blue-500/80 backdrop-blur-md hover:bg-blue-600/90 text-white font-medium px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              href="#contact" 
              className="glass-effect text-blue-500 hover:bg-blue-500/20 font-medium px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Contact Me
            </Link>
            {(personalInfo.resume?.url || personalInfo.resumeUrl) && (
              <a 
                href={personalInfo.resume?.url || personalInfo.resumeUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect flex items-center gap-2 text-blue-500 hover:bg-blue-500/20 font-medium px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg hover:scale-105"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            )}
          </div>
          <div className="flex gap-4 pt-4">

            {/* Social links */}
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="glass-effect p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all hover:scale-110 hover:shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="glass-effect p-2 rounded-full text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-all hover:scale-110 hover:shadow-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
            
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden glass-effect border-2 border-blue-500/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03]">
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <Image 
                src="/images/profile/profile-pic.jpg"
                alt="Kristoffer K." 
                fill
                sizes="(max-width: 768px) 256px, 320px"
                priority
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import Image from 'next/image';
import personalInfo from '../utils/personalInfo';

const About = () => {
  return (
    <section id="about" className="py-16 relative">
      {/* Decorative elements */}
      <div className="absolute -top-20 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="glass-card p-6 mb-8 inline-block mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            About <span className="text-blue-500">Me</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm a passionate Full-Stack Developer with a focus on creating interactive, functional, and user-friendly applications. With a background in both design and development, I bring a unique perspective to every project.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                My journey in web development began during my studies in Software Engineering, where I discovered my passion for creating user interfaces that are both aesthetically pleasing and functionally efficient.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a balanced lifestyle.
              </p>
              
              <div className="mt-8 space-y-2">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>15+ years of business operations and development experience</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Certificate of Achievements in Software Engineering</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </span>
                  <span>Continuous learner and problem solver</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 glass-effect-strong rounded-full overflow-hidden">
              <Image 
                src="/images/profile/profile-pic.jpg"
                alt={personalInfo.name}
                fill
                sizes="(max-width: 768px) 256px, 320px" 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
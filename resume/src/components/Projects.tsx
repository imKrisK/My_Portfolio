'use client';

import { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';

// My projects data
const projectsData = [
  {
    id: 1,
    title: 'Food Truck Ordering Platform',
    description: 'A full-stack e-commerce dashboard for managing food truck orders, inventory, and customer interactions with real-time analytics.',
    tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    imageUrl: '/images/projects/placeholders/ecommerce.svg',
    liveUrl: 'https://example.com/demo1',
    repoUrl: 'https://github.com/imKrisK/m7-localfoodtruck.git'
  },
  {
    id: 2,
    title: 'Pokemon Online Streaming Platform',
    description: 'A streaming platform for watching Pokémon online auction and purchases, featuring a user-friendly interface and responsive design.',
    tags: ['Next.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS'],
    imageUrl: '/images/projects/placeholders/taskapp.svg',
    liveUrl: 'https://example.com/demo2',
    repoUrl: 'https://github.com/imKrisK/slider.git'
  },
  {
    id: 3,
    title: 'Mobile Food Ordering Platform',
    description: 'A Progressive Web App (PWA) for ordering food on the go, utilizing geolocation to find nearby food trucks and place orders seamlessly.',
    tags: ['React', 'Weather API', 'PWA', 'Geolocation'],
    imageUrl: '/images/projects/placeholders/weather.svg',
    liveUrl: 'https://example.com/demo3',
    repoUrl: 'https://www.figma.com/design/K6vgdRQJNdoRTzOKcG8vIa/Presentation?node-id=0-1&t=22axnoq2LVKkVk2N-1',
    
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const handleImageError = useCallback((id: number) => {
    setImgError(prev => ({ ...prev, [id]: true }));
  }, []);
  
  // Extract all unique tags from projects
  const allTags = useMemo(() => {
    const tags = projectsData.flatMap(project => project.tags);
    return ['all', ...Array.from(new Set(tags))];
  }, []);
  
  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projectsData;
    }
    return projectsData.filter(project => 
      project.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* Decorative elements for the projects section */}
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-3000"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center mb-12">
          <div className="glass-card p-6 mb-4 inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              My <span className="text-blue-500">Projects</span>
            </h2>
          </div>
          <div className="w-20 h-1 bg-blue-500 mt-4 rounded-full"></div>
          <p className="text-center text-gray-600 dark:text-gray-300 mt-4 max-w-2xl glass-effect p-4 rounded-lg">
            A collection of projects that showcase my skills and experience. Each project reflects my ability to solve problems, work with different technologies, and manage projects effectively.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === tag 
                  ? 'bg-blue-500 text-white backdrop-blur-md' 
                  : 'glass-effect text-gray-800 dark:text-gray-200 hover:bg-white/30 dark:hover:bg-gray-800/30'
              }`}
              aria-pressed={activeFilter === tag}
            >
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="glass-card overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden group">
                  {imgError[project.id] ? (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="text-center p-4">
                        <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p>{project.title}</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <Image 
                        src={project.imageUrl}
                        alt={`Screenshot of ${project.title} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                        priority={project.id === 1}
                        loading={project.id === 1 ? "eager" : "lazy"}
                        onError={() => handleImageError(project.id)}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-sm font-medium">View Details</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="p-6 glass-effect rounded-b-lg">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="glass-effect text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:text-blue-300 hover:scale-105 transition-transform"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4 mt-2 border-t border-white/10">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center glass-effect-subtle p-2 rounded-md text-blue-500 hover:text-blue-700 transition-all hover:scale-105"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Live Demo
                    </a>
                    <a 
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-500 hover:text-blue-700 transition-colors"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 py-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="mt-4 text-gray-600 dark:text-gray-300">No projects found with the selected technology.</p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                View All Projects
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;

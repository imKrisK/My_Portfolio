'use client';

import { useState } from 'react';
import Image from 'next/image';
import personalInfo from '../utils/personalInfo';

// Define a type for skill
type Skill = {
  name: string;
  level: number;
};

// Map skills to their icons
const skillIconMap: Record<string, string> = {
  'React': '/icons/react.svg',
  'Next.js': '/icons/nextjs.svg',
  'TypeScript': '/icons/typescript.svg',
  'Tailwind CSS': '/icons/tailwind.svg',
  'CSS/SCSS': '/icons/css.svg',
  'Node.js': '/icons/nodejs.svg',
  'Express': '/icons/express.svg',
  'MongoDB': '/icons/mongodb.svg',
  'PostgreSQL': '/icons/postgresql.svg',
  'GraphQL': '/icons/graphql.svg',
  'Git': '/icons/git.svg',
  'Docker': '/icons/docker.svg',
  'AWS': '/icons/aws.svg',
  'Figma': '/icons/figma.svg',
  'VS Code': '/icons/vscode.svg',
};

// Define category structure
const skillCategories = [
  {
    name: 'Frontend',
    skills: personalInfo.skills.frontend,
  },
  {
    name: 'Backend',
    skills: personalInfo.skills.backend,
  },
  {
    name: 'Tools',
    skills: personalInfo.skills.tools,
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  // Helper function to get icon path safely
  const getSkillIcon = (skillName: string): string => {
    return skillIconMap[skillName] || '';
  };

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-48 -left-24 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Technical Skills
          </span>
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect rounded-full inline-flex p-1">
            {skillCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.name
                    ? 'bg-blue-500 text-white'
                    : 'hover:bg-white/30 dark:hover:bg-gray-800/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories
            .find((category) => category.name === activeCategory)
            ?.skills.map((skill: Skill, index: number) => (
              <div
                key={skill.name}
                className="glass-card p-6 hover:ring-1 hover:ring-blue-400/30 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg glass-effect-subtle flex items-center justify-center mr-4 overflow-hidden">
                    {/* Use icon if available, otherwise use first letter */}
                    {getSkillIcon(skill.name) ? (
                      <div className="relative w-8 h-8">
                        <Image 
                          src={getSkillIcon(skill.name)}
                          alt={skill.name}
                          width={32}
                          height={32}
                        />
                      </div>
                    ) : (
                      <span className="text-xl font-mono text-blue-500">{skill.name.charAt(0)}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="relative mt-4">
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 inline-block">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
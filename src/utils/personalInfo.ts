// Define skill type
type Skill = {
  name: string;
  level: number;
};

// Define skills by category
type SkillsByCategory = {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
};

// Define education entry type
type Education = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
};

// Define work experience entry type
type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  location?: string;
  description?: string;
  responsibilities?: string[];
};

// Define resume type
type Resume = {
  url: string;
  lastUpdated: string;
  pages?: number;
  fileName?: string;
  highlights?: string[];
  education?: Education[];
  experience?: Experience[];
  keywords?: string[];
  sections?: string[];
};

// Define personal info type
type PersonalInfo = {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl?: string; // Optional resume URL (deprecated, use resume object instead)
  resumeLastUpdated?: string; // Optional date (deprecated, use resume object instead)
  resume?: Resume; // Resume information
  skills: SkillsByCategory;
};

const personalInfo: PersonalInfo = {
  name: "Kristoffer K.",
  title: "Full-Stack Developer",
  description: "I build responsive web applications with modern technologies. Passionate about creating interactive user experiences and solving complex problems with clean code.",
  email: "imKrisK@icloud.com",
  location: "Las Vegas, NV",
  github: "https://github.com/imkrisk",
  linkedin: "https://linkedin.com/in/Kristoffer.Kelly",
  resumeUrl: "/resume/Kristoffer_Kelly_Resume.pdf", // Kept for backward compatibility
  resumeLastUpdated: "June 2025", // Kept for backward compatibility
  resume: {
    url: "/resume/Kristoffer_Kelly_Resume.pdf",
    lastUpdated: "June 5, 2025",
    pages: 3,
    fileName: "Kristoffer_Kelly_Resume.pdf",
    highlights: [
      "Full-Stack Development",
      "React & Next.js",
      "TypeScript & JavaScript",
      "Node.js & Express",
      "MongoDB & PostgreSQL"
    ],
    education: [
      {
        institution: "University of Nevada, Las Vegas",
        degree: "Bachelor of Science",
        field: "Computer Science",
        startDate: "2018",
        endDate: "2022",
        location: "Las Vegas, NV"
      }
    ],
    experience: [
      {
        company: "Tech Solutions Inc.",
        position: "Senior Full-Stack Developer",
        startDate: "January 2023",
        endDate: "Present",
        location: "Remote",
        responsibilities: [
          "Developed and maintained web applications using React, Next.js, and Node.js",
          "Designed and implemented RESTful APIs and GraphQL services",
          "Collaborated with cross-functional teams to deliver high-quality software solutions"
        ]
      },
      {
        company: "Web Innovations LLC",
        position: "Frontend Developer",
        startDate: "May 2022",
        endDate: "December 2022",
        location: "Las Vegas, NV",
        responsibilities: [
          "Built responsive user interfaces with React and Tailwind CSS",
          "Implemented state management solutions using Redux and Context API",
          "Optimized application performance and improved user experience"
        ]
      }
    ],
    sections: ["Experience", "Education", "Skills", "Projects", "Certifications"],
    keywords: ["Full-Stack", "Web Development", "React", "Next.js", "Node.js", "TypeScript"]
  },

  // Skills data
  skills: {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'CSS/SCSS', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'GraphQL', level: 65 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
      { name: 'VS Code', level: 90 },
    ],
  },
};

export default personalInfo;
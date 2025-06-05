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

// Define personal info type
type PersonalInfo = {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  skills: SkillsByCategory;
};

const personalInfo: PersonalInfo = {
  name: "Kristoffer K.",
  title: "Full-Stack Developer",
  description: "I build responsive web applications with modern technologies. Passionate about creating beautiful user experiences and solving complex problems with clean code.",
  email: "imKrisK@icloud.com",
  location: "Las Vegas, NV",
  github: "https://github.com/imkrisk",
  linkedin: "https://linkedin.com/in/Kristoffer.Kelly",

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
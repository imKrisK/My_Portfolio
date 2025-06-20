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
  linkedin: "https://linkedin.com/in/kristofferkelly",
  resumeUrl: "/resume/Professional Resume.pdf", // Kept for backward compatibility
  resumeLastUpdated: "June 6, 2025", // Kept for backward compatibility
  resume: {
    url: "/resume/Professional Resume.pdf",
    lastUpdated: "June 6, 2025",
    pages: 2,
    fileName: "Professional Resume.pdf",
    highlights: [
      "Full-Stack Development",
      "React & Next.js",
      "TypeScript & JavaScript",
      "Node.js & Express",
      "MongoDB & PostgreSQL",
      "UI/UX Design"
    ],
    education: [
      {
        institution: "University of Nevada, Las Vegas",
        degree: "Certificate of Achievement",
        field: "Software Engineering",
        startDate: "2024",
        endDate: "2025",
        description: "Focused on software engineering and web development technologies."
      },
      {
        institution: "Institution of Data, Charleston, SC",
        degree: "Professional Accreditation Certificate",
        field: "Software Engineering",
        startDate: "2024",
        endDate: "2025",
        description: "Specialized program covering full-stack web development and software engineering principles."
      },
      {      
        institution: "University of California, San Diego",
        degree: "Specialized Certificate",
        field: "Unix System Administration",
        startDate: "2012",
        endDate: "2013",
        description: "Completed a specialized certificate program in Unix System Administration, focusing on system management and network administration skills.",
    },
    {      
        institution: "SDCE, San Diego, CA",
        degree: "Certificate of Achievement",
        field: "Web Servicer Maintenance & Security",
        startDate: "2011",
        endDate: "2012",
        description: "Completed a certificate program in Web Servicer Maintenance & Security, focusing on web server management, security protocols, and best practices for maintaining secure web applications.",
    },
      ],
    experience: [
      {
        company: "RDSolutions, Glen Allen, VA",
        position: "Resarch Associate",
        startDate: "2024",
        endDate: "current",
        location: "Las Vegas, NV",
        responsibilities: [
          "Responsible for accurately collecting and managing pricing information within a retail environment.",
          "Operate point-of-sale systems to scan items and transmit data via the company application.",
          "Provide support to managers in all operational tasks.",
          "Assist in field operations, including data collection and reporting, and maintain communication between the field and other stakeholders.",
          "Utilize mobile applications and technology to streamline data collection and reporting processes.",
          "Ensure data accuracy and integrity through meticulous review and validation of collected information.",
        ]
      },
      {
        company: "CO2 Monitoring, LLC",
        position: "Permit Specialist",
        startDate: "2021",
        endDate: "2023",
        location: "Las Vegas, NV",
        responsibilities: [
          "Effectively communicate with various state building divisions, fire departments, and the Adjuring Home Jurisdiction regarding the standard procedure for obtaining permits for minor mechanical installations, such as bulk CO2 tanks and the company’s patented monitoring system.",
          "Schedule field technicians to perform draft drawings of the store layout and the locations of objects, including the CO2 tank and the rooms where the monitoring system will be installed.",
          "Obtain copies of the office drawings and recreate the floor plan using Visio Studio software.",
          "Perform data entry, including completing online permit applications via jurisdiction websites and submitting both floor plans and permit applications through online portals. Communicate effectively with building and fire officials who require additional information. Submit and complete payments.",
          "Prepare field technicians for installation projects by assembling a copy of the approved floor plan, which is sealed by the building and/or fire district, along with a permit that will be posted near the construction area.",
          "Perform follow-up with field technicians during installation periods and project completions.",
          "Manage company databases, including approved floor plans and permits, obtained from the jurisdiction’s portal. Maintain a comprehensive record of approved floor plans and permits in both a physical and virtual filing system.",
        ]
      },
      {
        company: "Portfolio Recovery Associates, LLC",
        position: "Operations Manager",
        startDate: "2017",
        endDate: "2021",
        location: "San Diego, CA",
        responsibilities: [
          "Exhibited professionalism to clients, attorneys, and managers.",
          "Conducted managerial meetings on daily operations and high-volume projects..",
          "Conducted interviews and managed hiring processes with Human Resource.",
          "Performed in-depth data analysis using advanced Excel to identify and fix process inefficiencies in 5+ departments.",
          "Partnered with cross-functional teams for process improvement.",
          "Coached 5+ teams to eliminate bottlenecks and boost operational efficiency."
        ]
      },
      {
        company: "Portfolio Recovery Associates, LLC",
        position: "Team Lead",
        startDate: "2014",
        endDate: "2017",
        location: "San Diego, CA",
        responsibilities: [
          "Where I held diverse roles such as Team Lead, Paralegal, Summon & Complaint, and E-file Clerk.",
          "My responsibilities encompassed assisting managers, collaborating on team development, overseeing teams, and ensuring the accuracy of legal documents.",
          "Prior to this, I held the position of Media Clerk, where I managed incoming mail and office documents."

        ]
      }
    ],
    sections: ["Experience", "Education", "Skills", "Projects", "Certifications"],
    keywords: ["Full-Stack", "Web Development", "React", "Next.js", "Node.js", "TypeScript", "Responsive Design"]
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
      { name: 'GitHub', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'AWS', level: 65 },
      { name: 'Figma', level: 75 },
      { name: 'Bravo Studio & Vision', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Visio Studio', level: 75 },
      { name: 'Slack', level: 80 },

    ],
  },
};

export default personalInfo;
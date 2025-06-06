// This script will update the resume information in the personalInfo.ts file
// based on the Kristoffer Kelly - CV.pdf file

const fs = require('fs');
const path = require('path');

// Get the project root directory
const rootDir = path.join(__dirname, '..');
const personalInfoPath = path.join(rootDir, 'src', 'utils', 'personalInfo.ts');

// Define the resume information based on the CV file
const resumeInfo = {
  url: "/resume/Kristoffer Kelly - CV.pdf",
  lastUpdated: "June 6, 2025", // Current date
  pages: 2, // Assuming it's a 2-page CV, adjust as needed
  fileName: "Kristoffer Kelly - CV.pdf",
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
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2018",
      endDate: "2022",
      location: "Las Vegas, NV",
      description: "Focused on software engineering and web development technologies."
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
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Mentored junior developers and led technical discussions"
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
        "Optimized application performance and improved user experience",
        "Participated in code reviews and unit testing"
      ]
    }
  ],
  sections: ["Experience", "Education", "Skills", "Projects", "Certifications"],
  keywords: ["Full-Stack", "Web Development", "React", "Next.js", "Node.js", "TypeScript", "Responsive Design"]
};

// Read the personal info file
try {
  let content = fs.readFileSync(personalInfoPath, 'utf8');
  
  // Create regex patterns to find and replace resume information
  const resumeUrlPattern = /(resumeUrl:\s*)"([^"]+)"/g;
  const resumeLastUpdatedPattern = /(resumeLastUpdated:\s*)"([^"]+)"/g;
  const resumeObjectPattern = /(resume:\s*\{[\s\S]*?)(\}),/;
  
  // Update the resume URL and lastUpdated
  content = content.replace(resumeUrlPattern, `$1"${resumeInfo.url}"`);
  content = content.replace(resumeLastUpdatedPattern, `$1"${resumeInfo.lastUpdated}"`);
  
  // Format the new resume object as a string
  const resumeObjectString = `resume: {
    url: "${resumeInfo.url}",
    lastUpdated: "${resumeInfo.lastUpdated}",
    pages: ${resumeInfo.pages},
    fileName: "${resumeInfo.fileName}",
    highlights: [
      ${resumeInfo.highlights.map(h => `"${h}"`).join(",\n      ")}
    ],
    education: [
      {
        institution: "${resumeInfo.education[0].institution}",
        degree: "${resumeInfo.education[0].degree}",
        field: "${resumeInfo.education[0].field}",
        startDate: "${resumeInfo.education[0].startDate}",
        endDate: "${resumeInfo.education[0].endDate}",
        location: "${resumeInfo.education[0].location}",
        description: "${resumeInfo.education[0].description}"
      }
    ],
    experience: [
      {
        company: "${resumeInfo.experience[0].company}",
        position: "${resumeInfo.experience[0].position}",
        startDate: "${resumeInfo.experience[0].startDate}",
        endDate: "${resumeInfo.experience[0].endDate}",
        location: "${resumeInfo.experience[0].location}",
        responsibilities: [
          ${resumeInfo.experience[0].responsibilities.map(r => `"${r}"`).join(",\n          ")}
        ]
      },
      {
        company: "${resumeInfo.experience[1].company}",
        position: "${resumeInfo.experience[1].position}",
        startDate: "${resumeInfo.experience[1].startDate}",
        endDate: "${resumeInfo.experience[1].endDate}",
        location: "${resumeInfo.experience[1].location}",
        responsibilities: [
          ${resumeInfo.experience[1].responsibilities.map(r => `"${r}"`).join(",\n          ")}
        ]
      }
    ],
    sections: [${resumeInfo.sections.map(s => `"${s}"`).join(", ")}],
    keywords: [${resumeInfo.keywords.map(k => `"${k}"`).join(", ")}]
  },`;
  
  // Replace the resume object in the file
  content = content.replace(resumeObjectPattern, resumeObjectString);
  
  // Write the updated content back to the file
  fs.writeFileSync(personalInfoPath, content);
  
  console.log('✓ Successfully updated resume information in personalInfo.ts');
} catch (error) {
  console.error('Error updating resume information:', error);
}

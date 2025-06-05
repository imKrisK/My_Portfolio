/**
 * This script creates simple SVG icons for the skills section
 * You can replace these with actual icons downloaded from sources like:
 * - https://simpleicons.org/
 * - https://devicon.dev/
 */

const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '../public/icons');

// Ensure the directory exists
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

// Helper function to create a simple colored SVG icon with text
function createSimpleIcon(name, color) {
  const initial = name.charAt(0).toUpperCase();
  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
    <rect width="100" height="100" rx="10" fill="${color}25" />
    <text x="50" y="50" font-family="Arial, sans-serif" font-size="40" text-anchor="middle" dominant-baseline="central" fill="${color}">${initial}</text>
  </svg>`;
  
  fs.writeFileSync(path.join(ICONS_DIR, `${name.toLowerCase()}.svg`), svgContent);
  console.log(`Created icon for ${name}`);
}

// Create icons for common technologies in our skills section
const skillIcons = [
  { name: 'react', color: '#61DAFB' },
  { name: 'nextjs', color: '#000000' },
  { name: 'typescript', color: '#3178C6' },
  { name: 'tailwind', color: '#38B2AC' },
  { name: 'css', color: '#1572B6' },
  { name: 'nodejs', color: '#339933' },
  { name: 'express', color: '#000000' },
  { name: 'mongodb', color: '#47A248' },
  { name: 'postgresql', color: '#336791' },
  { name: 'graphql', color: '#E10098' },
  { name: 'git', color: '#F05032' },
  { name: 'docker', color: '#2496ED' },
  { name: 'aws', color: '#FF9900' },
  { name: 'figma', color: '#F24E1E' },
  { name: 'vscode', color: '#007ACC' },
];

// Create all icons
skillIcons.forEach(skill => createSimpleIcon(skill.name, skill.color));

console.log(`Created ${skillIcons.length} icons in ${ICONS_DIR}`);

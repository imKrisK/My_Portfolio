// This script ensures that the resume files are properly placed in the public directory
// for access via the website

const fs = require('fs');
const path = require('path');

// Paths
const rootDir = path.resolve(__dirname, '..');
const publicResumeDir = path.join(rootDir, 'public', 'resume');
const srcResumeDir = path.join(rootDir, 'resume');

// Ensure the public resume directory exists
if (!fs.existsSync(publicResumeDir)) {
  console.log('Creating public resume directory...');
  fs.mkdirSync(publicResumeDir, { recursive: true });
}

// Copy resume files from /resume to /public/resume
try {
  const files = fs.readdirSync(srcResumeDir);
  files.forEach(file => {
    if (file.endsWith('.pdf')) {
      const srcPath = path.join(srcResumeDir, file);
      const destPath = path.join(publicResumeDir, file);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} to public/resume/`);
    }
  });
  console.log('Resume files successfully copied to public directory');
} catch (error) {
  console.error('Error copying resume files:', error);
}

// A simple script to verify PDF files exist
const fs = require('fs');
const path = require('path');

// Get the project root directory (one level up from the scripts directory)
const rootDir = path.join(__dirname, '..');

// Paths to check
const paths = [
  path.join(rootDir, 'public', 'resume', 'Kristoffer Kelly - CV.pdf'),
  path.join(rootDir, 'public', 'resume', 'Kristoffer_Kelly_Resume.pdf'),
  path.join(rootDir, 'resume', 'Kristoffer_Kelly_Resume.pdf')
];

// Check each path
paths.forEach(filePath => {
  try {
    const stats = fs.statSync(filePath);
    console.log(`✓ ${filePath} exists (${(stats.size / 1024).toFixed(2)} KB)`);
  } catch (error) {
    console.log(`✗ ${filePath} not found or inaccessible`);
  }
});

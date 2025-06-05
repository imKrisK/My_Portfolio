# Project Images

This directory contains the images for your portfolio projects. The current files are placeholders - you should replace them with screenshots of your actual projects.

## Requirements & Guidelines

- **Optimal Dimensions**: 1200×675px (16:9 aspect ratio)
- **Format**: JPEG or PNG (JPEG recommended for photos, PNG for UI screenshots)
- **File Size**: Keep under 500KB for better performance
- **Naming Convention**: Use descriptive names like `project-name.jpg` instead of `image1.jpg`

## Tips for Great Project Images

1. **Use High-Quality Screenshots**:
   - For websites/apps: Use full-page screenshots or feature highlights
   - For mobile apps: Use device mockups (iPhone/Android frames)
   - For other projects: Use diagrams or relevant visuals

2. **Edit Your Images**:
   - Crop to focus on the most important parts
   - Adjust brightness/contrast if needed
   - Consider adding a subtle border or drop shadow

3. **Showcase Your Best Features**:
   - Highlight the most innovative or visually appealing parts
   - Consider a collage of multiple features for complex projects

## Image Formats to Include

For each project, consider preparing the following images:

1. `project-name.jpg` - Main image for the project card
2. `project-name-detail-1.jpg` - Additional images for project details (if you implement a modal or details page)
3. `project-name-detail-2.jpg` - More detailed views

## Adding Images to Your Projects

After adding your images here, update the `projectsData` array in `src/components/Projects.tsx` with the correct file paths:

```typescript
const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description...',
    tags: ['React', 'Node.js', 'MongoDB'],
    imageUrl: '/images/projects/your-project-name.jpg', // Update this path
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/project-repo'
  },
  // Additional projects...
];
```

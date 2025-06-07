# Resume Page Implementation Guide

This document explains how the resume feature is implemented in your Next.js portfolio.

## Overview

The resume functionality consists of two main components:

1. **PDF Resume View** - A page that displays your resume as a PDF file
2. **Interactive Resume View** - A dedicated page that displays your resume content as an interactive HTML page

Both views share the same underlying data structure defined in `personalInfo.ts`.

## Key Components

### 1. Resume Data Structure

The resume data is structured in `src/utils/personalInfo.ts` with the following fields:

```typescript
type Resume = {
  url: string;            // Path to the PDF file
  lastUpdated: string;    // When the resume was last updated
  pages?: number;         // Number of pages in the resume
  fileName?: string;      // Filename of the PDF
  highlights?: string[];  // Key skills/highlights
  education?: Education[];// Education history
  experience?: Experience[];// Work experience
  keywords?: string[];    // Important keywords
  sections?: string[];    // Sections in the resume
};
```

### 2. PDF Viewer

The PDF is displayed using an iframe that loads the PDF file from the public directory. The implementation includes:

- Client-side detection to only render the iframe when in the browser
- Loading indicator while the PDF is being loaded
- Error handling for cases where the PDF cannot be displayed
- Fallback UI if the PDF fails to load

### 3. Resume Data Display

The sidebar in the PDF view displays information from your resume data:
- Key skills/highlights
- Work experience with responsibilities
- Education history
- Keywords related to your skills
- Contact information

### 4. Interactive HTML Resume

The dedicated HTML resume page (`/src/app/resume/dedicated/page.tsx`) provides an interactive view of your resume with:

- Tabbed interface for experience, education, and skills
- Responsive design for all device sizes
- Visual representation of skills with progress bars
- Detailed work experience and education history
- Download PDF option for offline access

### 5. Resume File Management

A script (`scripts/setup-resume.js`) ensures that your resume file is properly copied to the public directory for web access. This script:

1. Checks if the public resume directory exists, creates it if needed
2. Copies the PDF from the `/resume` directory to `/public/resume`
3. Logs success or failure messages

## How to Update Your Resume

### Updating the PDF File

1. Place your updated resume PDF (named `Kristoffer Kelly - CV.pdf`) in the `/resume` directory
2. Run `npm run setup-resume` to copy it to the public directory
3. Run `npm run update-resume-info` to automatically update the resume data in `personalInfo.ts`

### Updating Resume Content Manually

If you need to make specific changes to the resume data:
1. Edit the `resume` object in `personalInfo.ts`
2. Adjust fields like experience, education, or skills as needed

### Customizing the Interactive View

To customize the interactive resume view:
1. Edit `/src/app/resume/dedicated/page.tsx`
2. Adjust the layout, tabs, or styling as needed
3. Make sure any new fields are also added to the data structure in `personalInfo.ts`

## Navigation

The website provides several ways to access the resume:

1. **Navbar** - Clickable dropdown menu with options for PDF View, Interactive View, and Download
   - Uses state-based toggle for better accessibility and cross-browser compatibility
   - Closes when clicking outside or selecting an option
2. **Hero Section** - Direct link to download the resume
3. **Cross-navigation** - Links between PDF and Interactive views

## Troubleshooting

If the resume functionality doesn't work properly:

### PDF View Issues
1. Verify the PDF file exists in `/public/resume/`
2. Check that the path in personalInfo.ts is correct
3. Try different browsers (Chrome usually has the best PDF support)
4. Use the "Download" button as a fallback

### Interactive View Issues
1. Check that all required data is properly defined in `personalInfo.ts`
2. Ensure that the experience, education, and skills data structures are complete
3. Try clearing your browser cache and reloading

### File Management Issues
1. Run `npm run check-pdfs` to verify that all required PDF files exist
2. Ensure that the scripts have proper execute permissions
3. Try running `npm run setup-resume` manually

## Technical Implementation

The resume functionality uses:

### PDF View
- Client-side rendering for the PDF viewer
- Data from personalInfo.ts for the sidebar content
- Helper functions from resumeUtils.ts for metadata and downloads
- Error handling to gracefully manage PDF loading issues

### Interactive View
- Tabbed interface for different sections of the resume
- Dynamic rendering of skills with progress bars
- Responsive design using Tailwind CSS
- Shared data structure with the PDF view

### Common Features
- Responsive design that works well on mobile and desktop
- Consistent styling and branding
- Cross-navigation between views
- Centralized data management

## Scripts Reference

- `npm run setup-resume` - Copies resume PDFs to public directory
- `npm run update-resume-info` - Updates resume data in personalInfo.ts
- `npm run check-pdfs` - Verifies that all required PDF files exist

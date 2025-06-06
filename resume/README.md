# Resume Directory

This directory contains your resume PDF file that will be displayed on your portfolio website.

## How to Update Your Resume

1. Place your updated resume PDF in this directory with the name `Kristoffer Kelly - CV.pdf`
2. Run `npm run setup-resume` to copy it to the public directory
3. Alternatively, you can run `npm run update-resume-info` to automatically update the resume information in `personalInfo.ts`

## Important Notes

- Make sure your PDF is properly formatted for web viewing
- Keep the file size reasonable (less than 5MB)
- The file will be automatically copied to the public directory during the build process
- If you rename the file, make sure to update the `resumeUrl`, `resume.url`, and `resume.fileName` fields in `src/utils/personalInfo.ts`
- The `scripts/setup-resume.js` script will automatically copy all PDF files from this directory to the public/resume directory
- The `scripts/update-resume-info.js` script will update the personalInfo.ts file with the latest resume information

## Resume Fields

You can update the following information in `src/utils/personalInfo.ts`:

- `lastUpdated`: When you last updated your resume
- `pages`: Number of pages in your resume
- `fileName`: The filename of your resume PDF
- `highlights`: Key skills to highlight
- `education`: Your educational background
- `experience`: Your work experience
- `sections`: Primary sections in your resume
- `keywords`: Important keywords related to your skills

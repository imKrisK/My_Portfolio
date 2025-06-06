import personalInfo from './personalInfo';

/**
 * Get the resume URL from personalInfo
 * @returns The URL to the resume file
 */
export const getResumeUrl = (): string => {
  return personalInfo.resume?.url || personalInfo.resumeUrl || '';
};

/**
 * Get the resume metadata from personalInfo
 * @returns Object containing resume metadata
 */
export const getResumeMetadata = () => {
  const resumeData = personalInfo.resume || {
    url: personalInfo.resumeUrl || '',
    lastUpdated: personalInfo.resumeLastUpdated || '',
    pages: 0
  };

  return {
    url: resumeData.url,
    lastUpdated: resumeData.lastUpdated,
    pages: resumeData.pages || 0,
    fileName: resumeData.fileName || resumeData.url.split('/').pop() || '',
    highlights: resumeData.highlights || [],
    sections: resumeData.sections || [],
    keywords: resumeData.keywords || [],
    education: resumeData.education || [],
    experience: resumeData.experience || []
  };
};

/**
 * Check if the resume is available
 * @returns True if the resume is available
 */
export const isResumeAvailable = (): boolean => {
  return !!(personalInfo.resume?.url || personalInfo.resumeUrl);
};

/**
 * Format a date range for display
 * @param startDate The start date
 * @param endDate The end date (optional)
 * @returns Formatted date range string
 */
export const formatDateRange = (startDate: string, endDate?: string): string => {
  return `${startDate} - ${endDate || 'Present'}`;
};

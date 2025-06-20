import personalInfo from './personalInfo';

/**
 * Get the resume URL from personalInfo
 * @returns The URL to the resume file
 */
export const getResumeUrl = (): string => {
  return personalInfo.resume?.url || personalInfo.resumeUrl || '';
};

/**
 * Trigger resume download programmatically
 * @param url URL of the resume file to download
 * @param filename Optional custom filename for the downloaded file
 * @returns Promise that resolves when download is initiated
 */
export const downloadResume = (url: string, filename?: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Cannot download in non-browser environment'));
      return;
    }
    
    if (!url) {
      console.error('No URL provided for resume download');
      reject(new Error('No URL provided'));
      return;
    }
    
    try {
      // Do a head request to check if the file exists before attempting to download
      fetch(url, { method: 'HEAD' })
        .then(response => {
          if (!response.ok) {
            throw new Error(`File not available (status: ${response.status})`);
          }
          
          // File exists, proceed with download
          // Create a link element
          const link = document.createElement('a');
          link.href = url;
          link.download = filename || url.split('/').pop() || 'resume.pdf';
          link.target = '_blank';
          
          // Add to DOM, trigger click, then remove
          document.body.appendChild(link);
          link.click();
          
          // Use setTimeout to allow browser to begin download before removing the link
          setTimeout(() => {
            document.body.removeChild(link);
            resolve(true);
          }, 100);
        })
        .catch(error => {
          console.error('Error checking file availability:', error);
          // Fallback: try opening in new tab if HEAD request fails
          window.open(url, '_blank');
          resolve(false);
        });
    } catch (error) {
      console.error('Error initiating download:', error);
      
      // Fallback: try opening in new tab if download attribute fails
      window.open(url, '_blank');
      resolve(false);
    }
  });
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

// EmailJS configuration details

// Note: In production, these should be stored as environment variables
// Example: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
// Create a .env.local file with these values

const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
  isConfigured: false // Set this to true once you've added your API keys
};

export default emailConfig;

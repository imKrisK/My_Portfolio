# Customization Guide

This guide will help you personalize every aspect of your portfolio website.

## Table of Contents

- [Personal Information](#personal-information)
- [Projects](#projects)
- [About Me Section](#about-me-section)
- [Skills](#skills)
- [Color Scheme](#color-scheme)
- [Fonts](#fonts)
- [Profile Picture](#profile-picture)
- [SEO & Metadata](#seo--metadata)
- [Adding New Sections](#adding-new-sections)

## Personal Information

All your personal information is centralized in: `src/utils/personalInfo.ts`

Edit this file to update:
- Your name
- Professional title
- Description/bio
- Email address
- Location
- Social media links
- Resume URL

Example:

```typescript
const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  description: "A brief professional description about yourself...",
  email: "your.email@example.com",
  phone: "123-456-7890", // Optional
  location: "City, Country",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername", // Optional
  website: "https://yourwebsite.com", // Optional
  resumeUrl: "/your-resume.pdf", // Optional
};
```

## Projects

To update your projects, edit the `projectsData` array in `src/components/Projects.tsx`:

```typescript
const projectsData = [
  {
    id: 1,
    title: 'Project Title',
    description: 'Description of your project...',
    tags: ['React', 'Next.js', 'MongoDB'], // Technologies used
    imageUrl: '/images/projects/project-image.jpg',
    liveUrl: 'https://your-live-demo.com',
    repoUrl: 'https://github.com/yourusername/project-repo'
  },
  // Add more projects...
];
```

### Project Images

1. Prepare your project images with a 16:9 aspect ratio (recommended: 1200×675px)
2. Save them in `/public/images/projects/` 
3. Update the `imageUrl` paths in your project data

## About Me Section

Edit the content in `src/components/About.tsx` to tell your unique story.
Key sections to personalize:

1. Professional summary
2. Career history
3. Personal interests/hobbies
4. Education details

## Skills

Update your skills in `src/components/Skills.tsx`. The current structure uses a progress bar for each skill:

```typescript
const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  // Add your skills...
];
```

For each skill:
- `name`: The skill name
- `level`: Proficiency level (0-100)

## Color Scheme

To change the color scheme, edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      blue: {
        500: '#3B82F6', // Primary accent color
        600: '#2563EB', // Hover state
        // other color variations...
      },
      // Add more custom colors...
    }
  }
}
```

After changing colors in the config, you may need to update specific color classes in your components.

## Fonts

To change fonts:

1. Update the font import in `src/app/layout.tsx`:

```typescript
import { Inter, Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
```

2. Add the font to the Tailwind configuration in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['var(--font-poppins)', ...fontFamily.sans],
      // Add more custom fonts...
    }
  }
}
```

## Profile Picture

To update your profile picture:

1. Replace the image at `/public/images/profile.jpg` with your own photo
2. For best results, use a square image with dimensions of at least 500×500px
3. If you change the filename, update all references to it in your components

## SEO & Metadata

Edit the metadata in `src/app/layout.tsx` to improve your site's SEO:

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Profession",
  description: "Your professional description for search engines",
  keywords: ["web developer", "designer", "your keywords"],
  // Other metadata...
};
```

Also update the Open Graph images in `/public/images/`:
- `og-image.jpg`: For social media sharing (recommended size: 1200×630px)
- `twitter-image.jpg`: For Twitter card (recommended size: 1200×600px)

## Adding New Sections

To add a new section to your portfolio:

1. Create a new component in `src/components/`
2. Import and add the component to `src/app/page.tsx`
3. Add a navigation link in `src/components/Navbar.tsx` if needed

Example of adding a "Testimonials" section:

```typescript
// src/components/Testimonials.tsx
const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Client <span className="text-blue-500">Testimonials</span>
        </h2>
        {/* Testimonial content here */}
      </div>
    </section>
  );
};

export default Testimonials;
```

Then add to your page:

```typescript
// src/app/page.tsx
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials /> {/* New section */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

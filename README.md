# Professional Portfolio Website

A modern, responsive, and customizable personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

![Portfolio Preview](/public/images/og-image.jpg)

## 🚀 Features

- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Smooth Animations**: Clean animations for better user experience
- **Contact Form**: Integrated with EmailJS for easy contact
- **SEO Optimized**: Meta tags and Open Graph support
- **Performance Optimized**: Fast loading times
- **Accessible**: Following web accessibility best practices
- **Easy to Customize**: Simple structure to make it your own

## 📋 Sections

- Hero/Introduction
- About Me
- Projects Showcase
- Skills
- Contact Form
- Footer with Social Links

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or later
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create an environment file:
   ```bash
   cp env.local.example .env.local
   ```
   
4. Edit `.env.local` with your own EmailJS credentials (See the [EmailJS Setup Guide](/docs/EMAILJS_SETUP.md))

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

This portfolio is highly customizable. For detailed instructions, see our guides:

- [Complete Customization Guide](/docs/CUSTOMIZATION.md) - Comprehensive guide for all customizations
- [Project Screenshots Guide](/docs/PROJECT_SCREENSHOTS.md) - Tips for creating professional project images
- [EmailJS Setup Guide](/docs/EMAILJS_SETUP.md) - Configure your contact form

### Quick Start Customization

1. **Personal Information**: Edit `src/utils/personalInfo.ts` to update your name, title, and contact info
2. **Projects**: Update the `projectsData` array in `src/components/Projects.tsx`
3. **About Me**: Customize your bio in `src/components/About.tsx`
4. **Skills**: Edit your skills in `src/components/Skills.tsx`
5. **Colors**: Modify the color scheme in `tailwind.config.js`

## 📤 Deployment

For detailed deployment guides, see:

- [Vercel Deployment Guide](/docs/VERCEL_DEPLOYMENT.md) - Recommended deployment method
- [Comprehensive Deployment Guide](/docs/DEPLOYMENT.md) - All deployment options including Netlify and GitHub Pages

### Quick Deployment (Vercel)

1. Push your repository to GitHub
2. Import the repository to [Vercel](https://vercel.com/)
3. Add required environment variables
4. Deploy!

### Environment Variables

Don't forget to set up these environment variables on your deployment platform:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_GA_TRACKING_ID=your_ga_id (optional)
```

## 📜 Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready website
- `npm start` - Start the production server
- `npm run lint` - Lint the code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Made with ❤️ using Next.js and Tailwind CSS
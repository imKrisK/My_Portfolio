# Deployment Guide

This guide provides detailed instructions for deploying your portfolio website to various platforms.

## Table of Contents
- [Vercel Deployment](#vercel-deployment) (Recommended)
- [Netlify Deployment](#netlify-deployment)
- [GitHub Pages Deployment](#github-pages-deployment)
- [Custom Domain Setup](#custom-domain-setup)

## Vercel Deployment

Vercel is the platform built by the creators of Next.js, making it the most seamless option for deployment.

### Steps:

1. **Create a Vercel Account**:
   - Go to [vercel.com](https://vercel.com/) and sign up for an account.
   - You can sign up with your GitHub account for seamless integration.

2. **Connect Your Repository**:
   - Import your portfolio project repository.
   - If you haven't pushed your project to GitHub yet, you'll need to do that first.

3. **Configure Project**:
   - Framework Preset: Select "Next.js"
   - Environment Variables: Add your environment variables:
     - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
     - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
     - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
     - `NEXT_PUBLIC_GA_TRACKING_ID` (optional)

4. **Deploy**:
   - Click "Deploy" and wait for the build to complete.
   - Vercel will provide you with a URL where your site is live.

5. **Configure Custom Domain** (Optional):
   - In your project settings, go to "Domains"
   - Add your custom domain and follow the instructions for DNS setup.

## Netlify Deployment

Netlify is another excellent option for hosting your portfolio.

### Steps:

1. **Create a Netlify Account**:
   - Go to [netlify.com](https://netlify.com/) and sign up.

2. **Deploy from Git**:
   - Click "New site from Git"
   - Select your Git provider (GitHub, GitLab, BitBucket)
   - Select your portfolio repository

3. **Configure Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Environment Variables**:
   - Add your environment variables in the "Site settings" > "Environment variables" section.

5. **Deploy**:
   - Click "Deploy site"

## GitHub Pages Deployment

For GitHub Pages deployment, you'll need a slightly different approach since it's primarily designed for static sites.

### Steps:

1. **Update `next.config.js`**:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Create GitHub Workflow**:
   Create or modify `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: 18
             cache: 'npm'
             
         - name: Install Dependencies
           run: npm ci
           
         - name: Build
           run: npm run build
           env:
             NEXT_PUBLIC_EMAILJS_SERVICE_ID: ${{ secrets.EMAILJS_SERVICE_ID }}
             NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: ${{ secrets.EMAILJS_TEMPLATE_ID }}
             NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: ${{ secrets.EMAILJS_PUBLIC_KEY }}
             NEXT_PUBLIC_GA_TRACKING_ID: ${{ secrets.GA_TRACKING_ID }}
             
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@4.1.5
           with:
             branch: gh-pages
             folder: out
   ```

3. **Set Up GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages"
   - Set source branch to "gh-pages" and folder to "/ (root)"
   - Save changes

## Custom Domain Setup

### For Vercel:

1. **Add Domain in Vercel**:
   - Go to your project's "Settings" > "Domains"
   - Add your domain name
   - Follow Vercel's instructions for DNS configuration

2. **Configure DNS**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add the DNS records provided by Vercel:
     - For apex domain (example.com): Add A records
     - For subdomains (www.example.com): Add CNAME record

### For Netlify:

1. **Add Domain in Netlify**:
   - Go to "Site settings" > "Domain management" > "Add custom domain"
   - Enter your domain name

2. **Configure DNS**:
   - Either use Netlify's DNS services (recommended)
   - Or update your domain's DNS settings with your registrar

### For GitHub Pages:

1. **Configure in Repository Settings**:
   - Go to repository settings > "Pages"
   - In the "Custom domain" section, add your domain name
   - Save changes

2. **DNS Configuration**:
   - For apex domain: Add A records pointing to GitHub's IP addresses
   - For subdomains: Add a CNAME record pointing to `yourusername.github.io`

## SSL Configuration

Most platforms (Vercel, Netlify) provide automatic SSL certificates. For GitHub Pages with a custom domain, you can check the "Enforce HTTPS" option in the GitHub Pages settings.

## Troubleshooting

- **Build Failures**: Check your build logs for errors.
- **Missing Environment Variables**: Ensure all required environment variables are set.
- **Custom Domain Not Working**: Verify DNS records have propagated (can take 24-48 hours).

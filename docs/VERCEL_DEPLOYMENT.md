# Vercel Deployment Guide

This guide provides step-by-step instructions to deploy your portfolio website to Vercel.

## Why Vercel?

Vercel is the platform created by the team behind Next.js, making it the optimal choice for hosting Next.js applications:

- **Easy Deployment**: Connect your GitHub repository and deploy in minutes
- **Preview Deployments**: Every pull request gets its own preview URL
- **Custom Domains**: Connect your own domain name for free
- **SSL Certificates**: Automatic HTTPS with free SSL certificates
- **CI/CD Integration**: Automatic deploys when you push to your repository
- **Environment Variables**: Securely store your EmailJS and Google Analytics credentials

## Prerequisites

1. Your project pushed to a GitHub, GitLab, or Bitbucket repository
2. If you're using EmailJS, have your credentials ready:
   - EmailJS Service ID
   - EmailJS Template ID
   - EmailJS Public Key
3. (Optional) If you're using Google Analytics, have your tracking ID

## Step 1: Create a Vercel Account

1. Go to [vercel.com](https://vercel.com/)
2. Sign up with GitHub, GitLab, or Bitbucket (preferably the same service where your repository is hosted)

## Step 2: Import Your Repository

1. After signing in, click on "Add New" > "Project"
2. Choose the repository that contains your portfolio
3. If you don't see your repository, click "Configure GitHub App" and grant access to your repository

## Step 3: Configure Project Settings

1. On the configuration page:
   - **Framework Preset**: Verify that "Next.js" is selected (should be auto-detected)
   - **Root Directory**: Leave as `.` (default)
   - **Build Command**: Leave as default (`next build`) or specify your custom build command if needed

2. Expand the "Environment Variables" section and add your secrets:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = Your EmailJS Service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = Your EmailJS Template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = Your EmailJS Public Key
   - `NEXT_PUBLIC_GA_TRACKING_ID` = Your Google Analytics tracking ID (optional)

3. Click "Deploy"

## Step 4: Monitor Deployment

1. Watch the deployment logs to make sure everything builds correctly
2. If there are any errors, check the logs and fix the issues in your repository
3. Once deployed, you'll receive a unique `.vercel.app` URL where your site is live

## Step 5: Configure Custom Domain (Optional)

1. Go to the "Domains" tab in your project settings
2. Click "Add" and enter your domain name
3. Follow one of the verification methods:
   - **Using Vercel DNS**: Point your domain's nameservers to Vercel's nameservers
   - **Using External DNS**: Add the specified DNS records to your current DNS provider

## Step 6: Set up Automatic HTTPS

1. Vercel automatically configures HTTPS for your domain
2. You don't need to do anything - SSL certificates are automatically provisioned and renewed

## Step 7: Further Optimizations

1. **Configure Prerendering**:
   - By default, Next.js on Vercel uses static generation for supported pages
   - This gives optimal performance for portfolio sites

2. **Analytics**:
   - In your project settings, enable Vercel Analytics to get insights into your visitors

## Troubleshooting

### Build Failures

If your build fails, check:
1. The error message in the Vercel logs
2. Any missing dependencies in your package.json
3. Any environment variables that might be missing

### Domain Configuration Issues

If your domain isn't working:
1. Verify that DNS records have been properly set up
2. Check for any domain verification issues in Vercel's dashboard
3. Note that DNS propagation can take up to 48 hours in some cases

### Environment Variable Issues

If features like the contact form aren't working:
1. Check if you've added all required environment variables
2. Make sure the variable names exactly match those used in your code
3. Remember that environment variables in Vercel are case-sensitive

## Updating Your Site

To update your deployed site:

1. Push changes to your repository's main branch
2. Vercel will automatically trigger a new deployment
3. The changes will be live once the deployment is complete

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Custom Domain Setup Guide](https://vercel.com/docs/projects/domains)

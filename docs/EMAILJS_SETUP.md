# EmailJS Setup Guide

This guide will help you set up EmailJS for the contact form in your portfolio website.

## Steps to Set Up EmailJS

1. **Create an EmailJS Account**:
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/) and sign up for an account.
   - The free tier allows for 200 emails per month.

2. **Create an Email Service**:
   - In your EmailJS dashboard, go to "Email Services" and click "Add New Service".
   - Choose your email provider (Gmail, Outlook, etc.).
   - Follow the authentication steps to connect your email account.
   - Note down the Service ID that gets generated.

3. **Create an Email Template**:
   - Go to "Email Templates" and click "Create New Template".
   - Design a template for your contact form emails.
   - Use the following variables in your template:
     - `{{name}}`: The name of the person contacting you
     - `{{email}}`: Their email address
     - `{{subject}}`: The subject of their message
     - `{{message}}`: Their actual message
   - Save the template and note down the Template ID.

4. **Get Your Public Key**:
   - Go to "Account" > "API Keys".
   - Copy your Public Key.

5. **Add Credentials to Your Project**:
   - Open the `.env.local` file in the root of your project.
   - Update the following values:
     ```
     NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
     NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
     NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
     ```

6. **Test the Contact Form**:
   - Start your development server with `npm run dev`.
   - Go to the Contact section and submit a test message.
   - Check if you receive the email in your inbox.

## Troubleshooting

- If emails are not being sent, check your EmailJS dashboard for any error logs.
- Make sure your environment variables are correctly set.
- Check if your Email Service is properly connected.
- Verify that your template variables match the ones used in the code.

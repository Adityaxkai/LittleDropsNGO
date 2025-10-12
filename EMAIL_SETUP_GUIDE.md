# Email Setup Guide for Contact Form

## Overview
The contact form is now configured to send emails directly to `littledrops1109@gmail.com` when users submit the form.

## Setup Instructions

### 1. Create Environment File
Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration
EMAIL_USER=littledrops1109@gmail.com
EMAIL_PASS=your-app-password-here

# JWT Secret for Admin
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

### 2. Gmail App Password Setup

To send emails through Gmail, you need to set up an App Password:

1. **Go to Google Account Settings**
   - Visit [myaccount.google.com](https://myaccount.google.com)
   - Sign in with `littledrops1109@gmail.com`

2. **Enable 2-Factor Authentication**
   - Go to Security
   - Enable 2-Step Verification if not already enabled

3. **Generate App Password**
   - Go to Security > App passwords
   - Select "Mail" as the app
   - Generate a new password
   - Copy the generated password (16 characters)

4. **Update Environment File**
   - Replace `your-app-password-here` with the generated app password
   - Example: `EMAIL_PASS=abcd efgh ijkl mnop`

### 3. Test the Contact Form

1. **Start the Development Server**
   ```bash
   npm run dev
   ```

2. **Test the Form**
   - Go to `/contact` page
   - Fill out the contact form
   - Submit the form
   - Check `littledrops1109@gmail.com` for the email

## Email Features

### What Gets Sent
- **Professional HTML Email** with Little Drops branding
- **Complete Contact Information** (name, email, phone, department)
- **Formatted Message** with proper styling
- **Timestamp** of when the message was sent

### Email Content
The email includes:
- Contact person's details
- Subject and message
- Professional formatting
- Little Drops NGO branding
- Timestamp information

## Troubleshooting

### Common Issues

1. **"Failed to send message" Error**
   - Check if EMAIL_PASS is correctly set
   - Verify 2-Factor Authentication is enabled
   - Ensure App Password is valid

2. **Authentication Failed**
   - Regenerate App Password
   - Check Gmail account settings
   - Verify EMAIL_USER matches the Gmail account

3. **Emails Not Received**
   - Check spam/junk folder
   - Verify email address is correct
   - Check Gmail account settings

### Testing
- Use the contact form on the website
- Check browser console for any errors
- Verify environment variables are loaded
- Test with different email addresses

## Security Notes

- **Never commit** `.env.local` to version control
- **Use App Passwords** instead of regular passwords
- **Keep credentials secure** and don't share them
- **Regularly rotate** App Passwords for security

## Production Deployment

For production deployment:
1. Set environment variables in your hosting platform
2. Use the same Gmail App Password
3. Test thoroughly before going live
4. Monitor email delivery

## Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all environment variables are set
3. Test with a simple email first
4. Check Gmail account security settings

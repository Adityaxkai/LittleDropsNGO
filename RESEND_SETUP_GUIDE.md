# 📧 Resend Email Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up with your email
3. Verify your email address

### Step 2: Get API Key
1. Go to [https://resend.com/api-keys](https://resend.com/api-keys)
2. Click **"Create API Key"**
3. Name it: `LittleDrops NGO`
4. Copy the API key (starts with `re_`)

### Step 3: Update Environment File
Replace `your-resend-api-key-here` in `.env.local` with your actual API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
JWT_SECRET=fa7be2783c8591cb6346b66d6da273c34224dec586275d9b0035fb3b86872562a83962dfdb37f0772d1efcf737f34711876948ee9d5c68eeb4b5b7afc838c191
```

### Step 4: Test Email
1. Restart your dev server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check `littledrops1109@gmail.com` for the email!

## ✅ Benefits of Resend

- **No Gmail setup needed** - No App Passwords or 2FA required
- **Reliable delivery** - Professional email service
- **Free tier** - 3,000 emails/month free
- **Easy setup** - Just one API key
- **Better deliverability** - Emails won't go to spam

## 🔧 Current Status

- ✅ Resend package installed
- ✅ Contact API updated to use Resend
- ✅ Environment file configured
- ⏳ **Next**: Add your Resend API key and test!

## 📞 Support

If you need help:
1. Check Resend dashboard for delivery status
2. Check browser console for any errors
3. Verify API key is correct in `.env.local`

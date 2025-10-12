# Admin Panel - LittleDrops NGO

## Overview
The admin panel provides secure access to manage the NGO website content, including gallery photos and email inquiries.

## Access
- **URL**: `/admin`
- **Login Page**: `/admin/login`
- **Dashboard**: `/admin/dashboard`

## Demo Credentials
- **Email**: `admin@littledrops.org`
- **Password**: `admin123`

## Features

### 1. Authentication System
- JWT token-based authentication
- Secure login with password hashing
- Automatic token validation
- Session management

### 2. Admin Dashboard
- **Email Management**: View and manage incoming emails and inquiries
- **Gallery Management**: Add, edit, and delete photos from the gallery
- **Statistics**: Overview of emails, gallery items, and volunteers

### 3. Gallery Management
- Add new photos with title, category, description
- Upload images with preview
- Delete existing photos
- Categorize photos (Events, Education, Healthcare, Environment, Food, Community)

### 4. Email Management
- View all received emails
- Mark emails as read/unread
- Track email status and dates

## Security Features
- JWT token authentication
- Password hashing with bcrypt
- Protected routes
- Automatic logout on token expiration

## File Structure
```
src/
├── app/
│   ├── admin/
│   │   ├── login/page.tsx          # Admin login page
│   │   ├── dashboard/page.tsx      # Admin dashboard
│   │   ├── layout.tsx              # Admin layout
│   │   └── globals.css             # Admin styles
│   └── api/
│       └── admin/
│           └── login/route.ts      # Login API endpoint
├── lib/
│   └── auth.ts                     # Authentication utilities
└── components/
    └── ui/                         # UI components
```

## Setup Instructions

1. **Install Dependencies** (already done):
   ```bash
   npm install jsonwebtoken bcryptjs @types/jsonwebtoken @types/bcryptjs
   ```

2. **Environment Variables**:
   Create a `.env.local` file with:
   ```
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   ```

3. **Access the Admin Panel**:
   - Navigate to `/admin`
   - Use the demo credentials to login
   - Start managing the NGO content

## Usage

### Adding Photos to Gallery
1. Login to admin panel
2. Go to Gallery Management section
3. Click "Add Photo" button
4. Fill in the form:
   - Title
   - Category
   - Upload image
   - Description
5. Click "Add Photo" to save

### Managing Emails
1. View all emails in the Email Management section
2. Click on emails to mark as read
3. Track email status and dates

### Security Notes
- Change the default admin password in production
- Use a strong JWT secret
- Consider implementing role-based access control
- Add rate limiting for login attempts
- Implement proper logging and monitoring

## Gallery Page Changes
The main gallery page (`/gallery`) is now read-only for regular users:
- Removed add/delete functionality
- Removed admin controls
- Clean, simple interface for viewing photos
- All management is done through the admin panel

## Future Enhancements
- User role management
- Email reply functionality
- Photo editing capabilities
- Analytics and reporting
- Backup and restore functionality

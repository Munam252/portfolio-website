# Portfolio Website Setup Guide

This guide will help you set up both the frontend and backend for the portfolio website with email functionality.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## Project Structure

```
portfolio-website/
├── src/                    # Frontend React application
├── server/                 # Backend Express server
│   ├── package.json
│   ├── server.js
│   └── README.md
└── SETUP_GUIDE.md         # This file
```

## Setup Instructions

### 1. Frontend Setup

```bash
# Install frontend dependencies
npm install

# Start the frontend development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install backend dependencies
npm install

# Create environment file
# Copy the example and update with your credentials
cp .env.example .env
```

**Important:** Edit the `.env` file in the server directory with your email credentials:

```env
EMAIL_USER=smarttutor253@gmail.com
EMAIL_PASS=pggl mteg guur hcjd
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

```bash
# Start the backend server
npm run dev
```

The backend will be available at `http://localhost:5000`

### 3. Running Both Servers

You need to run both servers simultaneously:

**Terminal 1 (Frontend):**
```bash
npm run dev
```

**Terminal 2 (Backend):**
```bash
cd server
npm run dev
```

## Email Functionality

The contact form now includes:

- ✅ Form validation
- ✅ Loading states with spinner
- ✅ Error handling
- ✅ Success confirmation
- ✅ Email sending to `munammustafa253@gmail.com`
- ✅ Professional HTML email template
- ✅ Reply-to functionality

## Testing the Email Feature

1. Start both servers (frontend and backend)
2. Navigate to the contact section
3. Fill out the form with:
   - Name
   - Email address
   - Message
4. Click "Send Message"
5. Check the email inbox at `munammustafa253@gmail.com`

## Troubleshooting

### Common Issues:

1. **"Network error" message**: Make sure the backend server is running on port 5000
2. **Email not sending**: Check the email credentials in the `.env` file
3. **CORS errors**: The backend includes CORS middleware to allow frontend requests

### Email Configuration Notes:

- The Gmail account needs to have 2-factor authentication enabled
- Use an app-specific password, not the regular Gmail password
- The app password should be: `pggl mteg guur hcjd`

## Production Deployment

For production deployment:

1. **Frontend**: Build the React app with `npm run build`
2. **Backend**: Deploy the server to a platform like Heroku, Vercel, or DigitalOcean
3. **Environment Variables**: Set the production environment variables on your hosting platform
4. **Update API URL**: Change the API URL in the Contact component from `localhost:5000` to your production backend URL

## Security Notes

- Never commit the `.env` file to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for the contact endpoint
- Add input validation and sanitization for production use

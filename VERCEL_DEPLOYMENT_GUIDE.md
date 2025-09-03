# Vercel Deployment Guide - Complete Portfolio with Email

## 🎉 Your portfolio is now ready for Vercel deployment!

### What's been converted:
- ✅ Backend Express server → Vercel serverless functions
- ✅ Contact form API → `/api/contact.js`
- ✅ Health check API → `/api/health.js`
- ✅ Frontend updated to use Vercel API routes
- ✅ Nodemailer added to dependencies
- ✅ Vercel configuration created

## 🚀 Deployment Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Convert to Vercel serverless functions"
git push origin main
```

### Step 3: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (leave empty)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

### Step 4: Set Environment Variables
In Vercel dashboard → Settings → Environment Variables, add:

```
EMAIL_USER=smarttutor253@gmail.com
EMAIL_PASS=pggl mteg guur hcjd
JWT_SECRET=your_jwt_secret_here
```

### Step 5: Deploy!
Click **"Deploy"** and wait 2-3 minutes.

## 🧪 Testing Your Deployment

### Test the API endpoints:
1. **Health Check**: `https://your-domain.vercel.app/api/health`
2. **Contact Form**: Use the contact form on your website

### Test the contact form:
1. Go to your deployed portfolio
2. Navigate to the Contact section
3. Fill out the form
4. Click "Send Message"
5. Check `munammustafa253@gmail.com` for the email

## 📁 Project Structure
```
portfolio-website/
├── api/                    # Vercel serverless functions
│   ├── contact.js         # Email sending function
│   └── health.js          # Health check function
├── src/                   # React frontend
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies (includes nodemailer)
```

## 🔧 API Endpoints

### POST /api/contact
- **Purpose**: Send contact form emails
- **Body**: `{ name, email, message }`
- **Response**: `{ success: boolean, message: string }`

### GET /api/health
- **Purpose**: Health check
- **Response**: `{ status: "OK", message: "Server is running" }`

## ⚡ Benefits of Vercel Serverless

- ✅ **No separate backend server needed**
- ✅ **Automatic scaling**
- ✅ **Global CDN**
- ✅ **Free tier available**
- ✅ **Easy deployment from GitHub**
- ✅ **Built-in environment variables**

## 🆓 Cost: COMPLETELY FREE

- Vercel free tier includes:
  - Unlimited personal projects
  - 100GB bandwidth
  - 100 serverless function executions per day
  - Perfect for portfolio websites!

## 🐛 Troubleshooting

### If emails don't send:
1. Check environment variables in Vercel dashboard
2. Verify Gmail app password is correct
3. Check Vercel function logs

### If deployment fails:
1. Ensure all dependencies are in package.json
2. Check vercel.json configuration
3. Verify API functions are in `/api` folder

## 🎯 Next Steps

1. **Deploy to Vercel** (follow steps above)
2. **Test the contact form**
3. **Share your portfolio URL**
4. **Monitor email delivery**

Your portfolio is now ready for production deployment! 🚀

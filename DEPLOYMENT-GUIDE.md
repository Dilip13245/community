# Deployment Guide - CommunityHub to Vercel

## 📋 Step-by-Step Guide

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in top right → **"New repository"**
3. Repository name: `communityhub-caas` (or any name you like)
4. Description: "CaaS Platform for building and joining communities"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/communityhub-caas.git

# Rename branch to main (if needed)
git branch -M main

# Push code to GitHub
git push -u origin main
```

**OR if you prefer SSH:**

```bash
git remote add origin git@github.com:YOUR_USERNAME/communityhub-caas.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Option A: Via Vercel Website (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"Add New..."** → **"Project"**
4. Import your GitHub repository (`communityhub-caas`)
5. Vercel will auto-detect:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click **"Deploy"**
7. Wait for deployment (2-3 minutes)
8. Your site will be live! 🎉

#### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? communityhub-caas
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### Step 4: Configure Vercel (If Needed)

After first deployment, you can configure:

1. Go to your project on Vercel dashboard
2. Click **Settings** → **General**
3. Verify:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 5: Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## 🔄 Updating Your Site

After making changes:

```bash
# Make your changes
# ...

# Commit changes
git add .
git commit -m "Your commit message"

# Push to GitHub
git push

# Vercel will automatically deploy!
```

Vercel automatically deploys on every push to main branch.

## 📝 Important Notes

### Build Settings
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x or higher (auto-detected)

### Environment Variables
If you need environment variables later:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

### Preview Deployments
- Every push to any branch creates a preview deployment
- Perfect for testing before merging to main

## 🐛 Troubleshooting

### Build Fails?
1. Check build logs in Vercel dashboard
2. Make sure all dependencies are in `package.json`
3. Run `npm run build` locally to test

### Site Not Loading?
1. Check if build completed successfully
2. Verify output directory is `dist`
3. Check browser console for errors

### Need to Rollback?
1. Go to Vercel Dashboard → Deployments
2. Find the working deployment
3. Click "..." → "Promote to Production"

## ✅ Quick Checklist

- [ ] Code pushed to GitHub
- [ ] GitHub repository is public/accessible
- [ ] Vercel account created
- [ ] Repository imported to Vercel
- [ ] Build settings verified
- [ ] First deployment successful
- [ ] Site is live!

## 🎉 You're Done!

Your site will be live at: `https://your-project-name.vercel.app`

You can also add a custom domain later!


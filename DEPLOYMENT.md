# Deployment Guide for Sharda University Fee Calculator

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Create a new repository (name it whatever you like)
   - Don't initialize with README (we already have one)

2. **Push Your Code**
   ```bash
   cd /Users/mdmillathosen/Desktop/sharda-university-fee-calculator
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Click on "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

4. **Deploy**
   - The GitHub Action will automatically run on your next push
   - Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
```

The build files will be in the `dist` folder. You can upload these to any static hosting service.

## Alternative: Vercel Deployment (Recommended)

Vercel is even easier for React apps:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

That's it! Vercel will automatically deploy on every push.

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 to view the app.

## Local Development

No environment variables are required for this project.


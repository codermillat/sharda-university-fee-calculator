# GitHub Pages Setup Instructions

## Quick Setup Guide

You're seeing the deployment error because GitHub Pages needs to be enabled first. Follow these steps:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/codermillat/sharda-university-fee-calculator
2. Click on **Settings** (top right menu)
3. Scroll down and click on **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions** from the dropdown
5. Click **Save**

That's it! This enables GitHub Pages for your repository.

### Step 2: Add Your Gemini API Key (Important!)

1. Still in Settings, click on **Secrets and variables** → **Actions** in the left sidebar
2. Click the green **New repository secret** button
3. Name: `GEMINI_API_KEY`
4. Value: Paste your actual Gemini API key
5. Click **Add secret**

### Step 3: Re-run the Failed Workflow

1. Go to the **Actions** tab in your repository
2. Click on the failed workflow run
3. Click **Re-run all jobs** button (top right)

The deployment should succeed this time!

### Step 4: Access Your Live Site

Once the deployment succeeds (green checkmark), your site will be live at:

**https://codermillat.github.io/sharda-university-fee-calculator/**

## Troubleshooting

### Still Getting Errors?

If you still see errors after enabling Pages:

1. **Wait 2-3 minutes** after enabling Pages, then re-run the workflow
2. Check that you selected **GitHub Actions** (not "Deploy from a branch")
3. Verify your API key is added correctly in Secrets

### Build Fails?

If the build step fails:
- Check that your `package.json` has all dependencies
- Make sure the GEMINI_API_KEY secret is set correctly
- Look at the build logs for specific error messages

### Want to Deploy Manually?

You can also build and deploy manually:

```bash
# Build the project
npm run build

# The files in the 'dist' folder are ready to deploy
# You can upload them to any static hosting service
```

## Alternative: Deploy to Vercel (Even Easier!)

Vercel is actually simpler and recommended for React apps:

1. Go to https://vercel.com
2. Sign in with your GitHub account
3. Click **New Project**
4. Import your repository: `codermillat/sharda-university-fee-calculator`
5. Add environment variable:
   - Name: `GEMINI_API_KEY`
   - Value: Your API key
6. Click **Deploy**

Done! Vercel will give you a URL like: `sharda-university-fee-calculator.vercel.app`

### Benefits of Vercel:
- ✅ Automatic HTTPS
- ✅ Faster deployments
- ✅ Better performance
- ✅ Custom domain support
- ✅ Preview deployments for PRs
- ✅ Automatic rebuilds on push

## Need Help?

If you're still stuck, check:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vercel Documentation](https://vercel.com/docs)

Or open an issue in the repository!


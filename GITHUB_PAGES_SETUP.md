# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

Your website is now configured for free hosting on GitHub Pages!

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository: `https://github.com/supercooler8/sandhya-rentals-web`
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - Save

### Step 2: Deploy
The website will automatically deploy when you push to `main` branch. It's already configured!

**Your GitHub Pages URL will be:**
- `https://supercooler8.github.io/sandhya-rentals-web/`

### Step 3: Connect Your Custom Domain (sandhyarentals.biz)
1. In GitHub Settings → Pages
2. Under "Custom domain", enter: `sandhyarentals.biz`
3. Go to Squarespace DNS Settings
4. Add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: supercooler8.github.io
   ```
5. Wait 24-48 hours for DNS to propagate
6. Your site will be live at `sandhyarentals.biz`

## How It Works

- **Automatic Deployment**: Every time you push to `main`, GitHub Actions automatically builds and deploys
- **Build Process**: Runs `pnpm install` and `pnpm build`
- **Output**: Deployed from `dist/public` directory
- **Cost**: Completely FREE

## Troubleshooting

**Build Failed?**
- Check GitHub Actions tab in your repository
- Click the failed workflow to see error details

**Domain Not Working?**
- DNS changes take 24-48 hours
- Check DNS propagation at: https://www.whatsmydns.net/

**Site Shows 404?**
- Make sure GitHub Pages is enabled (Settings → Pages)
- Verify "GitHub Actions" is selected as source

## Making Updates

To update your website:
1. Make changes locally
2. Commit: `git commit -am "Update message"`
3. Push: `git push origin main`
4. GitHub Actions automatically deploys (takes 1-2 minutes)

That's it! Your site updates automatically.

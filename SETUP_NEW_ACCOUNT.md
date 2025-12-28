# Setup Instructions for New GitHub Account (prismcure)

## Step 1: Create Repository on GitHub

1. Go to https://github.com/prismcure
2. Click **"New repository"** (green button)
3. Repository name: **`prismcure.github.io`** (must be exactly this name)
4. Description: "PRISMCURE - Personal Portfolio Website"
5. Visibility: **Public** (required for free GitHub Pages)
6. **DO NOT** check "Initialize with README" (we already have files)
7. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/anhle/Library/CloudStorage/OneDrive-NorthDakotaUniversitySystem/prismcure

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: PRISMCURE portfolio website"

# Add remote (replace with your actual repo URL if different)
git remote add origin https://github.com/prismcure/prismcure.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/prismcure/prismcure.github.io
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"**
5. Click **Save**

## Step 4: Wait for Deployment

1. Go to **Actions** tab in your repository
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait 2-5 minutes for it to complete
4. Once it shows a green checkmark, your site is live!

## Step 5: Access Your Website

Your website will be available at:
**https://prismcure.github.io**

## Troubleshooting

**If push fails with authentication error:**
- You may need to use a Personal Access Token instead of password
- Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permissions
- Use token as password when pushing

**If Actions workflow fails:**
- Check the Actions tab for error messages
- Common issues: missing dependencies, build errors
- Make sure all files are committed and pushed

**If site shows 404:**
- Wait a few more minutes (DNS propagation)
- Check that repository is public
- Verify Pages source is set to "GitHub Actions"
- Check that base path in vite.config.js is `/`


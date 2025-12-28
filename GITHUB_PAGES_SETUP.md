# GitHub Pages Setup - Troubleshooting

## Understanding GitHub Pages URLs

The URL format depends on your repository name:

1. **If repository is named `prismcure`**:
   - URL: `https://[your-username].github.io/prismcure/`
   - Base path in vite.config.js: `/prismcure/`

2. **If repository is named `[your-username].github.io`**:
   - URL: `https://[your-username].github.io/`
   - Base path in vite.config.js: `/`

3. **If you create an organization `prismcure` and repo `prismcure.github.io`**:
   - URL: `https://prismcure.github.io/`
   - Base path in vite.config.js: `/`

## Current Configuration

Your `vite.config.js` is set to `/prismcure/`, which means:
- Your site will be at: `https://[your-username].github.io/prismcure/`
- NOT at: `https://prismcure.github.io`

## To Fix for https://prismcure.github.io

**Option 1: Create Organization (Recommended)**
1. Create a GitHub organization named `prismcure`
2. Create a repository named `prismcure.github.io` in that organization
3. Update `vite.config.js` base to `/`
4. Push code to that repository

**Option 2: Use Your Username**
1. Keep current setup
2. Access site at: `https://[your-username].github.io/prismcure/`

## Steps to Deploy

1. **Push code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/[your-username]/prismcure.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Select "GitHub Actions"
   - Save

3. **Check Actions tab**:
   - Wait for deployment to complete
   - Check for any errors

4. **Access your site**:
   - Based on your repo name, use the correct URL format above


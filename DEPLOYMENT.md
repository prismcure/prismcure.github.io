# GitHub Pages Deployment Guide

## Quick Start

1. **Create GitHub Repository**
   - Create a new repository on GitHub (e.g., `prismcure`)
   - Don't initialize with README, .gitignore, or license

2. **Update Base Path** (if repository name is different)
   - Edit `frontend/vite.config.js`
   - Change `/prismcure/` to `/[your-repo-name]/`

3. **Initialize Git and Push**
   ```bash
   git add .
   git commit -m "Initial commit: Setup GitHub Pages deployment"
   git branch -M main
   git remote add origin https://github.com/[your-username]/[your-repo-name].git
   git push -u origin main
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

5. **Wait for Deployment**
   - Go to **Actions** tab to see the deployment progress
   - Once complete, your site will be live at:
     `https://[your-username].github.io/[your-repo-name]/`

## Important Notes

- **Backend API**: The backend API (Express server) won't work on GitHub Pages since it only hosts static files. You'll need to:
  - Deploy the backend separately (e.g., Railway, Render, Heroku)
  - Update the API URL in `App.jsx` to point to your deployed backend
  - Or remove the API dependency and use static data

- **Base Path**: Make sure the base path in `vite.config.js` matches your repository name

- **Custom Domain**: You can add a custom domain in GitHub Pages settings

## Troubleshooting

- **404 Errors**: Check that the base path matches your repository name
- **Build Fails**: Check the Actions tab for error messages
- **Styles Not Loading**: Ensure all asset paths are relative


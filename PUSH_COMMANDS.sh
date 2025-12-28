#!/bin/bash
# Commands to push code to prismcure.github.io repository

# Make sure you're in the right directory
cd /Users/anhle/Library/CloudStorage/OneDrive-NorthDakotaUniversitySystem/prismcure

# Create initial commit
git commit -m "Initial commit: PRISMCURE portfolio website"

# Add remote (if not already added)
git remote add origin https://github.com/prismcure/prismcure.github.io.git

# Set branch to main
git branch -M main

# Push to GitHub
git push -u origin main

echo "✅ Code pushed! Now go to GitHub and enable Pages:"
echo "   1. Go to Settings → Pages"
echo "   2. Source: Select 'GitHub Actions'"
echo "   3. Your site will be at: https://prismcure.github.io"


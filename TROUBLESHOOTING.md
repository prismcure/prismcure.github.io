# Troubleshooting GitHub Pages Deployment

## If you don't see the Actions workflow:

### Step 1: Enable GitHub Pages
1. Go to: https://github.com/prismcure/prismcure.github.io
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

### Step 2: Manually Trigger Workflow
After enabling Pages, the workflow should run automatically. If not:

1. Go to **Actions** tab
2. Click **"Deploy to GitHub Pages"** workflow (on the left)
3. Click **"Run workflow"** button (top right)
4. Select branch: **main**
5. Click **"Run workflow"**

### Step 3: Check Workflow Status
1. In **Actions** tab, you should see:
   - "Deploy to GitHub Pages" workflow
   - Status: Yellow (running) or Green (success) or Red (failed)
2. Click on the workflow run to see details
3. Check each step for errors

### Common Issues:

**Issue: Actions tab not visible**
- Make sure repository is **Public**
- Refresh the page
- Check if you're logged into the correct account (prismcure)

**Issue: Workflow not running**
- Make sure Pages source is set to "GitHub Actions"
- Try making a small commit to trigger it:
  ```bash
  git commit --allow-empty -m "Trigger workflow"
  git push
  ```

**Issue: Build fails**
- Check the Actions log for error messages
- Common errors:
  - Missing dependencies
  - Build errors in frontend
  - Node version issues

**Issue: Site shows 404**
- Wait 5-10 minutes after deployment
- Check that base path in vite.config.js is `/`
- Verify repository is public
- Check Pages settings again

## Quick Check Commands:

```bash
# Check if workflow file exists
ls -la .github/workflows/deploy.yml

# Check git status
git status

# Check remote
git remote -v
```



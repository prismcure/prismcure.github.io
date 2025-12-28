# Custom Domain Setup for GitHub Pages

## Timeline

**Total time: 15 minutes to 48 hours**
- Domain purchase: 5-10 minutes
- DNS configuration: 5 minutes
- DNS propagation: 15 minutes to 48 hours (usually within 1-2 hours)

## Step-by-Step Guide

### 1. Purchase Domain (5-10 minutes)

**Recommended providers:**
- **Namecheap** (~$10-15/year) - Popular, good support
- **Google Domains** (~$12/year) - Simple interface
- **Cloudflare** (~$8-10/year) - Cheapest, includes free SSL
- **GoDaddy** (~$12-15/year) - Well-known but more expensive

**Steps:**
1. Go to domain registrar website
2. Search for your desired domain (e.g., `prismcure.com`)
3. Add to cart and checkout
4. Complete purchase

### 2. Configure DNS (5 minutes)

After purchasing, configure DNS records:

**Option A: Using A Records (Recommended)**
```
Type: A
Name: @ (or leave blank)
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @ (or leave blank)
Value: 185.199.111.153
TTL: 3600
```

**Option B: Using CNAME (Easier)**
```
Type: CNAME
Name: www
Value: [your-username].github.io
TTL: 3600
```

### 3. Configure GitHub Pages (2 minutes)

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `prismcure.com`)
4. Check **Enforce HTTPS** (wait for DNS to propagate first)
5. Save

### 4. Add CNAME File (Automatic or Manual)

GitHub will automatically create a `CNAME` file, or you can create it manually:

**Create `frontend/public/CNAME` file:**
```
prismcure.com
www.prismcure.com
```

### 5. Update Vite Config (Optional)

If using custom domain, you can set base to `/`:

```js
// frontend/vite.config.js
base: process.env.NODE_ENV === 'production' ? '/' : '/',
```

### 6. Wait for DNS Propagation

- **Minimum**: 15 minutes
- **Average**: 1-2 hours
- **Maximum**: 48 hours (rare)

**Check DNS propagation:**
- Use: https://dnschecker.org
- Enter your domain and check A/CNAME records

## Cost Comparison

| Option | Cost | URL |
|--------|------|-----|
| **Free (GitHub Pages)** | $0/year | `[username].github.io/prismcure` |
| **Free (Organization)** | $0/year | `prismcure.github.io` |
| **Custom Domain** | $8-15/year | `prismcure.com` |

## Recommendation

**Start with FREE option first:**
1. Use `https://prismcure.github.io` (create organization - free)
2. Test and make sure everything works
3. Later, if you want a custom domain, buy one and add it

**Benefits of custom domain:**
- ✅ Professional URL (prismcure.com)
- ✅ Branding
- ✅ Easier to remember
- ✅ Can use with email (extra cost)

**Benefits of free GitHub Pages:**
- ✅ Completely free
- ✅ Works immediately
- ✅ No renewal fees
- ✅ Perfect for portfolios

## Quick Setup Commands

After buying domain and configuring DNS:

```bash
# Add CNAME file
echo "prismcure.com" > frontend/public/CNAME

# Commit and push
git add frontend/public/CNAME
git commit -m "Add custom domain CNAME"
git push
```

## Troubleshooting

**Domain not working?**
1. Check DNS propagation: https://dnschecker.org
2. Verify DNS records are correct
3. Wait up to 48 hours for full propagation
4. Check GitHub Pages settings
5. Ensure CNAME file exists in repository

**SSL Certificate issues?**
- GitHub automatically provides free SSL
- Wait for DNS to propagate first
- Then enable "Enforce HTTPS" in settings


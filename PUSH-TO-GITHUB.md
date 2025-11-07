# How to Push Code to GitHub

## Current Status
✅ Code is committed locally
✅ Fixes are ready (.nvmrc, netlify.toml, package.json updated)

## Push to GitHub

### Option 1: Using GitHub Desktop (Easiest)
1. Open GitHub Desktop
2. Open your repository
3. You'll see the new commits
4. Click "Push origin" button

### Option 2: Using Terminal with Personal Access Token

1. **Get your GitHub repository URL:**
   ```bash
   git remote -v
   ```

2. **Push using token:**
   ```bash
   git push origin main
   ```
   
   When asked for username: Enter your GitHub username
   When asked for password: Enter a **Personal Access Token** (not your password)

3. **Create Personal Access Token (if you don't have one):**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Give it a name: "CommunityHub Deploy"
   - Select scopes: `repo` (full control)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)
   - Use this token as password when pushing

### Option 3: Using SSH (Recommended for future)

1. **Check if you have SSH key:**
   ```bash
   ls -la ~/.ssh
   ```

2. **If no SSH key, generate one:**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # Press Enter for all prompts
   ```

3. **Add SSH key to GitHub:**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   # Copy the output
   ```
   - Go to GitHub.com → Settings → SSH and GPG keys → New SSH key
   - Paste the key and save

4. **Change remote to SSH:**
   ```bash
   git remote set-url origin git@github.com:YOUR_USERNAME/communityhub-caas.git
   ```

5. **Push:**
   ```bash
   git push origin main
   ```

## After Pushing

Once code is pushed to GitHub:

1. **Netlify will auto-deploy** (if connected to GitHub)
2. **Or manually trigger deploy:**
   - Go to Netlify Dashboard
   - Click "Clear cache and deploy site"
   - The new Node 18 configuration will be used

## Quick Check

To verify your commits are ready:
```bash
git log --oneline -3
```

You should see:
- Fix: Pin Node version to 18...
- Initial commit: CommunityHub CaaS Platform...


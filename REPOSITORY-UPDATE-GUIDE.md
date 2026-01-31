# Repository Update Guide

## ✅ Completed Updates

### 1. Local Git Configuration
- **Old Repository**: `https://github.com/rrunolfson/Lastmilewebsite.git`
- **New Repository**: `https://github.com/rrunolfson/Newlmwebsite.git`
- **Status**: ✅ Updated

The local Git remote has been updated to point to the new repository.

### 2. Documentation Updates
- **File Updated**: `DEPLOYMENT-SUMMARY.txt`
- **Status**: ✅ Updated

The repository URL in the deployment summary has been updated to reference the new repository.

## 🔧 Manual Steps Required for cPanel

Since cPanel's Git deployment integration stores the repository URL in its own database (not in `.cpanel.yml`), you'll need to manually update the configuration in cPanel:

### Steps to Update cPanel Git Integration:

1. **Log in to your cPanel account**
   - URL: `https://yourdomain.com:2083` (or through GoDaddy hosting panel)

2. **Navigate to Git Version Control**
   - In cPanel, find the "Files" section
   - Click on "Git™ Version Control"

3. **Manage Existing Repository**
   - You should see your existing repository listed
   - Click "Manage" next to the repository

4. **Update Repository URL**
   - Look for "Repository Clone URL" or similar field
   - Update from: `https://github.com/rrunolfson/Lastmilewebsite.git`
   - Update to: `https://github.com/rrunolfson/Newlmwebsite.git`
   - Click "Save" or "Update"

### Alternative: Create New Repository Connection

If updating the URL doesn't work, you can remove the old connection and create a new one:

1. **Remove Old Repository**
   - In Git Version Control, click "Manage" → "Delete"
   - This removes the cPanel configuration (doesn't delete your files)

2. **Create New Repository**
   - Click "Create" in Git Version Control
   - **Choose ONE of these repository URL formats:**
     
     **Option A - SSH (Recommended):**
     - URL: `git@github.com:rrunolfson/Newlmwebsite.git`
     - Requires SSH key setup (see SSH Key Setup section below)
     
     **Option B - HTTPS with Personal Access Token:**
     - URL: `https://YOUR_GITHUB_USERNAME:YOUR_TOKEN@github.com/rrunolfson/Newlmwebsite.git`
     - Replace `YOUR_GITHUB_USERNAME` with your GitHub username
     - Replace `YOUR_TOKEN` with a GitHub Personal Access Token
     - See Token Creation section below
   
   - Set repository path to: `/home/hh0h355mndjv/repositories/Newlmwebsite`
   - Repository name: `Newlmwebsite`

3. **Configure Deployment Path**
   - After creating, click "Manage"
   - Click "Pull or Deploy" tab
   - Ensure deployment path is: `/home/hh0h355mndjv/public_html/`
   - The `.cpanel.yml` file will handle the actual file deployment

4. **Test the Connection**
   - Click "Update from Remote" to pull latest code
   - Then click "Deploy HEAD Commit" to deploy
5. **Set Up Auto-Deployment (Webhook)**
   - After the repository is created and tested, click "Manage"
   - Look for "Deployment" or "Webhook" section
   - Find and copy the "Webhook URL" or "Deployment URL"
   - It will look like: `https://yourdomain.com:2083/cpsess####/execute/VersionControl/pull?repository=/home/.../repositories/Newlmwebsite`
   - Keep this URL for the next step

## 🔗 GitHub Webhook Setup (Auto-Deployment)

To automatically deploy when you push to GitHub:

1. **Go to GitHub Repository**
   - Navigate to: `https://github.com/rrunolfson/Newlmwebsite`
   - Click "Settings" tab

2. **Add Webhook**
   - In left sidebar, click "Webhooks"
   - Click "Add webhook" button
   - You may be prompted for your GitHub password

3. **Configure Webhook**
   - **Payload URL**: Paste the webhook URL from cPanel (step 5 above)
   - **Content type**: Select `application/json`
   - **Secret**: Leave blank (unless cPanel provides one)
   - **SSL verification**: Enable SSL verification (recommended)
   - **Which events would you like to trigger this webhook?**
     - Select "Just the push event"
   - **Active**: Check the box (enabled)
   - Click "Add webhook"

4. **Test the Webhook**
   - After adding, GitHub will send a test ping
   - Look for a green checkmark next to the webhook
   - If there's a red X, click on the webhook to see error details

5. **Verify Auto-Deployment Works**
   ```bash
   # Make a small change locally
   echo "# Test auto-deploy" >> README.md
   git add README.md
   git commit -m "Test webhook deployment"
   git push origin main
   ```
   - Wait 30-60 seconds
   - Check your website to see if changes deployed automatically
   - You can also check cPanel → Git Version Control to see last deployment time
## � Authentication Setup

### Option 1: SSH Key Setup (Recommended)

1. **Generate SSH Key in cPanel**
   - In cPanel, go to "Security" → "SSH Access"
   - Click "Manage SSH Keys"
   - Click "Generate a New Key"
   - Key Name: `github_deploy`
   - Key Type: RSA
   - Key Size: 4096
   - Click "Generate Key"

2. **Authorize the Key**
   - After generation, click "Manage" next to the key
   - Click "Authorize"
   - Copy the public key (entire content)

3. **Add SSH Key to GitHub**
   - Go to GitHub.com → Settings → SSH and GPG keys
   - Click "New SSH key"
   - Title: `cPanel Deployment`
   - Paste the public key
   - Click "Add SSH key"

4. **Use SSH URL in cPanel Git**
   - Repository URL: `git@github.com:rrunolfson/Newlmwebsite.git`

### Option 2: Personal Access Token (HTTPS)

1. **Create GitHub Personal Access Token**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token" → "Generate new token (classic)"
   - Note: `cPanel Git Deployment`
   - Expiration: Choose appropriate duration
   - Select scopes:
     - ✅ `repo` (Full control of private repositories)
   - Click "Generate token"
   - **COPY THE TOKEN** (you won't see it again!)

2. **Use Token in Repository URL**
   - Format: `https://USERNAME:TOKEN@github.com/rrunolfson/Newlmwebsite.git`
   - Example: `https://rrunolfson:ghp_xxxxxxxxxxxx@github.com/rrunolfson/Newlmwebsite.git`
   - Replace `USERNAME` with your GitHub username
   - Replace `TOKEN` with the token you just created

### Option 3: Make Repository Public (If Appropriate)

If this is not sensitive code:
1. Go to GitHub repository → Settings
2. Scroll to "Danger Zone"
3. Click "Change visibility" → "Make public"
4. Then use: `https://github.com/rrunolfson/Newlmwebsite.git` (no credentials needed)

## �📋 Verification Checklist

After making the cPanel changes:

- [ ] cPanel Git Version Control shows new repository URL
- [ ] Test pull from repository (should succeed)
- [ ] Test deployment (should deploy to `public_html/`)
- [ ] Verify website still works after deployment- [ ] Webhook configured in GitHub (for auto-deployment)
- [ ] Webhook shows green checkmark in GitHub
- [ ] Test push triggers automatic deployment
## 🔄 Deployment Workflow

### With Webhook (Automatic Deployment)

Once webhook is configured, deployments are automatic:

1. **Make changes locally**
   ```bash
   # Make your code changes
   npm run build
   ```

2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Automatic deployment happens!**
   - GitHub sends webhook to cPanel
   - cPanel automatically pulls latest code
   - `.cpanel.yml` executes deployment tasks
   - Website updates in 30-60 seconds

### Without Webhook (Manual Deployment)

If webhook is not set up:

1. **Make changes locally**
   ```bash
   # Make your code changes
   npm run build
   ```

2. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

3. **Deploy via cPanel**
   - Log into cPanel → Git Version Control
   - Click "Manage" on your repository
   - Click "Pull or Deploy" tab
   - Click "Update from Remote" to get latest code
   - Click "Deploy HEAD Commit" to deploy to website

## 📝 Files Modified

The following files were automatically updated:

1. **Git Configuration**
   - `.git/config` (local Git remote URL)

2. **Documentation**
   - `DEPLOYMENT-SUMMARY.txt` (repository URL reference)

## 🔧 Configuration Files

The following files are already configured and don't need changes:

- **`.cpanel.yml`** - Contains deployment tasks (no repo URL)
- **`package.json`** - No repository field (as it's a private project)
- **`.htaccess`** - Server configuration (no repo references)

## ⚠️ Important Notes

1. **GitHub Repository**: Ensure the new repository `Newlmwebsite` exists on GitHub and has all your code
2. **Branch Name**: Make sure you're using the correct branch (usually `main` or `master`)
3. **Credentials**: You may need to re-enter GitHub credentials in cPanel if authentication is required
4. **SSH Keys**: If you were using SSH keys, you may need to reconfigure them in cPanel for the new repository

## 🆘 Troubleshooting

### Error: "could not read Username" or "No such device or address"
**Cause**: cPanel can't authenticate with GitHub (non-interactive environment)
**Solutions**:
- Use SSH with SSH key (Option 1 above) - RECOMMENDED
- Use HTTPS with embedded personal access token (Option 2 above)
- Make repository public (Option 3 above)
- Plain HTTPS URLs (`https://github.com/...`) will NOT work without embedded credentials

### cPanel can't connect to new repository
- Verify the repository URL format matches one of the authentication options
- If using SSH: Verify SSH key is authorized in cPanel and added to GitHub
- If using token: Verify token has `repo` scope and hasn't expired
- Check if the repository exists and is accessible

### SSH connection fails
- Verify SSH key is authorized in cPanel (Security → SSH Access)
- Verify public key is added to GitHub (Settings → SSH keys)
- Try regenerating the key if issues persist

### Deployment fails
- Check `.cpanel.yml` syntax
- Verify file paths in `.cpanel.yml`
- Check cPanel error logs

### Website doesn't update
- Ensure you deployed after pulling latest code
- Check that files are in the correct location
- Clear browser cache
### Webhook not triggering
- Check webhook status in GitHub (Settings → Webhooks)
- Click on webhook to see recent delivery attempts
- Verify webhook URL is correct (from cPanel)
- Check that webhook is set to "push" events
- Ensure webhook is marked as "Active"
- Try redelivering a recent webhook payload manually

### Webhook shows errors
- Red X in GitHub webhooks means delivery failed
- Check webhook delivery details for error message
- Verify cPanel webhook URL is accessible
- Ensure no firewall blocking GitHub's webhook IPs
- Try regenerating webhook URL in cPanel

---

**Updated**: January 31, 2026
**Status**: Local configuration complete, cPanel and webhook setup
**Status**: Local configuration complete, cPanel update required

# GoDaddy Deployment Guide

## Build Summary

✅ **Build Status**: SUCCESSFUL  
📦 **Build Output**: `dist/` folder  
📊 **Total Size**: 0.78 MB  
🗂️ **Total Files**: 5 files

## Build Output Structure

```
dist/
├── index.html (entry point)
├── favicon.svg
├── logo.png
└── assets/
    ├── index-DHaIz2xh.css (104.35 KB)
    └── index-VlM6OIYG.js (362.16 KB)
```

## Deployment Instructions for GoDaddy

### Option 1: File Manager Upload (Recommended for Small Sites)

1. **Log in to your GoDaddy Account**
   - Go to https://www.godaddy.com
   - Navigate to "My Products" → "Web Hosting"

2. **Access File Manager or FTP**
   - Click "Manage" next to your hosting plan
   - Click "File Manager" or set up FTP access

3. **Navigate to the public directory**
   - This is usually `public_html/` or `www/` or `httpdocs/`
   - Clear any existing files if this is a fresh install

4. **Upload ALL files from the `dist` folder**
   - Upload `index.html` to the root
   - Upload `favicon.svg` and `logo.png` to the root
   - Create an `assets/` folder and upload both CSS and JS files

5. **Set Correct Permissions**
   - Files: 644
   - Folders: 755

6. **Test Your Site**
   - Visit your domain (e.g., https://yourdomain.com)
   - The site should load immediately

### Option 2: FTP Deployment

1. **Get FTP Credentials from GoDaddy**
   - In your hosting control panel, find FTP settings
   - Note your FTP host, username, and password

2. **Use an FTP Client** (FileZilla, WinSCP, or Cyberduck)
   ```
   Host: ftp.yourdomain.com (or IP address)
   Username: your_ftp_username
   Password: your_ftp_password
   Port: 21 (or 22 for SFTP)
   ```

3. **Upload the dist folder contents**
   - Navigate to `public_html/` on the remote side
   - Upload all files from your local `dist/` folder
   - Maintain the folder structure (especially the `assets/` folder)

4. **Verify the upload**
   - Check that all 5 files are present on the server
   - Ensure the `assets` folder contains both files

### Option 3: Automated Deployment via FTP (PowerShell)

You can automate future deployments using this PowerShell script:

```powershell
# FTP Configuration
$ftpServer = "ftp://ftp.yourdomain.com"
$ftpUsername = "your_username"
$ftpPassword = "your_password"
$localPath = "C:\Users\rruno\OneDrive - lastmileinc.ai\Documents\Last Mile\Website\dist"
$remotePath = "/public_html"

# Upload files
Get-ChildItem -Path $localPath -Recurse -File | ForEach-Object {
    $relativePath = $_.FullName.Substring($localPath.Length)
    $remoteFile = "$remotePath$($relativePath.Replace('\', '/'))"
    $uri = "$ftpServer$remoteFile"
    
    Write-Host "Uploading: $relativePath"
    
    $ftpRequest = [System.Net.FtpWebRequest]::Create($uri)
    $ftpRequest.Credentials = New-Object System.Net.NetworkCredential($ftpUsername, $ftpPassword)
    $ftpRequest.Method = [System.Net.WebRequestMethods+Ftp]::UploadFile
    
    $fileContent = [System.IO.File]::ReadAllBytes($_.FullName)
    $ftpRequest.ContentLength = $fileContent.Length
    
    $requestStream = $ftpRequest.GetRequestStream()
    $requestStream.Write($fileContent, 0, $fileContent.Length)
    $requestStream.Close()
}

Write-Host "Deployment complete!"
```

## Important GoDaddy-Specific Notes

### 1. .htaccess Configuration for React Router

Since this is a single-page application (SPA) using React Router, you'll need to add a `.htaccess` file to handle client-side routing:

**Create file: `dist/.htaccess`**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures that all routes (like `/about`, `/contact`, etc.) work correctly.

### 2. Custom Domain Setup

If you haven't already:
- Point your domain to your hosting in GoDaddy DNS settings
- Wait 24-48 hours for DNS propagation

### 3. SSL Certificate

Enable SSL in your GoDaddy hosting panel:
- Most GoDaddy plans include free SSL
- Go to hosting control panel → SSL Certificates → Install
- Force HTTPS by adding to `.htaccess`:
```apache
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 4. Performance Optimization

After deployment, consider:
- **Enable Gzip Compression** in GoDaddy cPanel
- **Set Browser Caching** headers via `.htaccess`
- **Use CDN** if available in your plan

## Rebuild and Redeploy

When you make changes to your site:

```powershell
# 1. Build the project
npm run build

# 2. Upload the new dist/ folder contents to GoDaddy
# (Use File Manager, FTP, or the automation script above)
```

## Troubleshooting

### Site shows blank page
- Check browser console for errors
- Verify all files uploaded correctly
- Check that `.htaccess` is in place

### Routes return 404
- Ensure `.htaccess` is uploaded
- Verify mod_rewrite is enabled (usually is on GoDaddy)

### Assets not loading
- Check that `assets/` folder is present
- Verify file permissions (644 for files, 755 for folders)
- Check browser console for 404 errors

## Build Information

- **Build Tool**: Vite 6.3.5
- **Framework**: React 18.3.1 with React Router 7
- **Build Time**: 7.54s
- **Optimizations**: Minified, tree-shaken, gzip-compressed

## Support

For GoDaddy-specific issues:
- GoDaddy Support: https://www.godaddy.com/help
- Phone: 480-505-8877

For build issues, rebuild with:
```powershell
npm run build
```

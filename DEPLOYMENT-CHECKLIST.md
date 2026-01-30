# GoDaddy Deployment Checklist

## ✅ Pre-Deployment (Completed)

- [x] Project built successfully (`npm run build`)
- [x] Build output created in `dist/` folder (0.78 MB, 5 files)
- [x] .htaccess file created for SPA routing
- [x] Deployment documentation created

## 📋 Deployment Steps

### 1. Prepare for Upload
- [ ] Verify all files exist in `dist/` folder:
  - [ ] index.html
  - [ ] favicon.svg
  - [ ] logo.png
  - [ ] .htaccess
  - [ ] assets/index-DHaIz2xh.css
  - [ ] assets/index-VlM6OIYG.js

### 2. Access GoDaddy Hosting
- [ ] Log in to GoDaddy account
- [ ] Navigate to "My Products" → "Web Hosting"
- [ ] Click "Manage" on your hosting plan
- [ ] Open "File Manager" or FTP

### 3. Upload Files
- [ ] Navigate to public directory (public_html/ or www/)
- [ ] Clear existing files (if fresh install)
- [ ] Upload all files from `dist/` folder maintaining structure
- [ ] Verify .htaccess file is uploaded (may be hidden)
- [ ] Verify assets/ folder contains both CSS and JS files

### 4. Set Permissions
- [ ] Set file permissions to 644
- [ ] Set folder permissions to 755

### 5. Configure SSL (If Not Already Done)
- [ ] In GoDaddy panel, go to SSL Certificates
- [ ] Install/Enable free SSL certificate
- [ ] After SSL is active, uncomment HTTPS redirect in .htaccess
- [ ] Re-upload .htaccess file

### 6. Test Deployment
- [ ] Visit your domain in browser
- [ ] Test home page loads
- [ ] Test navigation to different pages (About, Contact, etc.)
- [ ] Check browser console for errors
- [ ] Test on mobile device
- [ ] Verify all images load
- [ ] Check site performance

### 7. Post-Deployment Optimization
- [ ] Enable Gzip compression in GoDaddy cPanel
- [ ] Set up browser caching (already in .htaccess)
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Set up website monitoring/analytics

## 📁 Files to Upload

**Root Level (6 files):**
```
dist/
├── index.html (0.45 KB) - Main entry point
├── favicon.svg - Site icon
├── logo.png - Site logo
├── .htaccess - Server configuration
└── assets/ (folder)
    ├── index-DHaIz2xh.css (104.35 KB) - Styles
    └── index-VlM6OIYG.js (362.16 KB) - Application code
```

## 🔧 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console, verify all files uploaded |
| 404 on routes | Ensure .htaccess is uploaded and mod_rewrite enabled |
| Assets not loading | Check assets/ folder exists with both files |
| HTTPS issues | Wait for SSL to provision (up to 24 hours) |
| DNS not resolving | Wait 24-48 hours for DNS propagation |

## 📞 Support Contacts

- **GoDaddy Support**: 480-505-8877
- **GoDaddy Help Center**: https://www.godaddy.com/help
- **Project Location**: `C:\Users\rruno\OneDrive - lastmileinc.ai\Documents\Last Mile\Website`

## 🔄 Future Deployments

When you make changes:
1. Run: `npm run build`
2. Upload contents of `dist/` folder to GoDaddy
3. Clear browser cache and test

---

**Deployment Date**: January 30, 2026  
**Build Version**: 0.0.1  
**Build Tool**: Vite 6.3.5

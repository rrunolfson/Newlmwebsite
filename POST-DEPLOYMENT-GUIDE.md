# Post-Deployment: Performance, SEO & Monitoring Guide

## 📊 Part 1: Google Analytics Setup

### Step 1: Create Google Analytics Account

1. **Go to Google Analytics**
   - Visit: https://analytics.google.com
   - Sign in with your Google account

2. **Create a Property**
   - Click "Admin" (gear icon in bottom left)
   - Under "Property" column, click "Create Property"
   - Fill in:
     - Property name: "Last Mile Website"
     - Reporting time zone: Your timezone
     - Currency: USD
   - Click "Next"

3. **Add Business Details**
   - Industry category: Select relevant category
   - Business size: Select your company size
   - Click "Create"

4. **Set Up Data Stream**
   - Choose "Web"
   - Enter your website URL: https://yourdomain.com
   - Stream name: "Last Mile Production"
   - Click "Create stream"

5. **Get Your Measurement ID**
   - Copy the Measurement ID (looks like `G-XXXXXXXXXX`)
   - Keep this page open

### Step 2: Install Google Analytics in Your Website

1. **Install gtag package**
   ```powershell
   npm install react-ga4
   ```

2. **Create analytics configuration file**
   - Create: `src/utils/analytics.ts`
   
   ```typescript
   import ReactGA from 'react-ga4';

   const TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your Measurement ID

   export const initGA = () => {
     ReactGA.initialize(TRACKING_ID);
   };

   export const logPageView = () => {
     ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
   };

   export const logEvent = (category: string, action: string, label?: string) => {
     ReactGA.event({
       category,
       action,
       label,
     });
   };
   ```

3. **Update your App.tsx**
   - Add this at the top of your component:
   
   ```typescript
   import { useEffect } from 'react';
   import { useLocation } from 'react-router';
   import { initGA, logPageView } from './utils/analytics';

   // In your App component:
   useEffect(() => {
     initGA();
     logPageView();
   }, []);

   const location = useLocation();
   useEffect(() => {
     logPageView();
   }, [location]);
   ```

4. **Rebuild and deploy**
   ```powershell
   npm run build
   # Upload dist/ folder to GoDaddy
   ```

5. **Verify Installation**
   - Visit your website
   - In Google Analytics, go to "Reports" → "Realtime"
   - You should see your visit within 30 seconds

---

## 🔍 Part 2: Google Search Console Setup

### Step 1: Add Your Property

1. **Go to Google Search Console**
   - Visit: https://search.google.com/search-console
   - Sign in with your Google account

2. **Add Property**
   - Click "Add Property"
   - Choose "URL prefix" option
   - Enter: `https://yourdomain.com`
   - Click "Continue"

### Step 2: Verify Ownership

**Method A: HTML File Upload (Easiest for GoDaddy)**

1. Click "HTML file" tab
2. Download the verification file (e.g., `google1234567890abcdef.html`)
3. Upload this file to your `dist/` folder root
4. Rebuild: `npm run build`
5. Upload `dist/` contents to GoDaddy
6. In Search Console, click "Verify"

**Method B: HTML Tag (Alternative)**

1. Click "HTML tag" tab
2. Copy the meta tag provided
3. Add it to your `index.html` in the `<head>` section
4. Rebuild and redeploy
5. Click "Verify"

### Step 3: Submit Sitemap

1. **Create sitemap file**
   - Create: `public/sitemap.xml`
   
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://yourdomain.com/</loc>
       <lastmod>2026-01-30</lastmod>
       <changefreq>weekly</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>https://yourdomain.com/about</loc>
       <lastmod>2026-01-30</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://yourdomain.com/solutions</loc>
       <lastmod>2026-01-30</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://yourdomain.com/contact</loc>
       <lastmod>2026-01-30</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     <!-- Add all your other pages -->
   </urlset>
   ```

2. **Rebuild and deploy**
   ```powershell
   npm run build
   # Upload dist/ to GoDaddy
   ```

3. **Submit to Search Console**
   - In Search Console, click "Sitemaps" in left menu
   - Enter: `sitemap.xml`
   - Click "Submit"

4. **Create robots.txt**
   - Create: `public/robots.txt`
   
   ```
   User-agent: *
   Allow: /
   Sitemap: https://yourdomain.com/sitemap.xml
   ```

---

## ⚡ Part 3: PageSpeed Insights & Optimization

### Step 1: Run Initial Test

1. **Visit PageSpeed Insights**
   - Go to: https://pagespeed.web.dev/
   - Enter your domain: `https://yourdomain.com`
   - Click "Analyze"
   - Wait for results (30-60 seconds)

2. **Review Scores**
   - Performance (aim for 90+)
   - Accessibility (aim for 95+)
   - Best Practices (aim for 95+)
   - SEO (aim for 95+)

### Step 2: Implement Common Fixes

**Add Meta Tags to index.html**

Update your `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO Meta Tags -->
    <title>Last Mile - Your Company Tagline</title>
    <meta name="description" content="Last Mile provides innovative solutions for [describe your service in 150 characters]" />
    <meta name="keywords" content="last mile, solutions, your, key, words" />
    <meta name="author" content="Last Mile Inc." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourdomain.com/" />
    <meta property="og:title" content="Last Mile - Your Company Tagline" />
    <meta property="og:description" content="Last Mile provides innovative solutions..." />
    <meta property="og:image" content="https://yourdomain.com/logo.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourdomain.com/" />
    <meta property="twitter:title" content="Last Mile - Your Company Tagline" />
    <meta property="twitter:description" content="Last Mile provides innovative solutions..." />
    <meta property="twitter:image" content="https://yourdomain.com/logo.png" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    
    <!-- Preconnect to external domains (if you add external resources later) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    
    <!-- Theme color for mobile browsers -->
    <meta name="theme-color" content="#000000" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

**Optimize Images in GoDaddy**

If PageSpeed shows image issues:
1. Use WebP format instead of PNG/JPG
2. Compress images at https://tinypng.com/
3. Replace in your `public/` folder
4. Rebuild and redeploy

### Step 3: Enable GoDaddy Optimizations

1. **Log in to GoDaddy cPanel**
2. **Enable Gzip Compression** (if not already)
   - Find "Optimize Website" or "MultiPHP INI Editor"
   - Enable compression
3. **Check your .htaccess** (already configured in deployment)

---

## 🔔 Part 4: Uptime Monitoring

### Option A: UptimeRobot (Free, Recommended)

1. **Sign up for UptimeRobot**
   - Visit: https://uptimerobot.com/
   - Click "Sign Up" (free plan available)
   - Verify your email

2. **Add New Monitor**
   - Click "Add New Monitor"
   - Fill in:
     - Monitor Type: HTTP(s)
     - Friendly Name: "Last Mile Website"
     - URL: `https://yourdomain.com`
     - Monitoring Interval: 5 minutes (free)
   - Click "Create Monitor"

3. **Set Up Alerts**
   - Click on your monitor
   - Click "Alert Contacts"
   - Click "Add Alert Contact"
   - Choose:
     - Email (enter your email)
     - SMS (if you want text alerts - may require paid plan)
   - Click "Create Alert Contact"
   - Verify your email

4. **Configure Alert Timing**
   - In monitor settings, set:
     - "Alert When": Down
     - "Alert After": 2 minutes
   - This prevents false alarms

### Option B: Pingdom (Alternative)

1. Visit https://www.pingdom.com/
2. Sign up for free trial (14 days)
3. Add your website URL
4. Configure email alerts

### Option C: StatusCake (Free Option)

1. Visit https://www.statuscake.com/
2. Sign up (free plan available)
3. Add uptime test with your domain
4. Set up email notifications

---

## 📈 Part 5: GoDaddy Built-in Analytics

### Access GoDaddy Website Analytics

1. **Log in to GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Navigate to Analytics**
   - Click "My Products"
   - Find your Web Hosting plan
   - Click "Manage"
   - Look for "Website Analytics" or "Statistics"

3. **View Available Metrics**
   - Visitor counts
   - Page views
   - Bandwidth usage
   - Popular pages
   - Traffic sources

4. **Set Up Email Reports** (if available)
   - Look for "Reports" or "Email Reports"
   - Configure weekly or monthly summaries

---

## 📧 Part 6: Email Alert Configuration

### Set Up Critical Alerts

**Create Alert Email Rules**

1. **For UptimeRobot/StatusCake**
   - Already configured in monitoring setup above
   - Test by temporarily taking site offline

2. **For GoDaddy Hosting Alerts**
   - In GoDaddy cPanel
   - Go to "Contact Information"
   - Ensure your email is correct
   - Enable notifications for:
     - Disk space warnings
     - CPU usage alerts
     - SSL certificate expiration

3. **Create Email Filter** (Gmail example)
   - Set up filters to flag monitoring emails
   - Create labels like "🔴 Website Down" for quick visibility

---

## 📋 Implementation Checklist

### Analytics & SEO
- [ ] Google Analytics installed and verified
- [ ] Google Search Console verified
- [ ] Sitemap created and submitted
- [ ] robots.txt created
- [ ] Meta tags added to index.html
- [ ] Open Graph tags configured
- [ ] PageSpeed Insights score reviewed
- [ ] Images optimized (if needed)

### Monitoring
- [ ] UptimeRobot monitor created
- [ ] Email alerts configured and tested
- [ ] Alert contact verified
- [ ] GoDaddy analytics reviewed
- [ ] Email filter rules created

### Performance
- [ ] Gzip compression enabled
- [ ] Browser caching configured (.htaccess)
- [ ] SSL certificate active
- [ ] HTTPS redirect enabled

---

## 🔄 Regular Maintenance Schedule

### Daily
- Check uptime alerts (if any)

### Weekly
- Review Google Analytics traffic
- Check for 404 errors in Search Console

### Monthly
- Run PageSpeed Insights test
- Review GoDaddy analytics
- Check Search Console performance
- Update sitemap if new pages added
- Review and respond to any security alerts

---

## 📞 Support Resources

- **Google Analytics**: https://support.google.com/analytics
- **Search Console**: https://support.google.com/webmasters
- **UptimeRobot**: https://uptimerobot.com/help/
- **GoDaddy Support**: 480-505-8877

---

## 🎯 Success Metrics to Track

After 30 days, you should see:
- ✅ Google Analytics showing visitor data
- ✅ Search Console showing impressions and clicks
- ✅ PageSpeed score of 80+ on all metrics
- ✅ 99.9%+ uptime from monitoring service
- ✅ Pages indexed in Google search

---

**Next Steps**: Follow each section in order, starting with Google Analytics. Each setup takes 10-15 minutes.

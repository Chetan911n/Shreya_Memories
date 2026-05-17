# 🚀 Deployment Guide

## Quick Deploy Options

### 1. Vercel (Recommended) ⚡

**Easiest and fastest deployment for Vite + React apps**

#### Steps:
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

**Done! Your app is live in ~2 minutes.**

#### Custom Domain:
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

---

### 2. Netlify 🌐

**Great for static sites with continuous deployment**

#### Steps:
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub
5. Build settings (auto-detected):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

#### Environment Variables:
- Site settings → Environment variables
- Add any API keys or secrets

---

### 3. GitHub Pages 📄

**Free hosting directly from your GitHub repo**

#### Steps:

1. **Install gh-pages package**:
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**:
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Update vite.config.js**:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'
})
```

4. **Deploy**:
```bash
npm run deploy
```

5. **Enable GitHub Pages**:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Save

---

### 4. Firebase Hosting 🔥

**Google's hosting with CDN and SSL**

#### Steps:

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase**:
```bash
firebase init hosting
```

Select:
- Public directory: `dist`
- Single-page app: `Yes`
- GitHub integration: Optional

4. **Build and Deploy**:
```bash
npm run build
firebase deploy
```

---

### 5. Render 🎨

**Free tier with automatic deploys**

#### Steps:
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. New → Static Site
4. Connect GitHub repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Create Static Site

---

## Pre-Deployment Checklist ✅

### 1. Optimize Images
```bash
# Install image optimization tool
npm install -g sharp-cli

# Optimize images
sharp -i input.jpg -o output.jpg -q 80
```

### 2. Update Meta Tags
Edit `index.html`:
```html
<head>
  <meta name="description" content="Beautiful memory gallery app">
  <meta property="og:title" content="Beautiful Memories">
  <meta property="og:description" content="Our precious moments">
  <meta property="og:image" content="https://your-url.com/preview.jpg">
  <meta name="twitter:card" content="summary_large_image">
</head>
```

### 3. Add Favicon
Place `favicon.ico` in the `public` folder (create if needed)

### 4. Test Build Locally
```bash
npm run build
npm run preview
```

### 5. Check Bundle Size
```bash
npm run build
# Check dist folder size
```

---

## Environment Variables

### For API Keys or Secrets

1. **Create `.env` file** (already in .gitignore):
```env
VITE_API_KEY=your_api_key_here
VITE_API_URL=https://api.example.com
```

2. **Use in code**:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

3. **Add to hosting platform**:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- GitHub Pages: Use GitHub Secrets

---

## Performance Optimization

### 1. Lazy Loading
```javascript
import { lazy, Suspense } from 'react'

const MemorySection = lazy(() => import('./components/MemorySection'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MemorySection />
    </Suspense>
  )
}
```

### 2. Image Optimization
Use services like:
- [Cloudinary](https://cloudinary.com)
- [ImageKit](https://imagekit.io)
- [Imgix](https://imgix.com)

### 3. Code Splitting
Vite automatically splits code. Check `dist` folder after build.

---

## Custom Domain Setup

### 1. Buy Domain
- [Namecheap](https://namecheap.com)
- [GoDaddy](https://godaddy.com)
- [Google Domains](https://domains.google)

### 2. Configure DNS

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

### 3. Enable HTTPS
Most platforms enable HTTPS automatically with Let's Encrypt.

---

## Monitoring & Analytics

### Google Analytics

1. **Get tracking ID** from [analytics.google.com](https://analytics.google.com)

2. **Add to index.html**:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics
- Enable in Vercel dashboard
- Automatic performance monitoring

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vanta.js Not Loading
- Check if WebGL is supported
- Ensure Three.js is bundled correctly
- Check browser console for errors

### Images Not Loading
- Use absolute URLs for images
- Check CORS settings
- Verify image URLs are accessible

### Routing Issues (404 on refresh)
Add `_redirects` file in `public` folder:
```
/*    /index.html   200
```

---

## Post-Deployment

### 1. Test Everything
- ✅ All pages load
- ✅ Images display
- ✅ Animations work
- ✅ Language toggle works
- ✅ Lightbox functions
- ✅ Mobile responsive

### 2. Share Your Site
- Social media
- QR code
- Email

### 3. Monitor Performance
- Google PageSpeed Insights
- Lighthouse audit
- GTmetrix

---

## Continuous Deployment

### Auto-deploy on Git Push

**Vercel/Netlify:**
- Automatically deploys on push to main branch
- Preview deployments for pull requests

**GitHub Actions:**
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## Cost Comparison

| Platform | Free Tier | Bandwidth | Custom Domain | SSL |
|----------|-----------|-----------|---------------|-----|
| **Vercel** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| **Netlify** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| **GitHub Pages** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |
| **Firebase** | ✅ Yes | 10GB/month | ✅ Free | ✅ Free |
| **Render** | ✅ Yes | 100GB/month | ✅ Free | ✅ Free |

---

## Support & Help

### Documentation
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

### Community
- [Stack Overflow](https://stackoverflow.com)
- [Reddit r/reactjs](https://reddit.com/r/reactjs)
- [Discord communities](https://discord.com)

---

**🎉 Congratulations! Your beautiful memory app is now live!**

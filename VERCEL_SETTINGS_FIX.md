# ⚙️ Vercel Settings - Exact Configuration

## 🎯 THE REAL FIX - Override Settings in Vercel

The issue is likely in Vercel's build settings. Here's exactly what to do:

---

## Step-by-Step Fix

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2. Click Your Project
Click on: `shreya-memories` (or whatever you named it)

### 3. Go to Settings
Click **Settings** tab at the top

### 4. Click General
In the left sidebar, click **General**

### 5. Find "Build & Development Settings"
Scroll down to this section

### 6. Click "Override"
Click the **Override** button

### 7. Set These EXACT Values:

```
┌─────────────────────────────────────────┐
│ Framework Preset                        │
│ ┌─────────────────────────────────────┐ │
│ │ Vite                            ▼   │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Build Command                           │
│ ┌─────────────────────────────────────┐ │
│ │ npm run build                       │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Output Directory                        │
│ ┌─────────────────────────────────────┐ │
│ │ dist                                │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ Install Command                         │
│ ┌─────────────────────────────────────┐ │
│ │ npm install                         │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

### 8. Save Changes
Click **Save** button at the bottom

### 9. Redeploy
- Go to **Deployments** tab
- Click the three dots (...) on the latest deployment
- Click **Redeploy**
- Wait 2-3 minutes

---

## ✅ Critical Settings

Make sure these are EXACTLY as shown:

| Setting | Value | ⚠️ Common Mistakes |
|---------|-------|-------------------|
| **Framework** | `Vite` | Not "Other" or "React" |
| **Build Command** | `npm run build` | Not "vite build" |
| **Output Directory** | `dist` | Not "./dist" or "/dist" or "build" |
| **Install Command** | `npm install` | Not "yarn install" |
| **Root Directory** | `.` | Not "./" or empty |

---

## 🔍 Check Root Directory Too

While in Settings → General:

Find **Root Directory** section:
```
┌─────────────────────────────────────────┐
│ Root Directory                          │
│ ┌─────────────────────────────────────┐ │
│ │ .                                   │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

Should be just a dot: `.`

---

## 🚀 After Saving and Redeploying

Watch the build logs. You should see:

```
✓ Installing dependencies
✓ Running "npm run build"
✓ vite v5.1.0 building for production...
✓ transforming...
✓ ✓ 50 modules transformed.
✓ rendering chunks...
✓ computing gzip size...
✓ dist/index.html                   0.XX kB │ gzip: X.XX kB
✓ dist/assets/index-XXXXX.css      XX.XX kB │ gzip: X.XX kB
✓ dist/assets/index-XXXXX.js      XXX.XX kB │ gzip: XX.XX kB
✓ ✓ built in XXXXms
✓ Build Completed
✓ Uploading build outputs...
✓ Deployment ready
```

---

## 🎯 If Build Succeeds But Still 404

Then push the updated vercel.json:

```bash
cd "/Users/chetan/Desktop/Shreya Memories"
git add .
git commit -m "Update Vercel config and add redirects"
git push
```

Wait for auto-redeploy (1-2 minutes)

---

## 🔄 Alternative: Delete and Reimport

If settings don't save or keep resetting:

### 1. Delete Project
- Settings → General → scroll to bottom
- Click "Delete Project"
- Type project name to confirm
- Delete

### 2. Import Fresh
- Click "New Project"
- Import from GitHub
- Select `Chetan911n/Shreya_Memories`
- Configure with settings above
- Deploy

---

## 📊 Verify Build Output

After successful build, check:

1. Go to deployment
2. Click "Source" tab
3. You should see:
   ```
   dist/
   ├── index.html
   ├── assets/
   │   ├── index-[hash].js
   │   ├── index-[hash].css
   │   └── favicon.svg
   └── ...
   ```

If you see these files, build is working!

---

## 🎉 Success Indicators

After correct configuration:

- ✅ Build completes without errors
- ✅ dist/index.html is created
- ✅ Deployment shows "Ready"
- ✅ Visiting URL shows your app (not 404)
- ✅ All features work

---

## 🆘 Still 404 After All This?

Try these URLs:

1. `https://your-app.vercel.app/`
2. `https://your-app.vercel.app/index.html`

If #2 works but #1 doesn't:
- The routing config is the issue
- vercel.json needs to be updated
- Push the latest vercel.json I created

If BOTH are 404:
- Files aren't being deployed
- Check Output Directory is exactly `dist`
- Check build logs for errors

---

## 💡 Pro Tip

After changing settings:
1. Always click **Save**
2. Always **Redeploy** (don't just wait)
3. Check build logs for errors
4. Clear browser cache before testing

---

**Go to Vercel Settings NOW and override the build settings! 🎯**

This is the most common cause of 404 errors on Vercel!

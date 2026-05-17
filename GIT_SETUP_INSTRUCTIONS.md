# 🚀 Git Setup Instructions

## Connect to GitHub Repository and Push

Follow these steps in your terminal:

### Step 1: Initialize Git Repository
```bash
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/Chetan911n/Shreya_Memories.git
```

### Step 3: Create and Switch to New Branch
```bash
git checkout -b feature/beautiful-memory-app
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Commit Changes
```bash
git commit -m "✨ Initial commit: Beautiful Memory App

Features:
- Bilingual welcome page (English & Marathi)
- Custom animated particle background
- Beautiful memory gallery with 9 cards
- Parallax scroll effects
- Lightbox viewer with keyboard navigation
- Fully responsive design
- Framer Motion animations
- AOS scroll animations

Tech Stack:
- React 18.3 + Vite
- Framer Motion
- React Scroll Parallax
- AOS
- React Icons"
```

### Step 6: Push to GitHub
```bash
git push -u origin feature/beautiful-memory-app
```

---

## Alternative: One-Line Command

Copy and paste this entire command:

```bash
git init && git remote add origin https://github.com/Chetan911n/Shreya_Memories.git && git checkout -b feature/beautiful-memory-app && git add . && git commit -m "✨ Initial commit: Beautiful Memory App with animations" && git push -u origin feature/beautiful-memory-app
```

---

## Verify Setup

After pushing, verify with:

```bash
git remote -v
git branch
git log --oneline
```

---

## Expected Output

You should see:
```
✅ Branch 'feature/beautiful-memory-app' set up to track remote branch
✅ Successfully pushed to GitHub
```

---

## View on GitHub

Visit: https://github.com/Chetan911n/Shreya_Memories/tree/feature/beautiful-memory-app

---

## Troubleshooting

### If you get "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Chetan911n/Shreya_Memories.git
```

### If you need to authenticate
GitHub may ask for credentials. Use:
- **Username**: Your GitHub username
- **Password**: Personal Access Token (not your GitHub password)

To create a Personal Access Token:
1. Go to GitHub.com → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. Select scopes: `repo` (full control)
5. Copy the token and use it as password

### If branch already exists
```bash
git checkout feature/beautiful-memory-app
git pull origin feature/beautiful-memory-app
```

---

## Next Steps After Pushing

1. **Create Pull Request** on GitHub
2. **Review Changes** in the PR
3. **Merge to Main** when ready
4. **Deploy** using Vercel/Netlify

---

## Quick Commands Reference

```bash
# Check status
git status

# View branches
git branch -a

# Switch branches
git checkout branch-name

# Pull latest changes
git pull origin feature/beautiful-memory-app

# Push new changes
git add .
git commit -m "Your message"
git push
```

---

## Files That Will Be Committed

✅ All source code files
✅ Configuration files
✅ Documentation (README, guides)
✅ Package.json and dependencies list

❌ node_modules (excluded by .gitignore)
❌ dist folder (excluded by .gitignore)
❌ .env files (excluded by .gitignore)

---

## 🎉 Success!

Once pushed, your beautiful memory app will be on GitHub and ready to:
- Share with others
- Deploy to production
- Collaborate with team members
- Track changes and versions

**Repository**: https://github.com/Chetan911n/Shreya_Memories.git
**Branch**: feature/beautiful-memory-app

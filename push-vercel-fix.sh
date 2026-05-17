#!/bin/bash

echo "🔧 Pushing Vercel configuration fix to GitHub..."
echo ""

# Add the new files
git add vercel.json VERCEL_FIX.md

# Commit
git commit -m "🔧 Add Vercel configuration file for deployment

- Added vercel.json with build settings
- Configured framework detection
- Added SPA routing support"

# Push to GitHub
git push

echo ""
echo "✅ Files pushed to GitHub!"
echo "🚀 Now go to Vercel and click 'Redeploy'"
echo ""
echo "Your app will be live at: https://shreya-memories.vercel.app"

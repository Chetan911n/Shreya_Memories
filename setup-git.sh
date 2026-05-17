#!/bin/bash

# Initialize git repository
git init

# Add remote repository
git remote add origin https://github.com/Chetan911n/Shreya_Memories.git

# Create and checkout new branch
git checkout -b feature/beautiful-memory-app

# Add all files
git add .

# Commit changes
git commit -m "✨ Initial commit: Beautiful Memory App with animated background

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
- React 18.3
- Vite
- Framer Motion
- React Scroll Parallax
- AOS
- React Icons"

# Push to remote
git push -u origin feature/beautiful-memory-app

echo "✅ Successfully pushed to GitHub!"
echo "🌿 Branch: feature/beautiful-memory-app"
echo "🔗 Repository: https://github.com/Chetan911n/Shreya_Memories.git"

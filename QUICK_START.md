# ⚡ Quick Start Guide

## 🎯 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

---

## 🎨 What You'll See

### 1. Welcome Page
- Beautiful 3D animated birds background (Vanta.js)
- Language toggle (English/Marathi) in top-right
- Floating hearts animation
- "Explore Memories" button
- Smooth scroll indicator

### 2. Memory Gallery
- 9 stunning memory cards with parallax effects
- Hover to see titles and hearts
- Click any card to open full-screen lightbox
- Navigate with arrow buttons or keyboard
- Press ESC to close

---

## 🎮 Controls

### Welcome Page
- **Language Toggle**: Click "English" or "मराठी"
- **Explore Button**: Scroll to memories
- **Mouse**: Interactive 3D background

### Memory Gallery
- **Click**: Open memory in lightbox
- **Arrow Keys**: Navigate between memories (← →)
- **ESC Key**: Close lightbox
- **Mouse Hover**: See memory details

---

## 📝 Customize Your Memories

### Edit Memory Data
Open `src/components/MemorySection.jsx` and find the `memories` array:

```javascript
const memories = [
  {
    id: 1,
    image: 'YOUR_IMAGE_URL',           // Change this
    title: 'Your Title',                // Change this
    titleMr: 'तुमचे शीर्षक',           // Change this
    description: 'Your description',    // Change this
    descriptionMr: 'तुमचे वर्णन',      // Change this
    date: 'Month Year'                  // Change this
  },
  // Add more memories...
]
```

### Where to Get Images
- **Unsplash**: https://unsplash.com (Free high-quality photos)
- **Pexels**: https://pexels.com (Free stock photos)
- **Your Own**: Upload to Imgur, Cloudinary, or use local files

---

## 🎨 Change Colors

Edit `src/index.css`:

```css
:root {
  --primary-color: #ff6b9d;      /* Pink - Change this */
  --secondary-color: #c44569;    /* Dark pink - Change this */
  --accent-color: #ffa502;       /* Orange - Change this */
}
```

---

## 🌟 Change Background Effect

Edit `src/components/WelcomePage.jsx`:

### Current: Birds
```javascript
import BIRDS from 'vanta/dist/vanta.birds.min'
```

### Try These:
```javascript
// Waves
import WAVES from 'vanta/dist/vanta.waves.min'

// Clouds
import CLOUDS from 'vanta/dist/vanta.clouds.min'

// Fog
import FOG from 'vanta/dist/vanta.fog.min'

// Net
import NET from 'vanta/dist/vanta.net.min'

// Globe
import GLOBE from 'vanta/dist/vanta.globe.min'
```

Then change the effect initialization:
```javascript
WAVES({  // or CLOUDS, FOG, NET, GLOBE
  el: vantaRef.current,
  THREE: THREE,
  // ... rest of config
})
```

---

## 📱 Test on Mobile

### Using Your Phone
1. Find your computer's IP address:
   ```bash
   # Mac/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. On your phone, visit:
   ```
   http://YOUR_IP_ADDRESS:3000
   ```

### Using Browser DevTools
1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Select mobile device
4. Test responsiveness

---

## 🚀 Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized files ready to deploy.

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Project Files Explained

```
├── src/
│   ├── components/
│   │   ├── WelcomePage.jsx      ← Hero section
│   │   ├── WelcomePage.css      ← Hero styles
│   │   ├── MemorySection.jsx    ← Gallery
│   │   └── MemorySection.css    ← Gallery styles
│   ├── App.jsx                  ← Main component
│   ├── App.css                  ← App styles
│   ├── main.jsx                 ← Entry point
│   └── index.css                ← Global styles
├── index.html                   ← HTML template
├── package.json                 ← Dependencies
└── vite.config.js              ← Build config
```

---

## 🎯 Common Tasks

### Add a New Memory
1. Open `src/components/MemorySection.jsx`
2. Add to `memories` array:
```javascript
{
  id: 10,  // Next number
  image: 'https://images.unsplash.com/photo-xxx',
  title: 'New Memory',
  titleMr: 'नवीन आठवण',
  description: 'Description here',
  descriptionMr: 'येथे वर्णन',
  date: 'May 2024'
}
```

### Change Welcome Text
1. Open `src/components/WelcomePage.jsx`
2. Find the `content` object
3. Edit English and Marathi text

### Adjust Animation Speed
1. Open component CSS file
2. Find animation duration:
```css
animation: float 3s ease-in-out infinite;
/*              ↑ Change this number */
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

### Vanta Not Showing
- Check browser console for errors
- Ensure WebGL is supported
- Try different browser (Chrome recommended)

### Images Not Loading
- Check image URLs are valid
- Ensure internet connection
- Try different image source

### Animations Laggy
- Close other browser tabs
- Reduce number of Vanta birds
- Check GPU performance

---

## 💡 Pro Tips

1. **Use High-Quality Images**: 1920x1080 or higher
2. **Optimize Images**: Use tools like TinyPNG
3. **Test on Multiple Devices**: Mobile, tablet, desktop
4. **Keep It Simple**: Don't add too many effects
5. **Regular Backups**: Commit to Git frequently

---

## 📚 Learn More

### Documentation
- **React**: https://react.dev
- **Vite**: https://vitejs.dev
- **Framer Motion**: https://www.framer.com/motion/
- **Vanta.js**: https://www.vantajs.com

### Tutorials
- **React Basics**: https://react.dev/learn
- **Framer Motion**: https://www.framer.com/motion/introduction/
- **CSS Animations**: https://web.dev/animations/

---

## 🎉 Next Steps

1. ✅ Run the app
2. ✅ Explore features
3. ✅ Add your own memories
4. ✅ Customize colors
5. ✅ Deploy to web
6. ✅ Share with friends!

---

## 🆘 Need Help?

### Check These Files
- `README.md` - Setup instructions
- `PROJECT_OVERVIEW.md` - Detailed features
- `MARATHI_CONTENT_GUIDE.md` - Translation help
- `DEPLOYMENT_GUIDE.md` - Deploy instructions

### Online Resources
- Stack Overflow
- React Discord
- GitHub Issues

---

**🚀 Ready to create beautiful memories? Let's go!**

```bash
npm run dev
```

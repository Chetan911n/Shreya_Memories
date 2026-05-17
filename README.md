# Beautiful Memory App ✨

A stunning React application featuring a bilingual (English & Marathi) welcome page and an elegant memory gallery with modern animations and effects.

## 🎨 Features

- **Vanta.js 3D Animated Background** - Beautiful birds animation on the welcome page
- **Framer Motion Animations** - Smooth, professional animations throughout
- **React Scroll Parallax** - Engaging parallax effects on memory cards
- **AOS (Animate On Scroll)** - Scroll-triggered animations
- **Bilingual Support** - Toggle between English and Marathi
- **Responsive Design** - Works beautifully on all devices
- **Interactive Memory Gallery** - Click to view full-size with navigation
- **Keyboard Navigation** - Use arrow keys and ESC in lightbox

## 🚀 Technologies Used

- React 18.3
- Vite (Fast build tool)
- Framer Motion (Animations)
- Vanta.js + Three.js (3D backgrounds)
- React Scroll Parallax
- AOS (Animate On Scroll)
- React Icons

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:3000`

## 🎯 Usage

- **Language Toggle**: Click the language buttons in the top-right corner
- **Explore Memories**: Click the "Explore Memories" button or scroll down
- **View Memory**: Click any memory card to open the lightbox
- **Navigate**: Use arrow buttons or keyboard arrows to browse memories
- **Close**: Click the X button or press ESC to close the lightbox

## 🎨 Customization

### Change Memory Images

Edit `src/components/MemorySection.jsx` and update the `memories` array with your own images:

```javascript
const memories = [
  {
    id: 1,
    image: 'your-image-url',
    title: 'Your Title',
    titleMr: 'तुमचे शीर्षक',
    description: 'Your description',
    descriptionMr: 'तुमचे वर्णन',
    date: 'Date'
  },
  // Add more memories...
]
```

### Customize Colors

Edit `src/index.css` to change the color scheme:

```css
:root {
  --primary-color: #ff6b9d;
  --secondary-color: #c44569;
  --accent-color: #ffa502;
  /* Add your colors */
}
```

### Change Vanta Effect

In `src/components/WelcomePage.jsx`, you can change the Vanta effect:

```javascript
// Available effects: BIRDS, WAVES, CLOUDS, FOG, GLOBE, NET, etc.
import WAVES from 'vanta/dist/vanta.waves.min'
```

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🌟 Key Components

- **WelcomePage**: Hero section with Vanta.js background and bilingual content
- **MemorySection**: Gallery with parallax effects and lightbox viewer

## 📄 License

Free to use for personal and commercial projects.

## 💖 Credits

- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

---

Made with ❤️ using React and modern web technologies

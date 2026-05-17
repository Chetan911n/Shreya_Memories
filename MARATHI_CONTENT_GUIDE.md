# 🇮🇳 Marathi Content Guide

## Welcome Page Translations

### English → Marathi

| English | Marathi (मराठी) |
|---------|----------------|
| Welcome to Our | आपले स्वागत आहे |
| Beautiful Journey | आपल्या सुंदर प्रवासात |
| Where Every Moment Becomes a Cherished Memory | जिथे प्रत्येक क्षण एक अनमोल आठवण बनतो |
| Dive into a world of love, laughter, and unforgettable moments | प्रेम, हास्य आणि अविस्मरणीय क्षणांच्या जगात प्रवेश करा |
| Each memory is a treasure, each smile a story worth telling | प्रत्येक आठवण एक खजिना आहे, प्रत्येक हसू एक कथा आहे |
| Explore Memories | आठवणी पहा |

## Memory Section Translations

### Section Headers

| English | Marathi (मराठी) |
|---------|----------------|
| Our Precious Memories | आपल्या अनमोल आठवणी |

### Memory Titles

| English | Marathi (मराठी) |
|---------|----------------|
| Sunset Dreams | सूर्यास्ताची स्वप्ने |
| Mountain Adventures | पर्वतीय साहस |
| Beach Memories | समुद्रकिनारी आठवणी |
| Forest Trails | वनमार्ग |
| Starry Nights | तारांकित रात्री |
| City Lights | शहराचे दिवे |
| Misty Mornings | धुक्याची सकाळ |
| Garden Paradise | बागेचे स्वर्ग |
| Golden Hour | सुवर्ण वेळ |

### Memory Descriptions

| English | Marathi (मराठी) |
|---------|----------------|
| A beautiful evening captured forever | एक सुंदर संध्याकाळ कायमची कैद |
| Reaching new heights together | एकत्र नवीन उंची गाठत |
| Waves of happiness and joy | आनंद आणि उल्हासाच्या लाटा |
| Lost in nature, found in love | निसर्गात हरवलो, प्रेमात सापडलो |
| Under the blanket of stars | ताऱ्यांच्या आच्छादनाखाली |
| Urban adventures and late nights | शहरी साहस आणि रात्रीचे प्रवास |
| Fresh starts and new beginnings | नवीन सुरुवात आणि नवे प्रारंभ |
| Blooming love in every season | प्रत्येक ऋतूत फुलणारे प्रेम |
| Magic moments in golden light | सोनेरी प्रकाशात जादूचे क्षण |

## Common Marathi Words Used

### Emotions & Feelings
- **प्रेम** (Prem) - Love
- **आनंद** (Anand) - Happiness
- **उल्हास** (Ulhas) - Joy
- **स्वप्ने** (Swapne) - Dreams
- **आठवणी** (Aathvani) - Memories

### Nature & Places
- **सूर्यास्त** (Suryast) - Sunset
- **पर्वत** (Parvat) - Mountain
- **समुद्रकिनारा** (Samudrakinara) - Beach
- **वन** (Van) - Forest
- **तारे** (Tare) - Stars
- **शहर** (Shahar) - City
- **बाग** (Bag) - Garden

### Descriptive Words
- **सुंदर** (Sundar) - Beautiful
- **अनमोल** (Anmol) - Precious
- **सोनेरी** (Soneri) - Golden
- **नवीन** (Navin) - New
- **जादूचे** (Jaduche) - Magical

## How to Add More Marathi Content

### Step 1: Identify English Text
Find the English text you want to translate in the component files.

### Step 2: Add Marathi Translation
Add a corresponding Marathi property (usually with `Mr` suffix):

```javascript
{
  title: 'Your English Title',
  titleMr: 'तुमचे मराठी शीर्षक',
  description: 'Your English description',
  descriptionMr: 'तुमचे मराठी वर्णन'
}
```

### Step 3: Apply Marathi Font Class
Use the `marathi-text` class for proper Devanagari rendering:

```jsx
<p className="marathi-text">{content.titleMr}</p>
```

## Font Information

### Noto Sans Devanagari
- **Purpose**: Proper rendering of Marathi/Devanagari script
- **Weights**: 300, 400, 500, 600, 700
- **Source**: Google Fonts
- **Class**: `.marathi-text`

### Usage Example

```css
.marathi-text {
  font-family: 'Noto Sans Devanagari', sans-serif;
}
```

## Translation Tips

1. **Keep it Natural**: Translate meaning, not just words
2. **Cultural Context**: Consider cultural nuances
3. **Length**: Marathi text may be longer/shorter than English
4. **Formal vs Informal**: Use appropriate level of formality
5. **Test Rendering**: Always check how Devanagari displays

## Common Phrases for Memories

### Romantic
- **आपले प्रेम** (Aaple Prem) - Our Love
- **एकत्र** (Ekatra) - Together
- **कायमचे** (Kayamche) - Forever
- **हृदयात** (Hrudayat) - In the heart

### Joyful
- **आनंदाचे क्षण** (Anandache Kshan) - Moments of joy
- **हसणे** (Hasne) - Laughter
- **उत्सव** (Utsav) - Celebration
- **खुशी** (Khushi) - Happiness

### Nostalgic
- **आठवणी** (Aathvani) - Memories
- **भूतकाळ** (Bhootkaal) - Past
- **पुन्हा** (Punha) - Again
- **नेहमी** (Nehmi) - Always

## Resources for Translation

### Online Tools
- Google Translate (for basic translations)
- Marathi Dictionary websites
- Native speaker consultation (recommended)

### Marathi Keyboard
- **Windows**: Add Marathi input method
- **Mac**: System Preferences → Keyboard → Input Sources
- **Online**: Use Google Input Tools

## Example: Adding a New Memory

```javascript
{
  id: 10,
  image: 'your-image-url',
  title: 'Rainy Day',
  titleMr: 'पावसाचा दिवस',
  description: 'Dancing in the rain',
  descriptionMr: 'पावसात नाचणे',
  date: 'June 2024'
}
```

---

**Note**: For accurate and culturally appropriate translations, consider consulting with a native Marathi speaker.

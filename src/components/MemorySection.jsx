import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Parallax } from 'react-scroll-parallax'
import { FaHeart, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './MemorySection.css'

const MemorySection = () => {
  const [selectedMemory, setSelectedMemory] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Dummy images from Unsplash
  const memories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      title: 'Sunset Dreams',
      titleMr: 'सूर्यास्ताची स्वप्ने',
      description: 'A beautiful evening captured forever',
      descriptionMr: 'एक सुंदर संध्याकाळ कायमची कैद',
      date: 'March 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80',
      title: 'Mountain Adventures',
      titleMr: 'पर्वतीय साहस',
      description: 'Reaching new heights together',
      descriptionMr: 'एकत्र नवीन उंची गाठत',
      date: 'February 2024'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=800&q=80',
      title: 'Beach Memories',
      titleMr: 'समुद्रकिनारी आठवणी',
      description: 'Waves of happiness and joy',
      descriptionMr: 'आनंद आणि उल्हासाच्या लाटा',
      date: 'January 2024'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      title: 'Forest Trails',
      titleMr: 'वनमार्ग',
      description: 'Lost in nature, found in love',
      descriptionMr: 'निसर्गात हरवलो, प्रेमात सापडलो',
      date: 'December 2023'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80',
      title: 'Starry Nights',
      titleMr: 'तारांकित रात्री',
      description: 'Under the blanket of stars',
      descriptionMr: 'ताऱ्यांच्या आच्छादनाखाली',
      date: 'November 2023'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80',
      title: 'City Lights',
      titleMr: 'शहराचे दिवे',
      description: 'Urban adventures and late nights',
      descriptionMr: 'शहरी साहस आणि रात्रीचे प्रवास',
      date: 'October 2023'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
      title: 'Misty Mornings',
      titleMr: 'धुक्याची सकाळ',
      description: 'Fresh starts and new beginnings',
      descriptionMr: 'नवीन सुरुवात आणि नवे प्रारंभ',
      date: 'September 2023'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
      title: 'Garden Paradise',
      titleMr: 'बागेचे स्वर्ग',
      description: 'Blooming love in every season',
      descriptionMr: 'प्रत्येक ऋतूत फुलणारे प्रेम',
      date: 'August 2023'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80',
      title: 'Golden Hour',
      titleMr: 'सुवर्ण वेळ',
      description: 'Magic moments in golden light',
      descriptionMr: 'सोनेरी प्रकाशात जादूचे क्षण',
      date: 'July 2023'
    }
  ]

  const openMemory = (memory, index) => {
    setSelectedMemory(memory)
    setCurrentIndex(index)
  }

  const closeMemory = () => {
    setSelectedMemory(null)
  }

  const nextMemory = () => {
    const newIndex = (currentIndex + 1) % memories.length
    setCurrentIndex(newIndex)
    setSelectedMemory(memories[newIndex])
  }

  const prevMemory = () => {
    const newIndex = (currentIndex - 1 + memories.length) % memories.length
    setCurrentIndex(newIndex)
    setSelectedMemory(memories[newIndex])
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedMemory) return
      if (e.key === 'Escape') closeMemory()
      if (e.key === 'ArrowRight') nextMemory()
      if (e.key === 'ArrowLeft') prevMemory()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedMemory, currentIndex])

  return (
    <div className="memory-section" id="memory-section">
      {/* Section Header */}
      <div className="memory-header" data-aos="fade-up">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title playfair">
            Our Precious Memories
          </h2>
          <p className="section-subtitle marathi-text">
            आपल्या अनमोल आठवणी
          </p>
          <div className="title-decoration">
            <FaHeart className="decoration-heart" />
          </div>
        </motion.div>
      </div>

      {/* Memory Grid */}
      <div className="memory-grid container">
        {memories.map((memory, index) => (
          <Parallax
            key={memory.id}
            speed={index % 2 === 0 ? -5 : 5}
            className="memory-parallax"
          >
            <motion.div
              className="memory-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => openMemory(memory, index)}
            >
              <div className="memory-image-wrapper">
                <img 
                  src={memory.image} 
                  alt={memory.title}
                  className="memory-image"
                />
                <div className="memory-overlay">
                  <FaHeart className="overlay-heart" />
                  <h3 className="memory-title">{memory.title}</h3>
                  <p className="memory-title-mr marathi-text">{memory.titleMr}</p>
                </div>
              </div>
              <div className="memory-info">
                <p className="memory-date">{memory.date}</p>
              </div>
            </motion.div>
          </Parallax>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemory}
          >
            <motion.div
              className="lightbox-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={closeMemory}>
                <FaTimes />
              </button>
              
              <button className="nav-btn prev-btn" onClick={prevMemory}>
                <FaChevronLeft />
              </button>
              
              <button className="nav-btn next-btn" onClick={nextMemory}>
                <FaChevronRight />
              </button>

              <div className="lightbox-image-wrapper">
                <motion.img
                  key={selectedMemory.id}
                  src={selectedMemory.image}
                  alt={selectedMemory.title}
                  className="lightbox-image"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div 
                className="lightbox-details"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="lightbox-title playfair">{selectedMemory.title}</h3>
                <p className="lightbox-title-mr marathi-text">{selectedMemory.titleMr}</p>
                <p className="lightbox-description">{selectedMemory.description}</p>
                <p className="lightbox-description-mr marathi-text">{selectedMemory.descriptionMr}</p>
                <p className="lightbox-date">{selectedMemory.date}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MemorySection

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaArrowDown } from 'react-icons/fa'
import AnimatedBackground from './AnimatedBackground'
import './WelcomePage.css'

const WelcomePage = () => {
  const [language, setLanguage] = useState('english')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  }

  const heartVariants = {
    initial: { scale: 0 },
    animate: {
      scale: [0, 1.2, 1],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 0.6,
        delay: 1
      }
    }
  }

  const content = {
    english: {
      greeting: 'Welcome to Our',
      title: 'Beautiful Journey',
      subtitle: 'Where Every Moment Becomes a Cherished Memory',
      description: 'Dive into a world of love, laughter, and unforgettable moments. Each memory is a treasure, each smile a story worth telling.',
      button: 'Explore Memories'
    },
    marathi: {
      greeting: 'आपले स्वागत आहे',
      title: 'आपल्या सुंदर प्रवासात',
      subtitle: 'जिथे प्रत्येक क्षण एक अनमोल आठवण बनतो',
      description: 'प्रेम, हास्य आणि अविस्मरणीय क्षणांच्या जगात प्रवेश करा. प्रत्येक आठवण एक खजिना आहे, प्रत्येक हसू एक कथा आहे.',
      button: 'आठवणी पहा'
    }
  }

  const currentContent = content[language]

  const scrollToMemories = () => {
    document.getElementById('memory-section').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="welcome-page">
      <AnimatedBackground />
      <div className="welcome-overlay">
        {/* Language Toggle */}
        <motion.div 
          className="language-toggle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            className={`lang-btn ${language === 'english' ? 'active' : ''}`}
            onClick={() => setLanguage('english')}
          >
            English
          </button>
          <button 
            className={`lang-btn ${language === 'marathi' ? 'active' : ''}`}
            onClick={() => setLanguage('marathi')}
          >
            मराठी
          </button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="welcome-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="floating-hearts"
            variants={heartVariants}
            initial="initial"
            animate="animate"
          >
            <FaHeart className="heart heart-1" />
            <FaHeart className="heart heart-2" />
            <FaHeart className="heart heart-3" />
          </motion.div>

          <motion.p 
            className={`greeting ${language === 'marathi' ? 'marathi-text' : ''}`}
            variants={itemVariants}
          >
            {currentContent.greeting}
          </motion.p>

          <motion.h1 
            className={`main-title playfair ${language === 'marathi' ? 'marathi-text' : ''}`}
            variants={itemVariants}
          >
            {currentContent.title}
          </motion.h1>

          <motion.div 
            className="title-underline"
            variants={itemVariants}
          >
            <div className="underline-animated"></div>
          </motion.div>

          <motion.p 
            className={`subtitle ${language === 'marathi' ? 'marathi-text' : ''}`}
            variants={itemVariants}
          >
            {currentContent.subtitle}
          </motion.p>

          <motion.p 
            className={`description ${language === 'marathi' ? 'marathi-text' : ''}`}
            variants={itemVariants}
          >
            {currentContent.description}
          </motion.p>

          <motion.button
            className={`explore-btn ${language === 'marathi' ? 'marathi-text' : ''}`}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToMemories}
          >
            {currentContent.button}
            <FaHeart className="btn-heart" />
          </motion.button>

          <motion.div
            className="scroll-indicator"
            variants={itemVariants}
            animate={{
              y: [0, 10, 0],
              transition: {
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="decorative-circles">
          <motion.div 
            className="circle circle-1"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <motion.div 
            className="circle circle-2"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
          />
          <motion.div 
            className="circle circle-3"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

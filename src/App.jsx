import { useEffect } from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import AOS from 'aos'
import WelcomePage from './components/WelcomePage'
import MemorySection from './components/MemorySection'
import './App.css'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic'
    })
  }, [])

  return (
    <ParallaxProvider>
      <div className="App">
        <WelcomePage />
        <MemorySection />
      </div>
    </ParallaxProvider>
  )
}

export default App

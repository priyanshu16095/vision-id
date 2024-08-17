import React, { useEffect } from 'react'
import './css/components.css'
import './css/pages.css'
import Lenis from 'lenis'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  document.documentElement.setAttribute("data-value", "light")

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div className='app'>
      <Home />
      {/* <Footer /> */}
    </div>
  )
}

export default App

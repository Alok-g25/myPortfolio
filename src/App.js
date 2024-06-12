import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from "./components/Education"
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>hello</div> */}
      <Navbar/>
      <Home/>
      <About/>
      <Skills/> 
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

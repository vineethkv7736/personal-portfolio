import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Home } from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
   <div className=" dark">
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
   </div>
  )
}

export default App

import React from 'react'
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Skills from './Components/Skills/Skills'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Skills />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App
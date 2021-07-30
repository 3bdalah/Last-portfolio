import React from 'react'
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Contact from "../components/Contact";
const Home = () => {
    return (
        <>
        <div className="alert-design"><a href="https://abdallah.vercel.app/" target="_blank" rel="noreferrer"> New Design Comming Soon</a></div>
          <Hero/>  
          <About/>
          <Skills/>
          <Projects/>
          <Contact />
        </>
    )
}

export default Home;
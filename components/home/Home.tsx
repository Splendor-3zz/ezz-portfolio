"use client";

import About from '@/components/about/About'
import Contact from '@/components/contact/Contact'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Project from '@/components/project/Project'
import Skills from '@/components/skills/Skills'
import { useRef } from 'react'
import { HeaderS } from '../header/HeaderS';

const Home = () => {

  const aboutRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const projectRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return

    const yOffset = -80 // adjust to your navbar height
    const y =
      ref.current.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }
  
  return (
    <div>
      <div className='hidden sm:flex'>
        <Header 
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onContactClick={() => scrollToSection(contactRef)}/>
      </div>
      <div className='sm:hidden'>
        <HeaderS
        onAboutClick={() => scrollToSection(aboutRef)}
        onSkillsClick={() => scrollToSection(skillsRef)}
        onProjectClick={() => scrollToSection(projectRef)}
        onContactClick={() => scrollToSection(contactRef)}/>
      </div>
      <About ref={aboutRef} onWorkClick={() => scrollToSection(projectRef)} onContactClick={() => scrollToSection(contactRef)}/>
      <Skills ref={skillsRef}/>
      <Project ref={projectRef}/>
      <Contact ref={contactRef}/>
      <Footer/>
    </div>
  )
}

export default Home

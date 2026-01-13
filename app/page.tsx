import About from '@/components/about/About'
import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import Home from '@/components/home/Home'
import Project from '@/components/project/Project'
import Skills from '@/components/skills/Skills'

const page = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Skills/>
      <Project/>
      <About/>
      <Footer/>
    </div>
  )
}

export default page

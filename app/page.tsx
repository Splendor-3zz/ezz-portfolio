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
    </div>
  )
}

export default page

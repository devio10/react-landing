
import '../styles/App.css'
import HeroBlock from '../components/layout/HeroBlock'
import HeroStrip from '../components/ui/HeroStrip'
import ProjectsOverview from '../components/layout/ProjectsOverview'
import AboutMe from '../components/layout/AboutMe'

function App() {

  return (
    <>
      <HeroBlock />
      <HeroStrip />
      <ProjectsOverview />
      <AboutMe />
    </>
  )
}

export default App

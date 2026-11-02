
import '../styles/App.css'
import HeroBlock from '../components/layout/HeroBlock'
import HeroStrip from '../components/ui/HeroStrip'
import ProjectsOverview from '../components/layout/ProjectsOverview'
import AboutMe from '../components/layout/AboutMe'
import Footer from '../components/layout/Footer'

function App() {

  return (
    <>
      <HeroBlock />
      <HeroStrip />
      <ProjectsOverview />
      <AboutMe />
      <Footer />
    </>
  )
}

export default App

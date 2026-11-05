
import '../styles/App.css'
import HeroBlock from '../components/layout/HeroBlock'
import HeroStrip from '../components/ui/HeroStrip'
import ProjectsOverview from '../components/layout/ProjectsOverview'
import AboutMe from '../components/layout/AboutMe'
import Footer from '../components/layout/Footer'
import CVSection from '../components/layout/CVSection'

function App() {

  return (
    <>
      <HeroBlock />
      <HeroStrip />
      <ProjectsOverview />
      <AboutMe />
      <CVSection />
      <Footer />
    </>
  )
}

export default App

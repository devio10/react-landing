
import '../styles/App.css'
import HeroBlock from '../components/layout/HeroBlock'
import HeroStrip from '../components/ui/HeroStrip'
import ProjectsOverview from '../components/layout/ProjectsOverview'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeroBlock />
      <HeroStrip />
      <ProjectsOverview />
    </>
  )
}

export default App

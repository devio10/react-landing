
import '../styles/App.css'
import HeroBlock from '../components/layout/HeroBlock'
import HeroStrip from '../components/ui/HeroStrip'
import ProjectsOverview from '../components/layout/ProjectsOverview'
import { createContext, useState } from 'react'

const SearchValueContext = createContext(null);
const SearchActionsContext = createContext(null);

function App() {
  // const [count, setCount] = useState(0)

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <SearchValueContext.value value={{setSearchQuery}}>
        <HeroBlock />
        <HeroStrip />
        <ProjectsOverview />
      </SearchValueContext.value>

      <SearchActionsContext.value value={{searchQuery}}>
        <HeroBlock />
        <HeroStrip />
        <ProjectsOverview />
      </SearchActionsContext.value>
    </>
  )
}

export default App

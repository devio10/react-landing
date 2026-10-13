import { useState } from "react"
import ProjectCard from "../ui/ProjectCard"
import styles from "./ProjectsOverview.module.scss"
function ProjectsOverview() {

    const [currentProject, setCurrentProject] = useState(0);
    return (
        <>
            <section className={styles.contentWidth}>
                <h2 className={styles.title}>Selected Projects</h2>
                <div className={styles.cards}>
                    <ProjectCard category="Landing Page" style={{backgroundColor: "#EF9D02"}} onClick={() => {
                        setCurrentProject(0);
                    }}>
                        <img src="/src/assets/espectre logo.png" />
                    </ProjectCard>
                    <ProjectCard category="Web Application" style={{backgroundColor: "#807ccf"}} onClick={() => {
                        setCurrentProject(1);
                    }}>
                        <img src="/src/assets/demovio.svg" style={{width: "75%"}} />
                    </ProjectCard>
                    <ProjectCard category="Video Game" background="/src/assets/waves.png" onClick={() => {
                        setCurrentProject(2);
                    }}>
                        <img src="/src/assets/procreation.png" />
                    </ProjectCard>
                </div>
            </section>
        </>
    )
}

export default ProjectsOverview
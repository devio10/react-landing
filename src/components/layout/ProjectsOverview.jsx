import { useEffect } from "react"
import { projects } from "../../data/projects"
import ProjectCard from "../ui/ProjectCard"
import styles from "./ProjectsOverview.module.scss"
import layoutStyles from "./layout.module.scss"
function ProjectsOverview() {

    useEffect(() => {
        console.log(projects);
    }, []);

    return (
        <>
            <section className={layoutStyles.contentWidth}>
                <h2 className={layoutStyles.title}>Selected Projects</h2>
                <div className={styles.cards}>
                    {projects.map(({image, imageStyle, color, description, ...project}) => (
                        <ProjectCard key={project.title} {...project} style={color ? {backgroundColor: color} : undefined}  image={<img src={image} style={imageStyle} alt={project.title}/>}>
                            {description}
                        </ProjectCard>
                    ))}
                </div>
            </section>
        </>
    )
}

export default ProjectsOverview
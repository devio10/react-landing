import type { ComponentPropsWithoutRef, ReactNode } from "react"
import IconFile from "../icons/IconFile"
import LinkButton from "./LinkButton"
import styles from "./ProjectCard.module.scss"
import type { ProjectBase } from "../../types/project"
interface ProjectCardProps extends ProjectBase, Omit<ComponentPropsWithoutRef<"button">, keyof ProjectBase> {
    image: ReactNode
};
function ProjectCard({children, category, title, background, stack=[], date, onClick, href, image, ...props}: ProjectCardProps) {
    return (
        <div className={styles.project}>
            <button className={styles.card} onClick={onClick} {...props}>
                <div className={styles.imagesContainer}>
                    {background && <img className={styles.background} src={background} />}
                    {image}
                </div>
                <div className={styles.category}>
                    <span>{category}</span>
                </div>
            </button>
            <div className={styles.descriptionSection}>
                <h2>{title}</h2>
                <span className={styles.projectStack}>{stack.join(", ")} • {date}</span>
                <div className={styles.description}>
                    {children}
                </div>
                <LinkButton href={href}>Learn more...<IconFile /></LinkButton>
            </div>
        </div>
    )
}
export default ProjectCard
import styles from "./ProjectCard.module.scss"
function ProjectCard({children, category, background, i, ...props}) {
    return (
        <>
            <button className={styles.card} {...props}>
                <div className={styles.imagesContainer}>
                    {background && <img className={styles.background} src={background} />}
                    {children}
                </div>
                <div className={styles.category}>
                    <span>{category}</span>
                </div>
            </button>
        </>
    )
}
export default ProjectCard
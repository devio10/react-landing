import IconStar from "../icons/IconStar"
import LinkButton from "./LinkButton"
import styles from "./ProjectCard.module.scss"
function ProjectCard({children, category, background, i, onclick, ...props}) {
    return (
        <div className={styles.project}>
            <button className={styles.card} onclick={onclick} {...props}>
                <div className={styles.imagesContainer}>
                    {background && <img className={styles.background} src={background} />}
                    {children}
                </div>
                <div className={styles.category}>
                    <span>{category}</span>
                </div>
            </button>
            <div className={styles.descriptionSection}>
                <h2>Project title</h2>
                <span className={styles.projectStack}>SvelteKit, TypeScript, SCSS</span>

                <p>Here goes short description... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem explicabo possimus quae ea assumenda placeat. Eius officia odio amet ea. Maxime pariatur error quidem, eligendi doloremque mollitia quaerat suscipit!</p>
                <LinkButton>Learn more<IconStar /></LinkButton>
            </div>
        </div>
    )
}
export default ProjectCard
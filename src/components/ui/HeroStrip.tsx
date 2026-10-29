import IconStar from "../icons/IconStar"
import styles from "./HeroStrip.module.scss"

function HeroStrip() {
    return (
        <>
            <div className={styles.herostrip}>
                <span>Game Developer</span>
                <IconStar />
                <span>Frontend Developer</span>
                <IconStar />
                <span>Tech enthusiast</span>
            </div>
        </>
    )
}

export default HeroStrip
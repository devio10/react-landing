import IconStar from "../icons/IconStar"
import styles from "./HeroStrip.module.scss"

function HeroStrip() {
    return (
        <>
            <div className={styles.herostrip}>
                <span>Frontend Development</span>
                <IconStar />
                <span>Game Development</span>
                <IconStar />
                <span>Cuddle Generator</span>
            </div>
        </>
    )
}

export default HeroStrip
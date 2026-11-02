import layoutStyles from "./layout.module.scss"
import styles from "./Footer.module.scss";

import profilePic from "../../assets/person_new.webp"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={layoutStyles.contentWidth}>
                <div className={styles.infoRow}>
                    <div>
                        <img src={profilePic} className={styles.profilePic} />
                        <div>
                            <span className={styles.name}>Dmitrii Novoselov</span>
                            <button className={styles.emailButton}>devio10@outlook.com</button>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <a href="https://www.linkedin.com/in/devio10/">LinkedIn</a>
                        <a href="https://www.instagram.com/devio.10/">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
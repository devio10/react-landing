import layoutStyles from "./layout.module.scss";
import styles from "./CVSection.module.scss";
import Button from "../ui/Button";
import IconSendArrow from "../icons/IconSendArrow";

export default function CVSection() {
    return (
        <>
            <div className={layoutStyles.contentWidth}>
                <h2 className={layoutStyles.title}>There's more to me than meets the eye</h2>
                <p className={styles.invitationText}>You can see my full resume (English or Spanish) to get more information.
                    It mentions all my previous work experience, skills, and is more oriented on all sorts of companies, rather than IT ones.</p>
                <div className={styles.buttonContainer}>
                    <Button>
                        Take me to CV
                        <IconSendArrow />
                    </Button>
                </div>
            </div>
        </>
    )
}
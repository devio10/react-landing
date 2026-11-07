import layoutStyles from "./layout.module.scss";
import styles from "./CVSection.module.scss";
import Button from "../ui/Button";
import IconSendArrow from "../icons/IconSendArrow";
import { useContext } from "react";
import { PopupContext } from "../../context/PopupContext";

export default function CVSection() {
    const {popup, open} = useContext(PopupContext);
    return (
        <>
            <div className={layoutStyles.contentWidth}>
                <h2 className={layoutStyles.title}>There's more to me than meets the eye</h2>
                <p className={styles.invitationText}>You can see my full resume (English or Spanish) to get more information.
                    It mentions all my previous work experience, skills, and is more oriented on all sorts of companies, rather than IT ones.</p>
                <div className={styles.buttonContainer}>
                    <Button onClick={() => {
                        open("cv");
                    }}>
                        Take me to CV
                        <IconSendArrow />
                    </Button>
                </div>
            </div>
        </>
    )
}
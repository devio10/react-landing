import { useContext, useEffect } from "react"
import { PopupContext } from "../../context/PopupContext"
import { createPortal } from "react-dom"

import styles from "./PopupRoot.module.scss"

export default function PopupRoot() {
    const { popup, close } = useContext(PopupContext);
    useEffect(() => {
        if (!popup) { return; }
    }, [popup, close]);
    if (!popup) { return null; }
    return createPortal(
    <>
        <div className={styles.popupBackground}>
            <div className={styles.popupWindow}>
                this popup is pissing me off........
            </div>
        </div>
    </>, document.body);
}
import type { ComponentPropsWithoutRef } from "react";
import styles from "./LinkButton.module.scss"

export default function Button({children, ...props}: ComponentPropsWithoutRef<"button">) {
    return (<button className={styles.button} {...props}>
        {children}
    </button>);
}
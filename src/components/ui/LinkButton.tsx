import type { ComponentPropsWithoutRef } from "react";
import styles from "./LinkButton.module.scss"

function LinkButton({children, ...props}: ComponentPropsWithoutRef<"a">) {
    return (<a className={styles.button} {...props}>
        {children}
    </a>);
}
export default LinkButton
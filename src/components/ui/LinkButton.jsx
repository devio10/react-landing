import styles from "./LinkButton.module.scss"

function LinkButton({children, ...props}) {
    return (<a className={styles.button} {...props}>
        {children}
    </a>);
}
export default LinkButton
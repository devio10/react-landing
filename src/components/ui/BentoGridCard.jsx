import styles from "./BentoGridCard.module.scss"
export default function BentoGridCard({children, columns=1, rows=1, ...props}) {
    return (
        <>
            <div className={styles.card} style={{
                gridColumn: `span ${columns}`,
                gridRow: `span ${rows}`,
            }} {...props}>
                {children} 
            </div>
        </>
    )
}
import type React from "react"
import styles from "./BentoGridCard.module.scss"
import type { ComponentPropsWithoutRef } from "react"
interface BentoGridCardProps extends ComponentPropsWithoutRef<"div"> {
    columns?: number,
    rows?: number
}
export default function BentoGridCard({children, columns=1, rows=1, ...props}: BentoGridCardProps) {
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
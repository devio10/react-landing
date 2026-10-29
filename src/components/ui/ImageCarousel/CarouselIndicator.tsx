import classNames from "classnames";
import styles from "./CarouselIndicator.module.scss";
export default function CarouselIndicator({frame, total}: {frame: number, total: number}) {

    return (
        <div className={styles.container}>
            {Array.from({length: total}, (_, i) => {
                return (
                    <span key={i} className={classNames(i==frame && styles.active)}></span>
                )
            })}
        </div>
    )
}
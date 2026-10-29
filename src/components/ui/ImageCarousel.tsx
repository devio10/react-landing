import { useState } from "react"
import styles from "./ImageCarousel.module.scss"
import pissing from "../../assets/feo.webp"
export default function ImageCarousel({images = []}: {images: string[]}) {
    const [frame, setFrame] = useState<number>(0);
    return (
        <>
            <div className={styles.container}>
                {images.length === 0 ? (<img src={pissing} />) : (<img src={images[frame]} />)} 
            </div>
        </>
    )
}
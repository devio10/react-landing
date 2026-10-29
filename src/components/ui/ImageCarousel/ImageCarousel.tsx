import { useState } from "react"
import styles from "./ImageCarousel.module.scss"
import pissing from "/src/assets/feo.webp"
import CarouselButtons from "./CarouselButtons";
import CarouselIndicator from "./CarouselIndicator";
export default function ImageCarousel({images = []}: {images: string[]}) {
    const [frame, setFrame] = useState<number>(0);
    return (
        <>
            <div className={styles.container}>
                {images.length === 0 ? (<img src={pissing} />) : (<img src={images[frame]} />)} 
                <div className={styles.indicator}>
                    <CarouselIndicator frame={frame} total={images.length} />
                </div>
                <div className={styles.buttons}>
                    <CarouselButtons frame={frame} setFrame={setFrame} frames={images.length} />
                </div>
            </div>
        </>
    )
}
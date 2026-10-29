import type { ComponentPropsWithoutRef, Dispatch, SetStateAction } from "react";
import styles from "./CarouselButtons.module.scss";
import IconLeft from "../../icons/IconLeft";
import IconRight from "../../icons/IconRight";

export default function CarouselButtons({frame, setFrame, frames}: {frame: number, frames: number, setFrame: Dispatch<SetStateAction<number>>}) {
    function CarouselButton({children, ...props} : ComponentPropsWithoutRef<"button">) {
        return (
            <button className={styles.button} {...props}>
                {children}
            </button>
        )
    }
    function nextFrame() {
        setFrame(frame + 1);
        if (frame >= frames-1) {
            setFrame(0);
        }
    }
    function previousFrame() {
        setFrame(frame - 1);
        if (frame <= 0) {
            setFrame(frames-1);
        }
    }
    return (
        <div className={styles.container}>
            <CarouselButton onClick={previousFrame}>
                <IconLeft />
            </CarouselButton>
            <CarouselButton onClick={nextFrame}>
                <IconRight />
            </CarouselButton>
        </div>
    )
}
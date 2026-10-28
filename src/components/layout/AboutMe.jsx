import layoutStyles from "./layout.module.scss"
import styles from "./AboutMe.module.scss"
import BentoGridCard from "../ui/BentoGridCard";
import photo1 from "../../assets/photo1.webp";
export default function AboutMe() {
    return (
        <>
            <section className={layoutStyles.contentWidth}>
                <h2 className={layoutStyles.title}>About Me</h2>
                <div className={styles.gridWrap}>
                    <div className={styles.grid}>
                    <BentoGridCard columns={2} rows={2}>
                        
                    </BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                    <BentoGridCard columns={2}>pissing me off..</BentoGridCard>
                    <BentoGridCard>pissing me off..</BentoGridCard>
                </div>
                </div>
            </section>
        </>
    );
}
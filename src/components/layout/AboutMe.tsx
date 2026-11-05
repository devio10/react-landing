import classNames from "classnames";
import { useMediaQuery } from "../../hooks/useMediaQuery"

import layoutStyles from "./layout.module.scss"
import styles from "./AboutMe.module.scss"
import BentoGridCard from "../ui/BentoGridCard";
import ImageCarousel from "../ui/ImageCarousel/ImageCarousel";

import photo1 from "../../assets/photo1.webp";
import photo2 from "../../assets/photo2.jpg";
import pissing from "../../assets/feo.webp";

import mapStatic from "../../assets/map-static.png";

import languageEnglish from "../../assets/languageEnglish.svg";
import languageSpanish from "../../assets/languageSpanish.png";
import languageRussian from "../../assets/languageRussian.svg";


import reactIcon from "../../assets/React-icon.svg";
import svelteIcon from "../../assets/Svelte_Logo.svg";
import scssIcon from "../../assets/scss-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import tsIcon from "../../assets/ts-icon.svg";
import postgreIcon from "../../assets/Postgresql_elephant.svg";

import type { ComponentPropsWithoutRef } from "react";
export default function AboutMe() {
    function getAge(birthdate: Date, today = new Date()) {
        let age = today.getFullYear() - birthdate.getFullYear();
        const hadBirthday = today.getMonth() > birthdate.getMonth() || (today.getMonth() === birthdate.getMonth() && today.getDay() >= birthdate.getDay());
        if (!hadBirthday) {age--;}
        return age;
    }
    const age = getAge(new Date(2004, 8, 1));

    function ListItem({children, ...props}: ComponentPropsWithoutRef<"li">) {
        return (
            <li className={styles.listItem} {...props}>
                {children}
            </li>
        )
    }

    const isBelowXl = useMediaQuery("(max-width: 1279.98px)");
    return (
        <>
            <section className={layoutStyles.contentWidth}>
                <h2 className={layoutStyles.title}>About Me</h2>
                <div className={styles.gridWrap}>
                    <div className={styles.grid}>
                    <BentoGridCard columns={2} rows={2}>
                        <ImageCarousel images={[photo1, photo2, pissing]} />
                    </BentoGridCard>
                    <BentoGridCard>
                        <div className={styles.cardColumnLayout}>
                            <span className={styles.cardTextSmall}>My name is</span>
                            <span className={styles.cardText}>Dmitrii Novoselov</span>
                            <span className={styles.cardTextSmall}>Nice to meet you :)</span>
                        </div>
                    </BentoGridCard>
                    <BentoGridCard>
                        <div className={styles.cardColumnLayout}>
                            <span className={classNames(styles.cardTextBig, styles.age)}>{age} y.o.</span>
                            <span className={styles.cardTextSmall}>and counting...</span>
                        </div>
                    </BentoGridCard>
                    <BentoGridCard rows={2} columns={isBelowXl ? 2 : 1}>
                        <div className={classNames(styles.cardColumnLayout, styles.cardStack)}>
                            <h3 className={styles.cardTitleSmall}>I have experience with</h3>
                            <ul className={styles.list}>
                                <ListItem>
                                    <img src={reactIcon} alt="React Icon" />
                                    React
                                </ListItem>
                                <ListItem>
                                    <img src={svelteIcon} alt="Svelte Icon" />
                                    Svelte & SvelteKit
                                </ListItem>
                                <ListItem>
                                    <img src={tsIcon} style={{padding: "0"}} alt="TypeScript Icon" />
                                    TypeScript
                                </ListItem>
                                <ListItem>
                                    <img src={jsIcon} style={{padding: "0"}} alt="JavaScript Icon" />
                                    JavaScript
                                </ListItem>
                                <ListItem>
                                    <img src={postgreIcon} alt="PostgreSQL Icon" />
                                    PostgreSQL
                                </ListItem>
                                <ListItem>
                                    <img src={scssIcon} alt="Sass icon" />
                                    SCSS
                                </ListItem>
                            </ul>
                            <span className={styles.cardTextSmall}>I'm open to learning new things ;)</span>
                        </div>
                    </BentoGridCard>
                    <BentoGridCard>
                        <div className={classNames(styles.cardColumnLayout, styles.cardStack)}>
                            <h3 className={styles.cardTitleSmall}>Languages</h3>
                            <ul className={styles.list}>
                                <ListItem>
                                    <img src={languageEnglish} style={{padding: "0", borderRadius: "100%"}} alt="React Icon" />
                                    English
                                    <span className={styles.languageLevel}>B2+</span>
                                </ListItem>
                                <ListItem>
                                    <img src={languageSpanish} style={{padding: "0", borderRadius: "100%"}} alt="Svelte Icon" />
                                    Spanish
                                    <span className={styles.languageLevel}>A2</span>
                                </ListItem>
                                <ListItem>
                                    <img src={languageRussian} style={{padding: "0", borderRadius: "100%", objectFit: "cover"}} alt="TypeScript Icon" />
                                    Russian
                                    <span className={styles.languageLevel}>Native</span>
                                </ListItem>
                            </ul>
                        </div>
                    </BentoGridCard>
                    <BentoGridCard>
                        <div className={styles.cardLocation}>
                            <div className={styles.BarcelonaMapContainer}>
                                <img src={mapStatic} alt="Map of Barcelona" className={styles.BarcelonaMap} />
                            </div>
                            <div className={styles.locationTextContainer}>
                                <h3>Located in</h3>
                                <span className={styles.locationCityName}>Barcelona, Spain</span>
                            </div>
                        </div>
                    </BentoGridCard>
                    
                </div>
                </div>
            </section>
        </>
    );
}
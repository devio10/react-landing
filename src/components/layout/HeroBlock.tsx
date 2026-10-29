import { useState } from "react";
import LinkButton from "../ui/LinkButton";
import styles from "./HeroBlock.module.scss";
import classNames from "classnames";

function HeroBlock() {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <main className={styles.heroBlock}>
            <header className={styles.header}>
                <a className={styles.headerHireLink}>HIRE ME
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>
                </a>
                <h1 className={styles.headerTitle}>HEYITSDEV.IO</h1>
                <a className={styles.headerMenuButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M232,128A104,104,0,1,0,128,232,104.13,104.13,0,0,0,232,128ZM116,84a12,12,0,1,1,12,12A12,12,0,0,1,116,84Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm0,44a12,12,0,1,1,12,12A12,12,0,0,1,116,172Z"></path></svg>
                </a>
            </header>
            <div className={styles.backgroundColumns}>
                <div> </div>
                <div> </div>
                <div> </div>
            </div>
            <div className={styles.data}>
                <div className={styles.title} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <img src="/src/assets/DMITRII NOVOSELOV.svg" className={styles.name}></img>
                    <img src="/src/assets/FRONTEND DEVELOPER.svg" className={styles.profession}></img>
                </div>
                <div className={styles.description}>
                    <div className={styles.aboutMe}>
                        <section>
                            <p>Located in Barcelona, Spain. Available for work</p>
                            <LinkButton>
                                Hire Me Now
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M237.66,117.66l-80,80A8,8,0,0,1,144,192V152.23c-57.1,3.24-96.25,40.27-107.24,52h0a12,12,0,0,1-20.68-9.58c3.71-32.26,21.38-63.29,49.76-87.37,23.57-20,52.22-32.69,78.16-34.91V32a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,237.66,117.66Z"></path></svg>
                            </LinkButton>
                        </section>
                    </div>
                    <span></span>
                    <div className={styles.experience}>
                        <section>
                            <p>Experience with <b>React</b>, Svelte, SvelteKit and NextJS,<br />combined with TypeScript or JavaScript.</p>
                            <p>I have been interested in programming and IT since 10 y.o.</p>
                            <div className={styles.pills}>
                                <span>English</span>
                                <span className={styles.dark}>Spanish</span>
                                <span>Russian</span>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div className={classNames({[styles.reduceOpacity]: hover}, styles.person)}>
                <img src="/src/assets/person.png"></img>
            </div>
        </main>
    );
}
export default HeroBlock
import demovio from "../assets/demovio.svg";
import uigame from "../assets/uigame.png";
import dushnila from "../assets/dushnila.jpg";
import procreationBackground from "../assets/waves.png";
import procreationLogo from "../assets/procreation.png";
import type { Project } from "../types/project";

export const projects: Project[] = [
    {
        title: "Demovio – Minecraft Server companion",
        category: "Web Application",
        date: "Dec. 2025",
        image: demovio,
        imageStyle: {width: "75%"},
        color: "#807ccf",
        href: "demovio",
        description: (
            <>
                <p>
                    Demovio is a complex web application, based solely upon my personal Minecraft server.
                    It allows players to get the current status of the server, whether it's online or offline,
                    see who's currently playing, invite friends to the game, and get all the help necessary to get started.
                </p>
                <p>
                    The website consists of Players database, that's synchronized with whitelist of the Minecraft Server,
                    and Frontend & Backend that were both made on SvelteKit. It features support for push notifications from the user's browser,
                    which are then used for broadcasting important news, sending alerts about their friends playing on the server and receiving
                    other people's invites.
                </p>
                <p>
                    Demovio's User Interface features rich volumetric elements, inspired by Vision Pro's Operating System,
                    includes 3D elements and live panoramas that you can use as background, and is adapted both for desktop and mobile devices.
                    All the elements are interactive and have smooth animations, the pages have beautiful transitions between them,
                    that look logical and consistent.
                </p>
            </>
        ),
        stack: ["SvelteKit", "TypeScript", "PostgreSQL", "SCSS"]
    },
    {
        title: "UX/UI Game – Quiz for Yudaev School",
        date: "Sep. 2023",
        category: "Web Application",
        image: uigame,
        imageStyle: {objectFit: "cover", height: "100%", width: "100%"},
        color: "white",
        href: "demovio",
        description: (
            <>
                <p>
                    I started making this website at my previous company, eeex.ru.
                    It's a UX and UI quiz for the design school, called Yudaev School, based in Russia.
                    The plan was to make multiple quizes, give various bonuses for finishing them, and add a form with email and other personal data
                    to get feedback.
                </p>
                <p>
                    Unfortunately, the company that ordered the website changed their priorities, and the work was abandoned.
                    Although I cannot show the source code or host the website publicly, I can send a screen-recording demonstration of all the available features,
                    or github commits activity in the repository. if requested. Contact me to get more information about this project.
                </p>
            </>
        ),
        stack: ["Next.JS", "TypeScript", "SCSS"]
    },
    {
        title: "Dushnila – Landing for a Card Game",
        date: "May 2023",
        category: "Landing",
        image: dushnila,
        imageStyle: {objectFit: "cover", height: "100%", width: "100%"},
        color: "white",
        href: "demovio",
        description: (<>
            <p>
                Dushnila is a physical card game, developed by my employer, eeex.ru. They wanted to have a landing in vanilla stack (HTML/CSS/JS),
                which I recommended them not to use. Instead, with their approval, I opted in to use more modern stack, Next.JS with TypeScript,
                because it allows for greater and easier scalability in the future.
            </p>
            <p>
                After two weeks of development, the company decided to remake it with bare HTML/JS/CSS, because they had little resources to support
                the website with the stack I used, so the project was abandoned. I cannot show source code, nor host it publicly, 
                due to not having legal rights to do so, though I can demonstrate a screenshot and github commits activity in the repository.
            </p>
        </>),
        stack: ["Next.JS", "TypeScript", "SCSS"]
    },
    {
        title: "PROCREATION – RPG game",
        category: "Video Game",
        date: "Sep. 2021 – ongoing",
        image: procreationLogo,
        imageStyle: {width: "75%"},
        background: procreationBackground,
        href: "procreation",
        description: (<>
            <p>
                PROCREATION is the project of my life. I've been developing it already for 5 years, constantly returning to it when I'm available.
                It's a massive game, developed solely by me, including all the assets, ideas, dialog scripts, etc.
            </p>
            <p>
                The feature list is massive. It has a very developed and balanced fight system, several languages with the ability to add custon translations,
                multiple puzzles, inventory and equipment, rich soundtrack made in collaboration with my friend, dialoges with choices, multiple ways to beat
                the game (by using or not using violence and making specific choices), and controller/touch support.
                Every mechanic and system were made from scratch, not using any libraries and ready solutions.
            </p>
            <p>
                Due to many different circumstances, I cannot invest much time to continue developing it.
                If interested, I can personally send the compiled game, screenshots, screen recordings, or github activity.
                This project proves that I'm not afraid to take on bigger projects and polish them to perfection, taking my time to plan and organize work flow.
            </p>
        </>),
        stack: ["GameMaker Studio 2"]
    },
]
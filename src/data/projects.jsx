import demovio from "../assets/demovio.svg";
import procreationBackground from "../assets/waves.png";
import procreationLogo from "../assets/procreation.png";
export const projects = [
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
        image: demovio,
        imageStyle: {width: "75%"},
        color: "#807ccf",
        href: "demovio",
        description: (<p>Ooops is a...</p>),
        stack: ["Next.JS", "TypeScript", "SCSS"]
    },
    {
        title: "Dushnila – Landing for a Card Game",
        date: "May 2023",
        category: "Landing",
        image: demovio,
        imageStyle: {width: "75%"},
        color: "#807ccf",
        href: "demovio",
        description: (<p>Ooops is a...</p>),
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
        description: (<p>Ooops is a...</p>),
        stack: ["GameMaker Studio 2"]
    },
]
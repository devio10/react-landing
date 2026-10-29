import type { CSSProperties, ReactNode } from "react";

export const categories = ["Web Application", "Video Game", "Landing"] as const;
export type ProjectCategory = (typeof categories)[number];
export interface ProjectBase {
    title: string,
    category: ProjectCategory,
    date: string,
    href: string,
    stack: string[],
    background?: string
}
export interface Project extends ProjectBase {
    image: string,
    imageStyle?: CSSProperties,
    color?: string,
    description: ReactNode
}
import spiderhollows from "../src/images/modules/spiderhollows.jpg"
import coinsforcorpses from "../src/images/modules/coinsforcorpses.jpg"
import type { ImageMetadata } from "astro"

export type Product = {
    id: number
    name: string
    date: string
    img: ImageMetadata
    dtrpg: string
}

//add new entries in order
export const products: Product[] = [
    { id: 1, name: "Coins for Corpses", date: "8/25/2023", img: coinsforcorpses, dtrpg: "https://www.drivethrurpg.com/" },
    { id: 0, name: "Death in the Spider Hollows", date: "8/17/2023", img: spiderhollows, dtrpg: "https://www.drivethrurpg.com/" },
]
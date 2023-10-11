import type { ImageMetadata } from "astro"
import { coinsForCorpses } from "./individual/coinsforcorpses";
import { spiderHollows } from "./individual/intothespiderhollows";

export const products: Product[] = [
    coinsForCorpses, spiderHollows,
]

export const productpaths = products.map(product => ({
    params: { name: product.name },
    props: {
        date: product.date,
        img: product.img,
        dtrpg: product.dtrpg,
        summary: product.summary
    }
}));

export type Product = {
    id: number
    name: string
    date: string
    img: ImageMetadata
    dtrpg: string
    summary: string
}
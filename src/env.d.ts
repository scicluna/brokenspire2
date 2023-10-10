/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

export type Product = {
    id: number
    name: string
    date: string
    img: ImageMetadata
    dtrpg: string
    summary: string
}
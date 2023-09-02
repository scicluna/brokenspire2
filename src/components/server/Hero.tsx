import type { ImageMetadata } from "astro"
import herobanner from "../../images/brokenspirelogo.jpg"
import { Image } from "astro:assets"

type HeroProps = {
    herobanner: ImageMetadata
}

export default function Hero({ children }: any) {
    return (
        <section className="h-[70dvh] sm:h-[80dvh] relative mb-6">
            {children}
            <h1 className="absolute bottom-6 right-6 sm:text-7xl text-3xl font-extrabold text-stone-400">BROKEN SPIRE GAMES</h1>
        </section>
    )
}
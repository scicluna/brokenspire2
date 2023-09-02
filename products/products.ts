import spiderhollows from "../src/images/modules/spiderhollows.jpg"
import coinsforcorpses from "../src/images/modules/coinsforcorpses.jpg"
import type { ImageMetadata } from "astro"

export type Product = {
    id: number
    name: string
    date: string
    img: ImageMetadata
    dtrpg: string
    summary: string
}

//add new entries in order
export const products: Product[] = [
    { id: 1, name: "Coins for Corpses", date: "8/25/2023", img: coinsforcorpses, dtrpg: "https://www.drivethrurpg.com/", summary: "The players venture into the quaint hamlet of Ravenbrook, where a shadow looms large in the form of a menacing bandit group known as The Reapers. Designed for a team of four intrepid level two adventurers, this module weaves a tale of intrigue, betrayal, and dark alliances.\n\nAmid the rustic charm of Ravenbrook lie hidden secrets. While the townspeople go about their daily lives, some among them clandestinely align with The Reapers. To unearth the truth, players must sift through clues, engage with the local NPCs, each bearing their own motivations and insights, and unmask a traitor in their midst. This treacherous path  guides the adventurers to The Reapers’ den, Briarheart Hideaway, in the dense Briarheart Forest or confront a deadly ambush along the roads.\n\nFrom Briarheart Hideaway's decrepit structures emerge unsettling mysteries: unaccounted for corpses, eerie zombie horses, and an unexpected ghoul envoy. These anomalies hint at a nefarious alliance between the bandits and a dark, arcane power.\n\nCoins for Corpses carefully blends elements of mystery, exploration, social dynamics, and intense combat, promising adventurers a riveting journey filled with suspense and surprises. " },
    {
        id: 0, name: "Death in the Spider Hollows", date: "8/17/2023", img: spiderhollows, dtrpg: "https://www.drivethrurpg.com/",
        summary: `This adventure module is designed for a party of four level-1 adventurers and invites them into The Spider Hollows, a labyrinthine web of intertwining tunnels, deep ditches, and narrow fissures that run beneath the forest floor of an enchanted woodland.

    The Spider Hollows is an unusual and perilous terrain marked by a shadowy network of natural pathways lined with glistening spider silk. The hollows are a realm of various spider-related creatures and present a multitude of challenges for a party venturing beneath the canopy.
    
    For one of many reasons (see Hooks), our journey begins at The Webbed Entrance, a silk-bound portal that signals the threshold into the spiders' realm. Those who brave this foreboding threshold find themselves in a complex maze of subterranean passages leading to a variety of unique areas.
    
    Each area offers an array of encounters and discoveries. From dealing with the clever trapdoor spiders and confronting crafty ettercaps, to navigating the luminous Glow Worm Grotto or negotiating with silk-gathering goblins, every corner of the Hollow provides a fresh challenge or opportunity. Discovering treasures, ancient magic, and secrets about the Hollow's labyrinthine layout all become part of the journey.
    
    The omnipresent danger within Spider Hollow is the enormous spider, called The Morvgenvaugh that silently skitters above the canopy, too large to enter the fissures and tunnels, but always watching. The adventurers' goal is to navigate through The Spider Hollows, avoiding the attention of this monstrous arachnid and securing the treasures within the Hollow's depths.
    
    This adventure module combines exploration, puzzle-solving, and a dash of combat to create a thrilling expedition into The Spider Hollows. The intricate structure of the Hollow allows each adventure to be unique, providing the GM with ample opportunities to customize the journey to suit their party's interests.
    `},
]

export const productpaths = [
    { params: { name: "Coins for Corpses" }, props: { date: "8/25/2023", img: coinsforcorpses, dtrpg: "https://www.drivethrurpg.com/", summary: "The players venture into the quaint hamlet of Ravenbrook, where a shadow looms large in the form of a menacing bandit group known as The Reapers. Designed for a team of four intrepid level two adventurers, this module weaves a tale of intrigue, betrayal, and dark alliances.\n\nAmid the rustic charm of Ravenbrook lie hidden secrets. While the townspeople go about their daily lives, some among them clandestinely align with The Reapers. To unearth the truth, players must sift through clues, engage with the local NPCs, each bearing their own motivations and insights, and unmask a traitor in their midst. This treacherous path  guides the adventurers to The Reapers’ den, Briarheart Hideaway, in the dense Briarheart Forest or confront a deadly ambush along the roads.\n\nFrom Briarheart Hideaway's decrepit structures emerge unsettling mysteries: unaccounted for corpses, eerie zombie horses, and an unexpected ghoul envoy. These anomalies hint at a nefarious alliance between the bandits and a dark, arcane power.\n\nCoins for Corpses carefully blends elements of mystery, exploration, social dynamics, and intense combat, promising adventurers a riveting journey filled with suspense and surprises." } },
    {
        params: { name: "Death in the Spider Hollows" }, props: {
            date: "8/17/2023", img: spiderhollows, dtrpg: "https://www.drivethrurpg.com/",
            summary: `This adventure module is designed for a party of four level-1 adventurers and invites them into The Spider Hollows, a labyrinthine web of intertwining tunnels, deep ditches, and narrow fissures that run beneath the forest floor of an enchanted woodland.

    The Spider Hollows is an unusual and perilous terrain marked by a shadowy network of natural pathways lined with glistening spider silk. The hollows are a realm of various spider-related creatures and present a multitude of challenges for a party venturing beneath the canopy.
    
    For one of many reasons (see Hooks), our journey begins at The Webbed Entrance, a silk-bound portal that signals the threshold into the spiders' realm. Those who brave this foreboding threshold find themselves in a complex maze of subterranean passages leading to a variety of unique areas.
    
    Each area offers an array of encounters and discoveries. From dealing with the clever trapdoor spiders and confronting crafty ettercaps, to navigating the luminous Glow Worm Grotto or negotiating with silk-gathering goblins, every corner of the Hollow provides a fresh challenge or opportunity. Discovering treasures, ancient magic, and secrets about the Hollow's labyrinthine layout all become part of the journey.
    
    The omnipresent danger within Spider Hollow is the enormous spider, called The Morvgenvaugh that silently skitters above the canopy, too large to enter the fissures and tunnels, but always watching. The adventurers' goal is to navigate through The Spider Hollows, avoiding the attention of this monstrous arachnid and securing the treasures within the Hollow's depths.
    
    This adventure module combines exploration, puzzle-solving, and a dash of combat to create a thrilling expedition into The Spider Hollows. The intricate structure of the Hollow allows each adventure to be unique, providing the GM with ample opportunities to customize the journey to suit their party's interests.
    ` }
    }
]
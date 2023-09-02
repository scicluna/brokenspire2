import { Image } from "astro:assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons"
import brokenSpireLogo from "@/public/images/brokenspirenologo.png"
import drivethroughrpg from "@/public/images/drivethrurpg-logo.png"
import Hoverlinks from "../client/Hoverlinks";

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 items-center h-96 min-h-[20%] relative bg-stone-700 text-stone-100 text-sm">
            <div className="flex h-full w-full">
                <div className="relative sm:m-8 sm:w-1/5 w-3/5">
                    <Image src={brokenSpireLogo} alt={'broken spire logo'} class="sm:object-fill object-cover" />
                </div>
                <div className="flex flex-col sm:w-4/5 w-2/5 md:gap-0 gap-4">
                    <div className="grid md:grid-cols-4 md:grid-rows-2 grid-cols-1 h-16 m-10 sm:text-2xl">
                        <Hoverlinks />
                    </div>
                    <div className="flex flex-col items-start">
                        <a href={'https://www.drivethrurpg.com'} className="relative h-8 sm:w-48 w-36 " target="_blank">
                            <Image src={drivethroughrpg} alt={'drive thru rpg'} class="aspect-auto" />
                        </a>
                        <div className="flex gap-1 justify-start">
                            <div className="md:w-8 md:h-8 h-6 w-6 hover:text-stone-400">
                                <a href={'https://twitter.com/'} target="_blank">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <div className="md:w-8 md:h-8 h-6 w-6 hover:text-stone-400">
                                <a href={'https://facebook.com/'} target="_blank">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </div>
                            <div className="md:w-8 md:h-8 h-6 w-6 hover:text-stone-400">
                                <a href={'https://youtube.com/'} target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <div className="md:w-8 md:h-8 h-6 w-6 hover:text-stone-400">
                                <a href={'https://instagram.com/'} target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className="md:w-8 md:h-8 h-6 w-6 hover:text-stone-400">
                                <a href={'https://github.com/scicluna/'} target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="border-t border-stone-950 h-24 flex md:flex-row flex-col text-xs justify-around items-center w-full">
                <p>Broken Spire Games 2023.All rights reserved.</p>
            </div>
        </footer >
    )
}
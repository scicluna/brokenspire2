'use client'

export default function HoverLinks() {
    const path = window.location.href
    return (
        <>
            <a className={`w-fit hover:text-stone-400 ${path.replace('/', "") === "" ? 'text-stone-400' : null}`} href={'/'}>Home</a>
            <a className={`w-fit hover:text-stone-400 ${path.includes('/modules') ? 'text-stone-400' : null}`} href={'/modules?page=1'}>Modules</a>
            <a className={`w-fit hover:text-stone-400 ${path.includes('/contact') ? 'text-stone-400' : null}`} href={'/contact'}>Contact</a>
            <a className={`w-fit hover:text-stone-400 ${path.includes('/about') ? 'text-stone-400' : null}`} href={'/about'}>About Us</a>
        </>
    )
}
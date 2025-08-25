import { Archivo, Titillium_Web, Pacifico } from 'next/font/google'

export const archivo = Archivo({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--erepair-font",
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
    adjustFontFallback: false,
})
export const titilliumWeb = Titillium_Web({
    weight: ['400', '600', '700', '900'],
    subsets: ['latin'],
    variable: "--erepair-font-2",
    display: 'swap',
    fallback: ['Arial', 'sans-serif'],
    adjustFontFallback: false,
})
export const pacifico = Pacifico({
    weight: ['400'],
    subsets: ['latin'],
    variable: "--erepair-font-3",
    display: 'swap',
    fallback: ['cursive'],
    adjustFontFallback: false,
})


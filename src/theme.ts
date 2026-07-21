// picked once per page load: pink or light blue, dots in the same hue.
// the title shadow and name use the opposite theme's color
const BG_THEMES = [
  {
    base: '#f6a9c9',
    dot: '#e0679e',
    titleShadow: 'drop-shadow-[5px_5px_0_#7ec8ea]',
    name: 'text-[#4d9fd4]',
  },
  {
    base: '#8fd0f0',
    dot: '#4d9fd4',
    titleShadow: 'drop-shadow-[5px_5px_0_#f6a9c9]',
    name: 'text-[#e75a9c]',
  },
]

// ?theme=pink|blue pins the otherwise random theme (used for OGP capture)
const forcedTheme = new URLSearchParams(window.location.search).get('theme')
export const bgTheme =
  forcedTheme === 'pink' ? BG_THEMES[0] :
  forcedTheme === 'blue' ? BG_THEMES[1] :
  BG_THEMES[Math.floor(Math.random() * BG_THEMES.length)]

// paint the background on <html>/<body> so it also fills the safe areas
// (notch / home indicator) on iOS Safari with viewport-fit=cover
document.documentElement.style.backgroundColor = bgTheme.base
document.body.style.backgroundColor = bgTheme.base
document.body.style.backgroundImage = `radial-gradient(${bgTheme.dot} 1.5px, transparent 1.5px)`
document.body.style.backgroundSize = '14px 14px'

// quiet sibling of buttonClass: same language (black border + hard shadow),
// smaller and uncolored so it stays subordinate to the main button
export const iconButtonClass =
  "flex h-10 w-10 items-center justify-center border-[3px] border-black bg-[#fdf4dc] text-black sm:h-11 sm:w-11 " +
  "shadow-[3px_3px_0_0_#000] transition-transform duration-150 " +
  "hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_#000] active:translate-y-0.5 active:shadow-[1px_1px_0_0_#000]"

export const buttonClass =
  "inline-flex h-10 items-center justify-center border-[3px] border-black px-3 font-righteous text-sm text-black sm:h-11 sm:px-6 sm:text-lg md:px-7 md:text-xl " +
  "shadow-[5px_5px_0_0_#000] transition-transform duration-150 " +
  "hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_0_#000]"

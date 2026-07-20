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

export const bgTheme = BG_THEMES[Math.floor(Math.random() * BG_THEMES.length)]

// paint the background on <html>/<body> so it also fills the safe areas
// (notch / home indicator) on iOS Safari with viewport-fit=cover
document.documentElement.style.backgroundColor = bgTheme.base
document.body.style.backgroundColor = bgTheme.base
document.body.style.backgroundImage = `radial-gradient(${bgTheme.dot} 1.5px, transparent 1.5px)`
document.body.style.backgroundSize = '14px 14px'

export const buttonClass =
  "inline-block border-[3px] border-black px-6 py-2 font-righteous text-lg text-black md:px-7 md:text-xl " +
  "shadow-[5px_5px_0_0_#000] transition-transform duration-150 " +
  "hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_0_#000]"

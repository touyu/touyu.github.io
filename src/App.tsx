import {siteData} from "./model/data";
import {bgTheme, buttonClass, iconButtonClass} from "./theme";
import {Confetti} from "./Confetti";

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 fill-current sm:h-6 sm:w-6">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const XIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current sm:h-6 sm:w-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
  </svg>
)

// invisible hover areas over items in the illustration, in % of the image
const SCENE_HOTSPOTS = [
  {left: '1%', top: '52%', width: '14%', height: '40%', text: 'Loves GlenAllachie'},
  {left: '16%', top: '42%', width: '11%', height: '47%', text: 'Daily drivers: Varia VS3 & Flair 58+2'},
  {left: '23%', top: '68%', width: '22%', height: '30%', text: 'Fish'},
]

const Scene = () => (
  <div className="relative">
    <img src="/80s-scene.jpg" alt="" className="block h-auto w-full" />
    {SCENE_HOTSPOTS.map((spot) => (
      <div
        key={spot.text}
        className="group absolute cursor-help"
        style={{left: spot.left, top: spot.top, width: spot.width, height: spot.height}}
      >
        <div className="pointer-events-none absolute bottom-full left-0 z-30 mb-3 hidden w-max group-hover:block">
          <div className="relative rounded-xl border-[3px] border-black bg-[#fdf4dc] px-4 py-2 text-sm font-bold text-black shadow-[4px_4px_0_0_#000]">
            {spot.text}
            <div className="absolute -bottom-[9px] left-6 h-3.5 w-3.5 rotate-45 border-b-[3px] border-r-[3px] border-black bg-[#fdf4dc]" />
          </div>
        </div>
      </div>
    ))}
  </div>
)

const App = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center p-6 sm:p-8">
      <Confetti />

      <div className="relative w-full max-w-3xl">
        <div className="relative border-4 border-black bg-[#fdf4dc] p-5 pb-8 shadow-[12px_12px_0_0_rgba(0,0,0,0.85)] sm:p-8 sm:pb-10">
          {/* title */}
          <h1 className={`relative z-10 -mb-4 -rotate-3 text-center font-pacifico text-6xl text-white [-webkit-text-stroke:2px_black] ${bgTheme.titleShadow} sm:text-7xl md:-mb-5 md:text-8xl`}>
            {siteData.title}
          </h1>

          {/* illustration panel */}
          <div className="relative mt-2 border-4 border-black">
            <Scene />
            {/* year badge */}
            <div className="absolute z-20 -left-10 -top-4 sm:-left-4 -rotate-6 rounded-lg border-[3px] border-black bg-[#f6a9c9] px-2.5 py-0.5 sm:px-3 sm:py-1 shadow-[3px_3px_0_0_#000]">
              <span className="font-righteous text-base sm:text-xl tracking-widest text-[#5d3fae]">1997</span>
            </div>
          </div>

          {/* name / description */}
          <div className="mt-6 text-center">
            <h2 className={`font-righteous text-3xl uppercase tracking-[0.2em] ${bgTheme.name} [text-shadow:2px_2px_0_#000] md:text-4xl`}>
              {siteData.subTitle}
            </h2>
            <p className="mt-1 text-sm font-bold italic tracking-[0.3em] text-black md:text-base">
              — {siteData.description} —
            </p>
          </div>

          {/* links */}
          <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
            <a className={iconButtonClass} href={siteData.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a className={iconButtonClass} href={siteData.xUrl} target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a>
            <a className={`${buttonClass} bg-[#fdf4dc]`} href="/about/">/about</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

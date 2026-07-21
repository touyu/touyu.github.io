import {siteData} from "./model/data";
import {bgTheme, buttonClass} from "./theme";
import {Confetti} from "./Confetti";

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
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-5">
            <a className={`${buttonClass} bg-[#f8e27a]`} href={siteData.githubUrl} target="_blank" rel="noopener noreferrer">github.com</a>
            <a className={`${buttonClass} bg-[#7ec8ea]`} href={siteData.xUrl} target="_blank" rel="noopener noreferrer">x.com</a>
            <a className={`${buttonClass} bg-[#f06fb0]`} href="/about/">/about</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

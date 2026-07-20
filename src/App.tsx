import {siteData} from "./model/data";

const socialLinkClass =
  "relative text-xs text-white bg-gradient-to-t from-white to-white bg-no-repeat " +
  "[background-position:left_bottom] [background-size:0_1px] hover:[background-size:100%_1px] " +
  "transition-[background-size] duration-300"

const App = () => {
  return (
    <main className="h-dvh bg-black font-futura">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-thin italic tracking-[0.1rem] opacity-90">
        <h1 className="text-[60px] font-thin tracking-[0.2rem] text-white">{siteData.title}</h1>
        <h2 className="mt-2 text-lg font-thin text-white">{siteData.subTitle}</h2>
        <p className="text-sm text-white opacity-90">{siteData.description}</p>
        <div className="mt-3 flex gap-x-4">
          <a className={socialLinkClass} href={siteData.githubUrl}>GitHub</a>
          <a className={socialLinkClass} href={siteData.twitterUrl}>Twitter</a>
        </div>
      </div>
    </main>
  )
}

export default App

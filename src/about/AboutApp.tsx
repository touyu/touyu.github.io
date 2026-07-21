import {careers} from "../model/data";
import {bgTheme, buttonClass, sunsetTextClass} from "../theme";
import {Confetti} from "../Confetti";

const AboutApp = () => {
  return (
    <main className="relative flex min-h-dvh items-center justify-center p-6 sm:p-8">
      <Confetti />

      <div className="relative w-full max-w-xl">
        <div className="relative border-4 border-black bg-[#fdf4dc] p-6 pb-8 shadow-[12px_12px_0_0_rgba(0,0,0,0.85)] sm:p-10">
          {/* title */}
          <h1 className={`-rotate-3 text-center font-pacifico text-5xl text-white [-webkit-text-stroke:2px_black] ${bgTheme.titleShadow} sm:text-6xl`}>
            about me
          </h1>

          {/* career timeline */}
          <ul className="mt-8 sm:mt-10">
            {careers.map((career, i) => (
              <li key={career.company} className={i > 0 ? 'mt-10' : ''}>
                <div className="text-center">
                  <span className={`inline-block ${i % 2 === 1 ? '-rotate-2' : 'rotate-2'} rounded-lg border-[3px] border-black bg-[#f6a9c9] px-3 py-0.5 font-righteous text-sm tracking-widest text-[#5d3fae] shadow-[3px_3px_0_0_#000]`}>
                    {career.period}
                  </span>
                  <h2 className={`mt-3 font-righteous text-2xl uppercase tracking-[0.15em] [-webkit-text-stroke:1px_black] sm:text-3xl ${sunsetTextClass}`}>
                    {career.company}
                  </h2>
                  <p className="mt-1 text-sm font-bold italic tracking-[0.2em] text-black">
                    {career.position}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* back to top */}
          <div className="mt-8 text-center sm:mt-10">
            <a className={`${buttonClass} bg-[#fdf4dc]`} href="/">
              <span className="inline-flex items-center gap-2">
                <svg className="h-[0.8em] w-[0.8em]" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                  <path d="M12 1.5 L3.5 8 L12 14.5 Z" />
                </svg>
                back
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AboutApp

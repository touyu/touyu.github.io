import {useEffect, useRef} from "react";
import {siteData} from "./model/data";

const buttonClass =
  "inline-block border-[3px] border-black px-6 py-2 font-righteous text-lg text-black md:px-7 md:text-xl " +
  "shadow-[5px_5px_0_0_#000] transition-transform duration-150 " +
  "hover:-translate-y-0.5 hover:shadow-[7px_7px_0_0_#000] active:translate-y-1 active:shadow-[2px_2px_0_0_#000]"

// invisible hover areas over items in the illustration, in % of the image
const SCENE_HOTSPOTS = [
  {left: '1%', top: '52%', width: '14%', height: '40%', text: 'グレンアラヒーが好き'},
  {left: '16%', top: '42%', width: '11%', height: '47%', text: 'Varia VS3 & Flair 58+2 愛用'},
  {left: '23%', top: '68%', width: '22%', height: '30%', text: 'ポーカー楽しいね'},
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

type PieceKind = 'squiggle' | 'triangle' | 'sparkle' | 'dot'

interface PieceDef {
  kind: PieceKind
  color: string
  size: number
}

// colors sampled from the card: sunset, whiskey, sky, pool, tiles,
// foliage, poker chips, cream card stock, and the two buttons
const BASE_PIECE_DEFS: PieceDef[] = [
  {kind: 'squiggle', color: '#f06fb0', size: 64},
  {kind: 'squiggle', color: '#8c6fd9', size: 64},
  {kind: 'squiggle', color: '#7fd4e8', size: 56},
  {kind: 'squiggle', color: '#2e6b5e', size: 56},
  {kind: 'squiggle', color: '#4a4fa3', size: 48},
  {kind: 'squiggle', color: '#fdf4dc', size: 60},
  {kind: 'squiggle', color: '#3fb3b8', size: 52},
  {kind: 'squiggle', color: '#d94f9e', size: 44},
  {kind: 'triangle', color: '#ffd400', size: 36},
  {kind: 'triangle', color: '#fdf4dc', size: 28},
  {kind: 'triangle', color: '#2e6b5e', size: 32},
  {kind: 'triangle', color: '#f06fb0', size: 24},
  {kind: 'sparkle', color: '#f8e27a', size: 32},
  {kind: 'sparkle', color: '#fdf4dc', size: 26},
  {kind: 'sparkle', color: '#ffffff', size: 22},
  {kind: 'sparkle', color: '#7fd4e8', size: 28},
  {kind: 'dot', color: '#4a4fa3', size: 16},
  {kind: 'dot', color: '#ffffff', size: 12},
  {kind: 'dot', color: '#8c6fd9', size: 12},
  {kind: 'dot', color: '#2e7d74', size: 16},
  {kind: 'dot', color: '#ffd400', size: 14},
  {kind: 'dot', color: '#d94f9e', size: 10},
  {kind: 'dot', color: '#f8e27a', size: 14},
  {kind: 'dot', color: '#7ec8ea', size: 10},
]

// population scales with viewport area: ~18 pieces on a phone,
// ~65 on a laptop, capped at 120 on large displays
const makePieceDefs = (): PieceDef[] => {
  const area = window.innerWidth * window.innerHeight
  const count = Math.min(120, Math.max(17, Math.round(area / 18000)))
  return Array.from({length: count}, (_, i) => {
    const base = BASE_PIECE_DEFS[i % BASE_PIECE_DEFS.length]
    const scale = 0.75 + Math.random() * 0.45
    return {...base, size: Math.round(base.size * scale)}
  })
}

const pieceHeight = (def: PieceDef) =>
  def.kind === 'squiggle' ? def.size * 20 / 56 : def.size

const PieceSprite = ({def}: {def: PieceDef}) => {
  switch (def.kind) {
    case 'squiggle':
      return (
        <svg width={def.size} height={pieceHeight(def)} viewBox="0 0 56 20" fill="none">
          <path d="M2 12 q7 -14 14 0 t14 0 t14 0" stroke={def.color} strokeWidth="4" strokeLinecap="round" />
        </svg>
      )
    case 'triangle':
      return (
        <svg width={def.size} height={def.size} viewBox="0 0 32 32" fill="none">
          <path d="M16 3 L29 27 H3 Z" stroke={def.color} strokeWidth="4" strokeLinejoin="round" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg width={def.size} height={def.size} viewBox="0 0 32 32">
          <path d="M16 2 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" fill={def.color} />
        </svg>
      )
    case 'dot':
      return (
        <div style={{width: def.size, height: def.size, borderRadius: '50%', background: def.color}} />
      )
  }
}

const Confetti = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([])
  const defsRef = useRef<PieceDef[] | null>(null)
  if (defsRef.current === null) {
    defsRef.current = makePieceDefs()
  }
  const pieceDefs = defsRef.current

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    interface Body {
      def: PieceDef
      el: HTMLDivElement
      w: number
      h: number
      r: number
      m: number
      x: number
      y: number
      vx: number
      vy: number
      cruise: number
      rot: number
      vrot: number
      wander: number
    }

    const bounds0 = container.getBoundingClientRect()

    const bodies: Body[] = []
    pieceDefs.forEach((def, i) => {
      const el = nodeRefs.current[i]
      if (!el) return
      const w = def.size
      const h = pieceHeight(def)
      const x = Math.random() * Math.max(bounds0.width - w, 1)
      const y = Math.random() * Math.max(bounds0.height - h, 1)
      const angle0 = Math.random() * Math.PI * 2
      const cruise = 40 + Math.random() * 50
      const r = (w + h) / 4
      bodies.push({
        def, el, w, h, r, m: r * r, x, y,
        vx: Math.cos(angle0) * cruise,
        vy: Math.sin(angle0) * cruise,
        cruise,
        rot: Math.random() * 360,
        vrot: (Math.random() - 0.5) * 80,
        wander: Math.random() * Math.PI * 2,
      })
    })

    // the pointer (mouse cursor or touching finger) acts as a circular
    // obstacle; its velocity is tracked so hits transfer momentum
    const CURSOR_RADIUS = 28
    const MAX_SPEED = 900
    const mouse = {x: -9999, y: -9999, vx: 0, vy: 0, lastT: 0}
    const updatePointer = (clientX: number, clientY: number) => {
      const bounds = container.getBoundingClientRect()
      const x = clientX - bounds.left
      const y = clientY - bounds.top
      const t = performance.now()
      if (mouse.lastT > 0 && mouse.x > -9000) {
        const mdt = Math.max((t - mouse.lastT) / 1000, 0.001)
        // smoothed instantaneous velocity
        mouse.vx = mouse.vx * 0.7 + ((x - mouse.x) / mdt) * 0.3
        mouse.vy = mouse.vy * 0.7 + ((y - mouse.y) / mdt) * 0.3
      }
      mouse.x = x
      mouse.y = y
      mouse.lastT = t
    }
    const clearPointer = () => {
      mouse.x = -9999
      mouse.y = -9999
      mouse.vx = 0
      mouse.vy = 0
      mouse.lastT = 0
    }
    const onMouseMove = (e: MouseEvent) => updatePointer(e.clientX, e.clientY)
    const onTouchStart = (e: TouchEvent) => {
      // fresh touch: place the obstacle without inheriting a velocity jump
      clearPointer()
      const t = e.touches[0]
      if (t) updatePointer(t.clientX, t.clientY)
    }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) updatePointer(t.clientX, t.clientY)
    }
    window.addEventListener('mousemove', onMouseMove)
    document.documentElement.addEventListener('mouseleave', clearPointer)
    window.addEventListener('touchstart', onTouchStart, {passive: true})
    window.addEventListener('touchmove', onTouchMove, {passive: true})
    window.addEventListener('touchend', clearPointer)
    window.addEventListener('touchcancel', clearPointer)

    let raf = 0
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const bounds = container.getBoundingClientRect()

      // cursor velocity decays when the mouse stops sending events
      mouse.vx *= Math.exp(-6 * dt)
      mouse.vy *= Math.exp(-6 * dt)

      for (const b of bodies) {
        // gentle random steering so paths curve organically
        const steer = Math.sin(now / 900 + b.wander) * 0.8 * dt
        const cos = Math.cos(steer), sin = Math.sin(steer)
        const svx = b.vx * cos - b.vy * sin
        b.vy = b.vx * sin + b.vy * cos
        b.vx = svx

        // excess speed from impacts eases back down to cruising speed
        const speed = Math.hypot(b.vx, b.vy)
        if (speed > 0.001) {
          const target = b.cruise + (speed - b.cruise) * Math.exp(-1 * dt)
          const scale = target / speed
          b.vx *= scale
          b.vy *= scale
        }

        b.x += b.vx * dt
        b.y += b.vy * dt

        // bounce off viewport edges
        if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) }
        if (b.x > bounds.width - b.w) { b.x = bounds.width - b.w; b.vx = -Math.abs(b.vx) }
        if (b.y < 0) { b.y = 0; b.vy = Math.abs(b.vy) }
        if (b.y > bounds.height - b.h) { b.y = bounds.height - b.h; b.vy = -Math.abs(b.vy) }

        // cursor collision: reflect + inherit the cursor's momentum
        const ccx = b.x + b.w / 2
        const ccy = b.y + b.h / 2
        const mdx = ccx - mouse.x
        const mdy = ccy - mouse.y
        const mdist = Math.hypot(mdx, mdy)
        const minDist = CURSOR_RADIUS + (b.w + b.h) / 4
        if (mdist > 0.001 && mdist < minDist) {
          const nx = mdx / mdist
          const ny = mdy / mdist
          b.x += nx * (minDist - mdist)
          b.y += ny * (minDist - mdist)
          // reflect if approaching the cursor
          const dot = b.vx * nx + b.vy * ny
          if (dot < 0) {
            b.vx -= 2 * dot * nx
            b.vy -= 2 * dot * ny
          }
          // impulse: the cursor's velocity along the push direction
          const mDot = mouse.vx * nx + mouse.vy * ny
          if (mDot > 0) {
            b.vx += mDot * 0.85 * nx
            b.vy += mDot * 0.85 * ny
          }
          // clamp so a violent flick doesn't launch pieces into orbit
          const s = Math.hypot(b.vx, b.vy)
          if (s > MAX_SPEED) {
            b.vx *= MAX_SPEED / s
            b.vy *= MAX_SPEED / s
          }
        }

        b.rot += b.vrot * dt
      }

      // piece-to-piece collisions (elastic, mass ∝ size²)
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const a = bodies[i], c = bodies[j]
          const dx = (c.x + c.w / 2) - (a.x + a.w / 2)
          const dy = (c.y + c.h / 2) - (a.y + a.h / 2)
          const dist = Math.hypot(dx, dy)
          const minDist = a.r + c.r
          if (dist <= 0.001 || dist >= minDist) continue
          const nx = dx / dist
          const ny = dy / dist
          // separate the pair, lighter piece moves more
          const overlap = minDist - dist
          const total = a.m + c.m
          a.x -= nx * overlap * (c.m / total)
          a.y -= ny * overlap * (c.m / total)
          c.x += nx * overlap * (a.m / total)
          c.y += ny * overlap * (a.m / total)
          // elastic impulse along the normal, only if approaching
          const rvn = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny
          if (rvn < 0) {
            const impulse = -(1 + 0.9) * rvn / (1 / a.m + 1 / c.m)
            a.vx -= (impulse / a.m) * nx
            a.vy -= (impulse / a.m) * ny
            c.vx += (impulse / c.m) * nx
            c.vy += (impulse / c.m) * ny
          }
        }
      }

      for (const b of bodies) {
        b.el.style.transform = `translate3d(${b.x}px, ${b.y}px, 0) rotate(${b.rot}deg)`
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
      document.documentElement.removeEventListener('mouseleave', clearPointer)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', clearPointer)
      window.removeEventListener('touchcancel', clearPointer)
    }
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieceDefs.map((def, i) => (
        <div
          key={i}
          ref={(el) => { nodeRefs.current[i] = el }}
          className="absolute left-0 top-0 will-change-transform"
        >
          <PieceSprite def={def} />
        </div>
      ))}
    </div>
  )
}

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
const bgTheme = BG_THEMES[Math.floor(Math.random() * BG_THEMES.length)]

// paint the background on <html>/<body> so it also fills the safe areas
// (notch / home indicator) on iOS Safari with viewport-fit=cover
document.documentElement.style.backgroundColor = bgTheme.base
document.body.style.backgroundColor = bgTheme.base
document.body.style.backgroundImage = `radial-gradient(${bgTheme.dot} 1.5px, transparent 1.5px)`
document.body.style.backgroundSize = '14px 14px'

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
          <div className="mt-6 flex justify-center gap-5">
            <a className={`${buttonClass} bg-[#ffd400]`} href={siteData.githubUrl} target="_blank" rel="noopener noreferrer">github.com</a>
            <a className={`${buttonClass} bg-[#7ec8ea]`} href={siteData.xUrl} target="_blank" rel="noopener noreferrer">x.com</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

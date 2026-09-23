import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

/* Minimal 30-degree isometric toolkit. Every scene is projected from the same
   grid so the whole set reads as one drafting system. */
const C = Math.cos(Math.PI / 6)
const S = 0.5
type P = [number, number]
type V3 = [number, number, number]

const pr = (v: V3, o: P): P => [o[0] + (v[0] - v[1]) * C, o[1] + (v[0] + v[1]) * S - v[2]]
const f = (n: number) => Math.round(n * 10) / 10
const pts = (list: P[]) => list.map(([x, y]) => `${f(x)},${f(y)}`).join(' ')

const topFace = (x0: number, y0: number, x1: number, y1: number, z: number, o: P) =>
  pts([pr([x0, y0, z], o), pr([x1, y0, z], o), pr([x1, y1, z], o), pr([x0, y1, z], o)])
const rightFace = (x: number, y0: number, y1: number, z0: number, z1: number, o: P) =>
  pts([pr([x, y0, z0], o), pr([x, y1, z0], o), pr([x, y1, z1], o), pr([x, y0, z1], o)])
const leftFace = (y: number, x0: number, x1: number, z0: number, z1: number, o: P) =>
  pts([pr([x0, y, z0], o), pr([x1, y, z0], o), pr([x1, y, z1], o), pr([x0, y, z1], o)])

function seg(a: V3, b: V3, o: P) {
  const A = pr(a, o)
  const B = pr(b, o)
  return { x1: f(A[0]), y1: f(A[1]), x2: f(B[0]), y2: f(B[1]) }
}
function disc(cx: number, cy: number, z: number, r: number, o: P) {
  const c = pr([cx, cy, z], o)
  return { cx: f(c[0]), cy: f(c[1]), rx: f(1.2247 * r), ry: f(0.7071 * r) }
}

const dl = (ms = 0) => ({ '--d': `${ms}ms` }) as CSSProperties

const INK = '#00507e'
const EMBER = '#8f837a'

function Line({ a, b, o, d = 0, dash, w = 1.5 }: { a: V3; b: V3; o: P; d?: number; dash?: string; w?: number }) {
  return <line {...seg(a, b, o)} className="ink" pathLength={1} strokeDasharray={dash} strokeWidth={w} style={dl(d)} />
}
function Box({ x0, y0, x1, y1, z0, z1, o, d = 0, accent }: {
  x0: number; y0: number; x1: number; y1: number; z0: number; z1: number; o: P; d?: number; accent?: boolean
}) {
  return (
    <g style={dl(d)}>
      <polygon points={leftFace(y1, x0, x1, z0, z1, o)} className="ink" pathLength={1} fill={accent ? EMBER : 'none'} />
      <polygon points={rightFace(x1, y0, y1, z0, z1, o)} className="ink" pathLength={1} fill={accent ? EMBER : 'none'} />
      <polygon points={topFace(x0, y0, x1, y1, z1, o)} className="ink" pathLength={1} fill="#ffffff" />
    </g>
  )
}
function Drum({ cx, cy, z0, z1, r, o, d = 0, accent }: {
  cx: number; cy: number; z0: number; z1: number; r: number; o: P; d?: number; accent?: boolean
}) {
  const t = disc(cx, cy, z1, r, o)
  const b = disc(cx, cy, z0, r, o)
  const l = pr([cx - r, cy, z0], o)
  const rgt = pr([cx + r, cy, z0], o)
  const lt = pr([cx - r, cy, z1], o)
  const rt = pr([cx + r, cy, z1], o)
  return (
    <g style={dl(d)}>
      <path
        className="ink"
        pathLength={1}
        d={`M ${f(lt[0])} ${f(lt[1])} L ${f(l[0])} ${f(l[1])} A ${t.rx} ${t.ry} 0 0 0 ${f(rgt[0])} ${f(rgt[1])} L ${f(rt[0])} ${f(rt[1])}`}
        fill={accent ? EMBER : 'none'}
      />
      <ellipse {...b} className="ink" pathLength={1} fill="none" />
      <ellipse {...t} className="ink" pathLength={1} fill="#ffffff" />
    </g>
  )
}

/* ------------------------------------------------------------------ scenes */

function Marketing({ o }: { o: P }) {
  return (
    <>
      <polygon points={topFace(0, 0, 74, 50, 0, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(0)} />
      <polygon points={leftFace(50, 0, 74, -6, 0, o)} className="ink" pathLength={1} fill="none" style={dl(0)} />
      <polygon points={rightFace(74, 0, 50, -6, 0, o)} className="ink" pathLength={1} fill="none" style={dl(0)} />
      <Box x0={10} y0={12} x1={24} y1={26} z0={0} z1={16} o={o} d={120} />
      <Box x0={30} y0={12} x1={44} y1={26} z0={0} z1={30} o={o} d={200} />
      <Box x0={50} y0={12} x1={64} y1={26} z0={0} z1={46} o={o} d={280} accent />
      <Line a={[57, 19, 46]} b={[57, 19, 62]} o={o} d={400} />
      <polygon points={pts([pr([57, 19, 62], o), pr([57, 19, 54], o), pr([68, 19, 58], o)])} className="fill-in" fill={EMBER} style={dl(480)} />
      <Line a={[10, 40, 0]} b={[64, 40, 0]} o={o} d={360} dash="3 3" w={1} />
    </>
  )
}

function Trade({ o }: { o: P }) {
  return (
    <>
      <polygon points={topFace(0, 0, 84, 40, 0, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(0)} />
      <polygon points={leftFace(40, 0, 84, -8, 0, o)} className="ink" pathLength={1} fill="none" style={dl(0)} />
      <polygon points={rightFace(84, 0, 40, -8, 0, o)} className="ink" pathLength={1} fill="none" style={dl(0)} />
      {/* container */}
      <Box x0={8} y0={10} x1={52} y1={30} z0={0} z1={20} o={o} d={120} />
      <Line a={[16, 30, 0]} b={[16, 30, 20]} o={o} d={220} w={1} />
      <Line a={[24, 30, 0]} b={[24, 30, 20]} o={o} d={240} w={1} />
      <Line a={[32, 30, 0]} b={[32, 30, 20]} o={o} d={260} w={1} />
      <Line a={[40, 30, 0]} b={[40, 30, 20]} o={o} d={280} w={1} />
      {/* gantry */}
      <Line a={[64, 6, 0]} b={[64, 6, 52]} o={o} d={320} />
      <Line a={[64, 34, 0]} b={[64, 34, 52]} o={o} d={340} />
      <Line a={[64, 6, 52]} b={[64, 34, 52]} o={o} d={360} />
      <Line a={[64, 20, 52]} b={[64, 20, 34]} o={o} d={400} w={1} />
      <Box x0={60} y0={16} x1={68} y1={24} z0={26} z1={34} o={o} d={440} accent />
      {/* route */}
      <path className="ink" pathLength={1} strokeDasharray="3 3" strokeWidth={1} style={dl(480)}
        d={`M ${f(pr([70, 20, 0], o)[0])} ${f(pr([70, 20, 0], o)[1])} Q ${f(pr([84, 6, 30], o)[0])} ${f(pr([84, 6, 30], o)[1])} ${f(pr([78, -6, 0], o)[0])} ${f(pr([78, -6, 0], o)[1])}`} fill="none" />
      <ellipse {...disc(78, -6, 0, 3, o)} className="fill-in" fill={EMBER} style={dl(560)} />
    </>
  )
}

function Cmo({ o }: { o: P }) {
  const node = (x: number, y: number, d: number, accent = false) => (
    <Box x0={x} y0={y} x1={x + 14} y1={y + 14} z0={0} z1={6} o={o} d={d} accent={accent} />
  )
  return (
    <>
      <polygon points={topFace(0, 0, 76, 62, 0, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(0)} />
      {node(31, 6, 120, true)}
      {node(6, 40, 260)}
      {node(31, 44, 320)}
      {node(56, 40, 380)}
      <Line a={[38, 20, 6]} b={[13, 47, 6]} o={o} d={440} w={1} />
      <Line a={[38, 20, 6]} b={[38, 51, 6]} o={o} d={460} w={1} />
      <Line a={[38, 20, 6]} b={[63, 47, 6]} o={o} d={480} w={1} />
    </>
  )
}

function Cleaners({ o }: { o: P }) {
  return (
    <>
      <polygon points={topFace(0, 0, 70, 46, 0, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(0)} />
      <Drum cx={22} cy={23} z0={0} z1={34} r={13} o={o} d={120} />
      <Line a={[9, 23, 12]} b={[35, 23, 12]} o={o} d={260} w={1} />
      <Line a={[9, 23, 22]} b={[35, 23, 22]} o={o} d={280} w={1} />
      {/* beaker */}
      <Line a={[50, 16, 0]} b={[50, 16, 22]} o={o} d={320} />
      <Line a={[62, 16, 0]} b={[62, 16, 22]} o={o} d={340} />
      <Line a={[50, 16, 0]} b={[62, 16, 0]} o={o} d={360} />
      <Line a={[50, 16, 22]} b={[48, 16, 26]} o={o} d={380} w={1} />
      <Line a={[62, 16, 22]} b={[64, 16, 26]} o={o} d={380} w={1} />
      <Line a={[50, 16, 10]} b={[62, 16, 10]} o={o} d={400} w={1} />
      {/* droplet */}
      <path className="fill-in" fill={EMBER} style={dl(460)}
        d={`M ${f(pr([56, 30, 26], o)[0])} ${f(pr([56, 30, 26], o)[1])} q 5 7 0 11 q -5 -4 0 -11 z`} />
    </>
  )
}

function Mixers({ o }: { o: P }) {
  const t = disc(30, 26, 40, 16, o)
  return (
    <>
      <Drum cx={30} cy={26} z0={0} z1={40} r={16} o={o} d={0} />
      {/* shaft + 3D blade */}
      <Line a={[30, 26, 40]} b={[30, 26, 14]} o={o} d={200} />
      <Line a={[30, 26, 14]} b={[42, 26, 8]} o={o} d={260} w={2} />
      <Line a={[30, 26, 14]} b={[18, 26, 8]} o={o} d={280} w={2} />
      <Line a={[30, 26, 14]} b={[30, 38, 8]} o={o} d={300} w={2} />
      <ellipse {...t} className="ink" pathLength={1} fill="none" strokeDasharray="3 3" strokeWidth={1} style={dl(340)} />
      {/* velocity vectors */}
      <Line a={[30, 26, 40]} b={[30, 26, 58]} o={o} d={400} w={2} />
      <polygon points={pts([pr([30, 26, 58], o), pr([28, 26, 53], o), pr([32, 26, 53], o)])} className="fill-in" fill={EMBER} style={dl(460)} />
      <Line a={[30, 26, 40]} b={[48, 26, 40]} o={o} d={420} w={2} />
      <polygon points={pts([pr([48, 26, 40], o), pr([43, 24, 40], o), pr([43, 28, 40], o)])} className="fill-in" fill={EMBER} style={dl(480)} />
      <Line a={[30, 26, 40]} b={[30, 8, 40]} o={o} d={440} w={2} />
      <polygon points={pts([pr([30, 8, 40], o), pr([28, 13, 40], o), pr([32, 13, 40], o)])} className="fill-in" fill={EMBER} style={dl(500)} />
    </>
  )
}

function Podcast({ o }: { o: P }) {
  return (
    <>
      <polygon points={topFace(6, 6, 62, 46, 0, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(0)} />
      <ellipse {...disc(34, 26, 0, 12, o)} className="ink" pathLength={1} fill="#ffffff" style={dl(80)} />
      <Line a={[34, 26, 0]} b={[34, 26, 10]} o={o} d={140} />
      {/* capsule mic */}
      <path className="ink" pathLength={1} style={dl(200)}
        d={`M ${f(pr([28, 26, 34], o)[0])} ${f(pr([28, 26, 34], o)[1])} a 6 9 0 0 1 12 0 v 12 a 6 9 0 0 1 -12 0 z`} fill="#ffffff" />
      <Line a={[28, 26, 40]} b={[40, 26, 40]} o={o} d={280} w={1} />
      <Line a={[28, 26, 45]} b={[40, 26, 45]} o={o} d={300} w={1} />
      {/* sound arcs */}
      <path className="ink" pathLength={1} style={dl(360)} fill="none"
        d={`M ${f(pr([46, 26, 34], o)[0])} ${f(pr([46, 26, 34], o)[1])} q 6 8 0 16`} />
      <path className="ink" pathLength={1} style={dl(420)} fill="none"
        d={`M ${f(pr([52, 26, 32], o)[0])} ${f(pr([52, 26, 32], o)[1])} q 9 10 0 20`} />
      <path className="ink" pathLength={1} style={dl(360)} fill="none"
        d={`M ${f(pr([22, 26, 34], o)[0])} ${f(pr([22, 26, 34], o)[1])} q -6 8 0 16`} />
      <ellipse {...disc(34, 26, 52, 3, o)} className="fill-in" fill={EMBER} style={dl(480)} />
    </>
  )
}

const SCENES: Record<string, (p: { o: P }) => React.JSX.Element> = {
  marketing: Marketing,
  trade: Trade,
  cmo: Cmo,
  cleaners: Cleaners,
  mixers: Mixers,
  podcast: Podcast,
}

const ORIGINS: Record<string, P> = {
  marketing: [120, 92],
  trade: [112, 92],
  cmo: [120, 78],
  cleaners: [112, 96],
  mixers: [112, 108],
  podcast: [112, 100],
}

export function Illustration({
  name,
  className = '',
  animate = false,
}: {
  name: keyof typeof SCENES
  className?: string
  animate?: boolean
}) {
  const Scene = SCENES[name]
  const ref = useRef<SVGGElement>(null)
  const [vb, setVb] = useState('0 0 240 180')

  useEffect(() => {
    const b = ref.current?.getBBox()
    if (b && b.width > 0) setVb(`${f(b.x - 6)} ${f(b.y - 6)} ${f(b.width + 12)} ${f(b.height + 12)}`)
  }, [name])

  return (
    <svg viewBox={vb} fill="none" stroke={INK} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round"
      preserveAspectRatio="xMidYMid meet"
      className={`iso ${animate ? 'draw' : ''} ${className}`} aria-hidden="true">
      <g ref={ref}>
        <Scene o={ORIGINS[name]} />
      </g>
    </svg>
  )
}

/* The hero sheet: touches enter the strategy engine and leave as advocates. */
export function HeroDrawing({ className = '' }: { className?: string }) {
  const label = (x: number, y: number, text: string, d: number) => (
    <text x={x} y={y} fontSize="10" fill="#69615b" fontFamily="Archivo, sans-serif" textAnchor="middle" className="fill-in" style={dl(d)}>
      {text}
    </text>
  )
  return (
    <svg viewBox="0 0 420 300" fill="none" stroke={INK} strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round"
      className={`iso draw ${className}`} role="img" aria-label="Diagram: customer touches enter the Fangled strategy engine and leave as brand advocates">
      {/* sheet frame + title block */}
      <rect x="8" y="8" width="404" height="284" className="ink" pathLength={1} strokeWidth={1} />
      <line x1="8" y1="264" x2="412" y2="264" className="ink" pathLength={1} strokeWidth={1} style={dl(60)} />
      <line x1="292" y1="264" x2="292" y2="292" className="ink" pathLength={1} strokeWidth={1} style={dl(60)} />
      <text x="20" y="281" fontSize="9" fill="#69615b" fontFamily="Archivo, sans-serif" className="fill-in" style={dl(700)}>FANGLED GROUP / ADVOCATE ENGINE</text>
      <text x="304" y="276" fontSize="9" fill="#69615b" fontFamily="Archivo, sans-serif" className="fill-in" style={dl(700)}>SCALE 1:1</text>
      <text x="304" y="288" fontSize="9" fill="#69615b" fontFamily="Archivo, sans-serif" className="fill-in" style={dl(700)}>REV 2026</text>

      {/* touches in */}
      {label(52, 96, 'touches', 120)}
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={52} cy={118 + i * 32} r={6} className="ink" pathLength={1} style={dl(160 + i * 80)} />
      ))}
      <path className="ink" pathLength={1} strokeDasharray="4 4" strokeWidth={1} style={dl(420)} fill="none"
        d="M 62 150 H 100 M 62 118 C 84 118 88 150 100 150 M 62 182 C 84 182 88 150 100 150" />
      <polygon points="104,150 96,146 96,154" fill={INK} className="fill-in" style={dl(520)} />

      {/* three stations */}
      <Box x0={0} y0={0} x1={26} y1={26} z0={0} z1={12} o={[130, 143]} d={560} />
      <Box x0={0} y0={0} x1={26} y1={26} z0={0} z1={24} o={[200, 149]} d={640} />
      <Box x0={0} y0={0} x1={26} y1={26} z0={0} z1={36} o={[270, 155]} d={720} accent />
      <line x1={156} y1={150} x2={174} y2={150} className="ink" pathLength={1} strokeDasharray="3 3" strokeWidth={1} style={dl(800)} />
      <line x1={226} y1={150} x2={244} y2={150} className="ink" pathLength={1} strokeDasharray="3 3" strokeWidth={1} style={dl(820)} />
      <line x1={130} y1={169} x2={130} y2={196} className="ink" pathLength={1} strokeWidth={1} style={dl(860)} />
      <line x1={200} y1={175} x2={200} y2={196} className="ink" pathLength={1} strokeWidth={1} style={dl(880)} />
      <line x1={270} y1={181} x2={270} y2={196} className="ink" pathLength={1} strokeWidth={1} style={dl(900)} />
      {label(130, 208, 'research', 940)}
      {label(200, 208, 'position', 980)}
      {label(270, 208, 'activate', 1020)}

      {/* advocates out */}
      <path className="ink" pathLength={1} strokeDasharray="4 4" strokeWidth={1} style={dl(1060)} fill="none"
        d="M 296 150 H 326 M 326 150 C 336 150 340 118 344 118 M 326 150 C 336 150 340 182 344 182" />
      <polygon points="334,150 326,146 326,154" fill={INK} className="fill-in" style={dl(1120)} />
      {label(356, 96, 'advocates', 1100)}
      {[0, 1, 2].map((i) => (
        <path key={i} className="fill-in" fill={EMBER} style={dl(1160 + i * 90)}
          d={`M 356 ${110 + i * 32} l 4.4 8.9 9.8 1.4 -7.1 6.9 1.7 9.8 -8.8 -4.6 -8.8 4.6 1.7 -9.8 -7.1 -6.9 9.8 -1.4 z`} />
      ))}

      {/* dimension line */}
      <line x1="130" y1="238" x2="270" y2="238" className="ink" pathLength={1} strokeWidth={1} style={dl(1240)} />
      <line x1="130" y1="232" x2="130" y2="244" className="ink" pathLength={1} strokeWidth={1} style={dl(1240)} />
      <line x1="270" y1="232" x2="270" y2="244" className="ink" pathLength={1} strokeWidth={1} style={dl(1240)} />
    </svg>
  )
}

/* pH scale: the product thesis in one strip. */
export function PhScale({ className = '' }: { className?: string }) {
  const ticks = Array.from({ length: 15 }, (_, i) => i)
  return (
    <svg viewBox="0 0 480 96" fill="none" className={`iso draw ${className}`} role="img" aria-label="pH scale from 0 to 14 with the neutral zone at 7 marked safe">
      <rect x="8" y="28" width="464" height="26" stroke={INK} strokeWidth={1.5} className="draw ink" pathLength={1} />
      {ticks.map((i) => (
        <g key={i}>
          <line x1={8 + i * 31} y1="28" x2={8 + i * 31} y2={i === 0 || i === 14 ? 54 : 40} stroke={INK} strokeWidth={1} className="draw ink" pathLength={1} style={dl(120 + i * 40)} />
          <text x={8 + i * 31} y="70" fontSize="10" fill={i === 7 ? EMBER : '#69615b'} fontFamily="Archivo, sans-serif" textAnchor="middle" className="fill-in" style={dl(200 + i * 40)}>
            {i}
          </text>
        </g>
      ))}
      <rect x={8 + 6 * 31} y="28" width="31" height="26" fill={EMBER} className="fill-in" style={dl(820)} />
      <text x={8 + 2 * 31} y="18" fontSize="10" fill="#69615b" fontFamily="Archivo, sans-serif" textAnchor="middle" className="fill-in" style={dl(900)}>acid: hazardous</text>
      <text x={8 + 12 * 31} y="18" fontSize="10" fill="#69615b" fontFamily="Archivo, sans-serif" textAnchor="middle" className="fill-in" style={dl(900)}>alkaline: hazardous</text>
      <text x={8 + 7 * 31} y="90" fontSize="10" fill={EMBER} fontFamily="Archivo, sans-serif" fontWeight="600" textAnchor="middle" className="fill-in" style={dl(940)}>7: neutral, safe</text>
    </svg>
  )
}

/* Velocity vectors: the mixer thesis in one diagram. */
export function VectorDiagram({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 220" fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" className={`iso draw ${className}`} role="img" aria-label="Diagram of three equalised velocity vectors: radial, circular and vertical">
      <ellipse cx="160" cy="150" rx="110" ry="40" className="ink" pathLength={1} strokeDasharray="4 4" strokeWidth={1} />
      <line x1="160" y1="150" x2="160" y2="40" className="ink" pathLength={1} style={dl(200)} />
      <polygon points="160,32 154,46 166,46" fill={EMBER} className="fill-in" style={dl(420)} />
      <line x1="160" y1="150" x2="262" y2="150" className="ink" pathLength={1} style={dl(300)} />
      <polygon points="270,150 256,144 256,156" fill={EMBER} className="fill-in" style={dl(480)} />
      <path d="M 160 150 m -70 0 a 70 26 0 0 1 120 -14" className="ink" pathLength={1} style={dl(380)} />
      <polygon points="214,130 200,132 208,144" fill={EMBER} className="fill-in" style={dl(540)} />
      <text x="170" y="44" fontSize="11" fill={INK} fontFamily="Archivo, sans-serif" className="fill-in" style={dl(600)}>vertical</text>
      <text x="238" y="172" fontSize="11" fill={INK} fontFamily="Archivo, sans-serif" className="fill-in" style={dl(640)}>radial</text>
      <text x="150" y="112" fontSize="11" fill={INK} fontFamily="Archivo, sans-serif" className="fill-in" style={dl(680)}>circular</text>
      <text x="160" y="208" fontSize="11" fill="#69615b" fontFamily="Archivo, sans-serif" textAnchor="middle" className="fill-in" style={dl(720)}>three vectors, equalised: no vortex, no dead zone</text>
    </svg>
  )
}


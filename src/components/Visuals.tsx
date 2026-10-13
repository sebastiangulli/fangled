// Illustrative product-style visuals. Every value here is an example, not client data.
import type { CSSProperties, ReactNode } from 'react'
import { Check, Flag, Globe2, Lightbulb, Megaphone, Rocket, Search, TrendingUp, Users } from 'lucide-react'

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })

/* ---------- Hero: the go-to-market playbook as an app window ---------- */

const SIDEBAR = [
  { label: 'Research', icon: Search },
  { label: 'Segments', icon: Users },
  { label: 'Value prop', icon: Lightbulb },
  { label: 'Channels', icon: Megaphone },
  { label: 'Launch', icon: Rocket },
]
const STAGES = ['Touch', 'Aware', 'Buyer', 'Advocate']
const SEGMENTS = [
  { name: 'OEM manufacturers', fit: 86, color: 'bg-brand' },
  { name: 'Job-shop coaters', fit: 64, color: 'bg-sky' },
  { name: 'Distributors', fit: 42, color: 'bg-sand' },
]

export function PlaybookMockup() {
  return (
    <div
      role="img"
      aria-label="Example go-to-market playbook: path to purchase, segments ranked by fit, and a value proposition"
      className="relative mx-auto w-full max-w-[560px] lg:mr-0"
    >
      <div aria-hidden="true">
        <div className="animate-rise rounded-[1.4rem] bg-white/60 p-1.5 shadow-pop ring-1 ring-white/70 backdrop-blur" style={delay(100)}>
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
            <div className="flex h-10 items-center gap-1.5 border-b border-line px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 text-caption text-mute">Go-to-market playbook</span>
              <span className="ml-auto rounded-full bg-sky-soft px-2 py-0.5 text-[11px] font-medium text-brand">Example</span>
            </div>
            <div className="grid sm:grid-cols-[8.5rem_1fr]">
              <ul className="hidden border-r border-line bg-soft/70 p-2.5 sm:block">
                {SIDEBAR.map((s) => (
                  <li
                    key={s.label}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2 text-caption ${
                      s.label === 'Segments' ? 'bg-white font-medium text-ink shadow-card ring-1 ring-line' : 'text-mute'
                    }`}
                  >
                    <s.icon className="h-3.5 w-3.5" strokeWidth={2} />
                    {s.label}
                  </li>
                ))}
              </ul>
              <div className="p-5 sm:p-6">
                <p className="text-title text-ink">Industrial cleaners, North America</p>

                <p className="mt-6 text-caption font-medium text-mute">Path to purchase</p>
                <ol className="relative mt-3 grid grid-cols-4">
                  <span className="absolute top-[7px] right-[12.5%] left-[12.5%] h-0.5 origin-left animate-grow bg-gradient-to-r from-line via-sky to-brand" style={delay(500)} />
                  {STAGES.map((s, i) => {
                    const last = i === STAGES.length - 1
                    return (
                      <li key={s} className="relative flex flex-col items-center gap-2">
                        <span className={`h-4 w-4 rounded-full ring-4 ring-white ${last ? 'bg-brand' : i === 0 ? 'bg-line' : 'bg-sky'}`} />
                        <span className={`text-caption ${last ? 'font-semibold text-brand' : 'text-mute'}`}>{s}</span>
                      </li>
                    )
                  })}
                </ol>

                <p className="mt-6 text-caption font-medium text-mute">Segments by fit</p>
                <ul className="mt-3 space-y-3">
                  {SEGMENTS.map((seg, i) => (
                    <li key={seg.name} className="grid grid-cols-[7.5rem_1fr] items-center gap-3 text-caption text-ink-2">
                      {seg.name}
                      <span className="h-2 rounded-full bg-soft">
                        <span className={`block h-full origin-left animate-grow rounded-full ${seg.color}`} style={{ width: `${seg.fit}%`, ...delay(700 + i * 120) }} />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-xl bg-soft p-3.5">
                  <p className="text-caption font-medium text-mute">Value proposition</p>
                  <p className="mt-1 text-small text-ink">Replace hazardous acid and alkaline cleaners without adding a pre-treatment step.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating cards sit at different scroll depths for a layered parallax. */}
        <div className="parallax absolute top-full -left-10 -mt-8 hidden w-64 sm:block" style={{ '--depth': '-50px' } as CSSProperties}>
          <div className="animate-rise rounded-2xl bg-white p-4 shadow-pop ring-1 ring-line" style={delay(900)}>
            <p className="text-caption font-medium text-mute">Voice of customer</p>
            <p className="mt-1.5 text-small text-ink">“If the finish holds, we’d drop the hazmat paperwork tomorrow.”</p>
            <p className="mt-2 text-caption text-mute">Plant manager</p>
          </div>
        </div>

        <div className="parallax absolute -right-6 -bottom-7 hidden sm:block" style={{ '--depth': '-130px' } as CSSProperties}>
          <div className="flex animate-rise items-center gap-3 rounded-2xl bg-night py-3 pr-4 pl-3 text-white shadow-pop" style={delay(1100)}>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
              <Globe2 className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-caption text-white/60">Market viability</span>
              <span className="block text-small font-medium">Mexico: go</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Glass frame around a header visual. */
export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[520px] animate-rise rounded-[1.4rem] bg-white/60 p-1.5 shadow-pop ring-1 ring-white/70 backdrop-blur lg:mr-0 ${className}`} style={delay(150)}>
      <div className="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8">{children}</div>
    </div>
  )
}

/* ---------- Service tiles ---------- */

export function PipelineMini() {
  return (
    <svg viewBox="0 0 320 130" aria-hidden="true" className="h-auto w-full">
      <defs>
        <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#4fb0e3" stopOpacity="0.35" />
          <stop offset="1" stopColor="#4fb0e3" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[30, 65, 100].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#e3e9ee" strokeDasharray="3 4" />
      ))}
      <path d="M0 108 C40 104 70 100 110 96 S180 92 220 88 S290 84 320 82" fill="none" stroke="#8a7f77" strokeWidth="2" strokeDasharray="5 5" />
      <path d="M0 110 C40 104 70 92 110 78 S170 52 210 40 S280 18 320 12 V130 H0 Z" fill="url(#pipe)" />
      <path d="M0 110 C40 104 70 92 110 78 S170 52 210 40 S280 18 320 12" fill="none" stroke="#00507e" strokeWidth="2.5" />
      <circle cx="320" cy="12" r="5" fill="#00507e" stroke="#fff" strokeWidth="2" />
    </svg>
  )
}

export function GlobeMini({ className = 'h-auto w-full' }: { className?: string }) {
  const nodes = [
    { x: 92, y: 74, label: 'Ohio' },
    { x: 78, y: 116, label: 'Mexico' },
    { x: 148, y: 66, label: 'EU' },
    { x: 150, y: 120, label: 'Asia' },
  ]
  const routes = ['M92 74 Q70 92 78 116', 'M92 74 Q120 40 148 66', 'M92 74 Q130 110 150 120']
  return (
    <svg viewBox="0 0 220 190" aria-hidden="true" className={className}>
      <defs>
        <radialGradient id="globe" cx="0.35" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6f3fb" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="95" r="82" fill="url(#globe)" stroke="#d3e3ee" />
      {[28, 56].map((rx) => (
        <ellipse key={rx} cx="110" cy="95" rx={rx} ry="82" fill="none" stroke="#d3e3ee" />
      ))}
      {[-45, 0, 45].map((dy) => (
        <ellipse key={dy} cx="110" cy={95 + dy} rx={dy ? 70 : 82} ry="10" fill="none" stroke="#d3e3ee" />
      ))}
      {routes.map((d) => (
        <path key={d} d={d} fill="none" stroke="#00507e" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" className="animate-dash" />
      ))}
      {nodes.map((n, i) => (
        <g key={n.label}>
          <circle cx={n.x} cy={n.y} r={i ? 5 : 7} fill={i ? '#4fb0e3' : '#00507e'} stroke="#fff" strokeWidth="2.5" />
          <text x={n.x + 10} y={n.y + 4} fontSize="10" fill="#2c4558" fontFamily="Geist, sans-serif">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

export function OrgMini() {
  const box = 'rounded-lg bg-white px-3 py-2 text-center text-caption text-ink-2 shadow-card ring-1 ring-line'
  return (
    <div aria-hidden="true" className="flex flex-col items-center">
      <div className={box}>CEO</div>
      <div className="h-4 w-px bg-line" />
      <div className="h-px w-[68%] bg-line" />
      <div className="grid w-full grid-cols-3 gap-2">
        {['CFO', 'COO'].map((r) => (
          <div key={r} className="flex flex-col items-center">
            <div className="h-4 w-px bg-line" />
            <div className={`${box} w-full`}>{r}</div>
          </div>
        ))}
        <div className="flex flex-col items-center">
          <div className="h-4 w-px bg-brand" />
          <div className="w-full rounded-lg bg-brand px-3 py-2 text-center text-caption font-medium text-white shadow-float">CMO</div>
          <span className="mt-1.5 rounded-full bg-sky-soft px-2 py-0.5 text-[11px] font-medium text-brand">Fractional</span>
        </div>
      </div>
    </div>
  )
}

export function DiligenceMini({ dark = false }: { dark?: boolean }) {
  const rows = [
    { item: 'Customer concentration', flag: true },
    { item: 'Brand loyalty', flag: false },
    { item: 'Untapped export markets', flag: false },
  ]
  return (
    <ul aria-hidden="true" className="space-y-2">
      {rows.map((r) => (
        <li
          key={r.item}
          className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-caption ${
            dark ? 'bg-white/5 text-white/80 ring-1 ring-white/10' : 'bg-white text-ink-2 shadow-card ring-1 ring-line'
          }`}
        >
          {r.item}
          <span
            className={`flex shrink-0 items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${
              r.flag ? 'bg-sand/70 text-ink' : 'bg-sky-soft text-brand'
            }`}
          >
            {r.flag ? <Flag className="h-3 w-3" /> : <TrendingUp className="h-3 w-3" />}
            {r.flag ? 'Red flag' : 'Opportunity'}
          </span>
        </li>
      ))}
    </ul>
  )
}

/* ---------- Products ---------- */

export function PhScale() {
  return (
    <figure>
      <div role="img" aria-label="pH scale from 0 to 14. Our cleaners sit at 7, neutral." className="flex gap-0.5 sm:gap-1">
        {Array.from({ length: 15 }, (_, ph) => {
          const d = Math.abs(ph - 7) / 7
          const bg = ph === 7 ? undefined : ph < 7 ? `rgb(138 127 119 / ${0.12 + d * 0.78})` : `rgb(11 42 63 / ${0.08 + d * 0.8})`
          return (
            <div key={ph} className="flex flex-1 flex-col items-center gap-2">
              <span className={`h-12 w-full rounded-[5px] ${ph === 7 ? 'bg-brand shadow-float' : ''}`} style={{ background: bg }} />
              <span className={`text-caption ${ph === 7 ? 'font-semibold text-brand' : 'text-mute'}`}>{ph}</span>
            </div>
          )
        })}
      </div>
      <figcaption className="mt-3 flex justify-between text-caption text-mute">
        <span>Acidic</span>
        <span className="font-medium text-brand">Neutral</span>
        <span>Alkaline</span>
      </figcaption>
    </figure>
  )
}

const VECTORS = [
  { name: 'Vertical', color: '#00507e' },
  { name: 'Radial', color: '#4fb0e3' },
  { name: 'Circular', color: '#8a7f77' },
]

export function MixVectors() {
  const [v, r, c] = VECTORS.map((x) => x.color)
  const line = { fill: 'none', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <figure>
      <svg viewBox="0 0 320 214" role="img" aria-label="A drum with three equal flows: vertical, radial, and circular" className="mx-auto h-auto w-full max-w-[280px]">
        <rect x="90" y="16" width="140" height="190" rx="12" fill="#fff" stroke="#e3e9ee" strokeWidth="1.5" />
        <ellipse cx="160" cy="16" rx="70" ry="8" fill="#f5f8fa" stroke="#e3e9ee" strokeWidth="1.5" />
        <line x1="160" y1="2" x2="160" y2="170" stroke="#0b2a3f" strokeWidth="3" strokeLinecap="round" />
        <path d="M126 174 L160 165 L194 174 L160 183 Z" fill="#0b2a3f" />
        <g stroke={v} {...line}>
          <path d="M106 156 V44 M99 54 L106 42 L113 54" />
          <path d="M214 156 V44 M207 54 L214 42 L221 54" />
        </g>
        <g stroke={r} {...line}>
          <path d="M198 174 H224 M216 167 L226 174 L216 181" />
          <path d="M122 174 H96 M104 167 L94 174 L104 181" />
        </g>
        <g stroke={c} {...line}>
          <path d="M196 102 A40 11 0 1 1 186 92" />
          <path d="M178 88 L188 92 L182 100" />
        </g>
      </svg>
      <figcaption className="mt-4 flex justify-center gap-5 text-caption text-mute">
        {VECTORS.map((x) => (
          <span key={x.name} className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full" style={{ background: x.color }} />
            {x.name}
          </span>
        ))}
      </figcaption>
    </figure>
  )
}

export function ProductVisual({ slug }: { slug: string }) {
  return slug === 'ph-neutral-cleaners' ? <PhScale /> : <MixVectors />
}

/* ---------- Method slides ---------- */

const QUOTES = [
  { who: 'Customer', text: 'We need fewer steps on the line, not another chemical.' },
  { who: 'Distributor', text: 'Give my reps one sentence that sells it.' },
  { who: 'Dealer', text: 'Buyers ask about safety first, price second.' },
]
const PROOF = [
  { need: 'Fewer pre-treatment steps', proof: 'No etching needed for coatings to bond' },
  { need: 'Safer for the crew', proof: 'Non-hazmat, no special handling' },
  { need: 'Lower total cost', proof: 'No hazmat disposal or shipping' },
]
const LAUNCH = [
  { item: 'Sales enablement kit', status: 'Ready' },
  { item: 'Distributor launch program', status: 'Ready' },
  { item: 'Trade show plan', status: 'In progress' },
  { item: 'Digital campaign', status: 'Planned' },
]

export function MethodVisual({ step }: { step: number }) {
  if (step === 0)
    return (
      <div aria-hidden="true" className="grid w-full max-w-[860px] gap-3 md:grid-cols-3">
        {QUOTES.map((q) => (
          <figure key={q.who} className="rounded-2xl bg-white/[0.07] p-5 ring-1 ring-white/10">
            <blockquote className="text-body text-white">“{q.text}”</blockquote>
            <figcaption className="mt-3 text-caption text-white/55">{q.who} interview</figcaption>
          </figure>
        ))}
      </div>
    )
  if (step === 1)
    return (
      <div aria-hidden="true" className="w-full max-w-[720px] rounded-2xl bg-white p-6 shadow-pop">
        <div className="grid grid-cols-2 gap-4 border-b border-line pb-3 text-caption font-semibold text-mute">
          <span>What buyers need</span>
          <span>Why it’s you</span>
        </div>
        {PROOF.map((p) => (
          <div key={p.need} className="grid grid-cols-2 gap-4 border-b border-line py-4 text-body last:border-b-0">
            <span>{p.need}</span>
            <span className="flex gap-2 text-ink-2">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
              {p.proof}
            </span>
          </div>
        ))}
      </div>
    )
  return (
    <div aria-hidden="true" className="w-full max-w-[560px] space-y-2.5">
      {LAUNCH.map((a) => (
        <div key={a.item} className="flex items-center justify-between rounded-2xl bg-white/[0.07] px-5 py-4 text-body text-white ring-1 ring-white/10">
          {a.item}
          <span className={`rounded-full px-2.5 py-0.5 text-caption font-medium ${a.status === 'Ready' ? 'bg-brand text-white' : a.status === 'Planned' ? 'bg-white/10 text-white/60' : 'bg-sky/20 text-sky'}`}>
            {a.status}
          </span>
        </div>
      ))}
    </div>
  )
}

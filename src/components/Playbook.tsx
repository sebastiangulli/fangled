// The go-to-market playbook Fangled delivers, shown as a document open on a laptop.
// Every figure on these pages is an illustrative example, not client data.
import { useEffect, useId, useRef, useState, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react'
import { Check } from 'lucide-react'
import { reducedMotion, useFitScale } from '../lib/motion'
import markUrl from '../../fangled-group-logomark.svg'

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` })

/* ---------- Laptop: a fixed 1280×800 screen design, scaled to whatever width it gets ---------- */

export function Laptop({ label, children }: { label: string; children: ReactNode }) {
  const screen = useRef<HTMLDivElement>(null)
  const scale = useFitScale(screen, 1280)
  return (
    <figure role="img" aria-label={label} className="relative isolate mx-auto w-full max-w-[1040px]">
      {/* Lid: black bezel inside a thin aluminium edge, camera in the top bezel. */}
      <div className="relative mx-auto w-[86%] rounded-t-[clamp(12px,2.2vw,24px)] rounded-b-[clamp(3px,0.5vw,6px)] bg-[#0c0d0f] p-[1.25%] pb-[1.6%] shadow-[0_0_0_1px_#c9ccd0,0_0_0_2px_#eceef0]">
        <span className="absolute top-[0.45%] left-1/2 h-[clamp(3px,0.45vw,6px)] w-[clamp(3px,0.45vw,6px)] -translate-x-1/2 rounded-full bg-[#1d2a36] ring-1 ring-[#2c3a48]" />
        <div ref={screen} className="relative aspect-[16/10] overflow-hidden rounded-[clamp(3px,0.5vw,6px)] bg-[#e9edf0]">
          <div aria-hidden="true" className="absolute top-0 left-0 h-[800px] w-[1280px] origin-top-left" style={{ transform: `scale(${scale})` }}>
            {children}
          </div>
          {/* Glass: a faint diagonal reflection. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(118deg,rgb(255_255_255/0.14)_0%,rgb(255_255_255/0)_38%)]" />
        </div>
      </div>
      {/* Base: deck surface, thumb notch, and the front lip. */}
      <div aria-hidden="true" className="relative h-[clamp(10px,1.7vw,20px)]">
        <div className="absolute inset-x-0 top-0 h-[42%] rounded-t-[3px] bg-gradient-to-b from-[#f6f7f8] to-[#d7dadd] shadow-[inset_0_1px_0_#fff]" />
        <div className="absolute top-0 left-1/2 h-[42%] w-[13%] -translate-x-1/2 rounded-b-[10px] bg-gradient-to-b from-[#b8bbbf] to-[#d2d5d8]" />
        <div className="absolute inset-x-[0.5%] top-[42%] bottom-0 rounded-b-[50%_100%] bg-gradient-to-b from-[#c4c7cb] to-[#8b8f94]" />
      </div>
      <div aria-hidden="true" className="absolute inset-x-[5%] -bottom-[3%] -z-10 h-[6%] rounded-[50%] bg-ink/35 blur-2xl" />
    </figure>
  )
}

/* ---------- Chapters ---------- */

const CHAPTERS = [
  { n: '01', title: 'Research', headline: 'What the market told us', summary: 'What buyers, distributors, and dealers said, and what they value most.' },
  { n: '02', title: 'Segments', headline: 'Who to sell to first', summary: 'Ideal customer segments, ranked by fit and revenue potential.' },
  { n: '03', title: 'Value proposition', headline: 'Why they’ll choose you', summary: 'The reason to buy, in words your sales team can repeat.' },
  { n: '04', title: 'Launch plan', headline: 'How it goes to market', summary: 'Channels, owners, and timing to take it to market.' },
]

const bar = (w: number, color: string, ms: number) => (
  <div className="h-3 flex-1 rounded-full bg-[#eef1f4]">
    <div className={`h-full origin-left animate-grow rounded-full ${color}`} style={{ width: `${w}%`, ...delay(ms) }} />
  </div>
)

function ResearchPage() {
  const quotes = [
    { who: 'Plant manager', text: 'If the finish holds, we’d drop the hazmat paperwork tomorrow.' },
    { who: 'Distributor', text: 'Give my reps one sentence that sells it.' },
    { who: 'Dealer', text: 'Buyers ask about safety first, price second.' },
  ]
  const criteria = [
    { name: 'Safety for the crew', v: 92 },
    { name: 'Finish quality', v: 81 },
    { name: 'Total cost', v: 74 },
    { name: 'Ease of switching', v: 58 },
  ]
  return (
    <div className="grid h-full grid-cols-[1.1fr_1fr] gap-10">
      <div className="space-y-4">
        {quotes.map((q, i) => (
          <figure key={q.who} className="animate-fade rounded-xl bg-[#f5f7f9] p-5" style={delay(i * 90)}>
            <blockquote className="text-[20px] leading-snug text-ink">“{q.text}”</blockquote>
            <figcaption className="mt-1.5 text-[15px] text-mute">{q.who} interview</figcaption>
          </figure>
        ))}
      </div>
      <div>
        <p className="text-[16px] font-semibold text-ink">Top buying criteria</p>
        <p className="text-[15px] text-mute">Share of interviews that raised it</p>
        <ul className="mt-7 space-y-6">
          {criteria.map((c, i) => (
            <li key={c.name}>
              <div className="flex justify-between text-[16px] text-ink-2">
                {c.name}
                <span className="text-mute">{c.v}%</span>
              </div>
              <div className="mt-1.5 flex">{bar(c.v, i ? 'bg-sky' : 'bg-brand', 200 + i * 110)}</div>
            </li>
          ))}
        </ul>
        <div className="mt-9 flex gap-2.5">
          {['24 interviews', '3 audiences', '6 weeks'].map((t) => (
            <span key={t} className="rounded-full bg-sky-soft px-4 py-1.5 text-[15px] font-medium text-brand">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SegmentsPage() {
  const rows = [
    { name: 'OEM manufacturers', fit: 86, potential: 'High', wave: 'Start here' },
    { name: 'Job-shop coaters', fit: 71, potential: 'Medium', wave: 'Wave 2' },
    { name: 'Metal fabricators', fit: 58, potential: 'Medium', wave: 'Wave 2' },
    { name: 'Distributors', fit: 44, potential: 'Channel', wave: 'Partner' },
  ]
  return (
    <table className="w-full border-collapse text-left text-[18px]">
      <thead>
        <tr className="border-b border-line text-[15px] text-mute">
          <th className="pb-3 font-medium">Segment</th>
          <th className="w-[38%] pb-3 font-medium">Fit score</th>
          <th className="pb-3 font-medium">Potential</th>
          <th className="pb-3 font-medium">Priority</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={r.name} className="animate-fade border-b border-line last:border-b-0" style={delay(i * 80)}>
            <td className="py-[26px] font-medium text-ink">{r.name}</td>
            <td className="py-[26px] pr-8">
              <div className="flex items-center gap-3">
                {bar(r.fit, i ? 'bg-sky' : 'bg-brand', 200 + i * 110)}
                <span className="w-7 text-right text-[16px] text-mute">{r.fit}</span>
              </div>
            </td>
            <td className="py-[26px] text-ink-2">{r.potential}</td>
            <td className="py-[26px]">
              <span className={`rounded-full px-2.5 py-1 text-[15px] font-medium ${i === 0 ? 'bg-brand text-white' : 'bg-[#eef1f4] text-ink-2'}`}>{r.wave}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ValuePage() {
  const proof = [
    { need: 'Fewer pre-treatment steps', proof: 'No etching needed for coatings to bond' },
    { need: 'Safer for the crew', proof: 'Non-hazmat, no special handling' },
    { need: 'Lower total cost', proof: 'No hazmat disposal or shipping' },
  ]
  return (
    <div className="grid h-full grid-cols-[1fr_1.15fr] gap-8">
      <div className="flex animate-fade flex-col justify-between rounded-2xl bg-brand p-9 text-white">
        <p className="text-[34px] leading-tight font-medium tracking-[-0.02em]">
          Replace hazardous acid and alkaline cleaners without adding a pre-treatment step.
        </p>
        <div>
          <p className="text-[15px] text-white/60">Say it in one line</p>
          <p className="mt-1 text-[22px] font-medium">Same finish. No hazmat.</p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4 border-b border-line pb-3 text-[15px] font-medium text-mute">
          <span>What buyers need</span>
          <span>Why it’s you</span>
        </div>
        {proof.map((p, i) => (
          <div key={p.need} className="grid animate-fade grid-cols-2 gap-4 border-b border-line py-7 text-[18px] last:border-b-0" style={delay(150 + i * 90)}>
            <span className="text-ink">{p.need}</span>
            <span className="flex gap-2 text-ink-2">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" strokeWidth={2.5} />
              {p.proof}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function LaunchPage() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
  const tasks = [
    { task: 'Voice of customer', from: 0, span: 2, color: 'bg-brand' },
    { task: 'Positioning', from: 1, span: 2, color: 'bg-brand' },
    { task: 'Sales enablement kit', from: 2, span: 3, color: 'bg-sky' },
    { task: 'Distributor program', from: 3, span: 4, color: 'bg-sky' },
    { task: 'Trade show', from: 4, span: 1, color: 'bg-taupe' },
    { task: 'Digital campaign', from: 4, span: 4, color: 'bg-taupe' },
  ]
  return (
    <div>
      <div className="flex text-[15px] text-mute">
        <span className="w-[260px] shrink-0" />
        <div className="grid flex-1 grid-cols-8 text-center">
          {months.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>
      <ul className="mt-4 space-y-4">
        {tasks.map((t, i) => (
          <li key={t.task} className="flex items-center text-[18px] text-ink-2">
            <span className="w-[260px] shrink-0">{t.task}</span>
            <div className="grid flex-1 grid-cols-8 gap-1 rounded-lg bg-[#f5f7f9] p-1">
              <span className={`h-8 origin-left animate-grow rounded-md ${t.color}`} style={{ gridColumn: `${t.from + 1} / span ${t.span}`, ...delay(150 + i * 100) }} />
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-9 flex gap-7 text-[15px] text-mute">
        {[
          { c: 'bg-brand', l: 'Strategy' },
          { c: 'bg-sky', l: 'Sales' },
          { c: 'bg-taupe', l: 'Marketing' },
        ].map((k) => (
          <span key={k.l} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-sm ${k.c}`} />
            {k.l}
          </span>
        ))}
      </div>
    </div>
  )
}

const PAGES = [ResearchPage, SegmentsPage, ValuePage, LaunchPage]

/** Thumbnail of a page: abstract lines, so the rail reads as a document, not an app. */
function Thumb({ i, active }: { i: number; active: boolean }) {
  return (
    <div className={`rounded-md bg-white p-2.5 shadow-[0_1px_3px_rgb(11_42_63/0.12)] transition-shadow ${active ? 'ring-2 ring-brand' : 'ring-1 ring-black/5'}`}>
      <div className="aspect-[16/10]">
        <div className="h-1.5 w-1/3 rounded-full bg-brand/70" />
        <div className="mt-2 h-2.5 w-3/4 rounded-full bg-ink/80" />
        <div className="mt-3 space-y-1.5">
          {[90, 70, 80, 55].map((w, k) => (
            <div key={k} className={`h-1.5 rounded-full ${k === i ? 'bg-sky' : 'bg-[#e3e8ec]'}`} style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

/** The playbook document on screen, open at one chapter. */
function PlaybookDocument({ chapter }: { chapter: number }) {
  const c = CHAPTERS[chapter]
  const Page = PAGES[chapter]
  return (
    <div className="flex h-full w-full flex-col text-ink">
      <div className="flex h-11 shrink-0 items-center gap-2 border-b border-[#d9dfe4] bg-[#f7f8fa] px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="mx-auto text-[16px] font-medium text-ink-2">Go-to-market playbook: Industrial cleaners, North America</span>
        <span className="text-[15px] text-mute">Page {chapter + 1} of {CHAPTERS.length}</span>
      </div>
      <div className="flex min-h-0 flex-1">
        <aside className="w-[188px] shrink-0 space-y-4 border-r border-[#d9dfe4] bg-[#f1f4f6] p-5">
          {CHAPTERS.map((ch, i) => (
            <div key={ch.n}>
              <Thumb i={i} active={i === chapter} />
              <p className={`mt-1.5 text-center text-[13px] ${i === chapter ? 'font-semibold text-brand' : 'text-mute'}`}>
                {ch.n} {ch.title}
              </p>
            </div>
          ))}
        </aside>
        <div className="flex min-w-0 flex-1 items-center justify-center p-7">
          <article className="flex h-full w-full max-w-[1020px] flex-col rounded-[6px] bg-white px-14 pt-10 pb-7 shadow-[0_2px_6px_rgb(11_42_63/0.08),0_18px_40px_-12px_rgb(11_42_63/0.25)]">
            <header className="flex items-center justify-between text-[15px] text-mute">
              <span className="flex items-center gap-2 font-semibold text-brand">
                <img src={markUrl} alt="" className="h-4.5 w-auto" />
                Fangled Group
              </span>
              <span>
                Go-to-market playbook <span className="text-line">/</span> {c.n} {c.title}
              </span>
            </header>
            <div key={chapter} className="mt-7 flex min-h-0 flex-1 flex-col">
              <h3 className="animate-fade text-[46px] leading-tight font-medium tracking-[-0.03em]">{c.headline}</h3>
              <div className="mt-9 min-h-0 flex-1">
                <Page />
              </div>
            </div>
            <footer className="flex justify-between border-t border-line pt-3 text-[13px] text-mute">
              <span>Example playbook, illustrative figures</span>
              <span>{chapter + 1}</span>
            </footer>
          </article>
        </div>
      </div>
    </div>
  )
}

/** Laptop with the playbook, plus chapter tabs that advance on their own while on screen. */
export function PlaybookShowcase() {
  const [active, setActive] = useState(0)
  const [auto, setAuto] = useState(() => !reducedMotion())
  const [visible, setVisible] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Choosing a chapter yourself stops the auto-advance.
  const pick = (i: number) => {
    setActive(i)
    setAuto(false)
  }
  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const next = (active + d + CHAPTERS.length) % CHAPTERS.length
    pick(next)
    document.getElementById(`${id}-tab-${next}`)?.focus()
  }

  return (
    <div ref={root}>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="scroll-zoom">
        <Laptop label={`Example go-to-market playbook, open at chapter ${CHAPTERS[active].n}: ${CHAPTERS[active].headline}`}>
          <PlaybookDocument chapter={active} />
        </Laptop>
      </div>

      <div role="tablist" aria-label="Playbook chapters" onKeyDown={onKey} className="mx-auto mt-14 grid max-w-[980px] grid-cols-2 gap-2 lg:grid-cols-4">
        {CHAPTERS.map((c, i) => {
          const on = i === active
          return (
            <button
              key={c.n}
              id={`${id}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={on}
              aria-controls={`${id}-panel`}
              tabIndex={on ? 0 : -1}
              onClick={() => pick(i)}
              className={`relative flex flex-col items-start justify-start overflow-hidden rounded-2xl p-4 text-left transition-[background-color,box-shadow] duration-300 sm:p-5 ${
                on ? 'bg-white shadow-float ring-1 ring-line' : 'hover:bg-white/70'
              }`}
            >
              <span className={`text-caption font-semibold ${on ? 'text-brand' : 'text-mute'}`}>{c.n}</span>
              <span className={`mt-1 block text-title ${on ? 'text-ink' : 'text-ink-2'}`}>{c.title}</span>
              <span className="mt-1 hidden text-small text-mute sm:block">{c.summary}</span>
              {on && auto && (
                <span
                  key={active}
                  aria-hidden="true"
                  onAnimationEnd={() => setActive((a) => (a + 1) % CHAPTERS.length)}
                  className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand"
                  style={{ animation: 'progress 6s linear both', animationPlayState: visible ? 'running' : 'paused' }}
                />
              )}
            </button>
          )
        })}
      </div>
      <p className="mt-4 text-center text-small text-mute sm:hidden">{CHAPTERS[active].summary}</p>
    </div>
  )
}

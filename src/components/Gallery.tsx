import { useEffect, useId, useRef, useState, type CSSProperties, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play, Plus, X } from 'lucide-react'
import { reducedMotion } from '../lib/motion'

// Rail gutter: the first card lines up with the page column, the rest run off-screen.
const rail = {
  paddingInline: 'max(var(--g), calc((100% - 1200px) / 2 + var(--g)))',
  scrollPaddingInline: 'max(var(--g), calc((100% - 1200px) / 2 + var(--g)))',
} as CSSProperties

const paddle =
  'flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-card ring-1 ring-line transition-[box-shadow,opacity] duration-300 hover:shadow-float disabled:cursor-default disabled:opacity-35 disabled:hover:shadow-card'

/** Horizontal card rail with snap scrolling and previous/next paddles. */
export function Gallery({ label, children }: { label: string; children: ReactNode[] }) {
  const ref = useRef<HTMLUListElement>(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const update = () => {
    const el = ref.current
    if (!el) return
    setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth > el.scrollWidth - 8 })
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const page = (dir: number) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.75, behavior: reducedMotion() ? 'auto' : 'smooth' })

  return (
    <div data-reveal className="[--g:1.25rem] md:[--g:2rem]">
      {/* relative: keeps absolutely positioned descendants (sr-only text) inside the scroller. */}
      <ul ref={ref} onScroll={update} aria-label={label} className="no-scrollbar relative flex snap-x snap-mandatory gap-5 overflow-x-auto pt-2 pb-10" style={rail}>
        {children.map((child, i) => (
          <li key={i} className="shrink-0 snap-start">
            {child}
          </li>
        ))}
      </ul>
      <div className="wrap flex justify-end gap-3">
        <button type="button" className={paddle} onClick={() => page(-1)} disabled={edge.start} aria-label="Previous">
          <ChevronLeft aria-hidden="true" className="h-5 w-5" />
        </button>
        <button type="button" className={paddle} onClick={() => page(1)} disabled={edge.end} aria-label="Next">
          <ChevronRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

/** Rail card with a "+" that opens a detail sheet (native dialog: focus trap, Esc, backdrop click). */
export function PlusCard({
  eyebrow,
  title,
  preview,
  dark = false,
  children,
}: {
  eyebrow: string
  title: string
  preview?: ReactNode
  dark?: boolean
  children: ReactNode
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const id = useId()
  return (
    <>
      <button
        type="button"
        onClick={() => dialog.current?.showModal()}
        aria-haspopup="dialog"
        className={`group relative flex h-[26rem] w-[18rem] flex-col overflow-hidden rounded-3xl p-7 text-left ring-1 transition-[box-shadow,translate] duration-500 ease-out hover:-translate-y-1 hover:shadow-float sm:w-[21rem] ${
          dark ? 'bg-night text-white ring-white/10' : 'bg-white text-ink ring-line'
        }`}
      >
        <span className={`text-small font-medium ${dark ? 'text-sky' : 'text-brand'}`}>{eyebrow}</span>
        <span className="mt-2 block max-w-[16ch] text-display-md">{title}</span>
        {preview && <span className={`mt-auto block pb-12 text-small ${dark ? 'text-white/65' : 'text-mute'}`}>{preview}</span>}
        <span
          aria-hidden="true"
          className={`absolute right-5 bottom-5 flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:rotate-90 ${
            dark ? 'bg-white text-ink' : 'bg-ink text-white'
          }`}
        >
          <Plus className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <span className="sr-only">: more details</span>
      </button>
      <dialog ref={dialog} aria-labelledby={id} onClick={(e) => e.target === dialog.current && dialog.current.close()}>
        <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl bg-white p-8 pt-16 text-ink shadow-pop sm:p-12">
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close"
            className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-105"
          >
            <X aria-hidden="true" className="h-4 w-4" strokeWidth={2.5} />
          </button>
          <p className="text-small font-medium text-brand">{eyebrow}</p>
          <h3 id={id} className="mt-2 max-w-[22ch] text-display-lg">{title}</h3>
          <div className="mt-8">{children}</div>
        </div>
      </dialog>
    </>
  )
}

/** "Get the highlights": peeking slides with progress dots that advance on their own, plus a pause control. */
export function Highlights({ label, slides }: { label: string; slides: { caption: ReactNode; visual: ReactNode; dark?: boolean }[] }) {
  const [active, setActive] = useState(0)
  const [motionOk] = useState(() => !reducedMotion())
  const [playing, setPlaying] = useState(motionOk)
  const [visible, setVisible] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  // Only run the timer while the carousel is on screen.
  useEffect(() => {
    const el = root.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const next = () => setActive((a) => (a + 1) % slides.length)
  const running = playing && visible

  return (
    <div ref={root} data-reveal role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="overflow-hidden">
        <ul className="flex gap-4 transition-transform duration-700 ease-out" style={{ transform: `translateX(calc(${-active} * (88% + 1rem)))` }}>
          {slides.map((s, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== active}
              inert={i !== active}
              className={`relative flex min-h-[32rem] shrink-0 basis-[88%] flex-col overflow-hidden rounded-3xl p-7 transition-opacity duration-700 sm:p-10 md:min-h-0 md:aspect-[16/8] ${
                s.dark ? 'bg-night text-white' : 'bg-white text-ink ring-1 ring-line'
              } ${i === active ? 'opacity-100' : 'opacity-50'}`}
            >
              {s.dark && <div aria-hidden="true" className="absolute inset-0 grid-lines text-white/[0.05]" />}
              <p className={`relative max-w-[36ch] text-lead font-medium ${s.dark ? '[&_span]:text-white/60' : '[&_span]:text-mute'}`}>{s.caption}</p>
              <div className="relative mt-8 flex flex-1 items-center justify-center">{s.visual}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <div className="flex h-12 items-center gap-3 rounded-full bg-white px-5 shadow-card ring-1 ring-line">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              aria-current={i === active}
              onClick={() => setActive(i)}
              className={`relative h-2 overflow-hidden rounded-full transition-[width,background-color] duration-500 ${i === active ? 'w-12 bg-line' : 'w-2 bg-mute/50 hover:bg-mute'}`}
            >
              {i === active && (
                <span
                  key={active}
                  onAnimationEnd={next}
                  className="absolute inset-0 origin-left rounded-full bg-brand"
                  style={motionOk ? { animation: 'progress 6s linear both', animationPlayState: running ? 'running' : 'paused' } : undefined}
                />
              )}
            </button>
          ))}
        </div>
        {motionOk && (
          <button
            type="button"
            onClick={() => setPlaying(!playing)}
            aria-label={playing ? 'Pause' : 'Play'}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink shadow-card ring-1 ring-line transition-shadow hover:shadow-float"
          >
            {playing ? <Pause aria-hidden="true" className="h-4 w-4 fill-current" /> : <Play aria-hidden="true" className="h-4 w-4 fill-current" />}
          </button>
        )}
      </div>
    </div>
  )
}

import { Fragment, useEffect, useRef, useState, type ComponentType, type CSSProperties, type ReactNode } from 'react'
import { ArrowUpRight, Check, Mic, Play, Plus } from 'lucide-react'
import { COMPANY, FAQ, METHOD, YOUTUBE } from '../data/site'
import { Button } from './Button'
import { reducedMotion, stagger } from '../lib/motion'

/* ---------- Page chrome ---------- */

export function Mesh({ className = 'inset-0' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`slant pointer-events-none absolute overflow-hidden ${className}`}>
      <div className="parallax absolute inset-0" style={{ '--depth': '90px' } as CSSProperties}>
        <div className="mesh absolute -inset-[10%] animate-drift" />
      </div>
      <div className="grid-lines absolute inset-0 text-ink/[0.045]" />
    </div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-white/70 py-1 pr-3 pl-2 text-caption font-medium text-brand ring-1 ring-line backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-sky" />
      {children}
    </p>
  )
}

/** Headline that rises word by word, each word masked by its own line box. */
function RisingTitle({ text, className }: { text: string; className: string }) {
  return (
    <h1 aria-label={text} className={className}>
      <span aria-hidden="true">
        {text.split(' ').map((word, i) => (
          <Fragment key={i}>
            {i > 0 && ' '}
            <span className="-mb-[0.14em] inline-block overflow-hidden pb-[0.14em] align-bottom">
              <span className="inline-block animate-word" style={{ animationDelay: `${80 + i * 55}ms` }}>
                {word}
              </span>
            </span>
          </Fragment>
        ))}
      </span>
    </h1>
  )
}

export function PageHeader({
  eyebrow,
  title,
  intro,
  actions,
  meta,
  aside,
  size = 'xl',
  docTitle,
}: {
  eyebrow?: ReactNode
  title: string
  intro?: string
  actions?: ReactNode
  meta?: ReactNode
  aside?: ReactNode
  size?: 'xl' | '2xl'
  docTitle?: string
}) {
  useEffect(() => {
    document.title = docTitle ?? `${title.replace(/\.$/, '')} | Fangled Group`
  }, [title, docTitle])

  const words = title.split(' ').length
  const after = (n: number): CSSProperties => ({ animationDelay: `${150 + words * 55 + n * 90}ms` })

  return (
    <section className="relative overflow-hidden">
      <Mesh />
      <div
        className={`wrap relative grid items-center gap-x-14 gap-y-16 pt-32 pb-28 md:pt-40 lg:pb-40 ${aside ? 'lg:grid-cols-[1.08fr_1fr]' : ''}`}
      >
        <div>
          {eyebrow && <div className="mb-6 animate-rise">{eyebrow}</div>}
          <RisingTitle text={title} className={`max-w-[15ch] text-ink ${size === '2xl' ? 'text-display-2xl' : 'text-display-xl'}`} />
          {intro && <p className="mt-6 max-w-[50ch] animate-rise text-lead text-ink-2" style={after(0)}>{intro}</p>}
          {actions && <div className="mt-9 flex animate-rise flex-wrap gap-3" style={after(1)}>{actions}</div>}
          {meta && <div className="mt-10 animate-rise" style={after(2)}>{meta}</div>}
        </div>
        {aside && (
          <div className="parallax" style={{ '--depth': '-70px' } as CSSProperties}>
            {aside}
          </div>
        )}
      </div>
    </section>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  action,
  center = false,
  dark = false,
}: {
  eyebrow?: string
  title: string
  intro?: ReactNode
  action?: ReactNode
  center?: boolean
  dark?: boolean
}) {
  return (
    <div data-reveal className={center ? 'mx-auto max-w-[44rem] text-center' : 'flex flex-col gap-6 md:flex-row md:items-end md:justify-between'}>
      <div className={center ? '' : 'max-w-[42rem]'}>
        {eyebrow && <p className={`mb-3 text-small font-medium ${dark ? 'text-sky' : 'text-brand'}`}>{eyebrow}</p>}
        <h2 className={`text-display-lg ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
        {intro && <p className={`mt-4 text-lead ${dark ? 'text-white/65' : 'text-mute'}`}>{intro}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function CheckList({ items, className = '', dark = false }: { items: readonly string[]; className?: string; dark?: boolean }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`flex gap-3 text-body ${dark ? 'text-white/80' : 'text-ink-2'}`}>
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-sky/15 text-sky' : 'bg-sky-soft text-brand'}`}>
            <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}

/* ---------- Capabilities ticker ---------- */

export function Marquee({ items }: { items: readonly string[] }) {
  const row = (copy: boolean) => (
    <ul aria-hidden={copy || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-10 pr-10 text-small font-medium whitespace-nowrap text-ink-2">
          {item}
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-sky" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="fade-x overflow-hidden py-6">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  )
}

/* ---------- Statement that lights up as it scrolls through the viewport ---------- */

export function ScrollStatement({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [progress, setProgress] = useState(() => (reducedMotion() ? 1 : 0))

  useEffect(() => {
    if (reducedMotion()) return
    let raf = 0
    const update = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = ref.current?.getBoundingClientRect()
        if (!r) return
        const vh = window.innerHeight
        setProgress(Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.3))))
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const words = text.split(' ')
  const lit = Math.round(progress * words.length)
  return (
    <p ref={ref} aria-label={text} className="max-w-[24ch] text-display-xl">
      <span aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className={`transition-colors duration-500 ${i < lit ? 'text-ink' : 'text-ink/15'}`}>
            {w}{' '}
          </span>
        ))}
      </span>
    </p>
  )
}

/* ---------- The Strategy First Method: sticky scrollytelling, one working sample per step ---------- */

const QUOTES = [
  { who: 'Customer', initials: 'CU', text: 'We need fewer steps on the line, not another chemical.' },
  { who: 'Distributor', initials: 'DI', text: 'Give my reps one sentence that sells it.' },
  { who: 'Dealer', initials: 'DE', text: 'Buyers ask about safety first, price second.' },
]

const PROOF = [
  { need: 'Fewer pre-treatment steps', proof: 'No etching needed for coatings to bond' },
  { need: 'Safer for the crew', proof: 'Non-hazmat, no special handling' },
  { need: 'Lower total cost', proof: 'No hazmat disposal or shipping' },
]

const ACTIONS = [
  { item: 'Sales enablement kit', status: 'Ready' },
  { item: 'Distributor launch program', status: 'Ready' },
  { item: 'Trade show plan', status: 'In progress' },
  { item: 'Digital campaign', status: 'In progress' },
  { item: 'CRM nurture sequences', status: 'Planned' },
]

const STATUS: Record<string, string> = {
  Ready: 'bg-brand text-white',
  'In progress': 'bg-sky-soft text-brand',
  Planned: 'bg-soft text-mute ring-1 ring-line',
}

function MethodPanel({ step }: { step: number }) {
  if (step === 0)
    return (
      <div className="space-y-3">
        {QUOTES.map((q, i) => (
          <figure key={q.who} className="flex animate-fade gap-3.5 rounded-2xl bg-white p-4 shadow-card ring-1 ring-line" style={{ animationDelay: `${i * 70}ms` }}>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sand/60 text-caption font-semibold text-ink-2">{q.initials}</span>
            <div>
              <blockquote className="text-small text-ink">“{q.text}”</blockquote>
              <figcaption className="mt-1 text-caption text-mute">{q.who} interview</figcaption>
            </div>
          </figure>
        ))}
      </div>
    )
  if (step === 1)
    return (
      <div className="animate-fade rounded-2xl bg-white p-5 shadow-card ring-1 ring-line">
        <div className="grid grid-cols-2 gap-3 border-b border-line pb-3 text-caption font-medium text-mute">
          <span>What buyers need</span>
          <span>Why it’s you</span>
        </div>
        <ul>
          {PROOF.map((p, i) => (
            <li key={p.need} className="grid animate-fade grid-cols-2 gap-3 border-b border-line py-3.5 text-small last:border-b-0" style={{ animationDelay: `${i * 70}ms` }}>
              <span className="text-ink">{p.need}</span>
              <span className="flex gap-2 text-ink-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                {p.proof}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  return (
    <div className="animate-fade rounded-2xl bg-white p-5 shadow-card ring-1 ring-line">
      <p className="text-caption font-medium text-mute">Launch playbook</p>
      <ul className="mt-2">
        {ACTIONS.map((a, i) => (
          <li key={a.item} className="flex animate-fade items-center justify-between gap-3 border-b border-line py-3 text-small text-ink last:border-b-0" style={{ animationDelay: `${i * 60}ms` }}>
            {a.item}
            <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-caption font-medium ${STATUS[a.status]}`}>{a.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const panelFrame = 'rounded-3xl bg-gradient-to-br from-sky-soft via-white to-sand/40 p-5 ring-1 ring-line sm:p-8'

export function MethodScroll() {
  const [active, setActive] = useState(0)
  const steps = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step))
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    steps.current.forEach((el) => el && io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <ol className="relative lg:pl-10">
        <span aria-hidden="true" className="absolute top-[18vh] bottom-[18vh] left-0 hidden w-px bg-line lg:block">
          <span
            className="block w-full origin-top bg-brand transition-transform duration-700 ease-out"
            style={{ height: '100%', transform: `scaleY(${(active + 1) / METHOD.length})` }}
          />
        </span>
        {METHOD.map((step, i) => (
          <li
            key={step.title}
            ref={(el) => {
              steps.current[i] = el
            }}
            data-step={i}
            className={`flex flex-col justify-center py-6 transition-opacity duration-500 lg:min-h-[55vh] lg:py-0 ${active === i ? 'opacity-100' : 'lg:opacity-30'}`}
          >
            <span className="text-display-md text-sky">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-display-lg text-ink">{step.title}</h3>
            <p className="mt-4 max-w-[42ch] text-lead text-mute">{step.body}</p>
            <div className={`mt-8 lg:hidden ${panelFrame}`}>
              <MethodPanel step={i} />
            </div>
          </li>
        ))}
      </ol>
      <div className="hidden lg:block">
        <div className="sticky top-[max(7rem,calc(50vh-15rem))]">
          <div className="mb-4 flex gap-1.5" aria-hidden="true">
            {METHOD.map((_, i) => (
              <span key={i} className={`h-1 flex-1 rounded-full transition-colors duration-500 ${i <= active ? 'bg-brand' : 'bg-line'}`} />
            ))}
          </div>
          <div className={`flex min-h-[26rem] flex-col justify-center ${panelFrame}`} aria-live="polite">
            <div key={active}>
              <MethodPanel step={active} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- Podcasts ---------- */

const COVERS = [
  'linear-gradient(135deg, #00507e, #4fb0e3)',
  'linear-gradient(135deg, #061a29, #00507e)',
  'linear-gradient(135deg, #8a7f77, #dcd0c4)',
]

function Cover({ i, duration, large = false }: { i: number; duration: string; large?: boolean }) {
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-2xl text-white ${large ? 'aspect-[16/10] p-7 lg:aspect-auto lg:h-full' : 'aspect-[16/10] p-5'}`}
      style={{ background: COVERS[i % COVERS.length] }}
    >
      <div aria-hidden="true" className="absolute inset-x-6 top-1/2 flex h-14 -translate-y-1/2 items-center gap-[3px] opacity-35">
        {Array.from({ length: large ? 64 : 40 }, (_, b) => (
          <span key={b} className="flex-1 rounded-full bg-white" style={{ height: `${25 + Math.abs(Math.sin((b + i * 7) * 0.9) * 75)}%` }} />
        ))}
      </div>
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur transition-transform duration-300 group-hover:scale-110">
        {large ? <Play aria-hidden="true" className="h-5 w-5 fill-current" /> : <Mic aria-hidden="true" className="h-5 w-5" />}
      </span>
      <span className="relative ml-auto rounded-full bg-black/25 px-2.5 py-1 text-caption font-medium backdrop-blur">{duration}</span>
    </div>
  )
}

export function FeaturedEpisode({ episode }: { episode: { title: string; duration: string } }) {
  return (
    <a
      href={YOUTUBE}
      target="_blank"
      rel="noreferrer"
      className="group grid overflow-hidden rounded-3xl bg-white p-3 shadow-card ring-1 ring-line transition-shadow duration-300 hover:shadow-float lg:grid-cols-[1.3fr_1fr]"
    >
      <Cover i={0} duration={episode.duration} large />
      <div className="flex flex-col justify-center p-6 lg:p-10">
        <p className="text-small font-medium text-brand">Featured episode</p>
        <h2 className="mt-3 text-display-md text-ink transition-colors group-hover:text-brand">{episode.title}</h2>
        <p className="mt-4 text-body text-mute">A round table on customer diligence: what buyers look for in your customer base before a deal.</p>
        <span className="mt-8 inline-flex items-center gap-1.5 text-small font-medium text-brand">
          Watch on YouTube
          <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only">(opens in a new tab)</span>
        </span>
      </div>
    </a>
  )
}

export function EpisodeCard({ title, duration, i, className = '' }: { title: string; duration: string; i: number; className?: string }) {
  return (
    <a href={YOUTUBE} target="_blank" rel="noreferrer" className={`group block ${className}`}>
      <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
        <Cover i={i} duration={duration} />
      </div>
      <h3 className="mt-4 text-title text-ink transition-colors group-hover:text-brand">{title}</h3>
      <span className="mt-2 inline-flex items-center gap-1 text-small text-mute">
        Watch on YouTube
        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        <span className="sr-only">(opens in a new tab)</span>
      </span>
    </a>
  )
}

export function EpisodeGrid({ episodes, offset = 0 }: { episodes: readonly { title: string; duration: string }[]; offset?: number }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((ep, i) => (
        <li key={ep.title} data-reveal style={stagger(i % 3)}>
          <EpisodeCard {...ep} i={i + offset} />
        </li>
      ))}
    </ul>
  )
}

/* ---------- Full-bleed photo with copy over a night scrim ---------- */

export function PhotoTile({
  id,
  src,
  alt,
  width,
  height,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string
  src: string
  alt: string
  width: number
  height: number
  eyebrow?: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="relative flex min-h-[620px] items-end overflow-hidden bg-night text-white md:h-[88vh]">
      <img src={src} alt={alt} loading="lazy" decoding="async" width={width} height={height} className="scroll-photo absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-night/5" />
      <div className="wrap relative pb-16 md:pb-24">
        <div data-reveal className="max-w-[42rem]">
          {eyebrow && <p className="text-small font-medium text-sky">{eyebrow}</p>}
          <h2 className="mt-3 text-display-xl">{title}</h2>
          {intro && <p className="mt-5 max-w-[46ch] text-lead text-white/75">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

/* ---------- Why Fangled rail card ---------- */

export function WhyCard({ icon: Icon, title, body }: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; body: string }) {
  return (
    <div className="flex h-full min-h-[15rem] w-[17rem] flex-col rounded-3xl bg-white p-7 ring-1 ring-line sm:w-[19rem]">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-soft text-brand">
        <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <p className="mt-6 text-title text-ink">{title}</p>
      <p className="mt-2 text-small text-mute">{body}</p>
    </div>
  )
}

/** Caption with a strong opening phrase and a muted continuation. */
export function Lead({ strong, children }: { strong: string; children: ReactNode }) {
  return (
    <>
      {strong} <span>{children}</span>
    </>
  )
}

/* ---------- FAQ ---------- */

export function Faq() {
  return (
    <section className="wrap grid gap-12 py-24 md:py-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <SectionHeader eyebrow="FAQ" title="Questions we hear often" />
        <p data-reveal className="mt-4 max-w-[36ch] text-lead text-mute">
          Something else on your mind? Call us at{' '}
          <a href={COMPANY.phoneHref} className="font-medium text-brand hover:text-brand-deep">{COMPANY.phone}</a>.
        </p>
      </div>
      <div className="divide-y divide-line border-y border-line">
        {FAQ.map((f, i) => (
          <details key={f.q} data-reveal style={stagger(i)} className="group">
            <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-title text-ink transition-colors hover:text-brand">
              {f.q}
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full ring-1 ring-line transition-[transform,background-color,color] duration-300 group-open:rotate-45 group-open:bg-ink group-open:text-white group-open:ring-ink">
                <Plus aria-hidden="true" className="h-4 w-4" />
              </span>
            </summary>
            <p className="max-w-[60ch] pb-6 text-body text-mute">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

/* ---------- Closing call to action ---------- */

export function CtaPanel({
  title = 'Let’s talk about your next move.',
  body = 'Tell us what you’re trying to grow. We’ll listen first, then tell you honestly where to start.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="wrap pb-24 md:pb-32">
      <div data-reveal="clip" className="relative overflow-hidden rounded-[2rem] bg-night px-6 py-16 text-center text-white sm:px-12 md:py-24">
        <div aria-hidden="true" className="absolute -inset-[20%] animate-drift" style={{ background: 'radial-gradient(40% 50% at 80% 10%, rgb(0 80 126 / 0.95), transparent 70%), radial-gradient(40% 50% at 15% 95%, rgb(79 176 227 / 0.35), transparent 70%)' }} />
        <div aria-hidden="true" className="grid-lines absolute inset-0 text-white/[0.06]" />
        <div className="relative mx-auto max-w-[40rem]">
          <h2 className="text-display-xl">{title}</h2>
          <p className="mx-auto mt-5 max-w-[46ch] text-lead text-white/70">{body}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to="/contact" variant="light" arrow>Book a strategy call</Button>
            <Button href={COMPANY.phoneHref} variant="ghost-light">Call {COMPANY.phone}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

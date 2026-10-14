import { useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Button } from '../components/Button'
import { CheckList, CtaPanel, Eyebrow, PageHeader, PhotoTile, SectionHeader } from '../components/Sections'
import { spotlight, stagger } from '../lib/motion'
import { Frame, PipelineMini } from '../components/Visuals'
import { iconFor } from '../data/site'
import marketing from '../content/marketing.json'

const PILLARS = marketing.pillars.items.map((p) => ({ ...p, icon: iconFor(p.icon) }))
const GROUPS = marketing.capabilities.groups

function Capabilities() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const [pill, setPill] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const g = GROUPS[active]

  // The dark pill slides to the selected tab (works when tabs wrap onto two rows too).
  useLayoutEffect(() => {
    const measure = () => {
      const t = tabs.current[active]
      if (t) setPill({ left: t.offsetLeft, top: t.offsetTop, width: t.offsetWidth, height: t.offsetHeight })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [active])

  const onKey = (e: KeyboardEvent) => {
    const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!d) return
    const next = (active + d + GROUPS.length) % GROUPS.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <div className="mt-12">
      <div
        role="tablist"
        aria-label="Service areas"
        onKeyDown={onKey}
        className="relative inline-flex max-w-full flex-wrap gap-1 rounded-full bg-white p-1 shadow-card ring-1 ring-line"
      >
        <span
          aria-hidden="true"
          className="absolute rounded-full bg-ink transition-[left,top,width] duration-300 ease-[cubic-bezier(0.2,0.7,0.2,1)]"
          style={pill}
        />
        {GROUPS.map((x, i) => (
          <button
            key={x.label}
            ref={(el) => {
              tabs.current[i] = el
            }}
            id={`cap-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="cap-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`relative h-10 rounded-full px-4 text-small font-medium transition-colors duration-300 ${
              i === active ? 'text-white' : 'text-ink-2 hover:text-ink'
            }`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div id="cap-panel" role="tabpanel" aria-labelledby={`cap-tab-${active}`} className="mt-6 rounded-3xl bg-white p-7 shadow-card ring-1 ring-line sm:p-10">
        <div key={active} className="animate-fade">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-display-md text-ink">{g.title}</h3>
            <p className="text-small text-mute">{g.items.length} {g.items.length === 1 ? 'service' : 'services'}</p>
          </div>
          <CheckList items={g.items} className="mt-7 grid gap-x-10 gap-y-4 space-y-0 md:grid-cols-2" />
          {active === GROUPS.length - 1 && (
            <div className="mt-8">
              <Button to="/about#fractional-cmo" variant="secondary" arrow>{marketing.capabilities.fitCheckButton}</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function Marketing() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>{marketing.eyebrow}</Eyebrow>}
        title={marketing.title}
        intro={marketing.intro}
        actions={<Button to="/contact" arrow>{marketing.button}</Button>}
        aside={
          <Frame>
            <div className="flex items-baseline justify-between">
              <p className="text-title text-ink">{marketing.pipeline.title}</p>
              <span className="rounded-full bg-sky-soft px-2 py-0.5 text-[11px] font-medium text-brand">{marketing.pipeline.badge}</span>
            </div>
            <div className="mt-6">
              <PipelineMini />
            </div>
            <div className="mt-5 flex gap-5 text-caption text-mute">
              <span className="flex items-center gap-2"><span className="h-0.5 w-5 rounded bg-brand" />{marketing.pipeline.withPlaybook}</span>
              <span className="flex items-center gap-2"><span className="h-0.5 w-5 rounded border-t-2 border-dashed border-taupe" />{marketing.pipeline.withoutOne}</span>
            </div>
          </Frame>
        }
      />

      <section className="wrap py-24 md:py-32">
        <SectionHeader eyebrow={marketing.pillars.eyebrow} title={marketing.pillars.title} />
        <ul onPointerMove={spotlight} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <li key={p.title} data-reveal style={stagger(i)}>
              <div className="spot group h-full rounded-3xl bg-soft p-7 ring-1 ring-line transition-colors duration-300 hover:bg-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card ring-1 ring-line transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-white">
                  <p.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-title text-ink">{p.title}</h3>
                <p className="mt-2 text-body text-mute">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader
            eyebrow={marketing.capabilities.eyebrow}
            title={marketing.capabilities.title}
            intro={marketing.capabilities.intro}
            action={<Button to="/contact">{marketing.capabilities.button}</Button>}
          />
          <div data-reveal>
            <Capabilities />
          </div>
        </div>
      </section>

      <PhotoTile
        src="/images/product-workshop.webp"
        alt="A team discussing a product sample and research notes"
        width={1536}
        height={1024}
        eyebrow={marketing.photo.eyebrow}
        title={marketing.photo.title}
        intro={marketing.photo.intro}
      />

      <div className="pt-24 md:pt-32">
        <CtaPanel />
      </div>
    </>
  )
}

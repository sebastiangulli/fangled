import { useState } from 'react'
import { BarChart3, Check, Compass, Gem, Megaphone, Microscope, Route } from 'lucide-react'
import { Button } from '../components/Button'
import { Highlights } from '../components/Gallery'
import {
  CheckList,
  CtaPanel,
  Eyebrow,
  Faq,
  Lead,
  PageHeader,
  SectionHeader,
} from '../components/Sections'
import { spotlight, stagger } from '../lib/motion'
import { DiligenceMini, Frame, MethodVisual } from '../components/Visuals'
import site from '../content/site.json'
import about from '../content/about.json'

const PATH = about.path.stages
const DISCIPLINES = about.approach.disciplines
const FCMO_PAIN_POINTS = about.fitCheck.painPoints
const BEYOND_GROWTH = about.beyondGrowth.cards
const CMO_CAPABILITIES = about.fractionalCmo.capabilities

const DISCIPLINE_ICONS = [Compass, Microscope, Route, BarChart3, Gem, Megaphone]

const SLIDES = [
  { dark: true, caption: <Lead strong={about.method.slides[0].strong}>{about.method.slides[0].text}</Lead>, visual: <MethodVisual step={0} /> },
  { caption: <Lead strong={about.method.slides[1].strong}>{about.method.slides[1].text}</Lead>, visual: <MethodVisual step={1} /> },
  { dark: true, caption: <Lead strong={about.method.slides[2].strong}>{about.method.slides[2].text}</Lead>, visual: <MethodVisual step={2} /> },
]

/** Fit check as configurator options: select what's true today. */
function FitCheck() {
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const count = checked.size
  const toggle = (i: number) =>
    setChecked((prev) => {
      const next = new Set(prev)
      if (!next.delete(i)) next.add(i)
      return next
    })

  return (
    <fieldset className="rounded-3xl bg-white p-6 shadow-float ring-1 ring-line sm:p-8">
      <legend className="sr-only">Fractional CMO fit check</legend>
      <div className="flex items-baseline justify-between gap-4">
        <p className="text-title text-ink">{about.fitCheck.title}</p>
        <p className="shrink-0 text-small text-mute">{count} of {FCMO_PAIN_POINTS.length}</p>
      </div>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-soft">
        <div className="h-full origin-left rounded-full bg-brand transition-transform duration-300" style={{ transform: `scaleX(${count / FCMO_PAIN_POINTS.length})` }} />
      </div>
      <ul className="mt-5 space-y-2.5">
        {FCMO_PAIN_POINTS.map((point, i) => {
          const on = checked.has(i)
          return (
            <li key={point}>
              <label
                className={`flex cursor-pointer items-start gap-3 rounded-2xl p-4 text-small ring-inset transition-[box-shadow,background-color] duration-200 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sky ${
                  on ? 'bg-sky-soft/60 text-ink ring-2 ring-brand' : 'bg-white text-ink-2 ring-1 ring-line hover:ring-ink/25'
                }`}
              >
                <input type="checkbox" checked={on} onChange={() => toggle(i)} className="sr-only" />
                <span
                  aria-hidden="true"
                  className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${on ? 'bg-brand text-white' : 'ring-1 ring-line'}`}
                >
                  {on && <Check className="h-3 w-3" strokeWidth={3.5} />}
                </span>
                {point}
              </label>
            </li>
          )
        })}
      </ul>
      <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-small text-mute" aria-live="polite">
          {count === 0
            ? about.fitCheck.hintNone
            : count === 1
              ? about.fitCheck.hintOne
              : about.fitCheck.hintMany.replace('{count}', String(count))}
        </p>
        <Button to="/contact" variant={count ? 'primary' : 'secondary'} className="shrink-0">
          {about.fitCheck.button}
        </Button>
      </div>
    </fieldset>
  )
}

export function About() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>{about.eyebrow}</Eyebrow>}
        title={about.title}
        intro={about.intro}
        actions={<Button to="/contact" arrow>{site.bookCall}</Button>}
        aside={
          <Frame>
            <p className="text-caption font-medium text-mute">{about.path.title}</p>
            <ol className="mt-5">
              {PATH.map((p, i) => {
                const last = i === PATH.length - 1
                return (
                  <li key={p.stage} className="relative flex gap-4 pb-6 last:pb-0">
                    {!last && <span aria-hidden="true" className="absolute top-8 bottom-0 left-[15px] w-px bg-gradient-to-b from-sky to-line" />}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-caption font-semibold ${
                        last ? 'bg-brand text-white shadow-float' : 'bg-sky-soft text-brand'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1">
                      <span className={`block text-title ${last ? 'text-brand' : 'text-ink'}`}>{p.stage}</span>
                      <span className="mt-0.5 block text-small text-mute">{p.body}</span>
                    </span>
                  </li>
                )
              })}
            </ol>
          </Frame>
        }
      />

      <section className="wrap py-24 md:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeader eyebrow={about.approach.eyebrow} title={about.approach.title} />
            <div data-reveal className="mt-6 max-w-[56ch] space-y-5 text-lead text-mute">
              {about.approach.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div data-reveal="clip" className="overflow-hidden rounded-3xl">
            <img
              src="/images/strategy-workshop.webp"
              alt="A team working through market plans and material samples around a table"
              loading="lazy"
              decoding="async"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
        <ul onPointerMove={spotlight} className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {DISCIPLINES.map((d, i) => {
            const Icon = DISCIPLINE_ICONS[i % DISCIPLINE_ICONS.length]
            return (
              <li key={d} data-reveal style={stagger(i)}>
                <div className="spot h-full rounded-2xl bg-soft p-5 ring-1 ring-line transition-colors hover:bg-white">
                  <Icon aria-hidden="true" className="h-5 w-5 text-brand" strokeWidth={1.75} />
                  <p className="mt-4 text-small font-medium text-ink">{d}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader eyebrow={about.method.eyebrow} title={about.method.title} />
          <div className="mt-12">
            <Highlights label="The Strategy First Method" slides={SLIDES} />
          </div>
        </div>
      </section>

      <section id="fractional-cmo" className="wrap grid items-start gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow={about.fractionalCmo.eyebrow} title={about.fractionalCmo.title} />
          <div className="mt-5 max-w-[50ch] space-y-4 text-lead text-mute">
            {about.fractionalCmo.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <h3 className="mt-10 text-small font-medium text-ink">{about.fractionalCmo.capabilitiesTitle}</h3>
          <CheckList items={CMO_CAPABILITIES} className="mt-4" />
        </div>
        <div data-reveal style={stagger(1)}>
          <FitCheck />
        </div>
      </section>

      <section id="beyond-growth" className="relative overflow-hidden bg-night py-24 text-white md:py-32">
        <div aria-hidden="true" className="absolute inset-0" style={{ background: 'radial-gradient(50% 60% at 90% 0%, rgb(0 80 126 / 0.7), transparent 70%)' }} />
        <div aria-hidden="true" className="grid-lines absolute inset-0 text-white/[0.05]" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeader dark eyebrow={about.beyondGrowth.eyebrow} title={about.beyondGrowth.title} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {BEYOND_GROWTH.map((b, i) => (
                <div key={b.title} data-reveal style={stagger(i + 1)} className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10">
                  <h3 className="text-title">{b.title}</h3>
                  <p className="mt-2 text-body text-white/65">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal style={stagger(3)} className="rounded-3xl bg-white/[0.03] p-6 ring-1 ring-white/10 sm:p-8">
            <div className="flex items-baseline justify-between">
              <p className="text-title">{about.beyondGrowth.reviewTitle}</p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/70">{about.beyondGrowth.exampleBadge}</span>
            </div>
            <div className="mt-5">
              <DiligenceMini dark />
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <CtaPanel title={about.cta.title} />
    </>
  )
}

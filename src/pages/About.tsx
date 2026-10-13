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
import { BEYOND_GROWTH, CMO_CAPABILITIES, DISCIPLINES, FCMO_PAIN_POINTS } from '../data/site'

const DISCIPLINE_ICONS = [Compass, Microscope, Route, BarChart3, Gem, Megaphone]

const PATH = [
  { stage: 'Touch', body: 'Someone meets your brand for the first time.' },
  { stage: 'Aware', body: 'They understand what you do and why it matters.' },
  { stage: 'Buyer', body: 'They choose you, for a reason they can repeat.' },
  { stage: 'Advocate', body: 'They buy again, and tell others why.' },
]

const SLIDES = [
  { dark: true, caption: <Lead strong="Listen to the market.">Voice-of-customer, distributor, and dealer studies reveal what buyers actually value.</Lead>, visual: <MethodVisual step={0} /> },
  { caption: <Lead strong="Prove the value.">Findings become a clear value proposition, and a reason to choose you over every alternative.</Lead>, visual: <MethodVisual step={1} /> },
  { dark: true, caption: <Lead strong="Activate the playbook.">Marketing and sales get one data-driven plan, and move on it together.</Lead>, visual: <MethodVisual step={2} /> },
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
        <p className="text-title text-ink">Does this sound like your business?</p>
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
            ? 'Check anything that’s true today.'
            : count === 1
              ? 'One is often enough for a Fractional CMO to pay for itself.'
              : `${count} at once is exactly what a Fractional CMO is built for.`}
        </p>
        <Button to="/contact" variant={count ? 'primary' : 'secondary'} className="shrink-0">
          Talk it through
        </Button>
      </div>
    </fieldset>
  )
}

export function About() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>About Fangled Group</Eyebrow>}
        title="A better way to win."
        intro="We turn anyone who touches your brand into a voracious advocate: a buyer who comes back, and can’t wait to tell someone why."
        actions={<Button to="/contact" arrow>Book a strategy call</Button>}
        aside={
          <Frame>
            <p className="text-caption font-medium text-mute">The path we design for</p>
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
            <SectionHeader eyebrow="Our approach" title="Growth starts with understanding your market" />
            <div data-reveal className="mt-6 max-w-[56ch] space-y-5 text-lead text-mute">
              <p>
                Fangled Group helps you win in the U.S. and abroad with a strategy-first method. We find your ideal customer segments, define what they need, and build a data-driven go-to-market plan around it.
              </p>
              <p>The result is a launch, domestic or global, that’s planned, priced, and protected before it spends a dollar.</p>
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
            const Icon = DISCIPLINE_ICONS[i]
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
          <SectionHeader eyebrow="How we work" title="The Strategy First Method" />
          <div className="mt-12">
            <Highlights label="The Strategy First Method" slides={SLIDES} />
          </div>
        </div>
      </section>

      <section id="fractional-cmo" className="wrap grid items-start gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28">
          <SectionHeader eyebrow="Fractional CMO" title="Top skills and performance at a fraction of the cost." />
          <div className="mt-5 max-w-[50ch] space-y-4 text-lead text-mute">
            <p>Imagine a C-level marketing executive fully dedicated to your company, without the cost of a full-time hire or the team built around one.</p>
            <p>
              Don’t mistake an agency for a Fractional CMO. An agency is a vendor hired for tasks. A Fractional CMO is a fiscally responsible member of your executive team who owns the strategy and the budget.
            </p>
          </div>
          <h3 className="mt-10 text-small font-medium text-ink">What a Fractional CMO brings</h3>
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
            <SectionHeader dark eyebrow="Beyond growth" title="When it’s time to sell, or to buy." />
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
              <p className="text-title">Target-company review</p>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/70">Example</span>
            </div>
            <div className="mt-5">
              <DiligenceMini dark />
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <CtaPanel title="Could a Fractional CMO be the game changer you seek?" />
    </>
  )
}

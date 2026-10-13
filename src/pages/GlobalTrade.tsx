import { BadgeDollarSign, Factory, Languages, Network, Package, Scale, Search, ShieldCheck, Ship } from 'lucide-react'
import { Button } from '../components/Button'
import {
  CtaPanel,
  Eyebrow,
  PageHeader,
  SectionHeader,
} from '../components/Sections'
import { spotlight, stagger } from '../lib/motion'
import { Frame, GlobeMini } from '../components/Visuals'
import { GLOBAL_SOURCE, GLOBAL_STRATEGY } from '../data/site'

const STRATEGY_ICONS = [Search, Network, Languages, Scale, BadgeDollarSign, ShieldCheck]
const SOURCE_ICONS = [Package, Factory, Ship]

export function GlobalTrade() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>Global trade & sourcing</Eyebrow>}
        title="Move into new markets with a clear plan."
        intro="Market viability, sourcing, logistics, and regulatory strategy for domestic and international expansion."
        actions={<Button to="/contact" arrow>Start your global plan</Button>}
        aside={
          <Frame>
            <GlobeMini className="mx-auto h-auto w-full max-w-[340px]" />
            <div className="mt-4 grid grid-cols-2 gap-2 text-caption">
              <span className="rounded-lg bg-soft px-3 py-2 text-ink-2">Market viability: <b className="font-medium text-brand">go</b></span>
              <span className="rounded-lg bg-soft px-3 py-2 text-ink-2">Channel: <b className="font-medium text-brand">distributor</b></span>
            </div>
          </Frame>
        }
      />

      <section className="wrap py-24 md:py-32">
        <SectionHeader
          eyebrow="Build a global strategy"
          title="Six questions before you enter a market"
          intro="We answer the questions that decide whether, and how, you should go."
        />
        <ul onPointerMove={spotlight} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_STRATEGY.map((item, i) => {
            const Icon = STRATEGY_ICONS[i]
            return (
              <li key={item} data-reveal style={stagger(i)}>
                <div className="spot group h-full rounded-3xl bg-soft p-7 ring-1 ring-line transition-colors duration-300 hover:bg-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card ring-1 ring-line transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-6 text-title text-ink">{item}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="relative overflow-hidden bg-night py-24 text-white md:py-32">
        <div aria-hidden="true" className="absolute -inset-[20%] animate-drift" style={{ background: 'radial-gradient(35% 45% at 20% 15%, rgb(0 80 126 / 0.75), transparent 70%)' }} />
        <div aria-hidden="true" className="grid-lines absolute inset-0 text-white/[0.05]" />
        <div className="wrap relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeader dark eyebrow="Sourcing" title="Find products and services abroad" intro="From the first factory visit to inbound logistics and compliance, one team owns the chain." />
            <ul className="mt-10 space-y-3">
              {GLOBAL_SOURCE.map((s, i) => {
                const Icon = SOURCE_ICONS[i]
                return (
                  <li key={s} data-reveal style={stagger(i + 1)} className="flex items-center gap-4 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky/15 text-sky">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-body text-white/85">{s}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div data-reveal="clip" className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <img
              src="/images/global-trade-port.webp"
              alt="Container cranes at a port at sunset"
              loading="lazy"
              decoding="async"
              width={1672}
              height={941}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <div className="pt-24 md:pt-32">
        <CtaPanel title="Ready to see your next market clearly?" />
      </div>
    </>
  )
}

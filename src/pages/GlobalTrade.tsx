import { BadgeDollarSign, Factory, Languages, Network, Package, Scale, Search, ShieldCheck, Ship } from 'lucide-react'
import { Button } from '../components/Button'
import { CtaPanel, Eyebrow, PageHeader, PhotoTile, SectionHeader } from '../components/Sections'
import { spotlight, stagger } from '../lib/motion'
import { Frame, GlobeMini } from '../components/Visuals'
import { GLOBAL_SOURCE, GLOBAL_STRATEGY } from '../data/site'
import trade from '../content/global-trade.json'

const STRATEGY_ICONS = [Search, Network, Languages, Scale, BadgeDollarSign, ShieldCheck]
const SOURCE_ICONS = [Package, Factory, Ship]

export function GlobalTrade() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>{trade.eyebrow}</Eyebrow>}
        title={trade.title}
        intro={trade.intro}
        actions={<Button to="/contact" arrow>{trade.button}</Button>}
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
          eyebrow={trade.strategy.eyebrow}
          title={trade.strategy.title}
          intro={trade.strategy.intro}
        />
        <ul onPointerMove={spotlight} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GLOBAL_STRATEGY.map((item, i) => {
            const Icon = STRATEGY_ICONS[i % STRATEGY_ICONS.length]
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

      <PhotoTile
        src="/images/global-trade-port.webp"
        alt="Container cranes at a port at sunset"
        width={1672}
        height={941}
        eyebrow={trade.sourcing.eyebrow}
        title={trade.sourcing.title}
        intro={trade.sourcing.intro}
      >
        <ul className="mt-10 grid gap-3 md:grid-cols-3">
          {GLOBAL_SOURCE.map((s, i) => {
            const Icon = SOURCE_ICONS[i % SOURCE_ICONS.length]
            return (
              <li key={s} data-reveal style={stagger(i + 1)} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur-xl">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky/20 text-sky">
                  <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="text-body text-white/90">{s}</span>
              </li>
            )
          })}
        </ul>
      </PhotoTile>

      <div className="pt-24 md:pt-32">
        <CtaPanel title={trade.cta.title} />
      </div>
    </>
  )
}

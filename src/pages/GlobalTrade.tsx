import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceList } from '../components/ServiceList'
import { FeatureSurfaceCard } from '../components/FeatureCard'
import { GLOBAL_STRATEGY, GLOBAL_SOURCE } from '../data/site'

export function GlobalTrade() {
  return (
    <>
      <Hero
        kicker="Global trade & sourcing"
        title="Move into new markets with clarity"
        subtitle="Market viability, sourcing, logistics, and regulatory strategy for domestic and international expansion."
        cta="Start your global plan"
        ctaTo="/contact"
        drawing={<img src="/images/global-trade-port.jpg" alt="Container port and cranes at sunset" className="h-72 w-full rounded-xl object-cover" />}
      />

      <section className="border-y border-line bg-paper px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Build a global strategy"
            title="Six decisions, in the order they matter"
            className="mb-12"
          />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {GLOBAL_STRATEGY.map((item, i) => (
              <li key={item} className="border-t border-ink pt-5">
                <span className="tabular font-display text-stat leading-stat text-taupe">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 max-w-[30ch] text-body leading-snug font-medium text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <ServiceList title="Find products and services abroad" items={GLOBAL_SOURCE} />
          <FeatureSurfaceCard
            title="Source it without the surprises"
            description="From first factory visit to inbound logistics and compliance, one team owns the chain."
            to="/contact"
          />
        </div>
      </section>
    </>
  )
}

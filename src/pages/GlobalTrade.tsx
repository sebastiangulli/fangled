import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceList } from '../components/ServiceList'
import { FeatureCard, CardRow, ScrollCard } from '../components/FeatureCard'
import { GLOBAL_STRATEGY, GLOBAL_SOURCE } from '../data/site'

export function GlobalTrade() {
  return (
    <>
      <Hero
        kicker="Global Trade & Sourcing"
        title="We Have Helped Hundreds of Companies Grow by Gaining Access to the World"
        subtitle="Market viability, sourcing, logistics, and regulatory strategy for domestic and international expansion."
        cta="Start your global plan"
        ctaTo="/contact"
      />

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading kicker="Capabilities" title="Strategy and Sourcing Under One Roof" className="mb-10" />
          <CardRow>
            <ScrollCard>
              <FeatureCard
                illustration="trade"
                title="Build a Global Strategy"
                description="From market entry models to message evaluation, we help you plan, price, and protect your expansion."
                to="/contact"
              />
            </ScrollCard>
            <ScrollCard>
              <FeatureCard
                illustration="marketing"
                title="Find Products and Services Abroad"
                description="Source raw materials, components, and contract manufacturers while managing inbound logistics and compliance."
                to="/contact"
              />
            </ScrollCard>
            <ScrollCard>
              <FeatureCard
                illustration="cmo"
                title="Regulatory & IP Guidance"
                description="Navigate regulatory parameters and protect intellectual property as you enter new markets."
                to="/contact"
              />
            </ScrollCard>
          </CardRow>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Details"
            title="Global Strategy and Sourcing"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceList title="Build a Global Strategy to Sell Your Products or Services" items={GLOBAL_STRATEGY} />
            <ServiceList title="Find Products and Services Abroad" items={GLOBAL_SOURCE} />
          </div>
        </div>
      </section>
    </>
  )
}

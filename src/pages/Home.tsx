import { Hero, HeroIcon, HeroOutline } from '../components/Hero'
import { StatRow } from '../components/StatRow'
import { SectionHeading } from '../components/SectionHeading'
import { FeatureCard, CardRow, ScrollCard, FeatureSurfaceCard } from '../components/FeatureCard'
import { PillButton } from '../components/PillButton'
import { FCMO_PAIN_POINTS } from '../data/site'
import { Icon } from '../components/Icon'

export function Home() {
  return (
    <>
      <Hero
        kicker="Fractional CMO & Growth Consulting"
        title={
          <>
            Convert every <HeroIcon color="blue" icon="diamond" /> into a voracious{' '}
            <HeroOutline>brand advocate</HeroOutline> for your{' '}
            <HeroIcon color="orange" icon="arrow-up" />
          </>
        }
        subtitle="The Fangled Group's 'Strategy First Method' is designed to help you convert every touch into voracious advocates for your brand."
        cta="Book a strategy call"
        ctaTo="/contact"
      />

      <StatRow />

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <SectionHeading
              kicker="Who we are"
              title="A Business Growth Consultancy That Empowers Companies to Achieve Greater Success"
              subtitle="Through in-depth market research and customer analysis, we guide you towards a deep understanding of your business and the unique value proposition that resonates with your ideal customer."
            />
            <div className="space-y-5 text-base leading-base text-slate-veil">
              <p>
                Even those who don't do business with you today can also be part of your hoard of powerful brand advocates who love what you do, adore what you provide, and shout your praises from the hilltop.
              </p>
              <p>
                Our process leverages in-depth research to identify your ideal customer segments. We then research the true value your offerings bring to them, ensuring your message resonates with their needs, challenges, and preferred communication channels.
              </p>
              <p>
                Fangled Group goes beyond just growth. We support businesses navigating exit planning and assist private equity firms and M&A professionals by conducting in-depth research on target companies and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Services"
            title="How We Help You Win"
            className="mb-10"
          />
          <CardRow>
            <ScrollCard>
              <FeatureCard
                illustration="marketing"
                title="Marketing & Sales Consulting"
                description="Go-to-market playbooks, campaign development, branding, digital media, CRM implementation, and sales training."
                to="/marketing-and-sales-consulting"
              />
            </ScrollCard>
            <ScrollCard>
              <FeatureCard
                illustration="trade"
                title="Global Trade & Sourcing"
                description="Market viability studies, sourcing products abroad, contract manufacturers, logistics, and regulatory navigation."
                to="/global-trade-and-sourcing"
              />
            </ScrollCard>
            <ScrollCard>
              <FeatureCard
                illustration="cmo"
                title="Fractional CMO"
                description="Executive-level marketing leadership without the full-time cost. Strategy, team building, and execution."
                to="/about"
              />
            </ScrollCard>
            <ScrollCard>
              <FeatureCard
                illustration="cleaners"
                title="Product Launch"
                description="Bring disruptive innovations to market with research, positioning, and activation that builds advocates."
                to="/products/ph-neutral-cleaners"
              />
            </ScrollCard>
          </CardRow>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              kicker="Attract the perfect customer"
              title="Research-Driven Value Propositions"
              subtitle="We go beyond simply identifying your ideal customer segments. We delve into what truly matters to them."
            />
            <div className="space-y-5 text-base leading-base text-slate-veil">
              <p>
                We delve into what truly matters to them: their needs, challenges, current situation, and preferred communication channels. This clarity allows us to craft a compelling value proposition that speaks directly to their “what’s in it for me?” question.
              </p>
              <p>
                Armed with this in-depth understanding, we craft a data-driven go-to-market strategy designed to attract the right customers and propel your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-5 text-base leading-base text-slate-veil">
              <p>
                <strong className="font-medium text-ink-teal">Beyond Growth.</strong> Fangled Group supports businesses navigating exit planning, and we assist private equity firms and M&A professionals by conducting in-depth research on target companies and markets.
              </p>
              <p>
                Our research helps identify potential red flags and market opportunities, providing the clarity needed for informed decisions.
              </p>
            </div>
            <FeatureSurfaceCard
              title="Exit Planning & Due Diligence"
              description="Get the market clarity you need before making big moves."
              to="/contact"
            />
          </div>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Disruptive Innovation Examples"
            title="Fangled Group Clients Bring to Market"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              illustration="cleaners"
              title="Advanced Chemistry"
              description="pH neutral cleaning technology for industrial applications that replaces hazardous acid and alkaline cleaners."
              to="/products/ph-neutral-cleaners"
            />
            <FeatureCard
              illustration="mixers"
              title="3D Mixing Technology"
              description="Drum, pail, and IBC mixers that equalize velocity vectors for homogeneous, air-free blends."
              to="/products/drum-and-ibc-mixers"
            />
          </div>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              kicker="Fractional CMO"
              title="Executive-Level Marketing Without the Full-Time Cost"
              subtitle="A Fractional CMO may be just what your company needs to build a robust branding and marketing team."
            />
            <div className="rounded-lg border border-hairline-gray bg-chalk-white p-6 md:p-8">
              <p className="text-sm font-medium text-ink-teal">Does any of this describe your business?</p>
              <ul className="mt-4 space-y-3">
                {FCMO_PAIN_POINTS.slice(0, 6).map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-sm text-slate-veil">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-sky text-info-indigo">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <PillButton to="/about" variant="secondary">
                  Explore Fractional CMO
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] text-center">
          <h2 className="mx-auto max-w-2xl text-3xl leading-3xl font-medium text-ink-teal">
            Ready to turn every touch into a brand advocate?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-lg text-slate-veil">
            Let's discuss your goals and build a customized strategy to propel your business to new heights.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <PillButton to="/contact" variant="primary">
              Book a strategy call
            </PillButton>
            <PillButton to="/about" variant="secondary">
              Learn more
            </PillButton>
          </div>
        </div>
      </section>
    </>
  )
}

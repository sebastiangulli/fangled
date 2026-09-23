import { Hero, HeroIcon, HeroOutline } from '../components/Hero'
import { HeroDrawing } from '../components/Illustration'
import { StatRow } from '../components/StatRow'
import { SectionHeading } from '../components/SectionHeading'
import { FeatureCard, CardRow, ScrollCard, FeatureSurfaceCard } from '../components/FeatureCard'
import { PillButton } from '../components/PillButton'
import { Illustration } from '../components/Illustration'

const METHOD = [
  {
    n: '01',
    title: 'Listen to the market',
    body: 'Voice-of-customer, distributor and dealer studies plus qualitative and quantitative research.',
  },
  {
    n: '02',
    title: 'Prove the value',
    body: 'Turn what you learn into a value proposition that answers your customer’s “what’s in it for me?”',
  },
  {
    n: '03',
    title: 'Activate the playbook',
    body: 'A data-driven go-to-market plan that attracts the right customers and turns them into advocates.',
  },
]

export function Home() {
  return (
    <>
      <Hero
        kicker="Fractional CMO & growth consulting"
        title={
          <>
            Convert every <HeroIcon color="blue" icon="diamond" />
            <span className="sr-only">touch</span> into a voracious{' '}
            <HeroOutline>brand advocate</HeroOutline>
            <HeroIcon color="orange" icon="arrow-up" />
            <span className="sr-only">and grow</span>
          </>
        }
        subtitle="The Fangled Group Strategy First Method turns every touchpoint into a reason for your market to buy again — and tell someone."
        cta="Book a strategy call"
        ctaTo="/contact"
        secondaryCta="See how we work"
        secondaryTo="/marketing-and-sales-consulting"
        drawing={<HeroDrawing className="w-full" />}
      />

      <StatRow />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            kicker="Who we are"
            title="A growth consultancy for companies that would rather lead than chase"
          />
          <div>
            <p className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.3] text-ink-teal italic">
              “Even the people who don’t buy from you today can become the loudest advocates for what you do.”
            </p>
            <div className="mt-6 space-y-4 text-body leading-body text-slate-veil">
              <p>
                Through in-depth market research and customer analysis we help you understand your business
                and the value proposition that resonates with your ideal customer.
              </p>
              <p>
                We also support businesses navigating exit planning, and assist private equity and M&A
                professionals with research on target companies and markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-hairline-gray bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="The Strategy First Method"
            title="Three moves, in order, every time"
            className="mb-12"
          />
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {METHOD.map((step) => (
              <div key={step.n} className="border-t border-ink-teal pt-5">
                <span className="tabular font-display text-stat leading-stat text-ember-orange">{step.n}</span>
                <h3 className="mt-3 text-heading-sm leading-heading-sm font-medium text-ink-teal">{step.title}</h3>
                <p className="mt-2 max-w-[34ch] text-body-sm leading-body-sm text-slate-veil">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Services"
            title="How we help you win"
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
                description="Market viability studies, sourcing abroad, contract manufacturers, logistics, and regulatory navigation."
                to="/global-trade-and-sourcing"
                tone="orange"
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
                tone="orange"
              />
            </ScrollCard>
          </CardRow>
        </div>
      </section>

      <section className="border-t border-hairline-gray px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Beyond growth"
              title="Exit planning & due diligence"
              subtitle="We assist private equity firms and M&A professionals with in-depth research on target companies and markets, surfacing red flags and opportunities before the deal."
            />
            <div className="mt-8">
              <PillButton to="/contact" variant="secondary">
                Talk to us before you sign
              </PillButton>
            </div>
          </div>
          <FeatureSurfaceCard
            title="Get market clarity before you move"
            description="One conversation is usually enough to know whether the deal — or the launch — is worth your capital."
            to="/contact"
          />
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Disruptive innovation"
            title="Products our clients bring to market"
            className="mb-10"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              illustration="cleaners"
              title="pH Neutral Cleaning Technology"
              description="Industrial cleaners that replace hazardous acid and alkaline chemistry — safer, compliant, and cheaper to run."
              to="/products/ph-neutral-cleaners"
            />
            <FeatureCard
              illustration="mixers"
              title="3D Mixing Technology"
              description="Drum, pail, and IBC mixers that equalize velocity vectors for homogeneous, air-free blends."
              to="/products/drum-and-ibc-mixers"
              tone="orange"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-hairline-gray bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Illustration name="cmo" animate className="mx-auto h-56 w-full max-w-md" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              kicker="Fractional CMO"
              title="Executive-level marketing without the full-time cost"
              subtitle="A seasoned C-level marketing executive, embedded in your team for a fraction of the salary — leading strategy, not just delivering tasks."
            />
            <div className="mt-8">
              <PillButton to="/about" variant="primary">
                See if a Fractional CMO fits
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink-teal px-6 py-20 text-chalk-white md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="max-w-3xl text-[clamp(2.2rem,4.4vw,3.75rem)] leading-[1.06] text-balance">
            Ready to turn every touch into a brand advocate?
          </h2>
          <p className="mt-5 max-w-[52ch] text-subheading leading-subheading text-chalk-white/70">
            Let’s discuss your goals and build a strategy tuned to your business — not a template.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PillButton to="/contact" variant="inverse">
              Book a strategy call
            </PillButton>
            <a
              href="tel:+18884275609"
              className="tabular inline-flex items-center gap-2 rounded-pill border border-white/40 px-6 py-3 text-body font-medium transition-colors duration-200 hover:border-chalk-white"
            >
              888.427.5609
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

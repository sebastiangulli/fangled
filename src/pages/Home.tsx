import { Link } from 'react-router-dom'
import { SectionHeading } from '../components/SectionHeading'
import { PillButton } from '../components/PillButton'
import { FeatureCard } from '../components/FeatureCard'
import { Illustration } from '../components/Illustration'
import { Icon } from '../components/Icon'

const PATHS = [
  {
    title: 'Marketing & sales',
    description: 'Find the right message, build the plan, and put it to work.',
    to: '/marketing-and-sales-consulting',
  },
  {
    title: 'Global trade & sourcing',
    description: 'Enter new markets and build a more capable supply chain.',
    to: '/global-trade-and-sourcing',
  },
  {
    title: 'Fractional CMO',
    description: 'Bring senior marketing leadership into the business.',
    to: '/about',
  },
]

const METHOD = [
  {
    title: 'Listen to the market',
    body: 'Voice-of-customer, distributor, and dealer studies reveal what buyers actually value.',
  },
  {
    title: 'Prove the value',
    body: 'Turn those findings into a clear proposition and a reason to choose you.',
  },
  {
    title: 'Activate the playbook',
    body: 'Give marketing and sales a focused plan they can put into motion together.',
  },
]

export function Home() {
  return (
    <>
      <section className="bg-night text-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:py-16">
          <div className="py-5 lg:py-12">
            <p className="mb-6 flex items-center gap-3 text-body-sm font-medium text-stone">
              <span aria-hidden="true" className="h-[2px] w-8 bg-taupe" />
              Fangled Group · Strategy first
            </p>
            <h1 className="max-w-[13ch] text-[clamp(3rem,5.5vw,5.25rem)] leading-[1.01] tracking-[-0.035em] text-balance">
              Know your market. Make your next move count.
            </h1>
            <p className="mt-7 max-w-[52ch] text-subheading leading-[1.65] text-white/80">
              We connect research, marketing, sales, and global trade so B2B companies can move forward with clarity.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PillButton to="/contact" variant="inverse">Book a strategy call</PillButton>
              <a href="#how-we-work" className="inline-flex min-h-12 items-center rounded-pill border border-white/45 px-6 py-3 text-body font-medium transition-colors hover:bg-white/10">
                See how we work
              </a>
            </div>
          </div>
          <div className="relative min-h-[370px] overflow-hidden rounded-[1.5rem] rounded-tl-[7rem] lg:min-h-[560px]">
            <img
              src="/images/strategy-workshop.jpg"
              alt="People collaborating around a table with market plans and material samples"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <section aria-label="Explore our services" className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-[1280px] md:grid-cols-3">
          {PATHS.map((path) => (
            <Link
              key={path.to}
              to={path.to}
              className="group flex min-h-44 flex-col justify-between gap-6 border-b border-line px-6 py-8 transition-colors hover:bg-paper md:border-b-0 md:border-r md:last:border-r-0 lg:px-9"
            >
              <div>
                <h2 className="text-heading-sm font-semibold text-night">{path.title}</h2>
                <p className="mt-2 max-w-[32ch] text-body-sm leading-body-sm text-slate">{path.description}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-body-sm font-medium text-brand">
                Explore service <Icon name="arrow-right" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-start gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            kicker="Who we are"
            title="A partner for the decisions that shape growth"
          />
          <div>
            <p className="font-display text-[clamp(1.8rem,3vw,2.65rem)] italic leading-[1.18] text-brand">
              The right next move starts with listening to the market.
            </p>
            <div className="mt-6 space-y-4 text-body leading-[1.7] text-slate">
              <p>
                Fangled Group helps businesses understand their customers, sharpen their value proposition, and turn insight into a go-to-market plan.
              </p>
              <p>
                We also support global sourcing and market entry, as well as exit planning and research for private equity and M&amp;A teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="border-y border-line bg-stone/60 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading kicker="The Strategy First Method" title="Listen first. Then make the move." />
            <p className="max-w-[50ch] text-subheading leading-[1.6] text-slate">
              A practical sequence that keeps each decision connected to the people you want to reach.
            </p>
          </div>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {METHOD.map((step, index) => (
              <li key={step.title} className="border-l-[3px] border-brand bg-paper px-6 py-7">
                <span className="font-display text-4xl italic text-taupe">0{index + 1}</span>
                <h3 className="mt-4 text-heading-sm font-semibold text-night">{step.title}</h3>
                <p className="mt-3 text-body-sm leading-[1.7] text-slate">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-night px-6 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="min-h-[340px] overflow-hidden rounded-[1.5rem] lg:min-h-[470px]">
            <img
              src="/images/global-trade-port.jpg"
              alt="Container port and cranes at sunset"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-5 flex items-center gap-3 text-body-sm font-medium text-stone">
              <span aria-hidden="true" className="h-[2px] w-8 bg-taupe" />
              Global trade & sourcing
            </p>
            <h2 className="max-w-[17ch] text-[clamp(2.25rem,4vw,3.75rem)] leading-[1.08] text-balance">
              Build your next market with a clear view.
            </h2>
            <p className="mt-6 max-w-[52ch] text-subheading leading-[1.65] text-white/80">
              From market viability to sourcing, logistics, and regulatory strategy, we help you see the practical path into new markets.
            </p>
            <div className="mt-9">
              <PillButton to="/global-trade-and-sourcing" variant="inverse">Explore global trade</PillButton>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              kicker="Fractional CMO"
              title="Leadership that works inside the business"
              subtitle="An experienced marketing executive can guide strategy, build the team, and connect execution to your goals without a full-time hire."
            />
            <div className="mt-8">
              <PillButton to="/about">See if it fits your team</PillButton>
            </div>
          </div>
          <div className="rounded-[1.5rem] bg-stone/60 p-8 md:p-12">
            <Illustration name="cmo" className="mx-auto h-64 w-full max-w-md" />
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Innovation"
            title="Products brought to market"
            subtitle="We work with companies that turn meaningful technical advances into a clear reason to buy."
            className="mb-9"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <FeatureCard
              illustration="cleaners"
              title="pH Neutral Cleaning Technology"
              description="Industrial cleaning technology designed to replace hazardous acid and alkaline chemistry."
              to="/products/ph-neutral-cleaners"
            />
            <FeatureCard
              illustration="mixers"
              title="3D Mixing Technology"
              description="Drum, pail, and IBC mixers engineered for more even blending without air entrainment."
              to="/products/drum-and-ibc-mixers"
              tone="taupe"
            />
          </div>
        </div>
      </section>

      <section className="bg-brand px-6 py-16 text-white md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-[18ch] text-[clamp(2.35rem,4.5vw,4rem)] leading-[1.07] text-balance">
              Let's talk about your next move.
            </h2>
            <p className="mt-5 max-w-[55ch] text-subheading leading-[1.6] text-white/85">
              Tell us what you're trying to grow. We'll listen first and find the right place to start.
            </p>
          </div>
          <PillButton to="/contact" variant="inverse" className="shrink-0">Book a strategy call</PillButton>
        </div>
      </section>
    </>
  )
}

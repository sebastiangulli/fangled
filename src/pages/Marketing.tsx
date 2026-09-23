import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceList } from '../components/ServiceList'
import { Illustration } from '../components/Illustration'
import { SERVICES } from '../data/site'
import { PillButton } from '../components/PillButton'

const PILLARS = [
  {
    title: 'Unlock exponential growth',
    body: 'A strategy-first plan tailored to your business, proven with companies worldwide.',
  },
  {
    title: 'Turn customers into advocates',
    body: 'Build a loyal following that buys your products and actively promotes them.',
  },
  {
    title: 'Global reach, local expertise',
    body: 'Contacts and resources in the U.S. and internationally, tuned to your market.',
  },
  {
    title: 'Build your dream team',
    body: 'A curated network of vetted experts assembled for your project, any size.',
  },
]

export function Marketing() {
  return (
    <>
      <Hero
        kicker="Marketing & sales consulting"
        title="The Strategy First approach brings sales growth here and abroad"
        subtitle="Your one-stop shop for strategic marketing, business development, and sales solutions."
        cta="Let’s talk growth"
        ctaTo="/contact"
        drawing={<Illustration name="marketing" animate className="mx-auto h-64 w-full max-w-md" />}
      />

      <section className="border-y border-hairline-gray bg-pale-mist">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-px bg-hairline-gray md:grid-cols-2">
          {PILLARS.map((p) => (
            <div key={p.title} className="bg-pale-mist px-6 py-8 md:px-8">
              <span aria-hidden="true" className="block h-2 w-2 rotate-45 bg-ember-orange" />
              <h3 className="mt-4 text-heading-sm leading-heading-sm font-medium text-ink-teal">{p.title}</h3>
              <p className="mt-2 max-w-[40ch] text-body-sm leading-body-sm text-slate-veil">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              kicker="Capabilities"
              title="Marketing, digital, sales & executive leadership"
              subtitle="Everything below is delivered by one accountable team, under one strategy."
            />
            <div className="text-body leading-body text-slate-veil">
              <p>
                We believe in flexibility and collaboration. Tell us your goals and we’ll build a customized
                strategy to propel your business to new heights — then stay to run it with you.
              </p>
              <div className="mt-6">
                <PillButton to="/contact" variant="primary">
                  Contact us today
                </PillButton>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            <ServiceList title="Marketing & business development" items={SERVICES.marketing} />
            <ServiceList title="Sales consulting" items={SERVICES.sales} />
            <ServiceList title="Digital media" items={SERVICES.digital} />
            <ServiceList title="Fractional CMO services" items={SERVICES.fractional} />
          </div>
        </div>
      </section>
    </>
  )
}

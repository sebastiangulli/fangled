import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { ServiceList } from '../components/ServiceList'
import { SERVICES } from '../data/site'
import { PillButton } from '../components/PillButton'

export function Marketing() {
  return (
    <>
      <Hero
        kicker="Marketing & Sales Consulting"
        title="The Fangled 'Strategy First' Approach Brings Sales Growth Here and Abroad"
        subtitle="Your one-stop shop for strategic marketing, business development, and sales solutions."
        cta="Let's talk growth"
        ctaTo="/contact"
      />

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-6 text-base leading-base text-slate-veil">
              <p>
                <strong className="font-medium text-ink-teal">Unlock Exponential Growth with Fangled Group.</strong> We take a “strategy-first” approach, tailoring each plan to your unique business needs. Our proven methods have helped companies worldwide achieve explosive growth.
              </p>
              <p>
                <strong className="font-medium text-ink-teal">Turn Customers into Brand Advocates.</strong> Imagine a loyal following who not only buys your products & services but actively promotes them. We help you build this “voracious horde” of brand advocates by crafting irresistible value propositions.
              </p>
              <p>
                <strong className="font-medium text-ink-teal">Global Reach, Local Expertise.</strong> Fangled Group boasts extensive contacts and resources both in the U.S. and internationally, unlocking exponential growth not only domestically but also in overseas markets tailored to your specific needs.
              </p>
              <p>
                <strong className="font-medium text-ink-teal">Build Your Dream Team (Without the Hassle).</strong> Our curated network of vetted experts allows us to create the perfect team for your project, regardless of size.
              </p>
            </div>
            <div className="rounded-lg border border-hairline-gray bg-pale-mist p-6 md:p-8">
              <SectionHeading
                kicker="Let's Talk Growth"
                title="Flexibility and Collaboration"
                subtitle="We believe in flexibility and collaboration. Let's discuss your goals and build a customized strategy to propel your business to new heights."
              />
              <div className="mt-6">
                <PillButton to="/contact" variant="primary">
                  Contact us today
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="Capabilities"
            title="Marketing, Digital, Sales & Executive Leadership"
            className="mb-12"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceList title="Marketing & Business Development" items={SERVICES.marketing} />
            <ServiceList title="Fractional CMO Services" items={SERVICES.fractional} />
            <ServiceList title="Digital Media" items={SERVICES.digital} />
            <ServiceList title="Sales Consulting" items={SERVICES.sales} />
          </div>
        </div>
      </section>
    </>
  )
}

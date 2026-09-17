import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { PodcastCard } from '../components/PodcastCard'
import { FeatureSurfaceCard } from '../components/FeatureCard'
import { Icon } from '../components/Icon'
import { PillButton } from '../components/PillButton'
import { PODCASTS, FCMO_PAIN_POINTS, COMPANY } from '../data/site'

export function About() {
  return (
    <>
      <Hero
        kicker="About Fangled Group"
        title="A Strategy First Global Marketing & Sales Consultancy"
        subtitle="A better way to win — turning anyone who touches your brand into a voracious advocate."
        cta="Meet the team"
        ctaTo="/contact"
      />

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <SectionHeading
              kicker="A better way to win"
              title="Turning Touches Into Brand Advocates"
              subtitle="A brand advocate is someone who loves your brand, products, and services. They also can't wait to shout its praises from the hilltops as they buy again and again."
            />
            <div className="space-y-5 text-base leading-base text-slate-veil">
              <p>
                Fangled Group will help you in the US and abroad leveraging our “strategy first” methods to grow your business like never before. We know what is required to win here and in the global market.
              </p>
              <p>
                Fangled Group and affiliates can assist you in positioning, market analysis, path to purchase evaluation, predictive sales modeling, brand development, and marketing activation to make your launch into the domestic and global marketplace a successful one.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                kicker="Fractional CMO"
                title="Top Skills & Performance at a Fraction of the Cost"
                subtitle="Imagine the power of having a C-level marketing executive fully dedicated to the success of your company for a fraction of the cost of hiring a full-time employee."
              />
              <p className="mt-5 text-base leading-base text-slate-veil">
                Don't mistake a marketing agency for a Fractional CMO. There is an overlap in skill set, but a FCMO is a fiscally responsible member of your executive team engaged in most aspects of your business, while agencies tend to be service-vendors hired for specific tasks.
              </p>
              <p className="mt-4 text-base leading-base text-slate-veil">
                FCMOs lead workshops, evaluate the voice of market, channel partners, and competitive landscape, and provide not only tactical materials but the overall strategic go-to-market playbook.
              </p>
            </div>
            <div className="rounded-lg border border-hairline-gray bg-pale-mist p-6 md:p-8">
              <p className="text-sm font-medium text-ink-teal">Does this sound like your business?</p>
              <ul className="mt-4 space-y-3">
                {FCMO_PAIN_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-sm text-slate-veil">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-sky text-info-indigo">
                      <Icon name="check" className="h-3 w-3" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <SectionHeading
                kicker="On the air"
                title="Recent Podcast Episodes"
                subtitle="Conversations on strategy, sales, exit planning, and building brand advocates."
              />
              <div className="mt-8">
                <PillButton href="https://www.youtube.com/channel/UCp7ZKlIqWN9I68OXFHCerWQ" variant="secondary">
                  Watch on YouTube
                </PillButton>
              </div>
            </div>
            <div className="grid gap-4">
              {PODCASTS.map((episode) => (
                <PodcastCard key={episode.title} title={episode.title} duration={episode.duration} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl leading-3xl font-medium text-ink-teal">
                Let's start a discussion to see how a Fractional CMO could be the game changer you seek.
              </h2>
              <p className="mt-4 text-lg leading-lg text-slate-veil">
                {COMPANY.phone} · {COMPANY.email}
              </p>
            </div>
            <FeatureSurfaceCard
              title="Book a free strategy call"
              description="No pitch decks. Just a meaningful conversation about your company and how we can help take it higher."
              to="/contact"
            />
          </div>
        </div>
      </section>
    </>
  )
}

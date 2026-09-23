import { useState } from 'react'
import { Hero } from '../components/Hero'
import { Illustration } from '../components/Illustration'
import { SectionHeading } from '../components/SectionHeading'
import { PodcastCard } from '../components/PodcastCard'
import { FeatureSurfaceCard } from '../components/FeatureCard'
import { Icon } from '../components/Icon'
import { PillButton } from '../components/PillButton'
import { PODCASTS, FCMO_PAIN_POINTS, COMPANY, SOCIAL } from '../data/site'

const YOUTUBE = SOCIAL.find((s) => s.label === 'YouTube')?.href ?? '#'

function PainChecklist() {
  const [checked, setChecked] = useState<boolean[]>(() => FCMO_PAIN_POINTS.map(() => false))
  const count = checked.filter(Boolean).length

  const toggle = (i: number) =>
    setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)))

  return (
    <div className="rounded-card border border-line bg-white p-6 md:p-8">
      <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
        <p className="text-body-sm font-medium text-ink">Does this sound like your business?</p>
        <p className="tabular shrink-0 text-body-sm text-muted">
          {count} of {FCMO_PAIN_POINTS.length}
        </p>
      </div>
      <ul className="divide-y divide-line">
        {FCMO_PAIN_POINTS.map((point, i) => (
          <li key={point}>
            <label className="flex cursor-pointer items-start gap-3 py-3 text-body-sm leading-body-sm text-slate transition-colors hover:text-ink">
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => toggle(i)}
                className="peer sr-only"
              />
              <span
                aria-hidden="true"
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] border transition-colors duration-150 ${
                  checked[i] ? 'border-ink bg-ink text-white' : 'border-line bg-white text-transparent'
                }`}
              >
                <Icon name="check" className="h-3 w-3" />
              </span>
              {point}
            </label>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-line pt-5">
        <p className="min-h-[2.5rem] text-body-sm leading-body-sm text-slate" aria-live="polite">
          {count === 0
            ? 'Tick anything that is true today. Even one is usually enough for a Fractional CMO to pay for itself.'
            : count === 1
              ? 'One of these is usually enough for a Fractional CMO to pay for itself.'
              : `${count} of these at once is exactly the situation a Fractional CMO is built for.`}
        </p>
        {count > 0 && (
          <div className="mt-4">
            <PillButton to="/contact" variant="primary">
              Talk it through
            </PillButton>
          </div>
        )}
      </div>
    </div>
  )
}

export function About() {
  return (
    <>
      <Hero
        kicker="About Fangled Group"
        title="Growth starts with understanding your market"
        subtitle="A better way to win: turning anyone who touches your brand into a voracious advocate."
        cta="Book a strategy call"
        ctaTo="/contact"
        drawing={<Illustration name="cmo" className="mx-auto h-64 w-full max-w-md" />}
      />

      <section className="border-y border-line bg-paper px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading
            kicker="A better way to win"
            title="Turning touches into brand advocates"
          />
          <div>
            <p className="font-display text-[clamp(1.4rem,2.2vw,1.9rem)] leading-[1.3] text-ink italic">
              “An advocate buys again — and can’t wait to tell someone why.”
            </p>
            <div className="mt-6 space-y-4 text-body leading-body text-slate">
              <p>
                Fangled Group helps you win in the U.S. and abroad with a strategy-first method: positioning,
                market analysis, path-to-purchase evaluation, predictive sales modeling, brand development,
                and marketing activation.
              </p>
              <p>
                The result is a launch — domestic or global — that is planned, priced, and protected before
                it spends a dollar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Fractional CMO"
              title="Top skills and performance at a fraction of the cost"
              subtitle="Imagine a C-level marketing executive fully dedicated to your company for a fraction of the cost of a full-time hire."
            />
            <div className="mt-6 space-y-4 text-body leading-body text-slate">
              <p>
                Don’t mistake an agency for a Fractional CMO. An agency is a service vendor hired for tasks;
                a FCMO is a fiscally responsible member of your executive team.
              </p>
              <p>
                FCMOs lead workshops, evaluate the voice of the market, channel partners and competitive
                landscape, and deliver the overall go-to-market playbook — not just tactical materials.
              </p>
            </div>
          </div>
          <PainChecklist />
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="On the air"
              title="Recent conversations"
              subtitle="Strategy, sales, exit planning, and building brand advocates — with founders and operators from the Fangled network."
            />
            <div className="mt-8">
              <PillButton href={YOUTUBE} variant="secondary" icon="arrow-up-right">
                Watch on YouTube
              </PillButton>
            </div>
          </div>
          <div className="border-b border-line">
            {PODCASTS.map((episode) => (
              <PodcastCard key={episode.title} title={episode.title} duration={episode.duration} href={YOUTUBE} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-[20ch] text-[clamp(2rem,3.6vw,3rem)] leading-[1.08] text-ink text-balance">
              Could a Fractional CMO be the game changer you seek?
            </h2>
            <p className="tabular mt-4 text-subheading leading-subheading text-slate">
              {COMPANY.phone} · {COMPANY.email}
            </p>
          </div>
          <FeatureSurfaceCard
            title="Book a free strategy call"
            description="No pitch decks. Just a meaningful conversation about your company and how we can help take it higher."
            to="/contact"
          />
        </div>
      </section>
    </>
  )
}

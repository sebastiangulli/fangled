import { Hero } from '../components/Hero'
import { PodcastCard } from '../components/PodcastCard'
import { PillButton } from '../components/PillButton'
import { Illustration } from '../components/Illustration'
import { PODCASTS, SOCIAL } from '../data/site'

const YOUTUBE = SOCIAL.find((s) => s.label === 'YouTube')?.href ?? '#'

export function Podcasts() {
  return (
    <>
      <Hero
        kicker="FangledCast"
        title="Conversations on strategy, sales, and exit planning"
        subtitle="Practical frameworks and real-world stories with founders, marketers, and operators from the Fangled network."
        cta="Subscribe on YouTube"
        ctaHref={YOUTUBE}
        drawing={<Illustration name="podcast" animate className="mx-auto h-64 w-full max-w-md" />}
      />

      <section className="border-t border-hairline-gray px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.08] text-ink-teal">Recent episodes</h2>
            <p className="tabular text-body-sm text-fog-gray">{PODCASTS.length} episodes · updated monthly</p>
          </div>
          <div className="border-b border-hairline-gray">
            {PODCASTS.map((episode) => (
              <PodcastCard key={episode.title} title={episode.title} duration={episode.duration} href={YOUTUBE} />
            ))}
          </div>
          <div className="mt-10">
            <PillButton href={YOUTUBE} variant="secondary" icon="arrow-up-right">
              Watch more on YouTube
            </PillButton>
          </div>
        </div>
      </section>
    </>
  )
}

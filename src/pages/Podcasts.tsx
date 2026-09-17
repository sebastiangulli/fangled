import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { PodcastCard } from '../components/PodcastCard'
import { PillButton } from '../components/PillButton'
import { PODCASTS } from '../data/site'

export function Podcasts() {
  return (
    <>
      <Hero
        kicker="FangledCast"
        title="Recent Podcast Episodes"
        subtitle="Conversations with founders, marketers, sales leaders, and exit planners about building advocates and scaling businesses."
        cta="Subscribe on YouTube"
        ctaHref="https://www.youtube.com/channel/UCp7ZKlIqWN9I68OXFHCerWQ"
      />

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            kicker="On the air"
            title="Strategy, Sales, and Exit Planning"
            subtitle="Listen in as we share practical frameworks and real-world stories from the Fangled network."
            className="mb-12"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PODCASTS.map((episode) => (
              <PodcastCard key={episode.title} title={episode.title} duration={episode.duration} />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <PillButton href="https://www.youtube.com/channel/UCp7ZKlIqWN9I68OXFHCerWQ" variant="secondary">
              Watch more on YouTube
            </PillButton>
          </div>
        </div>
      </section>
    </>
  )
}

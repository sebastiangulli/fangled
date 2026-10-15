import { Button } from '../components/Button'
import { CtaPanel, EpisodeGrid, Eyebrow, FeaturedEpisode, PageHeader } from '../components/Sections'
import { SocialIcon } from '../components/SocialIcon'
import { PODCASTS, youtube } from '../data/site'
import podcasts from '../content/podcasts.json'

export function Podcasts() {
  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>{podcasts.eyebrow}</Eyebrow>}
        title={podcasts.title}
        intro={podcasts.intro}
        actions={
          <Button href={youtube()}>
            <SocialIcon name="YouTube" className="h-4.5 w-4.5" />
            {podcasts.subscribeLabel}
          </Button>
        }
      />

      <section className="wrap py-24 md:py-32">
        <div data-reveal>
          <FeaturedEpisode episode={PODCASTS[0]} />
        </div>
        <h2 data-reveal className="mt-24 text-display-md text-ink">{podcasts.moreTitle}</h2>
        <div className="mt-10">
          <EpisodeGrid episodes={PODCASTS.slice(1)} offset={1} />
        </div>
      </section>

      <CtaPanel title={podcasts.cta.title} />
    </>
  )
}

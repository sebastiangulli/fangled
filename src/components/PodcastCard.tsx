import { Icon } from './Icon'

export function PodcastCard({
  title,
  duration,
  href,
}: {
  title: string
  duration: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-4 border-t border-hairline-gray py-4 transition-colors duration-200 hover:bg-pale-mist"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink-teal text-ink-teal transition-colors duration-200 group-hover:border-ember-orange group-hover:bg-ember-orange group-hover:text-chalk-white">
        <Icon name="play" className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1 text-body leading-snug font-medium text-ink-teal">{title}</span>
      <span className="tabular shrink-0 text-body-sm text-fog-gray">{duration}</span>
    </a>
  )
}

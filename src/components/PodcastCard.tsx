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
      className="group flex items-center gap-4 border-t border-line py-4 transition-colors duration-200 hover:bg-paper"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink text-ink transition-colors duration-200 group-hover:border-taupe group-hover:bg-taupe group-hover:text-white">
        <Icon name="play" className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1 text-body leading-snug font-medium text-ink">{title}</span>
      <span className="tabular shrink-0 text-body-sm text-muted">{duration}</span>
    </a>
  )
}

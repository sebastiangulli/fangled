import { Icon } from './Icon'

export function PodcastCard({
  title,
  duration,
}: {
  title: string
  duration: string
}) {
  return (
    <div className="group flex items-start gap-5 rounded-lg border border-hairline-gray bg-chalk-white p-5 transition-colors hover:border-slate-veil">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-signal-blue text-chalk-white group-hover:bg-info-indigo">
        <Icon name="play" className="h-5 w-5" />
      </div>
      <div>
        <h3 className="text-base leading-base font-medium text-ink-teal">{title}</h3>
        <p className="mt-1 text-xs leading-xs text-fog-gray">{duration}</p>
      </div>
    </div>
  )
}

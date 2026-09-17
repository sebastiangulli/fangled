import { Icon } from './Icon'

export function ServiceList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div className="rounded-lg border border-hairline-gray bg-chalk-white p-6 md:p-8">
      <h3 className="text-xl leading-xl font-medium text-ink-teal">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-sm text-slate-veil">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-soft-sky text-info-indigo">
              <Icon name="check" className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

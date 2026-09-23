export function ServiceList({
  title,
  items,
}: {
  title: string
  items: string[]
}) {
  return (
    <div>
      <h3 className="border-b border-ink pb-3 text-subheading leading-subheading font-medium text-ink">
        {title}
      </h3>
      <ul className="divide-y divide-line">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 py-3 text-body-sm leading-body-sm text-slate">
            <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-taupe" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

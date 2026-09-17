export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'left',
  className = '',
}: {
  kicker?: string
  title: React.ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} max-w-3xl ${className}`}>
      {kicker && (
        <span className="mb-1.5 block text-sm leading-sm text-fog-gray">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl leading-3xl font-medium text-ink-teal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-lg text-slate-veil">
          {subtitle}
        </p>
      )}
    </div>
  )
}

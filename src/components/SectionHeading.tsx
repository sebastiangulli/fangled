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
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} max-w-3xl ${className}`}>
      {kicker && (
        <p
          className={`mb-3 flex items-center gap-3 text-body-sm text-fog-gray ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span aria-hidden="true" className="h-px w-6 bg-ember-orange" />
          {kicker}
        </p>
      )}
      <h2 className="text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.08] text-ink-teal text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-[58ch] text-subheading leading-subheading text-slate-veil">
          {subtitle}
        </p>
      )}
    </div>
  )
}

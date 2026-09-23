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
          className={`mb-4 flex items-center gap-3 text-body-sm font-medium text-brand ${
            centered ? 'justify-center' : ''
          }`}
        >
          <span aria-hidden="true" className="h-[2px] w-7 bg-taupe" />
          {kicker}
        </p>
      )}
      <h2 className="text-[clamp(2rem,3.4vw,3.25rem)] leading-[1.08] text-night text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-[58ch] text-subheading leading-subheading text-slate">
          {subtitle}
        </p>
      )}
    </div>
  )
}

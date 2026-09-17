import { PillButton } from './PillButton'
import { Icon } from './Icon'

export function Hero({
  kicker,
  title,
  subtitle,
  cta,
  ctaTo,
  ctaHref,
}: {
  kicker?: string
  title: React.ReactNode
  subtitle?: string
  cta?: string
  ctaTo?: string
  ctaHref?: string
}) {
  return (
    <section className="bg-chalk-white px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto max-w-[1280px] text-center">
        {kicker && (
          <span className="mb-4 block text-sm leading-sm text-fog-gray">
            {kicker}
          </span>
        )}
        <h1 className="mx-auto max-w-[800px] text-5xl leading-5xl font-normal text-ink-teal text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-[560px] text-lg leading-lg text-slate-veil text-balance">
            {subtitle}
          </p>
        )}
        {cta && (ctaTo || ctaHref) && (
          <div className="mt-10 flex justify-center">
            <PillButton to={ctaTo} href={ctaHref} variant="primary">
              {cta}
            </PillButton>
          </div>
        )}
      </div>
    </section>
  )
}

export function HeroIcon({
  color,
  icon,
}: {
  color: 'blue' | 'orange'
  icon: 'diamond' | 'arrow-up'
}) {
  const bg = color === 'blue' ? 'bg-signal-blue' : 'bg-ember-orange'
  return (
    <span className={`mx-1 inline-flex h-10 w-10 items-center justify-center rounded-full align-middle md:h-12 md:w-12 ${bg}`}>
      <Icon name={icon} className="h-4 w-4 text-chalk-white md:h-5 md:w-5" />
    </span>
  )
}

export function HeroOutline({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-full border border-ink-teal px-3 py-0.5 align-middle text-ink-teal">
      {children}
    </span>
  )
}

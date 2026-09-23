import { PillButton } from './PillButton'
import { Icon } from './Icon'

export function Hero({
  kicker,
  title,
  subtitle,
  cta,
  ctaTo,
  ctaHref,
  secondaryCta,
  secondaryTo,
  drawing,
}: {
  kicker?: string
  title: React.ReactNode
  subtitle?: string
  cta?: string
  ctaTo?: string
  ctaHref?: string
  secondaryCta?: string
  secondaryTo?: string
  drawing?: React.ReactNode
}) {
  return (
    <section className="px-6 pb-16 pt-14 md:pb-20 md:pt-20">
      <div className={`mx-auto max-w-[1280px] ${drawing ? 'grid items-center gap-12 lg:grid-cols-2 lg:gap-16' : ''}`}>
        <div>
          {kicker && (
            <p className="mb-5 flex items-center gap-3 text-body-sm text-fog-gray">
              <span aria-hidden="true" className="h-px w-6 bg-ember-orange" />
              {kicker}
            </p>
          )}
          <h1 className="max-w-[22ch] text-[clamp(2.6rem,5.4vw,4.5rem)] leading-[1.02] text-ink-teal text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-[52ch] text-subheading leading-subheading text-slate-veil">
              {subtitle}
            </p>
          )}
          {cta && (ctaTo || ctaHref) && (
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <PillButton to={ctaTo} href={ctaHref} variant="primary">
                {cta}
              </PillButton>
              {secondaryCta && secondaryTo && (
                <PillButton to={secondaryTo} variant="secondary">
                  {secondaryCta}
                </PillButton>
              )}
            </div>
          )}
        </div>
        {drawing && <div className="mt-12 lg:mt-0">{drawing}</div>}
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
    <span className={`mx-1 inline-flex h-9 w-9 items-center justify-center rounded-full align-middle md:h-11 md:w-11 ${bg}`}>
      <Icon name={icon} className="h-3.5 w-3.5 text-chalk-white md:h-4 md:w-4" />
    </span>
  )
}

export function HeroOutline({ children }: { children: React.ReactNode }) {
  return (
    <span className="mx-1 inline-block rounded-pill border border-ink-teal px-3 py-0.5 align-middle font-display text-ink-teal italic">
      {children}
    </span>
  )
}

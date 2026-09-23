import { PillButton } from './PillButton'

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
    <section className="border-b border-line bg-stone px-6 py-14 md:py-20">
      <div className={`mx-auto max-w-[1280px] ${drawing ? 'grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16' : ''}`}>
        <div>
          {kicker && (
            <p className="mb-5 flex items-center gap-3 text-body-sm font-medium text-brand">
              <span aria-hidden="true" className="h-[2px] w-7 bg-taupe" />
              {kicker}
            </p>
          )}
          <h1 className="max-w-[22ch] text-[clamp(2.6rem,5vw,4.25rem)] leading-[1.04] text-night text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-[58ch] text-subheading leading-[1.65] text-slate">
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
        {drawing && <div className="rounded-[1.5rem] border border-line bg-paper p-7 shadow-[0_22px_60px_-48px_#153f56] lg:p-10">{drawing}</div>}
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Illustration } from './Illustration'
import { Icon } from './Icon'

type Tone = 'brand' | 'taupe'

export function FeatureCard({
  title,
  description,
  to,
  illustration,
  tone = 'brand',
  className = '',
}: {
  title: string
  description: string
  to: string
  illustration: 'marketing' | 'trade' | 'cleaners' | 'mixers' | 'cmo' | 'podcast'
  tone?: Tone
  className?: string
}) {
  return (
    <Link
      to={to}
      className={`group flex h-full flex-col rounded-card border border-line bg-white p-6 transition-colors duration-200 hover:border-brand ${className}`}
    >
      <div className="flex h-48 items-center justify-center rounded-lg bg-paper p-4">
        <Illustration name={illustration} className="h-full w-full" />
      </div>
      <h3 className="mt-5 text-heading-sm leading-heading-sm font-semibold text-night">{title}</h3>
      <p className="mt-2 text-body-sm leading-body-sm text-slate">{description}</p>
      <span
        className={`mt-5 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 group-hover:translate-x-1 ${
          tone === 'taupe'
            ? 'border-taupe text-taupe group-hover:bg-taupe group-hover:text-white'
            : 'border-brand text-brand group-hover:bg-brand group-hover:text-white'
        }`}
        aria-hidden="true"
      >
        <Icon name="arrow-right" className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}

export function FeatureSurfaceCard({
  title,
  description,
  to,
}: {
  title: string
  description: string
  to: string
}) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col justify-between rounded-card bg-brand p-6 text-white transition-colors duration-200 hover:bg-night md:p-8"
    >
      <div>
        <h3 className="text-heading-sm leading-heading-sm font-medium">{title}</h3>
        <p className="mt-2 text-body-sm leading-body-sm text-white/90">{description}</p>
      </div>
      <span className="mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-white text-ink transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        <Icon name="arrow-right" className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}

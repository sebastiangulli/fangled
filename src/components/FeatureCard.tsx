import { Link } from 'react-router-dom'
import { Illustration } from './Illustration'

type FeatureCardProps = {
  title: string
  description: string
  to: string
  illustration: 'marketing' | 'trade' | 'cleaners' | 'mixers' | 'cmo' | 'podcast'
  className?: string
}

export function FeatureCard({
  title,
  description,
  to,
  illustration,
  className = '',
}: FeatureCardProps) {
  return (
    <Link
      to={to}
      className={`group flex flex-col rounded-lg border border-hairline-gray bg-chalk-white p-6 transition-colors hover:border-slate-veil ${className}`}
    >
      <div className="flex h-44 w-full items-center justify-center">
        <Illustration name={illustration} className="h-full w-full text-ink-teal" />
      </div>
      <h3 className="mt-4 text-xl leading-xl font-medium text-ink-teal">{title}</h3>
      <p className="mt-2 text-sm leading-sm text-slate-veil">{description}</p>
      <span className="mt-auto pt-4 text-sm font-medium text-ink-teal">Learn more →</span>
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
      className="flex flex-col rounded-lg bg-sunset-coral p-6 text-chalk-white transition-colors hover:bg-ember-orange md:p-8"
    >
      <h3 className="text-xl leading-xl font-medium">{title}</h3>
      <p className="mt-2 text-sm leading-sm text-white/90">{description}</p>
      <span className="mt-auto pt-4 text-sm font-medium">Learn more →</span>
    </Link>
  )
}

export function CardRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="no-scrollbar -mx-6 flex gap-4 overflow-x-auto px-6 md:gap-6">
        {children}
      </div>
    </div>
  )
}

export function ScrollCard({ children }: { children: React.ReactNode }) {
  return <div className="w-[280px] shrink-0 md:w-[320px]">{children}</div>
}

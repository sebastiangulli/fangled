import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Illustration } from './Illustration'
import { Icon } from './Icon'

type Tone = 'blue' | 'orange'

export function FeatureCard({
  title,
  description,
  to,
  illustration,
  tone = 'blue',
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
      className={`group flex h-full flex-col rounded-card border border-hairline-gray bg-chalk-white p-6 transition-colors duration-200 hover:border-ink-teal ${className}`}
    >
      <div className="flex h-44 items-center justify-center border-b border-hairline-gray pb-4">
        <Illustration name={illustration} className="h-full w-full" />
      </div>
      <h3 className="mt-5 text-heading-sm leading-heading-sm font-medium text-ink-teal">{title}</h3>
      <p className="mt-2 text-body-sm leading-body-sm text-slate-veil">{description}</p>
      <span
        className={`mt-5 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-200 group-hover:translate-x-1 ${
          tone === 'orange'
            ? 'border-ember-orange text-ember-orange group-hover:bg-ember-orange group-hover:text-chalk-white'
            : 'border-ink-teal text-ink-teal group-hover:bg-ink-teal group-hover:text-chalk-white'
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
      className="group flex h-full flex-col justify-between rounded-card bg-sunset-coral p-6 text-chalk-white transition-colors duration-200 hover:bg-ember-orange md:p-8"
    >
      <div>
        <h3 className="text-heading-sm leading-heading-sm font-medium">{title}</h3>
        <p className="mt-2 text-body-sm leading-body-sm text-white/90">{description}</p>
      </div>
      <span className="mt-6 flex h-8 w-8 items-center justify-center rounded-full bg-chalk-white text-ink-teal transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
        <Icon name="arrow-right" className="h-3.5 w-3.5" />
      </span>
    </Link>
  )
}

export function CardRow({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [at, setAt] = useState({ left: true, right: false })

  const sync = () => {
    const el = ref.current
    if (!el) return
    setAt({ left: el.scrollLeft <= 4, right: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 })
  }

  const nudge = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        onScroll={sync}
        className="no-scrollbar -mx-6 flex snap-x gap-4 overflow-x-auto px-6 md:gap-6"
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between md:flex">
        {([-1, 1] as const).map((dir) => {
          const disabled = dir === -1 ? at.left : at.right
          return (
            <button
              key={dir}
              type="button"
              onClick={() => nudge(dir)}
              disabled={disabled}
              aria-label={dir === -1 ? 'Scroll left' : 'Scroll right'}
              className={`pointer-events-auto -mx-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink-teal text-chalk-white transition-all duration-200 hover:bg-[#1b333b] disabled:opacity-25 disabled:hover:bg-ink-teal ${
                disabled ? 'cursor-default' : ''
              }`}
            >
              <Icon name={dir === -1 ? 'chevron-left' : 'chevron-right'} className="h-4 w-4" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function ScrollCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[280px] shrink-0 snap-start md:w-[320px]">
      {children}
    </div>
  )
}

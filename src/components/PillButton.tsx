import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type Variant = 'primary' | 'secondary' | 'inverse'

export function PillButton({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon = 'arrow-right',
  className = '',
  type = 'button',
}: {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: Variant
  icon?: false | 'arrow-right' | 'arrow-up-right'
  className?: string
  type?: 'button' | 'submit'
}) {
  const base =
    'group inline-flex items-center gap-2 rounded-pill px-6 py-3 text-body font-medium transition-colors duration-200'
  const styles: Record<Variant, string> = {
    primary: 'bg-ink-teal text-chalk-white hover:bg-[#1b333b]',
    secondary: 'border border-ink-teal text-ink-teal hover:bg-pale-mist',
    inverse: 'bg-chalk-white text-ink-teal hover:bg-soft-sky',
  }
  const classes = `${base} ${styles[variant]} ${className}`
  const iconEl = icon && (
    <span
      className={`flex h-4 w-4 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-0.5 ${
        variant === 'secondary' ? 'bg-ink-teal text-chalk-white' : 'bg-ember-orange text-chalk-white'
      }`}
    >
      <Icon name={icon} className="h-2.5 w-2.5" />
    </span>
  )

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={classes}>
        {children}
        {iconEl}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
        {iconEl}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {iconEl}
    </button>
  )
}

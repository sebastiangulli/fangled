import { Link } from 'react-router-dom'
import { Icon } from './Icon'

type Variant = 'primary' | 'secondary'

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
    'inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-medium transition-colors'
  const styles: Record<Variant, string> = {
    primary: 'bg-ink-teal text-chalk-white hover:bg-slate-veil',
    secondary: 'border border-ink-teal text-ink-teal bg-transparent hover:bg-ink-teal hover:text-chalk-white',
  }
  const classes = `${base} ${styles[variant]} ${className}`
  const iconEl = icon && (
    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-chalk-white text-ink-teal">
      <Icon name={icon} className="h-2.5 w-2.5" />
    </span>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {iconEl}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes}>
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

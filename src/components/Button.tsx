import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

type Variant = 'primary' | 'secondary' | 'light' | 'ghost-light'

const styles: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.18),0_1px_2px_rgb(0_60_95/0.3),0_6px_16px_-6px_rgb(0_80_126/0.6)] hover:bg-brand-deep',
  secondary: 'bg-white text-ink shadow-card ring-1 ring-line ring-inset hover:ring-ink/20',
  light: 'bg-white text-ink hover:bg-sky-soft',
  'ghost-light': 'text-white ring-1 ring-white/25 ring-inset hover:bg-white/10 hover:ring-white/50',
}

export function Button({
  children,
  to,
  href,
  variant = 'primary',
  type = 'button',
  arrow = false,
  disabled,
  className = '',
}: {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  type?: 'button' | 'submit'
  arrow?: boolean
  disabled?: boolean
  className?: string
}) {
  const cls = `group inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-small font-medium whitespace-nowrap transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 ${styles[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  )
  if (to) return <Link to={to} className={cls}>{content}</Link>
  if (href) {
    const external = href.startsWith('http')
    return (
      <a href={href} className={cls} {...(external && { target: '_blank', rel: 'noreferrer' })}>
        {content}
      </a>
    )
  }
  return <button type={type} disabled={disabled} className={cls}>{content}</button>
}

export function TextLink({ to, children, className = '' }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={`group inline-flex items-center gap-1.5 text-small font-medium text-brand hover:text-brand-deep ${className}`}>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  )
}

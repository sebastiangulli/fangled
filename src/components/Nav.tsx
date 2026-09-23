import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../data/site'
import { Icon } from './Icon'
import { PillButton } from './PillButton'

export function BrandMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <polygon points="16,3 28,9.5 16,16 4,9.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <polygon points="4,9.5 16,16 16,29 4,22.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <polygon points="28,9.5 16,16 16,29 28,22.5" fill="#fa4e1d" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(() => window.scrollY > 8)
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 border-b bg-chalk-white transition-shadow duration-300 ${
        scrolled ? 'border-hairline-gray shadow-[0_1px_0_0_#e9eef0]' : 'border-hairline-gray'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 text-heading-sm font-medium text-ink-teal">
          <BrandMark />
          Fangled
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 text-body-sm transition-colors duration-200 ${
                isActive(item.path)
                  ? 'font-medium text-ink-teal'
                  : 'text-slate-veil hover:text-ink-teal'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-ember-orange transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+18884275609"
            className="tabular text-body-sm text-slate-veil transition-colors hover:text-ink-teal"
          >
            888.427.5609
          </a>
          <PillButton to="/contact" variant="primary" className="px-5 py-2 text-body-sm">
            Book a strategy call
          </PillButton>
        </div>

        <button
          type="button"
          className="p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6 text-ink-teal" />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-16 w-full border-b border-hairline-gray bg-chalk-white px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-body ${
                  isActive(item.path) ? 'font-medium text-ink-teal' : 'text-slate-veil'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <PillButton to="/contact" variant="primary" className="mt-2 w-fit" onClick={() => setOpen(false)}>
              Book a strategy call
            </PillButton>
          </nav>
        </div>
      )}
    </header>
  )
}

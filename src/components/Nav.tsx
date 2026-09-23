import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../data/site'
import { Icon } from './Icon'
import { PillButton } from './PillButton'
import logoUrl from '../../fangled-group-logo.svg'
import markUrl from '../../fangled-group-logomark.svg'

export function BrandMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return <img src={markUrl} alt="" className={className} />
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
      className={`sticky top-0 z-40 border-b bg-paper/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-[0_8px_30px_-24px_#153f56]' : 'border-line'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-8 px-6">
        <Link to="/" className="shrink-0" aria-label="Fangled Group home">
          <img src={logoUrl} alt="Fangled Group" className="h-[34px] w-auto sm:h-[38px]" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative py-1 text-body-sm transition-colors duration-200 ${
                isActive(item.path)
                  ? 'font-medium text-ink'
                  : 'text-slate hover:text-ink'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'w-0'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
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
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6 text-ink" />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-[76px] w-full border-b border-line bg-paper px-6 py-6 shadow-lg lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-body ${
                  isActive(item.path) ? 'font-medium text-ink' : 'text-slate'
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

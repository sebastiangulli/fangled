import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV } from '../data/site'
import { Icon } from './Icon'
import { PillButton } from './PillButton'

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-xl font-medium text-ink-teal">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-teal text-chalk-white">
        <span className="text-sm font-medium">F</span>
      </span>
      Fangled
    </Link>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-hairline-gray bg-chalk-white/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6">
        <Logo />

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm transition-colors ${
                isActive(item.path)
                  ? 'font-medium text-signal-blue'
                  : 'text-ink-teal hover:text-slate-veil'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Icon name="globe" className="h-4 w-4 text-ink-teal" />
          <PillButton to="/contact" variant="primary" className="px-5 py-2 text-sm">
            Book a demo
          </PillButton>
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6 text-ink-teal" />
        </button>
      </div>

      {open && (
        <div className="absolute left-0 top-16 w-full border-b border-hairline-gray bg-chalk-white px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`text-base ${
                  isActive(item.path) ? 'font-medium text-signal-blue' : 'text-ink-teal'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <PillButton to="/contact" variant="primary" className="mt-2 w-fit">
              Book a demo
            </PillButton>
          </nav>
        </div>
      )}
    </header>
  )
}

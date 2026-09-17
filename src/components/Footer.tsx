import { Link } from 'react-router-dom'
import { COMPANY, SOCIAL } from '../data/site'
import { Icon } from './Icon'

const iconFor = (label: string) => {
  const map: Record<string, 'linkedin' | 'facebook' | 'x' | 'youtube'> = {
    LinkedIn: 'linkedin',
    Facebook: 'facebook',
    X: 'x',
    YouTube: 'youtube',
  }
  return map[label] || 'x'
}

export function Footer() {
  return (
    <footer className="border-t border-hairline-gray bg-pale-mist py-16 text-ink-teal">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-medium">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink-teal text-chalk-white">
              <span className="text-sm font-medium">F</span>
            </span>
            Fangled Group
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-sm text-slate-veil">
            Fractional CMO and business growth consultancy. Strategy first — here and abroad.
          </p>
          <div className="mt-6 flex gap-4">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-slate-veil hover:text-ink-teal"
                aria-label={item.label}
              >
                <Icon name={iconFor(item.label)} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs leading-xs font-medium uppercase tracking-wider text-fog-gray">
            Services
          </h3>
          <ul className="space-y-2 text-sm leading-sm text-slate-veil">
            <li><Link to="/marketing-and-sales-consulting" className="hover:text-ink-teal">Marketing & Sales Consulting</Link></li>
            <li><Link to="/global-trade-and-sourcing" className="hover:text-ink-teal">Global Trade & Sourcing</Link></li>
            <li><Link to="/about" className="hover:text-ink-teal">Fractional CMO</Link></li>
            <li><Link to="/podcasts" className="hover:text-ink-teal">Podcasts</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs leading-xs font-medium uppercase tracking-wider text-fog-gray">
            Contact
          </h3>
          <ul className="space-y-2 text-sm leading-sm text-slate-veil">
            <li><a href={COMPANY.phoneHref} className="hover:text-ink-teal">{COMPANY.phone}</a></li>
            <li><a href={`mailto:${COMPANY.email}`} className="hover:text-ink-teal">{COMPANY.email}</a></li>
            <li>{COMPANY.location}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-[1280px] flex-col items-center justify-between gap-4 border-t border-hairline-gray px-6 pt-8 text-xs leading-xs text-fog-gray md:flex-row">
        <p>©{new Date().getFullYear()} {COMPANY.fullName} · <Link to="/privacy" className="hover:text-ink-teal">Privacy & Legal</Link> · <Link to="/contact" className="hover:text-ink-teal">Contact</Link></p>
        <p>Strategy first.</p>
      </div>
    </footer>
  )
}

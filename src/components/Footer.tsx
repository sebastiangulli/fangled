import { Link } from 'react-router-dom'
import { COMPANY, SOCIAL } from '../data/site'
import { Icon } from './Icon'
import logoUrl from '../../fangled-group-logo.svg'

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
    <footer className="bg-night px-6 pb-10 pt-16 text-white">
      <div className="mx-auto max-w-[1280px]">
        <p className="max-w-3xl font-sans text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.08] text-balance">
          Strategy first — here and abroad.
        </p>

        <div className="mt-12 grid gap-12 border-t border-white/15 pt-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex rounded-lg bg-paper px-4 py-3" aria-label="Fangled Group home">
              <img src={logoUrl} alt="Fangled Group" className="h-9 w-auto" />
            </Link>
            <p className="mt-4 max-w-sm text-body-sm leading-body-sm text-white/70">
              Fractional CMO and business growth consultancy for B2B brands, in the U.S. and in global markets.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors duration-200 hover:border-taupe hover:text-taupe"
                  aria-label={item.label}
                >
                  <Icon name={iconFor(item.label)} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-body-sm font-medium text-white">Services</h3>
            <ul className="space-y-2 text-body-sm leading-body-sm text-white/70">
              <li><Link to="/marketing-and-sales-consulting" className="transition-colors hover:text-white">Marketing & Sales Consulting</Link></li>
              <li><Link to="/global-trade-and-sourcing" className="transition-colors hover:text-white">Global Trade & Sourcing</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-white">Fractional CMO</Link></li>
              <li><Link to="/podcasts" className="transition-colors hover:text-white">Podcasts</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-body-sm font-medium text-white">Contact</h3>
            <ul className="space-y-2 text-body-sm leading-body-sm text-white/70">
              <li><a href={COMPANY.phoneHref} className="tabular transition-colors hover:text-white">{COMPANY.phone}</a></li>
              <li><a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-white">{COMPANY.email}</a></li>
              <li>{COMPANY.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 text-caption leading-caption text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.fullName} ·{' '}
            <Link to="/privacy" className="transition-colors hover:text-white">Privacy & Legal</Link> ·{' '}
            <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
          </p>
          <p className="tabular">Moreland Hills, Ohio · 41.5°N 81.4°W</p>
        </div>
      </div>
    </footer>
  )
}

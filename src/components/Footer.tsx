import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY, SOCIAL } from '../data/site'
import site from '../content/site.json'
import { SocialIcon } from './SocialIcon'
import logoUrl from '../../fangled-group-logo.svg'
import markUrl from '../../fangled-group-logomark.svg'

const f = site.footer

const CONTACT = [
  { icon: Phone, label: `${COMPANY.phone} ${f.tollFree}`, href: COMPANY.phoneHref },
  { icon: Mail, label: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: COMPANY.location },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">
      <img
        src={markUrl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-28 w-[720px] max-w-none opacity-[0.05] brightness-0 invert"
      />
      <div className="wrap relative grid gap-12 pt-20 pb-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
        <div>
          <Link to="/" aria-label="Fangled Group home" className="inline-block">
            <img src={logoUrl} alt="" className="h-7 w-auto brightness-0 invert" />
          </Link>
          <p className="mt-5 max-w-[30ch] text-small text-white/60">{f.tagline}</p>
          <ul className="mt-7 flex gap-2">
            {SOCIAL.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/70 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <SocialIcon name={s.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {f.columns.map((col) => (
          <div key={col.title}>
            <h2 className="text-small font-medium text-white">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-small text-white/60 transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="text-small font-medium text-white">{f.contactTitle}</h2>
          <ul className="mt-4 space-y-3">
            {CONTACT.map((c) => {
              const inner = (
                <>
                  <c.icon aria-hidden="true" className="h-4 w-4 shrink-0 text-sky" />
                  {c.label}
                </>
              )
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className="flex items-center gap-2.5 text-small text-white/60 transition-colors hover:text-white">{inner}</a>
                  ) : (
                    <span className="flex items-center gap-2.5 text-small text-white/60">{inner}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <p className="wrap relative pb-6 text-caption text-white/40">{f.disclaimer}</p>
      <div className="wrap relative flex flex-col gap-3 border-t border-white/10 py-6 text-caption text-white/50 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {f.copyright}</p>
        <Link to="/privacy" className="hover:text-white">{f.privacyLabel}</Link>
      </div>
    </footer>
  )
}

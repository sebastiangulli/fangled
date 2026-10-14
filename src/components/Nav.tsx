import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Blend, ChevronDown, Droplets, Menu, Phone, X } from 'lucide-react'
import { COMPANY, PRACTICES, PRODUCTS as PRODUCT_PAGES } from '../data/site'
import site from '../content/site.json'
import { Button } from './Button'
import logoUrl from '../../fangled-group-logo.svg'

const PRODUCT_ICONS = { 'ph-neutral-cleaners': Droplets, 'drum-and-ibc-mixers': Blend } as const
const PRODUCTS = Object.entries(PRODUCT_PAGES).map(([slug, p]) => ({
  label: p.navLabel,
  to: `/products/${slug}`,
  icon: PRODUCT_ICONS[slug as keyof typeof PRODUCT_ICONS] ?? Blend,
}))

const LINKS = site.nav.links

const linkCls = ({ isActive }: { isActive: boolean }) =>
  `rounded-full px-3.5 py-2 text-small font-medium transition-colors ${isActive ? 'text-brand' : 'text-ink-2 hover:text-ink'}`

export function Nav() {
  const [mega, setMega] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const megaRef = useRef<HTMLLIElement>(null)
  const { pathname } = useLocation()
  const inServices = PRACTICES.some((p) => p.to.split('#')[0] === pathname && pathname !== '/about')

  // Glass once the page moves; tuck away while reading down, return on any scroll up.
  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 12)
      if (y > 480 && y > last + 4) setHidden(true)
      else if (y < last - 4) setHidden(false)
      last = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mega && !mobile) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMega(false)
        setMobile(false)
      }
    }
    const onDown = (e: PointerEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMega(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onDown)
    document.body.style.overflow = mobile ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onDown)
      document.body.style.overflow = ''
    }
  }, [mega, mobile])

  // Any link click inside a menu closes it.
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a')) {
      setMega(false)
      setMobile(false)
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] ${
        hidden && !mega && !mobile ? '-translate-y-[130%]' : ''
      }`}
    >
      <div
        className={`relative mx-auto flex h-14 max-w-[1180px] items-center justify-between gap-4 rounded-full pr-2 pl-5 transition-[background-color,box-shadow] duration-300 ${
          scrolled || mega || mobile ? 'bg-white/85 shadow-pop ring-1 ring-line backdrop-blur-xl' : ''
        }`}
      >
        <Link to="/" className="shrink-0" aria-label="Fangled Group home">
          <img src={logoUrl} alt="" className="h-6 w-auto" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            <li ref={megaRef} onMouseLeave={() => setMega(false)}>
              <button
                type="button"
                aria-expanded={mega}
                aria-controls="mega-menu"
                onClick={() => setMega(!mega)}
                onMouseEnter={() => setMega(true)}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-small font-medium transition-colors ${inServices ? 'text-brand' : 'text-ink-2 hover:text-ink'}`}
              >
                {site.nav.servicesLabel}
                <ChevronDown aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${mega ? 'rotate-180' : ''}`} />
              </button>
              {mega && (
                <div id="mega-menu" onClick={closeOnLink} className="absolute top-full left-1/2 w-[780px] -translate-x-1/2 pt-3">
                  <div className="grid animate-fade grid-cols-[1fr_1fr_220px] gap-1 rounded-3xl bg-white p-2 shadow-pop ring-1 ring-line">
                    {PRACTICES.map((p) => (
                      <Link key={p.title} to={p.to} className="group flex gap-3.5 rounded-2xl p-4 transition-colors hover:bg-soft">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                          <p.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                        </span>
                        <span>
                          <span className="block text-small font-medium text-ink">{p.title}</span>
                          <span className="mt-0.5 line-clamp-2 text-caption text-mute">{p.body}</span>
                        </span>
                      </Link>
                    ))}
                    <div className="col-start-3 row-span-2 row-start-1 flex flex-col rounded-2xl bg-night p-5 text-white">
                      <p className="text-caption text-white/60">{site.nav.productsTitle}</p>
                      <ul className="mt-3 space-y-1">
                        {PRODUCTS.map((p) => (
                          <li key={p.to}>
                            <Link to={p.to} className="-mx-2 flex items-center gap-2.5 rounded-lg px-2 py-2 text-small transition-colors hover:bg-white/10">
                              <p.icon aria-hidden="true" className="h-4 w-4 text-sky" strokeWidth={1.75} />
                              {p.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact" className="mt-auto flex items-center gap-1 pt-6 text-small font-medium text-sky hover:text-white">
                        {site.bookCall}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} className={linkCls}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 lg:flex">
          <a href={COMPANY.phoneHref} className="flex items-center gap-2 rounded-full px-3.5 py-2 text-small font-medium text-ink-2 hover:text-ink">
            <Phone aria-hidden="true" className="h-4 w-4" />
            {COMPANY.phone}
          </a>
          <Button to="/contact" className="h-10">{site.bookCall}</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          onClick={() => setMobile(!mobile)}
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
        >
          {mobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobile && (
        <nav id="mobile-menu" aria-label="Mobile" onClick={closeOnLink} className="fixed inset-x-0 top-[4.75rem] bottom-0 animate-fade overflow-y-auto bg-white lg:hidden">
          <div className="wrap pt-2 pb-10">
            <p className="text-caption text-mute">{site.nav.servicesLabel}</p>
            <ul className="mt-1">
              {PRACTICES.map((p) => (
                <li key={p.title}>
                  <Link to={p.to} className="flex items-center gap-3.5 py-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-soft text-brand">
                      <p.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <span className="text-title text-ink">{p.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 border-t border-line">
              {[...PRODUCTS, ...LINKS].map((l) => (
                <li key={l.to} className="border-b border-line">
                  <NavLink to={l.to} className={({ isActive }) => `block py-4 text-title ${isActive ? 'text-brand' : 'text-ink'}`}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Button to="/contact">{site.bookCall}</Button>
              <Button href={COMPANY.phoneHref} variant="secondary">{site.callPrefix} {COMPANY.phone}</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

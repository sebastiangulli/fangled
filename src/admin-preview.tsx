// Live preview for /admin: renders the real site pages inside Decap's preview pane.
// Loaded into the preview iframe by public/admin/register.js; each edit calls update() with the draft entry.
import type { ComponentType } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { useReveal } from './lib/useReveal'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { GlobalTrade } from './pages/GlobalTrade'
import { Home } from './pages/Home'
import { Marketing } from './pages/Marketing'
import { Podcasts } from './pages/Podcasts'
import { Privacy } from './pages/Privacy'
import { Product } from './pages/Product'
import about from './content/about.json'
import contact from './content/contact.json'
import globalTrade from './content/global-trade.json'
import home from './content/home.json'
import marketing from './content/marketing.json'
import podcasts from './content/podcasts.json'
import privacy from './content/privacy.json'
import products from './content/products.json'
import shared from './content/shared.json'
import site from './content/site.json'

type Json = Record<string, unknown> | unknown[]

// Decap entry name -> content file it edits, and the page that shows it.
const ENTRIES: Record<string, { data: Json; route: string; page: ComponentType }> = {
  home: { data: home, route: '/', page: Home },
  about: { data: about, route: '/about', page: About },
  marketing: { data: marketing, route: '/marketing-and-sales-consulting', page: Marketing },
  'global-trade': { data: globalTrade, route: '/global-trade-and-sourcing', page: GlobalTrade },
  podcasts: { data: podcasts, route: '/podcasts', page: Podcasts },
  contact: { data: contact, route: '/contact', page: Contact },
  privacy: { data: privacy, route: '/privacy', page: Privacy },
  products: { data: products, route: '/products/ph-neutral-cleaners', page: Product },
  site: { data: site, route: '/', page: Home },
  shared: { data: shared, route: '/', page: Home },
}

const isContainer = (v: unknown): v is Json => typeof v === 'object' && v !== null

/** Overwrite `target` with `src` in place, so every module holding a reference to the JSON sees the draft. */
function sync(target: Json, src: Json) {
  if (Array.isArray(target) && Array.isArray(src)) {
    target.length = src.length
    src.forEach((v, i) => {
      const t = target[i]
      if (isContainer(v) && isContainer(t) && Array.isArray(v) === Array.isArray(t)) sync(t, v)
      else target[i] = v
    })
    return
  }
  const t = target as Record<string, unknown>
  const s = src as Record<string, unknown>
  for (const k of Object.keys(t)) if (!(k in s)) delete t[k]
  for (const [k, v] of Object.entries(s)) {
    const cur = t[k]
    if (isContainer(v) && isContainer(cur) && Array.isArray(v) === Array.isArray(cur)) sync(cur, v)
    else t[k] = v
  }
}

function Preview({ name }: { name: string }) {
  useReveal()
  const { route, page: Page } = ENTRIES[name]
  return (
    <MemoryRouter key={name} initialEntries={[route]}>
      <div className="flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">
          <Routes>
            <Route path="/products/:slug" element={<Product />} />
            <Route path="*" element={<Page />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </MemoryRouter>
  )
}

let root: Root | undefined

;(window as unknown as { __fangledPreview: unknown }).__fangledPreview = {
  update(name: string, data: Json) {
    const entry = ENTRIES[name]
    if (!entry) return
    sync(entry.data, data)
    if (!root) {
      const el = document.createElement('div')
      document.body.appendChild(el)
      root = createRoot(el)
    }
    root.render(<Preview name={name} />)
  },
}

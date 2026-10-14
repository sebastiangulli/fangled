// Adapter over the editable copy in src/content/*.json (managed from /admin with Decap CMS).
// Text lives in the JSON files; this file only adds what JSON can't hold: icon components and derived values.
import { CalendarCheck, Compass, Flag, Globe2, Handshake, HeartHandshake, Layers, Rocket, Target, UserRound, UsersRound, type LucideIcon } from 'lucide-react'
import site from '../content/site.json'
import shared from '../content/shared.json'
import productsContent from '../content/products.json'

// Keep these names in sync with the icon `select` options in public/admin/config.yml.
const ICONS: Record<string, LucideIcon> = { Target, Globe2, UserRound, Flag, CalendarCheck, Compass, Layers, UsersRound, Handshake, Rocket, HeartHandshake }
export const iconFor = (name: string): LucideIcon => ICONS[name] ?? Target

export const COMPANY = { ...site.company, phoneHref: `tel:+1${site.company.phone.replace(/\D/g, '')}` }
export const SOCIAL = site.social
export const YOUTUBE = SOCIAL.find((s) => s.label === 'YouTube')?.href ?? ''
export const FAQ = site.faq.items

export const PRACTICES = shared.practices.map((p) => ({ ...p, icon: iconFor(p.icon) }))
export const GLOBAL_STRATEGY = shared.globalStrategy
export const GLOBAL_SOURCE = shared.globalSource
export const PODCASTS = shared.podcasts

export type Product = (typeof productsContent.items)['ph-neutral-cleaners']
export const PRODUCTS: Record<string, Product> = productsContent.items
export const PRODUCT_CARDS = Object.entries(PRODUCTS).map(([slug, p]) => ({ slug, ...p.card }))

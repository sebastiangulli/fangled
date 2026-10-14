import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ProductVisual } from './Visuals'
import type { PRODUCT_CARDS } from '../data/site'
import products from '../content/products.json'

export function ProductCard({ product, compact = false }: { product: (typeof PRODUCT_CARDS)[number]; compact?: boolean }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="spot group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-line transition-[box-shadow,translate] duration-500 ease-out hover:-translate-y-1 hover:shadow-float"
    >
      <div className={`flex items-center border-b border-line bg-gradient-to-br from-sky-soft/70 via-white to-sand/30 px-8 sm:px-12 ${compact ? 'h-56' : 'h-72'}`}>
        <div className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
          <ProductVisual slug={product.slug} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <p className="text-small font-medium text-brand">{product.label}</p>
        <h3 className="mt-1.5 text-display-md text-ink">{product.title}</h3>
        <p className="mt-3 flex-1 text-body text-mute">{product.body}</p>
        <span className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-brand">
          {products.page.readBrief}
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import {
  CheckList,
  CtaPanel,
  Eyebrow,
  PageHeader,
  SectionHeader,
} from '../components/Sections'
import { stagger } from '../lib/motion'
import { ProductCard } from '../components/ProductCard'
import { Frame, ProductVisual } from '../components/Visuals'
import { PRODUCT_CARDS, PRODUCTS } from '../data/site'
import { NotFound } from './NotFound'

export function Product() {
  const { slug = '' } = useParams()
  const product = PRODUCTS[slug]
  if (!product) return <NotFound />

  return (
    <>
      <PageHeader
        eyebrow={<Eyebrow>{product.kicker}</Eyebrow>}
        title={product.title}
        intro={product.subtitle}
        actions={<Button to="/contact" arrow>Ask about this product</Button>}
        aside={<Frame><ProductVisual slug={slug} /></Frame>}
      />

      <section className="wrap grid gap-6 py-24 md:py-28 lg:grid-cols-[0.4fr_1fr] lg:gap-20">
        <h2 data-reveal className="text-small font-medium text-brand">Overview</h2>
        <p data-reveal style={stagger(1)} className="max-w-[62ch] text-[1.3rem] leading-[1.6] tracking-[-0.01em] text-ink-2">{product.intro}</p>
      </section>

      <section className="bg-soft py-24 md:py-32">
        <div className="wrap gap-5 md:columns-2">
          {product.sections.map((s, i) => (
            <article key={s.heading} data-reveal style={stagger(i % 2)} className="mb-5 break-inside-avoid rounded-3xl bg-white p-7 shadow-card ring-1 ring-line sm:p-9">
              <h2 className="text-display-md text-ink">{s.heading}</h2>
              {s.body && <p className="mt-3 text-body text-mute">{s.body}</p>}
              {s.bullets && s.bullets.length > 0 && <CheckList items={s.bullets} className="mt-6" />}
            </article>
          ))}
        </div>
      </section>

      <section className="wrap py-24 md:py-32">
        <SectionHeader eyebrow="Also launched" title="Another product we brought to market" />
        <div data-reveal className="mt-12 max-w-[36rem]">
          {PRODUCT_CARDS.filter((p) => p.slug !== slug).map((p) => (
            <ProductCard key={p.slug} product={p} compact />
          ))}
        </div>
      </section>

      <div>
        <CtaPanel title="Want this on your line?" body="Tell us about your application. We’ll tell you whether it’s a fit and what a trial looks like." />
      </div>
    </>
  )
}

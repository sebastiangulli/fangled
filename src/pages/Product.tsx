import { useParams } from 'react-router-dom'
import { Button } from '../components/Button'
import { Gallery, PlusCard } from '../components/Gallery'
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
  // First sentence leads in ink, the rest follows muted.
  const cut = product.intro.indexOf('. ') + 1
  const [lead, rest] = cut ? [product.intro.slice(0, cut), product.intro.slice(cut + 1)] : [product.intro, '']

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
        <p data-reveal style={stagger(1)} className="max-w-[56ch] text-[clamp(1.3rem,2.1vw,1.75rem)] leading-[1.4] font-medium tracking-[-0.02em] text-mute">
          <span className="text-ink">{lead}</span> {rest}
        </p>
      </section>

      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader eyebrow="Details" title="Take a closer look" intro="Open any card for the full detail." />
        </div>
        <div className="mt-12">
          <Gallery label={`${product.kicker} details`}>
            {product.sections.map((s, i) => (
              <PlusCard
                key={s.heading}
                eyebrow={product.kicker}
                title={s.heading}
                dark={i % 2 === 1}
                preview={<span className="line-clamp-3">{s.bullets?.[0] ?? s.body}</span>}
              >
                {s.body && <p className="max-w-[60ch] text-lead text-mute">{s.body}</p>}
                {s.bullets && s.bullets.length > 0 && <CheckList items={s.bullets} className="mt-6 md:columns-2 md:gap-10 [&>li]:break-inside-avoid" />}
              </PlusCard>
            ))}
          </Gallery>
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

import { useParams } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { PhScale, VectorDiagram, Illustration } from '../components/Illustration'
import { PRODUCTS } from '../data/site'
import { NotFound } from './NotFound'

function SpecBlock({ heading, body, bullets }: { heading: string; body: string; bullets?: string[] }) {
  return (
    <div>
      <h3 className="border-b border-ink-teal pb-3 text-subheading leading-subheading font-medium text-ink-teal">
        {heading}
      </h3>
      {body && <p className="mt-4 text-body-sm leading-body-sm text-slate-veil">{body}</p>}
      {bullets && bullets.length > 0 && (
        <ul className="divide-y divide-hairline-gray">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-3 py-3 text-body-sm leading-body-sm text-slate-veil">
              <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-ember-orange" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? PRODUCTS[slug] : undefined

  if (!product) return <NotFound />

  const diagram = slug === 'ph-neutral-cleaners' ? <PhScale className="w-full" /> : <VectorDiagram className="mx-auto w-full max-w-lg" />

  return (
    <>
      <Hero
        kicker={product.kicker}
        title={product.title}
        subtitle={product.subtitle}
        drawing={
          <Illustration
            name={slug === 'ph-neutral-cleaners' ? 'cleaners' : 'mixers'}
            animate
            className="mx-auto h-64 w-full max-w-md"
          />
        }
      />

      <section className="border-y border-hairline-gray bg-pale-mist px-6 py-16 md:py-20">
        <div className="mx-auto max-w-[1280px]">
          <p className="mx-auto max-w-[70ch] text-center text-subheading leading-subheading text-slate-veil">
            {product.intro}
          </p>
          <div className="mt-12 rounded-card border border-hairline-gray bg-chalk-white p-6 md:p-10">
            {diagram}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
            {product.sections.map((section) => (
              <SpecBlock key={section.heading} heading={section.heading} body={section.body} bullets={section.bullets} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

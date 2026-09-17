import { useParams } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { PRODUCTS } from '../data/site'
import { NotFound } from './NotFound'

export function Product() {
  const { slug } = useParams<{ slug: string }>()
  const product = slug ? PRODUCTS[slug] : undefined

  if (!product) return <NotFound />

  return (
    <>
      <Hero
        kicker={product.kicker}
        title={product.title}
        subtitle={product.subtitle}
      />

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-lg text-slate-veil">{product.intro}</p>
          </div>
        </div>
      </section>

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading kicker="Details" title="Benefits & Specifications" className="mb-12" />
          <div className="grid gap-6 md:grid-cols-2">
            {product.sections.map((section) => (
              <div key={section.heading} className="rounded-lg border border-hairline-gray bg-pale-mist p-6 md:p-8">
                <h3 className="text-xl leading-xl font-medium text-ink-teal">{section.heading}</h3>
                {section.body && (
                  <p className="mt-3 text-sm leading-sm text-slate-veil">{section.body}</p>
                )}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm leading-sm text-slate-veil">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-blue" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

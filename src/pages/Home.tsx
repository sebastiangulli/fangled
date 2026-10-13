import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, CircleCheck, Minus } from 'lucide-react'
import { Button, TextLink } from '../components/Button'
import { ProductCard } from '../components/ProductCard'
import { Gallery } from '../components/Gallery'
import {
  CheckList,
  CtaPanel,
  EpisodeCard,
  Faq,
  Marquee,
  MethodScroll,
  PageHeader,
  ScrollStatement,
  SectionHeader,
  WhyCard,
} from '../components/Sections'
import { spotlight, stagger } from '../lib/motion'
import { DiligenceMini, GlobeMini, Laptop, OrgMini, PipelineMini, PlaybookMockup, PlaybookScreen } from '../components/Visuals'
import { CAPABILITIES, CMO_VS_AGENCY, COMPANY, GLOBAL_SOURCE, GLOBAL_STRATEGY, PODCASTS, PRACTICES, PRODUCT_CARDS, WHY } from '../data/site'

// Bento layout, in PRACTICES order: marketing, global trade, fractional CMO, beyond growth.
const TILES: { cls: string; layout?: string; visual: ReactNode }[] = [
  {
    cls: 'lg:col-span-2',
    layout: 'lg:flex-row lg:items-center lg:[&>*]:basis-1/2',
    visual: <div className="rounded-2xl bg-white p-4 shadow-card ring-1 ring-line"><PipelineMini /></div>,
  },
  { cls: 'lg:row-span-2', visual: <GlobeMini className="mx-auto h-auto w-full max-w-[320px] transition-transform duration-700 ease-out group-hover:scale-105" /> },
  { cls: '', visual: <OrgMini /> },
  { cls: '', visual: <DiligenceMini /> },
]

const PROMISES = ['Free strategy call', 'U.S. and global markets', 'Fractional or project-based']

export function Home() {
  return (
    <>
      <PageHeader
        size="2xl"
        docTitle="Fangled Group | Strategy-first growth consultancy"
        eyebrow={
          <Link
            to="/about#fractional-cmo"
            className="group inline-flex items-center gap-2 rounded-full bg-white/70 py-1 pr-3 pl-1 text-caption font-medium text-ink-2 ring-1 ring-line backdrop-blur transition-colors hover:bg-white"
          >
            <span className="rounded-full bg-brand px-2 py-0.5 text-white">New</span>
            Take the Fractional CMO fit check
            <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        }
        title="Turn every touch into an advocate for your brand."
        intro="Fangled Group is a strategy-first growth consultancy. We research your market, sharpen your value proposition, and build the go-to-market playbook your marketing and sales teams run, at home and abroad."
        actions={
          <>
            <Button to="/contact" arrow>Book a strategy call</Button>
            <Button href={COMPANY.phoneHref} variant="secondary">Call {COMPANY.phone}</Button>
          </>
        }
        meta={
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {PROMISES.map((p) => (
              <li key={p} className="flex items-center gap-2 text-small text-ink-2">
                <CircleCheck aria-hidden="true" className="h-4 w-4 text-brand" />
                {p}
              </li>
            ))}
          </ul>
        }
        aside={<PlaybookMockup />}
      />

      <section aria-label="Capabilities" className="border-y border-line bg-white">
        <Marquee items={CAPABILITIES} />
      </section>

      <section className="wrap py-28 md:py-40">
        <ScrollStatement text="Most marketing starts with what a company wants to say. Ours starts with what the market needs to hear. That’s how a first touch becomes a buyer, and a buyer becomes an advocate." />
        <div data-reveal className="mt-10">
          <TextLink to="/about">More about our approach</TextLink>
        </div>
      </section>

      {/* The deliverable, shown as a product */}
      <section className="overflow-hidden bg-soft pt-24 md:pt-32">
        <SectionHeader
          center
          eyebrow="The deliverable"
          title="One playbook your whole team can run."
          intro="Segments, value proposition, voice of customer, market viability, and the launch plan, in one place and shared with sales."
        />
        <div className="wrap mt-14 pb-20 md:mt-20 md:pb-28">
          <div className="scroll-zoom">
            <Laptop label="Example go-to-market playbook: path to purchase, market viability, segments by fit, voice of customer, value proposition, and launch plan">
              <PlaybookScreen />
            </Laptop>
          </div>
        </div>
      </section>

      {/* Services bento */}
      <section className="wrap py-24 md:py-32">
        <SectionHeader
          eyebrow="What we do"
          title="Four ways we help B2B companies grow"
          intro="Each one starts in the same place: understanding the people you want to reach."
        />
        <ul onPointerMove={spotlight} className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[auto_auto]">
          {PRACTICES.map((p, i) => (
            <li key={p.title} data-reveal style={stagger(i)} className={TILES[i].cls}>
              <Link
                to={p.to}
                className={`spot group flex h-full flex-col gap-8 overflow-hidden rounded-3xl bg-soft p-7 ring-1 ring-line transition-[box-shadow,background-color] duration-300 hover:bg-white hover:shadow-float sm:p-8 ${TILES[i].layout ?? ''}`}
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand shadow-card ring-1 ring-line transition-[background-color,color,transform] duration-300 group-hover:-rotate-6 group-hover:bg-brand group-hover:text-white">
                    <p.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-5 text-display-md text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-[44ch] text-body text-mute">{p.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-brand">
                    {p.link}
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-center">{TILES[i].visual}</div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Method */}
      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader
            eyebrow="How we work"
            title="The Strategy First Method"
            intro="Every plan starts by listening to the market, so every dollar after it is aimed at someone who wants to buy."
          />
          <div className="mt-10 lg:mt-4">
            <MethodScroll />
          </div>
        </div>
      </section>

      {/* Fractional CMO */}
      <section className="relative overflow-hidden bg-night py-24 text-white md:py-32">
        <div aria-hidden="true" className="absolute -inset-[20%] animate-drift" style={{ background: 'radial-gradient(35% 45% at 85% 20%, rgb(0 80 126 / 0.75), transparent 70%)' }} />
        <div aria-hidden="true" className="grid-lines absolute inset-0 text-white/[0.05]" />
        <div className="wrap relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div data-reveal>
            <p className="text-small font-medium text-sky">Fractional CMO</p>
            <h2 className="mt-3 text-display-lg">A senior marketing executive, without the full-time hire.</h2>
            <p className="mt-5 max-w-[46ch] text-lead text-white/65">
              A Fractional CMO joins your leadership team part-time. They lead workshops, read the market and the competition, and own the go-to-market playbook.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/about#fractional-cmo" variant="light" arrow>Take the fit check</Button>
              <Button to="/contact" variant="ghost-light">Talk to us</Button>
            </div>
          </div>

          <div data-reveal style={stagger(2)} className="rounded-3xl bg-white/[0.03] p-2 ring-1 ring-white/10 backdrop-blur">
            <dl className="divide-y divide-white/10 sm:hidden">
              {CMO_VS_AGENCY.map((r) => (
                <div key={r.row} className="p-4">
                  <dt className="text-caption text-white/55">{r.row}</dt>
                  <dd className="mt-1.5 flex gap-2 text-small text-white">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                    {r.cmo}
                  </dd>
                  <dd className="mt-1 flex gap-2 text-small text-white/50">
                    <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                    Agency: {r.agency.charAt(0).toLowerCase() + r.agency.slice(1)}
                  </dd>
                </div>
              ))}
            </dl>
            <table className="hidden w-full border-collapse text-left text-small sm:table">
              <caption className="sr-only">How a Fractional CMO differs from a marketing agency</caption>
              <thead>
                <tr>
                  <td className="w-[22%]" />
                  <th scope="col" className="px-4 py-4 font-medium text-white/55">Agency</th>
                  <th scope="col" className="rounded-t-2xl bg-white/[0.07] px-4 py-4 font-medium text-white">Fractional CMO</th>
                </tr>
              </thead>
              <tbody>
                {CMO_VS_AGENCY.map((r, i) => (
                  <tr key={r.row} className="border-t border-white/10 transition-colors hover:bg-white/[0.03]">
                    <th scope="row" className="py-4 pr-2 pl-4 align-top font-normal text-white/55">{r.row}</th>
                    <td className="px-4 py-4 align-top text-white/55">
                      <span className="flex gap-2">
                        <Minus aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-white/30" />
                        {r.agency}
                      </span>
                    </td>
                    <td className={`bg-white/[0.07] px-4 py-4 align-top text-white ${i === CMO_VS_AGENCY.length - 1 ? 'rounded-b-2xl' : ''}`}>
                      <span className="flex gap-2">
                        <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-sky" />
                        {r.cmo}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Global trade */}
      <section className="wrap grid items-center gap-14 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeader eyebrow="Global trade & sourcing" title="Plan the entry before you ship a single pallet." />
          <p data-reveal className="mt-4 max-w-[48ch] text-lead text-mute">
            From market viability to sourcing, logistics, and regulation, we map the practical route into new markets.
          </p>
          <div data-reveal style={stagger(1)}>
            <CheckList items={GLOBAL_STRATEGY} className="mt-8" />
          </div>
          <div data-reveal style={stagger(2)} className="mt-10">
            <TextLink to="/global-trade-and-sourcing">Explore global trade & sourcing</TextLink>
          </div>
        </div>
        <div className="relative">
          <div data-reveal="clip" className="overflow-hidden rounded-3xl">
            <img
              src="/images/global-trade-port.webp"
              alt="Container cranes at a port at sunset"
              loading="lazy"
              decoding="async"
              width={1672}
              height={941}
              className="scroll-photo aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
            />
          </div>
          <div data-reveal style={stagger(4)} className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/85 p-5 shadow-pop ring-1 ring-white/60 backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-80">
            <p className="text-caption font-medium text-mute">We also source abroad</p>
            <ul className="mt-3 space-y-2.5">
              {GLOBAL_SOURCE.map((s) => (
                <li key={s} className="flex gap-2.5 text-small text-ink">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader
            eyebrow="Disruptive innovation"
            title="Products we’ve brought to market"
            intro="Technical advances still need a clear reason to buy. Here are two we’ve helped launch."
          />
          <ul onPointerMove={spotlight} className="mt-14 grid gap-5 md:grid-cols-2">
            {PRODUCT_CARDS.map((p, i) => (
              <li key={p.slug} data-reveal style={stagger(i)}>
                <ProductCard product={p} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Fangled */}
      <section className="py-24 md:py-32">
        <div className="wrap">
          <SectionHeader eyebrow="Why Fangled" title="Built to be easy to start with" />
        </div>
        <div className="mt-12">
          <Gallery label="Why Fangled Group">
            {WHY.map((w) => (
              <WhyCard key={w.title} {...w} />
            ))}
          </Gallery>
        </div>
      </section>

      {/* Podcasts */}
      <section className="bg-soft py-24 md:py-32">
        <div className="wrap">
          <SectionHeader
            eyebrow="Podcasts"
            title="Podcasts and round tables"
            intro="Strategy, sales, exit planning, and building brand advocates, with founders and operators."
            action={<Button to="/podcasts" variant="secondary" arrow>All episodes</Button>}
          />
        </div>
        <div className="mt-12">
          <Gallery label="Podcast episodes">
            {PODCASTS.map((ep, i) => (
              <EpisodeCard key={ep.title} {...ep} i={i} className="w-[17rem] sm:w-[22rem]" />
            ))}
          </Gallery>
        </div>
      </section>

      <Faq />

      <CtaPanel />
    </>
  )
}

import { useEffect } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { Eyebrow, Mesh } from '../components/Sections'
import { stagger } from '../lib/motion'
import { COMPANY } from '../data/site'
import contact from '../content/contact.json'

const channels = () => [
  { icon: Phone, label: contact.channels.call, value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: contact.channels.email, value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: contact.channels.office, value: COMPANY.location },
]

const NEXT = contact.next.steps

const rise = (ms: number) => ({ animationDelay: `${ms}ms` })

export function Contact() {
  const CHANNELS = channels()
  useEffect(() => {
    document.title = contact.docTitle
  }, [])

  return (
    <section className="relative overflow-hidden">
      <Mesh className="inset-x-0 top-0 h-[40rem]" />
      <div className="wrap relative grid gap-14 pt-32 pb-24 md:pt-40 md:pb-32 lg:grid-cols-[1fr_1.1fr] lg:gap-x-20 lg:gap-y-14">
        <div>
          <div className="animate-rise">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 max-w-[13ch] animate-rise text-display-xl text-ink" style={rise(80)}>{contact.title}</h1>
          <p className="mt-6 max-w-[44ch] animate-rise text-lead text-ink-2" style={rise(180)}>{contact.intro}</p>

          <ul className="mt-10 grid animate-rise gap-3" style={rise(280)}>
            {CHANNELS.map((c) => {
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-brand">
                    <c.icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-caption text-mute">{c.label}</span>
                    <span className="block text-title text-ink">{c.value}</span>
                  </span>
                </>
              )
              const cls = 'flex items-center gap-4 rounded-2xl bg-white/80 p-3.5 shadow-card ring-1 ring-line backdrop-blur'
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a href={c.href} className={`${cls} transition-shadow hover:shadow-float`}>{inner}</a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="animate-rise lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-4" style={rise(220)}>
          <ContactForm />
        </div>
        <div data-reveal style={stagger(1)}>
          <h2 className="text-title text-ink">{contact.next.title}</h2>
          <ol className="mt-5">
            {NEXT.map((n, i) => (
              <li key={n.title} className="relative flex gap-4 pb-6 last:pb-0">
                {i < NEXT.length - 1 && <span aria-hidden="true" className="absolute top-8 bottom-0 left-[13px] w-px bg-line" />}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-caption font-semibold text-brand ring-1 ring-line">{i + 1}</span>
                <span>
                  <span className="block text-small font-medium text-ink">{n.title}</span>
                  <span className="mt-0.5 block text-small text-mute">{n.body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

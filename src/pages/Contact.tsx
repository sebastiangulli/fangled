import { Hero } from '../components/Hero'
import { ContactForm } from '../components/ContactForm'
import { COMPANY } from '../data/site'
import { Icon } from '../components/Icon'

export function Contact() {
  return (
    <>
      <Hero
        kicker="Contact"
        title="Let's Start a Conversation"
        subtitle="The Fangled Group team is looking forward to a meaningful discussion with you to best understand your needs."
      />

      <section className="bg-pale-mist px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-3">
          <div className="md:col-span-1">
            <p className="text-base leading-base text-slate-veil">
              Please fill in the form, send us an e-mail, or give us a call to start the conversation. We are confident in what we do and would like to hear about your company and how we can assist in taking it higher and higher.
            </p>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-3 text-ink-teal hover:text-signal-blue"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chalk-white">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{COMPANY.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-ink-teal hover:text-signal-blue"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chalk-white">
                    <Icon name="email" className="h-5 w-5" />
                  </span>
                  <span className="font-medium">{COMPANY.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-veil">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-chalk-white">
                  <Icon name="globe" className="h-5 w-5 text-ink-teal" />
                </span>
                <span>{COMPANY.location}</span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

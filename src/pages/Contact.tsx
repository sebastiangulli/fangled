import { Hero } from '../components/Hero'
import { ContactForm } from '../components/ContactForm'
import { COMPANY } from '../data/site'

export function Contact() {
  return (
    <>
      <Hero
        kicker="Contact"
        title="Let’s start a conversation"
        subtitle="Tell us what you are trying to grow. We’ll listen first, then tell you honestly whether we can help."
      />

      <section className="border-t border-hairline-gray px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-3 lg:gap-16">
          <div>
            <a href={COMPANY.phoneHref} className="group block border-t border-ink-teal pt-5">
              <span className="text-body-sm text-fog-gray">Call, toll free</span>
              <span className="tabular mt-1 block font-display text-stat leading-stat text-ink-teal transition-colors group-hover:text-ember-orange">
                {COMPANY.phone}
              </span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="group mt-8 block border-t border-hairline-gray pt-5">
              <span className="text-body-sm text-fog-gray">Email</span>
              <span className="mt-1 block text-heading-sm leading-heading-sm font-medium text-ink-teal transition-colors group-hover:text-ember-orange">
                {COMPANY.email}
              </span>
            </a>
            <div className="mt-8 border-t border-hairline-gray pt-5">
              <span className="text-body-sm text-fog-gray">Office</span>
              <span className="mt-1 block text-heading-sm leading-heading-sm font-medium text-ink-teal">
                {COMPANY.location}
              </span>
            </div>
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

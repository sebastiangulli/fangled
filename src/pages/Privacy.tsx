import { Hero } from '../components/Hero'
import { PRIVACY_PARAGRAPHS, COMPANY } from '../data/site'

export function Privacy() {
  return (
    <>
      <Hero
        kicker="Legal"
        title="Privacy & legal"
        subtitle="Your privacy is critically important to us."
      />

      <section className="border-t border-line px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-body leading-body text-slate">
            {COMPANY.fullName} is located in {COMPANY.location}, and is reachable by email at{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-brand hover:underline">
              {COMPANY.email}
            </a>{' '}
            and telephone at{' '}
            <a href={COMPANY.phoneHref} className="text-brand hover:underline">
              {COMPANY.phone}
            </a>
            .
          </p>

          <div className="mt-12 divide-y divide-line">
            {PRIVACY_PARAGRAPHS.map((section) => (
              <div key={section.heading} className="py-8 first:pt-0">
                <h2 className="text-heading-sm leading-heading-sm font-medium text-ink">{section.heading}</h2>
                <p className="mt-3 text-body leading-body text-slate">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

import { Hero } from '../components/Hero'
import { PRIVACY_PARAGRAPHS, COMPANY } from '../data/site'

export function Privacy() {
  return (
    <>
      <Hero
        kicker="Legal"
        title="Privacy & Legal"
        subtitle="Your privacy is critically important to us."
      />

      <section className="bg-chalk-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-base leading-base text-slate-veil">
            {COMPANY.fullName} is located in {COMPANY.location}, and is reachable by email at{' '}
            <a href={`mailto:${COMPANY.email}`} className="text-signal-blue hover:underline">
              {COMPANY.email}
            </a>{' '}
            and telephone at{' '}
            <a href={COMPANY.phoneHref} className="text-signal-blue hover:underline">
              {COMPANY.phone}
            </a>
            .
          </p>

          <div className="mt-12 space-y-10">
            {PRIVACY_PARAGRAPHS.map((section) => (
              <div key={section.heading}>
                <h2 className="text-2xl leading-2xl font-medium text-ink-teal">{section.heading}</h2>
                <p className="mt-3 text-base leading-base text-slate-veil">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

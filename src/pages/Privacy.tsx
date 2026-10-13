import { Eyebrow, PageHeader } from '../components/Sections'
import { PRIVACY_PARAGRAPHS } from '../data/site'

export function Privacy() {
  return (
    <>
      <PageHeader eyebrow={<Eyebrow>Legal</Eyebrow>} title="Privacy & legal" intro="How we collect, use, and protect information on this website." />
      <article className="wrap max-w-[48rem] pb-24 md:pb-32">
        {PRIVACY_PARAGRAPHS.map((s) => (
          <section key={s.heading} className="border-b border-line py-8 last:border-b-0">
            <h2 className="text-title text-ink">{s.heading}</h2>
            <p className="mt-3 text-body text-mute">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}

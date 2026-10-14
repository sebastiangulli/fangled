import { Eyebrow, PageHeader } from '../components/Sections'
import privacy from '../content/privacy.json'

export function Privacy() {
  return (
    <>
      <PageHeader eyebrow={<Eyebrow>{privacy.eyebrow}</Eyebrow>} title={privacy.title} intro={privacy.intro} />
      <article className="wrap max-w-[48rem] pb-24 md:pb-32">
        {privacy.sections.map((s) => (
          <section key={s.heading} className="border-b border-line py-8 last:border-b-0">
            <h2 className="text-title text-ink">{s.heading}</h2>
            <p className="mt-3 text-body text-mute">{s.body}</p>
          </section>
        ))}
      </article>
    </>
  )
}

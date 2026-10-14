import { Button } from '../components/Button'
import { Eyebrow, PageHeader } from '../components/Sections'
import site from '../content/site.json'

export function NotFound() {
  return (
    <PageHeader
      eyebrow={<Eyebrow>{site.notFound.eyebrow}</Eyebrow>}
      title={site.notFound.title}
      intro={site.notFound.intro}
      actions={
        <>
          <Button to="/" arrow>{site.notFound.homeLabel}</Button>
          <Button to="/contact" variant="secondary">{site.notFound.contactLabel}</Button>
        </>
      }
    />
  )
}

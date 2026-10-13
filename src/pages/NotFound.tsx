import { Button } from '../components/Button'
import { Eyebrow, PageHeader } from '../components/Sections'

export function NotFound() {
  return (
    <PageHeader
      eyebrow={<Eyebrow>Page not found</Eyebrow>}
      title="This page has moved, or never existed."
      intro="Check the address, or head back to the home page."
      actions={
        <>
          <Button to="/" arrow>Back to home</Button>
          <Button to="/contact" variant="secondary">Contact us</Button>
        </>
      }
    />
  )
}

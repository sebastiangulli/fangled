import { useState, type FormEvent } from 'react'
import { CircleCheck } from 'lucide-react'
import { COMPANY } from '../data/site'
import { Button } from './Button'

const control =
  'peer block w-full rounded-xl bg-white px-4 text-body text-ink ring-1 ring-line outline-none ring-inset transition-shadow duration-200 placeholder:text-transparent focus:ring-2 focus:ring-brand user-invalid:ring-2 user-invalid:ring-danger'

/** Field whose label sits inside and floats up once it has focus or a value. */
function Field({
  name,
  label,
  error,
  optional,
  textarea,
  type = 'text',
  autoComplete,
  className = '',
}: {
  name: string
  label: string
  error?: string
  optional?: boolean
  textarea?: boolean
  type?: string
  autoComplete?: string
  className?: string
}) {
  const float =
    'pointer-events-none absolute top-[15px] left-4 text-body text-mute transition-all duration-200 peer-focus:top-2 peer-focus:text-caption peer-focus:text-brand peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-caption'
  return (
    <label className={`relative block ${className}`}>
      {textarea ? (
        <textarea name={name} required={!optional} rows={5} placeholder={label} className={`${control} min-h-40 pt-7 pb-3`} />
      ) : (
        <input name={name} type={type} required={!optional} autoComplete={autoComplete} placeholder={label} className={`${control} h-14 pt-5`} />
      )}
      <span className={float}>
        {label}
        {optional ? <span className="text-mute"> (optional)</span> : <span aria-hidden="true" className="text-danger"> *</span>}
      </span>
      {error && <span className="mt-1.5 hidden text-caption text-danger peer-user-invalid:block">{error}</span>}
    </label>
  )
}

// ponytail: no backend yet, so the form drafts an email instead of dropping the message. Swap for a form endpoint when one exists.
export function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const body = `${f.message}\n\n${f.name}${f.company ? `, ${f.company}` : ''}\n${f.email}`
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Strategy call request from ${f.name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 shadow-pop ring-1 ring-line sm:p-9">
      <p className="text-title text-ink">Tell us about your company</p>
      <p className="mt-1 text-small text-mute">Fields marked * are required.</p>
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <Field name="name" label="Name" autoComplete="name" error="Enter your name." />
        <Field name="email" label="Work email" type="email" autoComplete="email" error="Enter an email like name@company.com." />
        <Field name="company" label="Company" autoComplete="organization" optional className="sm:col-span-2" />
        <Field name="message" label="What are you trying to grow?" textarea error="Tell us a little about what you need." className="sm:col-span-2" />
      </div>
      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" arrow className="h-12 px-6">Send message</Button>
        <p className="text-caption text-mute sm:max-w-[26ch] sm:text-right">Opens your email app with the message ready to send.</p>
      </div>
      <div aria-live="polite">
        {sent && (
          <p className="mt-6 flex animate-fade gap-3 rounded-2xl bg-sky-soft p-4 text-small text-ink">
            <CircleCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-brand" />
            <span>
              Your email app should open with the message ready. If it didn’t, write to{' '}
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-brand underline underline-offset-2">{COMPANY.email}</a>.
            </span>
          </p>
        )}
      </div>
    </form>
  )
}

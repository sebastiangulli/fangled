import { useState, type FormEvent, type ReactNode } from 'react'
import { CircleCheck } from 'lucide-react'
import { COMPANY } from '../data/site'
import { Button } from './Button'

const input =
  'peer mt-2 block w-full rounded-xl bg-white px-4 py-3 text-body text-ink ring-1 ring-line outline-none ring-inset transition-shadow placeholder:text-mute/60 focus:ring-2 focus:ring-brand user-invalid:ring-2 user-invalid:ring-danger'

function Field({ label, error, optional, className = '', children }: { label: string; error?: string; optional?: boolean; className?: string; children: ReactNode }) {
  return (
    <label className={`block text-small font-medium text-ink ${className}`}>
      {label}
      {optional ? <span className="font-normal text-mute"> (optional)</span> : <span aria-hidden="true" className="text-danger"> *</span>}
      {children}
      {error && <span className="mt-1.5 hidden text-caption font-normal text-danger peer-user-invalid:block">{error}</span>}
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
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Name" error="Enter your name.">
          <input name="name" required autoComplete="name" className={input} />
        </Field>
        <Field label="Work email" error="Enter an email like name@company.com.">
          <input name="email" type="email" required autoComplete="email" className={input} />
        </Field>
        <Field label="Company" optional className="sm:col-span-2">
          <input name="company" autoComplete="organization" className={input} />
        </Field>
        <Field label="What are you trying to grow?" error="Tell us a little about what you need." className="sm:col-span-2">
          <textarea name="message" required rows={5} className={input} placeholder="A new market, a product launch, a sales team that needs a playbook…" />
        </Field>
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

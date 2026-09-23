import { useState } from 'react'
import { PillButton } from './PillButton'
import { Icon } from './Icon'

const fieldClass =
  'w-full rounded-card border border-line bg-white px-4 py-2.5 text-body-sm text-ink outline-none transition-colors duration-200 placeholder:text-muted focus:border-brand focus:ring-2 focus:ring-brand/20'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-card border border-line bg-paper p-10 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="mt-4 text-heading-sm leading-heading-sm font-medium text-ink">Message sent</h3>
        <p className="mt-2 text-body-sm leading-body-sm text-slate">
          Thanks for reaching out. We'll be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-card border border-line bg-white p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-body-sm font-medium text-ink">Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-body-sm font-medium text-ink">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={fieldClass}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-body-sm font-medium text-ink">Company</span>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className={fieldClass}
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-body-sm font-medium text-ink">What are you trying to grow?</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={fieldClass}
          />
        </label>
      </div>
      <div className="mt-6">
        <PillButton type="submit" variant="primary">
          Send message
        </PillButton>
      </div>
    </form>
  )
}

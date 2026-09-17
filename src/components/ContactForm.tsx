import { useState } from 'react'
import { PillButton } from './PillButton'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-hairline-gray bg-chalk-white p-8 text-center">
        <h3 className="text-xl leading-xl font-medium text-ink-teal">Message sent</h3>
        <p className="mt-2 text-sm leading-sm text-slate-veil">Thanks for reaching out. We'll be in touch within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-hairline-gray bg-chalk-white p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-ink-teal">Name</span>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-hairline-gray bg-chalk-white px-4 py-2.5 text-sm text-ink-teal outline-none focus:border-signal-blue"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-ink-teal">Email</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-lg border border-hairline-gray bg-chalk-white px-4 py-2.5 text-sm text-ink-teal outline-none focus:border-signal-blue"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm text-ink-teal">Company</span>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="w-full rounded-lg border border-hairline-gray bg-chalk-white px-4 py-2.5 text-sm text-ink-teal outline-none focus:border-signal-blue"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="mb-1.5 block text-sm text-ink-teal">Message</span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full rounded-lg border border-hairline-gray bg-chalk-white px-4 py-2.5 text-sm text-ink-teal outline-none focus:border-signal-blue"
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

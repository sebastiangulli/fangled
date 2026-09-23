import { useState } from 'react'
import { COMPANY } from '../data/site'

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false)
  if (closed) return null
  return (
    <div className="relative z-50 bg-signal-blue px-10 py-2.5 text-center text-body-sm text-chalk-white">
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span className="rounded-pill bg-chalk-white px-2.5 py-0.5 text-caption font-medium text-ink-teal">
          New
        </span>
        <span>Fractional CMO services now available —</span>
        <a href={COMPANY.phoneHref} className="tabular font-medium underline underline-offset-2 hover:text-soft-sky">
          call {COMPANY.phone}
        </a>
      </span>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-chalk-white/80 transition-colors hover:bg-white/15 hover:text-chalk-white"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  )
}

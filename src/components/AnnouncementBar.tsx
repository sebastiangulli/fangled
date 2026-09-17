import { useState } from 'react'
import { COMPANY } from '../data/site'

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false)
  if (closed) return null
  return (
    <div className="relative z-50 bg-signal-blue px-4 py-2.5 text-center text-sm text-chalk-white">
      <span className="inline-flex items-center gap-2">
        <span className="rounded-lg bg-chalk-white px-2 py-0.5 text-xs font-medium text-ink-teal">
          New
        </span>
        <span>Fractional CMO services now available — call {COMPANY.phone}</span>
      </span>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-chalk-white/80 hover:text-chalk-white"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  )
}

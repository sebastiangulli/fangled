import { useState } from 'react'
import { COMPANY } from '../data/site'

export function AnnouncementBar() {
  const [closed, setClosed] = useState(false)
  if (closed) return null
  return (
    <div className="relative z-50 bg-night px-10 py-2 text-center text-body-sm text-white">
      <span className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>Strategy first, here and abroad.</span>
        <a href={COMPANY.phoneHref} className="tabular font-medium underline underline-offset-2 hover:text-stone">
          Start a conversation: {COMPANY.phone}
        </a>
      </span>
      <button
        type="button"
        onClick={() => setClosed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-white/80 transition-colors hover:bg-white/15 hover:text-white"
        aria-label="Close announcement"
      >
        ×
      </button>
    </div>
  )
}

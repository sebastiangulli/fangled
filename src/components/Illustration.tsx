import type { ReactElement } from 'react'

const ILLUSTRATIONS: Record<string, ReactElement> = {
  marketing: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <rect x="40" y="55" width="55" height="70" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M52 105h30M52 90h30M52 75h20" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="145" cy="65" r="22" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="145" cy="65" r="10" fill="#fa4e1d" />
      <path d="M160 88l12 12M100 50l20-15 20 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  trade: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <circle cx="100" cy="80" r="45" stroke="currentColor" strokeWidth="1.5" />
      <path d="M70 80a30 30 0 0160 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M50 62l10-10M150 62l-10-10M50 98l10 10M150 98l-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="85" y="110" width="30" height="15" rx="2" fill="#fa4e1d" />
    </svg>
  ),
  cleaners: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <path d="M85 25h30v90a15 15 0 01-15 15 15 15 0 01-15-15V25z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M90 40h20M90 55h20M90 70h15" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="140" cy="120" r="10" fill="#fa4e1d" />
      <circle cx="160" cy="110" r="6" fill="#fa4e1d" opacity="0.7" />
      <path d="M50 120h30" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  ),
  mixers: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <path d="M70 45h60l20 85H50l20-85z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M90 65v45M110 65v45M100 65v55" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="100" cy="85" r="16" stroke="#fa4e1d" strokeWidth="2" />
      <path d="M100 77v16M92 85h16" stroke="#fa4e1d" strokeWidth="2" />
    </svg>
  ),
  cmo: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <rect x="45" y="40" width="110" height="75" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M60 90h60M60 78h40M60 66h80" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="150" cy="108" r="14" fill="#fa4e1d" />
      <path d="M144 108h12M150 102v12" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  podcast: (
    <svg viewBox="0 0 200 160" fill="none" className="h-full w-full">
      <rect x="85" y="50" width="30" height="45" rx="15" stroke="currentColor" strokeWidth="1.5" />
      <path d="M75 90a25 25 0 0050 0" stroke="currentColor" strokeWidth="1.5" />
      <path d="M100 95v20" stroke="currentColor" strokeWidth="1.5" />
      <path d="M85 120h30" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="55" cy="80" r="8" fill="#fa4e1d" />
      <circle cx="145" cy="80" r="8" fill="#fa4e1d" />
    </svg>
  ),
}

export function Illustration({
  name,
  className = '',
}: {
  name: keyof typeof ILLUSTRATIONS
  className?: string
}) {
  return <div className={className}>{ILLUSTRATIONS[name]}</div>
}

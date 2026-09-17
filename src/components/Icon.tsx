import type { ReactElement } from 'react'

type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'menu'
  | 'close'
  | 'globe'
  | 'play'
  | 'check'
  | 'phone'
  | 'email'
  | 'chevron-left'
  | 'chevron-right'
  | 'linkedin'
  | 'facebook'
  | 'x'
  | 'youtube'
  | 'diamond'
  | 'arrow-up'

export function Icon({
  name,
  className = 'w-5 h-5',
}: {
  name: IconName
  className?: string
}) {
  const paths: Record<IconName, ReactElement> = {
    'arrow-right': (
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    'arrow-up-right': (
      <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    menu: (
      <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
    close: (
      <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20 15.3 15.3 0 010-20" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </>
    ),
    play: (
      <path d="M8 5v14l11-7z" fill="currentColor" />
    ),
    check: (
      <path d="M5 12l4 4L20 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    phone: (
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
    email: (
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
    ),
    'chevron-left': (
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    'chevron-right': (
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
    linkedin: (
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7H8v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
    ),
    facebook: (
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" fill="currentColor" />
    ),
    x: (
      <path d="M4 4l16 16M20 4L4 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    ),
    youtube: (
      <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" fill="currentColor" />
    ),
    diamond: (
      <path d="M12 3l9 9-9 9-9-9z" fill="currentColor" />
    ),
    'arrow-up': (
      <path d="M12 20V4M5 11l7-7 7 7" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    ),
  }
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

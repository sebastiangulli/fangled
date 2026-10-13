import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const first = useRef(true)

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    // Screen readers: land on the new page's content, not the link that was clicked.
    if (!first.current) document.getElementById('main')?.focus({ preventScroll: true })
    first.current = false
  }, [pathname, hash])

  return null
}

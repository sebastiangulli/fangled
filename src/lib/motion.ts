import { useLayoutEffect, useState, type CSSProperties, type PointerEvent, type RefObject } from 'react'

/** Staggers [data-reveal] siblings: pass the item index. */
export const stagger = (i: number) => ({ '--i': i }) as CSSProperties

/** Feeds the pointer position to the .spot glow of the hovered card. Attach to a list's onPointerMove. */
export function spotlight(e: PointerEvent<HTMLElement>) {
  const card = (e.target as HTMLElement).closest<HTMLElement>('.spot')
  if (!card) return
  const r = card.getBoundingClientRect()
  card.style.setProperty('--x', `${e.clientX - r.left}px`)
  card.style.setProperty('--y', `${e.clientY - r.top}px`)
}

export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Scale factor that fits a fixed-size design canvas (e.g. a 1280px app screen) into its container. */
export function useFitScale(ref: RefObject<HTMLElement | null>, designWidth: number) {
  const [scale, setScale] = useState(1)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / designWidth))
    ro.observe(el)
    return () => ro.disconnect()
  }, [ref, designWidth])
  return scale
}

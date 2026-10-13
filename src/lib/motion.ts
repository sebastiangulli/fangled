import type { CSSProperties, PointerEvent } from 'react'

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

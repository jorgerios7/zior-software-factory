import React from 'react'

export function scrollToRef<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  offset = 80
) {
  if (!ref.current) return

  const y =
    ref.current.getBoundingClientRect().top +
    window.pageYOffset -
    offset

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}

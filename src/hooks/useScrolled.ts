import { useEffect, useState } from 'react'

/**
 * Returns true once the page has scrolled past `offset` pixels.
 * Used by the navbar to switch from a transparent overlay to a
 * solid bar.
 */
export function useScrolled(offset = 80) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > offset)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [offset])

  return scrolled
}

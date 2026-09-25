import { useEffect, useRef, useState } from 'react'

/**
 * Tracks whether an element has scrolled into the viewport, once.
 * Pair with the `.fade-in` / `.is-visible` CSS classes for a
 * subtle, one-time scroll reveal that fully disables under
 * prefers-reduced-motion (see global.scss).
 */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

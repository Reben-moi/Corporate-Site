import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface FadeInProps {
  children: ReactNode
  className?: string
  delayMs?: number
}

export default function FadeIn({ children, className = '', delayMs = 0 }: FadeInProps) {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={`fade-in ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  )
}

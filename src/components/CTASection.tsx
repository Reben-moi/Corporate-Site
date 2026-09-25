import type { ReactNode } from 'react'
import Button from './Button'

interface CTASectionProps {
  eyebrow?: string
  title: string
  ctaLabel: string
  ctaTo: string
  children?: ReactNode
}

export default function CTASection({ eyebrow, title, ctaLabel, ctaTo, children }: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="container-wide">
        {eyebrow && <div className="section-label justify-content-center">{eyebrow}</div>}
        <h2>{title}</h2>
        {children}
        <Button to={ctaTo} variant="primary">
          {ctaLabel}
        </Button>
      </div>
    </section>
  )
}

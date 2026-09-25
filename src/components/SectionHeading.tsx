import type { ReactNode } from 'react'

interface SectionHeadingProps {
  label: string
  title: string
  description?: ReactNode
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="section-label">{label}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

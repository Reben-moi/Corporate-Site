import type { Industry } from '@/types'

interface IndustryItemProps {
  industry: Industry
}

export default function IndustryItem({ industry }: IndustryItemProps) {
  return (
    <div className="industry-item">
      <h3>{industry.title}</h3>
      <p>{industry.description}</p>
    </div>
  )
}

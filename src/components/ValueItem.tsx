import type { ValueItem as ValueItemType } from '@/types'

interface ValueItemProps {
  value: ValueItemType
}

export default function ValueItem({ value }: ValueItemProps) {
  return (
    <div className="value-item">
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </div>
  )
}

import type { Service } from '@/types'
import Button from './Button'

interface ServiceRowProps {
  service: Service
  index: number
  reverse?: boolean
}

export default function ServiceRow({
  service,
  index,
  reverse = false,
}: ServiceRowProps) {
  const orderNumber = String(index + 1).padStart(2, '0')

  return (
    <div className={`service-row ${reverse ? 'service-row--reverse' : ''}`}>
      <div className="service-row__media">
        <img
          src={service.image}
          alt={service.imageAlt}
          className="service-row__image"
        />
      </div>

      <div className="service-row__content">
        <span className="service-row__index">{orderNumber}</span>

        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <Button
          to={`/services#${service.slug}`}
          variant="outline-dark"
        >
          Learn More
        </Button>
      </div>
    </div>
  )
}


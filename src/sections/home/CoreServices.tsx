import { services } from '@/data/services'
import SectionHeading from '@/components/SectionHeading'
import ServiceRow from '@/components/ServiceRow'
import Button from '@/components/Button'
import FadeIn from '@/components/FadeIn'

export default function CoreServices() {
  return (
    <section className="section section--soft">
      <div className="container-wide">
        <SectionHeading
          label="What We Do"
          title="Core Services"
          description="Five areas of capability, coordinated under a single point of accountability."
        />
        {services.map((service, index) => (
          <FadeIn key={service.slug}>
            <ServiceRow service={service} index={index} reverse={index % 2 === 1} />
          </FadeIn>
        ))}
        <div className="mt-4">
          <Button to="/services" variant="outline-dark">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  )
}

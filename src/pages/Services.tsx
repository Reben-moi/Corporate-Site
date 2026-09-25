import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import ServiceRow from '@/components/ServiceRow'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { services } from '@/data/services'

export default function Services() {
  return (
    <>
      <Seo
        title="Services | Muadifam Enterprises"
        description="Explore Muadifam Enterprises' property, logistics, project management, business consulting and strategic business solutions."
        path="/services"
      />

      <PageHeader
        eyebrow="What We Do"
        title="Our Services"
        description="Integrated property, logistics, project management and business solutions delivered with a practical understanding of the Namibian market."
      />

      <section className="section">
        <div className="container-wide">
          <FadeIn>
            <div className="section-intro">
              <span className="eyebrow">Our Capabilities</span>

              <h2>Practical solutions for complex requirements</h2>

              <p>
                Muadifam combines project management experience, operational
                capability and business insight to help clients plan,
                coordinate and deliver their requirements effectively.
                Whether the need is property-related, operational or
                strategic, we work to provide a clear and accountable path
                from planning through to implementation.
              </p>
            </div>
          </FadeIn>

          <div className="services-list">
            {services.map((service, index) => (
              <div
                id={service.slug}
                key={service.slug}
                style={{ scrollMarginTop: '6rem' }}
              >
                <FadeIn>
                  <ServiceRow
                    service={service}
                    index={index}
                    reverse={index % 2 === 1}
                  />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a requirement that needs a practical solution?"
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />
    </>
  )
}


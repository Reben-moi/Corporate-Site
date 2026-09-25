import { whyMuadifam } from '@/data/values'
import SectionHeading from '@/components/SectionHeading'
import ValueItem from '@/components/ValueItem'
import FadeIn from '@/components/FadeIn'

export default function WhyMuadifam() {
  return (
    <section className="section section--dark">
      <div className="container-wide">
        <FadeIn>
          <SectionHeading
            label="Why Muadifam"
            title="Built on experience. Driven by delivery."
            description="We combine practical experience, disciplined project coordination and a clear understanding of our clients' requirements to deliver dependable business solutions."
          />
        </FadeIn>

        <div className="row g-4 mt-4">
          {whyMuadifam.map((value) => (
            <div className="col-md-6 col-lg-4" key={value.title}>
              <FadeIn>
                <ValueItem value={value} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { industries } from '@/data/industries'
import SectionHeading from '@/components/SectionHeading'
import IndustryItem from '@/components/IndustryItem'
import Button from '@/components/Button'
import FadeIn from '@/components/FadeIn'

export default function IndustriesPreview() {
  return (
    <section className="section section--soft">
      <div className="container-wide">
        <SectionHeading
          label="Who We Serve"
          title="Industries"
          description="Muadifam works across a range of sectors, adapting its approach to each client's environment."
        />
        <FadeIn>
          <div className="industry-grid">
            {industries.map((industry) => (
              <IndustryItem key={industry.slug} industry={industry} />
            ))}
          </div>
        </FadeIn>
        <div className="mt-4">
          <Button to="/industries" variant="outline-dark">
            Explore Industries
          </Button>
        </div>
      </div>
    </section>
  )
}

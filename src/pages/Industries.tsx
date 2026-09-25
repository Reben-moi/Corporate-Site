import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import IndustryItem from '@/components/IndustryItem'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { industries } from '@/data/industries'

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries | Muadifam Enterprises"
        description="Muadifam Enterprises delivers practical project management and business solutions across property, logistics, government, corporate, infrastructure and commercial sectors."
        path="/industries"
      />

      <PageHeader
        eyebrow="Sectors We Serve"
        title="Industry Expertise"
        description="We bring practical experience, structured project management and tailored business solutions to the sectors that shape Namibia's built environment and economy."
      />

      <section className="section">
        <div className="container-wide">
          <FadeIn>
            <div className="section-intro">
              <span className="eyebrow">Our Approach</span>

              <h2>Solutions shaped around your industry</h2>

              <p>
                Every sector presents different operational requirements,
                regulatory considerations and project challenges. Muadifam
                works closely with clients to understand these requirements
                and deliver solutions that are practical, responsive and
                aligned with their objectives.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="industry-grid">
              {industries.map((industry) => (
                <IndustryItem
                  key={industry.slug}
                  industry={industry}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Have a project or business requirement?"
        ctaLabel="Talk to Us"
        ctaTo="/contact"
      />
    </>
  )
}


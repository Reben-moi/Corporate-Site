import Seo from '@/components/Seo'
import Button from '@/components/Button'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import Intro from '@/sections/home/Intro'
import CoreServices from '@/sections/home/CoreServices'
import WhyMuadifam from '@/sections/home/WhyMuadifam'
import FeaturedProjects from '@/sections/home/FeaturedProjects'
import IndustriesPreview from '@/sections/home/IndustriesPreview'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Seo
        title="Muadifam Enterprises | Project Management & Business Solutions in Namibia"
        description="Muadifam Enterprises is a Namibian project management and business solutions company established in 2001, delivering property, logistics, consulting and strategic solutions."
        path="/"
      />

      <section className="hero">
        <div className="hero__media">
          <ImagePlaceholder label="" ratio="16 / 9" className="h-100" />
        </div>
        <div className="hero__overlay" />
        <div className="container-wide hero__content">
          <div className="hero__eyebrow">Est. 2001 — Namibia</div>
          <h1>MUADIFAM ENTERPRISES</h1>
          <p className="hero__lede">
            Project Management &amp; Business Solutions. Muadifam provides professional project
            management and business solutions across property, logistics, consulting and related
            areas.
          </p>
          <div className="hero__actions">
            <Button to="/services" variant="primary">
              Explore Our Services
            </Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Intro />
      <CoreServices />
      <WhyMuadifam />
      <FeaturedProjects />
      <IndustriesPreview />

      <CTASection title="Let's Build Something Meaningful" ctaLabel="Talk to Us" ctaTo="/contact" />
    </>
  )
}

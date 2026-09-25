import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
// import ImagePlaceholder from '@/components/ImagePlaceholder'
import SectionHeading from '@/components/SectionHeading'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { siteInfo } from '@/data/site'

export default function About() {
  return (
    <>
      <Seo
        title="About Muadifam Enterprises | Namibian Project Management & Business Solutions"
        description="Learn about Muadifam Enterprises — a Namibian project management and business solutions company established in 2001."
        path="/about"
      />

      <PageHeader
        eyebrow="About Us"
        title="Two decades of delivery in Namibia"
        description={siteInfo.description}
      />
      <section className="section section--soft">
  <div className="container-wide">
    <div className="row g-5 align-items-center">

      {/* CONTENT */}
      <div className="col-lg-6">
        <FadeIn>
          <SectionHeading
            label="Our Story"
            title="Established in 2001"
            description="A proudly Namibian company built on experience, professional expertise and a commitment to delivering practical business solutions."
          />

          <div className="mt-4">
            <p>
              Muadifam Enterprises CC is a proudly Namibian project management
              and consultancy company providing integrated solutions across
              property, logistics, consultancy and related service sectors.
            </p>

            <p>
              Established in 2001, the company was founded with the objective
              of developing a world-class business capable of delivering
              appropriate, effective and customised solutions to its clients.
            </p>

            <p>
              Over the years, Muadifam has developed experience across property
              development and investment, property management and maintenance,
              transport management, supply chain and logistics, consultancy
              and other business activities.
            </p>

            <p className="mb-0">
              Today, Muadifam continues to build on its foundation of service
              excellence, client satisfaction and responsible business
              practice while contributing to Namibia's economic and business
              development.
            </p>
          </div>

          {/* KEY FACTS */}
          <div className="row g-3 mt-4">
            <div className="col-sm-4">
              <div className="border-start border-3 ps-3">
                <strong className="d-block fs-4">2001</strong>
                <span className="small text-muted">Established</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="border-start border-3 ps-3">
                <strong className="d-block fs-4">Namibian</strong>
                <span className="small text-muted">Proudly Local</span>
              </div>
            </div>

            <div className="col-sm-4">
              <div className="border-start border-3 ps-3">
                <strong className="d-block fs-4">20+</strong>
                <span className="small text-muted">Years of Experience</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* IMAGE */}
      <div className="col-lg-6">
        <FadeIn delayMs={120}>
          <div className="position-relative">
            <img
              src="/images/about/Established.jpg"
              alt="Muadifam Enterprises"
              className="img-fluid w-100 rounded"
            />

            {/* Image caption */}
            <div className="position-absolute bottom-0 start-0 m-3">
              <div className="bg-dark bg-opacity-75 text-white px-4 py-3 rounded">
                <small className="d-block text-uppercase">
                  Our Journey
                </small>
                <strong>Building Business Solutions Since 2001</strong>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

    </div>
  </div>
      </section>

      <section className="section section--dark">
      <div className="container-wide">

    <FadeIn>
      <div className="text-center mb-5">
        <span className="text-uppercase small fw-semibold">
          What Drives Us
        </span>

        <h2 className="mt-2 mb-3">
          Our Mission, Vision & Values
        </h2>

        <p className="mx-auto" style={{ maxWidth: "700px" }}>
          The principles that guide how we work, serve our clients and build
          long-term relationships.
        </p>
      </div>
    </FadeIn>

    <div className="row g-4">

      {/* MISSION */}
      <div className="col-lg-4">
        <FadeIn>
          <div className="value-item h-100">

            <div className="mb-4">
              <span className="fs-2">01</span>
            </div>

            <h3>Mission</h3>

            <p>
              To set new standards of service excellence and achieve customer
              satisfaction by delivering quality products and services, doing
              things right the first time, and developing solutions that
              respond effectively to our clients' needs.
            </p>

          </div>
        </FadeIn>
      </div>

      {/* VISION */}
      <div className="col-lg-4">
        <FadeIn delayMs={80}>
          <div className="value-item h-100">

            <div className="mb-4">
              <span className="fs-2">02</span>
            </div>

            <h3>Vision</h3>

            <p>
              To build a world-class business with a leading position in
              Namibia through products and services that are appropriate,
              effective and customised to meet clients' needs.
            </p>

          </div>
        </FadeIn>
      </div>

      {/* VALUES */}
      <div className="col-lg-4">
        <FadeIn delayMs={160}>
          <div className="value-item h-100">

            <div className="mb-4">
              <span className="fs-2">03</span>
            </div>

            <h3>Core Values</h3>

            <div className="mt-4">

              <div className="mb-3">
                <strong>TRUST</strong>
                <p className="mb-0">
                  Building relationships based on confidence and reliability.
                </p>
              </div>

              <div className="mb-3">
                <strong>INTEGRITY</strong>
                <p className="mb-0">
                  Conducting business responsibly and ethically.
                </p>
              </div>

              <div className="mb-3">
                <strong>CONSISTENCY</strong>
                <p className="mb-0">
                  Maintaining dependable standards across our work.
                </p>
              </div>

              <div>
                <strong>SERVICE DELIVERY</strong>
                <p className="mb-0">
                  Focused on quality, responsiveness and client satisfaction.
                </p>
              </div>

            </div>

          </div>
        </FadeIn>
      </div>

    </div>
  </div>
</section>

      {/* <section className="section section--soft">
        <div className="container-wide">
          <SectionHeading
            label="Our Approach"
            title="How we work"
            description="[Placeholder: replace with a description of Muadifam's working methodology and client engagement approach.]"
          />
        </div>
      </section> */}

      <section className="section section--soft">
  <div className="container-wide">

    <FadeIn>
      <div className="row align-items-end mb-5">
        <div className="col-lg-7">
          <SectionHeading
            label="Leadership"
            title="People Behind Muadifam"
            description="Our leadership brings together experience, professional expertise and a commitment to delivering meaningful results for our clients and partners."
          />
        </div>

        <div className="col-lg-4 ms-auto mt-4 mt-lg-0">
          <p className="mb-0">
            Guided by strong business principles, our team works across
            property, logistics, consultancy and related service sectors.
          </p>
        </div>
      </div>
    </FadeIn>

    <div className="row g-4">
      {[
        {
          image: "/images/about/Jeremia.jpg",
          name: "Dr Jeremia Lucas Muadinohamba",
          role: "Chief Executive Officer",
        },
        {
          image: "/images/about/Lydia.png",
          name: "Lydia Muadinohamba",
          role: "Project Manager",
        },
        {
          image: "/images/about/Martha.png",
          name: "Martha Nikodemus",
          role: "Manager",
        },
      ].map((person, index) => (
        <div className="col-md-4" key={person.name}>
          <FadeIn delayMs={index * 80}>

            <div className="position-relative overflow-hidden rounded">
              <div className="ratio ratio-1x1">
                <img
                  src={person.image}
                  alt={person.name}
                  className="img-fluid object-fit-cover"
                />
              </div>
            </div>

            <div className="pt-3">
              <span className="small text-uppercase">
                {person.role}
              </span>

              <h4 className="mt-1 mb-0">
                {person.name}
              </h4>
            </div>

          </FadeIn>
        </div>
      ))}
    </div>

  </div>
</section>

<CTASection  title="Let’s Build Something Meaningful"  ctaLabel="Talk to Us"  ctaTo="/contact"/>
</>
  )
}

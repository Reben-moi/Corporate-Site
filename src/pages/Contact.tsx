import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import ContactForm from '@/components/ContactForm'
import { siteInfo } from '@/data/site'

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact | Muadifam Enterprises"
        description="Get in touch with Muadifam Enterprises to discuss a property, logistics, project management or consulting requirement."
        path="/contact"
      />

      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Send a message and a member of the Muadifam team will get back to you."
      />

      <section className="section section--soft">
        <div className="container-wide">

          <div className="row g-5">

            <div className="col-lg-7">
              <ContactForm />
            </div>

            <div className="col-lg-5">

              <div className="contact-info-item">
                <h4>Address</h4>
                <p>
                  {siteInfo.address.line1}
                  <br />
                  {siteInfo.address.line2}
                  <br />
                  {siteInfo.address.city}, {siteInfo.address.country}
                </p>
              </div>

              <div className="contact-info-item">
                <h4>Email</h4>
                <p>
                  <a href={`mailto:${siteInfo.contact.email}`}>
                    {siteInfo.contact.email}
                  </a>
                </p>
              </div>

              <div className="contact-info-item">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${siteInfo.contact.phone}`}>
                    {siteInfo.contact.phone}
                  </a>
                </p>
              </div>

              <div className="contact-info-item">
                <h4>Office Hours</h4>
                <p className="mb-1">
                  {siteInfo.hours.mondayToThursday}
                </p>
                <p className="mb-0">
                  {siteInfo.hours.friday}
                </p>
              </div>

            </div>
          </div>

          {/* MAP */}
          <div className="mt-5">
            <div
              className="overflow-hidden rounded"
              style={{ height: '400px' }}
            >
              <iframe
                src="https://www.google.com/maps?q=75+Theo-Ben+Gurirab+Street,+Heinitzburg+Heights,+Luxury+Hill,+Windhoek,+Namibia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muadifam Enterprises location"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
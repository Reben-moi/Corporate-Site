import { siteInfo } from '@/data/site'
import Button from '@/components/Button'

import SectionHeading from '@/components/SectionHeading'
import FadeIn from '@/components/FadeIn'

export default function Intro() {
  return (
    <section className="section section--soft">
      <div className="container-wide">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <FadeIn>
              <SectionHeading
                label="Who We Are"
                title={`A Namibian company, established ${siteInfo.founded}`}
                description={siteInfo.description}
              />
              <Button to="/about" variant="outline-dark">
                About Muadifam
              </Button>
            </FadeIn>
          </div>
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
  )
}

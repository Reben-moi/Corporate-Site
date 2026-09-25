import { Link } from 'react-router-dom'
import { navLinks, siteInfo } from '@/data/site'
import { services } from '@/data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="row gy-4">
          <div className="col-lg-4 site-footer__brand">
            <strong>MUADIFAM ENTERPRISES</strong>
            <p className="mt-3">{siteInfo.description}</p>
          </div>

          <div className="col-6 col-lg-2">
            <h4>Navigate</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-6 col-lg-3">
            <h4>Services</h4>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link to="/services">{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-3">
            <h4>Contact</h4>
            <ul>
              <li>
                {siteInfo.address.line1}, {siteInfo.address.city}, {siteInfo.address.country}
              </li>
              <li>{siteInfo.contact.email}</li>
              <li>{siteInfo.contact.phone}</li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {year} Muadifam Enterprises. All rights reserved.</span>
          <div className="d-flex gap-3">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

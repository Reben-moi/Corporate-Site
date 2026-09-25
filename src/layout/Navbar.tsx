import { useState } from 'react'
import { Link, NavLink as RouterNavLink } from 'react-router-dom'
import { navLinks } from '@/data/site'
import { useScrolled } from '@/hooks/useScrolled'
import Button from '@/components/Button'

export default function Navbar() {
  const scrolled = useScrolled(80)
  const [open, setOpen] = useState(false)

  return (
    <header className={`site-navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container-wide site-navbar__inner">
        <Link to="/" className="site-navbar__brand" onClick={() => setOpen(false)}>
          <strong>MUADIFAM</strong>
          <small>Enterprises</small>
        </Link>

        <nav className="site-navbar__links" aria-label="Primary">
          {navLinks.map((link) => (
            <RouterNavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
              end={link.path === '/'}
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="site-navbar__cta">
          <Button to="/contact" variant="outline">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="site-navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="site-navbar__mobile" aria-label="Mobile">
          <div className="container-wide">
            {navLinks.map((link) => (
              <RouterNavLink key={link.path} to={link.path} onClick={() => setOpen(false)} end={link.path === '/'}>
                {link.label}
              </RouterNavLink>
            ))}
            <div className="mt-3">
              <Button to="/contact" variant="primary" onClick={() => setOpen(false)}>
                Get in Touch
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}

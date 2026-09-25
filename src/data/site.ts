import type { NavLink } from '@/types'

export const siteInfo = {
  name: 'Muadifam Enterprises',
  legalEntity: 'Muadifam Enterprises CC', 
  founded: 2001,
  tagline: 'Project Management & Business Solutions',
  description:
    'Muadifam Enterprises is a Namibian project management and business solutions company, established in 2001, providing services across property, logistics, project management, business consulting and strategic solutions.',
  address: {
    line1: '75 Theo-Ben Gurirab Street Heinitzburg Heights Luxury Hill',
    line2: 'Klein Windhoek',
    city: 'Windhoek',
    country: 'Namibia',
    
  },
 contact: {
  email: 'admin@mgroup.com.na',
  phone: '+264 61 259 128',
}, 
  hours: {
    mondayToThursday: 'Monday – Thursday, 08:00 – 17:00',
    friday: 'Friday, 08:00 – 14:30',
  },
  social: {
    linkedin: '', // TODO: add LinkedIn URL if available
    facebook: '', // TODO: add Facebook URL if available
  },
}

export const navLinks: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Industries', path: '/industries' },
  { label: 'Contact', path: '/contact' },
]

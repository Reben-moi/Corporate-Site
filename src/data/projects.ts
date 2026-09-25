import type { Project } from '@/types'

export const projects: Project[] = [
  {
    slug: 'office-of-the-prime-minister-soe-transformation',
    title: 'State-Owned Enterprises Governance Transformation',
    category: 'Business Consulting',
    location: 'Windhoek, Namibia',
    year: '2014–2015',
    description:
      'Muadifam Enterprises CC was engaged through the Office of the Prime Minister to support the transformation of the State-Owned Enterprises Governance Council into a Ministry of Public Enterprises. The assignment included a comprehensive desk study, stakeholder consultations and benchmarking visits to selected SADC countries.',
    image: '/images/projects/OPM.jpg',
    imageAlt:
      'Business consulting and public-sector transformation project in Namibia',
  },

  {
    slug: 'road-fund-administration-transport-services',
    title: 'Road Fund Administration Transport Services',
    category: 'Logistics',
    location: 'Katima Mulilo & Ngoma, Zambezi Region, Namibia',
    year: '2015–2017',
    description:
      'Muadifam Enterprises CC provided daily transport services for Road Fund Administration employees stationed at the Ngoma Cross Border Charge Office. The service included employee collection and drop-off between Katima Mulilo and the Ngoma Border Post, operating seven days a week for approximately 19 months.',
    image: '/images/projects/RFA.jpg',
    imageAlt:
      'Transport and logistics services supporting employees in the Zambezi Region',
  },

  {
    slug: 'namforce-strategic-planning',
    title: 'Namforce Strategic Planning',
    category: 'Business Consulting',
    location: 'Windhoek, Namibia',
    year: '2018',
    description:
      'Muadifam Enterprises CC worked with the Namforce Life Insurance Board and management on the development, monitoring and review of its strategic plan. The engagement included exploring new business opportunities and supporting the development of a customer service charter and service ethos.',
    image: '/images/projects/Namforce.jpg',
    imageAlt:
      'Strategic planning and business consulting engagement for Namforce Life Insurance',
  },

  {
    slug: 'namibia-civil-aviation-authority-annual-reports',
    title: 'NCAA Integrated Annual Reports',
    category: 'Project Management',
    location: 'Windhoek, Namibia',
    year: '2020–2023',
    description:
      'Muadifam Enterprises, in joint venture with Oye Creative Studios, was awarded a three-year contract through open national bidding for the compilation, design and printing of the Namibia Civil Aviation Authority Integrated Annual Reports. The engagement covered project management, compilation, editing, proofreading, creative direction, design, layout and photography.',
    image: '/images/projects/NCAA.jpg',
    imageAlt:
      'Integrated annual report project for the Namibia Civil Aviation Authority',
  },
]

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((project) => project.category))),
]
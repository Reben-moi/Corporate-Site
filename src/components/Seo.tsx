import { Helmet } from 'react-helmet-async'

interface SeoProps {
  title: string
  description: string
  path: string
}

const SITE_URL = 'https://www.muadifam.example' // TODO: replace with the real production domain

export default function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/images/og/muadifam-og.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

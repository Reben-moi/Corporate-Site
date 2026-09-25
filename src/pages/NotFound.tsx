import Seo from '@/components/Seo'
import Button from '@/components/Button'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found | Muadifam Enterprises"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <div className="container-wide not-found">
        <div className="section-label justify-content-center">404</div>
        <h1>Page not found</h1>
        <p className="mb-4">The page you\u2019re looking for doesn\u2019t exist or has moved.</p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </div>
    </>
  )
}

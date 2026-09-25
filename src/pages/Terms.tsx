import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'

export default function Terms() {
  return (
    <>
      <Seo
        title="Terms of Use | Muadifam Enterprises"
        description="Terms of use for the Muadifam Enterprises website."
        path="/terms"
      />
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <section className="section section--soft">
        <div className="container-wide" style={{ maxWidth: 760 }}>
          <p>
            [Placeholder: this page needs confirmed terms of use covering acceptable
            use of the website and intellectual property in its content before
            launch.]
          </p>
        </div>
      </section>
    </>
  )
}

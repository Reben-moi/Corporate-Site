import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Muadifam Enterprises"
        description="Privacy policy for Muadifam Enterprises."
        path="/privacy"
      />
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="section section--soft">
        <div className="container-wide" style={{ maxWidth: 760 }}>
          <p>
            [Placeholder: this page needs a confirmed privacy policy before launch,
            covering what information is collected through the contact form, how it
            is used and stored, and how a visitor can request its removal.]
          </p>
        </div>
      </section>
    </>
  )
}

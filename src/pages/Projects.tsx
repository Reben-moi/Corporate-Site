import { useMemo, useState } from 'react'
import Seo from '@/components/Seo'
import PageHeader from '@/components/PageHeader'
import ProjectItem from '@/components/ProjectItem'
import CTASection from '@/components/CTASection'
import FadeIn from '@/components/FadeIn'
import { projectCategories, projects } from '@/data/projects'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  return (
    <>
      <Seo
        title="Projects | Muadifam Enterprises"
        description="A portfolio of Muadifam Enterprises project work across property, logistics, project management and business consulting."
        path="/projects"
      />

      <PageHeader
        eyebrow="Our Work"
        title="Projects"
        description="Structured placeholder project data — to be replaced with confirmed Muadifam project details."
      />

      <section className="section section--soft">
        <div className="container-wide">
          <div className="d-flex flex-wrap gap-2 mb-5">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`btn-muadifam btn-muadifam--outline-dark ${
                  activeCategory === category ? 'active' : ''
                }`}
                style={
                  activeCategory === category
                    ? { background: 'var(--ink)', color: 'var(--white)' }
                    : undefined
                }
              >
                {category}
              </button>
            ))}
          </div>

          {filtered.map((project) => (
            <FadeIn key={project.slug}>
              <ProjectItem project={project} />
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection title="Have a project in mind?" ctaLabel="Talk to Us" ctaTo="/contact" />
    </>
  )
}

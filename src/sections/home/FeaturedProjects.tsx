import { projects } from '@/data/projects'
import SectionHeading from '@/components/SectionHeading'
import ProjectItem from '@/components/ProjectItem'
import Button from '@/components/Button'
import FadeIn from '@/components/FadeIn'

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3)

  return (
    <section className="section section--soft">
      <div className="container-wide">
        <SectionHeading
          label="Our Work"
          title="Featured Projects"
          description="A selection of recent project work. Full details are available on the Projects page."
        />
        {featured.map((project) => (
          <FadeIn key={project.slug}>
            <ProjectItem project={project} />
          </FadeIn>
        ))}
        <div className="mt-4">
          <Button to="/projects" variant="outline-dark">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}

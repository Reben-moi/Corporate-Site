import type { Project } from '@/types'

interface ProjectItemProps {
  project: Project
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="project-item">
      <div className="project-item__image">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
      </div>

      <div>
        <div className="project-item__meta">
          <span>{project.category}</span>
          <span>{project.location}</span>
          <span>{project.year}</span>
        </div>

        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>
    </div>
  )
}
function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className="tech-stack">
        <strong>Tech:</strong> {props.tech}
      </div>
    </div>
  )
}

export default ProjectCard
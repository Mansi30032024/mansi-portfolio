export default function ProjectCard({ title, desc, tech, github, live }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>

      <p><strong>Tech Stack:</strong> {tech}</p>

      <div className="project-links">
        <a href={github} target="_blank">GitHub</a>
        <a href={live} target="_blank">Live</a>
      </div>
    </div>
  );
}
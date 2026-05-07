export default function ProjectCard({ title, desc, tech, github, live }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{desc}</p>

      <p><strong>Tech Stack:</strong> {tech}</p>

      <div className="project-links">
       
         {github && (
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
      </div>
    </div>
  );
}
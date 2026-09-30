const projects = [
  {
    number: "01",
    title: "Clinical Trial Management System",
    description:
      "A full-stack clinical trial management platform for managing users, doctors, researchers, patients, trials, enrollment, data collection and reporting.",
    tech: ["React", "FastAPI", "MongoDB"],
    type: "Full Stack"
  },

  {
    number: "02",
    title: "FanCric",
    description:
      "A real-time cricket auction and squad management application with live scoring and leaderboard capabilities.",
    tech: ["React", "FastAPI", "MongoDB", "Redis"],
    type: "Real-Time Application"
  },

  {
    number: "03",
    title: "SmartSpend",
    description:
      "A personal finance application designed to help users track and understand their spending.",
    tech: ["React", "JavaScript", "Web APIs"],
    type: "Web Application"
  },

  {
    number: "04",
    title: "Shopping Cart Application",
    description:
      "An e-commerce style application demonstrating product management, cart functionality and frontend state handling.",
    tech: ["React", "Node.js", "MongoDB"],
    type: "Full Stack"
  },

  {
    number: "05",
    title: "Express CRUD Application",
    description:
      "A REST API based CRUD application demonstrating backend development using Node.js and Express.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    type: "Backend"
  },

  {
    number: "06",
    title: "Weather Application",
    description:
      "A responsive weather application that retrieves and displays weather information through an external API.",
    tech: ["React", "JavaScript", "REST API"],
    type: "Frontend"
  }
];

function Projects() {
  return (
    <section id="projects" className="section dark-section">

      <div className="section-header">
        <span>04</span>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <article className="project-card" key={project.number}>

            <div className="project-top">
              <span>{project.number}</span>
              <span>{project.type}</span>
            </div>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <button className="project-link">
              View Project →
            </button>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;
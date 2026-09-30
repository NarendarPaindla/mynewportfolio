const skillGroups = [
  {
    title: "Programming",
    skills: [
      "Java",
      "Python",
      "C",
      "JavaScript"
    ]
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "HTML",
      "CSS",
      "Vite",
      "React Router"
    ]
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Django",
      "Spring Boot"
    ]
  },
  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "Redis"
    ]
  },
  {
    title: "Development",
    skills: [
      "REST APIs",
      "JWT",
      "Docker",
      "Postman",
      "Git"
    ]
  },
  {
    title: "AI & Modern Tech",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "Agentic AI"
    ]
  }
];

function Skills() {
  return (
    <section id="skills" className="section dark-section">

      <div className="section-header">
        <span>02</span>
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
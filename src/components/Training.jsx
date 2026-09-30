const trainingAreas = [
  "Java Programming",
  "Python Programming",
  "C Programming",
  "Data Structures & Algorithms",
  "MERN Stack",
  "React.js",
  "Node.js & Express",
  "MongoDB",
  "FastAPI",
  "AI / ML",
  "Generative AI",
  "Agentic AI"
];

function Training() {
  return (
    <section id="training" className="section">

      <div className="section-header">
        <span>05</span>
        <h2>Training Expertise</h2>
      </div>

      <div className="training-container">

        <div className="training-intro">

          <h3>
            From fundamentals
            <br />
            to real-world projects.
          </h3>

          <p>
            My training approach combines programming fundamentals,
            problem solving, hands-on coding and project development
            to help learners transition from theory to practical
            software development.
          </p>

        </div>

        <div className="training-grid">

          {trainingAreas.map((area, index) => (
            <div className="training-item" key={area}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{area}</strong>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Training;